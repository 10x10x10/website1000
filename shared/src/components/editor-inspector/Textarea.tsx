import React from "react";

type TextareaProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  rows?: number;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Textarea({
  value,
  onChange,
  onBlur,
  rows = 4,
  placeholder = "",
  readOnly = false,
  className,
  style,
}: TextareaProps) {
  return (
    <textarea
      className={className}
      style={{
        width: "100%",
        minHeight: rows * 24,
        borderRadius: 8,
        border: "1px solid #444",
        background: "#191919",
        color: "#eee",
        padding: "10px 12px",
        fontSize: 14,
        lineHeight: 1.5,
        resize: "vertical",
        boxSizing: "border-box",
        ...style,
      }}
      rows={rows}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
    />
  );
}
