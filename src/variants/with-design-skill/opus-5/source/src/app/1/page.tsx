import { CardRail, type CatalogCard } from "./card-rail";
import styles from "./page.module.css";

const DRAWER: CatalogCard[] = [
  {
    id: "kiln",
    callNumber: "TP 823 .K55",
    accession: "acc. 002841",
    title: "Kiln temperature curves",
    lines: [
      "Cone 6 stalled at 1180°C. Held it twenty minutes and the colour came back.",
      "Log the ramp, not the peak.",
    ],
    seeAlso: ["Sourdough: hydration log", "Estuary sediment cores"],
  },
  {
    id: "cholera",
    callNumber: "RA 650 .S66",
    accession: "acc. 000317",
    title: "Why the 1854 cholera map worked",
    lines: [
      "Snow did not draw the deaths. He drew the pumps, then the deaths beside them.",
      "The argument is in the adjacency.",
    ],
    seeAlso: ["Reading — Seeing Like a State", "Estuary sediment cores"],
    resurfaced: { pulled: "24 Jul 2026", lastOpened: "9 Nov 2014" },
  },
  {
    id: "okonjo",
    callNumber: "HD 9502 .O46",
    accession: "acc. 004120",
    title: "Interview — R. Okonjo, 12 Mar",
    lines: [
      "Twenty-two years on the same stretch of river.",
      "Says the gauge board was moved in '09 and nobody wrote it down.",
    ],
    seeAlso: ["Estuary sediment cores", "Field recording — dawn chorus"],
  },
  {
    id: "sourdough",
    callNumber: "TX 769 .S68",
    accession: "acc. 003966",
    title: "Sourdough: hydration log",
    lines: [
      "78% at 24°C went slack by the second fold. 72% held its shape.",
      "Same flour, new sack — check the protein number.",
    ],
    seeAlso: ["Kiln temperature curves"],
  },
  {
    id: "seeing",
    callNumber: "JC 328 .S36",
    accession: "acc. 001204",
    title: "Reading — Seeing Like a State",
    lines: [
      "Legibility costs something.",
      "The forest that can be counted is the forest that dies.",
    ],
    seeAlso: ["Why the 1854 cholera map worked", "Bridge deck expansion joints"],
  },
  {
    id: "bridge",
    callNumber: "TG 325 .B75",
    accession: "acc. 005017",
    title: "Bridge deck expansion joints",
    lines: [
      "Modular joints at 40mm a bay.",
      "The noise complaint is a maintenance problem, not a design one.",
    ],
    seeAlso: ["Estuary sediment cores"],
  },
  {
    id: "herennium",
    callNumber: "PN 4009 .A34",
    accession: "acc. 000842",
    title: "Mnemonics from the Ad Herennium",
    lines: [
      "Place the images in a house you have actually walked through.",
      "Unfamiliar rooms hold nothing.",
    ],
    seeAlso: ["Reading — Seeing Like a State"],
  },
  {
    id: "estuary",
    callNumber: "GC 380 .E88",
    accession: "acc. 002355",
    title: "Estuary sediment cores",
    lines: [
      "Core 4 shows the 1953 surge as a 6cm band of clean sand.",
      "Everything above it is farm runoff.",
    ],
    seeAlso: ["Interview — R. Okonjo, 12 Mar", "Why the 1854 cholera map worked"],
  },
  {
    id: "dawn",
    callNumber: "QL 698 .F54",
    accession: "acc. 004401",
    title: "Field recording — dawn chorus",
    lines: [
      "04:41, blackcap first. Traffic floor is up to 38dB by 05:20.",
      "Record before the bypass wakes.",
    ],
    seeAlso: ["Interview — R. Okonjo, 12 Mar"],
  },
  {
    id: "letterpress",
    callNumber: "Z 250 .L48",
    accession: "acc. 003128",
    title: "Letterpress lockup diagram",
    lines: [
      "Furniture reads clockwise.",
      "Quoins on the far side of the chase or the whole forme lifts crooked.",
    ],
    seeAlso: ["Mnemonics from the Ad Herennium"],
  },
];

