import { FloorPlan } from "./plan";
import styles from "./page.module.css";

const RESURFACED = [
  {
    title: "Bridge deck expansion joints",
    age: "not opened in 16 months",
    why: "thermal expansion — the same arithmetic",
  },
  {
    title: "Sourdough: hydration log",
    age: "not opened in 2 years",
    why: "you already designed this logging table",
  },
  {
    title: "Estuary sediment cores",
    age: "not opened in 14 months",
    why: "names two of your clay sources",
  },
];

const RESULTS = [
  {
    title: "Why the 1854 cholera map worked",
    kind: "MARKDOWN",
    detail: "6 matches",
    scanned: false,
  },
  {
    title: "Reading — Seeing Like a State",
    kind: "MARKDOWN",
    detail: "2 matches",
    scanned: false,
  },
  {
    title: "Interview — R. Okonjo, 12 Mar",
    kind: "SCANNED PDF",
    detail: "1 match, page 4",
    scanned: true,
  },
];

const NOTES = [
  "Dimensions in metres. Do not scale from this drawing.",
  "Notes are markdown files in a folder you pick. Cairn does not hold them, and it does not need a network to open them.",
  "Sync is optional. Without it the vault stays on one machine and costs nothing.",
  "Version history is kept per note, not per vault.",
];

const REVISIONS = [
  { rev: "3", desc: "Resurface added", date: "2026-07" },
  { rev: "2", desc: "Reading room extended to scanned PDFs", date: "2026-03" },
  { rev: "1", desc: "Annex — vault opened on phone", date: "2025-11" },
];

const TITLE_BLOCK = [
  { k: "Project", v: "Cairn — personal vault" },
  { k: "Drawing", v: "Memory palace / Level 01" },
  { k: "Drawing no.", v: "CRN-002" },
  { k: "Scale", v: "1:50" },
  { k: "Revision", v: "3" },
  { k: "Date", v: "2026-07-25" },
  { k: "Sheet", v: "2 of 5" },
  { k: "Units", v: "Metres" },
];

