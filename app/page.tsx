"use client";
import { useState } from "react";
import SearchHeader from "@/components/SearchHeader";
import DateInfoCards from "@/components/DateInfoCards";
import DomainReportMock from "@/components/DomainReportMock";
import TimestampWidget from "@/components/TimestampWidget"; 

export default function Home() {
  const [domain, setDomain] = useState("adrforums.net");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d1117", position: "relative" }}>
      {/* একদম উপরে ভাসমান থাকার জন্য এই উইজেটটি */}
      <TimestampWidget />
      
      <SearchHeader domain={domain} onSearch={setDomain} />
      <DateInfoCards domain={domain} />
      <DomainReportMock domain={domain} />
    </div>
  );
}