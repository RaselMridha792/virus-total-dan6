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
      backgroundColor: "#161b22",
      borderBottom: "1px solid #30363d",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        height: "52px",
        padding: "0 20px",
        gap: "16px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}>
        {/* VT Logo */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="6" fill="#21262d" />
            <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="none" stroke="#58a6ff" strokeWidth="2" />
            <circle cx="20" cy="20" r="4" fill="#58a6ff" />
          </svg>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0d1117",
          border: "1px solid #30363d",
          borderRadius: "6px",
          height: "36px",
          overflow: "hidden",
          paddingLeft: "12px",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginRight: "8px" }}>
            <circle cx="11" cy="11" r="7" stroke="#8b949e" strokeWidth="2" />
            <path d="M16.5 16.5 L21 21" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" />
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
              color: "#c9d1d9",
              fontSize: "14px",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
            placeholder="Search or scan a URL, IP address, domain or file hash"
          />
          <button type="submit" style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0 12px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
          {/* Upload */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", borderRadius: "6px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
              <polyline points="17 8 12 3 7 8" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="3" x2="12" y2="15" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {/* Flag */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", borderRadius: "6px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="4" y1="22" x2="4" y2="15" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {/* Help */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", borderRadius: "6px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#8b949e" strokeWidth="1.8" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
          {/* Settings */}
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", borderRadius: "6px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="#8b949e" strokeWidth="1.8" />
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#8b949e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div style={{ width: "1px", height: "28px", backgroundColor: "#30363d", margin: "0 8px" }} />

          <button style={{
            background: "transparent",
            border: "1px solid #30363d",
            borderRadius: "6px",
            color: "#c9d1d9",
            fontSize: "13px",
            padding: "5px 16px",
            cursor: "pointer",
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: "500",
          }}>Sign in</button>
          <button style={{
            background: "#238636",
            border: "1px solid #2ea043",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "13px",
            padding: "5px 16px",
            cursor: "pointer",
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: "500",
            marginLeft: "4px",
          }}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
