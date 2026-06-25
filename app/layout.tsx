import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VirusTotal",
  description: "Analyse suspicious files, domains, IPs and URLs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}