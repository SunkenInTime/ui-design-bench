import styles from "./page.module.css";
import { RouteMap } from "./route-map";

/* ------------------------------------------------------------------ *
 * Signage furniture, drawn by hand.
 * ------------------------------------------------------------------ */

function CairnRoundel({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="16"
        cy="16"
        r="14.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
      />
      <rect x="8.6" y="19.8" width="14.8" height="4.2" rx="2.1" fill="currentColor" />
      <rect x="10.8" y="14.1" width="10.4" height="4.2" rx="2.1" fill="currentColor" />
      <rect x="13" y="8.4" width="6" height="4.2" rx="2.1" fill="currentColor" />
    </svg>
  );
}

/** Solid signage arrow: a shaft and a triangular head. */
function BlockArrow({
  className,
  down = false,
}: {
  className?: string;
  down?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={down ? { transform: "rotate(90deg)" } : undefined}
    >
      <path
        d="M1.5 9.4h11.1V3.6L22.5 12l-9.9 8.4v-5.8H1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

const KEY_ROWS = [
  {
    id: "A",
    swatch: "swatchA",
    line: "Line A",
    means: "Backlinks",
    detail: "Two notes that link to each other. You made this connection on purpose.",
  },
  {
    id: "B",
    swatch: "swatchB",
    line: "Line B",
    means: "Shared tags",
    detail: "Notes filed under the same tag, often written years apart.",
  },
  {
    id: "C",
    swatch: "swatchC",
    line: "Line C",
    means: "Daily notes",
    detail: "Notes you reached from a daily note. The line your day actually took.",
  },
  {
    id: "R",
    swatch: "swatchR",
    line: "Resurface",
    means: "Not opened in a year",
    detail: "A connection Cairn found for you, running to a note you had let go.",
  },
];

const SYMBOL_ROWS = [
  { symbol: "tick", name: "Station", detail: "One line calls here." },
  {
    symbol: "interchange",
    name: "Interchange",
    detail: "Several lines call here. Change for any of them.",
  },
  { symbol: "terminus", name: "Terminus", detail: "The line starts or ends here." },
];

const SERVICE_PANELS = [
  {
    code: "STEP-FREE ACCESS",
    accent: "none",
    heading: "Your notes are files in a folder you chose",
    body: "Every note is plain markdown sitting on your own disk. Open one in any editor. Copy the folder to a drive. If you stop using Cairn tomorrow, you still have every word.",
  },
  {
    code: "CHANGE HERE FOR",
    accent: "backlink",
    heading: "Type [[ to link one note to another",
    body: "Pick the note you mean and the link is made. The backlink appears on the other note at the same moment. You never have to file the return journey yourself.",
  },
  {
    code: "FIRST SERVICE",
    accent: "daily",
    heading: "A daily note opens when you launch Cairn",
    body: "Dated, blank, already in front of you. Yesterday's is one key away, and so is the one from four years ago today.",
  },
  {
    code: "SEARCH — ALL LINES",
    accent: "none",
    heading: "Search reads inside scanned PDFs and images",
    body: "A photographed notebook page, a scanned paper, a screenshot of a table: Cairn reads the text in them, so they answer to search like everything else.",
  },
  {
    code: "LOST PROPERTY",
    accent: "none",
    heading: "Every note keeps its own version history",
    body: "Open any earlier state of a note and take back the paragraph you cut last March. Nothing you wrote is discarded on your behalf.",
  },
  {
    code: "SERVICE ON ALL ROUTES",
    accent: "none",
    heading: "The same vault opens on desktop and phone",
    body: "One vault, two screens, no second copy to keep straight. It works with no connection; syncing is what the fare is for.",
  },
];

const BOARD_ROWS = [
  {
    time: "09:12",
    note: "Estuary sediment cores",
    via: "A",
    viaLabel: "Line A",
    last: "14 months",
    status: "Opened",
  },
  {
    time: "09:47",
    note: "Mnemonics from the Ad Herennium",
    via: "B",
    viaLabel: "Line B",
    last: "2 years",
    status: "Kept",
  },
  {
    time: "11:03",
    note: "Kiln temperature curves",
    via: "B",
    viaLabel: "Line B",
    last: "17 months",
    status: "Dismissed",
  },
  {
    time: "13:26",
    note: "Field recording — dawn chorus",
    via: "A",
    viaLabel: "Line A",
    last: "3 years",
    status: "Opened",
  },
  {
    time: "15:40",
    note: "Letterpress lockup diagram",
    via: "A",
    viaLabel: "Line A",
    last: "22 months",
    status: "Kept",
  },
  {
    time: "16:15",
    note: "Why the 1854 cholera map worked",
    via: "B",
    viaLabel: "Line B",
    last: "13 months",
    status: "Opened",
  },
];

const FARE_ROWS: { label: string; single: string; sync: string }[] = [
  { label: "Vaults", single: "One", sync: "As many as you keep" },
  { label: "Devices", single: "One machine", sync: "Desktop and phone" },
  { label: "Markdown files on your disk", single: "Yes", sync: "Yes" },
  { label: "Works with no connection", single: "Yes", sync: "Yes" },
  { label: "[[ links and backlinks", single: "Yes", sync: "Yes" },
  { label: "Resurface", single: "Yes", sync: "Yes" },
  { label: "Search inside PDFs and images", single: "Yes", sync: "Yes" },
  { label: "Version history", single: "On this machine", sync: "On every device" },
  { label: "Account needed", single: "No", sync: "Yes, for sync only" },
];

/* ------------------------------------------------------------------ */

export default function WayfindingPage() {
  return (
    <div className={styles.page}>
      {/* ============================ header ======================== */}
      <header className={styles.topSign}>
        <a className={styles.brand} href="#map">
          <CairnRoundel className={styles.brandMark} />
          <span className={styles.brandName}>Cairn</span>
        </a>
        <nav className={styles.directory} aria-label="Sections">
          <a href="#map">
            <BlockArrow className={styles.navArrow} />
            Network map
          </a>
          <a href="#service">
            <BlockArrow className={styles.navArrow} />
            Service information
          </a>
          <a href="#resurface">
            <BlockArrow className={styles.navArrow} />
            Resurface
          </a>
          <a href="#fares">
            <BlockArrow className={styles.navArrow} />
            Fares
          </a>
        </nav>
      </header>

      <main>
        {/* ============================ hero ======================== */}
        <section className={styles.hero}>
          <div className={styles.heroSign}>
            <p className={styles.heroCode}>CAIRN · NOTE NETWORK · ALL SERVICES RUNNING</p>
            <h1 className={styles.heroTitle}>
              Your notes are a network.
              <br />
              This is the map.
            </h1>
            <p className={styles.heroBody}>
              Cairn keeps every note as a plain markdown file on your own disk.
              Type two square brackets to join one note to another, and the
              backlink appears on both. Ten years in, the links are what you
              have; the map is how you read them.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="#fares">
                Download Cairn
                <BlockArrow className={styles.buttonArrow} />
              </a>
              <a className={styles.buttonGhost} href="#key">
                Read the network key
                <BlockArrow className={styles.buttonArrow} />
              </a>
            </div>
          </div>

          <ul className={styles.factStrip}>
            <li>
              <span className={styles.factCode}>FARE</span>
              Free for one vault
            </li>
            <li>
              <span className={styles.factCode}>SYNC</span>
              $8 a month
            </li>
            <li>
              <span className={styles.factCode}>OFFLINE</span>
              Full service, no connection
            </li>
            <li>
              <span className={styles.factCode}>FORMAT</span>
              Markdown, on your disk
            </li>
          </ul>
        </section>

        {/* ========================= route map ====================== */}
        <section className={styles.section} id="map">
          <div className={styles.sectionHead}>
            <p className={styles.sectionCode}>NETWORK MAP</p>
            <h2 className={styles.sectionTitle}>
              One vault, eleven notes, four services
            </h2>
            <p className={styles.sectionLede}>
              Drawn from a real vault of about nine thousand notes: the eleven
              that today&rsquo;s writing touches. Point at a station to see which
              lines call there.
            </p>
          </div>

          <figure className={styles.mapFigure}>
            <RouteMap />
            <figcaption className={styles.mapCaption}>
              A blue service runs the length of Line C, pausing at each station,
              the way your day moves out from the daily note.
            </figcaption>
          </figure>
        </section>

        {/* =========================== key ========================== */}
        <section className={styles.section} id="key">
          <div className={styles.sectionHead}>
            <p className={styles.sectionCode}>KEY TO THE MAP</p>
            <h2 className={styles.sectionTitle}>What each colour means</h2>
            <p className={styles.sectionLede}>
              Three colours, three kinds of connection. They mean the same thing
              everywhere on this page and everywhere in the app.
            </p>
          </div>

          <div className={styles.keyGrid}>
            <div className={styles.keyPanel}>
              <h3 className={styles.keyPanelTitle}>Lines</h3>
              <dl className={styles.keyList}>
                {KEY_ROWS.map((row) => (
                  <div className={styles.keyRow} key={row.id}>
                    <dt className={styles.keyTerm}>
                      <span
                        className={`${styles.keySwatch} ${styles[row.swatch]}`}
                        aria-hidden="true"
                      />
                      <span className={styles.keyLine}>{row.line}</span>
                      <span className={styles.keyMeans}>{row.means}</span>
                    </dt>
                    <dd className={styles.keyDetail}>{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.keyPanel}>
              <h3 className={styles.keyPanelTitle}>Marks</h3>
              <dl className={styles.keyList}>
                {SYMBOL_ROWS.map((row) => (
                  <div className={styles.keyRow} key={row.symbol}>
                    <dt className={styles.keyTerm}>
                      <svg
                        className={styles.keySymbol}
                        viewBox="0 0 44 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <line
                          x1="0"
                          y1="12"
                          x2="44"
                          y2="12"
                          stroke="rgb(16 49 43 / 0.28)"
                          strokeWidth="5"
                        />
                        {row.symbol === "tick" ? (
                          <line
                            x1="22"
                            y1="4"
                            x2="22"
                            y2="20"
                            stroke="#10312B"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        ) : null}
                        {row.symbol === "interchange" ? (
                          <circle
                            cx="22"
                            cy="12"
                            r="7"
                            fill="#F0F1EC"
                            stroke="#10312B"
                            strokeWidth="4"
                          />
                        ) : null}
                        {row.symbol === "terminus" ? (
                          <>
                            <circle
                              cx="22"
                              cy="12"
                              r="8"
                              fill="#F0F1EC"
                              stroke="#10312B"
                              strokeWidth="3"
                            />
                            <circle cx="22" cy="12" r="4.5" fill="#10312B" />
                          </>
                        ) : null}
                      </svg>
                      <span className={styles.keyLine}>{row.name}</span>
                    </dt>
                    <dd className={styles.keyDetail}>{row.detail}</dd>
                  </div>
                ))}
              </dl>

              <p className={styles.keyFootnote}>
                A dashed route is the only one you did not draw. That is
                Resurface.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== service information ================= */}
        <section className={styles.section} id="service">
          <div className={styles.sectionHead}>
            <p className={styles.sectionCode}>SERVICE INFORMATION</p>
            <h2 className={styles.sectionTitle}>
              What runs, and what it costs you to leave
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            {SERVICE_PANELS.map((panel) => (
              <article className={styles.servicePanel} key={panel.code}>
                <p className={styles.servicePanelCode}>
                  <span
                    className={`${styles.serviceBar} ${
                      panel.accent === "backlink"
                        ? styles.barBacklink
                        : panel.accent === "daily"
                          ? styles.barDaily
                          : styles.barPlain
                    }`}
                    aria-hidden="true"
                  />
                  {panel.code}
                </p>
                <h3 className={styles.servicePanelTitle}>{panel.heading}</h3>
                <p className={styles.servicePanelBody}>{panel.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ========================= resurface ====================== */}
        <section className={styles.section} id="resurface">
          <div className={styles.resurfacePanel}>
            <div className={styles.resurfaceCopy}>
              <p className={styles.resurfaceCode}>SPECIAL SERVICE · RUNS DAILY</p>
              <h2 className={styles.resurfaceTitle}>Resurface</h2>
              <p className={styles.resurfaceBody}>
                While you write, Cairn looks through the notes you have not
                opened in a year and finds the ones that connect to what is on
                the screen. They appear at the edge of the page, named, with the
                connection shown. You decide whether to follow.
              </p>
              <p className={styles.resurfaceBody}>
                It is the dashed line on the map: a service still running to a
                station you stopped getting off at.
              </p>
              <ul className={styles.resurfaceFacts}>
                <li>
                  <span className={styles.resurfaceFactCode}>SOURCE</span>
                  Your own vault. Nothing leaves your disk.
                </li>
                <li>
                  <span className={styles.resurfaceFactCode}>THRESHOLD</span>
                  Untouched for twelve months or longer.
                </li>
                <li>
                  <span className={styles.resurfaceFactCode}>CONTROL</span>
                  Dismiss a note and it stops being offered.
                </li>
              </ul>
            </div>

            <div className={styles.boardWrap}>
              <div className={styles.boardHead}>
                <span className={styles.boardHeadCode}>
                  <span className={styles.boardLamp} aria-hidden="true" />
                  RESURFACED TODAY
                </span>
                <span className={styles.boardHeadCount}>6 notes</span>
              </div>

              <div className={styles.boardScroll}>
                <table className={styles.board}>
                  <caption className={styles.visuallyHidden}>
                    Notes Resurface offered today, with the time, the connection
                    it used, how long since the note was last opened, and what
                    you did with it.
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Note</th>
                      <th scope="col">Via</th>
                      <th scope="col">Last opened</th>
                      <th scope="col">You</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BOARD_ROWS.map((row) => (
                      <tr key={row.time}>
                        <td className={styles.boardTime}>{row.time}</td>
                        <th scope="row" className={styles.boardNote}>
                          {row.note}
                        </th>
                        <td>
                          <span
                            className={`${styles.boardVia} ${
                              row.via === "A" ? styles.viaA : styles.viaB
                            }`}
                          >
                            {row.viaLabel}
                          </span>
                        </td>
                        <td className={styles.boardLast}>{row.last}</td>
                        <td className={styles.boardStatus}>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={styles.boardFoot}>
                Kept means you linked it into today&rsquo;s note. Dismissed means
                you will not be shown it again.
              </p>
            </div>
          </div>
        </section>

        {/* =========================== fares ======================== */}
        <section className={styles.section} id="fares">
          <div className={styles.sectionHead}>
            <p className={styles.sectionCode}>FARES</p>
            <h2 className={styles.sectionTitle}>Two fares. No zones.</h2>
            <p className={styles.sectionLede}>
              You pay for one thing only: the same vault arriving on your other
              device. Everything that makes a note a note is in the free fare.
            </p>
          </div>

          <div className={styles.fareScroll}>
            <table className={styles.fareTable}>
              <caption className={styles.visuallyHidden}>
                What is included in each of the two fares.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.fareCorner}>
                    <span className={styles.fareCornerCode}>INCLUDED</span>
                  </th>
                  <th scope="col" className={styles.fareHeadCell}>
                    <span className={styles.fareName}>Single vault</span>
                    <span className={styles.farePrice}>Free</span>
                    <span className={styles.fareTerm}>no account, no expiry</span>
                  </th>
                  <th scope="col" className={`${styles.fareHeadCell} ${styles.fareHeadCellLead}`}>
                    <span className={styles.fareName}>Sync</span>
                    <span className={styles.farePrice}>$8</span>
                    <span className={styles.fareTerm}>per month</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {FARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className={styles.fareRowLabel}>
                      {row.label}
                    </th>
                    <td>{row.single}</td>
                    <td className={styles.fareLeadCell}>{row.sync}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" className={styles.visuallyHidden}>
                    Get Cairn
                  </th>
                  <td>
                    <a className={styles.buttonGhost} href="#map">
                      Download Cairn
                      <BlockArrow className={styles.buttonArrow} />
                    </a>
                  </td>
                  <td className={styles.fareLeadCell}>
                    <a className={styles.buttonPrimary} href="#map">
                      Add sync — $8 a month
                      <BlockArrow className={styles.buttonArrow} />
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className={styles.fareNote}>
            Stop paying and sync stops. The notes stay where they always were: in
            a folder on your disk, as markdown, readable by anything.
          </p>
        </section>
      </main>

      {/* =========================== footer ========================= */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href="#map">
            <CairnRoundel className={styles.footerMark} />
            <span>Cairn</span>
          </a>
          <p className={styles.footerLine}>
            A note-taking app for people whose notes outlive the projects they
            were written for.
          </p>
        </div>

        <div className={styles.footerGrid}>
          <div>
            <h2 className={styles.footerHeading}>This map</h2>
            <ul className={styles.footerList}>
              <li>
                <a href="#map">Network map</a>
              </li>
              <li>
                <a href="#key">Key to the map</a>
              </li>
              <li>
                <a href="#service">Service information</a>
              </li>
              <li>
                <a href="#resurface">Resurface</a>
              </li>
              <li>
                <a href="#fares">Fares</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footerHeading}>Platforms</h2>
            <ul className={styles.footerList}>
              <li>
                <a href="#fares">macOS</a>
              </li>
              <li>
                <a href="#fares">Windows</a>
              </li>
              <li>
                <a href="#fares">Linux</a>
              </li>
              <li>
                <a href="#fares">iOS and Android</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footerHeading}>Step-free access</h2>
            <p className={styles.footerNote}>
              Your vault is a folder of markdown files. Move it, back it up, open
              it in another app, or leave Cairn entirely. Nothing is held back.
            </p>
          </div>
        </div>

        <p className={styles.footerRule}>
          <span className={styles.footerCode}>FIRST SERVICE 2016</span>
          <span className={styles.footerCode}>ALL LINES RUNNING</span>
          <span className={styles.footerCode}>NO TRACKING ON THIS NETWORK</span>
        </p>
      </footer>
    </div>
  );
}
