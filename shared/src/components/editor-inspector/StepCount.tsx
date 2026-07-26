import React from "react";

type StepCountProps = {
  max: number;
  value: number;
  onChange: (value: number) => void;
  size?: number;
  readOnly?: boolean;
  labels?: string[];
};

export default function StepCount({
  max,
  value,
  onChange,
  readOnly = false,
  labels = [],
}: StepCountProps) {

  const size = 24;
  const items = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map((step) => {
        const isActive = step === value;
        const label = labels[step - 1] ?? step;

        return (
          <button
            key={step}
            type="button"
            onClick={() => !readOnly && onChange(step)}
            aria-label={`Select ${step}`}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              border: '1px solid #ccc',
              background: isActive ? '#aaa' : '#111',
              color: isActive ? '#111' : '#aaa',
              cursor: readOnly ? 'default' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: size * 0.45,
              padding: 0,
              //   boxShadow: isActive ? '0 0 0 1px rgba(0,0,0,0.1)' : undefined,
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
