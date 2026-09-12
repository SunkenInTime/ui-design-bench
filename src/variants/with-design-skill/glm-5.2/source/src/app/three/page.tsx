import type { Metadata } from "next";
import styles from "./three.module.css";

export const metadata: Metadata = {
  title: "Field Notebook",
  description:
    "A field notebook for ideas — record the specimen of a thought the moment it appears, pressed, dated, and classified for later study.",
};

export default function FieldNotebookPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.brand}>
            Marginal<b>i</b>a
          </div>
          <div className={styles.topMeta}>FOLIO III &middot; field notes</div>
        </header>

        <div className={styles.spread}>
          <div>
            <section className={styles.hero}>
              <p className={styles.eyebrow}>A field guide to your own mind</p>
              <h1 className={styles.headline}>
                Observe.
                <br />
                <em>Note.</em>
                <br />
                Return.
              </h1>

              <div className={styles.specimen}>
                <svg
                  className={styles.specimenSvg}
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden
                >
                  {/* stem */}
                  <path d="M100 188 C 100 150, 102 110, 100 70 C 99 50, 100 30, 100 14" />
                  {/* leaves */}
                  <path d="M100 150 C 78 146, 60 132, 52 116 C 70 118, 88 126, 100 150 Z" />
                  <path d="M100 150 C 122 146, 140 132, 148 116 C 130 118, 112 126, 100 150 Z" />
                  <path d="M100 112 C 80 108, 64 96, 58 82 C 74 84, 90 92, 100 112 Z" />
                  <path d="M100 112 C 120 108, 136 96, 142 82 C 126 84, 110 92, 100 112 Z" />
                  <path d="M100 78 C 86 74, 74 64, 70 52 C 84 54, 95 62, 100 78 Z" />
                  <path d="M100 78 C 114 74, 126 64, 130 52 C 116 54, 105 62, 100 78 Z" />
                  <path d="M100 46 C 92 42, 84 34, 82 24 C 92 26, 98 34, 100 46 Z" />
                  <path d="M100 46 C 108 42, 116 34, 118 24 C 108 26, 102 34, 100 46 Z" />
                  {/* veins */}
                  <path d="M100 150 L 60 124" opacity="0.5" />
                  <path d="M100 112 L 68 92" opacity="0.5" />
                  <path d="M100 78 L 78 60" opacity="0.5" />
                </svg>
                <p className={styles.specimenCap}>
                  <b>Specimen no. 001 &middot; 19 Mar</b>
                  A thought, pressed flat the moment it landed. Recognizable on
                  return &mdash; that is all a note needs to be.
                </p>
              </div>

              <p className={styles.sub}>
                Marginalia is a field notebook for the working mind &mdash; a
                place to record the specimen of an idea the moment it appears,
                pressed, dated, and classified for later study.
              </p>
              <a className={styles.cta} href="#begin">
                Open the notebook <span aria-hidden>&#8594;</span>
              </a>
            </section>

            <section className={styles.method}>
              <h2 className={styles.sectionLabel}>The naturalist&apos;s method</h2>
              <div className={styles.entries}>
                <article className={styles.entry}>
                  <div className={styles.entryNo}>
                    <b>Entry i</b>
                    the sighting
                  </div>
                  <div>
                    <h3 className={styles.entryTitle}>Date and place</h3>
                    <p className={styles.entryBody}>
                      Where were you when the idea turned up? A walking route, a
                      half-read book, the edge of sleep. Context is how you find
                      a thought again &mdash; record it before it flies.
                    </p>
                  </div>
                </article>
                <article className={styles.entry}>
                  <div className={styles.entryNo}>
                    <b>Entry ii</b>
                    the specimen
                  </div>
                  <div>
                    <h3 className={styles.entryTitle}>Describe it in your own hand</h3>
                    <p className={styles.entryBody}>
                      Enough to recognize it later, nothing more. A sentence, a
                      sketch, a quote &mdash; the notebook keeps the sighting,
                      not the essay.
                    </p>
                  </div>
                </article>
                <article className={styles.entry}>
                  <div className={styles.entryNo}>
                    <b>Entry iii</b>
                    the return
                  </div>
                  <div>
                    <h3 className={styles.entryTitle}>Revisit with fresh eyes</h3>
                    <p className={styles.entryBody}>
                      Return in a week, a season, a year. Old sightings become
                      new ones when the rest of the notebook has grown around
                      them.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <svg className={styles.leaf} viewBox="0 0 46 24" aria-hidden>
              <path
                d="M23 2 C 14 6, 6 12, 2 20 C 12 18, 20 14, 23 2 Z M23 2 C 32 6, 40 12, 44 20 C 34 18, 26 14, 23 2 Z M23 2 L 23 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>

            <section className={styles.proof}>
              <p className={styles.quote}>
                The naturalist does not trust <b>memory.</b> She trusts the
                record.
              </p>
              <p className={styles.cite}>&mdash; margin note, folio iii</p>
            </section>

            <section className={styles.closing} id="begin">
              <h2 className={styles.closingHead}>
                Keep every sighting. <em>The notebook waits.</em>
              </h2>
              <a className={styles.cta} href="#begin">
                Begin the field guide <span aria-hidden>&#8594;</span>
              </a>
            </section>
          </div>

          <aside className={styles.margin}>
            <p>
              <span className={styles.mpin}>margin &middot; 19 mar</span>
              The fleeting ones never come at the desk. Carry the notebook to
              where they live &mdash; the walk, the shower, the bus.
            </p>
            <p>
              <span className={styles.mpin}>margin &middot; 02 apr</span>
              A note is not a draft. It is a pressed flower: flat, dry, and kept
              for what it proves was there.
            </p>
            <p>
              <span className={styles.mpin}>margin &middot; 17 apr</span>
              Date every entry. Future-you is a different observer; give her the
              timestamp she&apos;ll need.
            </p>
          </aside>
        </div>

        <footer className={styles.foot}>
          <span>Marginalia &mdash; a second brain</span>
          <span>Iteration 03 / 05</span>
        </footer>
      </div>
    </div>
  );
}
