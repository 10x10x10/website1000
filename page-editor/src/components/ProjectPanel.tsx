import React from 'react'
import { FolderOpen, Plus, Save } from 'lucide-react'
import styles from './Component.module.css'

type Props = {
  onOpenProject: () => void
  onCreateNewProject: () => void
  onSaveProject: () => void
  showSaveButton?: boolean
}

export default function ProjectPanel({ onOpenProject, onCreateNewProject, onSaveProject, showSaveButton = true }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <FolderOpen size={16} className={styles.titleIcon} />
        <h2 className={styles.title}>Project</h2>
      </div>
      <div className={styles.panelActions}>
        <button type="button" onClick={onOpenProject} className={`${styles.button} ${styles.fullWidthButton}`}>
          <FolderOpen size={16} className={styles.buttonIcon} />
          Open Project
        </button>
        <button type="button" onClick={onCreateNewProject} className={`${styles.button} ${styles.fullWidthButton}`}>
          <Plus size={16} className={styles.buttonIcon} />
          Create New
        </button>
        {showSaveButton && (
          <button type="button" onClick={onSaveProject} className={`${styles.button} ${styles.fullWidthButton}`}>
            <Save size={16} className={styles.buttonIcon} />
            Save Project
          </button>
        )}
      </div>
    </div>
  )
}
