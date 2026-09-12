import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import styles from "./page.module.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam — Plain text. Your disk. Forever.",
};

const HEADLINE = ["PLAIN TEXT.", "YOUR DISK.", "FOREVER."];

const FILES = [
  ["-rw-r--r--", "2.1K", "Aug 30 22:14", "attention-residue.md"],
  ["-rw-r--r--", "4.7K", "Aug 29 09:02", "deep-work-ch2.md"],
  ["-rw-r--r--", "812B", "Aug 28 17:40", "2026-08-28.md"],
  ["-rw-r--r--", "3.3K", "Aug 27 08:11", "parkinsons-law.md"],
  ["-rw-r--r--", "1.9K", "Aug 25 21:37", "zettelkasten.md"],
  ["-rw-r--r--", "6.0K", "Aug 24 07:58", "q4-roadmap.md"],
];

const REPORT: [string, string, string, boolean?][] = [
  ["Backlinks", "[[wikilinks]] indexed on save", "The note knows who cites it."],
  ["Daily note", "YYYY-MM-DD.md, created when you open the day", "Fleeting thoughts have an address."],
  ["Resurfacing", "Related notes shown beside what you're typing", "You reread what you would have forgotten."],
  ["Search", "Full-text plus semantic, indexed on your machine", "Find it by meaning when the words are gone."],
  ["Sync", "End-to-end encrypted, optional", "The same folder on every device."],
  ["Export", "None", "There is nothing to export. It's already files.", true],
];

const CHANGELOG = [
  ["2026.08", "Semantic search runs on-device. No note leaves your disk to be indexed."],
  ["2026.06", "iPhone app. Same folder, smaller screen."],
  ["2026.03", "Git-friendly formatting: one sentence per line, stable front matter order."],
  ["2025.11", "First release. A folder of Markdown and an app that reads it."],
];

function SheetHeader({ n, of, title }: { n: number; of: number; title: string }) {
  return (
    <div className={styles.sheetHead} aria-hidden="true">
      <span>LOAM</span>
      <span>{title}</span>
      <span>
        SHEET {String(n).padStart(2, "0")} / {String(of).padStart(2, "0")}
      </span>
    </div>
  );
}

function Tear() {
  return (
    <div className={styles.tear} aria-hidden="true">
      <span>fold</span>
    </div>
  );
}

