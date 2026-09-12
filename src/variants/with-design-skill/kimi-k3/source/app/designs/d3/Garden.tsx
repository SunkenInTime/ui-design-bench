import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--d3-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--d3-body",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--d3-mono",
});

const PLATES = [
  {
    plate: "Plate I",
    stage: "Seedling",
    kind: "fleeting note",
    example: "“idea: what if meetings had trailers?”",
    caption:
      "Caught in passing. Five seconds, one keystroke, no pressure to finish it. Most seedlings stay small — and that is fine.",
    figure: <SeedlingFigure />,
  },
  {
    plate: "Plate II",
    stage: "Budding",
    kind: "developing note",
    example: "“attention residue — linked to thesis ch. 3, deep work”",
    caption:
      "Grafted to its neighbors. Links form, sources attach, the idea thickens. Cortex shows you every connection.",
    figure: <BuddingFigure />,
  },
  {
    plate: "Plate III",
    stage: "Evergreen",
    kind: "permanent note",
    example: "“essay: why I quit the feed — 14 sources, revised 9 times”",
    caption:
      "Dense and permanent. Evergreen notes are the ones you build on — and the ones Cortex never lets you lose.",
    figure: <EvergreenFigure />,
  },
];

const TENDING = [
  {
    tag: "Grafting",
    title: "Links, not folders",
    copy: "Graft one note onto another with a link, and both grow new branches. Backlinks show every graft ever made.",
  },
  {
    tag: "Seasons",
    title: "A weekly tending pass",
    copy: "Cortex surfaces what needs water — or pruning — on a gentle schedule. You review; the garden stays young.",
  },
  {
    tag: "Native soil",
    title: "Local-first roots",
    copy: "Your garden grows on your ground: plain Markdown files, encrypted when they sync, readable anywhere.",
  },
  {
    tag: "Harvest",
    title: "Pick anything, any season",
    copy: "Export a single note or whole beds whenever you like. Your words travel — no lock-in, no frost damage.",
  },
];

function SeedlingFigure() {
  return (
    <svg viewBox="0 0 120 140" role="img" aria-label="Line drawing of a seedling">
      <path d="M12 118 Q40 112 60 118 T108 118" className="d3-soil" />
      <path d="M60 118 C58 98 62 84 60 66" />
      <path d="M60 86 C44 80 36 68 38 54 C52 58 60 70 60 86 Z" />
      <path d="M60 70 C74 62 80 50 78 38 C66 42 60 54 60 70 Z" />
    </svg>
  );
}

function BuddingFigure() {
  return (
    <svg viewBox="0 0 120 140" role="img" aria-label="Line drawing of a budding plant">
      <path d="M12 122 H108" className="d3-soil" />
      <path d="M60 122 C60 100 58 84 60 60 C61 48 60 40 60 32" />
      <path d="M60 90 C48 86 40 78 37 66" />
      <path d="M37 66 C29 62 27 52 30 46 C38 48 40 58 37 66 Z" />
      <path d="M60 72 C72 68 80 60 83 50" />
      <path d="M83 50 C77 46 76 38 79 33 C86 36 87 44 83 50 Z" />
      <circle cx="60" cy="24" r="6" className="d3-bloom" />
      <path d="M60 32 C55 30 53 25 54 21 M60 32 C65 30 67 25 66 21" />
    </svg>
  );
}

function EvergreenFigure() {
  return (
    <svg viewBox="0 0 120 140" role="img" aria-label="Line drawing of an evergreen tree">
      <path d="M14 122 H106" className="d3-soil" />
      <path d="M60 112 V122" />
      <path
        d="M60 18 L76 48 L67 48 L82 76 L71 76 L88 108 L32 108 L49 76 L38 76 L53 48 L44 48 Z"
      />
      <circle cx="60" cy="62" r="4" className="d3-bloom" />
    </svg>
  );
}

