"use client";

interface CommunityTabProps {
  domain: string;
}

const comments = [
  {
    user: "threat_hunter_01",
    color: "#fc6060",
    date: "2025-05-28 14:02:11 UTC",
    verdict: "malicious",
    body: "This domain is being used in a credential phishing campaign impersonating a popular forum login page. Reported to the registrar.",
    up: 14,
    down: 0,
  },
  {
    user: "blueteam_anna",
    color: "#58a6ff",
    date: "2025-04-11 09:47:33 UTC",
    verdict: "harmless",
    body: "Seen this resolve to Cloudflare. Hosting looks parked now, but keep an eye on the cpanel subdomain.",
    up: 6,
    down: 1,
  },
];

function VerdictBadge({ verdict }: { verdict: string }) {
  const map: Record<string, { c: string; bg: string }> = {
    malicious: { c: "#fc6060", bg: "#3a1f28" },
    harmless: { c: "#15b57f", bg: "#173228" },
    suspicious: { c: "#e2b83a", bg: "#3a3320" },
  };
  const s = map[verdict] ?? map.harmless;
  return (
    <span className="text-[11px] font-semibold px-2 py-[2px] rounded-full uppercase tracking-wide" style={{ color: s.c, backgroundColor: s.bg }}>
      {verdict}
    </span>
  );
}

export default function CommunityTab({ domain }: CommunityTabProps) {
  return (
    <div className="w-full pt-2 max-w-[920px]">
      {/* Comment composer */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[4px] mb-6">
        <textarea
          rows={3}
          placeholder={`Leave a comment about ${domain}...`}
          className="w-full bg-transparent outline-none resize-none text-[var(--tx)] text-[13.5px] px-4 py-3 placeholder-[var(--tx-faint)]"
        />
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--border)]">
          <span className="text-[var(--tx-faint)] text-[12px]">Markdown supported · You need to sign in to comment</span>
          <button className="bg-[#8ab4f8] text-[#1e293b] text-[12.5px] font-semibold px-4 py-[5px] rounded-full hover:bg-[#a1c4fa] transition-colors">
            Comment
          </button>
        </div>
      </div>

      {/* Sort bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] mb-2">
        <span className="text-[var(--tx-strong)] text-[13px] font-bold">{comments.length} Comments</span>
        <div className="flex items-center gap-1.5 text-[var(--tx-muted)] text-[12.5px] cursor-pointer hover:text-[var(--tx-soft)]">
          Latest
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Comments */}
      {comments.map((c, i) => (
        <div key={i} className="flex gap-3 py-4 border-b border-[var(--border)]/50 last:border-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
            style={{ backgroundColor: c.color }}
          >
            {c.user[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-[var(--tx-strong)] text-[13px] font-semibold">{c.user}</span>
              <VerdictBadge verdict={c.verdict} />
              <span className="text-[var(--tx-faint)] text-[11.5px]">{c.date}</span>
            </div>
            <p className="text-[var(--tx-soft)] text-[13px] leading-[1.6] mb-2.5">{c.body}</p>
            <div className="flex items-center gap-4 text-[var(--tx-muted)] text-[12px]">
              <button className="flex items-center gap-1 hover:text-[#15b57f] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.up}
              </button>
              <button className="flex items-center gap-1 hover:text-[#fc6060] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.down}
              </button>
              <button className="hover:text-[var(--tx-soft)] transition-colors">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
