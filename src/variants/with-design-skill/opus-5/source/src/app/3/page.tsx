import type { Metadata } from "next";
import { archivo, barlow, chivoMono } from "../fonts";
import { PlanDrawing } from "./PlanDrawing";
import styles from "./direction.module.css";

export const metadata: Metadata = {
  title: "Tessera — a floor plan for everything you know",
  description:
    "A second brain laid out as rooms you can walk: the reading room, the workshop, the stacks. Navigate by place instead of searching folders.",
};

const schedule = [
  {
    ref: "C-1",
    item: "Capture points",
    qty: "4",
    notes: "Menu bar, phone share sheet, email-in, voice memo",
  },
  {
    ref: "L-1",
    item: "Link types",
    qty: "2",
    notes: "Written with [[brackets]], or suggested from overlapping phrasing",
  },
  {
    ref: "S-1",
    item: "Search",
    qty: "1",
    notes: "Offline, exact and by meaning, across 40,000 notes",
  },
  {
    ref: "R-1",
    item: "Resurfacing",
    qty: "3 / day",
    notes: "Older notes chosen by overlap with the draft you have open",
  },
  {
    ref: "E-1",
    item: "Exits",
    qty: "2",
    notes: "Markdown folder on disk, or a zip with every link intact",
  },
  {
    ref: "P-1",
    item: "Plans",
    qty: "2",
    notes: "Free to 500 notes, then $8 a month with no ceiling",
  },
];

