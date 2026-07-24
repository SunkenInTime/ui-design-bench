import type { Metadata } from "next";
import { spaceMono, syne, workSans } from "../fonts";
import { LoopDiagram } from "./LoopDiagram";
import styles from "./direction.module.css";

export const metadata: Metadata = {
  title: "Tessera — a brain is a loop, not a tree",
  description:
    "A second brain built as a control loop: capture, connect, resurface, act. Notes come back to you at the moment they change what you're writing.",
};

const channels = [
  { name: "Menu bar", count: 412, width: "100%" },
  { name: "Phone, share sheet", count: 96, width: "23%" },
  { name: "Email forwarded in", count: 40, width: "10%" },
  { name: "Voice memo", count: 22, width: "5%" },
];

export default function LoopDirection() {
  return (
    <div
      className={`${styles.page} ${syne.variable} ${spaceMono.variable} ${workSans.variable}`}
    >
      <header className={styles.masthead}>
        <span className={styles.imprint}>Tessera</span>
        <span className={styles.edition}>Systems manual · ed. 4</span>
        <nav className={styles.mastNav} aria-label="Sections">
          <a href="#variety">Variety</a>
          <a href="#input">Input</a>
          <a href="#governor">Governor</a>
          <a href="#service">Service</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.figRef}>Fig. 1 · the whole product</p>
            <h1 className={styles.h1} data-echo="A brain is a loop, not a tree.">
              A brain is a loop, not a tree.
            </h1>
            <p className={styles.lede}>
              Tessera runs your notes as a control system. Anything you capture
              gets connected, and anything connected comes back to you at the
              moment it would change what you&rsquo;re writing. Four stages, and
              only one of them is your job.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#close">
                Start free
              </a>
              <a className={styles.underlined} href="#variety">
                Read the manual
              </a>
            </div>
            <dl className={styles.specs}>
              <div>
                <dt>Stock</dt>
                <dd>Plain markdown, your disk</dd>
              </div>
              <div>
                <dt>Power</dt>
                <dd>Runs with no connection</dd>
              </div>
              <div>
                <dt>Service</dt>
                <dd>Field-serviceable, exports whole</dd>
              </div>
            </dl>
          </div>

          <LoopDiagram />
        </section>

        <section className={styles.spread} id="variety">
          <p className={styles.figRef}>Fig. 2 · variety</p>
          <h2 className={styles.h2}>Only variety absorbs variety</h2>
          <div className={styles.spreadCols}>
            <p className={styles.copy}>
              A folder tree gives you one axis and asks you to choose a branch
              on the day you understand the note least. Links give you as many
              axes as the thought has, which is the whole reason a thought is
              worth keeping.
            </p>
            <p className={styles.copy}>
              Cybernetics states this flatly: a controller needs at least as
              much variety as the system it controls. Your filing system has
              been losing that argument for years, quietly, in the folder called
              &ldquo;misc&rdquo;.
            </p>
            <aside className={styles.margin}>
              <span className={styles.marginRule} aria-hidden />
              Ashby&rsquo;s law, 1956. It was about thermostats. It is also
              about your notes.
            </aside>
          </div>
        </section>

        <section className={styles.chartSection} id="input">
          <div className={styles.chartText}>
            <p className={styles.figRef}>Fig. 3 · input</p>
            <h2 className={styles.h2}>Four ways in, one place out</h2>
            <p className={styles.copy}>
              Capture has to be cheaper than the thought is worth, or the
              thought does not get written down. Every channel lands in the same
              undifferentiated inbox, and none of them asks you to name a
              folder.
            </p>
            <p className={styles.copyFine}>
              Measured across 4,200 accounts, notes captured per user per month.
            </p>
          </div>

          <div className={styles.chart}>
            {channels.map((c) => (
              <div className={styles.bar} key={c.name}>
                <span className={styles.barLabel}>{c.name}</span>
                <span className={styles.barTrack}>
                  <span className={styles.barFill} style={{ width: c.width }} />
                </span>
                <span className={styles.barCount}>{c.count}</span>
              </div>
            ))}
            <p className={styles.chartCaption}>
              Fig. 3 — the menu bar wins because it is already open.
            </p>
          </div>
        </section>

        <section className={styles.spread} id="governor">
          <p className={styles.figRef}>Fig. 4 · governor</p>
          <h2 className={styles.h2}>The output is fed back as input</h2>
          <div className={styles.spreadCols}>
            <p className={styles.copy}>
              Every morning Tessera reads what you are working on and returns
              three older notes that overlap it. Not the most recent notes: the
              ones that argue with the paragraph in front of you.
            </p>
            <p className={styles.copy}>
              That is the governor on the loop. Without it a note archive drifts
              toward being a very tidy landfill — everything kept, nothing
              returned, no correction applied.
            </p>
            <aside className={styles.margin}>
              <span className={styles.marginRule} aria-hidden />
              Accept, dismiss, or link. Dismissing is information too, and the
              loop uses it.
            </aside>
          </div>
        </section>

        <section className={styles.service} id="service">
          <div className={styles.serviceInner}>
            <p className={styles.figRefLight}>Fig. 5 · service</p>
            <h2 className={styles.h2Light}>Field-serviceable</h2>
            <div className={styles.serviceCols}>
              <p>
                Notes are markdown files in a folder you chose. Open them with
                anything. Back them up with anything. Sync moves encrypted
                blocks between your own machines and we never hold the key.
              </p>
              <p>
                No part of this requires us to still be here. Export produces
                the same files with the links rewritten as plain references —
                the parts list, not a proprietary lump.
              </p>
            </div>
            <ul className={styles.parts}>
              <li>Markdown, front matter, one file per note</li>
              <li>End-to-end encrypted sync</li>
              <li>Zip export, links intact</li>
              <li>Never used to train anything</li>
            </ul>
          </div>
        </section>

        <section className={styles.close} id="close">
          <h2 className={styles.h2Close}>Close the loop</h2>
          <p className={styles.closeCopy}>
            Free to 500 notes. $8 a month after that, no ceiling, cancel from
            inside the app.
          </p>
          <form className={styles.form} action="#" aria-label="Create an account">
            <label className={styles.srOnly} htmlFor="d4-email">
              Email
            </label>
            <input
              className={styles.input}
              id="d4-email"
              type="email"
              placeholder="you@somewhere.org"
              autoComplete="email"
            />
            <button className={styles.closeButton} type="submit">
              Create an account
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.colophon}>
        <p>
          Tessera systems manual, edition four. Printed in two passes,
          fluorescent pink over reflex blue.
        </p>
        <nav className={styles.colophonNav} aria-label="Footer">
          <a href="#variety">Variety</a>
          <a href="#input">Input</a>
          <a href="#governor">Governor</a>
          <a href="#service">Service</a>
        </nav>
        <p className={styles.colophonSet}>
          Set in Syne and Space Mono · Rotterdam · 2026
        </p>
      </footer>
    </div>
  );
}
