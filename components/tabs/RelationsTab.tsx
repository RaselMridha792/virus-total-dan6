"use client";

interface RelationsTabProps {
  domain: string;
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-[4px] mb-5 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--surface)]">
        <span className="text-[var(--tx-strong)] text-[13.5px] font-bold tracking-wide">{title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8ba0b2" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
}

// small green/red detection ratio pill like VT
function Ratio({ bad, total }: { bad: number; total: number }) {
  const color = bad > 0 ? "text-[#fc6060]" : "text-[var(--tx-muted)]";
  return <span className={`text-[12.5px] font-medium ${color}`}>{bad} / {total}</span>;
}

const passiveDns = [
  ["2025-05-12", 0, 60, "VirusTotal", "104.21.34.160"],
  ["2025-05-12", 0, 60, "VirusTotal", "172.67.176.119"],
  ["2025-03-21", 1, 60, "VirusTotal", "188.114.96.7"],
  ["2024-11-08", 0, 60, "VirusTotal", "188.114.97.7"],
];

const subdomains = [
  ["www.", 0],
  ["mail.", 0],
  ["cpanel.", 1],
  ["webmail.", 0],
];

const communicatingFiles = [
  ["2025-05-30", 38, "Win32 EXE", "setup_installer.exe"],
  ["2025-04-17", 12, "Android", "update.apk"],
  ["2025-02-02", 5, "HTML", "login.html"],
];

export default function RelationsTab({ domain }: RelationsTabProps) {
  return (
    <div className="w-full pt-2">
      {/* Passive DNS Replication */}
      <SectionCard title="Passive DNS Replication">
        <div className="grid grid-cols-[140px_120px_100px_1fr_180px] gap-3 pb-2 border-b border-[var(--border)] mb-1">
          {["Date resolved", "Detections", "Resolver", "", "IP"].map((h, i) => (
            <span key={i} className="text-[var(--tx-muted)] text-[11.5px] font-bold tracking-wider uppercase">{h}</span>
          ))}
        </div>
        {passiveDns.map(([date, bad, total, resolver, ip], i) => (
          <div key={i} className="grid grid-cols-[140px_120px_100px_1fr_180px] gap-3 py-2 border-b border-[var(--border)]/40 last:border-0 items-center">
            <span className="text-[var(--tx-muted)] text-[13px]">{date as string}</span>
            <Ratio bad={bad as number} total={total as number} />
            <span className="text-[var(--tx-muted)] text-[13px]">{resolver as string}</span>
            <span />
            <span className="text-[#58a6ff] text-[13px] font-mono">{ip as string}</span>
          </div>
        ))}
      </SectionCard>

      {/* Subdomains */}
      <SectionCard title="Subdomains">
        {subdomains.map(([sub, bad], i) => (
          <div key={i} className="grid grid-cols-[1fr_120px] gap-3 py-2 border-b border-[var(--border)]/40 last:border-0 items-center">
            <span className="text-[#58a6ff] text-[13px] font-mono">{sub as string}{domain}</span>
            <Ratio bad={bad as number} total={94} />
          </div>
        ))}
      </SectionCard>

      {/* Sibling Domains */}
      <SectionCard title="Sibling Domains">
        <p className="text-[var(--tx-muted)] text-[13px] py-1">No sibling domains were found.</p>
      </SectionCard>

      {/* Communicating Files */}
      <SectionCard title="Communicating Files">
        <div className="grid grid-cols-[140px_120px_140px_1fr] gap-3 pb-2 border-b border-[var(--border)] mb-1">
          {["Scanned", "Detections", "Type", "Name"].map((h) => (
            <span key={h} className="text-[var(--tx-muted)] text-[11.5px] font-bold tracking-wider uppercase">{h}</span>
          ))}
        </div>
        {communicatingFiles.map(([date, bad, type, name], i) => (
          <div key={i} className="grid grid-cols-[140px_120px_140px_1fr] gap-3 py-2 border-b border-[var(--border)]/40 last:border-0 items-center">
            <span className="text-[var(--tx-muted)] text-[13px]">{date as string}</span>
            <Ratio bad={bad as number} total={72} />
            <span className="text-[var(--tx-muted)] text-[13px]">{type as string}</span>
            <span className="text-[#58a6ff] text-[13px] font-mono break-all">{name as string}</span>
          </div>
        ))}
      </SectionCard>

      {/* Referrer Files */}
      <SectionCard title="Referrer Files">
        <p className="text-[var(--tx-muted)] text-[13px] py-1">No referrer files were found.</p>
      </SectionCard>
    </div>
  );
}
