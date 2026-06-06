"use client";

import { useState } from "react";
import { mockReportData } from "@/lib/mockReportData";

interface DomainReportMockProps {
  domain: string;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="9" fill="none" stroke="#15b57f" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="#15b57f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="9" fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <text x="10" y="14.5" textAnchor="middle" fontSize="11" fill="#9ca3af" fontFamily="sans-serif" fontWeight="500">?</text>
    </svg>
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
    <div className="w-full  mx-auto px-10 pb-24 font-sans">
      {/* 🚀 Tabs */}
      <div className="flex gap-8 border-b border-[#313e52] mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-[13px] font-bold tracking-wide transition-colors ${
              activeTab === tab ? "text-[#58a6ff]" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#58a6ff]" />}
          </button>
        ))}
      </div>

      {/* 🚀 Main Content */}
      <div className="w-full">
        {/* Community banner */}
        <div className="bg-[#212c3d] flex items-center px-5 py-4 border-l-[3px] border-[#58a6ff] mb-8 rounded-r-md">
          <p className="text-[13px] text-gray-300">
            <span className="text-white font-bold cursor-pointer hover:underline">Join our Community</span>
            {" and enjoy additional community insights and crowdsourced detections, plus an API key to "}
            <span className="text-white font-bold cursor-pointer hover:underline">automate checks.</span>
          </p>
        </div>

        {/* Security vendors header */}
        <div className="flex items-center justify-between px-2 pb-3 border-b border-[#313e52]">
          <div className="flex items-center gap-2">
            <span className="text-[#e2e8f0] text-[14px] font-bold tracking-wide">Security vendors' analysis</span>
            <QuestionIcon />
          </div>
          <span className="text-[#e2e8f0] text-[13px] font-medium cursor-pointer hover:underline">
            Do you want to automate checks?
          </span>
        </div>

        {/* Vendor table */}
        <div className="flex flex-col border border-[#313e52] rounded-md overflow-hidden">
          {Array.from({ length: maxClean }).map((_, i) => (
            <div key={`clean-${i}`} className="flex border-b border-[#313e52] last:border-b-0 hover:bg-[#212c3d]/40 transition-colors">
              <div className="w-1/2 flex items-center justify-between px-6 py-3 border-r border-[#313e52]">
                <span className="text-[#e2e8f0] text-[13px] font-medium">{cleanLeft[i]}</span>
                <div className="flex items-center gap-2"><CheckIcon /><span className="text-[#15b57f] text-[13px] font-medium">Clean</span></div>
              </div>
              <div className="w-1/2 flex items-center justify-between px-6 py-3">
                <span className="text-[#e2e8f0] text-[13px] font-medium">{cleanRight[i]}</span>
                <div className="flex items-center gap-2"><CheckIcon /><span className="text-[#15b57f] text-[13px] font-medium">Clean</span></div>
              </div>
            </div>
          ))}

          {Array.from({ length: maxUnrated }).map((_, i) => (
            <div key={`unrated-${i}`} className="flex border-b border-[#313e52] last:border-b-0 hover:bg-[#212c3d]/40 transition-colors">
              <div className="w-1/2 flex items-center justify-between px-6 py-3 border-r border-[#313e52]">
                <span className="text-[#8b949e] text-[13px] font-medium">{unratedLeft[i]}</span>
                <div className="flex items-center gap-2"><QuestionIcon /><span className="text-[#8b949e] text-[13px] font-medium">Unrated</span></div>
              </div>
              <div className="w-1/2 flex items-center justify-between px-6 py-3">
                {unratedRight[i] && (
                  <>
                    <span className="text-[#8b949e] text-[13px] font-medium">{unratedRight[i]}</span>
                    <div className="flex items-center gap-2"><QuestionIcon /><span className="text-[#8b949e] text-[13px] font-medium">Unrated</span></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 Footer (Max-w-7xl) */}
      <footer className="mt-16 pt-10 pb-8 border-t border-[#313e52]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Our product", links: ["Contact Us", "Get Support", "How it Works", "ToS | Privacy Notice", "Blog | Releases"] },
            { title: "Community", links: ["Join Community", "Vote and Comment", "Contributors", "Top Users", "Community Buzz"] },
            { title: "Tools", links: ["API Scripts", "YARA", "Desktop Apps", "Browser Extensions", "Mobile App"] },
            { title: "Premium Services", links: ["Get a demo", "Intelligence", "Reports", "Hunting", "Graph", "API v3 | v2"] },
            { title: "Documentation", links: ["Searching", "Reports", "API v3 | v2", "Use Cases"] },
          ].map(({ title, links }) => (
            <div key={title} className="flex flex-col">
              <h4 className="text-[#e2e8f0] text-[14px] font-bold mb-4">{title}</h4>
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <span key={l} className="text-[#e2e8f0] text-[13px] font-medium hover:underline cursor-pointer transition-colors w-fit">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}