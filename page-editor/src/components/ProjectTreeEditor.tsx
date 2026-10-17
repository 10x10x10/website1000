import React, { useEffect, useState } from 'react'
import type { EditorTreeNode, NodePath } from './editorTree'
import { getNodeAtPath, moveNode } from './editorTree'
import { isTreeNode } from './treeUtils'
import { ComponentDefinitions } from '@1000website/shared'
import { getComponentPropDefinitions, validateComponentProps } from '../lib/componentProps'
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core'
import styles from './ProjectTreeEditor.module.css'
import { iconMap } from './iconMap';
import {
  AlignJustify,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'
import type { InspectorComponentProps } from '@1000website/shared';

const AlignJustifyIcon = AlignJustify as unknown as React.ComponentType<{ size: number; color: string }>;
const ChevronRightIcon = ChevronRight as unknown as React.ComponentType<{ size: number; color: string }>;
const ChevronDownIcon = ChevronDown as unknown as React.ComponentType<{ size: number; color: string }>;

type Props = {
  tree: EditorTreeNode[]
  selectedPath: NodePath | null
  onSelect: (path: NodePath | null) => void
  onTreeChange: (tree: EditorTreeNode[]) => void
}

type DropTargetType = 'before' | 'after' | 'inside' | 'root'

type ExpandedMap = Record<string, boolean>

const draggableId = (path: NodePath) => `drag-${path.join(',')}`
const dropzoneId = (type: DropTargetType, path: NodePath) => {
  if (type === 'root') return 'drop-root'
  return `${type}-${path.join(',')}`
}

const parseDropzoneId = (id: string): { type: DropTargetType; path: NodePath } => {
  if (id === 'drop-root') return { type: 'root', path: [] }
  if (id.startsWith('before-')) return { type: 'before', path: id.replace(/^before-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x)) }
  if (id.startsWith('after-')) return { type: 'after', path: id.replace(/^after-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x)) }
  if (id.startsWith('inside-')) return { type: 'inside', path: id.replace(/^inside-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x)) }
  return { type: 'root', path: [] }
}

const dropPathForTarget = (tree: EditorTreeNode[], target: { type: DropTargetType; path: NodePath }): NodePath => {
  if (target.type === 'root') {
    return [tree.length]
  }

  if (target.type === 'before') {
    return target.path
  }

  if (target.type === 'after') {
    const parentPath = target.path.slice(0, -1)
    return [...parentPath, target.path[target.path.length - 1] + 1]
  }

  const targetNode = getNodeAtPath(tree, target.path)
  if (target.type === 'inside' && targetNode && isTreeNode(targetNode) && canContainChildren(targetNode)) {
    const children = targetNode.children ?? []
    return [...target.path, children.length]
  }

  const parentPath = target.path.slice(0, -1)
  return [...parentPath, target.path[target.path.length - 1] + 1]
}

const canContainChildren = (node: EditorTreeNode): boolean => {
  if (!isTreeNode(node)) return false
  const def = ComponentDefinitions[node.type as keyof typeof ComponentDefinitions]
  return Array.isArray(def?.allowChildren) && def.allowChildren.length > 0
}

const isDescendantPath = (descendant: NodePath, ancestor: NodePath) => {
  if (ancestor.length >= descendant.length) return false
  return ancestor.every((value, index) => descendant[index] === value)
}

function TreeDropZone({ path, position, overId }: { path: NodePath; position: 'before' | 'after'; overId: string | null }) {
  const id = dropzoneId(position, path)
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={styles.dropZone}
      style={{ background: isOver ? 'rgba(52, 211, 153, 0.25)' : 'transparent' }}
    />
  )
}

