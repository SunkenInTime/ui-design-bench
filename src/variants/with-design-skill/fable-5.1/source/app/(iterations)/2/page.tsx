import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import styles from "./page.module.css";
import { TransitMap, LINES } from "./transit-map";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grot",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam — Every idea is a station",
};

const color = (key: string) => LINES.find((l) => l.key === key)!.color;

const STEPS = [
  {
    line: "R",
    title: "Capture anywhere",
    body: "Clip a paragraph, forward an email, or type a line on your phone. It lands as a stop on the right line, with the source attached.",
  },
  {
    line: "W",
    title: "Link as you write",
    body: "Type [[ and Loam suggests stops you've already made. Every link runs both ways, so the older note learns about the newer one.",
  },
  {
    line: "P",
    title: "Resurface at the transfer",
    body: "When two lines cross, Loam shows you: the book you read last spring is relevant to the project you're shipping now.",
  },
];

const SERVICE = [
  { line: "R", name: "Plain-text files", body: "Every note is a Markdown file in a folder you own." },
  { line: "W", name: "Backlinks", body: "A note knows who cites it. Nothing is a dead end." },
  { line: "P", name: "Semantic search", body: "Find it by meaning when you've forgotten the words." },
  { line: "O", name: "Daily note", body: "One open page a day for the fleeting stuff." },
  { line: "R", name: "Encrypted sync", body: "Same map on every device. Only your devices can read it." },
  { line: "W", name: "Mac, iPhone, web", body: "Full service on all platforms. No express-only stops." },
];

export default function TransitPage() {
  return (
    <div className={`${grotesk.variable} ${styles.page}`}>
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#" className={styles.wordmark}>
            <span className={styles.logoBadge}>L</span>
            Loam
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#service">Features</a>
            <a href="#">Pricing</a>
            <a href="#" className={styles.navCta}>
              Sign in
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.h1}>
              Every idea
              <br />
              is a station.
            </h1>
            <p className={styles.lede}>
              Loam is a second brain that maps your notes like a transit
              system. Each note is a stop, each subject is a line, and the
              places where lines cross are where your best thinking happens.
            </p>
            <div className={styles.ctas}>
              <a href="#" className={styles.primary}>
                Start mapping — it&apos;s free
              </a>
              <a href="#transfers" className={styles.secondary}>
                How transfers work ↓
              </a>
            </div>
          </div>
          <div className={styles.heroMap}>
            <TransitMap />
          </div>
        </section>

        <section id="how" className={styles.how}>
          <h2 className={styles.sign}>
            <span className={styles.signBadge} style={{ background: color("R") }}>
              R
            </span>
            <span className={styles.signBadge} style={{ background: color("W") }}>
              W
            </span>
            <span className={styles.signBadge} style={{ background: color("P") }}>
              P
            </span>
            Three stops to a working system
          </h2>
          <ol className={styles.steps}>
            {STEPS.map((s) => (
              <li key={s.title} className={styles.step}>
                <span
                  className={styles.stepBadge}
                  style={{ background: color(s.line) }}
                  aria-hidden="true"
                >
                  {s.line}
                </span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="transfers" className={styles.transfers}>
          <div className={styles.transferCopy}>
            <h2 className={styles.h2}>
              The good ideas happen at transfers.
            </h2>
            <p className={styles.body}>
              Folders keep your reading and your work in separate buildings.
              Loam puts them on one map, so a note you took from a book and a
              note you took in a meeting can share a stop.
            </p>
            <p className={styles.body}>
              Below: a real transfer. One line of reading, one line of
              projects, one interchange where they turned out to be the same
              idea.
            </p>
          </div>
          <div className={styles.transferDiagram} aria-hidden="true">
            <svg viewBox="0 0 520 300" className={styles.transferSvg}>
              <path
                d="M 20 80 L 260 80 L 500 80"
                stroke={color("R")}
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 260 290 L 260 80 L 260 10"
                stroke={color("P")}
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="260" cy="80" r="16" fill="#fff" stroke="#101010" strokeWidth="5" />
            </svg>
            <div className={`${styles.note} ${styles.noteA}`}>
              <span className={styles.noteLine} style={{ background: color("R") }}>
                Reading
              </span>
              <strong>Parkinson&apos;s law</strong>
              <p>Work expands to fill the time available. The deadline is the scope.</p>
            </div>
            <div className={`${styles.note} ${styles.noteB}`}>
              <span className={styles.noteLine} style={{ background: color("P") }}>
                Projects
              </span>
              <strong>Q4 roadmap</strong>
              <p>Six weeks scoped. Ship the small version first, then decide.</p>
            </div>
            <div className={styles.transferLabel}>Transfer: Parkinson&apos;s law</div>
          </div>
        </section>

        <section id="service" className={styles.service}>
          <h2 className={styles.sign}>Service information</h2>
          <ul className={styles.serviceList}>
            {SERVICE.map((s) => (
              <li key={s.name} className={styles.serviceRow}>
                <span
                  className={styles.dot}
                  style={{ background: color(s.line) }}
                  aria-hidden="true"
                />
                <strong className={styles.serviceName}>{s.name}</strong>
                <span className={styles.serviceBody}>{s.body}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH}>
              Your notes already connect. Start drawing the map.
            </h2>
            <a href="#" className={styles.primaryDark}>
              Start mapping — it&apos;s free
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>Loam</span>
          <span>Ideas run 24 hours a day · Map not to scale</span>
          <span>Privacy · Status · © 2026</span>
        </div>
      </footer>
    </div>
  );
}
