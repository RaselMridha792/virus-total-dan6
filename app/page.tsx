"use client";
import { useState } from "react";
import SearchHeader from "@/components/SearchHeader";
import DateInfoCards from "@/components/DateInfoCards";
import DomainReportMock from "@/components/DomainReportMock";
import TimestampFooter from "@/components/TimestampFooter";

export default function Home() {
  const [domain, setDomain] = useState("adrforums.net");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d1117" }}>
      <SearchHeader domain={domain} onSearch={setDomain} />
      <DateInfoCards domain={domain} />
      <DomainReportMock domain={domain} />
      <TimestampFooter />
    </div>
  );
}
