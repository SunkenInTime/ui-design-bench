import type { Metadata } from "next";
import { Courier_Prime, Literata } from "next/font/google";
import styles from "./page.module.css";
import { CardFan } from "./card-fan";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-type",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-book",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam — A slip-box that talks back",
};

const METHOD = [
  {
    id: "1",
    title: "Write one idea on one card",
    body: "In your own words, not the author's. A highlight is something you agreed with. A card is something you understood.",
  },
  {
    id: "1a",
    title: "File it behind its parent",
    body: "Put the new card behind the card that made you think of it. The ID says where it lives: 1a is a branch of 1, not a folder.",
  },
  {
    id: "1a1",
    title: "Link across branches",
    body: "When a card belongs to two conversations, link it to both. That's where the box starts knowing things you don't.",
  },
];

const FEATURES = [
  {
    title: "Plain-text cards",
    body: "Every card is a Markdown file in a folder you own. Open it in anything.",
  },
  {
    title: "Backlinks",
    body: "Every link runs both ways. A card knows who cites it.",
  },
  {
    title: "Daily card",
    body: "One card per day for the fleeting stuff. File the keepers later.",
  },
  {
    title: "Clipper",
    body: "Send a paragraph from the web or a PDF straight into the box, source attached.",
  },
  {
    title: "Encrypted sync",
    body: "Cards travel between your devices. Only your devices can read them.",
  },
];

export default function SlipBoxPage() {
  return (
    <div className={`${courier.variable} ${literata.variable} ${styles.page}`}>
      <header className={styles.nav}>
        <a href="#" className={styles.wordmark}>
          Loam
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#method">Method</a>
          <a href="#features">Features</a>
          <a href="#">Pricing</a>
          <a href="#" className={styles.navButton}>
            Sign in
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Zettelkasten, on a screen</p>
            <h1 className={styles.h1}>
              A slip-box
              <br />
              that talks back.
            </h1>
            <p className={styles.lede}>
              Loam is a second brain built the way Niklas Luhmann built his:
              one idea per card, every card filed behind the one that made you
              think of it. Ask it a question and it hands you cards you forgot
              you wrote.
            </p>
            <div className={styles.ctas}>
              <a href="#" className={styles.primary}>
                Start your first card
              </a>
              <a href="#method" className={styles.secondary}>
                Read the method →
              </a>
            </div>
            <p className={styles.fine}>
              Free for your first 1,000 cards. Plain-text files, yours to keep.
            </p>
          </div>
          <div className={styles.heroFan}>
            <CardFan />
          </div>
        </section>

        <section id="method" className={styles.method}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Three cards explain the whole method.</h2>
            <p className={styles.sectionLede}>
              The numbers aren&apos;t decoration. They&apos;re the filing system:
              each card&apos;s ID tells you exactly where it sits in the
              conversation.
            </p>
          </div>
          <ol className={styles.methodRow}>
            {METHOD.map((m) => (
              <li key={m.id} className={styles.flat}>
                <header className={styles.flatHead}>
                  <span className={styles.flatId}>{m.id}</span>
                  <h3 className={styles.flatTitle}>{m.title}</h3>
                </header>
                <p className={styles.flatBody}>{m.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.talk}>
          <blockquote className={styles.quote}>
            <p>
              &ldquo;The slip-box needs a number of years in order to reach
              critical mass. Until then, it functions as a mere container from
              which we can retrieve what we put in.&rdquo;
            </p>
            <footer>Niklas Luhmann, <cite>Communicating with Slip Boxes</cite>, 1981</footer>
          </blockquote>
          <div className={styles.pulled}>
            <p className={styles.pulledLabel}>
              You were writing about deadlines. The box pulled this:
            </p>
            <article className={`${styles.flat} ${styles.pulledCard}`}>
              <span className={styles.stamp}>Pulled · 14 months ago</span>
              <header className={styles.flatHead}>
                <span className={styles.flatId}>21/3d</span>
                <h3 className={styles.flatTitle}>Attention residue</h3>
              </header>
              <p className={styles.flatBody}>
                Switching tasks leaves attention on the last one (Leroy, 2009).
                The fix isn&apos;t focus. It&apos;s fewer switches. Deadlines
                don&apos;t make you faster; they make you switch less.
              </p>
            </article>
            <p className={styles.pulledNote}>
              Loam reads what you&apos;re writing and surfaces the cards that
              argue with it, agree with it, or finish the thought. You never
              had to remember they existed.
            </p>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Everything a box needs. Nothing a box doesn&apos;t.</h2>
          </div>
          <ul className={styles.tabs}>
            {FEATURES.map((f) => (
              <li key={f.title} className={styles.tab}>
                <h3 className={styles.tabTitle}>{f.title}</h3>
                <p className={styles.tabBody}>{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaH}>
            Your first card is a sentence you already believe.
          </h2>
          <a href="#" className={styles.primary}>
            Start your first card
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Loam · © 2026</span>
        <span>Method · Privacy · Status</span>
      </footer>
    </div>
  );
}