export default function MemoryPalaceDirection() {
  return (
    <div
      className={`${styles.page} ${archivo.variable} ${barlow.variable} ${chivoMono.variable}`}
    >
      <div className={styles.sheet}>
        <header className={styles.head}>
          <span className={styles.wordmark}>Tessera</span>
          <nav className={styles.index} aria-label="Sheet index">
            <a href="#a2">A-2 Circulation</a>
            <a href="#a3">A-3 Section</a>
            <a href="#a4">A-4 Schedule</a>
          </nav>
          <a className={styles.headCta} href="#move">
            Create an account
          </a>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.sheetRef}>Sheet A-1 · plan</p>
              <h1 className={styles.h1}>
                A floor plan for
                <br />
                everything
                <br />
                you know
              </h1>
              <p className={styles.lede}>
                Human memory is spatial. Tessera lays your notes out in rooms
                you can walk — the reading room, the workshop, the stacks — so
                you find things the way you find a mug in your own kitchen:
                without searching.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#move">
                  Create an account
                </a>
                <a className={styles.ghost} href="#a2">
                  Walk the plan
                </a>
              </div>
              <ul className={styles.notes}>
                <li>Rooms are yours to name and re-plan</li>
                <li>Markdown files, on your own disk</li>
                <li>Works with no connection at all</li>
              </ul>
            </div>

            <PlanDrawing />
          </section>

          <section className={styles.sheetSection} id="a2">
            <div className={styles.sheetLabel}>
              <span className={styles.sheetRef}>A-2</span>
              <span className={styles.sheetName}>Circulation</span>
            </div>
            <div className={styles.sheetBody}>
              <h2 className={styles.h2}>How you get from one room to another</h2>
              <p className={styles.copy}>
                A link is a door, and Tessera cuts it in both walls. Write{" "}
                <span className={styles.code}>[[the stacks]]</span> in a note
                and the note on the other side lists the way back. When two
                notes keep using the same words, Tessera proposes a door and you
                decide whether to open it.
              </p>
              <p className={styles.copy}>
                The corridor on the plan is the traffic between rooms over the
                last month. Rooms with no doors are the ones you always lose
                things in, so Tessera flags them.
              </p>
            </div>
            <svg
              className={styles.mini}
              viewBox="0 0 300 150"
              role="img"
              aria-label="Two rooms connected by a door, with traffic shown between them"
            >
              <rect x="10" y="26" width="120" height="86" className={styles.miniRoom} />
              <rect x="180" y="26" width="110" height="86" className={styles.miniRoom} />
              <path className={styles.circulation} d="M130 70 L180 70" />
              <path className={styles.dimLine} d="M130 56 L130 84" />
              <path className={styles.dimLine} d="M180 56 L180 84" />
              <text x="155" y="48" textAnchor="middle" className={styles.miniLabel}>
                door
              </text>
              <text x="20" y="46" className={styles.miniName}>
                READING
              </text>
              <text x="190" y="46" className={styles.miniName}>
                WORKSHOP
              </text>
              <text x="10" y="136" className={styles.miniLabel}>
                312 notes passed through last month, both ways
              </text>
            </svg>
          </section>

          <section className={styles.sheetSection} id="a3">
            <div className={styles.sheetLabel}>
              <span className={styles.sheetRef}>A-3</span>
              <span className={styles.sheetName}>Section</span>
            </div>
            <div className={styles.sheetBody}>
              <h2 className={styles.h2}>What the building is made of</h2>
              <p className={styles.copy}>
                Cut the whole thing open and there is no cloud in the middle of
                it. Your notes are plain markdown files in a folder you chose,
                on a disk you own. Sync carries encrypted blocks between your
                own devices; the key never leaves them.
              </p>
              <p className={styles.copy}>
                If we disappear tomorrow, the folder still opens. That is the
                only foundation worth building a memory on.
              </p>
            </div>
            <svg
              className={styles.mini}
              viewBox="0 0 300 150"
              role="img"
              aria-label="Section through the storage layers: your disk, encrypted sync, your other devices"
            >
              <defs>
                <pattern
                  id="strata-hatch"
                  width="6"
                  height="6"
                  patternTransform="rotate(45)"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="0" y1="0" x2="0" y2="6" className={styles.hatch} />
                </pattern>
              </defs>
              <rect x="10" y="96" width="272" height="38" className={styles.strataSolid} />
              <rect x="10" y="54" width="272" height="38" className={styles.strataHatched} />
              <rect x="10" y="12" width="272" height="38" className={styles.strataSolid} />
              <text x="22" y="120" className={styles.miniName}>
                YOUR DISK — PLAIN MARKDOWN
              </text>
              <text x="22" y="78" className={styles.miniName}>
                ENCRYPTED BLOCKS — SYNC
              </text>
              <text x="22" y="36" className={styles.miniName}>
                YOUR OTHER DEVICES
              </text>
              <path className={styles.dimLine} d="M290 12 L290 134" />
              <path className={styles.dimLine} d="M286 12 L294 12" />
              <path className={styles.dimLine} d="M286 134 L294 134" />
              <text x="10" y="148" className={styles.miniLabel}>
                one key, held only by your own devices
              </text>
            </svg>
          </section>

          <section className={styles.sheetSection} id="a4">
            <div className={styles.sheetLabel}>
              <span className={styles.sheetRef}>A-4</span>
              <span className={styles.sheetName}>Schedule</span>
            </div>
            <div className={styles.sheetBody}>
              <h2 className={styles.h2}>Everything specified, in one table</h2>
              <p className={styles.copy}>
                No feature grid with ticks in it. This is the schedule: what is
                in the building, how many of them there are, and what each one
                actually does.
              </p>
            </div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Ref</th>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.ref}>
                      <td className={styles.cellRef}>{row.ref}</td>
                      <td className={styles.cellItem}>{row.item}</td>
                      <td className={styles.cellQty}>{row.qty}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.move} id="move">
            <h2 className={styles.h2Big}>Move in</h2>
            <p className={styles.copy}>
              Start with one room. Tessera will suggest the second one once it
              can see what you keep bringing home.
            </p>
            <form className={styles.form} action="#" aria-label="Create an account">
              <label className={styles.srOnly} htmlFor="d3-email">
                Email
              </label>
              <input
                className={styles.input}
                id="d3-email"
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

        {/* title block, the way a drawing signs itself */}
        <footer className={styles.titleBlock}>
          <div className={styles.tbCell}>
            <span>Project</span>
            <strong>A second brain</strong>
          </div>
          <div className={styles.tbCell}>
            <span>Client</span>
            <strong>You</strong>
          </div>
          <div className={styles.tbCell}>
            <span>Scale</span>
            <strong>1 note : 1 idea</strong>
          </div>
          <div className={styles.tbCell}>
            <span>Drawn by</span>
            <strong>Tessera, Rotterdam</strong>
          </div>
          <div className={styles.tbCell}>
            <span>Date</span>
            <strong>2026</strong>
          </div>
          <div className={`${styles.tbCell} ${styles.tbSheet}`}>
            <span>Sheet</span>
            <strong>A-1</strong>
          </div>
          <div className={styles.tbCell}>
            <span>Rev</span>
            <strong>04</strong>
          </div>
        </footer>
      </div>
    </div>
  );
}
