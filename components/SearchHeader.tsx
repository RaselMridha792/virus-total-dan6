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
    // স্ক্রিনশটের আসল নেভি-ব্লু গ্রে ব্যাকগ্রাউন্ড (#2b3752)
    <div className="sticky top-0 z-[100] bg-[#2b3752] border-b border-[#1f2840]">
      <div className="flex items-center h-[56px] px-4 gap-3.5">

        {/* VT Logo - Only Icon */}
        <div className="flex-shrink-0 flex items-center text-[#8ab4f8]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xmlSpace="preserve" 
            viewBox="0 0 108 109" 
            fill="currentColor"
            className="h-[34px] w-auto pl-1"
          >
            <path d="M0 5.9l48.7 48.6L0 103h107.5V5.9H0zm97.1 86.7H24.5l38.4-38.1-38.4-38.2h72.6v76.3z"></path>
          </svg>
        </div>

        {/* Search bar - Darker background as per screenshot */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex items-center bg-[#1d273b] rounded-[4px] h-[30px] px-3 gap-3 "
        >
          {/* Search icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="2.5" />
            <path d="M16.5 16.5 L21 21" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#e2e8f0] text-[13.5px] font-sans placeholder-[#64748b]"
            placeholder="Search or scan a URL, IP address, domain or file hash"
          />
        </form>

<div className="w-[1px] h-6 bg-[#68789c] mx-2" />




        {/* Right side icons & Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Upload icon */}
          <button className="text-[#cbd5e1] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>

          {/* Chat/Community icon */}
          <button className="text-[#cbd5e1] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Help icon */}
          <button className="text-[#cbd5e1] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>

          {/* Theme/Light mode icon */}
          <button className="text-[#cbd5e1] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          {/* Vertical Divider */}
          <div className="w-[1px] h-6 bg-[#68789c] mx-2" />

          {/* Sign in */}
          <button className="text-[#f8fafc] text-[12px] font-medium px-3 py-1 rounded hover:bg-white/5 transition-colors mr-1">
            Sign in
          </button>

          {/* Sign up */}
          <button className="bg-[#8ab4f8] hover:bg-[#a1c4fa] text-[#1e293b] text-[12px] font-semibold px-3 py-[4px] rounded-full transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}