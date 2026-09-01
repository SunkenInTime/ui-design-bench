import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import styles from "./page.module.css";

const serif = Alegreya({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam — Think in the margins",
};

type Gloss = { ref: string; side: "left" | "right"; text: string };

const GLOSSES: Gloss[] = [
  {
    ref: "a",
    side: "left",
    text: "A second brain is not a filing cabinet. It's a record of what you thought about what you read.",
  },
  {
    ref: "b",
    side: "right",
    text: "Loam is a note-taking app. Notes are plain Markdown files in a folder you own; the app is what makes them talk to each other.",
  },
  {
    ref: "c",
    side: "left",
    text: "Highlight anything on the web, in a PDF, or in a photo of a page. Your note attaches to the passage, not to a folder.",
  },
  {
    ref: "d",
    side: "right",
    text: "Backlinks. Every note you write about a source appears on the source. Every source appears on the note.",
  },
  {
    ref: "e",
    side: "left",
    text: "Resurfacing. While you write, Loam shows old notes that share a subject with the sentence you're typing.",
  },
  {
    ref: "f",
    side: "right",
    text: "This layout is a thousand years old: the text in the middle, the commentary around it. It is still the best picture of how thinking accumulates.",
  },
];

function Ref({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span className={styles.ref} data-ref={id} id={`ref-${id}`}>
      {children}
      <sup>{id}</sup>
    </span>
  );
}

function GlossList({ side }: { side: "left" | "right" }) {
  return (
    <aside
      className={side === "left" ? styles.marginLeft : styles.marginRight}
      aria-label={`${side} margin notes`}
    >
      {GLOSSES.filter((g) => g.side === side).map((g) => (
        <a key={g.ref} href={`#ref-${g.ref}`} className={styles.gloss} data-ref={g.ref}>
          <sup>{g.ref}</sup>
          {g.text}
        </a>
      ))}
    </aside>
  );
}

const APPARATUS = [
  ["capture", "Clip a passage from the web, a PDF, an email, or a photo of a page. Loam keeps the source and the exact location."],
  ["margin", "Write beside the passage, not beneath it. Your note and its source stay on one page."],
  ["backlinks", "Every reference runs both ways. Delete nothing; the page remembers."],
  ["resurfacing", "While you write, related notes from years ago appear in the margin. You reread what you would have lost."],
  ["search", "By word or by meaning, across every page, offline."],
  ["files", "Each note is a Markdown file in a folder you own. Loam reads them; it doesn't hold them."],
  ["sync", "End-to-end encrypted between your devices. Optional."],
];

export default function GlossPage() {
  return (
    <div className={`${serif.variable} ${sans.variable} ${styles.page}`}>
      <header className={styles.running}>
        <a href="#" className={styles.wordmark}>
          Loam
        </a>
        <span className={styles.runningTitle}>Think in the margins</span>
        <nav className={styles.runningNav} aria-label="Primary">
          <a href="#apparatus">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Sign in</a>
        </nav>
      </header>

      <main>
        <section className={styles.folio}>
          <GlossList side="left" />

          <div className={styles.text}>
            <p className={styles.body}>
              <Ref id="a">Everything you read, you argue with.</Ref>{" "}
              <Ref id="b">Loam keeps the argument.</Ref>{" "}
              <Ref id="c">Capture a passage, write your objection in the margin,</Ref>{" "}
              <Ref id="d">and the passage remembers who it was talking to.</Ref>{" "}
              <Ref id="e">
                Years later a new note will quote an old one you&apos;d
                forgotten,
              </Ref>{" "}
              <Ref id="f">
                and the page will look like this one: one thought in the
                middle, and everything you&apos;ve ever said about it around
                the edges.
              </Ref>
            </p>
            <div className={styles.ctas}>
              <a href="#" className={styles.primary}>
                Start writing — free
              </a>
              <a href="#spread" className={styles.secondary}>
                See a page
              </a>
            </div>
          </div>

          <GlossList side="right" />
        </section>

        <section id="apparatus" className={styles.apparatus}>
          <header className={styles.sectionHead}>
            <h2 className={styles.h2}>Apparatus</h2>
            <p className={styles.sectionLede}>
              What the app does, entry by entry.
            </p>
          </header>
          <dl className={styles.entries}>
            {APPARATUS.map(([lemma, text]) => (
              <div key={lemma} className={styles.entry}>
                <dt className={styles.lemma}>
                  {lemma} <span className={styles.bracket}>]</span>
                </dt>
                <dd className={styles.entryText}>{text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="spread" className={styles.spread}>
          <header className={styles.sectionHead}>
            <h2 className={styles.h2}>A page, open</h2>
            <p className={styles.sectionLede}>
              What you read on the left. What you thought on the right. Loam
              keeps them facing.
            </p>
          </header>
          <div className={styles.book}>
            <article className={styles.verso}>
              <p className={styles.pageLabel}>Source · Seneca, <em>On the Shortness of Life</em>, §1</p>
              <p className={styles.excerpt}>
                It is not that we have a short time to live, but that we waste
                a lot of it. Life is long enough, and a sufficiently generous
                amount has been given to us for the highest achievements{" "}
                <mark className={styles.mark}>
                  if it were all well invested.
                </mark>{" "}
                But when it is wasted in heedless luxury and spent on no good
                activity, we are forced at last by death&apos;s final constraint
                to realise that it has passed away before we knew it was
                passing.
              </p>
            </article>
            <article className={styles.recto}>
              <p className={styles.pageLabel}>Your note · 14 March 2026</p>
              <h3 className={styles.noteTitle}>&ldquo;Well invested&rdquo; is a scope problem</h3>
              <p className={styles.noteBody}>
                Seneca isn&apos;t saying work harder. He&apos;s saying decide
                what the time is <em>for</em> before it&apos;s spent. Same claim
                as Parkinson&apos;s law from the other direction: the deadline is
                the scope.
              </p>
              <p className={styles.noteLinks}>
                Links to <a href="#">Parkinson&apos;s law</a>,{" "}
                <a href="#">Weekly review</a>
              </p>
              <p className={styles.noteBacklinks}>
                Cited by <a href="#">Ninety-minute blocks</a> ·{" "}
                <a href="#">Q4 roadmap</a> · <a href="#">2026-08-28</a>
              </p>
            </article>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaH}>Your margins are waiting.</h2>
          <p className={styles.ctaLede}>
            Free for your first 500 notes. The files are yours either way.
          </p>
          <a href="#" className={styles.primary}>
            Start writing — free
          </a>
        </section>
      </main>

      <footer className={styles.colophon}>
        <span>Loam · MMXXVI</span>
        <span>Set in Alegreya and Alegreya Sans</span>
        <span>Privacy · Status</span>
      </footer>
    </div>
  );
}
