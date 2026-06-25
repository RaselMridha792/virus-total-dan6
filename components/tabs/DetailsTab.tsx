"use client";

interface DetailsTabProps {
  domain: string;
}

// 🔽 Collapsible-style section card (header + body) matching VT
function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-[4px] mb-5 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--surface)]">
        <span className="text-[var(--tx-strong)] text-[13.5px] font-bold tracking-wide">{title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8ba0b2" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

// Key / value row used across DETAILS
function KvRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-4 py-1.5 border-b border-[var(--border)]/40 last:border-0">
      <span className="text-[var(--tx-muted)] text-[13px]">{k}</span>
      <span className="text-[var(--tx)] text-[13px] break-words">{v}</span>
    </div>
  );
}

const categories = [
  ["alphaMountain.ai", "Forums/Message boards"],
  ["BitDefender", "marketing"],
  ["Forcepoint ThreatSeeker", "uncategorized"],
  ["Sophos", "forums"],
  ["Webroot", "Forums and Newsgroups"],
  ["Xcitium Verdict Cloud", "Media Sharing"],
];

const dnsRecords = [
  ["A", "300", "104.21.34.160"],
  ["A", "300", "172.67.176.119"],
  ["AAAA", "300", "2606:4700:3030::6815:22a0"],
  ["AAAA", "300", "2606:4700:3031::ac43:b077"],
  ["NS", "21600", "kara.ns.cloudflare.com"],
  ["NS", "21600", "rex.ns.cloudflare.com"],
  ["MX", "300", "10 mail.adrforums.net"],
  ["SOA", "3600", "kara.ns.cloudflare.com dns.cloudflare.com 2350890123"],
  ["TXT", "300", "v=spf1 include:_spf.google.com ~all"],
];

export default function DetailsTab({ domain }: DetailsTabProps) {
  return (
    <div className="w-full pt-2">
      {/* Categories */}
      <SectionCard title="Categories">
        <div className="flex flex-col">
          {categories.map(([src, cat]) => (
            <div key={src} className="grid grid-cols-[280px_1fr] gap-4 py-2 border-b border-[var(--border)]/40 last:border-0">
              <span className="text-[var(--tx-muted)] text-[13px]">{src}</span>
              <span className="text-[var(--tx)] text-[13px]">{cat}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Whois Lookup */}
      <SectionCard title="Whois Lookup">
        <pre className="text-[var(--tx-soft)] text-[12.5px] leading-[1.7] whitespace-pre-wrap font-mono">{`Domain Name: ${domain.toUpperCase()}
Registry Domain ID: 2783901234_DOMAIN_NET-VRSN
Registrar WHOIS Server: whois.namecheap.com
Registrar URL: http://www.namecheap.com
Updated Date: 2025-02-14T08:22:41Z
Creation Date: 2024-03-19T15:04:12Z
Registrar Registration Expiration Date: 2026-03-19T15:04:12Z
Registrar: NameCheap, Inc.
Registrar IANA ID: 1068
Registrar Abuse Contact Email: abuse@namecheap.com
Registrar Abuse Contact Phone: +1.6613102107
Domain Status: clientTransferProhibited
Name Server: KARA.NS.CLOUDFLARE.COM
Name Server: REX.NS.CLOUDFLARE.COM
DNSSEC: unsigned`}</pre>
      </SectionCard>

      {/* Last HTTPS Certificate */}
      <SectionCard title="Last HTTPS Certificate">
        <KvRow k="Validity" v="2025-04-02 00:00:00 to 2025-07-01 23:59:59" />
        <KvRow k="Subject" v={`CN=${domain}`} />
        <KvRow k="Subject Alternative Name" v={`${domain}, *.${domain}`} />
        <KvRow k="Public Key Algorithm" v="id-ecPublicKey (256 bits)" />
        <KvRow k="Signature Algorithm" v="ecdsa-with-SHA256" />
        <KvRow k="Serial Number" v="04:c1:9a:2f:7e:88:b3:01:55:de:90:aa:71:23:8b:0c" />
        <KvRow k="Thumbprint (SHA-256)" v="9f2b1c83a4e6d7510f9c2a8b34de5621fa07cc99b1d4e3a5c0f8721e6b2d04af" />
        <KvRow k="Issuer" v="C=US, O=Google Trust Services, CN=WE1" />
      </SectionCard>

      {/* DNS Records */}
      <SectionCard title="Last DNS Records">
        <div className="grid grid-cols-[100px_120px_1fr] gap-4 pb-2 border-b border-[var(--border)] mb-1">
          <span className="text-[var(--tx-muted)] text-[11.5px] font-bold tracking-wider uppercase">Record type</span>
          <span className="text-[var(--tx-muted)] text-[11.5px] font-bold tracking-wider uppercase">TTL</span>
          <span className="text-[var(--tx-muted)] text-[11.5px] font-bold tracking-wider uppercase">Value</span>
        </div>
        {dnsRecords.map(([type, ttl, value], i) => (
          <div key={i} className="grid grid-cols-[100px_120px_1fr] gap-4 py-2 border-b border-[var(--border)]/40 last:border-0">
            <span className="text-[#58a6ff] text-[13px] font-medium">{type}</span>
            <span className="text-[var(--tx-muted)] text-[13px]">{ttl}</span>
            <span className="text-[var(--tx)] text-[13px] font-mono break-all">{value}</span>
          </div>
        ))}
      </SectionCard>
    </div>
  );
}
