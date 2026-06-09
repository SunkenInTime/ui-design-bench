"use client";

import "@/generated/scoped-variant-css/with-design-skill/fable/source/src/app/3/landing.css";

function Specimen() {
  return (
    <svg
      className="gd-specimen-svg"
      viewBox="0 0 360 430"
      aria-hidden="true"
    >
      <g className="gd-sway">
        {/* roots */}
        <g stroke="#6d6a52" strokeWidth="1.1" fill="none" opacity="0.7">
          <path d="M180 402 C 170 412, 152 414, 138 422" />
          <path d="M180 402 C 184 414, 198 418, 212 424" />
          <path d="M180 402 C 178 410, 172 420, 170 428" />
        </g>
        {/* main stem */}
        <path
          d="M180 402 C 176 330, 184 250, 172 170 C 166 130, 170 95, 176 62"
          fill="none"
          stroke="#2c5239"
          strokeWidth="2.4"
        />
        {/* branches */}
        <path
          d="M177 310 C 150 295, 120 280, 92 252"
          fill="none"
          stroke="#2c5239"
          strokeWidth="1.8"
        />
        <path
          d="M175 228 C 205 215, 240 200, 268 172"
          fill="none"
          stroke="#2c5239"
          strokeWidth="1.8"
        />
        <path
          d="M173 140 C 150 128, 128 112, 112 88"
          fill="none"
          stroke="#2c5239"
          strokeWidth="1.6"
        />
        {/* leaves */}
        <g fill="#3f7d4e">
          <path d="M92 252 C 70 240, 62 218, 70 200 C 92 206, 102 228, 92 252 Z" />
          <path d="M268 172 C 290 160, 298 138, 290 120 C 268 126, 258 148, 268 172 Z" />
          <path d="M112 88 C 94 74, 90 54, 98 38 C 118 46, 124 68, 112 88 Z" />
          <path d="M177 310 C 196 304, 214 308, 224 322 C 208 334, 188 328, 177 310 Z" opacity="0.85" />
          <path d="M175 228 C 156 222, 140 226, 130 240 C 146 252, 166 246, 175 228 Z" opacity="0.85" />
        </g>
        {/* leaf veins */}
        <g stroke="#27532f" strokeWidth="0.8" fill="none" opacity="0.6">
          <path d="M92 252 C 84 234, 78 218, 72 202" />
          <path d="M268 172 C 276 154, 282 138, 288 122" />
          <path d="M112 88 C 104 72, 100 56, 99 40" />
        </g>
        {/* flower at the crown */}
        <g transform="translate(176 56)">
          <circle r="3.4" fill="#e8c44d" />
          <g fill="#c76b8e" opacity="0.9">
            <ellipse cx="0" cy="-9" rx="4.4" ry="7" />
            <ellipse cx="8.5" cy="-2.5" rx="4.4" ry="7" transform="rotate(72 8.5 -2.5)" />
            <ellipse cx="5.5" cy="8" rx="4.4" ry="7" transform="rotate(144 5.5 8)" />
            <ellipse cx="-5.5" cy="8" rx="4.4" ry="7" transform="rotate(-144 -5.5 8)" />
            <ellipse cx="-8.5" cy="-2.5" rx="4.4" ry="7" transform="rotate(-72 -8.5 -2.5)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const STAGES = [
  {
    name: "Seedling",
    latin: "nota tenera",
    copy: "A captured fragment. Two lines, no pressure, no title. Most of the garden starts this small.",
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 42 L24 28" stroke="#2c5239" strokeWidth="2" fill="none" />
        <path d="M24 28 C 16 28, 10 22, 10 14 C 18 14, 24 20, 24 28 Z" fill="#3f7d4e" />
        <path d="M24 28 C 32 28, 38 22, 38 14 C 30 14, 24 20, 24 28 Z" fill="#5d9b66" />
      </svg>
    ),
  },
  {
    name: "Budding",
    latin: "nota crescens",
    copy: "Linked twice, revised once. It has neighbours now, and an opinion. It’s going somewhere.",
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 42 C 24 32, 22 26, 24 16" stroke="#2c5239" strokeWidth="2" fill="none" />
        <path d="M24 26 C 18 24, 14 19, 14 13 C 20 14, 24 19, 24 26 Z" fill="#3f7d4e" />
        <ellipse cx="25" cy="12" rx="4.5" ry="6.5" fill="#c76b8e" />
      </svg>
    ),
  },
  {
    name: "Evergreen",
    latin: "nota perennis",
    copy: "A note you’ll still agree with next year. Quoted by newer notes, weeded, load-bearing.",
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 44 L24 36" stroke="#2c5239" strokeWidth="2" fill="none" />
        <path d="M24 4 L34 18 L29 18 L37 29 L31 29 L39 39 L9 39 L17 29 L11 29 L19 18 L14 18 Z" fill="#2f6240" />
      </svg>
    ),
  },
];

const BED = [
  "leaf", "leaf", "", "leaf", "", "", "leaf",
  "leaf", "", "leaf", "leaf", "", "leaf", "today",
];

