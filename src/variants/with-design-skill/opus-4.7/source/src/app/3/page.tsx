"use client";

import Link from "next/link";
import "@/generated/scoped-variant-css/with-design-skill/opus-4.7/source/src/app/3/mycelia.css";

export default function MyceliaPage() {
  return (
    <main className="mycelia">
      <div className="myc-paper-texture" aria-hidden />

      <header className="myc-header">
        <div className="myc-header-left">
          <span className="myc-hand">Mycelia</span>
          <span className="myc-latin">Cerebrum fungorum</span>
        </div>
        <div className="myc-header-right">
          <span>Plate i</span>
          <span className="myc-sep">·</span>
          <span>of seven</span>
          <span className="myc-sep">·</span>
          <span>Spring MMXXVI</span>
        </div>
      </header>

      <section className="myc-hero">
        <div className="myc-hero-copy">
          <p className="myc-eyebrow">
            <span className="myc-eyebrow-dot" />
            a note-taking instrument, est. 2026
          </p>
          <h1 className="myc-headline">
            Thoughts, <em>cultivated</em>.
            <br />A second brain
            <br />
            that <em>grows.</em>
          </h1>
          <p className="myc-lede">
            Most note apps are filing cabinets. <em>Mycelia</em> is a
            forest floor &mdash; a living network of root, rhizome, and spore
            where your ideas nourish each other quietly, in the dark, between
            sessions.
          </p>
          <p className="myc-hand myc-scribble">
            (it learns from what you leave behind.)
          </p>
          <div className="myc-cta">
            <Link href="#field-notes" className="myc-btn myc-btn-primary">
              Plant your first note
              <span className="myc-btn-tail">↗</span>
            </Link>
            <Link href="#specimens" className="myc-btn myc-btn-ghost">
              Browse the field guide
            </Link>
          </div>
        </div>

        <div className="myc-hero-plate">
          <div className="myc-plate-card">
            <div className="myc-plate-header">
              <span className="myc-plate-roman">Fig. i</span>
              <span className="myc-hand myc-plate-subtitle">Amanita cognitionis</span>
              <span className="myc-plate-scale">scale 1 : 1</span>
            </div>

            <MyceliaIllustration />

            <div className="myc-plate-footer">
              <span>Observed 04/XVI/26</span>
              <span>·</span>
              <span>sketch from life</span>
              <span className="myc-hand myc-plate-initials">— AR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specimens / features */}
      <section id="specimens" className="myc-specimens">
        <div className="myc-section-title">
          <span className="myc-roman">ii.</span>
          <h2>Specimens in the Vivarium</h2>
          <div className="myc-title-rule" />
        </div>

        <p className="myc-section-lede">
          Each of these is a small organism that lives alongside your notes and
          works for you when you are not looking.
        </p>

        <div className="myc-spec-grid">
          {SPECIMENS.map((s, i) => (
            <article key={s.name} className="myc-spec">
              <div className="myc-spec-no">{s.no}</div>
              <div className="myc-spec-icon" aria-hidden>
                {s.icon}
              </div>
              <div className="myc-spec-name">
                <span className="myc-spec-latin">{s.name}</span>
                <span className="myc-hand myc-spec-common">&ldquo;{s.common}&rdquo;</span>
              </div>
              <p className="myc-spec-body">{s.body}</p>
              <div className="myc-spec-meta">
                <span>habitat</span>
                <span>{s.habitat}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Field notes */}
      <section id="field-notes" className="myc-field">
        <div className="myc-section-title">
          <span className="myc-roman">iii.</span>
          <h2>Field notes</h2>
          <div className="myc-title-rule" />
        </div>

        <div className="myc-field-grid">
          <figure className="myc-fieldcard myc-fieldcard-wide">
            <div className="myc-hand myc-field-scribble">
              <p>04/14 — tuesday, overcast</p>
              <p>
                the trouble with folders is that they assume you know what a
                thing <u>is</u> before you meet it. a thought, unfiled, can sit
                beside other unfiled thoughts and <em>show</em> you what it is.
                this is, i think, how memory actually works.
              </p>
              <p className="myc-right">— caretaker&apos;s log</p>
            </div>
          </figure>

          <figure className="myc-fieldcard">
            <div className="myc-field-illus">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.1">
                <circle cx="100" cy="100" r="48" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="22" />
                <path d="M100 78 Q140 60 160 100 Q140 140 100 122 Q60 140 40 100 Q60 60 100 78" strokeWidth="1" />
                <circle cx="100" cy="100" r="4" fill="currentColor" />
                <text x="100" y="176" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">
                  the idea-in-itself
                </text>
              </svg>
            </div>
            <figcaption>
              <span className="myc-roman">fig. ii</span>
              <span>&mdash; a sporing body, isolated</span>
            </figcaption>
          </figure>

          <figure className="myc-fieldcard">
            <div className="myc-field-illus">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.1">
                <path d="M20 180 Q60 120 100 100 T180 20" />
                <path d="M20 180 Q60 140 100 100 T180 60" strokeDasharray="2 3" />
                <path d="M20 180 Q80 160 100 100 T180 100" strokeDasharray="1 4" />
                {[
                  [20, 180], [60, 120], [100, 100], [140, 60], [180, 20],
                  [60, 140], [140, 80], [180, 60],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" />
                ))}
                <text x="100" y="196" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">
                  the trail of attention
                </text>
              </svg>
            </div>
            <figcaption>
              <span className="myc-roman">fig. iii</span>
              <span>&mdash; linked traversal, tuesday</span>
            </figcaption>
          </figure>

          <figure className="myc-fieldcard myc-fieldcard-wide">
            <div className="myc-field-quote">
              <p>
                &ldquo;The mycelial network does not <em>retrieve</em> information;
                it <em>remembers together</em>. Our app is built in the same
                spirit.&rdquo;
              </p>
              <p className="myc-field-quote-attr">
                — field notebook, entry 042
              </p>
            </div>
          </figure>
        </div>
      </section>

      {/* Subscription / CTA */}
      <section className="myc-colophon">
        <div className="myc-colophon-inner">
          <h3>
            Join the <em>vivarium</em>.
          </h3>
          <p>
            One letter per new moon. Seasonal updates on what has been growing.
            No marketing. Ever.
          </p>
          <form className="myc-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your.address@somewhere"
              aria-label="email"
              className="myc-input"
            />
            <button className="myc-btn myc-btn-primary myc-btn-sm" type="submit">
              Subscribe
            </button>
          </form>
          <p className="myc-hand myc-colophon-note">
            ps. the second brain is a <u>habit</u>, not a feature. we are in
            no rush.
          </p>
        </div>

        <footer className="myc-footer">
          <span>Mycelia Garden Supply Co.</span>
          <span>·</span>
          <span>Printed on recycled paper</span>
          <span>·</span>
          <span>© MMXXVI, all rhizomes reserved</span>
        </footer>
      </section>
    </main>
  );
}

