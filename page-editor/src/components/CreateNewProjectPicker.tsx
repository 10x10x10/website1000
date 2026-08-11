import React, { useEffect, useState } from 'react'
import { Field, Input } from '@1000website/shared'
import { Plus } from 'lucide-react'
import ProjectPickerModal from './ProjectPickerModal'
import styles from './ProjectLoader.module.css'
import compStyles from './Component.module.css'

type Props = {
  isOpen: boolean
  saveStatus: string | null
  onClose: () => void
  onCreateNewProject: (projectId: string) => void
}

export default function CreateNewProjectPicker({
  isOpen,
  saveStatus,
  onClose,
  onCreateNewProject,
}: Props) {
  const [newProjectName, setNewProjectName] = useState('untitled-project')
  const [createError, setCreateError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setNewProjectName('untitled-project')
      setCreateError(null)
    }
  }, [isOpen])

  const handleCreateProject = () => {
    setCreateError(null)
    const projectId = newProjectName.trim()
    if (!projectId) {
      setCreateError('Project file name is required.')
      return
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(projectId)) {
      setCreateError('Project file name can only contain letters, numbers, hyphens, and underscores.')
      return
    }

    onCreateNewProject(projectId)
  }

  const normalizeName = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9_-]/g, '-')
  }

  return (
    <ProjectPickerModal 
      isOpen={isOpen} 
      title="Create New Project" 
      onClose={onClose} 
      statusMessage={saveStatus} 
      errorMessage={createError}
    >
      <div className={compStyles.sectionBody}>
        <Field label="File name to save" direction="column">
          <Input
            id="project-name"
            value={newProjectName}
            onChange={(value) => setNewProjectName(normalizeName(value))}
            placeholder="untitled-project"
            updateStrategy="debounce"
            debounceSeconds={1}
          />
        </Field>
        <div>
          <button type="button" onClick={handleCreateProject} className={`${compStyles.button}`}>
            <Plus size={16} style={{ marginRight: 8 }} />
            Create
          </button>
        </div>
      </div>
    </ProjectPickerModal>
  )
}
