import React from "react";

type FieldProps = {
  label: string;
  children: React.ReactNode;
  labelWidth?: string | number;
  labelStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  direction?: 'row' | 'column';
};

export default function Field({
  label,
  children,
  labelWidth = 100,
  labelStyle,
  contentStyle,
  direction = 'row',
}: FieldProps) {
  const isRow = direction === 'row';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isRow ? 'row' : 'column',
        alignItems: isRow ? 'center' : 'stretch',
        gap: '4px',
        width: '100%',
        marginBottom: 4,
      }}
    >
      <div
        style={{
          minWidth: isRow ? (typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth) : 'auto',
          fontSize: 12,
          fontWeight: 500,
          color: '#888',
          lineHeight: "24px",
          ...labelStyle,
        }}
      >
        {label}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: isRow ? 'flex-end' : 'flex-start',
        width: '100%',
        ...contentStyle
      }}>
        {children}
      </div>
    </div>
  )
}
