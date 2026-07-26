import React, { useMemo, useState } from 'react'
import { type TreeNodeType, type ProjectContent, safeParseProjectContent, ComponentDefinitions } from '@1000website/shared'
import ProjectPicker from './components/ProjectPicker'
import ComponentPalette from './components/ComponentPalette'
import MetadataPanel from './components/MetadataPanel'
import ProjectTreeEditor from './components/ProjectTreeEditor'
import InspectorPanel from './components/InspectorPanel'
import { type EditorTreeNode, type NodePath, getNodeAtPath, updateNodeAtPath, deleteNodeAtPath, insertNodeAtParent, moveNode } from './components/editorTree'
import styles from './App.module.css'
import {
  SquareArrowOutUpRight
} from 'lucide-react'

const jsonProjectModules = import.meta.glob('../../content/projects/*.json', { eager: true }) as Record<string, { default: unknown }>

const fileEntries = Object.entries(jsonProjectModules).map(([filePath, mod]) => {
  const name = filePath.replace(/^.*\/([^\/]+)$/, '$1')
  const parseResult = safeParseProjectContent(mod.default)
  return {
    path: filePath,
    name,
    content: parseResult.success ? parseResult.data : null,
    valid: parseResult.success,
    error: parseResult.success ? null : parseResult.error,
  }
})

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

  const selectedNode = useMemo(() => selectedPath ? getNodeAtPath(current.tree, selectedPath) : null, [current.tree, selectedPath])

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
          <SquareArrowOutUpRight size={16}/>
        </button>
      </header>

      <div className={styles.editorGrid}>
        <div className={styles.sidebar}>
          <ProjectPicker
            onCreateBlank={() => setCurrent({ metadata: initialMetadata, tree: [defaultRootNode] })}
            onLoadProjectFromFile={(project, label) => {
              setCurrent(project)
              setSelectedPath(null)
            }}
          />
          <MetadataPanel
            metadata={current.metadata}
            onChange={(metadata) => setCurrent((prev) => ({ ...prev, metadata }))}
          />
          <ComponentPalette definitions={ComponentDefinitions} onAddRoot={addRootNode} />
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
      </div>
    </div>
  )
}
