import React, { useEffect, useMemo, useRef, useState } from 'react'
import { type TreeNodeType, type ProjectContent, ComponentDefinitions } from '@1000website/shared'
import OpenProjectPicker from './components/OpenProjectPicker'
import CreateNewProjectPicker from './components/CreateNewProjectPicker'
import ProjectPickerModal from './components/ProjectPickerModal'
import ProjectPanel from './components/ProjectPanel'
import ComponentPalette from './components/ComponentPalette'
import MetadataPanel from './components/MetadataPanel'
import ProjectTreeEditor from './components/ProjectTreeEditor'
import InspectorPanel from './components/InspectorPanel'
import { type EditorTreeNode, type NodePath, getNodeAtPath, updateNodeAtPath, deleteNodeAtPath, insertNodeAtParent, moveNode } from './components/editorTree'
import styles from './App.module.css'
import {
  SquareArrowOutUpRight
} from 'lucide-react'

const initialMetadata: ProjectContent['metadata'] = {
  id: 'untitled-project',
  title: 'Untitled Project',
  order: 0,
  cover: '',
  hover: '',
  tags: ['default'],
}

const defaultRootNode = { type: 'Section' as const, children: [] }

function createEmptyNode(type: TreeNodeType): EditorTreeNode {
  return {
    type,
    props: {},
  }
}

