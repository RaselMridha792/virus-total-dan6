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
        backgroundColor: "#0d1527", // VirusTotal এর অরিজিনাল ডার্ক ব্যাকগ্রাউন্ড কালার টোন
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 16px",
        borderTop: "1px solid rgba(255,255,255,0.05)", // হালকা বর্ডার লুক
      }}
    >
      {/* Container to handle precise absolute positioning */}
      <div style={{ position: "relative" }}>
        
        {/* দৃশ্যমান টাইমস্ট্যাম্প টেক্সট — আইকন ছাড়া একদম ক্লিন */}
        <div
          onClick={handleClick}
          style={{
            color: "#b4c0d1", // অরিজিনাল সাইটের ফুটার টেক্সট কালার টোন
            fontSize: "23px",
            fontFamily: "Roboto, monospace, Arial, sans-serif",
            textAlign: "center",
            userSelect: "none",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {value}
        </div>

        {/* লুকানো ডেট পিকার — এটিকে ফুটার টেক্সটের ঠিক উপরে পজিশন করা হয়েছে 
          যাতে ক্যালেন্ডার ওপেন হলে ফুটার লেখাটি ঢেকে না যায়।
        */}
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
            bottom: "100%", // ফুটার টেক্সটের ঠিক উপরে পুশ করবে
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0,
            width: "100%",
            height: "40px", // একটি এরিয়া তৈরি করবে যেন ক্যালেন্ডার উপরে পপআপ হয়
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}