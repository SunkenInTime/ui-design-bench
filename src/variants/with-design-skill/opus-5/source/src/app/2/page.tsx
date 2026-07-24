import type { Metadata } from "next";
import { fraunces, karla, splineMono } from "../fonts";
import { RootSegment } from "./RootSegment";
import styles from "./direction.module.css";

export const metadata: Metadata = {
  title: "Tessera — notes don't file, they root",
  description:
    "A second brain that grows underground: capture anything, let the links spread, and dig up what you wrote two years ago at the moment it matters.",
};

const captureCard = (
  <div className={styles.card}>
    <p className={styles.cardLabel}>Quick capture · ⌥Space</p>
    <p className={styles.captureBar}>
      <span className={styles.caret} aria-hidden />
      sourdough is a network, not a recipe — cf. Ostrom on commons
    </p>
    <p className={styles.cardMeta}>Saved 07:12 · untitled · no folder chosen</p>
  </div>
);

const linkCard = (
  <div className={styles.card}>
    <p className={styles.cardLabel}>Note · 2 links out</p>
    <p className={styles.noteText}>
      Fermentation is a <span className={styles.link}>[[shared metabolism]]</span>
      : the starter and the baker keep each other alive, which is roughly how a{" "}
      <span className={styles.link}>[[commons]]</span> stays intact.
    </p>
    <ul className={styles.backlinks}>
      <li>← Ostrom, governing the commons</li>
      <li>← Starter log, 14 Mar</li>
      <li className={styles.suggested}>← Suggested: mutualism, definitions</li>
    </ul>
  </div>
);

const resurfaceCard = (
  <div className={styles.card}>
    <p className={styles.cardLabel}>This morning · 3 notes</p>
    <ul className={styles.chips}>
      <li>
        <span>Mutualism, definitions</span>
        <span className={styles.age}>14 months</span>
      </li>
      <li>
        <span>Ostrom on monitoring costs</span>
        <span className={styles.age}>2 years</span>
      </li>
      <li>
        <span>Why my first starter died</span>
        <span className={styles.age}>8 months</span>
      </li>
    </ul>
    <p className={styles.cardMeta}>Chosen by overlap with today&rsquo;s draft</p>
  </div>
);

const outlineCard = (
  <div className={styles.card}>
    <p className={styles.cardLabel}>Cluster · 21 notes · dense</p>
    <ol className={styles.outline}>
      <li>The starter is not an ingredient</li>
      <li>Shared metabolism, two directions</li>
      <li>What the commons literature gets right</li>
      <li>Failure modes: neglect, then hoarding</li>
    </ol>
    <p className={styles.cardMeta}>Order taken from the links between them</p>
  </div>
);

const horizons = [
  {
    letter: "O",
    depth: "litter layer · 0–2 cm",
    title: "everything lands here first",
    body: "Press ⌥Space and dump it in: a link, a quotation, half a sentence you don't want to lose. No title, no folder, no decision about where it belongs. Tessera stamps the time and gets out of the way.",
    detail: "Works offline · no title required · 1.9s from thought to saved",
    hairs: "right" as const,
    card: captureCard,
  },
  {
    letter: "A",
    depth: "hyphae · 2–30 cm",
    title: "the links are the organism",
    body: "Type two brackets to point one note at another. When two notes start using the same phrases, Tessera offers the link and you accept or ignore it. Every note carries a list of what has grown into it.",
    detail: "Suggested links · backlinks on every note · no tag taxonomy to maintain",
    hairs: "left" as const,
    card: linkCard,
  },
  {
    letter: "B",
    depth: "decomposition · 30 cm and down",
    title: "old notes break down into new ones",
    body: "Each morning Tessera puts three notes you haven't opened in months next to whatever you're writing today. Most of them you close. One of them changes the paragraph you were stuck on.",
    detail: "Three notes a day · surfaced by overlap, not recency",
    hairs: "right" as const,
    card: resurfaceCard,
  },
  {
    letter: "S",
    depth: "fruiting body · above ground",
    title: "when a cluster is ready, it shows",
    body: "Dense knots of linked notes are the part of your thinking that finished without telling you. Tessera spots them and hands you the cluster as an outline, in the order the links already imply.",
    detail: "Cluster → outline → draft, with every note still linked back",
    hairs: "left" as const,
    card: outlineCard,
  },
];

const specimens = [
  {
    label: "Specimen 01 · dissertation",
    title: "Soil carbon, 240 pages",
    data: "1,842 notes · 3 years · 6,300 links",
  },
  {
    label: "Specimen 02 · newsletter",
    title: "Ninety-six Sundays running",
    data: "640 notes · 2 years · 1,100 links",
  },
  {
    label: "Specimen 03 · one long argument",
    title: "Why sourdough is a network",
    data: "210 notes · 8 months · 480 links",
  },
];