export default function App() {

  const [current, setCurrent] = useState<ProjectContent>({ metadata: initialMetadata, tree: [defaultRootNode] })
  const [selectedPath, setSelectedPath] = useState<NodePath | null>(null)
  const [currentProjectFileName, setCurrentProjectFileName] = useState<string | null>(null)
  const [localProjects, setLocalProjects] = useState<string[]>([])
  const [loadingProjects, setLoadingProjects] = useState(false)
  const [operationError, setOperationError] = useState<string | null>(null)
  const [listError, setListError] = useState<string | null>(null)
  const [loadingProject, setLoadingProject] = useState(false)
  const [saving, setSaving] = useState(false)
  const [needsOverwriteCheck, setNeedsOverwriteCheck] = useState(false)
  const loadVersion = useRef(0)
  const listVersion = useRef(0)
  const loadLock = useRef(false)
  const saveLock = useRef(false)
  const [saveStatus, setSaveStatus] = useState<string | null>(null)
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null)
  const [isProjectPickerOpen, setIsProjectPickerOpen] = useState(false)
  const [projectPickerMode, setProjectPickerMode] = useState<'open' | 'create'>('open')

  const selectedNode = useMemo(() => selectedPath ? getNodeAtPath(current.tree, selectedPath) : null, [current.tree, selectedPath])
  const isProjectOpen = currentProjectFileName !== null

  const addRootNode = (type: TreeNodeType) => {
    setCurrent((prev) => ({ ...prev, tree: [...prev.tree, createEmptyNode(type)] }))
  }

  const handleUpdateNode = (path: NodePath, node: EditorTreeNode) => {
    setCurrent((prev) => ({ ...prev, tree: updateNodeAtPath(prev.tree, path, () => node) }))
  }

  const handleDeleteNode = (path: NodePath) => {
    setCurrent((prev) => ({ ...prev, tree: deleteNodeAtPath(prev.tree, path) }))
    setSelectedPath(null)
  }

  const readLocalProjects = async () => {
    const response = await fetch('/api/projects')
    if (!response.ok) {
      const payload = await response.json().catch(() => null)
      throw new Error(payload?.message ?? 'Failed to load project list.')
    }
    const data = await response.json() as Array<{ name: string }>
    return data.map((item) => item.name)
  }

  const loadLocalProjects = async () => {
    const version = ++listVersion.current
    setLoadingProjects(true)
    setListError(null)
    try {
      const names = await readLocalProjects()
      if (version === listVersion.current) setLocalProjects(names)
    } catch (error) {
      console.error('Error loading local projects:', error)
      if (version === listVersion.current) setListError(error instanceof Error ? error.message : String(error))
    } finally {
      if (version === listVersion.current) setLoadingProjects(false)
    }
  }

  useEffect(() => {
    void loadLocalProjects()
    return () => { listVersion.current += 1; loadVersion.current += 1 }
  }, [])

  const closeProjectPicker = () => {
    loadVersion.current += 1
    loadLock.current = false
    setLoadingProject(false)
    setIsProjectPickerOpen(false)
  }

  const replaceProject = (project: ProjectContent, name: string, checkOverwrite: boolean) => {
    setCurrent(project)
    setCurrentProjectFileName(name)
    setSelectedPath(null)
    setNeedsOverwriteCheck(checkOverwrite)
    setSaveStatus(null)
    setSaveSuccessMessage(null)
    setOperationError(null)
    closeProjectPicker()
  }

  const handleLoadProjectByName = async (name: string) => {
    if (loadLock.current || saveLock.current) return
    loadLock.current = true
    const version = ++loadVersion.current
    setLoadingProject(true)
    setOperationError(null)
    try {
      const response = await fetch(`/api/projects/${encodeURIComponent(name)}`)
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message ?? 'Unable to load project')
      }
      const project = await response.json() as ProjectContent
      if (version === loadVersion.current) replaceProject(project, name, false)
    } catch (error) {
      console.error('Error loading project by name:', error)
      if (version === loadVersion.current) setOperationError(error instanceof Error ? error.message : String(error))
    } finally {
      if (version === loadVersion.current) {
        loadLock.current = false
        setLoadingProject(false)
      }
    }
  }

  const handleSaveCurrentProject = async () => {
    if (saveLock.current) return
    setSaveStatus(null)
    setSaveSuccessMessage(null)
    const projectId = current.metadata.id || 'untitled-project'
    if (!/^[a-zA-Z0-9_-]+$/.test(projectId)) {
      setSaveStatus('Project ID must only include letters, numbers, hyphens, or underscores.')
      return
    }
    saveLock.current = true
    setSaving(true)
    try {
      const saveFileName = currentProjectFileName ?? projectId
      if (needsOverwriteCheck) {
        // Refresh at save time so an old picker list cannot bypass confirmation.
        const names = await readLocalProjects()
        if (names.includes(saveFileName) && !window.confirm(`Overwrite ${saveFileName}.json?`)) return
      }
      const response = await fetch(`/api/projects/${encodeURIComponent(projectId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ ...current, sourceFileName: saveFileName }),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message ?? 'Failed to save project')
      }
      setNeedsOverwriteCheck(false)
      setSaveSuccessMessage('Project saved successfully.')
      await loadLocalProjects()
    } catch (error) {
      console.error('Error saving project:', error)
      setSaveStatus(error instanceof Error ? error.message : String(error))
    } finally {
      saveLock.current = false
      setSaving(false)
    }
  }

  const exportJson = () => {
    const json = JSON.stringify(current, null, 2)
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${current.metadata.id || 'project-editor'}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Page Editor</h1>
        </div>
        <button type="button" onClick={exportJson} className={styles.exportButton}>
          Export
          <SquareArrowOutUpRight size={16} />
        </button>
      </header>

      <div className={styles.editorGrid}>
        <div className={styles.sidebar}>
          <ProjectPanel
            onOpenProject={() => { setOperationError(null); setProjectPickerMode('open'); setIsProjectPickerOpen(true) }}
            onCreateNewProject={() => { setProjectPickerMode('create'); setIsProjectPickerOpen(true) }}
            onSaveProject={handleSaveCurrentProject}
            showSaveButton={isProjectOpen}
            saving={saving}
          />
          {saveStatus && <div role="alert">{saveStatus} Use Save Project to retry.</div>}
          {saving && <div role="status">Saving project…</div>}
          {isProjectOpen && (
            <MetadataPanel
              metadata={current.metadata}
              onChange={(metadata) => setCurrent((prev) => ({ ...prev, metadata }))}
            />
          )}
          {isProjectOpen && (
            <ComponentPalette definitions={ComponentDefinitions} onAddRoot={addRootNode} />
          )}
        </div>

        <ProjectTreeEditor
          tree={current.tree}
          selectedPath={selectedPath}
          onSelect={setSelectedPath}
          onTreeChange={(tree) => setCurrent((prev) => ({ ...prev, tree }))}
        />

        <div className={styles.inspectorWrapper}>
          <InspectorPanel selectedNode={selectedNode} selectedPath={selectedPath} definitions={ComponentDefinitions} onUpdateNode={handleUpdateNode} onDeleteNode={handleDeleteNode} />
        </div>

        <OpenProjectPicker
          isOpen={isProjectPickerOpen && projectPickerMode === 'open'}
          localProjects={localProjects}
          loadingProjects={loadingProjects}
          operationError={operationError || listError}
          loadingProject={loadingProject}
          onClearError={() => setOperationError(null)}
          onClose={closeProjectPicker}
          onRefreshProjects={loadLocalProjects}
          onLoadProjectByName={handleLoadProjectByName}
          onLoadProjectFromFile={async (project, name) => {
            replaceProject(project, name, true)
          }}
        />
        <CreateNewProjectPicker
          isOpen={isProjectPickerOpen && projectPickerMode === 'create'}
          saveStatus={saveStatus}
          onClose={() => setIsProjectPickerOpen(false)}
          onCreateNewProject={(projectId) => {
            replaceProject({ metadata: { ...initialMetadata, id: projectId }, tree: [defaultRootNode] }, projectId, true)
          }}
        />
        <ProjectPickerModal
          isOpen={saveSuccessMessage !== null}
          title="Success"
          onClose={() => setSaveSuccessMessage(null)}
          statusMessage={saveSuccessMessage}
        />
      </div>
    </div>
  )
}
