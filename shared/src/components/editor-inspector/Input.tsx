import React, { useEffect, useRef, useState } from "react";

type InputProps = {
  value: string | number;
  onChange: (value: string) => void;
  type?: "text" | "number" | "email" | "url";
  placeholder?: string;
  readOnly?: boolean;
  id?: string;
  style?: React.CSSProperties;
  updateStrategy: "debounce" | "never";
  debounceSeconds?: number; // unit: milliseconds
};

export default function Input({
  value,
  onChange,
  type = "text",
  placeholder = "",
  readOnly = false,
  id,
  style,
  updateStrategy = "debounce",
  debounceSeconds = 300,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(
    value === undefined || value === null ? "" : String(value)
  );
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setInternalValue(value === undefined || value === null ? "" : String(value));
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const commitValue = (nextValue: string) => {
    if (updateStrategy === "never") return;

    if (updateStrategy === "debounce") {
      const delayMs = Math.max(0, debounceSeconds);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        onChange(nextValue);
        timeoutRef.current = null;
      }, delayMs);
      return;
    }

    onChange(nextValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInternalValue(nextValue);

    if (updateStrategy === "never") {
      return;
    }

    commitValue(nextValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (updateStrategy === "never" && event.key === "Enter") {
      onChange(internalValue);
    }
  };

  const handleBlur = () => {
    if (updateStrategy === "never") {
      onChange(internalValue);
      return;
    }

    if (updateStrategy === "debounce" && timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      onChange(internalValue);
    }
  };

  return (
    <input
      id={id}
      type={type}
      value={internalValue}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      style={{
        width: "100%",
        borderRadius: 6,
        border: "1px solid #4b4b4b",
        background: "#141414",
        color: "#eee",
        padding: "6px 8px",
        fontSize: 14,
        lineHeight: 1.5,
        boxSizing: "border-box",
        outline: "none",
        ...style,
      }}
    />
  );
}
