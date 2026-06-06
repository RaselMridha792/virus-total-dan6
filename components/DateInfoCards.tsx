"use client";

interface DateInfoCardsProps {
  domain: string;
}

export default function DateInfoCards({ domain }: DateInfoCardsProps) {
  return (
    <div style={{
      maxWidth: "1440px",
      margin: "16px auto",
      padding: "0 20px",
    }}>
      {/* Main info card - the big rounded card */}
      <div style={{
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: "12px",
        overflow: "hidden",
      }}>
        {/* Top row: alert + Reanalyze/More */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          borderBottom: "1px solid #21262d",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="9" stroke="#8b949e" strokeWidth="1.8" />
              <line x1="12" y1="8" x2="12" y2="12" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="16" x2="12.01" y2="16" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{ color: "#8b949e", fontSize: "13px" }}>No security vendors flagged this domain as malicious</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button style={{
              background: "transparent",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#8b949e",
              fontSize: "13px",
              padding: "5px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Roboto, Arial, sans-serif",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <polyline points="23 4 23 10 17 10" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Reanalyze
            </button>
            <button style={{
              background: "transparent",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#8b949e",
              fontSize: "13px",
              padding: "5px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: "Roboto, Arial, sans-serif",
            }}>
              More
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom row: score circle + domain + dates + avatar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 20px",
          gap: "24px",
        }}>
          {/* Score circle */}
          <div style={{
            width: "100px",
            height: "100px",
            position: "relative",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: "absolute", top: 0, left: 0 }}>
              {/* Background circle */}
              <circle cx="50" cy="50" r="44" fill="none" stroke="#21262d" strokeWidth="6" />
              {/* Green arc - bottom portion like the original */}
              <circle
                cx="50" cy="50" r="44"
                fill="none"
                stroke="#3fb950"
                strokeWidth="6"
                strokeDasharray="138 138"
                strokeDashoffset="207"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div style={{ color: "#e6edf3", fontSize: "28px", fontWeight: "300", lineHeight: 1, position: "relative", zIndex: 1 }}>0</div>
            <div style={{ color: "#8b949e", fontSize: "11px", position: "relative", zIndex: 1 }}>/ 91</div>
            <div style={{ color: "#8b949e", fontSize: "10px", textAlign: "center", marginTop: "4px", lineHeight: 1.3, position: "relative", zIndex: 1 }}>Community<br />Score</div>
            {/* Small toggle dots below */}
            <div style={{ display: "flex", gap: "3px", marginTop: "6px", position: "relative", zIndex: 1 }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#21262d", border: "1px solid #30363d" }} />
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#21262d", border: "1px solid #30363d" }} />
            </div>
          </div>

          {/* Domain name */}
          <div style={{ flex: 1 }}>
            <div style={{ color: "#e6edf3", fontSize: "18px", fontWeight: "400" }}>{domain}</div>
          </div>

          {/* Dates */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px", marginRight: "16px" }}>
            <div id="creation-date-block">
              <div style={{ color: "#8b949e", fontSize: "11px", marginBottom: "4px", fontWeight: "400" }}>Creation Date</div>
              <div style={{ color: "#e6edf3", fontSize: "13px", fontWeight: "400" }}>2 months ago</div>
            </div>
            <div id="last-analysis-date-block">
              <div style={{ color: "#8b949e", fontSize: "11px", marginBottom: "4px", fontWeight: "400" }}>Last Analysis Date</div>
              <div style={{ color: "#e6edf3", fontSize: "13px", fontWeight: "400" }}>1 hour ago</div>
            </div>
          </div>

          {/* Avatar */}
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "2px solid #30363d",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#21262d",
            flexShrink: 0,
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#8b949e" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#8b949e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