export default function Garden() {
  return (
    <div className={`d3 ${display.variable} ${body.variable} ${mono.variable}`}>
      <header className="d3-nav">
        <a className="d3-wordmark" href="#top">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M10 18 C10 12 10 8 10 4 M10 12 C5 11 3 7 3.5 3 C8 3.5 10 7 10 12 Z M10 9 C14 8.5 16.5 5.5 16 2 C12 2.5 10 5.5 10 9 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cortex
        </a>
        <nav className="d3-nav-links" aria-label="Primary">
          <a href="#stages">Growth stages</a>
          <a href="#tending">Tending</a>
          <a href="#plant" className="d3-nav-cta">
            Plant a note
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="d3-hero">
          <p className="d3-eyebrow">A digital garden for your thoughts</p>
          <h1 className="d3-headline">
            Plant a note.
            <br />
            <em>
              Grow
              <svg
                className="d3-vine"
                viewBox="0 0 220 22"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 12 C 40 4, 80 20, 118 10 S 190 6, 216 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M52 9 C 48 4, 42 4, 40 8 C 44 11, 49 11, 52 9 Z"
                  fill="currentColor"
                />
                <path
                  d="M126 12 C 130 17, 136 17, 138 13 C 134 10, 129 10, 126 12 Z"
                  fill="currentColor"
                />
                <path
                  d="M178 8 C 174 3, 168 3, 166 7 C 170 10, 175 10, 178 8 Z"
                  fill="currentColor"
                />
              </svg>
            </em>{" "}
            a mind.
          </h1>
          <p className="d3-sub">
            Most apps store notes like boxes in an attic. Cortex tends them
            like a garden — seedlings caught in passing, grafted and pruned,
            until a few become evergreen.
          </p>
          <div className="d3-hero-actions">
            <a className="d3-button" href="#plant">
              Start planting
            </a>
            <a className="d3-text-link" href="#stages">
              See how a note grows ↓
            </a>
          </div>
        </section>

        {/* ---------- GROWTH STAGES ---------- */}
        <section className="d3-section" id="stages">
          <p className="d3-eyebrow">Growth stages</p>
          <h2 className="d3-section-title">The three ages of a note</h2>
          <div className="d3-plates">
            {PLATES.map((plate) => (
              <article className="d3-plate" key={plate.stage}>
                <p className="d3-plate-label">
                  {plate.plate} — {plate.kind}
                </p>
                <div className="d3-plate-figure">{plate.figure}</div>
                <h3>{plate.stage}</h3>
                <p className="d3-plate-example">{plate.example}</p>
                <p className="d3-plate-caption">{plate.caption}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- TENDING ---------- */}
        <section className="d3-section" id="tending">
          <p className="d3-eyebrow">Tending</p>
          <h2 className="d3-section-title">
            A garden keeps itself, with a little help.
          </h2>
          <div className="d3-tending-grid">
            {TENDING.map((item) => (
              <article className="d3-tend" key={item.tag}>
                <p className="d3-tend-tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- QUOTE ---------- */}
        <section className="d3-section d3-quote-section">
          <div className="d3-ornament" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <figure className="d3-quote">
            <blockquote>
              “My notes used to be where ideas went to die. Now they&apos;re
              where they go to <em>grow</em>.”
            </blockquote>
            <figcaption>— Cortex gardener since 2023</figcaption>
          </figure>
          <div className="d3-ornament" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="d3-cta" id="plant">
          <p className="d3-eyebrow d3-eyebrow--light">Begin</p>
          <h2>
            The best time to plant a note was years ago.
            <br />
            <em>The second-best time is now.</em>
          </h2>
          <a className="d3-button d3-button--marigold" href="#top">
            Plant your first note
          </a>
          <p className="d3-fine-print">
            Free for your first 1,000 notes · Germinates in seconds · Exports
            as Markdown
          </p>
        </section>
      </main>

      <footer className="d3-footer">
        <span>Cortex Seed Co.</span>
        <span aria-hidden="true">·</span>
        <span>Packet Nº 003</span>
        <span aria-hidden="true">·</span>
        <span>Sow any season</span>
        <span aria-hidden="true">·</span>
        <span>Est. 2026</span>
      </footer>
    </div>
  );
}
