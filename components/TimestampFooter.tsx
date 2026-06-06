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

export default function TimestampFooter() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(getUTCString());
  }, []);

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
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
    </div>
  );
}
