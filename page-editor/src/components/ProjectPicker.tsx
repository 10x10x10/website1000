import React, { useRef, useState } from 'react'
import { safeParseProjectContent, type ProjectContent } from '@1000website/shared'
import {
  File,
  Plus,
  FolderOpen
} from 'lucide-react'
import styles from './ProjectLoader.module.css'
import compStyles from './Component.module.css'


type Props = {
  onCreateBlank: () => void
  onLoadProjectFromFile: (project: ProjectContent, label: string) => void
}

export default function ProjectPicker({
  onCreateBlank,
  onLoadProjectFromFile,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [browseError, setBrowseError] = useState<string | null>(null)

  const handleBrowseClick = () => {
    setBrowseError(null)
    fileInputRef.current?.click()
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    if (!file.name.toLowerCase().endsWith('.json')) {
      setBrowseError('Please select a JSON file.')
      event.target.value = ''
      return
    }

    try {
      const text = await file.text()
      const json = JSON.parse(text)
      const parseResult = safeParseProjectContent(json)

      if (!parseResult.success) {
        throw parseResult.error ?? new Error('Invalid project JSON')
      }

      onLoadProjectFromFile(parseResult.data, file.name)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      setBrowseError(message || 'Unable to load project file.')
    } finally {
      event.target.value = ''
    }
  }

  return (
    <div className={compStyles.container}>
      <div className={compStyles.titleBar}>
        <File size={16} className={compStyles.titleIcon}/>
        <h2 className={compStyles.title}>Editor</h2>
      </div>
      <div className={compStyles.grid_c2}>
        <button type="button" onClick={onCreateBlank} className={compStyles.button}>
          <Plus size={16} style={{ marginRight: 8 }} />
          Create New
        </button>
        <button type="button" onClick={handleBrowseClick} className={compStyles.button}>
          <FolderOpen size={16} style={{ marginRight: 8 }} />
          Open Page
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {browseError ? <div className={styles.invalid}>{browseError}</div> : null}

    </div>
  )
}