export default function MyceliumDirection() {
  return (
    <div
      className={`${styles.page} ${fraunces.variable} ${karla.variable} ${splineMono.variable}`}
    >
      <header className={styles.nav}>
        <span className={styles.wordmark}>tessera</span>
        <nav className={styles.navLinks} aria-label="Sections">
          <a href="#horizons">How it grows</a>
          <a href="#roots">Your files</a>
          <a href="#specimens">Specimens</a>
        </nav>
        <a className={styles.navCta} href="#start">
          Start free
        </a>
      </header>

      <main>
        <section className={`${styles.grid} ${styles.hero}`}>
          <div className={styles.gutter}>
            <svg
              className={styles.heroStub}
              viewBox="0 0 40 200"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                className={styles.trunk}
                pathLength={1}
                d="M20 0 C 26 50, 14 110, 20 200"
              />
              <path
                className={styles.hair}
                pathLength={1}
                d="M20 90 C 27 100, 30 116, 31 136"
              />
            </svg>
          </div>

          <div className={styles.heroBody}>
            <p className={styles.eyebrow}>Tessera — a second brain</p>
            <h1 className={styles.h1}>
              notes don&rsquo;t file.
              <br />
              <em>they root.</em>
            </h1>
            <div className={styles.heroRow}>
              <p className={styles.lede}>
                Keep every scrap you capture and let the connections spread on
                their own. Tessera searches the network instead of a folder
                tree, so last year&rsquo;s reading turns up in this
                morning&rsquo;s paragraph.
              </p>
              <div className={styles.heroSide}>
                <div className={styles.heroActions}>
                  <a className={styles.primary} href="#start">
                    Start free
                  </a>
                  <a className={styles.quiet} href="#horizons">
                    See how linking works
                  </a>
                </div>
                <ul className={styles.facts}>
                  <li>No folders to invent</li>
                  <li>Markdown on your disk</li>
                  <li>Search works offline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="horizons">
          {horizons.map((h) => (
            <article className={`${styles.grid} ${styles.horizon}`} key={h.letter}>
              <div className={styles.gutter}>
                <RootSegment hairs={h.hairs} />
              </div>
              <div className={styles.horizonBody}>
                <p className={styles.horizonLabel}>
                  <span className={styles.horizonLetter}>{h.letter}</span>
                  {h.depth}
                </p>
                <h2 className={styles.h2}>{h.title}</h2>
                <p className={styles.copy}>{h.body}</p>
                <p className={styles.detail}>{h.detail}</p>
              </div>
              <div className={styles.horizonCard}>{h.card}</div>
            </article>
          ))}
        </section>

        <section className={styles.roots} id="roots">
          <div className={styles.rootsInner}>
            <h2 className={styles.h2Light}>
              roots you can dig up and replant somewhere else
            </h2>
            <div className={styles.rootsCols}>
              <p>
                Every note is a markdown file in a folder you picked, readable
                by any editor you like and by you, alone, in fifteen years.
                Tessera syncs the ciphertext and never holds the key.
              </p>
              <p>
                Leaving takes one click: a zip of the same files with the links
                rewritten as plain references. Nothing in here trains a model,
                and nothing here needs us to keep existing.
              </p>
            </div>
            <ul className={styles.rootsList}>
              <li>End-to-end encrypted sync</li>
              <li>Local folder, your choice</li>
              <li>Zip export with links intact</li>
              <li>Never used for training</li>
            </ul>
          </div>
        </section>

        <section className={styles.specimens} id="specimens">
          <h2 className={styles.h2}>grown in tessera</h2>
          <div className={styles.specimenRow}>
            {specimens.map((s) => (
              <article className={styles.specimen} key={s.label}>
                <p className={styles.specimenLabel}>{s.label}</p>
                <h3 className={styles.specimenTitle}>{s.title}</h3>
                <p className={styles.specimenData}>{s.data}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.start} id="start">
          <h2 className={styles.h1Small}>start with one note</h2>
          <p className={styles.copy}>
            Free while your garden is small — up to 500 notes. £6 a month after
            that, however dense it gets.
          </p>
          <form className={styles.form} action="#" aria-label="Create an account">
            <label className={styles.srOnly} htmlFor="d2-email">
              Email
            </label>
            <input
              className={styles.input}
              id="d2-email"
              type="email"
              placeholder="you@somewhere.org"
              autoComplete="email"
            />
            <button className={styles.primary} type="submit">
              Create an account
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.wordmark}>tessera</span>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="#horizons">How it grows</a>
          <a href="#roots">File format</a>
          <a href="#specimens">Specimens</a>
          <a href="#start">Pricing</a>
        </nav>
        <p className={styles.fine}>
          Grown in Lisbon. Nothing leaves your machine unless you ask it to.
        </p>
      </footer>
    </div>
  );
}
