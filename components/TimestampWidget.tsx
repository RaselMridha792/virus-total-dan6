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

function toPickerFormat(val: string): string {
  try {
    return val.replace(" UTC", "").replace(" ", "T").slice(0, 16);
  } catch {
    return "";
  }
}

function fromPickerFormat(val: string): string {
  if (!val) return "";
  const [date, time] = val.split("T");
  return `${date} ${time}:00 UTC`;
}

export default function TimestampWidget() {
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
        top: "155px", // 🛠️ 24px থেকে বাড়িয়ে 90px করা হয়েছে, যাতে হেডারের নিচে থাকে
        right: "4px",
        zIndex: 9999,
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          onClick={handleClick}
          className="bg-[#b4c0d1] text-[#212c3d] font-medium px-4 py-2 rounded shadow-md cursor-pointer hover:bg-[#a3b1c2] transition-colors"
          style={{
            fontFamily: "Roboto, monospace, Arial, sans-serif",
            fontSize: "16px",
          }}
        >
          Timestamp: {value}
        </div>

        <input
          ref={pickerRef}
          type="datetime-local"
          value={toPickerFormat(value)}
          onChange={(e) => {
            if (e.target.value) {
              setValue(fromPickerFormat(e.target.value));
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}