export default function MemoryPalacePage() {
  return (
    <div className={styles.page}>
      <div className={styles.sheet}>
        {/* ------------------------------ header ------------------------------ */}
        <header className={styles.masthead}>
          <span className={styles.wordmark}>Cairn</span>
          <span className={styles.mastRule} aria-hidden="true" />
          <span className={styles.mastMeta}>CRN-002 · SHEET 2 OF 5 · REV 3</span>
        </header>

        {/* ------------------------------- hero ------------------------------- */}
        <section className={styles.hero}>
          <div className={styles.heroBody}>
            <p className={styles.eyebrow}>Notes app · plain files · offline</p>
            <h1 className={styles.h1}>Notes you can walk back into.</h1>
            <p className={styles.deck}>
              Cairn keeps your notes as markdown files in a folder on your own
              disk. Type <code className={styles.code}>[[</code> to cut a door
              between two of them and the way back is drawn on the other note
              for you. Ten years in, you can still find the room you left
              something in — and if you stop using Cairn, you keep every file.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="#pricing">
                Download Cairn — free for one vault
              </a>
              <a className={styles.ctaGhost} href="#plan">
                Walk the plan
              </a>
            </div>
            <dl className={styles.keyFacts}>
              <div>
                <dt>Format</dt>
                <dd>Markdown, on your disk</dd>
              </div>
              <div>
                <dt>Network</dt>
                <dd>Not required</dd>
              </div>
              <div>
                <dt>Vault</dt>
                <dd>Free · sync $8/mo</dd>
              </div>
            </dl>
          </div>

          <aside className={styles.legend} aria-label="Drawing legend">
            <h2 className={styles.legendTitle}>Legend</h2>
            <ul className={styles.legendList}>
              <li>
                <span className={styles.swatchWall} aria-hidden="true" />
                <span>Wall — a note</span>
              </li>
              <li>
                <span className={styles.swatchDoor} aria-hidden="true" />
                <span>Opening — a link</span>
              </li>
              <li>
                <span className={styles.swatchDim} aria-hidden="true" />
                <span>Dimension</span>
              </li>
              <li>
                <span className={styles.swatchRed} aria-hidden="true" />
                <span>Redline — revision note</span>
              </li>
            </ul>
            <p className={styles.legendNote}>
              Drawn from a vault of 4,120 notes kept since 2016.
            </p>
          </aside>
        </section>

        {/* ---------------------------- floor plan ---------------------------- */}
        <section className={styles.planSection} id="plan">
          <FloorPlan />
        </section>

        {/* --------------------------- section A–A ---------------------------- */}
        <section className={styles.detail}>
          <div className={styles.detailHead}>
            <span className={styles.detailRef}>Section A–A</span>
            <h2 className={styles.detailTitle}>The opening between two notes</h2>
            <p className={styles.detailLede}>
              Type <code className={styles.code}>[[</code> and start naming a
              note. Cairn cuts the opening. It also cuts it from the other side,
              which is the half people forget to do by hand.
            </p>
          </div>

          <div className={styles.detailDrawing}>
            <svg viewBox="0 0 760 384" className={styles.sectionSvg} role="img"
              aria-label="Section through two notes. A doorway cut in the wall between them carries a link one way and a backlink the other.">
              <defs>
                <pattern
                  id="crn2-cut"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line x1="0" y1="0" x2="0" y2="8" className={styles.cutHatch} />
                </pattern>
                <marker
                  id="crn2-arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" className={styles.markerRed} />
                </marker>
              </defs>

              {/* cut structure — slabs, outer walls, and the party wall
                  between the two notes, which stops short to leave a doorway */}
              <g className={styles.cut}>
                <rect x="24" y="40" width="712" height="12" />
                <rect x="24" y="318" width="712" height="12" />
                <rect x="24" y="52" width="12" height="266" />
                <rect x="724" y="52" width="12" height="266" />
                <rect x="370" y="52" width="12" height="62" />
              </g>

              {/* chamber 1 */}
              <text x="56" y="86" className={styles.chamberTitle}>
                Estuary sediment cores
              </text>
              <g className={styles.textRule}>
                <line x1="56" y1="106" x2="330" y2="106" />
                <line x1="56" y1="120" x2="298" y2="120" />
                <line x1="56" y1="134" x2="342" y2="134" />
              </g>

              {/* chamber 2 */}
              <text x="402" y="86" className={styles.chamberTitle}>
                Why the 1854 cholera map worked
              </text>
              <g className={styles.textRule}>
                <line x1="402" y1="106" x2="700" y2="106" />
                <line x1="402" y1="120" x2="668" y2="120" />
                <line x1="402" y1="134" x2="706" y2="134" />
              </g>

              {/* the link being typed */}
              <g>
                <rect
                  x="54"
                  y="156"
                  width="236"
                  height="32"
                  className={styles.typeBox}
                />
                <text x="66" y="178" className={styles.typed}>
                  [[Why the 1854 cholera
                </text>
                <line x1="280" y1="163" x2="280" y2="182" className={styles.caret} />
              </g>

              {/* both arcs pass through the opening, inside the building */}
              <text x="376" y="182" textAnchor="middle" className={styles.arcLabel}>
                link you typed
              </text>
              <path
                d="M 318 216 C 344 188 408 188 434 216"
                className={styles.linkArc}
                markerEnd="url(#crn2-arrow)"
              />
              <path
                d="M 434 262 C 408 290 344 290 318 262"
                className={styles.linkArc}
                markerEnd="url(#crn2-arrow)"
              />
              <text x="376" y="310" textAnchor="middle" className={styles.arcLabel}>
                backlink, written for you
              </text>

              {/* opening dimension, set below the slab where it belongs */}
              <g className={styles.openingDimLine}>
                <line x1="370" y1="330" x2="370" y2="356" />
                <line x1="382" y1="330" x2="382" y2="356" />
                <line x1="330" y1="350" x2="422" y2="350" />
              </g>
              <text x="376" y="372" textAnchor="middle" className={styles.openingDim}>
                OPENING 0.90 × 2.10
              </text>
            </svg>
          </div>
        </section>

        {/* --------------------- detail 2 — resurface (vellum) ----------------- */}
        <section className={styles.detail}>
          <div className={styles.vellum}>
            <div className={styles.vellumHead}>
              <span className={styles.vellumRef}>Detail 2 · Rev 3</span>
              <h2 className={styles.vellumTitle}>The door you had forgotten</h2>
            </div>
            <p className={styles.vellumLede}>
              Every note-taking app can show you what you linked. Resurface
              opens the rooms you never linked and stopped visiting. While you
              write, it looks for notes you have not touched in a year that bear
              on the page in front of you, and puts them at the edge of it.
            </p>

            <p className={styles.vellumCue}>
              Today you are writing <strong>Kiln temperature curves</strong>.
              Cairn opens three doors:
            </p>

            <ul className={styles.resurfaceList}>
              {RESURFACED.map((item) => (
                <li key={item.title}>
                  <span className={styles.resurfaceTitle}>{item.title}</span>
                  <span className={styles.resurfaceAge}>{item.age}</span>
                  <span className={styles.resurfaceWhy}>{item.why}</span>
                </li>
              ))}
            </ul>

            <p className={styles.vellumFoot}>
              Nothing is filed, moved or rewritten. The doors simply open.
            </p>
          </div>
        </section>

        {/* --------------------- detail 3 — the reading room ------------------- */}
        <section className={styles.detail}>
          <div className={styles.detailHead}>
            <span className={styles.detailRef}>Detail 3 · Room 006</span>
            <h2 className={styles.detailTitle}>Search gets into the boxes</h2>
            <p className={styles.detailLede}>
              Search reads every note in the vault, and it reads the text inside
              scanned PDFs and images too — the interview you photographed, the
              paper you never retyped.
            </p>
          </div>

          <div className={styles.searchPanel}>
            <div className={styles.searchField}>
              <svg
                viewBox="0 0 20 20"
                width="15"
                height="15"
                aria-hidden="true"
                className={styles.searchGlyph}
              >
                <circle cx="8.5" cy="8.5" r="5.5" />
                <line x1="12.6" y1="12.6" x2="17.5" y2="17.5" />
              </svg>
              <span className={styles.searchQuery}>cholera</span>
              <span className={styles.searchCount}>3 notes · 9 matches</span>
            </div>
            <ul className={styles.results}>
              {RESULTS.map((res) => (
                <li key={res.title} className={styles.result}>
                  <span className={styles.resultTitle}>{res.title}</span>
                  <span
                    className={
                      res.scanned ? styles.kindScanned : styles.kindPlain
                    }
                  >
                    {res.kind}
                  </span>
                  <span className={styles.resultDetail}>{res.detail}</span>
                </li>
              ))}
            </ul>
            <p className={styles.searchNote}>
              The third one is a photograph of a page. It has no text layer.
              Cairn read it anyway.
            </p>
          </div>
        </section>

        {/* ------------------------- general notes ---------------------------- */}
        <section className={styles.detail}>
          <div className={styles.detailHead}>
            <span className={styles.detailRef}>General notes</span>
            <h2 className={styles.detailTitle}>Read before building</h2>
          </div>
          <ol className={styles.generalNotes}>
            {NOTES.map((note, i) => (
              <li key={note}>
                <span className={styles.noteRef}>N{i + 1}</span>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ----------------------------- pricing ------------------------------ */}
        <section className={styles.detail} id="pricing">
          <div className={styles.detailHead}>
            <span className={styles.detailRef}>Schedule of rates</span>
            <h2 className={styles.detailTitle}>What the building costs</h2>
          </div>

          <div className={styles.rates}>
            <article className={styles.rate}>
              <div className={styles.rateHead}>
                <span className={styles.rateMark}>V-01</span>
                <h3 className={styles.rateName}>Vault</h3>
              </div>
              <p className={styles.ratePrice}>
                Free<span className={styles.rateUnit}>one vault</span>
              </p>
              <ul className={styles.rateList}>
                <li>Every room drawn on this sheet</li>
                <li>Markdown files in a folder you choose</li>
                <li>Version history on every note</li>
                <li>Works with the network off</li>
              </ul>
              <a className={styles.ctaPrimary} href="#pricing">
                Download Cairn
              </a>
            </article>

            <article className={`${styles.rate} ${styles.rateSync}`}>
              <div className={styles.rateHead}>
                <span className={styles.rateMark}>S-01</span>
                <h3 className={styles.rateName}>Sync</h3>
              </div>
              <p className={styles.ratePrice}>
                $8<span className={styles.rateUnit}>per month</span>
              </p>
              <ul className={styles.rateList}>
                <li>Everything in V-01</li>
                <li>The same vault on desktop and phone</li>
                <li>Add or remove devices whenever</li>
                <li>Cancel and the files stay where they are</li>
              </ul>
              <a className={styles.ctaGhost} href="#pricing">
                Start syncing — $8/month
              </a>
            </article>
          </div>
        </section>

        {/* --------------------------- title block ---------------------------- */}
        <footer className={styles.titleBlock}>
          <div className={styles.tbBrand}>
            <span className={styles.tbWordmark}>Cairn</span>
            <p className={styles.tbTag}>
              A second brain that outlasts the projects it was built for.
            </p>
          </div>

          <dl className={styles.tbFields}>
            {TITLE_BLOCK.map((field) => (
              <div key={field.k} className={styles.tbField}>
                <dt>{field.k}</dt>
                <dd>{field.v}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.tbRevisions}>
            <h2 className={styles.tbRevTitle}>Revisions</h2>
            <ul>
              {REVISIONS.map((rev) => (
                <li key={rev.rev}>
                  <span className={styles.tbRevNo}>{rev.rev}</span>
                  <span className={styles.tbRevDesc}>{rev.desc}</span>
                  <span className={styles.tbRevDate}>{rev.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
