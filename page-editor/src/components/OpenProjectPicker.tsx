import React, { useEffect } from 'react'
import { File, RefreshCw } from 'lucide-react'
import ProjectPickerModal from './ProjectPickerModal'
import compStyles from './Component.module.css'
import styles from './ProjectLoader.module.css'

type Props = {
  isOpen: boolean
  localProjects: string[]
  loadingProjects: boolean
  saveStatus: string | null
  onClose: () => void
  onRefreshProjects: () => void
  onLoadProjectByName: (name: string) => void
}

export default function OpenProjectPicker({
  isOpen,
  localProjects,
  loadingProjects,
  saveStatus,
  onClose,
  onRefreshProjects,
  onLoadProjectByName,
}: Props) {
  const [browseError, setBrowseError] = React.useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setBrowseError(null)
    }
  }, [isOpen])

  return (
    <ProjectPickerModal
      isOpen={isOpen}
      title="Open Project"
      onClose={onClose}
      statusMessage={saveStatus}
      errorMessage={browseError}
    >
      <div className={compStyles.sectionHeader}>
        <strong>Local Projects</strong>
        <button type="button" onClick={onRefreshProjects} className={compStyles.button}>
          <RefreshCw size={16} />
        </button>
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
              onClick={() => onLoadProjectByName(name)}
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