function TreeNodeItem(
  { node, path, selectedPath, onSelect, onDropTarget, activeId, overId, expandedPaths, toggleExpanded }: {
    node: EditorTreeNode
    path: NodePath
    selectedPath: NodePath | null
    onSelect: (path: NodePath) => void
    onDropTarget: (path: NodePath, type: DropTargetType) => void
    activeId: string | null
    overId: string | null
    expandedPaths: ExpandedMap
    toggleExpanded: (path: NodePath) => void
  },
) {
  const id = draggableId(path)
  const { attributes, listeners, setNodeRef: setDragHandleRef, transform, isDragging } = useDraggable({ id })
  const insideId = dropzoneId('inside', path)
  const isContainer = isTreeNode(node) && canContainChildren(node)
  const { setNodeRef: setInsideRef, isOver: isOverInside } = useDroppable({ id: insideId, disabled: !isContainer })

  const nodeClasses = [
    styles.nodeContainer,
    isDragging ? styles.nodeContainerDragging : '',
    isOverInside ? styles.nodeOver : '',
    !isOverInside && selectedPath?.length === path.length && selectedPath.every((value, index) => value === path[index]) ? styles.nodeSelected : '',
  ].filter(Boolean).join(' ')

  const handleClasses = styles.dragHandle

  const propDefinitions = isTreeNode(node)
    ? getComponentPropDefinitions(ComponentDefinitions[node.type as keyof typeof ComponentDefinitions])
    : []
  const validation = isTreeNode(node)
    ? validateComponentProps(ComponentDefinitions[node.type as keyof typeof ComponentDefinitions], node.props ?? {})
    : undefined

  useEffect(() => {
    if (validation && !validation.success) {
      console.error(`Invalid props for ${isTreeNode(node) ? node.type : 'unknown'}:`, validation.error.issues)
    }
  }, [node, validation])


  if (!node) {
    return (<p>node is null</p>)
  }

  const Icon = isTreeNode(node) ? iconMap[node.type] : null
  const EditorComponent = isTreeNode(node)
    ? (ComponentDefinitions[node.type].editorComponent as React.ComponentType<InspectorComponentProps<any, any>> | undefined)
    : undefined
  const hasEditor = Boolean(EditorComponent)
  const nodeKey = path.join(',')
  const isExpanded = expandedPaths[nodeKey] ?? true

  const meta = isExpanded && isTreeNode(node) && node.props && typeof node.props === 'object' && Object.keys(node.props).length > 0
    ? validation?.success ? (
      <div className={styles.propsList}>
        {hasEditor && EditorComponent ? (
          isExpanded ? (
            <EditorComponent
              node={node as any}
              onChangeProps={() => {}}
            />
          ) : null
        ) : (
          Object.entries(node.props as Record<string, unknown>).map(([key, value]) => {
            const propDefinition = propDefinitions.find((item) => item.name === key)
            return (
              <div key={key} className={styles.propItem}>
                <span className={styles.propName}>
                  {key}
                  {propDefinition ? (
                    <span className={styles.propType}>
                      {propDefinition.type}
                    </span>
                  ) : null}
                </span>
                <span className={styles.propValue}>
                  {JSON.stringify(value, null, 4)}
                </span>
              </div>
            )
          })
        )}
      </div>
    ) : (
      <div className={styles.invalidBox}>
        <div className={styles.invalidTitle}>Invalid props</div>
        {validation?.error?.issues.map((issue, index: number) => (
          <div key={index} className={styles.invalidIssue}>
            <strong>{Array.isArray(issue.path) && issue.path.length > 0 ? issue.path.join('.') : '(root)'}</strong>: {String(issue.message)}
          </div>
        ))}
      </div>
    )
    : (null);


  return (
    <div className={styles.nodeWrapper}>
      <div ref={setInsideRef} className={styles.nodeContentWrapper}>
        <div
          className={nodeClasses}
          onClick={() => onSelect(path)}
        >
          <div className={styles.nodeHeader}>
            <div className={styles.nodeHeaderLeft}>
              <div ref={setDragHandleRef} className={handleClasses} {...attributes} {...listeners}>
                <AlignJustifyIcon size={12} color={"#666"} />
              </div>
              {Icon ? <Icon size={16} color={"#999"} /> : null}
              <div className={styles.nodeTitle}>{isTreeNode(node) ? node.type : String(node)}</div>
            </div>
            {hasEditor ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  toggleExpanded(path)
                }}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#fff',
                  borderRadius: 6,
                  padding: '4px',
                  cursor: 'pointer',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {isExpanded ? (
                  <ChevronDownIcon size={16} color="#fff" />
                ) : (
                  <ChevronRightIcon size={16} color="#fff" />
                )}
              </button>
            ) : null}
          </div>
          {meta ? (
            <div className={styles.nodeMeta}>
              {meta}
            </div>
          ) : null}
          {/* {isContainer
            ? (<div className={styles.dropInsideTip}>
              Drop inside to append children
            </div>)
            : null} */}
        </div>
      </div>
      {isContainer ? null : <TreeDropZone path={path} position="after" overId={overId} />}
      {isTreeNode(node) && node.children ? (
        <div className={styles.childListContainer}>
          <TreeList
            items={node.children}
            basePath={path}
            selectedPath={selectedPath}
            onSelect={onSelect}
            onDropTarget={onDropTarget}
            activeId={activeId}
            overId={overId}
            expandedPaths={expandedPaths}
            toggleExpanded={toggleExpanded}
          />
        </div>
      ) : null}
    </div>
  )
}

