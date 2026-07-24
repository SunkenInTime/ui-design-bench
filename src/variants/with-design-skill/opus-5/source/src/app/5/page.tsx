import type { Metadata } from "next";
import { manrope, plexMono, unbounded } from "../fonts";
import { LiveGraph } from "./LiveGraph";
import styles from "./direction.module.css";

export const metadata: Metadata = {
  title: "Tessera — notes that show their wiring",
  description:
    "A second brain with a readout: watch what you capture attach itself to what you already know, and see what gets handed back when you need it.",
};

const metrics = [
  { value: "1.9s", label: "Median capture, thought to filed" },
  { value: "0", label: "Network calls made to search" },
  { value: "3", label: "Notes handed back each morning" },
  { value: "40k", label: "Notes indexed on your own machine" },
];

const modules = [
  {
    channel: "ch 1",
    title: "Capture",
    copy: "One shortcut, from anywhere, with no title and no folder. Voice memos transcribe on the device. Nothing waits for a connection.",
    readout: "412 this month · 96 from the phone",
    spark: "0,18 12,14 24,16 36,9 48,12 60,6 72,8 84,3",
  },
  {
    channel: "ch 2",
    title: "Link",
    copy: "Write two brackets to attach a note by hand, or let Tessera propose the attachment when two notes start reaching for the same words.",
    readout: "6,300 links · 71% written, 29% suggested",
    spark: "0,16 12,15 24,11 36,12 48,7 60,9 72,4 84,5",
  },
  {
    channel: "ch 3",
    title: "Recall",
    copy: "Ask in plain words. Answers are assembled from your own notes and cite them, so you can open the source and disagree with it.",
    readout: "Answers cite 3.4 notes on average",
    spark: "0,14 12,10 24,13 36,7 48,10 60,5 72,7 84,2",
  },
];

export default function SignalRoomDirection() {
  return (
    <div
      className={`${styles.page} ${unbounded.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <header className={styles.bar}>
        <span className={styles.wordmark}>Tessera</span>
        <span className={styles.status}>
          <i className={styles.live} aria-hidden />
          local index warm
        </span>
        <nav className={styles.barNav} aria-label="Sections">
          <a href="#panel">Console</a>
          <a href="#modules">Channels</a>
          <a href="#custody">Custody</a>
        </nav>
        <a className={styles.barCta} href="#turn-on">
          Start free
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Tessera — a second brain, instrumented</p>
            <h1 className={styles.h1}>Notes that show their wiring</h1>
          </div>
          <div className={styles.heroRight}>
            <p className={styles.lede}>
              Most note apps hide the only interesting part: what attached to
              what. Tessera puts a readout on it — what you captured, what it
              linked to, and what it dragged back up at the moment you needed
              it.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#turn-on">
                Start free
              </a>
              <a className={styles.ghost} href="#panel">
                Try the capture bar
              </a>
            </div>
          </div>
        </section>

        <div className={styles.panelWrap} id="panel">
          <LiveGraph />
        </div>

        <section className={styles.metrics}>
          {metrics.map((m) => (
            <div className={styles.metric} key={m.label}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </section>

        <section className={styles.modules} id="modules">
          <div className={styles.modulesHead}>
            <h2 className={styles.h2}>Three channels, one instrument</h2>
            <p className={styles.copy}>
              Each channel does one job and reports on it. Nothing here is a
              dashboard for its own sake — if a readout never changed a decision,
              it would not be on the panel.
            </p>
          </div>

          <div className={styles.moduleRow}>
            {modules.map((m) => (
              <article className={styles.module} key={m.title}>
                <p className={styles.moduleChannel}>{m.channel}</p>
                <h3 className={styles.moduleTitle}>{m.title}</h3>
                <svg
                  className={styles.spark}
                  viewBox="0 0 84 20"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <polyline className={styles.sparkLine} points={m.spark} />
                </svg>
                <p className={styles.moduleCopy}>{m.copy}</p>
                <p className={styles.moduleReadout}>{m.readout}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.custody} id="custody">
          <div className={styles.custodyText}>
            <p className={styles.eyebrow}>Custody</p>
            <h2 className={styles.h2}>
              The instrument is ours. The notes are not.
            </h2>
            <p className={styles.copy}>
              Every note is a markdown file in a folder you picked. Search runs
              on your machine, which is why it works on a plane. Sync moves
              encrypted blocks between your own devices and the key never leaves
              them.
            </p>
          </div>
          <dl className={styles.custodyList}>
            <div>
              <dt>Storage</dt>
              <dd>Markdown files, your disk, your backups</dd>
            </div>
            <div>
              <dt>Sync</dt>
              <dd>End-to-end encrypted, device to device</dd>
            </div>
            <div>
              <dt>Search</dt>
              <dd>Local index, no request leaves the machine</dd>
            </div>
            <div>
              <dt>Exit</dt>
              <dd>Zip export with every link intact</dd>
            </div>
          </dl>
        </section>

        <section className={styles.turnOn} id="turn-on">
          <h2 className={styles.h2Big}>Turn it on</h2>
          <p className={styles.copy}>
            Free to 500 notes. $8 a month after that, cancelled from inside the
            app in one click.
          </p>
          <form className={styles.form} action="#" aria-label="Create an account">
            <label className={styles.srOnly} htmlFor="d5-email">
              Email
            </label>
            <input
              className={styles.input}
              id="d5-email"
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
        <span className={styles.footerStatus}>
          <i className={styles.live} aria-hidden />
          index 40,112 notes · last sync 2 min ago · offline capable
        </span>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="#modules">Channels</a>
          <a href="#custody">Custody</a>
          <a href="#turn-on">Pricing</a>
        </nav>
      </footer>
    </div>
  );
}
