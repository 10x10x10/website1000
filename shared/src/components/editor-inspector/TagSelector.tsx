import React from "react";

type TagSelectorProps<Option extends string> = {
  options: Option[];
  selected: Option[];
  onToggle: (option: Option) => void;
};

export default function TagSelector<Option extends string>({
  options,
  selected,
  onToggle,
}: TagSelectorProps<Option>) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8,}}>
      {options.map((option) => {
        const isActive = selected.includes(option)
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            style={{
              borderRadius: 9999,
              border: isActive ? '1px solid #888' : '1px solid #444',
              background: isActive ? '#eee' : '#1c1c1c',
              color: isActive ? '#111' : '#ddd',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
