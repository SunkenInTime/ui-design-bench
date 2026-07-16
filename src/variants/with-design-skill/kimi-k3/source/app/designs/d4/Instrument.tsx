import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--d4-display",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--d4-body",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--d4-mono",
});

const TELEMETRY = [
  { label: "Recall fidelity", value: "98.2%" },
  { label: "Capture latency", value: "0.04 s" },
  { label: "Signal retained", value: "100%" },
];

const SPECS = [
  {
    id: "SPEC-01",
    title: "Input",
    copy: "One keystroke records from any device — the page, the highlight, the voice memo. Input impedance: zero.",
    value: "0.04 s",
  },
  {
    id: "SPEC-02",
    title: "Coupling",
    copy: "Units couple through links, not folders. Every note displays its incoming signal — backlinks included.",
    value: "2-way",
  },
  {
    id: "SPEC-03",
    title: "Replay",
    copy: "Timed replay resurfaces a note just before decay. Memory drift: corrected automatically.",
    value: "98.2%",
  },
  {
    id: "SPEC-04",
    title: "Shielding",
    copy: "Local-first storage, end-to-end encrypted sync. Shielded from third parties by design.",
    value: "AES-256",
  },
];

function TraceDisplay() {
  return (
    <svg
      viewBox="0 0 480 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="d4-trace-svg"
    >
      <defs>
        <path
          id="d4-blip"
          d="M0 40 H28 l3 -7 l4 7 H52 l2 -26 l4 34 l3 -14 l3 6 H84 l4 -4 l4 4 H120"
          fill="none"
        />
      </defs>
      <g className="d4-trace-motion">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <use key={i} href="#d4-blip" x={i * 120} />
        ))}
      </g>
    </svg>
  );
}

export default function Instrument() {
  return (
    <div className={`d4 ${display.variable} ${body.variable} ${mono.variable}`}>
      <header className="d4-nav">
        <a className="d4-wordmark" href="#top">
          CORTEX <span className="d4-model">MODEL SB-1</span>
        </a>
        <nav className="d4-nav-links" aria-label="Primary">
          <a href="#specs">Specifications</a>
          <a href="#readouts">Readouts</a>
          <a href="#order" className="d4-nav-cta">
            Acquire unit
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="d4-hero">
          <div className="d4-hero-copy">
            <p className="d4-eyebrow">
              Cognitive recording instrument — Series SB
            </p>
            <h1 className="d4-headline">
              Signal
              <br />
              from
              <br />
              noise.
            </h1>
            <p className="d4-sub">
              Cortex is a precision instrument for your mind. It records
              thought at the moment of firing, filters the noise, and replays
              the signal on demand.
            </p>
            <div className="d4-hero-actions">
              <a className="d4-button" href="#order">
                Calibrate yours
              </a>
              <a className="d4-mono-link" href="#specs">
                Read the spec sheet ↓
              </a>
            </div>
            <dl className="d4-telemetry">
              {TELEMETRY.map((item) => (
                <div key={item.label}>
                  <dt>
                    <span className="d4-led" aria-hidden="true" />
                    {item.label}
                  </dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* the instrument itself — the signature */}
          <div
            className="d4-module"
            role="img"
            aria-label="Instrument panel showing a live trace of thought activity"
          >
            <span className="d4-screw d4-screw--tl" aria-hidden="true" />
            <span className="d4-screw d4-screw--tr" aria-hidden="true" />
            <span className="d4-screw d4-screw--bl" aria-hidden="true" />
            <span className="d4-screw d4-screw--br" aria-hidden="true" />
            <div className="d4-module-head">
              <span className="d4-led d4-led--live" aria-hidden="true" />
              <span>CH-1 · THOUGHT</span>
              <span className="d4-module-head-right">TRIG&apos;D · 60 Hz</span>
            </div>
            <div className="d4-trace">
              <TraceDisplay />
            </div>
            <div className="d4-module-foot">
              <span>LATENCY 0.04 s</span>
              <span>RECALL 98.2%</span>
              <span>DRIFT: CORRECTED</span>
            </div>
          </div>
        </section>

        {/* ---------- SPECIFICATIONS ---------- */}
        <section className="d4-section" id="specs">
          <p className="d4-eyebrow">Specifications</p>
          <h2 className="d4-section-title">Built to laboratory tolerance.</h2>
          <div className="d4-spec-grid">
            {SPECS.map((spec) => (
              <article className="d4-spec" key={spec.id}>
                <div className="d4-spec-top">
                  <span className="d4-spec-id">{spec.id}</span>
                  <span className="d4-spec-value">{spec.value}</span>
                </div>
                <h3>{spec.title}</h3>
                <p>{spec.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- READOUT / QUOTE ---------- */}
        <section className="d4-section" id="readouts">
          <p className="d4-eyebrow">Readouts</p>
          <h2 className="d4-section-title">Field logs from calibrated units.</h2>
          <div className="d4-printout">
            <p className="d4-printout-line">&gt; user.log — session 4,102</p>
            <blockquote>
              “It resurfaced a note I&apos;d forgotten for two years. It was
              exactly the paragraph I needed.”
            </blockquote>
            <p className="d4-printout-line">
              &gt; log entry 2026.02.11 — unit 0042 — signal stable
            </p>
          </div>
        </section>

        {/* ---------- ORDER / CTA ---------- */}
        <section className="d4-section" id="order">
          <div className="d4-order">
            <p className="d4-eyebrow d4-eyebrow--amber">Order</p>
            <h2>Calibrate yours.</h2>
            <p>
              Free for your first 1,000 notes. Ships with Markdown export — no
              lock-in, no drift.
            </p>
            <a className="d4-button d4-button--amber" href="#top">
              Acquire unit — free
            </a>
          </div>
        </section>
      </main>

      <footer className="d4-footer">
        <div className="d4-plate">
          <span>CORTEX SB-1</span>
          <span aria-hidden="true">·</span>
          <span>SN 000001</span>
          <span aria-hidden="true">·</span>
          <span>CAL 2026.07</span>
          <span aria-hidden="true">·</span>
          <span>MADE FOR THINKERS</span>
        </div>
      </footer>
    </div>
  );
}
