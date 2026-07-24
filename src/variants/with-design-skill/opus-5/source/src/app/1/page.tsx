import type { Metadata } from "next";
import { bigShoulders, courierPrime, plexSans } from "../fonts";
import { CardDrawer } from "./CardDrawer";
import styles from "./direction.module.css";

export const metadata: Metadata = {
  title: "Tessera — file it once, find it for the rest of your life",
  description:
    "A second brain built like a card catalog: every note gets an address, and every address remembers what points at it.",
};

const drawers = [
  {
    label: "Capture",
    range: "Aa — Ez",
    title: "The drawer is already open",
    body: "Press ⌥Space anywhere on your machine and start typing. Clip a paragraph from the browser, forward an email, talk into your phone on a walk. It all lands in the same place, unsorted, which is fine.",
    detail: "Median time from thought to filed card: 1.9 seconds",
  },
  {
    label: "Cross-reference",
    range: "Fa — Nz",
    title: "Two brackets, one connection",
    body: "Type [[ and point at another card. Tessera writes the reverse reference for you, so every card carries a list of the cards that lean on it. Connections are the work; folders were just filing.",
    detail: "Cards with at least one link get opened 4× more often",
  },
  {
    label: "Recall",
    range: "Oa — Zz",
    title: "Ask, and get cited",
    body: "Ask a question in ordinary words. Tessera answers out of your own cards and prints the call numbers it read, so you can go check its work. Nothing arrives from outside the drawer.",
    detail: "Answers cite call numbers — never a source you didn't file",
  },
];

const shipped = [
  { date: "22 JUL", note: "Backlink sidebar, sortable by weight" },
  { date: "09 JUL", note: "Voice capture with on-device transcription" },
  { date: "27 JUN", note: "Import from Obsidian, Notion, Apple Notes" },
  { date: "14 JUN", note: "Offline search across 100k cards" },
  { date: "31 MAY", note: "End-to-end encrypted sync" },
  { date: "18 MAY", note: "Call numbers you can rename in bulk" },
];

export default function CardCatalogDirection() {
  return (
    <div
      className={`${styles.page} ${bigShoulders.variable} ${courierPrime.variable} ${plexSans.variable}`}
    >
      <header className={styles.rail}>
        <span className={styles.plate}>Tessera</span>
        <nav className={styles.railNav} aria-label="Sections">
          <a href="#drawers">The drawers</a>
          <a href="#collection">Your files</a>
          <a href="#shipped">Changelog</a>
        </nav>
        <a className={styles.railCta} href="#start">
          Start a catalog
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>
              Tessera — a second brain, filed properly
            </p>
            <h1 className={styles.h1}>
              File it once.
              <br />
              Find it for the
              <br />
              rest of your life.
            </h1>
            <p className={styles.lede}>
              Tessera gives every note an address and a list of the notes that
              point at it. You capture in a keystroke, link with two brackets,
              and stop trying to remember which folder past-you would have
              picked.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#start">
                Start a catalog
              </a>
              <a className={styles.secondary} href="#drawers">
                Read a sample drawer
              </a>
            </div>
            <dl className={styles.specs}>
              <div>
                <dt>Extent</dt>
                <dd>Unlimited cards, 40k searched instantly</dd>
              </div>
              <div>
                <dt>Medium</dt>
                <dd>Plain markdown files, on your disk</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>Offline first, encrypted sync, export anytime</dd>
              </div>
            </dl>
          </div>

          <CardDrawer />
        </section>

        <section className={styles.drawers} id="drawers">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Three drawers, one desk</h2>
            <p className={styles.sectionNote}>
              Capture, cross-reference, recall. A card moves left to right
              exactly once, then stays findable forever.
            </p>
          </div>

          <div className={styles.drawerRow}>
            {drawers.map((d) => (
              <article className={styles.drawerFront} key={d.label}>
                <div className={styles.brassPlate}>
                  <span className={styles.brassLabel}>{d.label}</span>
                  <span className={styles.brassRange}>{d.range}</span>
                </div>
                <div className={styles.drawerBody}>
                  <h3 className={styles.drawerTitle}>{d.title}</h3>
                  <p className={styles.drawerCopy}>{d.body}</p>
                  <p className={styles.drawerDetail}>{d.detail}</p>
                </div>
                <div className={styles.cardEdges} aria-hidden>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.pull} aria-hidden />
              </article>
            ))}
          </div>
        </section>

        <section className={styles.collection} id="collection">
          <div className={styles.collectionInner}>
            <p className={styles.stamp} aria-hidden>
              Permanent
              <br />
              collection
            </p>
            <h2 className={styles.h2Dark}>
              The cards are yours, including the ones you take somewhere else.
            </h2>
            <div className={styles.collectionCols}>
              <p>
                Every card is a markdown file in a folder you can open in any
                editor, back up with any tool, and read in thirty years when
                Tessera is a fond memory. Sync is end-to-end encrypted; we hold
                the ciphertext and nothing else.
              </p>
              <p>
                Leaving is one click and a zip file, with call numbers preserved
                as filenames and cross-references rewritten as ordinary links.
                A catalog you can&rsquo;t walk out of isn&rsquo;t a catalog.
                It&rsquo;s a cage.
              </p>
            </div>
            <ul className={styles.collectionList}>
              <li>Local folder you choose</li>
              <li>Markdown with front matter</li>
              <li>Zip export, links intact</li>
              <li>No training on your notes, ever</li>
            </ul>
          </div>
        </section>

        <section className={styles.slip} id="shipped">
          <div className={styles.slipHead}>
            <h2 className={styles.slipTitle}>Date due</h2>
            <p className={styles.slipNote}>
              What shipped, stamped on the way out
            </p>
          </div>
          <ul className={styles.slipList}>
            {shipped.map((s) => (
              <li key={s.date}>
                <span className={styles.slipDate}>{s.date}</span>
                <span className={styles.slipText}>{s.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.start} id="start">
          <h2 className={styles.startTitle}>Open a drawer</h2>
          <p className={styles.startCopy}>
            Free for your first 500 cards. $8 a month after that, for as many
            cards as you can write.
          </p>
          <form
            className={styles.startForm}
            action="#"
            aria-label="Create an account"
          >
            <label className={styles.startLabel} htmlFor="d1-email">
              Email
            </label>
            <input
              className={styles.startInput}
              id="d1-email"
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
        <span className={styles.footerPlate}>Tessera</span>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="#drawers">Features</a>
          <a href="#start">Pricing</a>
          <a href="#collection">File format</a>
          <a href="#shipped">Changelog</a>
        </nav>
        <p className={styles.footerFine}>
          Cataloged in Copenhagen. Cards outlive software.
        </p>
      </footer>
    </div>
  );
}
