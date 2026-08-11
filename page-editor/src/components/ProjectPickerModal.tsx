import React from 'react'
import { X } from 'lucide-react'
import styles from './ProjectLoader.module.css'
import compStyles from './Component.module.css'

type Props = {
  isOpen: boolean
  title: string
  onClose: () => void
  children?: React.ReactNode
  statusMessage?: string | null
  errorMessage?: string | null
}

export default function ProjectPickerModal({
  isOpen,
  title,
  onClose,
  children,
  statusMessage,
  errorMessage,
}: Props) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={compStyles.titleBar}>
            <h2 className={compStyles.title}>{title}</h2>
          </div>
          <button type="button" onClick={onClose} className={styles.closeButton} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        {children}
        {statusMessage ? <div className={styles.savedStatus}>{statusMessage}</div> : null}
        {errorMessage ? <div className={styles.invalid}>{errorMessage}</div> : null}
      </div>
    </div>
  )
}
