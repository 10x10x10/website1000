import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { basename, resolve, sep } from 'path'
import { z } from 'zod'

const rootDir = resolve(__dirname, '..')
const projectSrc = resolve(rootDir, 'src')
const contentDir = resolve(rootDir, 'content')

const TreeNodePrimitiveSchema = z.union([z.string(), z.number(), z.boolean(), z.null(), z.undefined()])

const ProjectMetadataSchema = z.object({
  id: z.string(),
  title: z.string(),
  order: z.number(),
  cover: z.string(),
  hover: z.string(),
  tags: z.array(z.string()),
})

const ProjectContentSchema = z.object({
  metadata: ProjectMetadataSchema,
  tree: z.array(z.union([z.record(z.string(), z.any()), TreeNodePrimitiveSchema])),
})

const ProjectContentSaveSchema = ProjectContentSchema.extend({
  sourceFileName: z.string().optional(),
})

function createProjectApiMiddleware() {
  const contentProjectsDir = resolve(rootDir, 'content/projects')
  const apiPrefix = '/api/projects'

  const normalizeProjectName = (value: string) => {
    const name = value.trim()
    if (!name || name !== basename(name)) {
      return null
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
      return null
    }

    return name
  }

  const getProjectFilePath = (name: string) => resolve(contentProjectsDir, `${name}.json`)

  const readRequestBody = async (req: import('http').IncomingMessage) => {
    const chunks: Buffer[] = []
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    const text = Buffer.concat(chunks).toString('utf-8')
    if (!text) {
      throw new Error('Empty body')
    }
    return JSON.parse(text)
  }

  const sendJson = (res: import('http').ServerResponse, status: number, value: unknown) => {
    const body = JSON.stringify(value)
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf-8'))
    res.end(body)
  }

  return async (req: import('http').IncomingMessage, res: import('http').ServerResponse, next: () => void) => {
    const requestUrl = req.url || ''
    const url = new URL(requestUrl, 'http://localhost')

    if (!url.pathname.startsWith(apiPrefix)) {
      return next()
    }

    const tail = url.pathname.slice(apiPrefix.length).replace(/^\/|\/$/g, '')
    const pathParts = tail ? tail.split('/') : []

    const sendError = (status: number, message: string) => sendJson(res, status, { message })

    try {
      if (req.method === 'GET' && pathParts.length === 0) {
        const entries = await fs.promises.readdir(contentProjectsDir, { withFileTypes: true }).catch((error) => {
          if (error.code === 'ENOENT') {
            return [] as fs.Dirent[]
          }
          throw error
        })
        const files = entries
          .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
          .map((entry) => entry.name.replace(/\.json$/, ''))
          .sort()
        return sendJson(res, 200, files.map((name) => ({ name })))
      }

      if (pathParts.length !== 1) {
        return sendError(404, 'Not found')
      }

      const projectName = normalizeProjectName(pathParts[0])
      if (!projectName) {
        return sendError(400, 'Invalid project name')
      }

      const projectPath = getProjectFilePath(projectName)
      if (!projectPath.startsWith(`${contentProjectsDir}${sep}`)) {
        return sendError(403, 'Forbidden')
      }

      if (req.method === 'GET') {
        const file = await fs.promises.readFile(projectPath, 'utf-8').catch((error) => {
          if (error.code === 'ENOENT') {
            return null
          }
          throw error
        })

        if (file === null) {
          return sendError(404, 'Project not found')
        }

        try {
          const parsed = JSON.parse(file)
          const validation = ProjectContentSchema.safeParse(parsed)
          if (!validation.success) {
            return sendError(500, 'Invalid project content on disk')
          }
          return sendJson(res, 200, validation.data)
        } catch {
          return sendError(500, 'Unable to parse project file')
        }
      }

      if (req.method === 'PUT') {
        let body: unknown
        try {
          body = await readRequestBody(req)
        } catch (error) {
          return sendError(400, error instanceof Error ? error.message : 'Invalid request body')
        }

        const validation = ProjectContentSaveSchema.safeParse(body)
        if (!validation.success) {
          return sendError(400, 'Invalid project JSON')
        }

        const saveFileName = validation.data.sourceFileName ? normalizeProjectName(validation.data.sourceFileName) : projectName
        if (!saveFileName) {
          return sendError(400, 'Invalid source file name')
        }

        const savePath = getProjectFilePath(saveFileName)
        if (!savePath.startsWith(`${contentProjectsDir}${sep}`)) {
          return sendError(403, 'Forbidden')
        }

        const { sourceFileName, ...projectContent } = validation.data
        await fs.promises.mkdir(contentProjectsDir, { recursive: true })
        await fs.promises.writeFile(savePath, JSON.stringify(projectContent, null, 2), 'utf-8')
        return sendJson(res, 200, { message: 'Saved' })
      }

      return sendError(405, 'Method not allowed')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Internal server error'
      return sendError(500, message)
    }
  }
}

const projectApiPlugin = {
  name: 'project-api-plugin',
  configureServer(server: { middlewares: import('connect').Server }) {
    server.middlewares.use(createProjectApiMiddleware())
  },
}

export default defineConfig({
  plugins: [react(), projectApiPlugin],
  server: {
    host: 'localhost',
    port: 5175,
    fs: {
      allow: [rootDir, projectSrc, contentDir],
    },
  },
  resolve: {
    alias: [
      { find: '@shared', replacement: resolve(rootDir, 'shared/src') },
      { find: '@editor', replacement: resolve(__dirname, 'src') },
    ],
  },
})