const SHELF_LIST = [
  {
    callNumber: "QA 76.76 .M35",
    title: "Plain files, your disk",
    body: "Every note is a .md file in a folder you picked. Open them in any editor, copy them to a drive, keep them all if you ever stop paying us. Cairn writes with the network off.",
  },
  {
    callNumber: "Z 699 .S43",
    title: "Search reads the scans",
    body: "One search box over the whole vault, including the words inside scanned PDFs and photographs of pages you never typed up.",
  },
  {
    callNumber: "CT 25 .D35",
    title: "Today's card is waiting",
    body: "Open Cairn and a note for today is already made and dated. Start typing. File it later, or leave it where it fell.",
  },
  {
    callNumber: "TK 5105 .S96",
    title: "The same vault on the phone",
    body: "Desktop and phone open the one folder, with the same cross-references and the same history behind every note.",
  },
];

const DATE_DUE = [
  { date: "14 Jan 2019", rot: "-1.4deg" },
  { date: "02 Sep 2020", rot: "0.8deg" },
  { date: "23 Mar 2022", rot: "-0.6deg" },
  { date: "11 Jun 2024", rot: "1.5deg" },
  { date: "07 Feb 2026", rot: "-1.1deg" },
  { date: "24 Jul 2026", rot: "0.5deg" },
];

/** Card top-edges seen from inside the drawer, one of them lifted. */
const CROSS_SECTION = Array.from({ length: 26 }, (_, i) => i);

