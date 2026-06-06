"use client";
import { useState } from "react";

interface SearchHeaderProps {
  domain: string;
  onSearch: (domain: string) => void;
}

export default function SearchHeader({ domain, onSearch }: SearchHeaderProps) {
  const [input, setInput] = useState(domain);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <div style={{
      backgroundColor: "#2F3D5C",
      borderBottom: "1px solid #3c4043",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        height: "52px",
        padding: "0 16px",
        gap: "12px",
      }}>

        {/* VT Logo - blue diamond icon */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect width="30" height="30" rx="4" fill="#1a73e8" />
            <path d="M15 5 L25 15 L15 25 L5 15 Z" fill="white" opacity="0.9" />
            <path d="M15 9 L21 15 L15 21 L9 15 Z" fill="#1a73e8" />
          </svg>
        </div>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#232C42",
            border: "1px solid #5f6368",
            borderRadius: "24px",
            height: "38px",
            padding: "0 16px",
            gap: "10px",
          }}
        >
          {/* Search icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" stroke="#9aa0a6" strokeWidth="2" />
            <path d="M16.5 16.5 L21 21" stroke="#9aa0a6" strokeWidth="2.2" strokeLinecap="round" />
          </svg>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#e8eaed",
              fontSize: "14px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
            }}
            placeholder="Search or scan a URL, IP address, domain or file hash"
          />

          {/* Arrow submit button */}
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#9aa0a6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        {/* Right side icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>

          {/* Upload icon */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" />
              <polyline points="17 8 12 3 7 8" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="3" x2="12" y2="15" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Flag icon */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="4" y1="22" x2="4" y2="15" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Help icon */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#9aa0a6" strokeWidth="1.8" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#9aa0a6" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="17" r="0.8" fill="#9aa0a6" />
            </svg>
          </button>

          {/* Settings icon */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="#9aa0a6" strokeWidth="1.8" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                stroke="#9aa0a6"
                strokeWidth="1.8"
              />
            </svg>
          </button>

          {/* Divider */}
          <div style={{ width: "1px", height: "26px", backgroundColor: "#5f6368", margin: "0 6px" }} />

          {/* Sign in */}
          <button style={{
            background: "transparent",
            border: "1px solid #5f6368",
            borderRadius: "4px",
            color: "#e8eaed",
            fontSize: "13px",
            fontWeight: "500",
            padding: "5px 18px",
            cursor: "pointer",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
          }}>
            Sign in
          </button>

          {/* Sign up */}
          <button style={{
            background: "#1a73e8",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "13px",
            fontWeight: "500",
            padding: "5px 18px",
            cursor: "pointer",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
            marginLeft: "6px",
          }}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}