import { fileURLToPath } from 'url'
import path, { dirname, join, resolve } from 'path'
import fs from 'fs'
import { build, createServer, type Manifest, type ManifestChunk } from 'vite'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { type HelmetServerState } from 'react-helmet-async'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = resolve(__dirname, '..')
const outDir = join(projectRoot, 'dist')
const templatePath = join(projectRoot, 'template.html')
const manifestPath = join(outDir, '.vite', 'manifest.json')

function log(v: string) {
    console.log(`[SSG] ${v}`);
}

function ensureDist() {
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true })
    }
}

function getHtmlTemplate() {
    return fs.readFileSync(templatePath, 'utf8')
}

type HelmetContext = {
    helmet?: HelmetServerState
}

type RouteConfig = {
    path: string
    element: unknown
}

type AppModule = {
    default: React.ComponentType<any>
}

type RoutesModule = {
    routes: RouteConfig[]
}

function renderAssets(manifestEntry: ManifestChunk | null | undefined) {
    if (!manifestEntry) return { css: '', preload: '', script: '' }
    const css = (manifestEntry.css || [])
        .map((file) => `<link rel="stylesheet" href="/${file}" />`)
        .join('')
    const preload = (manifestEntry.imports || [])
        .map((file) => `<link rel="modulepreload" href="/${file}" />`)
        .join('')
    const script = manifestEntry.file
        ? `<script type="module" src="/${manifestEntry.file}"></script>`
        : ''
    return { css, preload, script }
}

function renderHead(helmet: HelmetServerState | {}) {
    const safeHelmet = helmet as HelmetServerState
    const title = safeHelmet.title?.toString() ?? ''
    const meta = safeHelmet.meta?.toString() ?? ''
    const link = safeHelmet.link?.toString() ?? ''
    const script = safeHelmet.script?.toString() ?? ''
    const other =
        `${safeHelmet.base?.toString() ?? ''}` +
        `${safeHelmet.style?.toString() ?? ''}` +
        `${safeHelmet.noscript?.toString() ?? ''}` +
        `${safeHelmet.htmlAttributes?.toString() ?? ''}` +
        `${safeHelmet.bodyAttributes?.toString() ?? ''}`
    return `${title}${meta}${link}${script}${other}`
}

async function main() {
    ensureDist()

    log('Building client assets...')
    await build({
        root: projectRoot,
        configFile: resolve(projectRoot, 'vite.config.ts'),
        build: {
            outDir,
            manifest: true,
            rollupOptions: {
                input: join(projectRoot, 'index.html'),
            },
        },
    })

    const template = getHtmlTemplate()
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))

    const server = await createServer({
        root: projectRoot,
        server: {
            middlewareMode: true,
        },
    })

    const appModule = await server.ssrLoadModule('/src/App') as AppModule
    const routesModule = await server.ssrLoadModule('/src/routes') as RoutesModule
    const App = appModule.default
    const { routes } = routesModule

    const routePaths = routes
        .map((route: RouteConfig) => route.path)
        .filter((path) => path !== '*')

    console.log('');
    log(`Start Generating...`)

    const totalRouteCount = routePaths.length;
    let currentRouteCount = 0;
    for (const routePath of routePaths) {
        const helmetContext: HelmetContext = {}
        const appHtml = ReactDOMServer.renderToString(
            React.createElement(App, {
                Router: StaticRouter,
                routerProps: { location: routePath },
                helmetContext,
            })
        )

        const helmet = helmetContext.helmet || {}
        const headHtml = renderHead(helmet)
        const manifestEntry = manifest['index.html']
        const { css, preload, script } = renderAssets(manifestEntry)

        let html = template
            .replace('{{app}}', appHtml)
            .replace('{{head}}', `${headHtml}${css}${preload}`)
            .replace('{{script}}', script)

        const outputPath = routePath === '/' ? join(outDir, 'index.html') : join(outDir, routePath.slice(1), 'index.html')
        fs.mkdirSync(dirname(outputPath), { recursive: true })
        fs.writeFileSync(outputPath, html, 'utf8')

        currentRouteCount++;
        log(`Generated (${currentRouteCount}/${totalRouteCount})\t${routePath}`)
    }

    await server.close();
    log(`SSG completed`)
    console.log('');
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
