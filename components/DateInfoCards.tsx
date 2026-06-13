"use client";
import { useEffect, useRef, useState } from "react";

interface DateInfoCardsProps {
  domain: string;
}

// 🕒 UTC Time Helpers (আপনার ফুটার থেকে নেওয়া)
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

export default function DateInfoCards({ domain }: DateInfoCardsProps) {
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
    <div className="w-full mx-auto px-10 my-10 font-sans">
      
      {/* 🚀 Main Container */}
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* 🟢 LEFT CARD: Score Card */}
        <div className="bg-[#212c3d] rounded-md p-6 flex flex-col items-center justify-center min-w-[210px] shadow-sm">
          <div className="relative w-28 h-28 flex flex-col items-center justify-center mb-5">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#313e52" strokeWidth="5" />
              <circle
                cx="50" cy="50" r="44"
                fill="none"
                stroke="#15b57f"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="276"
                strokeDashoffset="0" 
              />
            </svg>
            <div className="text-white text-3xl font-normal leading-none relative z-10 mt-1">0</div>
            <div className="text-gray-400 text-[11px] font-medium relative z-10 mt-1">/ 91</div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-gray-400 text-[11px] text-center leading-tight">
              Community<br />Score
            </div>
            <div className="w-9 h-5 bg-[#313e52] rounded-full flex items-center justify-end px-0.5 cursor-pointer">
              <div className="w-4 h-4 bg-[#4a586d] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 🔵 RIGHT CARD: Information Card */}
        <div className="flex-1 flex flex-col bg-[#212c3d] rounded-md overflow-hidden shadow-sm">
          
          {/* Top Row: Alert & Actions */}
          <div className="bg-[#2F3D5C] px-5 py-3 flex items-center justify-between border-b border-[#313e52]">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#15b57f] shrink-0">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[#15b57f] text-[13px] font-medium tracking-wide">
                No security vendors flagged this domain as malicious
              </span>
            </div>
            
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1.5 text-[#e2e8f0] hover:text-white text-[13px] font-medium transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.27l-3.27 3.27" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Reanalyze
              </button>
              <button className="flex items-center gap-1 text-[#e2e8f0] hover:text-white text-[13px] font-medium transition-colors">
                More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Row: Domain & Repositioned Timestamp */}
          <div className="px-5 py-6 flex flex-col md:flex-row md:items-center justify-between flex-1">
            
            {/* Domain Name */}
            <div className="text-[#e2e8f0] text-[13px] font-medium">
              {domain}
            </div>

            {/* 🛠️ REPOSITIONED SECTION: Replaced old dates with interactive timestamp */}
            <div className="flex items-center gap-6 relative">
              
              <div className="relative">
                {/* Clickable Timestamp Text (ক্লায়েন্ট যেখানে মার্ক করেছেন সেখানে বসানো হয়েছে) */}
                <div
                  onClick={handleClick}
                  className="text-[#e2e8f0] text-[20px] font-medium tracking-wide cursor-pointer hover:text-white transition-colors"
                  style={{ fontFamily: "Roboto, monospace, Arial, sans-serif" }}
                >
                  {value}
                </div>

                {/* Hidden Date Picker triggered by text click */}
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

              {/* VirusTotal Globe/Link Icon */}
              <div className="w-10 h-10 rounded-full border border-gray-500 bg-[#212c3d] flex items-center justify-center shrink-0 ml-2 relative">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1.5">
                   <circle cx="12" cy="12" r="10" />
                   <path d="M2 12h20" />
                   <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div className="absolute -bottom-1 -right-1 bg-[#212c3d] rounded-full p-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}