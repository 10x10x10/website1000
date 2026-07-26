import React, { useMemo, useState } from "react";
import {
  Check,
  Edit,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import Media from "../Media";
import { node } from "prop-types";

type MediaListEditorProps = {
  value: string[];
  onChange: (next: string[]) => void;
  itemHeight: number;
  col: number;
  placeholder?: React.ReactNode;
};

const defaultPlaceholder = (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa',
      backgroundColor: '#1f1f1f',
      border: '1px dashed #444',
      fontSize: 12,
      textAlign: 'center',
      padding: 8,
    }}
  >
    Empty media
  </div>
);

const isRenderableMedia = (link: string) => {
  const normalized = link.trim().split(/[?#]/)[0];
  return /\.(mp4|png|jpe?g|gif)$/i.test(normalized);
};

const getFilenameFromUrl = (link: string) => {
  const normalized = link?.trim();
  if (!normalized) {
    return 'No URL';
  }

  try {
    const url = new URL(normalized, 'https://example.com');
    const segments = url.pathname.split('/').filter(Boolean);
    const filename = segments.pop();
    if (!filename) {
      return 'No filename';
    }

    return decodeURIComponent(filename);
  } catch {
    return 'Invalid URL';
  }
};

type MediaListEditorItemProps = {
  item: string;
  index: number;
  isEditing: boolean;
  isHovered: boolean;
  placeholder: React.ReactNode;
  itemHeight: number | string;
  editingValue: string;
  onRemove: (index: number) => void;
  onStartEdit: (index: number) => void;
  onChangeEditingValue: (value: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onHover: (index: number | null) => void;
};

export function MediaListEditorItem({
  item,
  index,
  isEditing,
  isHovered,
  placeholder,
  itemHeight,
  editingValue,
  onRemove,
  onStartEdit,
  onChangeEditingValue,
  onSaveEdit,
  onCancelEdit,
  onHover,
}: MediaListEditorItemProps) {
  const showPlaceholder = !item || !isRenderableMedia(item);

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: 'relative',
        border: '1px solid #333',
        borderRadius: 10,
        overflow: 'hidden',
        background: '#121212',
      }}
    >
      {isEditing
        ? null
        : (<>
          <button
            type="button"
            onClick={() => onRemove(index)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 3,
              border: 'none',
              background: '#d32f2f',
              color: '#fff',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease',
              cursor: 'pointer',
            }}
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => onStartEdit(index)}
            style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              zIndex: 3,
              border: 'none',
              background: 'rgba(100,100,100,0.6)',
              color: '#fff',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease',
              cursor: 'pointer',
              pointerEvents: isHovered ? 'auto' : 'none',
            }}
            aria-label="Edit item"
          >
            <Edit size={16} />
          </button>
        </>)}


      <div style={{
        display: 'flex',
        gap: 10,
        padding: 0,
        alignItems: 'stretch',
      }}>
        <div
          style={{
            width: 100,
            height: itemHeight,
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1f1f1f',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {showPlaceholder ? (
            <div style={{ width: '100%', height: '100%', background: '#1f1f1f' }}>{placeholder}</div>
          ) : (
            <Media link={item} enableLoading={false} />
          )}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 8,
          flexGrow: 1,
          paddingRight: 10,
        }}>
          {isEditing ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <input
                autoFocus
                value={editingValue}
                onChange={(event) => onChangeEditingValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    onSaveEdit();
                  }
                }}
                placeholder="Enter image, gif or video URL"
                style={{
                  width: '100%',
                  border: '1px solid #444',
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontSize: 14,
                  background: '#191919',
                  color: '#eee',
                  boxSizing: 'border-box',
                }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={onCancelEdit}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    borderRadius: 8,
                    border: '1px solid #444',
                    background: '#444',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Cancel edit"
                >
                  <X size={16} />
                </button>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={onSaveEdit}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    borderRadius: 8,
                    border: '1px solid #ccc',
                    background: '#fff',
                    color: '#333',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Save edit"
                >
                  <Check size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div
                style={{
                  fontSize: 12,
                  color: '#eee',
                  wordBreak: 'break-all',
                  minHeight: 42,
                }}
              >
                <p style={{ padding: 0, margin: 0, fontSize: 14, }}>{getFilenameFromUrl(item)}</p>
                <p style={{ padding: 0, margin: 0, color: '#666' }}>{item}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MediaListEditor({
  value,
  onChange,
  col = 2,
  itemHeight,
  placeholder = defaultPlaceholder,
}: MediaListEditorProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = useMemo(() => value ?? [], [value]);

  const handleChangeItem = (index: number, nextValue: string) => {
    const nextItems = [...items];
    nextItems[index] = nextValue;
    onChange(nextItems);
  };

  const handleRemoveItem = (index: number) => {
    const nextItems = items.filter((_, i) => i !== index);
    onChange(nextItems);
    if (editingIndex === index) {
      setEditingIndex(null);
      setEditingValue('');
    }
  };

  const handleAddItem = () => {
    onChange([...items, '']);
    setEditingIndex(items.length);
    setEditingValue('');
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditingValue(items[index] ?? '');
  };

  const saveEdit = () => {
    if (editingIndex === null) return;
    handleChangeItem(editingIndex, editingValue);
    setEditingIndex(null);
    setEditingValue('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 14, color: '#444', fontWeight: 500 }}>
          {value.length}
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          style={{
            border: '1px solid #333333',
            borderRadius: 6,
            background: '#373737',
            color: '#e2e2e2',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Add item"
        >
          <Plus size={16} />
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
          gap: 12,
          width: '100%',
        }}
      >
        {items.map((item, index) => (
          <MediaListEditorItem
            key={`${item}-${index}`}
            item={item}
            index={index}
            isEditing={editingIndex === index}
            isHovered={hoveredIndex === index}
            placeholder={placeholder}
            itemHeight={itemHeight}
            editingValue={editingValue}
            onRemove={handleRemoveItem}
            onStartEdit={startEdit}
            onChangeEditingValue={setEditingValue}
            onSaveEdit={saveEdit}
            onCancelEdit={() => {
              setEditingIndex(null);
              setEditingValue('');
            }}
            onHover={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
}