function MyceliaIllustration() {
  return (
    <svg
      viewBox="0 0 560 600"
      className="myc-svg"
      role="img"
      aria-label="Anatomical illustration of a mushroom whose mycelium forms a brain underground."
    >
      <defs>
        <filter id="myc-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence baseFrequency="0.03 0.05" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="1.6" />
        </filter>
        <pattern id="myc-stipple" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="currentColor" opacity="0.5" />
          <circle cx="4" cy="3" r="0.4" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>

      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* cap */}
        <path
          d="M120,230 Q180,90 280,80 Q380,86 440,228 Q380,268 280,258 Q180,266 120,230 Z"
          strokeWidth="1.4"
          fill="var(--myc-cap)"
          filter="url(#myc-rough)"
        />
        {/* cap dots (amanita spots) */}
        {[
          [180, 180, 10], [230, 140, 8], [290, 120, 12],
          [340, 150, 9], [390, 190, 10], [260, 200, 7],
          [370, 230, 6],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="var(--myc-spot)" stroke="var(--myc-ink)" strokeWidth="0.8" />
        ))}

        {/* cap shading stipple */}
        <path
          d="M120,230 Q180,90 280,80 Q380,86 440,228 Q380,268 280,258 Q180,266 120,230 Z"
          fill="url(#myc-stipple)"
          stroke="none"
          opacity="0.6"
        />

        {/* gills under cap */}
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 140 + i * 22;
          return (
            <line key={i} x1={x} y1="260" x2={x} y2="280" strokeWidth="0.8" opacity="0.55" />
          );
        })}

        {/* stem */}
        <path
          d="M240,270 Q236,350 244,420 L320,420 Q326,350 320,270 Z"
          strokeWidth="1.3"
          fill="var(--myc-stem)"
          filter="url(#myc-rough)"
        />
        {/* stem ring */}
        <path d="M228,312 Q280,298 332,312 Q330,324 280,320 Q230,324 228,312 Z" strokeWidth="1" fill="var(--myc-stem-dark)" />

        {/* soil line */}
        <path d="M20,420 Q140,405 280,420 Q420,435 540,420" strokeDasharray="1 3" strokeWidth="1.2" />
        <text x="20" y="414" fontSize="10" stroke="none" fill="currentColor" opacity="0.65" fontStyle="italic">
          — soil line —
        </text>

        {/* brain-as-root system */}
        <g opacity="0.95">
          {/* primary radial roots */}
          <path d="M280,420 Q260,470 210,480 Q160,490 120,540" strokeWidth="1.2" />
          <path d="M280,420 Q260,470 230,520 Q210,560 180,580" strokeWidth="1.1" />
          <path d="M280,420 Q290,470 260,520 Q250,560 240,588" strokeWidth="1.1" />
          <path d="M280,420 Q300,470 330,520 Q340,560 360,588" strokeWidth="1.1" />
          <path d="M280,420 Q310,470 360,490 Q410,510 440,540" strokeWidth="1.2" />
          <path d="M280,420 Q320,460 380,470 Q430,478 480,500" strokeWidth="1" />
          <path d="M280,420 Q240,460 180,470 Q130,478 80,500" strokeWidth="1" />

          {/* brain-lobe clusters: curled paths that look like gyri */}
          <g strokeWidth="1">
            <path d="M150,500 q-14,-6 -14,-22 q0,-18 20,-22 q24,-4 28,14 q6,22 -14,30 q-18,6 -20,0" />
            <path d="M200,540 q-12,-4 -12,-20 q0,-16 18,-18 q22,-2 24,12 q4,18 -12,24 q-16,4 -18,2" />
            <path d="M250,560 q-12,-4 -12,-20 q0,-16 20,-18 q22,-2 24,12 q4,18 -14,24 q-14,4 -18,2" />
            <path d="M310,560 q-12,-4 -12,-20 q0,-16 20,-18 q22,-2 24,12 q4,18 -14,24 q-14,4 -18,2" />
            <path d="M370,540 q-14,-6 -14,-22 q0,-18 22,-20 q22,-2 26,14 q4,20 -14,26 q-18,4 -20,2" />
            <path d="M420,500 q-14,-6 -14,-22 q0,-18 22,-20 q22,-2 26,14 q4,20 -14,26 q-18,4 -20,2" />
            <path d="M110,470 q-14,-6 -14,-22 q0,-18 22,-20 q22,-2 26,14 q4,20 -14,26 q-18,4 -20,2" />
            <path d="M460,470 q-14,-6 -14,-22 q0,-18 22,-20 q22,-2 26,14 q4,20 -14,26 q-18,4 -20,2" />
          </g>

          {/* connective filaments (synapses) */}
          <g strokeWidth="0.7" opacity="0.7" strokeDasharray="1 2">
            <path d="M160,480 Q200,490 220,520" />
            <path d="M220,520 Q260,530 300,540" />
            <path d="M300,540 Q340,530 380,520" />
            <path d="M380,520 Q420,500 450,480" />
            <path d="M130,450 Q180,440 230,440" />
            <path d="M230,440 Q280,430 330,440" />
            <path d="M330,440 Q380,440 440,450" />
            <path d="M170,500 Q210,540 260,558" />
            <path d="M410,500 Q370,540 320,558" />
          </g>

          {/* synaptic nodes */}
          {[
            [160, 480], [210, 520], [260, 558], [320, 558], [370, 520],
            [420, 500], [110, 450], [450, 450], [230, 440], [330, 440],
            [140, 500], [440, 500], [200, 470], [360, 470],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" stroke="none" />
          ))}

          {/* spores */}
          {[
            [80, 560, 3], [420, 580, 2.5], [500, 540, 2], [60, 500, 2],
            [510, 580, 2.5], [40, 540, 1.8],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
          ))}
        </g>

        {/* Labels with dotted leader lines */}
        <g stroke="currentColor" strokeWidth="0.9" fill="none">
          <line x1="290" y1="90" x2="500" y2="50" strokeDasharray="1 2" />
          <line x1="330" y1="320" x2="500" y2="300" strokeDasharray="1 2" />
          <line x1="280" y1="470" x2="500" y2="440" strokeDasharray="1 2" />
          <line x1="120" y1="470" x2="60" y2="420" strokeDasharray="1 2" />
          <line x1="200" y1="540" x2="80" y2="588" strokeDasharray="1 2" />
        </g>
        <g fill="currentColor" stroke="none" fontSize="11.5" fontStyle="italic">
          <text x="504" y="48" className="myc-label">a. pileus — the visible note</text>
          <text x="504" y="298" className="myc-label">b. stipe — the draft beneath</text>
          <text x="504" y="438" className="myc-label">c. hyphae — associations</text>
          <text x="56" y="418" textAnchor="end" className="myc-label">d. rhizomorph — a thread of thought</text>
          <text x="76" y="586" textAnchor="end" className="myc-label">e. spore — an idea loosed into the world</text>
        </g>

        {/* tick marks for label lines */}
        <g fill="currentColor" stroke="none">
          {[[500, 50], [500, 300], [500, 440], [60, 420], [80, 588]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.8" />
          ))}
        </g>
      </g>
    </svg>
  );
}

