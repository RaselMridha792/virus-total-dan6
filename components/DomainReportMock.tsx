"use client";

import { useState } from "react";
import { mockReportData } from "@/lib/mockReportData";
import DetailsTab from "@/components/tabs/DetailsTab";
import RelationsTab from "@/components/tabs/RelationsTab";
import CommunityTab from "@/components/tabs/CommunityTab";

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
      <span className="text-[13px] font-medium tracking-wide text-[var(--tx-strong)]">Clean</span>
    </div>
  );
}

// One table row: two halves, each = [name | verdict]. Verdict sits in a fixed
// sub-column ~40% into each half (matches VT), border spans full width.
function VendorRow({ left, right, status, muted, header }: { left: string; right: string; status: string; muted: boolean; header?: boolean }) {
  const nameCls = `text-[13px] pr-4 ${header ? "font-semibold text-[var(--tx-strong)]" : "font-medium"} ${muted ? "text-[var(--tx-muted)]" : header ? "" : "text-[var(--tx)]"}`;
  return (
    <div className={`grid grid-cols-[2fr_3fr_2fr_3fr] items-center min-h-[46px] px-2 hover:bg-[var(--surface-2)]/40 transition-colors ${header ? "border-b-2 border-[var(--border)]" : "border-b border-[var(--border)]/60"}`}>
      <span className={nameCls}>{left}</span>
      <div><StatusIndicator vendorName={left} defaultStatus={status} /></div>
      <span className={nameCls}>{right}</span>
      <div><StatusIndicator vendorName={right} defaultStatus={status} /></div>
    </div>
  );
}

export default function DomainReportMock({ domain }: DomainReportMockProps) {
  const [activeTab, setActiveTab] = useState("DETECTION");
  const tabs = ["DETECTION", "DETAILS", "RELATIONS", "COMMUNITY"];

  // Flagged vendors are pinned to the top as a header row, so remove them from the
  // clean/unrated lists to avoid showing them twice.
  const cleanLeft = mockReportData.cleanVendors;
  const cleanRight = mockReportData.cleanVendorsRight.filter((v) => v !== "SOCRadar");
  const unratedLeft = mockReportData.unratedVendors.filter((v) => v !== "Gridinsoft");
  const unratedRight = mockReportData.unratedVendorsRight;

  const maxClean = Math.max(cleanLeft.length, cleanRight.length);
  const maxUnrated = Math.max(unratedLeft.length, unratedRight.length);

  return (
    <div className="w-full mx-auto px-4 md:px-10 pb-16 font-sans bg-[var(--bg)]">
      
      {/* 🚀 Tabs */}
      <div className="flex gap-2 border-b border-[var(--border)] mb-6 px-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 pb-3.5 text-[14px] font-normal tracking-wider transition-colors text-[var(--tx-strong)]"
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[2.5px] bg-[#58a6ff]" />}
          </button>
        ))}
      </div>

      {/* 🚀 Main Content */}
      {activeTab === "DETAILS" && <DetailsTab domain={domain} />}
      {activeTab === "RELATIONS" && <RelationsTab domain={domain} />}
      {activeTab === "COMMUNITY" && <CommunityTab domain={domain} />}

      <div className={activeTab === "DETECTION" ? "w-full" : "hidden"}>
        {/* Community banner */}
        <div className="bg-[var(--banner)] flex items-center px-5 py-3 border-l-[3px] border-[#00bcd4] mb-8 rounded-[2px]">
          <p className="text-[13.5px] text-[var(--tx)]">
            <span className="font-bold cursor-pointer underline decoration-1 underline-offset-2 text-[var(--tx-strong)] hover:text-[var(--tx-strong)]">Join our Community</span>
            {" and enjoy additional community insights and crowdsourced detections, plus an API key to "}
            <span className="font-bold cursor-pointer underline decoration-1 underline-offset-2 text-[var(--tx-strong)] hover:text-[var(--tx-strong)]">automate checks.</span>
          </p>
        </div>

        {/* Security vendors header */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 pl-2">
            <span className="text-[var(--tx-strong)] text-[13.5px] font-bold tracking-wide">Security vendors' analysis</span>
            <InfoIcon />
          </div>
          <span className="text-[var(--tx-strong)] text-[12.5px] font-medium cursor-pointer hover:underline transition-all pr-2">
            Do you want to automate checks?
          </span>
        </div>

        {/* Vendor table — full-width rows, verdict in a fixed sub-column (VT layout) */}
        <div className="flex flex-col">
          {/* Flagged vendors pinned to top as header row */}
          <VendorRow left="SOCRadar" right="Gridinsoft" status="Clean" muted={false} header />

          {/* Clean Section */}
          {Array.from({ length: maxClean }).map((_, i) =>
            cleanLeft[i] || cleanRight[i] ? (
              <VendorRow key={`clean-${i}`} left={cleanLeft[i] ?? ""} right={cleanRight[i] ?? ""} status="Clean" muted={false} />
            ) : null
          )}

          {/* Unrated Section */}
          {Array.from({ length: maxUnrated }).map((_, i) =>
            unratedLeft[i] || unratedRight[i] ? (
              <VendorRow key={`unrated-${i}`} left={unratedLeft[i] ?? ""} right={unratedRight[i] ?? ""} status="Unrated" muted />
            ) : null
          )}
        </div>
      </div>
            
<footer className="w-full mt-16 pt-10 pb-8 border-t border-[var(--border-2)] ">
  <div className="max-w-[1080px] mx-auto px-4">
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
          <h4 className="text-[var(--tx-strong)] text-[14px] font-bold ">{title}</h4>
          <div className="flex flex-col gap-3">
            {links.map((l) => {
              // নির্দিষ্ট ৩টি লিংক ব্লু কালার করার কন্ডিশন
              const isBlue = ["Contact Us", "Get a demo", "Use Cases"].includes(l);
              
              return (
                <span 
                  key={l} 
                  className={`text-[13px] font-medium hover:underline cursor-pointer transition-colors w-fit ${
                    isBlue ? 'text-[#3b82f6]' : 'text-[var(--tx-muted)]'
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