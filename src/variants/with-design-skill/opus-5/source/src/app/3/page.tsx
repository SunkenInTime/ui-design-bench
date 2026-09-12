import { BacklinkPlates } from "./backlink-plates";
import { OverprintHero } from "./overprint-hero";
import { ResurfaceRack } from "./resurface-rack";
import styles from "./page.module.css";

/* Paper grain: one turbulence pass over the whole sheet, very low opacity. */
function PaperGrain() {
  return (
    <svg className={styles.grain} aria-hidden="true" focusable="false">
      <filter id="cairn-riso-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#cairn-riso-grain)" />
    </svg>
  );
}

/* The bullseye a printer lines up each pass against. */
function RegistrationMark({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M16 0v10M16 22v10M0 16h10M22 16h10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CairnMark() {
  return (
    <svg
      className={styles.cairnMark}
      viewBox="0 0 26 30"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="13" cy="25.5" rx="11.5" ry="3.6" fill="currentColor" />
      <ellipse cx="12" cy="18" rx="8.6" ry="3.2" fill="currentColor" />
      <ellipse cx="14" cy="11.4" rx="6" ry="2.8" fill="currentColor" />
      <ellipse cx="12.4" cy="5.6" rx="3.4" ry="2.4" fill="currentColor" />
    </svg>
  );
}

const COLOUR_BAR = [
  { name: "Fluorescent pink", ink: "pink" },
  { name: "Medium blue", ink: "blue" },
  { name: "Pink over blue", ink: "violet" },
  { name: "Yellow", ink: "yellow" },
  { name: "Ink black", ink: "black" },
  { name: "Pale sage stock", ink: "paper" },
];

const SPECS = [
  {
    ink: "black",
    title: "Plain markdown, on your disk",
    body: "Every note is a .md file in a folder you picked. Cairn runs with the network off. If you ever leave, the folder stays where it is and still opens in anything.",
  },
  {
    ink: "blue",
    title: "Search reads the scans too",
    body: "Search covers every note, and the text inside scanned PDFs and photographed pages you dropped in years ago and forgot to name.",
  },
  {
    ink: "pink",
    title: "Today's note is already open",
    body: "Cairn opens a dated note the moment it launches. Start typing. Decide where it belongs later, or never.",
  },
  {
    ink: "yellow",
    title: "Every note keeps its own proofs",
    body: "Cairn saves a version each time you stop typing. Open an earlier draft, read what changed, put it back.",
  },
  {
    ink: "violet",
    title: "One vault, desktop and phone",
    body: "The phone app opens the same vault. Edit either one and you are editing the same file. Moving it between machines is the part you pay for.",
  },
];

export default function OverprintPage() {
  return (
    <main className={styles.page}>
      <PaperGrain />

      <div className={styles.trim} aria-hidden="true">
        <span className={`${styles.crop} ${styles.cropTL}`} />
        <span className={`${styles.crop} ${styles.cropTR}`} />
        <span className={`${styles.crop} ${styles.cropBL}`} />
        <span className={`${styles.crop} ${styles.cropBR}`} />
        <RegistrationMark className={`${styles.regMark} ${styles.regMarkTop}`} />
        <RegistrationMark className={`${styles.regMark} ${styles.regMarkBottom}`} />
      </div>

      <div className={styles.sheet}>
        <header className={styles.masthead}>
          <a className={styles.wordmark} href="#top">
            <CairnMark />
            <span>Cairn</span>
          </a>
          <nav className={styles.nav} aria-label="Sections">
            <a href="#links">Links</a>
            <a href="#resurface">Resurface</a>
            <a href="#specs">What it does</a>
            <a href="#price">Price</a>
          </nav>
          <a className={styles.mastheadCta} href="#price">
            Download Cairn
          </a>
        </header>

        <section className={styles.hero} id="top">
          <p className={styles.jobDocket}>
            <span>Job 0001</span>
            <span aria-hidden="true" className={styles.docketRule} />
            <span>2 colours, 1 pass</span>
            <span aria-hidden="true" className={styles.docketRule} />
            <span>stock: your own disk</span>
          </p>

          <OverprintHero />

          <div className={styles.heroFoot}>
            <p className={styles.deck}>
              Cairn keeps your notes as plain markdown in a folder you choose.
              Type <code className={styles.code}>[[</code> to link one note to
              another and the link prints on both of them. Ten years later,
              both still open.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="#price">
                Download Cairn — free for one vault
              </a>
              <a className={styles.secondaryCta} href="#resurface">
                See what Resurface does
              </a>
            </div>
          </div>
        </section>

        <div className={styles.colourBar} aria-hidden="true">
          {COLOUR_BAR.map((swatch) => (
            <div key={swatch.name} className={styles.swatch} data-ink={swatch.ink}>
              <span className={styles.swatchChip} />
              <span className={styles.swatchName}>{swatch.name}</span>
            </div>
          ))}
        </div>

        <section className={styles.section} id="links">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Two plates</p>
            <h2 className={styles.sectionTitle}>
              Link two notes and both of them remember
            </h2>
            <p className={styles.sectionBody}>
              Type <code className={styles.code}>[[</code> anywhere and pick a
              note. Cairn writes the link into your markdown and puts the
              backlink on the other note without being asked. No folders to
              keep tidy, no tags to invent at two in the morning.
            </p>
          </div>
          <BacklinkPlates />
        </section>

        <section className={`${styles.section} ${styles.sectionResurface}`} id="resurface">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>The rack</p>
            <h2 className={styles.sectionTitle}>
              Resurface pulls back the note you stopped opening
            </h2>
            <p className={styles.sectionBody}>
              While you write, Cairn reads what you are working on and looks
              through everything you have not opened in a year. When an old
              note shares links and language with today&rsquo;s, it comes back
              up. This is the reason people keep a vault for a decade instead
              of starting a new one every job.
            </p>
          </div>
          <ResurfaceRack />
        </section>

        <section className={styles.section} id="specs">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Press specification</p>
            <h2 className={styles.sectionTitle}>The rest of the run sheet</h2>
          </div>
          <ul className={styles.specList}>
            {SPECS.map((spec) => (
              <li key={spec.title} className={styles.specItem}>
                <span
                  className={styles.specChip}
                  data-ink={spec.ink}
                  aria-hidden="true"
                />
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <p className={styles.specBody}>{spec.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="price">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Press run</p>
            <h2 className={styles.sectionTitle}>Two ways to run it</h2>
          </div>

          <div className={styles.priceRow}>
            <article className={`${styles.priceCard} ${styles.priceFree}`}>
              <p className={styles.priceTag}>One vault</p>
              <p className={styles.priceFigure}>
                Free<span className={styles.priceUnit}> — no account</span>
              </p>
              <ul className={styles.priceList}>
                <li>Unlimited notes in one vault on one machine</li>
                <li>Links, backlinks, Resurface, version history, search</li>
                <li>Your markdown files stay yours whatever happens next</li>
              </ul>
              <a className={styles.priceCta} href="#top">
                Download Cairn
              </a>
            </article>

            <article className={`${styles.priceCard} ${styles.pricePaid}`}>
              <p className={styles.priceTag}>Sync</p>
              <p className={styles.priceFigure}>
                $8<span className={styles.priceUnit}> a month</span>
              </p>
              <ul className={styles.priceList}>
                <li>Everything in one vault</li>
                <li>The same vault on your phone and your other machines</li>
                <li>Stop paying and every note stays on your disk, unlocked</li>
              </ul>
              <a className={styles.priceCta} href="#top">
                Start syncing
              </a>
            </article>
          </div>
        </section>

        <footer className={styles.colophon}>
          <div className={styles.colophonMark}>
            <CairnMark />
            <span>Cairn</span>
          </div>
          <div className={styles.colophonBody}>
            <h2 className={styles.colophonTitle}>Colophon</h2>
            <p>
              Set in Bricolage Grotesque and Karla. Printed in fluorescent pink,
              medium blue and yellow on pale sage, 120 gsm. Two inks, one pass;
              the violet is only where they cross. Registration deliberately out
              by a millimetre or so, as it always is.
            </p>
            <p>
              Press run: one sheet, pulled again on every visit. Notes shown are
              made up. Your notes are files on your disk and never touch ours.
            </p>
          </div>
          <nav className={styles.colophonNav} aria-label="More">
            <a href="#specs">What it does</a>
            <a href="#price">Price</a>
            <a href="#links">Links and backlinks</a>
            <a href="#resurface">Resurface</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
