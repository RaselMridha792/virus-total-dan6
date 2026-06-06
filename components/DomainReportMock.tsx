"use client";
import { useState } from "react";
import { mockReportData } from "@/lib/mockReportData";

interface DomainReportMockProps {
  domain: string;
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="#3fb950" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="#3fb950" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="#484f58" strokeWidth="1.5" />
      <text x="10" y="14.5" textAnchor="middle" fontSize="11" fill="#8b949e" fontFamily="Roboto, Arial, sans-serif" fontWeight="500">?</text>
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
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px 80px" }}>

      {/* Tabs card */}
      <div style={{
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: "10px",
        marginBottom: "12px",
        padding: "0 8px",
        display: "inline-flex",
      }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: activeTab === tab ? "2px solid #58a6ff" : "2px solid transparent",
              color: activeTab === tab ? "#58a6ff" : "#8b949e",
              fontSize: "13px",
              fontWeight: "500",
              fontFamily: "Roboto, Arial, sans-serif",
              padding: "12px 20px",
              cursor: "pointer",
              letterSpacing: "0.5px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main content card */}
      <div style={{
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: "12px",
        overflow: "hidden",
      }}>

        {/* Community banner - with left blue border */}
        <div style={{
          backgroundColor: "#1c2128",
          borderBottom: "1px solid #30363d",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "0",
          borderLeft: "3px solid #58a6ff",
          margin: "16px 20px",
          borderRadius: "0 6px 6px 0",
        }}>
          <span style={{ color: "#58a6ff", fontWeight: "500", fontSize: "13px", cursor: "pointer" }}>Join our Community</span>
          <span style={{ color: "#8b949e", fontSize: "13px" }}>&nbsp;and enjoy additional community insights and crowdsourced detections, plus an API key to&nbsp;</span>
          <span style={{ color: "#58a6ff", fontWeight: "500", fontSize: "13px", cursor: "pointer", textDecoration: "underline" }}>automate checks.</span>
        </div>

        {/* Security vendors header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 20px 10px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#e6edf3", fontSize: "13px", fontWeight: "500" }}>Security vendors&apos; analysis</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#8b949e" strokeWidth="1.8" />
              <line x1="12" y1="8" x2="12" y2="12" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="16" x2="12.01" y2="16" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ color: "#58a6ff", fontSize: "13px", cursor: "pointer" }}>Do you want to automate checks?</span>
        </div>

        {/* Vendor table */}
        <div>
          {/* CLEAN rows */}
          {Array.from({ length: maxClean }).map((_, i) => {
            const left = cleanLeft[i];
            const right = cleanRight[i];
            return (
              <div key={`clean-${i}`} style={{
                display: "flex",
                borderTop: "1px solid #21262d",
              }}>
                {/* Left */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "11px 20px",
                  borderRight: "1px solid #21262d",
                  gap: "12px",
                }}>
                  {left && (
                    <>
                      <span style={{ color: "#e6edf3", fontSize: "13px", flex: 1 }}>{left}</span>
                      <CheckIcon />
                      <span style={{ color: "#3fb950", fontSize: "13px", minWidth: "40px" }}>Clean</span>
                    </>
                  )}
                </div>
                {/* Right */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "11px 20px",
                  gap: "12px",
                }}>
                  {right && (
                    <>
                      <span style={{ color: "#e6edf3", fontSize: "13px", flex: 1 }}>{right}</span>
                      <CheckIcon />
                      <span style={{ color: "#3fb950", fontSize: "13px", minWidth: "40px" }}>Clean</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* UNRATED rows */}
          {Array.from({ length: maxUnrated }).map((_, i) => {
            const left = unratedLeft[i];
            const right = unratedRight[i];
            return (
              <div key={`unrated-${i}`} style={{
                display: "flex",
                borderTop: "1px solid #21262d",
              }}>
                {/* Left */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "11px 20px",
                  borderRight: "1px solid #21262d",
                  gap: "12px",
                }}>
                  {left && (
                    <>
                      <span style={{ color: "#8b949e", fontSize: "13px", flex: 1 }}>{left}</span>
                      <QuestionIcon />
                      <span style={{ color: "#8b949e", fontSize: "13px", minWidth: "50px" }}>Unrated</span>
                    </>
                  )}
                </div>
                {/* Right */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "11px 20px",
                  gap: "12px",
                }}>
                  {right && right.trim() !== "" && (
                    <>
                      <span style={{ color: "#8b949e", fontSize: "13px", flex: 1 }}>{right}</span>
                      <QuestionIcon />
                      <span style={{ color: "#8b949e", fontSize: "13px", minWidth: "50px" }}>Unrated</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: "12px",
        marginTop: "20px",
        padding: "32px 40px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          {[
            { title: "Our product", links: ["Contact Us", "Get Support", "How it Works", "ToS | Privacy Notice", "Blog | Releases"] },
            { title: "Community", links: ["Join Community", "Vote and Comment", "Contributors", "Top Users", "Community Buzz"] },
            { title: "Tools", links: ["API Scripts", "YARA", "Desktop Apps", "Browser Extensions", "Mobile App"] },
            { title: "Premium Services", links: ["Get a demo", "Intelligence", "Reports", "Hunting", "Graph", "API v3 | v2"] },
            { title: "Documentation", links: ["Searching", "Reports", "API v3 | v2", "Graph", "Use Cases"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ color: "#e6edf3", fontSize: "13px", fontWeight: "600", marginBottom: "12px" }}>{title}</div>
              {links.map((l) => (
                <div key={l} style={{ color: "#8b949e", fontSize: "12px", marginBottom: "8px", cursor: "default" }}>{l}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
