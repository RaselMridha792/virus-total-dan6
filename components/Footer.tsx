export default function Footer() {
  const footerData = {
    "Our product": ["Contact Us", "Get Support", "How It Works", "ToS | Privacy Notice", "Blog | Releases"],
    "Community": ["Join Community", "Vote and Comment", "Contributors", "Top Users", "Community Buzz"],
    "Tools": ["API Scripts", "YARA", "Desktop Apps", "Browser Extensions", "Mobile App"],
    "Premium Services": ["Get a demo", "Intelligence", "Hunting", "Graph", "API v3 | v2"],
    "Documentation": ["Searching", "Reports", "API v3 | v2", "Use Cases"]
  };

  return (
    <footer className="w-full bg-[#0d131a] pt-12 pb-8 border-t border-[#1a232e]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title} className="flex flex-col">
            <h4 className="text-[#e2e8f0] text-[13px] font-bold mb-4 tracking-wide">{title}</h4>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className={`text-[12.5px] font-medium transition-colors hover:text-[#58a6ff] w-fit ${
                    // স্ক্রিনশট অনুযায়ী নির্দিষ্ট কিছু লিঙ্ক হাইলাইট করা
                    link === "Contact Us" || link === "Get a demo" || link === "Use Cases"
                      ? "text-[#58a6ff]"
                      : "text-[#8ba0b2]"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}