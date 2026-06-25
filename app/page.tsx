"use client";
import { useEffect, useState } from "react";
import SearchHeader from "@/components/SearchHeader";
import DateInfoCards from "@/components/DateInfoCards";
import DomainReportMock from "@/components/DomainReportMock";

export default function Home() {
  const [domain, setDomain] = useState("adrforums.net");
  // Initialise from localStorage on the client so the first client render is already correct
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("vt-theme") as "dark" | "light") || "dark";
  });

  // Apply theme to <html> and persist
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("vt-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg)", position: "relative" }}>
      <SearchHeader domain={domain} onSearch={setDomain} theme={theme} onToggleTheme={toggleTheme} />
      <DateInfoCards domain={domain} />
      <DomainReportMock domain={domain} />
    </div>
  );
}
