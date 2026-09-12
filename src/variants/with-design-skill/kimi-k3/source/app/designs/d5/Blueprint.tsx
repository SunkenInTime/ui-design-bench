import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Mono,
} from "next/font/google";

const display = IBM_Plex_Sans_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--d5-display",
});

const body = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--d5-body",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--d5-mono",
});

const SHEETS = [
  {
    sheet: "A-101",
    title: "Capture inlet",
    copy: "One keystroke opens the inlet: pages, highlights, voice memos — drawn into the plan before the thought evaporates.",
  },
  {
    sheet: "A-102",
    title: "Link corridors",
    copy: "Links, not folders. Every room lists its doorways, so you can always walk back to where an idea started.",
  },
  {
    sheet: "A-103",
    title: "Load-bearing memory",
    copy: "Spaced review keeps old notes structural. Cortex schedules the inspection before anything sags.",
  },
  {
    sheet: "A-104",
    title: "The vault foundation",
    copy: "Local-first, encrypted, Markdown throughout. You hold the deeds and the master key.",
  },
];

function Schematic() {
  return (
    <svg
      viewBox="0 0 460 340"
      role="img"
      aria-label="Blueprint schematic of a second brain with callouts for capture, links, review, and memory"
      className="d5-schematic"
    >
      <g transform="translate(24 0)">
        {/* dimension line */}
        <g className="d5-dim">
          <line x1="55" y1="26" x2="315" y2="26" />
          <line x1="55" y1="20" x2="55" y2="32" />
          <line x1="315" y1="20" x2="315" y2="32" />
          <text x="185" y="18" textAnchor="middle">
            ONE MIND — DO NOT SCALE
          </text>
        </g>

        {/* brain outline */}
        <g className="d5-ink">
          <path d="M90 268 C40 253 30 198 55 168 C35 138 55 93 95 93 C105 63 150 53 175 73 C200 48 255 58 265 88 C305 93 330 128 315 163 C340 193 325 243 285 253 C275 283 230 298 200 283 C170 303 115 293 90 268 Z" />
          <path d="M120 138 C140 118 165 133 155 153 C150 168 165 178 180 168" />
          <path d="M212 118 C232 113 247 128 237 143" />
          <path d="M140 208 C160 193 190 203 185 223" />
          <path d="M230 208 C250 198 265 213 255 228" />
          <line x1="185" y1="83" x2="185" y2="278" className="d5-centerline" />
        </g>

        {/* crosshair */}
        <g className="d5-dim">
          <line x1="177" y1="180" x2="193" y2="180" />
          <line x1="185" y1="172" x2="185" y2="188" />
        </g>
      </g>

      {/* callouts */}
      <g className="d5-callout">
        <circle cx="289" cy="88" r="3" />
        <polyline points="289,88 316,62 362,62" />
        <text x="366" y="58">FIG. 01</text>
        <text x="366" y="72" className="d5-callout-name">
          CAPTURE INLET
        </text>
      </g>
      <g className="d5-callout">
        <circle cx="114" cy="150" r="3" />
        <polyline points="114,150 88,130 30,130" />
        <text x="8" y="96">FIG. 02</text>
        <text x="8" y="110" className="d5-callout-name">
          LINK
        </text>
        <text x="8" y="124" className="d5-callout-name">
          CORRIDORS
        </text>
      </g>
      <g className="d5-callout">
        <circle cx="279" cy="228" r="3" />
        <polyline points="279,228 310,268 358,268" />
        <text x="362" y="264">FIG. 03</text>
        <text x="362" y="278" className="d5-callout-name">
          REVIEW TOWER
        </text>
      </g>
      <g className="d5-callout">
        <circle cx="144" cy="255" r="3" />
        <polyline points="144,255 110,306 56,306" />
        <text x="8" y="298">FIG. 04</text>
        <text x="8" y="312" className="d5-callout-name">
          MEMORY VAULT
        </text>
      </g>
    </svg>
  );
}

function TitleBlock({ sheet }: { sheet: string }) {
  return (
    <dl className="d5-titleblock">
      <div>
        <dt>Project</dt>
        <dd>Second brain</dd>
      </div>
      <div>
        <dt>Sheet</dt>
        <dd>{sheet}</dd>
      </div>
      <div>
        <dt>Scale</dt>
        <dd>1:1</dd>
      </div>
      <div>
        <dt>Drawn by</dt>
        <dd>You</dd>
      </div>
    </dl>
  );
}

