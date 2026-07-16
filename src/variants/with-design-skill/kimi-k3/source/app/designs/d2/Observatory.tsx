import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import Constellation from "./Constellation";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--d2-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--d2-body",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--d2-mono",
});

const TELEMETRY = [
  { label: "Objects catalogued", value: "12,408" },
  { label: "Links charted", value: "61,332" },
  { label: "Oldest object", value: "6y 4m" },
  { label: "Recall uptime", value: "100%" },
];

const INSTRUMENTS = [
  {
    id: "INS-01",
    name: "The Collector",
    copy: "Light-gathering for your mind. Clip a page, a highlight, or a voice memo in one keystroke — nothing burns up on entry.",
  },
  {
    id: "INS-02",
    name: "The Linkage",
    copy: "Every star lists its lines of sight. Backlinks draw themselves, and constellations appear where you never planned them.",
  },
  {
    id: "INS-03",
    name: "The Ephemeris",
    copy: "Cortex predicts when a note is about to slip below the horizon of memory, and raises it for review that same day.",
  },
  {
    id: "INS-04",
    name: "The Vault",
    copy: "Your sky is yours. Local-first, end-to-end encrypted, exportable as plain Markdown. No one else holds the telescope.",
  },
];

export default function Observatory() {
  return (
    <div className={`d2 ${display.variable} ${body.variable} ${mono.variable}`}>
      {/* ---------- HERO ---------- */}
      <section className="d2-hero" id="sky">
        <Constellation className="d2-sky" />
        <header className="d2-nav">
          <a className="d2-wordmark" href="#sky">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="d2-star"
            >
              <path
                d="M8 0 L9.6 6.4 L16 8 L9.6 9.6 L8 16 L6.4 9.6 L0 8 L6.4 6.4 Z"
                fill="currentColor"
              />
            </svg>
            CORTEX
          </a>
          <nav className="d2-nav-links" aria-label="Primary">
            <a href="#instruments">Instruments</a>
            <a href="#log">Observer&apos;s log</a>
            <a href="#begin" className="d2-nav-cta">
              Open your sky
            </a>
          </nav>
        </header>

        <div className="d2-hero-content">
          <p className="d2-eyebrow">Personal knowledge observatory</p>
          <h1 className="d2-headline">
            See the shape
            <br />
            of your thinking.
          </h1>
          <p className="d2-sub">
            Cortex maps every note as a star and every link as a line of
            sight. The longer you write, the clearer the sky.
          </p>
          <div className="d2-hero-actions">
            <a className="d2-button" href="#begin">
              Begin mapping
            </a>
            <a className="d2-ghost" href="#instruments">
              Tour the instruments
            </a>
          </div>
          <p className="d2-hint" aria-hidden="true">
            ✦ move across the sky — every star is a note
          </p>
        </div>
      </section>

      {/* ---------- TELEMETRY ---------- */}
      <section className="d2-telemetry" aria-label="Telemetry">
        <dl>
          {TELEMETRY.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- INSTRUMENTS ---------- */}
      <section className="d2-section" id="instruments">
        <p className="d2-eyebrow">Instruments</p>
        <h2 className="d2-section-title">
          Built for observation, tuned for recall.
        </h2>
        <div className="d2-grid">
          {INSTRUMENTS.map((instrument) => (
            <article className="d2-panel" key={instrument.id}>
              <p className="d2-panel-id">{instrument.id}</p>
              <h3>{instrument.name}</h3>
              <p className="d2-panel-copy">{instrument.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- QUOTE ---------- */}
      <section className="d2-section d2-quote-section" id="log">
        <figure className="d2-quote">
          <span className="d2-quote-star" aria-hidden="true">
            ✦
          </span>
          <blockquote>
            “It&apos;s the first notes app that shows me what I know.”
          </blockquote>
          <figcaption>— observer&apos;s log, Cortex user since 2024</figcaption>
        </figure>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="d2-section d2-cta" id="begin">
        <h2>Your sky is already up there.</h2>
        <p>
          Start charting it tonight. Free for your first 1,000 objects — no
          card, no lock-in, Markdown forever.
        </p>
        <a className="d2-button d2-button--large" href="#sky">
          Open your sky
        </a>
      </section>

      <footer className="d2-footer">
        <span>CORTEX OBSERVATORY</span>
        <span aria-hidden="true">RA 05h 35m · Dec −05° 23′</span>
        <span>EST. 2026</span>
      </footer>
    </div>
  );
}
