"use client";
import { useEffect, useRef, useState } from "react";

function getUTCString(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const mo = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const h = String(now.getUTCHours()).padStart(2, "0");
  const mi = String(now.getUTCMinutes()).padStart(2, "0");
  const s = String(now.getUTCSeconds()).padStart(2, "0");
  return `${y}-${mo}-${d} ${h}:${mi}:${s} UTC`;
}

// "YYYY-MM-DD HH:mm:ss UTC" → "YYYY-MM-DDTHH:mm" (datetime-local format)
function toPickerFormat(val: string): string {
  try {
    return val.replace(" UTC", "").replace(" ", "T").slice(0, 16);
  } catch {
    return "";
  }
}

// "YYYY-MM-DDTHH:mm" → "YYYY-MM-DD HH:mm:00 UTC"
function fromPickerFormat(val: string): string {
  if (!val) return "";
  const [date, time] = val.split("T");
  return `${date} ${time}:00 UTC`;
}

export default function TimestampFooter() {
  const [value, setValue] = useState("");
  const pickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(getUTCString());
  }, []);

  const handleClick = () => {
    pickerRef.current?.showPicker?.();
    pickerRef.current?.focus();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "rgba(80,80,80,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
      }}
    >
      {/* Visible timestamp text — click opens hidden picker */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={handleClick}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#ffffff",
          fontSize: "13px",
          fontFamily: "Roboto, monospace, Arial, sans-serif",
          textAlign: "center",
          width: "320px",
          cursor: "text",
        }}
      />

      {/* Hidden datetime picker — no icon, triggered by clicking text above */}
      <input
        ref={pickerRef}
        type="datetime-local"
        value={toPickerFormat(value)}
        onChange={(e) => setValue(fromPickerFormat(e.target.value))}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
        }}
      />
    </div>
  );
}