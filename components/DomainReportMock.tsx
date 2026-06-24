"use client";

import { useState } from "react";
import { mockReportData } from "@/lib/mockReportData";

interface DomainReportMockProps {
  domain: string;
}

// 🟢 Outline Clean Icon
function CleanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-[#15b57f]">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 🔴 Outline Warning Icon (For Phishing)
function WarningIconRed() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-[#fc6060]">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 🟡 Outline Warning Icon (For Suspicious)
function WarningIconYellow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-[#e2b83a]">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ⚪ Outline Unrated Icon
function QuestionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#50617a" strokeWidth="1.8" className="shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 2" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1" fill="#50617a" stroke="none" />
    </svg>
  );
}

// ℹ️ Info Icon
function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8ba0b2" strokeWidth="2" className="shrink-0 cursor-pointer hover:stroke-[#c1d1e0] transition-colors">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="#8ba0b2" stroke="none" />
    </svg>
  );
}

// 🟢 Dynamic Status Indicator Component
function StatusIndicator({ vendorName, defaultStatus }: { vendorName: string, defaultStatus: string }) {
  if (!vendorName) return null;

  if (vendorName === "SOCRadar") {
    return (
      <div className="flex items-center gap-2 text-[#fc6060]">
        <WarningIconRed />
        <span className="text-[13px] font-medium tracking-wide">Phishing</span>
      </div>
    );
  }
  if (vendorName === "Gridinsoft") {
    return (
      <div className="flex items-center gap-2 text-[#e2b83a]">
        <WarningIconYellow />
        <span className="text-[13px] font-medium tracking-wide">Suspicious</span>
      </div>
    );
  }
  if (defaultStatus === "Unrated") {
    return (
      <div className="flex items-center gap-2 text-[#50617a]">
        <QuestionIcon />
        <span className="text-[13px] font-medium tracking-wide">Unrated</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[#15b57f]">
      <CleanIcon />
      <span className="text-[13px] font-medium tracking-wide">Clean</span>
    </div>
  );
}

export default function DomainReportMock({ domain }: DomainReportMockProps) {
  const [activeTab, setActiveTab] = useState("DETECTION");
  const tabs = ["DETECTION", "DETAILS", "RELATIONS", "COMMUNITY"];

  const cleanLeft = mockReportData.cleanVendors;
  const cleanRight = mockReportData.cleanVendorsRight;
  const unratedLeft = mockReportData.unratedVendors;
  const unratedRight = mockReportData.unratedVendorsRight;

  const maxClean = Math.max(cleanLeft.length, cleanRight.length);
  const maxUnrated = Math.max(unratedLeft.length, unratedRight.length);

  return (
    <div className="w-full mx-auto px-4 md:px-10 pb-16 font-sans bg-[#161625]">
      
      {/* 🚀 Tabs */}
      <div className="flex gap-2 border-b border-[#2c384f] mb-6 px-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 pb-3.5 text-[12.5px] font-bold tracking-wider transition-colors ${
              activeTab === tab ? "text-[#58a6ff]" : "text-[#8ba0b2] hover:text-[#c1d1e0]"
            }`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[2.5px] bg-[#58a6ff]" />}
          </button>
        ))}
      </div>

      {/* 🚀 Main Content */}
      <div className="w-full">
        {/* Community banner */}
        <div className="bg-[#182335] flex items-center px-5 py-3 border-l-[3px] border-[#00bcd4] mb-8 rounded-[2px]">
          <p className="text-[13.5px] text-[#e2e8f0]">
            <span className="font-bold cursor-pointer underline decoration-1 underline-offset-2 text-[#f8fafc] hover:text-white">Join our Community</span>
            {" and enjoy additional community insights and crowdsourced detections, plus an API key to "}
            <span className="font-bold cursor-pointer underline decoration-1 underline-offset-2 text-[#f8fafc] hover:text-white">automate checks.</span>
          </p>
        </div>

        {/* Security vendors header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2c384f]">
          <div className="flex items-center gap-2 pl-2">
            <span className="text-[#f8fafc] text-[13.5px] font-bold tracking-wide">Security vendors' analysis</span>
            <InfoIcon />
          </div>
          <span className="text-[#f8fafc] text-[12.5px] font-medium cursor-pointer hover:underline transition-all pr-2">
            Do you want to automate checks?
          </span>
        </div>

        {/* Vendor table (4 Column Grid Layout matching screenshot perfectly) */}
        <div className="flex flex-col">
          {/* Clean / Flagged Section */}
          {Array.from({ length: maxClean }).map((_, i) => {
            const leftItem = cleanLeft[i];
            const rightItem = cleanRight[i];
            
            return (
              <div key={`clean-${i}`} className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] border-b border-[#2c384f]/60 hover:bg-[#242f41]/40 transition-colors py-2.5 px-2 items-center">
                {/* Left Vendor Name */}
                <div className="text-[#e2e8f0] text-[13px] font-medium pr-4">
                  {leftItem}
                </div>
                {/* Left Vendor Status */}
                <div>
                  <StatusIndicator vendorName={leftItem} defaultStatus="Clean" />
                </div>

                {/* Right Vendor Name */}
                <div className="text-[#e2e8f0] text-[13px] font-medium pr-4 pl-2">
                  {rightItem}
                </div>
                {/* Right Vendor Status */}
                <div>
                  <StatusIndicator vendorName={rightItem} defaultStatus="Clean" />
                </div>
              </div>
            );
          })}

          {/* Unrated Section */}
          {Array.from({ length: maxUnrated }).map((_, i) => {
            const leftItem = unratedLeft[i];
            const rightItem = unratedRight[i];
            
            return (
              <div key={`unrated-${i}`} className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] border-b border-[#2c384f]/60 hover:bg-[#242f41]/40 transition-colors py-2.5 px-2 items-center">
                {/* Left Vendor Name */}
                <div className="text-[#8ba0b2] text-[13px] font-medium pr-4">
                  {leftItem}
                </div>
                {/* Left Vendor Status */}
                <div>
                  <StatusIndicator vendorName={leftItem} defaultStatus="Unrated" />
                </div>

                {/* Right Vendor Name */}
                <div className="text-[#8ba0b2] text-[13px] font-medium pr-4 pl-2">
                  {rightItem}
                </div>
                {/* Right Vendor Status */}
                <div>
                  <StatusIndicator vendorName={rightItem} defaultStatus="Unrated" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
            
<footer className="w-full mt-16 pt-10 pb-8 border-t border-[#313e52] ">
  <div className="max-w-7xl mx-auto  flex justify-end">
    {/* Grid Container-টিকে ডানপাশে পুশ করার জন্য flex justify-end ব্যবহার করা হয়েছে */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full ">
      {[
        { 
          title: "Our product", 
          links: ["Contact Us", "Get Support", "How It Works", "ToS | Privacy Notice", "Blog | Releases"] 
        },
        { 
          title: "Community", 
          links: ["Join Community", "Vote and Comment", "Contributors", "Top Users", "Community Buzz"] 
        },
        { 
          title: "Tools", 
          links: ["API Scripts", "YARA", "Desktop Apps", "Browser Extensions", "Mobile App"] 
        },
        { 
          title: "Premium Services", 
          links: ["Get a demo", "Intelligence", "Reports", "Hunting", "Graph", "API v3 | v2"] 
        },
        { 
          title: "Documentation", 
          links: ["Searching", "Reports", "API v3 | v2", "Use Cases"] 
        },
      ].map(({ title, links }) => (
        <div key={title} className="flex flex-col">
          {/* হেডার টেক্সট কালার সম্পূর্ণ সাদা করা হয়েছে */}
          <h4 className="text-white text-[14px] font-bold ">{title}</h4>
          <div className="flex flex-col gap-3">
            {links.map((l) => {
              // নির্দিষ্ট ৩টি লিংক ব্লু কালার করার কন্ডিশন
              const isBlue = ["Contact Us", "Get a demo", "Use Cases"].includes(l);
              
              return (
                <span 
                  key={l} 
                  className={`text-[13px] font-medium hover:underline cursor-pointer transition-colors w-fit ${
                    isBlue ? 'text-[#3b82f6]' : 'text-[#94a3b8]'
                  }`}
                >
                  {l}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
</footer>



    </div>
  );
}