import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const snapshotDir = path.join(projectRoot, 'dist.snapshot')

function printResult(ok: boolean, message?: string): void {
  const color = ok ? '\x1b[32m' : '\x1b[31m'
  const label = ok ? 'Pass' : 'Failed'
  if (message) {
    console.log('');
    console.error(message);
    console.log('');
  }

  console.log('');
  console.log(`${color}${label}\x1b[0m`)
  console.log('');

  process.exit(ok ? 0 : 1)
}

type CompareError = string | null

const allowedExtensions = new Set(['.html', '.json'])
const normalizedExtensions = new Set(['.html', '.json'])

function addReplacement(mapping: Map<string, string>, fromPath: string, toPath: string): void {
  mapping.set(fromPath, toPath)
  mapping.set(`/${fromPath}`, `/${toPath}`)
  mapping.set(path.basename(fromPath), path.basename(toPath))
  mapping.set(`/${path.basename(fromPath)}`, `/${path.basename(toPath)}`)
}

function buildManifestMapping(manifest: Record<string, any>): Map<string, string> {
  const mapping = new Map<string, string>()

  for (const entryValue of Object.values(manifest)) {
    if (!entryValue || typeof entryValue !== 'object') continue

    const file = typeof entryValue.file === 'string' ? entryValue.file : undefined
    const cssFiles = Array.isArray(entryValue.css) ? entryValue.css.filter((item: any): item is string => typeof item === 'string') : []
    const name = typeof entryValue.name === 'string' ? entryValue.name : undefined

    if (file && name) {
      const ext = path.extname(file).toLowerCase()
      if (ext === '.js' || ext === '.css') {
        const stablePath = path.posix.join(path.posix.dirname(file), `${name}${ext}`)
        addReplacement(mapping, file, stablePath)
      }
    }

    for (const cssFile of cssFiles) {
      if (name) {
        const stableCss = path.posix.join(path.posix.dirname(cssFile), `${name}.css`)
        addReplacement(mapping, cssFile, stableCss)
      }
    }
  }

  return mapping
}

function loadManifestMapping(manifestPath: string): Map<string, string> {
  if (!fs.existsSync(manifestPath)) {
    return new Map()
  }
  try {
    const manifestText = fs.readFileSync(manifestPath, 'utf8')
    const manifest = JSON.parse(manifestText) as Record<string, any>
    return buildManifestMapping(manifest)
  } catch {
    return new Map()
  }
}

function normalizeContent(content: string, mapping: Map<string, string>): string {
  if (mapping.size === 0) {
    return content
  }

  const entries = Array.from(mapping.entries()).sort((a, b) => b[0].length - a[0].length)
  let normalized = content
  for (const [from, to] of entries) {
    normalized = normalized.split(from).join(to)
  }
  return normalized
}

function compareFiles(
  fileA: string,
  fileB: string,
  relativePath: string,
  mappingA: Map<string, string>,
  mappingB: Map<string, string>
): CompareError {
  const ext = path.extname(fileA).toLowerCase()
  if (normalizedExtensions.has(ext)) {
    const textA = normalizeContent(fs.readFileSync(fileA, 'utf8'), mappingA)
    const textB = normalizeContent(fs.readFileSync(fileB, 'utf8'), mappingB)
    if (textA !== textB) {
      return `Content mismatch: dist/${relativePath} vs dist.snapshot/${relativePath}`
    }
    return null
  }

  const statA = fs.statSync(fileA)
  const statB = fs.statSync(fileB)
  if (statA.size !== statB.size) {
    return `Size mismatch: dist/${relativePath} (${statA.size}b) vs dist.snapshot/${relativePath} (${statB.size}b)`
  }
  const bufferA = fs.readFileSync(fileA)
  const bufferB = fs.readFileSync(fileB)
  if (!bufferA.equals(bufferB)) {
    return `Content mismatch: dist/${relativePath} vs dist.snapshot/${relativePath}`
  }
  return null
}

