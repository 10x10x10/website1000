import React, { useEffect, useMemo } from 'react'
import type { EditorTreeNode, NodePath } from './editorTree'
import type { ComponentDefinitionMap, TreeNode } from '@1000website/shared'
import { validateComponentProps } from '../lib/componentProps'
import {
  Inspect,
  Trash2
} from 'lucide-react'
import styles from './InspectorPanel.module.css'
import compStyles from './Component.module.css'
import { iconMap } from './iconMap';

type Props = {
  selectedNode: EditorTreeNode | null
  selectedPath: NodePath | null
  definitions: ComponentDefinitionMap
  onUpdateNode: (path: NodePath, node: EditorTreeNode) => void
  onDeleteNode: (path: NodePath) => void
}

function isTreeNode(node: unknown): node is TreeNode {
  return typeof node === 'object' && node !== null && 'type' in node
}

export default function InspectorPanel({ selectedNode, selectedPath, definitions, onUpdateNode, onDeleteNode }: Props) {
  if (!selectedNode || !isTreeNode(selectedNode) || !selectedPath) {
    return (
      <div className={compStyles.container}>
        <div className={compStyles.titleBar}>
          <Inspect size={16} className={compStyles.titleIcon} />
          <h2 className={compStyles.title}>Inspector</h2>
        </div>
        <div className={styles.notSelected}>Select a component to edit props.</div>
      </div>
    )
  }

  return (
    <SelectedNodeInspector
      key={selectedPath.join(',')}
      selectedNode={selectedNode}
      selectedPath={selectedPath}
      definitions={definitions}
      onUpdateNode={onUpdateNode}
      onDeleteNode={onDeleteNode}
    />
  )
}

type SelectedNodeProps = Omit<Props, 'selectedNode' | 'selectedPath'> & {
  selectedNode: TreeNode
  selectedPath: NodePath
}

function SelectedNodeInspector({ selectedNode, selectedPath, definitions, onUpdateNode, onDeleteNode }: SelectedNodeProps) {
  const treeNode = selectedNode
  const definition = definitions[treeNode.type]
  const props = treeNode.props ?? {}
  const validation = useMemo(() => validateComponentProps(definition, props), [definition, props])

  useEffect(() => {
    if (!validation.success) {
      console.error(`Invalid props for ${definition.type}:`, validation.error.issues)
    }
  }, [validation.success, definition.type, validation.error?.issues])

  const handleChangeProps = (nextProps: unknown) => {
    const updatedNode = {
      ...treeNode,
      props: nextProps as unknown,
    } as EditorTreeNode

    onUpdateNode(selectedPath, updatedNode)
  }

  const InspectorComponent = definition.inspectorComponent !== null ? (definition.inspectorComponent as React.ComponentType<any>) : null
  const Icon = iconMap[treeNode.type] ?? null;

  return (
    <div className={compStyles.container}>
      <div className={compStyles.titleBar}>
        {Icon ? <Icon size={16} className={compStyles.titleIcon} /> : null}
        <h2 className={compStyles.title}>{selectedNode.type}</h2>
        <button
          type="button"
          onClick={() => onDeleteNode(selectedPath)}
          className={styles.deleteButton}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className={styles.grid}>
        {!validation.success ? (
          <div className={styles.warningBox}>
            <div className={styles.warningTitle}>Props do not match schema</div>
            {validation.error?.issues.map((issue, index: number) => (
              <div key={index}>
                <strong>{Array.isArray(issue.path) && issue.path.length > 0 ? issue.path.join('.') : '(root)'}</strong>: {String(issue.message)}
              </div>
            ))}
          </div>
        ) : null}

        {InspectorComponent ? (<InspectorComponent
          node={{ type: selectedNode.type, props }}
          onChangeProps={handleChangeProps}
        />) : null}
      </div>

      {definition.allowChildren.length > 0 ? (
        <div className={styles.allowChildren}>
          Allowed children
          {definition.allowChildren.map(c => {
            const Icon = isTreeNode(selectedNode) ? iconMap[c] : null;
            return (<div key={c} className={styles.allowChildren_item}>
              {Icon ? <Icon size={16} /> : null}
              <p>{c}</p>
            </div>)
          })}
        </div>
      ) : null}
    </div>
  )
}
