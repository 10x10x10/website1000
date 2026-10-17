import React, { useEffect, useRef, useState } from 'react'
import { safeParseProjectContent, type ProjectContent } from '@1000website/shared'
import { File, RefreshCw } from 'lucide-react'
import ProjectPickerModal from './ProjectPickerModal'
import compStyles from './Component.module.css'
import styles from './ProjectLoader.module.css'

type Props = {
  isOpen: boolean
  localProjects: string[]
  loadingProjects: boolean
  operationError: string | null
  loadingProject: boolean
  onClose: () => void
  onRefreshProjects: () => Promise<void>
  onClearError: () => void
  onLoadProjectByName: (name: string) => Promise<void>
  onLoadProjectFromFile: (project: ProjectContent, sourceFileName: string) => Promise<void>
}

export default function OpenProjectPicker({
  isOpen,
  localProjects,
  loadingProjects,
  operationError,
  loadingProject,
  onClose,
  onRefreshProjects,
  onClearError,
  onLoadProjectByName,
  onLoadProjectFromFile,
}: Props) {
  const [browseError, setBrowseError] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const [pendingImport, setPendingImport] = useState<ProjectContent | null>(null)
  const [fileName, setFileName] = useState('')
  const importVersion = useRef(0)
  const importLock = useRef(false)
  const busy = importing || loadingProject

  useEffect(() => {
    setBrowseError(null)
    setPendingImport(null)
    setImporting(false)
    importLock.current = false
    importVersion.current += 1
    return () => { importVersion.current += 1 }
  }, [isOpen])

  const importFile = async (file: File | undefined) => {
    if (!file || importLock.current || loadingProject) return
    importLock.current = true
    const version = ++importVersion.current
    setImporting(true)
    setBrowseError(null)
    onClearError()
    setPendingImport(null)
    try {
      const validation = safeParseProjectContent(JSON.parse(await file.text()))
      if (version !== importVersion.current) return
      if (!validation.success) {
        throw new Error(validation.error.issues.map((issue) =>
          `${issue.path.join('.') || 'project'}: ${issue.message}`).join('\n'))
      }
      const name = file.name.replace(/\.json$/i, '')
      if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
        setPendingImport(validation.data)
        setFileName(name)
      } else {
        await onLoadProjectFromFile(validation.data, name)
      }
    } catch (error) {
      if (version === importVersion.current) {
        setBrowseError(error instanceof Error ? error.message : String(error))
      }
    } finally {
      if (version === importVersion.current) {
        importLock.current = false
        setImporting(false)
      }
    }
  }

  const confirmFileName = async () => {
    if (!pendingImport || importLock.current || loadingProject) return
    if (!/^[a-zA-Z0-9_-]+$/.test(fileName)) {
      setBrowseError('Project file name can only contain letters, numbers, hyphens, and underscores.')
      return
    }
    importLock.current = true
    setImporting(true)
    setBrowseError(null)
    try {
      await onLoadProjectFromFile(pendingImport, fileName)
      setPendingImport(null)
    } catch (error) {
      setBrowseError(error instanceof Error ? error.message : String(error))
    } finally {
      importLock.current = false
      setImporting(false)
    }
  }

  return (
    <ProjectPickerModal
      isOpen={isOpen}
      title="Open Project"
      onClose={onClose}
      errorMessage={browseError || operationError}
    >
      <div className={compStyles.sectionHeader}>
        <strong>Local Projects</strong>
        <button type="button" aria-label="Refresh projects" disabled={loadingProjects || busy} onClick={() => { setBrowseError(null); void onRefreshProjects() }} className={compStyles.button}>
          <RefreshCw size={16} />
        </button>
      </div>
      <div className={compStyles.sectionBody}>
        <label>
          Import project JSON
          <input type="file" accept=".json" disabled={busy || pendingImport !== null} onChange={(event) => {
            const file = event.currentTarget.files?.[0]
            event.currentTarget.value = ''
            void importFile(file)
          }} />
        </label>
        {importing && <div role="status">Importing project…</div>}
        {loadingProject && <div role="status">Opening project…</div>}
        {pendingImport && <div>
          <label htmlFor="import-file-name">File name to save (letters, numbers, hyphens, underscores)</label>
          <input id="import-file-name" value={fileName} disabled={busy} onChange={(event) => setFileName(event.target.value)} />
          <button type="button" className={compStyles.button} disabled={busy} onClick={() => void confirmFileName()}>Import</button>
          <button type="button" className={compStyles.button} disabled={busy} onClick={() => { setPendingImport(null); setBrowseError(null) }}>Cancel import</button>
        </div>}
      </div>
      <div className={styles.fileList}>
        {loadingProjects ? (
          <div>Loading projects…</div>
        ) : localProjects.length === 0 ? (
          <div>No local project JSON files found.</div>
        ) : (
          localProjects.map((name) => (
            <button
              key={name}
              type="button"
              className={styles.fileButton}
              disabled={busy || pendingImport !== null}
              onClick={() => { setBrowseError(null); void onLoadProjectByName(name) }}
            >
              <File size={16} className={styles.fileIcon} style={{ marginRight: 8 }} />
              {name}
            </button>
          ))
        )}
      </div>
    </ProjectPickerModal>
  )
}
