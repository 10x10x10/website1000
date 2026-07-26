import React from 'react'
import type { ComponentDefinitionMap } from '@1000website/shared'
import { iconMap } from './iconMap'
import {
  Puzzle
} from 'lucide-react'
import styles from './ComponentPalette.module.css'
import compStyles from './Component.module.css'

type Props = {
  definitions: ComponentDefinitionMap
  onAddRoot: (type: keyof ComponentDefinitionMap) => void
}

export default function ComponentPalette({ definitions, onAddRoot }: Props) {
  return (
    <div className={compStyles.container}>
      <div className={compStyles.titleBar}>
        <Puzzle size={16} className={compStyles.titleIcon} />
        <h2 className={compStyles.title}>Components</h2>
      </div>
      <div className={styles.grid}>
        {Object.values(definitions).map((definition) => {
          const Icon = iconMap[definition.type]
          return (
            <button
              key={definition.type}
              type="button"
              onClick={() => onAddRoot(definition.type)}
              className={compStyles.button}
            >
              {Icon ? <Icon size={16} className={styles.icon} /> : null}
              <span>{definition.type}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
