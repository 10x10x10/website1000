import React, { useState } from 'react'
import type { ProjectContent } from '../lib/treeSchema'
import { Field, Input, Media, TagSelector } from '@1000website/shared'
import compStyles from './Component.module.css'
import styles from './MetadataPanel.module.css'
import {
  Snowflake,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'

const TAG_OPTIONS = ['default', 'uiux'] as const

type Tags = (typeof TAG_OPTIONS)[number]

type MetadataPanelProps = {
  metadata: ProjectContent['metadata']
  onChange: (metadata: ProjectContent['metadata']) => void
}

export default function MetadataPanel({ metadata, onChange }: MetadataPanelProps) {
  const [collapsed, setCollapsed] = useState(false)

  const update = (next: Partial<ProjectContent['metadata']>) => {
    onChange({
      ...metadata,
      ...next,
    })
  }

  const toggleTag = (tag: Tags) => {
    const nextTags = metadata.tags.includes(tag)
      ? metadata.tags.filter((value) => value !== tag)
      : [...metadata.tags, tag]

    update({ tags: nextTags })
  }

  const coverUrl = metadata.cover
  const hoverUrl = metadata.hover
  const shouldDisplayCover = !!coverUrl && /\.(mp4|webm|ogg|png|jpe?g|gif)(\?.*)?$/i.test(coverUrl)
  const shouldDisplayHover = !!hoverUrl && /\.(mp4|webm|ogg|png|jpe?g|gif)(\?.*)?$/i.test(hoverUrl)

  return (
    <div className={compStyles.container}>
      <div className={compStyles.titleBar}>
        <Snowflake size={16} className={compStyles.titleIcon} />
        <h2 className={compStyles.title}>Page</h2>
        <button
          type="button"
          className={compStyles.titleIcon}
          onClick={() => setCollapsed((prev) => !prev)}
          style={{
            marginLeft: 'auto',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: '#888',
            padding: 4,
          }}
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Expand metadata panel' : 'Collapse metadata panel'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {!collapsed ? (
        <>
          <div className={styles.previewCard}>
            <div className={styles.previewMediaWrapper}>
              {shouldDisplayCover ? (
                <div className={styles.previewMedia}>
                  <Media link={coverUrl} enableLoading={false} />
                  <div className={styles.hoverOverlay}>
                    {shouldDisplayHover ? (
                      <Media link={hoverUrl} enableLoading={false} />
                    ) : (
                      <div className={styles.previewPlaceholder}>Blank cover</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.previewPlaceholder}>Blank cover</div>
              )}
            </div>
          </div>

          <div className={styles.grid}>
            <Field label="ID" direction="row">
              <Input
                value={metadata.id}
                onChange={(value) => update({ id: value })}
                placeholder="page-id"
                updateStrategy="never"
              />
            </Field>

            <Field label="Order" direction="row">
              <Input
                type="number"
                value={metadata.order}
                onChange={(value) => update({ order: Number(value) || 0 })}
                placeholder="0"
                updateStrategy="never"
              />
            </Field>

            <Field label="Title" direction="column">
              <Input
                value={metadata.title}
                onChange={(value) => update({ title: value })}
                placeholder="Page title"
                updateStrategy="never"
              />
            </Field>

            <Field label="Cover" direction="column">
              <Input
                value={metadata.cover}
                onChange={(value) => update({ cover: value })}
                placeholder="Cover image URL"
                updateStrategy="never"
              />
            </Field>

            <Field label="Hover" direction="column">
              <Input
                value={metadata.hover}
                onChange={(value) => update({ hover: value })}
                placeholder="Hover image URL"
                updateStrategy="never"
              />
            </Field>

            <Field label="Tags" direction="row">
              <TagSelector
                options={['default', 'uiux']}
                selected={metadata.tags}
                onToggle={toggleTag}
              />
            </Field>
          </div>
        </>
      ) : (<div className={styles.grid}>
        <Field label={metadata.id} direction="column">
          <p className={styles.metaProps}>{metadata.title}</p>
        </Field>
      </div>)}
    </div>
  )
}
