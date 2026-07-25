import { BEDS, CORE_ID, type Bed } from "./beds";
import { CoreColumn } from "./core-column";
import styles from "./page.module.css";

const byId = (id: string): Bed => {
  const bed = BEDS.find((entry) => entry.id === id);
  if (!bed) throw new Error(`Unknown bed: ${id}`);
  return bed;
};

const TONE_CHIP: Record<Bed["tone"], string> = {
  surface: styles.chipSurface,
  loose: styles.chipOchre,
  interbed: styles.chipInterbed,
  laminated: styles.chipQuartz,
  graded: styles.chipGraded,
  unconformity: styles.chipHematite,
  bedrock: styles.chipMalachite,
  catcher: styles.chipCatcher,
};

function BedHead({ id }: { id: string }) {
  const bed = byId(id);
  return (
    <div className={styles.bedHead}>
      <span className={`${styles.chip} ${TONE_CHIP[bed.tone]}`} aria-hidden="true" />
      <span className={styles.bedDepth}>
        {bed.top}–{bed.bottom} cm
      </span>
      <span className={styles.bedRule} aria-hidden="true" />
      <span className={styles.bedYear}>{bed.year}</span>
      <span className={styles.bedSample}>{bed.sample}</span>
    </div>
  );
}

export default function CoreSamplePage() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <aside className={styles.rail} aria-label="Core column: page contents by depth">
          <CoreColumn />
        </aside>

        <div className={styles.log}>
          {/* ---------------------------------------------------------- 0 cm */}
          <section id="surface" className={`${styles.bed} ${styles.hero}`}>
            <BedHead id="surface" />
            <p className={styles.litho}>Weathered surface, worked daily</p>
            <h1 className={styles.h1}>
              A decade of notes, still legible at depth.
            </h1>
            <p className={styles.lede}>
              Cairn is a note-taking app for people whose notes outlast the work
              they were written for. Every note is a markdown file on your own
              disk. Links form as you type. And the notes you buried years ago
              come back up when they touch what you are writing today.
            </p>

            <div className={styles.cta}>
              <a className={styles.ctaPrimary} href="#core-catcher">
                Download for macOS
              </a>
              <a className={styles.ctaSecondary} href="#bedrock">
                See what a vault looks like on disk
              </a>
            </div>

            <dl className={styles.readings}>
              <div className={styles.reading}>
                <dt className={styles.readingKey}>
                  <span className={`${styles.chip} ${styles.chipOchre}`} aria-hidden="true" />
                  surface
                </dt>
                <dd className={styles.readingValue}>0 cm — today</dd>
              </div>
              <div className={styles.reading}>
                <dt className={styles.readingKey}>
                  <span className={`${styles.chip} ${styles.chipMalachite}`} aria-hidden="true" />
                  base
                </dt>
                <dd className={styles.readingValue}>940 cm — Mar 2016</dd>
              </div>
              <div className={styles.reading}>
                <dt className={styles.readingKey}>
                  <span className={`${styles.chip} ${styles.chipHematite}`} aria-hidden="true" />
                  recovery
                </dt>
                <dd className={styles.readingValue}>94% of drilled length</dd>
              </div>
            </dl>

            <div className={styles.scaleBar} aria-hidden="true">
              <svg
                className={styles.scaleBarSvg}
                viewBox="0 0 200 22"
                preserveAspectRatio="none"
                role="presentation"
              >
                <rect x="0" y="12" width="200" height="4" fill="currentColor" opacity="0.28" />
                {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((x, i) => (
                  <rect
                    key={x}
                    x={Math.min(x, 199)}
                    y={i % 5 === 0 ? 4 : 8}
                    width="1"
                    height={i % 5 === 0 ? 12 : 8}
                    fill="currentColor"
                    opacity="0.75"
                  />
                ))}
              </svg>
              <span className={styles.scaleBarLabel}>
                0 &nbsp; 10 &nbsp; 20 cm &nbsp;·&nbsp; core {CORE_ID} &nbsp;·&nbsp; logged 25 Jul 2026
              </span>
            </div>
          </section>

          {/* -------------------------------------------------------- 60 cm */}
          <section id="loose-fill" className={styles.bed} aria-labelledby="loose-fill-h">
            <BedHead id="loose-fill" />
            <p className={styles.litho}>Unconsolidated fill, added each morning</p>
            <h2 id="loose-fill-h" className={styles.h2}>
              The day starts with a note already open.
            </h2>
            <p className={styles.body}>
              Launch Cairn and today&rsquo;s note is there, dated and empty. It
              catches whatever arrives before you know where it belongs. Most of
              it stays loose. Some of it gets moved down into something you keep.
            </p>

            <div className={styles.specimen}>
              <div className={styles.specimenHead}>
                <span className={styles.specimenTitle}>2026-07-25 · Saturday</span>
                <span className={`${styles.tag} ${styles.tagOchre}`}>daily note</span>
              </div>
              <ul className={styles.jotList}>
                <li className={styles.jot}>
                  call back R. Okonjo about the transcript before Friday
                </li>
                <li className={styles.jot}>
                  kiln held 1040 °C for 40 min — cone 6 bent flat, cone 7 upright
                </li>
                <li className={styles.jot}>
                  compare estuary core photos against the 2019 set
                </li>
                <li className={`${styles.jot} ${styles.jotCursor}`}>
                  <span className={styles.caret} aria-hidden="true" />
                </li>
              </ul>
            </div>
          </section>

          {/* ------------------------------------------------------- 180 cm */}
          <section id="interbedded" className={styles.bed} aria-labelledby="interbedded-h">
            <BedHead id="interbedded" />
            <p className={styles.litho}>Interbedded pairs, contact holds both ways</p>
            <h2 id="interbedded-h" className={styles.h2}>
              Type two brackets. The link holds from both ends.
            </h2>
            <p className={styles.body}>
              Type <code className={styles.code}>[[</code> and pick a note. Cairn
              writes the link where you are standing and records the backlink on
              the other note at the same moment. Nothing to file afterwards, and
              no way to end up with a link that only points one way.
            </p>

            <div className={styles.linkPair}>
              <div className={styles.specimen}>
                <div className={styles.specimenHead}>
                  <span className={styles.specimenTitle}>
                    Why the 1854 cholera map worked
                  </span>
                  <span className={styles.specimenMeta}>edited 11:04</span>
                </div>
                <p className={styles.noteLine}>
                  Snow did not persuade anyone with the dots. He persuaded them
                  with the pump. Compare the way we read{" "}
                  <span className={styles.linkToken}>
                    [[Estuary sediment cores]]
                  </span>{" "}
                  — same trick, different medium.
                </p>
              </div>

              <div className={styles.linkShaft} aria-hidden="true">
                <span className={styles.linkShaftLine} />
                <span className={styles.linkShaftBadge}>[[ ]]</span>
                <span className={styles.linkShaftLine} />
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenHead}>
                  <span className={styles.specimenTitle}>Estuary sediment cores</span>
                  <span className={styles.specimenMeta}>not edited since 2025</span>
                </div>
                <div className={styles.backlinks}>
                  <p className={styles.backlinkHead}>Linked from</p>
                  <ul>
                    <li className={styles.backlink}>Why the 1854 cholera map worked</li>
                    <li className={styles.backlink}>Bridge deck expansion joints</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- 340 cm */}
          <section id="laminated" className={styles.bed} aria-labelledby="laminated-h">
            <BedHead id="laminated" />
            <p className={styles.litho}>Fine laminae, legible throughout including scans</p>
            <h2 id="laminated-h" className={styles.h2}>
              Search reads the scans as well as the typing.
            </h2>
            <p className={styles.body}>
              Search covers every note in the vault, and it does not stop at text
              you typed. Scanned PDFs and photographed pages are read too, so a
              phrase from a handout you filed in 2019 comes back alongside
              everything else.
            </p>

            <div className={styles.specimen}>
              <div className={styles.searchBar}>
                <svg
                  className={styles.searchIcon}
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="7" cy="7" r="4.4" />
                  <path d="M10.4 10.4 14 14" strokeLinecap="round" />
                </svg>
                <span className={styles.searchQuery}>pump handle</span>
                <span className={styles.searchCount}>4 notes · 0.02 s</span>
              </div>
              <ul className={styles.results}>
                <li className={styles.result}>
                  <span className={styles.resultTitle}>
                    Why the 1854 cholera map worked
                  </span>
                  <span className={styles.resultSnippet}>
                    …removing the <mark className={styles.mark}>pump handle</mark>{" "}
                    ended the outbreak that was already ending…
                  </span>
                  <span className={styles.resultMeta}>2023 · 390 cm</span>
                </li>
                <li className={styles.result}>
                  <span className={styles.resultTitle}>
                    Interview — R. Okonjo, 12 Mar
                    <span className={`${styles.tag} ${styles.tagMalachite}`}>
                      scan · p. 4
                    </span>
                  </span>
                  <span className={styles.resultSnippet}>
                    …she drew the <mark className={styles.mark}>pump handle</mark>{" "}
                    on the whiteboard and left it there for a week…
                  </span>
                  <span className={styles.resultMeta}>2021 · 610 cm</span>
                </li>
                <li className={styles.result}>
                  <span className={styles.resultTitle}>
                    Reading — Seeing Like a State
                    <span className={`${styles.tag} ${styles.tagMalachite}`}>
                      scan · photo
                    </span>
                  </span>
                  <span className={styles.resultSnippet}>
                    …margin note, my handwriting: “the{" "}
                    <mark className={styles.mark}>pump handle</mark> is the only
                    legible act”…
                  </span>
                  <span className={styles.resultMeta}>2018 · 750 cm</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ------------------------------------------------------- 500 cm */}
          <section id="graded" className={styles.bed} aria-labelledby="graded-h">
            <BedHead id="graded" />
            <p className={styles.litho}>Graded bedding, every earlier grain retained</p>
            <h2 id="graded-h" className={styles.h2}>
              Every version stays, on every device.
            </h2>
            <p className={styles.body}>
              Each note keeps its own history — every save, timestamped, next to
              what it replaced. Open any earlier state and copy a paragraph back
              out. The same vault opens on your phone, so a correction made on a
              train is the same file you edit at your desk.
            </p>

            <div className={styles.twoUp}>
              <div className={styles.specimen}>
                <div className={styles.specimenHead}>
                  <span className={styles.specimenTitle}>
                    Sourdough: hydration log
                  </span>
                  <span className={styles.specimenMeta}>14 versions</span>
                </div>
                <ul className={styles.versions}>
                  <li className={`${styles.version} ${styles.versionCurrent}`}>
                    <span className={styles.versionStamp}>2026-07-19 08:12</span>
                    <span className={styles.versionNote}>current · 82% at 26 °C</span>
                  </li>
                  <li className={styles.version}>
                    <span className={styles.versionStamp}>2026-03-02 21:40</span>
                    <span className={styles.versionNote}>+ winter kitchen numbers</span>
                  </li>
                  <li className={styles.version}>
                    <span className={styles.versionStamp}>2024-11-11 07:55</span>
                    <span className={styles.versionNote}>78% at 21 °C</span>
                  </li>
                  <li className={styles.version}>
                    <span className={styles.versionStamp}>2022-06-04 19:03</span>
                    <span className={styles.versionNote}>first entry</span>
                  </li>
                </ul>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenHead}>
                  <span className={styles.specimenTitle}>One vault, two machines</span>
                  <span className={`${styles.tag} ${styles.tagQuartz}`}>same files</span>
                </div>
                <svg
                  className={styles.devices}
                  viewBox="0 0 220 92"
                  role="img"
                  aria-label="A desktop screen and a phone, both showing the same vault"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="4" y="10" width="126" height="72" rx="4" />
                    <path d="M52 82v6h30v-6" />
                    <rect x="152" y="4" width="52" height="84" rx="7" />
                    <path d="M170 11h16" strokeLinecap="round" />
                  </g>
                  <g fill="currentColor" opacity="0.55">
                    <rect x="14" y="22" width="62" height="4" rx="2" />
                    <rect x="14" y="33" width="96" height="3" rx="1.5" />
                    <rect x="14" y="41" width="88" height="3" rx="1.5" />
                    <rect x="14" y="49" width="94" height="3" rx="1.5" />
                    <rect x="14" y="57" width="48" height="3" rx="1.5" />
                    <rect x="161" y="24" width="30" height="4" rx="2" />
                    <rect x="161" y="35" width="34" height="3" rx="1.5" />
                    <rect x="161" y="43" width="30" height="3" rx="1.5" />
                    <rect x="161" y="51" width="34" height="3" rx="1.5" />
                  </g>
                  <g stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6">
                    <path d="M134 46h14" />
                  </g>
                </svg>
                <p className={styles.deviceNote}>
                  Sync is optional. Without it the vault still opens, from the
                  folder it has always been in.
                </p>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- 660 cm */}
          <section
            id="unconformity"
            className={`${styles.bed} ${styles.bedFeature}`}
            aria-labelledby="unconformity-h"
          >
            <BedHead id="unconformity" />
            <p className={styles.litho}>Buried contact, re-exposed on demand</p>
            <h2 id="unconformity-h" className={styles.h2}>
              Resurface brings the buried layer up.
            </h2>
            <p className={styles.body}>
              While you write, Cairn looks below the surface for notes you have
              not opened in a year or more that touch what is in front of you. It
              does not rank you or nag. It sets two or three old notes at the
              foot of the page with the date you last opened them, and leaves the
              judgement to you.
            </p>

            <div className={styles.resurface}>
              <div className={`${styles.specimen} ${styles.specimenSurface}`}>
                <div className={styles.specimenHead}>
                  <span className={styles.specimenTitle}>
                    Estuary sediment cores
                  </span>
                  <span className={`${styles.tag} ${styles.tagQuartz}`}>0 cm · writing now</span>
                </div>
                <p className={styles.noteLine}>
                  Three cores from the north bank. The 2019 handling notes are
                  the part I keep half-remembering — something about the tube
                  temperature before extrusion.
                </p>
              </div>

              <div className={styles.shaft} aria-hidden="true">
                <span className={styles.shaftLine} />
                <span className={styles.shaftLabel}>resurfaced from depth</span>
                <span className={styles.shaftLine} />
              </div>

              <ul className={styles.raised}>
                <li className={styles.raisedItem}>
                  <span className={styles.raisedDepth}>690 cm</span>
                  <span className={styles.raisedBody}>
                    <span className={styles.raisedTitle}>Kiln temperature curves</span>
                    <span className={styles.raisedReason}>
                      shares: extrusion temperature, holding time
                    </span>
                  </span>
                  <span className={styles.raisedAge}>last opened Feb 2019</span>
                </li>
                <li className={styles.raisedItem}>
                  <span className={styles.raisedDepth}>745 cm</span>
                  <span className={styles.raisedBody}>
                    <span className={styles.raisedTitle}>
                      Bridge deck expansion joints
                    </span>
                    <span className={styles.raisedReason}>
                      shares: thermal expansion in confined tubes
                    </span>
                  </span>
                  <span className={styles.raisedAge}>last opened Aug 2018</span>
                </li>
                <li className={styles.raisedItem}>
                  <span className={styles.raisedDepth}>812 cm</span>
                  <span className={styles.raisedBody}>
                    <span className={styles.raisedTitle}>
                      Field recording — dawn chorus
                    </span>
                    <span className={styles.raisedReason}>
                      shares: north bank, tide table, same fortnight
                    </span>
                  </span>
                  <span className={styles.raisedAge}>last opened Nov 2017</span>
                </li>
              </ul>

              <p className={styles.resurfaceFoot}>
                Dismiss a suggestion and it will not come back for that note.
                Turn Resurface off entirely in settings.
              </p>
            </div>
          </section>

          {/* ------------------------------------------------------- 830 cm */}
          <section id="bedrock" className={styles.bed} aria-labelledby="bedrock-h">
            <BedHead id="bedrock" />
            <p className={styles.litho}>Plain markdown basement, no cement</p>
            <h2 id="bedrock-h" className={styles.h2}>
              Markdown files, in a folder you already own.
            </h2>
            <p className={styles.body}>
              A vault is a folder. Each note is a{" "}
              <code className={styles.code}>.md</code> file you can open in any
              editor, back up however you already back things up, and read on a
              machine that has never heard of Cairn. It works with no network. If
              you stop paying us — or we stop existing — the notes are still
              there and still readable.
            </p>

            <div className={styles.specimen}>
              <div className={styles.specimenHead}>
                <span className={styles.specimenTitle}>~/vault</span>
                <span className={styles.specimenMeta}>4,118 files · 61 MB</span>
              </div>
              <ul className={styles.tree}>
                <li className={styles.treeRow}>
                  <span className={styles.treePath}>kiln-temperature-curves.md</span>
                  <span className={styles.treeSize}>6 KB</span>
                </li>
                <li className={styles.treeRow}>
                  <span className={styles.treePath}>
                    why-the-1854-cholera-map-worked.md
                  </span>
                  <span className={styles.treeSize}>11 KB</span>
                </li>
                <li className={styles.treeRow}>
                  <span className={styles.treePath}>
                    mnemonics-from-the-ad-herennium.md
                  </span>
                  <span className={styles.treeSize}>9 KB</span>
                </li>
                <li className={styles.treeRow}>
                  <span className={styles.treePath}>letterpress-lockup-diagram.md</span>
                  <span className={styles.treeSize}>3 KB</span>
                </li>
                <li className={styles.treeRow}>
                  <span className={styles.treePath}>daily/2026-07-25.md</span>
                  <span className={styles.treeSize}>1 KB</span>
                </li>
                <li className={`${styles.treeRow} ${styles.treeRowQuiet}`}>
                  <span className={styles.treePath}>.cairn/history/</span>
                  <span className={styles.treeSize}>versions, also plain text</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ------------------------------------------------------- 900 cm */}
          <section id="core-catcher" className={styles.bed} aria-labelledby="core-catcher-h">
            <BedHead id="core-catcher" />
            <p className={styles.litho}>Base of recovery, terms of the sample</p>
            <h2 id="core-catcher-h" className={styles.h2}>
              One vault free. Sync is $8 a month.
            </h2>
            <p className={styles.body}>
              The app is the same either way. Paying moves your files between
              your own machines; it does not unlock features or hold your notes
              anywhere you cannot reach them.
            </p>

            <div className={styles.plans}>
              <div className={styles.plan}>
                <p className={styles.planName}>One vault</p>
                <p className={styles.planPrice}>
                  Free<span className={styles.planPer}> · forever</span>
                </p>
                <ul className={styles.planList}>
                  <li className={styles.planItem}>Unlimited notes on one device</li>
                  <li className={styles.planItem}>Links, backlinks, daily note</li>
                  <li className={styles.planItem}>Search across scans and images</li>
                  <li className={styles.planItem}>Version history</li>
                  <li className={styles.planItem}>Resurface</li>
                </ul>
                <a className={styles.planCta} href="#surface">
                  Download for macOS
                </a>
              </div>

              <div className={`${styles.plan} ${styles.planLead}`}>
                <p className={styles.planName}>
                  Sync
                  <span className={`${styles.tag} ${styles.tagOchre}`}>optional</span>
                </p>
                <p className={styles.planPrice}>
                  $8<span className={styles.planPer}> / month</span>
                </p>
                <ul className={styles.planList}>
                  <li className={styles.planItem}>Everything in One vault</li>
                  <li className={styles.planItem}>
                    The same vault on desktop and phone
                  </li>
                  <li className={styles.planItem}>End-to-end encrypted transfer</li>
                  <li className={styles.planItem}>Unlimited vaults</li>
                  <li className={styles.planItem}>Cancel and keep every file</li>
                </ul>
                <a className={`${styles.planCta} ${styles.planCtaLead}`} href="#surface">
                  Start a 30-day trial
                </a>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- record */}
          <footer className={styles.archive}>
            <p className={styles.archiveTitle}>Sample archive record</p>
            <dl className={styles.archiveGrid}>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Core</dt>
                <dd className={styles.archiveValue}>{CORE_ID}</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Interval</dt>
                <dd className={styles.archiveValue}>0–940 cm</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Recovery</dt>
                <dd className={styles.archiveValue}>94%</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Datum</dt>
                <dd className={styles.archiveValue}>surface = 25 Jul 2026</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Base</dt>
                <dd className={styles.archiveValue}>940 cm = 03 Mar 2016</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Beds logged</dt>
                <dd className={styles.archiveValue}>{BEDS.length}</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Storage</dt>
                <dd className={styles.archiveValue}>~/vault · plain markdown</dd>
              </div>
              <div className={styles.archiveField}>
                <dt className={styles.archiveKey}>Logged by</dt>
                <dd className={styles.archiveValue}>Cairn</dd>
              </div>
            </dl>

            <nav className={styles.archiveNav} aria-label="Footer">
              <a className={styles.archiveLink} href="#core-catcher">Download</a>
              <a className={styles.archiveLink} href="#bedrock">File format</a>
              <a className={styles.archiveLink} href="#graded">Version history</a>
              <a className={styles.archiveLink} href="#unconformity">Resurface</a>
              <a className={styles.archiveLink} href="#core-catcher">Pricing</a>
            </nav>

            <p className={styles.archiveNote}>
              Cairn keeps nothing you cannot read without us. Notes stay on your
              disk, in the folder you chose, in the format you can grep.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