function TreeList(
  { items, basePath, selectedPath, onSelect, onDropTarget, activeId, overId, expandedPaths, toggleExpanded }: {
    items: EditorTreeNode[]
    basePath: NodePath
    selectedPath: NodePath | null
    onSelect: (path: NodePath) => void
    onDropTarget: (path: NodePath, type: DropTargetType) => void
    activeId: string | null
    overId: string | null
    expandedPaths: ExpandedMap
    toggleExpanded: (path: NodePath) => void
  },
) {
  return (
    <>
      {items.map((node, index) => {
        const path = [...basePath, index]
        return (
          <TreeNodeItem
            key={path.join(',')}
            node={node}
            path={path}
            selectedPath={selectedPath}
            onSelect={onSelect}
            onDropTarget={onDropTarget}
            activeId={activeId}
            overId={overId}
            expandedPaths={expandedPaths}
            toggleExpanded={toggleExpanded}
          />
        )
      })}
    </>
  )
}

function RootDropZone({ overId }: { overId: string | null }) {
  const { setNodeRef, isOver } = useDroppable({ id: dropzoneId('root', []) })

  return (
    <div ref={setNodeRef} className={styles.rootDropZone} style={{ background: isOver ? '#1f344d' : 'transparent' }}>
      Drop here to append to root
    </div>
  )
}

export default function ProjectTreeEditor({ tree, selectedPath, onSelect, onTreeChange }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [overId, setOverId] = useState<string | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id.toString())
  }

  const handleDragOver = (event: DragOverEvent) => {
    setOverId(event.over?.id?.toString() ?? null)
  }

  const commitMove = (sourcePath: NodePath, target: { type: DropTargetType; path: NodePath }) => {
    if (target.type === 'inside') {
      const targetNode = getNodeAtPath(tree, target.path)
      if (!canContainChildren(targetNode)) return
    }
    const destination = dropPathForTarget(tree, target)
    if (isDescendantPath(destination, sourcePath)) return
    const updated = moveNode(tree, sourcePath, destination)
    if (updated === tree) return
    onTreeChange(updated)
    onSelect(null)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)
    setOverId(null)

    if (!over) return

    const sourcePath = active.id.toString().replace(/^drag-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x))
    const target = parseDropzoneId(over.id.toString())
    commitMove(sourcePath, target)
  }

  const handleDropTarget = (path: NodePath, type: DropTargetType) => {
    if (!activeId) return
    const sourcePath = activeId.replace(/^drag-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x))
    commitMove(sourcePath, { type, path })
  }

  const activePath = activeId ? activeId.replace(/^drag-/, '').split(',').map(Number).filter((x) => !Number.isNaN(x)) : null
  const activeNode = activePath ? getNodeAtPath(tree, activePath) : null

  const Icon = isTreeNode(activeNode) ? iconMap[activeNode.type] : null;

  const [expandedPaths, setExpandedPaths] = useState<ExpandedMap>({})

  const toggleExpanded = (path: NodePath) => {
    const key = path.join(',')
    setExpandedPaths((prev) => {
      const currentlyExpanded = prev[key] ?? true
      return {
        ...prev,
        [key]: !currentlyExpanded,
      }
    })
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className={styles.root}>
        {tree && tree.length > 0 ? null : <RootDropZone overId={overId} />}
        <div className={styles.treeContainer}>
          <TreeList
            items={tree}
            basePath={[]}
            selectedPath={selectedPath}
            onSelect={onSelect}
            onDropTarget={handleDropTarget}
            activeId={activeId}
            overId={overId}
            expandedPaths={expandedPaths}
            toggleExpanded={toggleExpanded}
          />
        </div>
      </div>

      <DragOverlay>
        {activeNode ? (
          isTreeNode(activeNode)
            ? (<div className={styles.dragOverlay}>
              <AlignJustifyIcon size={16} color={"#666666"} />
              {Icon ? <Icon size={16} color={"#888888"} /> : null}
              <div className={styles.dragOverlayTitle}>{activeNode.type}</div>
            </div>)
            : <div className={styles.dragOverlay}>{String(activeNode)}</div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
