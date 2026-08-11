import React, { useEffect, useMemo, useState } from 'react'
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

  const loadLocalProjects = async () => {
    setLoadingProjects(true)
    try {
      const response = await fetch('/api/projects')
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message ?? 'Failed to load project list.')
      }
      const data = await response.json() as Array<{ name: string }>
      setLocalProjects(data.map((item) => item.name))
    } catch (error) {
      console.error('Error loading local projects:', error)
    } finally {
      setLoadingProjects(false)
    }
  }

  useEffect(() => {
    void loadLocalProjects()
  }, [])

  const handleLoadProjectByName = async (name: string) => {
    setSaveStatus(null)
    try {
      const response = await fetch(`/api/projects/${encodeURIComponent(name)}`)
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message ?? 'Unable to load project')
      }
      const project = await response.json() as ProjectContent
      setCurrent(project)
      setCurrentProjectFileName(name)
      setSelectedPath(null)
    } catch (error) {
      console.error('Error loading project by name:', error)
    }
  }

  const handleSaveCurrentProject = async () => {
    setSaveStatus(null)
    const projectId = current.metadata.id || 'untitled-project'
    if (!/^[a-zA-Z0-9_-]+$/.test(projectId)) {
      setSaveStatus('Project ID must only include letters, numbers, hyphens, or underscores.')
      return
    }

    try {
      const saveFileName = currentProjectFileName ?? projectId
      const response = await fetch(`/api/projects/${encodeURIComponent(projectId)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ ...current, sourceFileName: saveFileName }),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message ?? 'Failed to save project')
      }
      setSaveSuccessMessage('Project saved successfully.')
      await loadLocalProjects()
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : String(error))
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
            onOpenProject={() => { setProjectPickerMode('open'); setIsProjectPickerOpen(true) }}
            onCreateNewProject={() => { setProjectPickerMode('create'); setIsProjectPickerOpen(true) }}
            onSaveProject={handleSaveCurrentProject}
            showSaveButton={isProjectOpen}
          />
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
          saveStatus={saveStatus}
          onClose={() => setIsProjectPickerOpen(false)}
          onRefreshProjects={loadLocalProjects}
          onLoadProjectByName={(name) => {
            void handleLoadProjectByName(name)
            setIsProjectPickerOpen(false)
          }}
          onLoadProjectFromFile={(project, label) => {
            setCurrent(project)
            setCurrentProjectFileName(label.replace(/\.json$/i, ''))
            setSelectedPath(null)
            setIsProjectPickerOpen(false)
          }}
        />
        <CreateNewProjectPicker
          isOpen={isProjectPickerOpen && projectPickerMode === 'create'}
          saveStatus={saveStatus}
          onClose={() => setIsProjectPickerOpen(false)}
          onCreateNewProject={(projectId) => {
            setCurrent({ metadata: { ...initialMetadata, id: projectId }, tree: [defaultRootNode] })
            setCurrentProjectFileName(projectId)
            setIsProjectPickerOpen(false)
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