export function Landing() {
  return (
    <div className="gd-page">
      <header className="gd-nav">
        <span className="gd-logo">Tangent</span>
        <nav className="gd-nav-links" aria-label="Site">
          <a href="#stages">growth</a>
          <a href="#tending">tending</a>
          <a href="#plant" className="gd-btn gd-btn-solid gd-btn-small">
            Plant a note
          </a>
        </nav>
      </header>

      <main>
        <section className="gd-hero">
          <div className="gd-hero-copy">
            <p className="gd-eyebrow">A field guide to your own thinking</p>
            <h1 className="gd-headline">
              Notes, <em>planted.</em>
            </h1>
            <p className="gd-sub">
              Tangent is a note-taking app that treats ideas as living things.
              Plant a fragment, let its roots find the others, and tend it now
              and then. In a season you won’t have a pile of notes — you’ll
              have a garden that thinks back.
            </p>
            <div className="gd-cta-row">
              <a href="#plant" className="gd-btn gd-btn-solid">
                Plant your first note
              </a>
              <a href="#stages" className="gd-btn gd-btn-quiet">
                Walk the garden →
              </a>
            </div>
          </div>

          <figure className="gd-sheet" aria-label="Herbarium sheet: a pressed specimen made of notes">
            <span className="gd-tape gd-tape-l" aria-hidden="true" />
            <span className="gd-tape gd-tape-r" aria-hidden="true" />
            <Specimen />
            <figcaption className="gd-note gd-note-1">
              walking is a form of drafting
            </figcaption>
            <figcaption className="gd-note gd-note-2">
              ideas ripen out of order
            </figcaption>
            <figcaption className="gd-note gd-note-3">
              compost ≠ delete — decay feeds the soil
            </figcaption>
            <div className="gd-label">
              <span className="gd-label-head">HERBARIUM TANGENTIAE</span>
              <span className="gd-label-latin">Tangentia perennis L.</span>
              <span>Habitat: margins, commutes, 2 a.m.</span>
              <span>Collected: from a wandering mind</span>
              <span>Det.: you</span>
            </div>
          </figure>
        </section>

        <section className="gd-stages" id="stages">
          <h2 className="gd-h2">
            Every note has a <em>growth stage</em>
          </h2>
          <p className="gd-stages-intro">
            Tangent tracks how alive each note is — so you always know what to
            water and what to let be.
          </p>
          <div className="gd-stage-grid">
            {STAGES.map((s) => (
              <article className="gd-stage" key={s.name}>
                <div className="gd-stage-glyph">{s.glyph}</div>
                <h3>
                  {s.name} <span className="gd-stage-latin">{s.latin}</span>
                </h3>
                <p>{s.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gd-tending" id="tending">
          <div className="gd-tending-copy">
            <h2 className="gd-h2">
              Ten minutes of <em>weeding</em> beats a weekend of filing.
            </h2>
            <p>
              Each day Tangent hands you a short trowel-load: two old notes to
              reread, one pair that might want linking, one seedling going dry.
              Tend it over coffee. Skip a week and nothing dies — gardens are
              patient.
            </p>
          </div>
          <div className="gd-bed" role="img" aria-label="Two weeks of tending: most days have a small sprout">
            {BED.map((cell, i) => (
              <span
                key={i}
                className={`gd-bed-cell ${cell === "leaf" ? "gd-bed-grown" : ""} ${
                  cell === "today" ? "gd-bed-today" : ""
                }`}
              >
                {cell === "leaf" && (
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 14 L8 8" stroke="#2c5239" strokeWidth="1.4" fill="none" />
                    <path d="M8 8 C 4.5 8, 2.5 5.5, 2.5 2.5 C 6 3, 8 5, 8 8 Z" fill="#3f7d4e" />
                    <path d="M8 8 C 11.5 8, 13.5 5.5, 13.5 2.5 C 10 3, 8 5, 8 8 Z" fill="#5d9b66" />
                  </svg>
                )}
                {cell === "today" && <span className="gd-bed-dot" />}
              </span>
            ))}
            <span className="gd-bed-caption">a fortnight of ten-minute tendings</span>
          </div>
        </section>

        <section className="gd-packet-wrap" id="plant">
          <article className="gd-packet">
            <header className="gd-packet-head">
              <span className="gd-packet-brand">TANGENT SEEDS</span>
              <span className="gd-packet-variety">mixed thoughts · open-pollinated</span>
            </header>
            <ul className="gd-packet-rules">
              <li>Sow fragments two to three lines deep.</li>
              <li>Link while the soil is loose.</li>
              <li>Water weekly; thin folders ruthlessly.</li>
              <li>Harvest whenever. Nothing here expires.</li>
            </ul>
            <a href="#" className="gd-btn gd-btn-solid gd-btn-wide">
              Plant a note — free
            </a>
            <p className="gd-packet-fine">
              Grows in plain text. Roots stay on your machine.
            </p>
          </article>
        </section>
      </main>

      <footer className="gd-footer">
        <span className="gd-footer-motto">
          <em>What you plant, you keep.</em>
        </span>
        <span>Tangent © 2026 · grown, not filed</span>
      </footer>
    </div>
  );
}