const SPECIMENS = [
  {
    no: "i",
    name: "Hyphae linkensis",
    common: "the linker",
    icon: "✺",
    body: "Silently weaves a web between every phrase you write. Two notes touch when their sentences resonate, not when you remember to tag them.",
    habitat: "every note, always",
  },
  {
    no: "ii",
    name: "Rhizoma diurnum",
    common: "the daybook",
    icon: "❧",
    body: "A single continuous page for the day — your thoughts, arrivals, overheard remarks. Fades softly into tomorrow's at midnight.",
    habitat: "the front of the brain",
  },
  {
    no: "iii",
    name: "Fructus memoriae",
    common: "the fruiting body",
    icon: "❉",
    body: "Surfaces the three ideas most worth revisiting this week. Not by recency — by resonance. What you\u2019ve been circling around.",
    habitat: "sunday mornings",
  },
  {
    no: "iv",
    name: "Sporae dispersae",
    common: "the publisher",
    icon: "⚬",
    body: "Send a single leaf, or a small grove, to a reader of your choice. Hand-set, unstyled, an honest page.",
    habitat: "the garden gate",
  },
  {
    no: "v",
    name: "Radix profunda",
    common: "the archive",
    icon: "❦",
    body: "A deep, plain-text cellar. Your notes live on your disk as markdown; the network is a layer on top, not a cage around them.",
    habitat: "your own machine",
  },
  {
    no: "vi",
    name: "Sentinel herbarius",
    common: "the keeper",
    icon: "✦",
    body: "Gently points out the note you wrote in May that predicted the thing you\u2019re arguing with yourself about today.",
    habitat: "the margins",
  },
];