export default function CardCatalogPage() {
  return (
    <main className={styles.page}>
      {/* ── Hero: the drawer, head-on, then its contents ─────────────── */}
      <section className={`${styles.hero} ${styles.fieldOak}`}>
        <div className={styles.cabinet}>
          <div className={styles.cabinetLip} aria-hidden="true" />

          <div className={styles.drawerFront}>
            <span className={styles.drawerNumber} aria-hidden="true">
              Drawer 07
            </span>

            <div className={styles.plate}>
              <span className={styles.plateScrew} aria-hidden="true" />
              <span className={styles.plateScrewRight} aria-hidden="true" />
              <p className={styles.wordmark}>Cairn</p>
              <span className={styles.plateRule} aria-hidden="true" />
              <p className={styles.plateSub}>a–z · 10,412 cards · your disk</p>
            </div>

            <svg
              className={styles.pull}
              viewBox="0 0 172 52"
              role="presentation"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cairnBrass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#EBD5A4" />
                  <stop offset="0.36" stopColor="#B8945A" />
                  <stop offset="0.74" stopColor="#7C6034" />
                  <stop offset="1" stopColor="#D9BE87" />
                </linearGradient>
                <linearGradient id="cairnBrassPlate" x1="0" y1="0" x2="0.3" y2="1">
                  <stop offset="0" stopColor="#EFDCB2" />
                  <stop offset="0.5" stopColor="#B8945A" />
                  <stop offset="1" stopColor="#6E5530" />
                </linearGradient>
              </defs>
              <path
                d="M20 16 C 20 46, 152 46, 152 16"
                fill="none"
                stroke="rgba(0,0,0,0.42)"
                strokeWidth="11"
                strokeLinecap="round"
                transform="translate(0,4)"
              />
              <path
                d="M20 16 C 20 46, 152 46, 152 16"
                fill="none"
                stroke="url(#cairnBrass)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M26 20 C 27 38, 145 38, 146 20"
                fill="none"
                stroke="rgba(255,255,255,0.42)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse cx="20" cy="15" rx="13" ry="11" fill="url(#cairnBrassPlate)" />
              <ellipse cx="152" cy="15" rx="13" ry="11" fill="url(#cairnBrassPlate)" />
              <circle cx="20" cy="15" r="3" fill="rgba(60,44,18,0.75)" />
              <circle cx="152" cy="15" r="3" fill="rgba(60,44,18,0.75)" />
            </svg>
          </div>
        </div>

        <div className={styles.drawerOpen} id="drawer">
          <div className={styles.drawerHead}>
            <p className={styles.drawerHeadTitle}>The drawer, open</p>
            <p className={styles.drawerHeadNote}>
              ten of 10,412 · filed 2014–2026
            </p>
          </div>

          <CardRail cards={DRAWER} />
        </div>

        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            Notes you wrote in 2014, filed where you can still find them.
          </h1>
          <p className={styles.heroSub}>
            Cairn keeps everything you write as plain markdown in a folder you
            chose. It cross-references cards as you type, reads the text inside
            your scans, and hands back the note you forgot you had.
          </p>
          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.btnStock}`} href="#pricing">
              Download for macOS
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#shelf-list">
              See what a vault holds
            </a>
          </div>
          <p className={styles.heroFine}>
            Free for one vault. Also on Windows, Linux, iOS and Android.
          </p>
        </div>
      </section>

      {/* ── See also: linking ────────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.fieldStock}`}
        id="see-also"
        aria-labelledby="see-also-title"
      >
        <div className={styles.sectionInner}>
          <div className={styles.crossrefGrid}>
            <div className={styles.sectionCopy}>
              <p className={styles.sectionTag}>Z 695 .L56</p>
              <h2 className={styles.sectionTitle} id="see-also-title">
                See also
              </h2>
              <p className={styles.sectionLede}>
                Type <kbd className={styles.key}>[[</kbd> and start naming a
                note. Cairn writes the cross-reference on both cards — the one
                under your hands and the one you pointed at — so you never go
                back to add the other half.
              </p>
              <p className={styles.sectionBody}>
                Rename a note and every reference to it follows. Delete the
                reference and both sides forget. The drawer never holds a card
                that points at nothing.
              </p>
            </div>

            <div className={styles.crossref}>
              <article className={`${styles.miniCard}`}>
                <p className={styles.miniCall}>GC 380 .E88</p>
                <h3 className={styles.miniTitle}>Estuary sediment cores</h3>
                <p className={styles.miniBody}>
                  Core 4 shows the 1953 surge. Gauge board moved, per{" "}
                  <span className={styles.linkToken}>
                    [[Interview — R. Okonjo, 12 Mar]]
                  </span>
                </p>
                <span className={styles.hole} aria-hidden="true" />
              </article>

              <div className={styles.connectorWrap}>
                <svg
                  className={styles.connector}
                  viewBox="0 0 132 34"
                  role="presentation"
                  aria-hidden="true"
                >
                  <path
                    d="M18 17 H114"
                    stroke="#7A2E2E"
                    strokeWidth="1.6"
                    strokeDasharray="7 4"
                  />
                  <path d="M6 17 L20 10.5 V23.5 Z" fill="#7A2E2E" />
                  <path d="M126 17 L112 10.5 V23.5 Z" fill="#7A2E2E" />
                </svg>
                <span className={styles.connectorLabel}>see also</span>
              </div>

              <article className={`${styles.miniCard}`}>
                <p className={styles.miniCall}>HD 9502 .O46</p>
                <h3 className={styles.miniTitle}>
                  Interview — R. Okonjo, 12 Mar
                </h3>
                <p className={styles.miniBody}>
                  Twenty-two years on the river.
                </p>
                <p className={styles.miniBacklink}>
                  <span>see also</span> Estuary sediment cores
                </p>
                <span className={styles.hole} aria-hidden="true" />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resurface ────────────────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.fieldOak} ${styles.resurfaceSection}`}
        id="resurface"
        aria-labelledby="resurface-title"
      >
        <div className={styles.sectionInner}>
          <div className={styles.resurfaceGrid}>
            <div className={styles.sectionCopy}>
              <p className={`${styles.sectionTag} ${styles.sectionTagOnOak}`}>
                Z 711 .R47
              </p>
              <h2 className={styles.sectionTitle} id="resurface-title">
                Resurface
              </h2>
              <p className={styles.sectionLede}>
                While you write, Cairn goes to the back of the drawer. Notes you
                have not opened in over a year, that share a name or a link or a
                turn of phrase with the page in front of you, come up in a small
                tray at the side.
              </p>
              <p className={styles.sectionBody}>
                You file the connection or you put the card back. Either way the
                thing you wrote in a different job, for a different reason, is
                in your hands again — which is the whole reason you kept it.
              </p>
              <p className={styles.resurfaceStat}>
                <span>4,276 days in the drawer</span>
                <span aria-hidden="true">·</span>
                <span>pulled this morning</span>
              </p>
            </div>

            <div className={styles.drawerSection}>
              <div className={styles.edges} aria-hidden="true">
                {CROSS_SECTION.map((i) => (
                  <span
                    key={i}
                    className={
                      i === 17 ? `${styles.edge} ${styles.edgeLifted}` : styles.edge
                    }
                  />
                ))}
              </div>
              <div className={styles.sectionRod} aria-hidden="true" />

              <article className={`${styles.pulledCard}`}>
                <div className={styles.cardHead}>
                  <span className={styles.callNumber}>RA 650 .S66</span>
                  <span className={styles.accession}>acc. 000317</span>
                </div>
                <h3 className={styles.miniTitle}>
                  Why the 1854 cholera map worked
                </h3>
                <p className={styles.miniBody}>
                  He drew the pumps, then the deaths beside them. The argument
                  is in the adjacency.
                </p>
                <div className={styles.stamp}>
                  <span className={styles.stampWord}>Resurfaced</span>
                  <span className={styles.stampDate}>24 Jul 2026</span>
                </div>
                <span className={styles.hole} aria-hidden="true" />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shelf list ───────────────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.fieldStock}`}
        id="shelf-list"
        aria-labelledby="shelf-list-title"
      >
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Z 693 .S54</p>
            <h2 className={styles.sectionTitle} id="shelf-list-title">
              Shelf list
            </h2>
            <p className={styles.sectionLede}>
              What is in the drawer, and where it actually lives.
            </p>
          </div>

          <ul className={styles.shelfGrid}>
            {SHELF_LIST.map((item) => (
              <li
                key={item.callNumber}
                className={`${styles.shelfCard}`}
              >
                <p className={styles.miniCall}>{item.callNumber}</p>
                <h3 className={styles.shelfTitle}>{item.title}</h3>
                <p className={styles.shelfBody}>{item.body}</p>
                <span className={styles.hole} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Date due: version history ────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.fieldStock} ${styles.dateDueSection}`}
        id="date-due"
        aria-labelledby="date-due-title"
      >
        <div className={styles.sectionInner}>
          <div className={styles.dateDueGrid}>
            <div className={styles.slip}>
              <p className={styles.slipHead}>Date due</p>
              <ul className={styles.slipRows}>
                {DATE_DUE.map((entry) => (
                  <li key={entry.date}>
                    <span
                      className={styles.slipStamp}
                      style={{ "--rot": entry.rot } as React.CSSProperties}
                    >
                      {entry.date}
                    </span>
                  </li>
                ))}
                <li />
                <li />
              </ul>
              <p className={styles.slipFoot}>Estuary sediment cores · 41 saves</p>
            </div>

            <div className={styles.sectionCopy}>
              <p className={styles.sectionTag}>Z 703 .V47</p>
              <h2 className={styles.sectionTitle} id="date-due-title">
                Every save is stamped
              </h2>
              <p className={styles.sectionLede}>
                Each note keeps its own history. Open any date and read the note
                as it stood that morning, then take back the paragraph you cut
                and regretted.
              </p>
              <p className={styles.sectionBody}>
                The history sits beside the file on your own disk, so it survives
                a lost laptop the same way the notes do — by having been copied
                somewhere with everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.fieldStock}`}
        id="pricing"
        aria-labelledby="pricing-title"
      >
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Z 713 .B67</p>
            <h2 className={styles.sectionTitle} id="pricing-title">
              Borrower&rsquo;s card
            </h2>
            <p className={styles.sectionLede}>
              One price, and it only buys you the sync. Everything that makes a
              note findable is in the free vault.
            </p>
          </div>

          <div className={styles.priceGrid}>
            <article className={`${styles.priceCard}`}>
              <p className={styles.miniCall}>Issued — no charge</p>
              <p className={styles.priceFigure}>Free</p>
              <p className={styles.priceFor}>One vault, one machine</p>
              <ul className={styles.priceList}>
                <li>Unlimited notes, kept as markdown on your disk</li>
                <li>Cross-references, backlinks and Resurface</li>
                <li>Search across scanned PDFs and images</li>
                <li>Full version history on every note</li>
              </ul>
              <a className={`${styles.btn} ${styles.btnOak}`} href="#pricing">
                Download for macOS
              </a>
              <span className={styles.hole} aria-hidden="true" />
            </article>

            <article
              className={`${styles.priceCard} ${styles.priceCardOak}`}
            >
              <p className={styles.miniCall}>Issued — monthly</p>
              <p className={styles.priceFigure}>
                $8<span>/month</span>
              </p>
              <p className={styles.priceFor}>The same vault everywhere</p>
              <ul className={styles.priceList}>
                <li>Desktop and phone kept in step</li>
                <li>As many machines as you actually use</li>
                <li>Sync stops, notes stay — they were always your files</li>
                <li>Cancel from inside the app, in one place</li>
              </ul>
              <a className={`${styles.btn} ${styles.btnBrass}`} href="#pricing">
                Start syncing — $8/month
              </a>
              <span className={styles.hole} aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className={`${styles.footer} ${styles.fieldOak}`}>
        <div className={styles.sectionInner}>
          <div className={styles.footerGrid}>
            <div>
              <p className={styles.footerMark}>Cairn</p>
              <p className={styles.footerNote}>
                A card catalog for notes that outlast the work they were written
                for.
              </p>
            </div>

            <nav className={styles.footerNav} aria-label="The app">
              <h2 className={styles.footerHeading}>The app</h2>
              <ul>
                <li>
                  <a href="#pricing">Download</a>
                </li>
                <li>
                  <a href="#shelf-list">What a vault holds</a>
                </li>
                <li>
                  <a href="#resurface">How Resurface picks</a>
                </li>
                <li>
                  <a href="#date-due">Version history</a>
                </li>
              </ul>
            </nav>

            <nav className={styles.footerNav} aria-label="Reference">
              <h2 className={styles.footerHeading}>Reference</h2>
              <ul>
                <li>
                  <a href="#see-also">Link syntax</a>
                </li>
                <li>
                  <a href="#drawer">Keyboard shortcuts</a>
                </li>
                <li>
                  <a href="#shelf-list">File layout on disk</a>
                </li>
                <li>
                  <a href="#pricing">Importing an old vault</a>
                </li>
              </ul>
            </nav>

            <nav className={styles.footerNav} aria-label="Desk">
              <h2 className={styles.footerHeading}>Desk</h2>
              <ul>
                <li>
                  <a href="#pricing">Contact</a>
                </li>
                <li>
                  <a href="#pricing">Status</a>
                </li>
                <li>
                  <a href="#pricing">Privacy</a>
                </li>
                <li>
                  <a href="#pricing">Changelog</a>
                </li>
              </ul>
            </nav>
          </div>

          <p className={styles.colophon}>
            Set in Archivo, Source Sans 3 and Courier Prime. Cards ruled at 22
            point, punched 16mm from the foot.
          </p>
        </div>
      </footer>
    </main>
  );
}
