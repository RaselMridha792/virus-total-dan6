"use client";

interface DateInfoCardsProps {
  domain: string;
}

export default function DateInfoCards({ domain }: DateInfoCardsProps) {
  return (
    // মূল কনটেইনার
    <div className="w-full mx-auto px-4 md:px-10 my-6 font-sans ">
      <div className="flex flex-col md:flex-row gap-4 ">
        
        {/* 🔴 LEFT CARD: Score Card */}
        <div className="bg-[var(--surface)] rounded-[4px] p-6 flex flex-col items-center justify-center min-w-[160px] shadow-sm">
          <div className="relative w-[90px] h-[90px] flex flex-col items-center justify-center mb-4">
            {/* Background & Progress Circle */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--border-2)" strokeWidth="5" />
              {/* Slight red stroke for '1' out of 91 */}
              <circle cx="50" cy="50" r="44" fill="none" stroke="#fc6060" strokeWidth="5" strokeLinecap="round" strokeDasharray="276" strokeDashoffset="268" />
            </svg>
            {/* Top Red Dot */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="6" r="3.5" fill="#fc6060" />
            </svg>

            {/* Score Text */}
            <div className="text-[#fc6060] text-[28px] font-medium leading-none relative z-10 mt-1">1</div>
            <div className="text-[var(--tx-muted)] text-[12px] font-medium relative z-10 mt-0.5">/ 91</div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="text-[var(--tx-muted)] text-[11px] text-right leading-tight">Community<br />Score</div>
            {/* Community Score Toggle Icon */}
            <div className="w-[34px] h-[20px] bg-[var(--border-2)] rounded-full flex items-center justify-between px-[5px] cursor-pointer hover:bg-[#3a4960] transition-colors">
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#8ba0b2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#8ba0b2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* 🔵 RIGHT CARD: Information Card */}
        <div className="flex-1 flex flex-col bg-[var(--surface)] rounded-[4px] shadow-sm">
          
          {/* Top Bar (Warning Section) */}
          <div className="bg-[var(--surface-hi)] px-5 py-5 flex items-center justify-between rounded-t-[4px] border-b border-[var(--border-2)]/70">
            <div className="flex items-center gap-2.5">
              {/* Warning Exclamation Icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-[#fc6060] shrink-0">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="17" r="1.2" fill="currentColor"/>
              </svg>
              <span className="text-[#fc6060] text-[13px] font-medium tracking-wide">
            1/91 security vendor flagged this domain as malicious
              </span>
            </div>
            
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1.5 text-[var(--tx)] hover:text-white text-[13px] font-medium transition-colors">
                {/* Reload / Reanalyze Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 2v6h-6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12a9 9 0 1 0 2.1-5.7L9 8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Reanalyze
              </button>
              <button className="flex items-center gap-1 text-[var(--tx)] hover:text-white text-[13px] font-medium transition-colors">
                More
                {/* Chevron Down Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Main Body (Domain & Dates) */}
          <div className="px-6 py-6 flex flex-col md:flex-row md:items-center justify-between flex-1">
            <div className="text-[var(--tx)] text-[14px] font-medium">
              {domain}
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              {/* Creation Date */}
              <div className="flex flex-col pr-5">
                <span className="text-[var(--tx-muted)] text-[11px] mb-0.5">Creation Date</span>
                <span className="text-[var(--tx-strong)] text-[13px] font-medium">3 months ago</span>
              </div>
              
              {/* Divider */}
              <div className="w-[1px] h-9 bg-[var(--border-2)] mx-1" />
              
              {/* Last Analysis Date */}
              <div className="flex flex-col pl-4 pr-6">
                <span className="text-[var(--tx-muted)] text-[11px] mb-0.5">Last Analysis Date</span>
                <span className="text-[var(--tx-strong)] text-[13px] font-medium">1 day ago</span>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-9 bg-[var(--border-2)] mx-1" />
              
              {/* Custom SVG Icon as provided */}
              <div className="relative ml-5 shrink-0 cursor-pointer hover:bg-white/5 transition-colors rounded-full p-2">
                <div className="w-[62px] h-[62px] rounded-full bg-[var(--inset)] flex items-center justify-center border border-[var(--border-2)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="42" 
                    height="42" 
                    viewBox="0 0 24 24" 
                    fill="var(--tx-strong)"
                  >
                    <path d="M8.378 20.564a9.01 9.01 0 0 0 3.622.734v-1.399c-2.24-.022-4.116-.802-5.63-2.341C4.858 16.018 4.1 14.166 4.1 12c0-.296.022-.592.063-.887.042-.296.088-.594.138-.893l4.76 4.76h.963V12H8.04v-1.979h1.979a.97.97 0 0 0 .713-.288.97.97 0 0 0 .288-.715V7.061h1.96c.546 0 1.013-.194 1.4-.582.386-.387.58-.853.58-1.397v-.42a7.68 7.68 0 0 1 3.167 2.34 7.837 7.837 0 0 1 1.622 3.554h1.429c-.34-2.236-1.371-4.105-3.094-5.604-1.723-1.5-3.75-2.25-6.08-2.25a9.047 9.047 0 0 0-3.627.733 9.373 9.373 0 0 0-2.952 1.991 9.461 9.461 0 0 0-1.99 2.952 9.007 9.007 0 0 0-.733 3.62c0 1.286.244 2.494.733 3.625a9.372 9.372 0 0 0 1.991 2.952 9.463 9.463 0 0 0 2.952 1.99Z"></path>
                    <path d="m13.098 16.295 1.472 1.472.87-.87-1.47-1.471a1.677 1.677 0 0 1-.513-1.23c0-.477.17-.886.511-1.228.341-.34.75-.511 1.229-.51.478 0 .887.17 1.229.511l1.47 1.472.87-.87-1.471-1.473a2.864 2.864 0 0 0-2.097-.872 2.854 2.854 0 0 0-2.098.87 2.864 2.864 0 0 0-.872 2.1c0 .819.29 1.518.87 2.099Z"></path>
                    <path d="m16.04 14.245-.795.795 3.134 3.134.795-.795-3.134-3.135Z"></path>
                    <path d="m16.522 17.978-.87.87 1.472 1.473c.58.58 1.28.87 2.097.872a2.854 2.854 0 0 0 2.097-.87 2.864 2.864 0 0 0 .873-2.1c0-.819-.29-1.518-.87-2.099l-1.473-1.472-.87.87 1.471 1.471c.342.342.512.751.513 1.23 0 .477-.17.886-.512 1.227-.34.341-.75.512-1.228.512s-.887-.171-1.229-.513l-1.47-1.47Z"></path>
                  </svg>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}