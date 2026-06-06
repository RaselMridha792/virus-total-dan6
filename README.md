# VirusTotal Mockup + Timestamp Extension

## Project Structure

```
virustotal-mockup/
├── app/
│   ├── page.tsx                ← Main single page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SearchHeader.tsx        ← Top navbar with search
│   ├── DomainReportMock.tsx    ← Tabs + vendor rows + footer
│   ├── TimestampFooter.tsx     ← Built-in editable UTC timestamp
│   └── DateInfoCards.tsx       ← Score + domain + dates area
├── lib/
│   └── mockReportData.ts       ← All vendor names & mock data
├── extension/
│   ├── manifest.json           ← Manifest V3
│   ├── content.js              ← Injects overlay on any page
│   ├── content.css             ← Solid grey overlay style
│   ├── popup.html              ← Extension popup UI
│   └── popup.js                ← Popup logic
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Part 1: Run the Website (Next.js)

### Requirements
- Node.js 18+ installed

### Steps

```bash
# 1. Go to project folder
cd virustotal-mockup

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Open in browser
```
http://localhost:3000
```

### For screenshot
- Open Chrome
- Go to http://localhost:3000
- Set browser window to 1440px or 1920px width
- Take screenshot

---

## Part 2: Install Chrome Extension

### Steps

1. Open Chrome
2. Go to: `chrome://extensions/`
3. Enable **Developer mode** (top right toggle)
4. Click **"Load unpacked"**
5. Select the `extension/` folder from this project
6. The extension is now installed ✓

### How to use
- Visit any webpage (including the mockup at localhost:3000)
- The timestamp overlay appears automatically at the bottom
- Click the text to edit it manually
- Drag the overlay to reposition it
- Click the extension icon to:
  - Reset to current UTC time
  - Save a custom timestamp
  - The value persists across page refreshes

---

## Features

### Website
- Search any domain → page updates domain name, all other data stays same
- Editable UTC timestamp at the bottom (built-in)
- Desktop optimized (no mobile)
- No external links, no backend, no API

### Extension
- Works on any website
- Solid grey background (no transparency)
- Draggable overlay
- Saves timestamp value and position
- Popup to reset/save timestamp