function shouldIncludeEntry(entryPath: string): boolean {
  const stat = fs.statSync(entryPath)
  if (stat.isDirectory()) {
    return true
  }
  const ext = path.extname(entryPath).toLowerCase()
  return allowedExtensions.has(ext)
}

function canonicalizeRelativePath(relativePath: string, mapping: Map<string, string>): string {
  return mapping.get(relativePath) ?? relativePath
}

function buildEntryMap(dir: string, entries: string[], relativePath: string, mapping: Map<string, string>) {
  const entryMap = new Map<string, string[]>()

  for (const name of entries) {
    const fullPath = path.join(dir, name)
    if (!fs.existsSync(fullPath) || !shouldIncludeEntry(fullPath)) {
      continue
    }

    const canonicalRel = relativePath ? `${relativePath}/${name}` : name
    const canonical = canonicalizeRelativePath(canonicalRel, mapping)

    const current = entryMap.get(canonical)
    if (current) {
      current.push(name)
    } else {
      entryMap.set(canonical, [name])
    }
  }

  return entryMap
}

function compareDirs(
  dirA: string,
  dirB: string,
  relativePath = '',
  mappingA: Map<string, string>,
  mappingB: Map<string, string>
): CompareError[] {
  const entriesA = fs.readdirSync(dirA).sort()
  const entriesB = fs.readdirSync(dirB).sort()
  const entryMapA = buildEntryMap(dirA, entriesA, relativePath, mappingA)
  const entryMapB = buildEntryMap(dirB, entriesB, relativePath, mappingB)
  const names = new Set([...entryMapA.keys(), ...entryMapB.keys()])

  const result: CompareError[] = [];

  for (const canonicalName of names) {
    const actualA = entryMapA.get(canonicalName)
    const actualB = entryMapB.get(canonicalName)

    if (!actualA) {
      result.push(`Missing in dist: ${canonicalName}`)
      continue;
    }
    if (!actualB) {
      result.push(`Missing in dist.snapshot: ${canonicalName}`)
      continue;
    }

    if (actualA.length > 1) {
      result.push(`Multiple matches in dist for ${canonicalName}: ${actualA.join(', ')}`)
      continue;
    }
    if (actualB.length > 1) {
      result.push(`Multiple matches in dist.snapshot for ${canonicalName}: ${actualB.join(', ')}`)
      continue;
    }

    const nameA = actualA[0]
    const nameB = actualB[0]
    const pathA = path.join(dirA, nameA)
    const pathB = path.join(dirB, nameB)
    const rel = canonicalName

    const statA = fs.statSync(pathA)
    const statB = fs.statSync(pathB)
    if (statA.isDirectory() && statB.isDirectory()) {
      const error = compareDirs(pathA, pathB, rel, mappingA, mappingB)
      if (error) {
        for (const err of error) {
          result.push(err)
        }
      }
    } else if (statA.isFile() && statB.isFile()) {
      const error = compareFiles(pathA, pathB, rel, mappingA, mappingB)
      if (error) {
        result.push(`${rel}: ${error}`)
      }
    } else {
      result.push(`Type mismatch: ${rel}`)
      continue;
    }
  }

  return result;
}

console.log('')
console.log('Starting compare with snapshot...')

if (!fs.existsSync(distDir)) {
  printResult(false, `Directory not found: ${distDir}`)
}
if (!fs.existsSync(snapshotDir)) {
  printResult(false, `Directory not found: ${snapshotDir}`)
}

const distManifestPath = path.join(distDir, '.vite', 'manifest.json')
const snapshotManifestPath = path.join(snapshotDir, '.vite', 'manifest.json')
const distMapping = loadManifestMapping(distManifestPath)
const snapshotMapping = loadManifestMapping(snapshotManifestPath)

const error = compareDirs(distDir, snapshotDir, '', distMapping, snapshotMapping)
if (error && error.length > 0) {
  for (const err of error) {
    if (err)
      printResult(false, err);
  }
}

printResult(true)