export default function Blueprint() {
  return (
    <div className={`d5 ${display.variable} ${body.variable} ${mono.variable}`}>
      <header className="d5-nav">
        <a className="d5-wordmark" href="#top">
          CORTEX <span className="d5-dwg">DWG SB-100</span>
        </a>
        <nav className="d5-nav-links" aria-label="Primary">
          <a href="#plans">The plans</a>
          <a href="#revisions">Revisions</a>
          <a href="#permit" className="d5-nav-cta">
            Break ground
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="d5-hero">
          <div className="d5-hero-copy">
            <p className="d5-eyebrow">Drawing set SB-100 · Issue C</p>
            <h1 className="d5-headline">
              Plans for a<br />
              second brain.
            </h1>
            <p className="d5-sub">
              Every great structure starts on paper. Cortex is the drawing set
              for your mind: notes as rooms, links as corridors, memory as
              load-bearing walls.
            </p>
            <div className="d5-hero-actions">
              <a className="d5-button" href="#permit">
                Approve the plans
              </a>
              <a className="d5-outline-link" href="#plans">
                Request a walkthrough ↓
              </a>
            </div>
          </div>
          <div className="d5-viewport">
            <span className="d5-corner d5-corner--tl" aria-hidden="true" />
            <span className="d5-corner d5-corner--tr" aria-hidden="true" />
            <span className="d5-corner d5-corner--bl" aria-hidden="true" />
            <span className="d5-corner d5-corner--br" aria-hidden="true" />
            <Schematic />
            <p className="d5-viewport-tag">GENERAL ARRANGEMENT — THE MIND</p>
          </div>
        </section>

        {/* ---------- THE DRAWING SET ---------- */}
        <section className="d5-section" id="plans">
          <p className="d5-eyebrow">The drawing set</p>
          <h2 className="d5-section-title">
            Four sheets. One structure that remembers.
          </h2>
          <div className="d5-sheets">
            {SHEETS.map((sheet) => (
              <article className="d5-sheet" key={sheet.sheet}>
                <div className="d5-sheet-body">
                  <p className="d5-sheet-no">{sheet.sheet}</p>
                  <h3>{sheet.title}</h3>
                  <p>{sheet.copy}</p>
                </div>
                <TitleBlock sheet={sheet.sheet} />
              </article>
            ))}
          </div>
        </section>

        {/* ---------- REVISIONS ---------- */}
        <section className="d5-section" id="revisions">
          <p className="d5-eyebrow">Revision history</p>
          <h2 className="d5-section-title">Latest revision</h2>
          <div className="d5-revision">
            <div className="d5-revision-row d5-revision-row--head" aria-hidden="true">
              <span>Rev</span>
              <span>Description</span>
              <span>Status</span>
            </div>
            <div className="d5-revision-row">
              <span>R1</span>
              <span>First issue. Client kept forgetting things.</span>
              <span>Superseded</span>
            </div>
            <div className="d5-revision-row d5-revision-row--current">
              <span>R2</span>
              <span>The client remembers everything now.</span>
              <span className="d5-approved">Approved</span>
            </div>
          </div>
        </section>

        {/* ---------- PERMIT / CTA ---------- */}
        <section className="d5-section" id="permit">
          <div className="d5-permit">
            <p className="d5-eyebrow">Permit office</p>
            <h2>Permit granted.</h2>
            <p>
              Free for your first 1,000 notes. The foundation is already
              poured — Markdown, local-first, encrypted.
            </p>
            <a className="d5-button" href="#top">
              Break ground
            </a>
            <p className="d5-stamp" aria-hidden="true">
              Approved
            </p>
          </div>
        </section>
      </main>

      <footer className="d5-footer">
        <dl>
          <div>
            <dt>Office</dt>
            <dd>Cortex Drawing Office</dd>
          </div>
          <div>
            <dt>Drawing</dt>
            <dd>SB-100</dd>
          </div>
          <div>
            <dt>Issue</dt>
            <dd>C — 2026</dd>
          </div>
          <div>
            <dt>Note</dt>
            <dd>Do not scale drawing</dd>
          </div>
        </dl>
      </footer>
    </div>
  );
}