export default function PrintoutPage() {
  return (
    <div className={`${mono.variable} ${sans.variable} ${styles.page}`}>
      <div className={styles.paper}>
        <div className={`${styles.feed} ${styles.feedLeft}`} aria-hidden="true" />
        <div className={`${styles.feed} ${styles.feedRight}`} aria-hidden="true" />

        <div className={styles.sheet}>
          <header className={styles.banner}>
            <div className={styles.jobLine} aria-hidden="true">
              <span>LOAM PRINT SPOOLER</span>
              <span>JOB 0001</span>
              <span>USER: YOU</span>
              <span>2026-09-01 14:58:02</span>
            </div>
            <nav className={styles.nav} aria-label="Primary">
              <a href="#" className={styles.wordmark}>
                LOAM
              </a>
              <div className={styles.navLinks}>
                <a href="#report">FEATURES</a>
                <a href="#format">FORMAT</a>
                <a href="#">PRICING</a>
                <a href="#" className={styles.navBtn}>
                  [ SIGN IN ]
                </a>
              </div>
            </nav>
          </header>

          <main>
            <section className={styles.hero}>
              <h1 className={styles.h1}>
                {HEADLINE.map((line, i) => (
                  <span
                    key={line}
                    className={styles.typed}
                    style={
                      {
                        "--n": line.length,
                        "--extra": i === HEADLINE.length - 1 ? "0.75em" : "4px",
                        animationDelay: `${0.3 + i * 0.85}s`,
                        animationTimingFunction: `steps(${line.length}, end)`,
                      } as React.CSSProperties
                    }
                  >
                    {line}
                    {i === HEADLINE.length - 1 && (
                      <span className={styles.cursor} aria-hidden="true" />
                    )}
                  </span>
                ))}
              </h1>
              <div className={styles.heroSide}>
                <p className={styles.lede}>
                  Loam is a second brain that stores every note as a Markdown
                  file in a folder you control. Open them in any editor. Grep
                  them. Back them up. Outlive us. The app is the nice part; the
                  files are the point.
                </p>
                <div className={styles.ctas}>
                  <a href="#" className={styles.primary}>
                    [ DOWNLOAD FOR MAC ]
                  </a>
                  <a href="#format" className={styles.secondary}>
                    [ READ THE FORMAT ]
                  </a>
                </div>
                <p className={styles.fine}>
                  Free for the first 1,000 files. macOS 14+, iOS 17+, or any
                  browser.
                </p>
              </div>
            </section>

            <section id="format" className={styles.listing}>
              <p className={styles.prompt}>
                <span className={styles.dollar}>$</span> ls -la ~/Notes | head
              </p>
              <table className={styles.files}>
                <caption className={styles.srOnly}>
                  A directory listing of a Loam notes folder
                </caption>
                <tbody>
                  {FILES.map((f) => (
                    <tr key={f[3]}>
                      <td className={styles.perm}>{f[0]}</td>
                      <td>you</td>
                      <td className={styles.size}>{f[1]}</td>
                      <td>{f[2]}</td>
                      <td className={styles.fname}>{f[3]}</td>
                    </tr>
                  ))}
                  <tr className={styles.total}>
                    <td colSpan={5}>
                      1,204 files · 6.2 MB · every one of them readable without
                      us
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.listingNote}>
                That&apos;s the whole format. A folder, some Markdown, a little
                front matter for dates and links. If Loam disappeared tomorrow
                you would lose an app, not a decade of thinking.
              </p>
            </section>
          </main>
        </div>

        <Tear />

        <div className={styles.sheet}>
          <SheetHeader n={2} of={3} title="REPORT: WHAT LOAM DOES" />
          <section id="report" className={styles.report}>
            <table className={styles.reportTable}>
              <thead>
                <tr>
                  <th>FEATURE</th>
                  <th>HOW IT WORKS</th>
                  <th>WHY IT MATTERS</th>
                </tr>
              </thead>
              <tbody>
                {REPORT.map(([f, how, why, red]) => (
                  <tr key={f} className={red ? styles.ribbon : undefined}>
                    <td className={styles.feature}>{f}</td>
                    <td className={styles.how}>{how}</td>
                    <td className={styles.why}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className={styles.overstrike}>
              NO EXPORT BUTTON. NOTHING TO EXPORT.
            </p>
            <p className={styles.overstrikeNote}>
              Every other notes app asks you to trust the company. Loam asks
              you to trust a folder. One of those has a good track record.
            </p>
          </section>
        </div>

        <Tear />

        <div className={styles.sheet}>
          <SheetHeader n={3} of={3} title="CHANGELOG · END OF JOB" />
          <section className={styles.changelog}>
            <h2 className={styles.h2}>CHANGELOG (EXCERPT)</h2>
            <dl className={styles.log}>
              {CHANGELOG.map(([d, t]) => (
                <div key={d} className={styles.logRow}>
                  <dt>{d}</dt>
                  <dd>{t}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.end}>
            <p className={styles.endLine} aria-hidden="true">
              *** END OF JOB · 0 ERRORS · 0 WARNINGS ***
            </p>
            <h2 className={styles.endH}>
              Start a folder. Keep it for the rest of your life.
            </h2>
            <a href="#" className={styles.primary}>
              [ DOWNLOAD FOR MAC ]
            </a>
          </section>

          <footer className={styles.footer}>
            <span>LOAM · 2026</span>
            <span>FORMAT · PRIVACY · STATUS</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
