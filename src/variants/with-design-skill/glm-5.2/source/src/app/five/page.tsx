import type { Metadata } from "next";
import styles from "./five.module.css";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "A corkboard where notes, clippings, and half-thoughts hang side by side, pinned and strung together until a project takes shape.",
};

export default function WorkshopPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.brand}>
            Marginal<b>i</b>a
          </div>
          <div className={styles.topMeta}>Bench 05 &middot; the workshop</div>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>A workbench for ideas</span>
            <h1 className={styles.headline}>
              Pin it.
              <br />
              <span className={styles.alt}>String it.</span>
              <br />
              See what <em>connects.</em>
            </h1>
            <p className={styles.sub}>
              Marginalia is your idea workshop &mdash; a corkboard where notes,
              clippings, and half-thoughts hang side by side, pinned and strung
              together until a project takes shape.
            </p>
            <a className={styles.cta} href="#enter">
              Enter the workshop <span aria-hidden>&#8594;</span>
            </a>
          </div>

          <div className={styles.board} aria-hidden>
            <svg
              className={styles.string}
              viewBox="0 0 600 460"
              preserveAspectRatio="none"
            >
              <path
                d="M119 30 Q 130 150 165 268"
                stroke="#b22a2a"
                strokeWidth="1.6"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M485 30 Q 470 150 462 272"
                stroke="#b22a2a"
                strokeWidth="1.6"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M119 30 Q 302 64 485 30"
                stroke="#b22a2a"
                strokeWidth="1.6"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M165 268 Q 314 300 462 272"
                stroke="#b22a2a"
                strokeWidth="1.6"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M119 30 Q 300 170 462 272"
                stroke="#b22a2a"
                strokeWidth="1.4"
                fill="none"
                opacity="0.5"
              />
            </svg>

            <article className={`${styles.pinned} ${styles.pn1}`}>
              <span className={styles.pin} />
              <p className={`${styles.pnTag}`}>Gather</p>
              <h3 className={styles.pnTitle}>a half-thought</h3>
              <p className={styles.pnBody}>
                the thing you said out loud that you don&apos;t want to lose.
              </p>
            </article>

            <article className={`${styles.pinned} ${styles.pn2}`}>
              <span className={`${styles.pin} ${styles.pinTeal}`} />
              <p className={`${styles.pnTag} ${styles.pnTagTeal}`}>Quote</p>
              <p className={styles.pnQuote}>
                &ldquo;Attention is the rarest &amp; purest form of
                generosity.&rdquo;
              </p>
            </article>

            <article className={`${styles.pinned} ${styles.pn3}`}>
              <span className={styles.pin} />
              <p className={styles.pnTag}>Question</p>
              <h3 className={styles.pnTitle}>
                why do ideas arrive in the shower?
              </h3>
              <p className={styles.pnBody}>
                the mind off duty is the mind that joins things.
              </p>
            </article>

            <article className={`${styles.pinned} ${styles.pn4}`}>
              <span className={`${styles.pin} ${styles.pinTeal}`} />
              <p className={`${styles.pnTag} ${styles.pnTagTeal}`}>Scrap</p>
              <h3 className={styles.pnTitle}>the project</h3>
              <p className={styles.pnBody}>
                what if these three are the same thing?
              </p>
            </article>
          </div>
        </section>

        <section className={styles.method}>
          <h2 className={styles.sectionLabel}>Three moves at the bench</h2>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.pin} />
              <p className={styles.stepNum}>01</p>
              <h3 className={styles.stepTitle}>Gather</h3>
              <p className={styles.stepBody}>
                Pin anything to the board. A quote, a screenshot, a single
                sentence. Nothing is too small to hang up.
              </p>
            </article>
            <article className={styles.step}>
              <span className={`${styles.pin} ${styles.pinTeal}`} />
              <p className={styles.stepNum}>02</p>
              <h3 className={styles.stepTitle}>Arrange</h3>
              <p className={styles.stepBody}>
                Move the pieces until something rhymes. The board holds every
                arrangement &mdash; nothing is committed until you say so.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.pin} />
              <p className={styles.stepNum}>03</p>
              <h3 className={styles.stepTitle}>String</h3>
              <p className={styles.stepBody}>
                Draw the thread between them. When the pattern holds across
                enough pins, you&apos;ve found the project.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.proof}>
          <div className={styles.proofCard}>
            <span className={styles.pin} />
            <p className={styles.quote}>
              Every finished thing started as a <b>board full of loose
              parts.</b>
            </p>
          </div>
          <p className={styles.proofAside}>
            The workshop doesn&apos;t write the book. It shows you that you
            already had the pieces &mdash; they were just waiting on different
            walls.
          </p>
        </section>

        <section className={styles.closing} id="enter">
          <h2 className={styles.closingHead}>
            Hang up your <em>first pin.</em>
          </h2>
          <a className={styles.cta} href="#enter">
            Enter the workshop <span aria-hidden>&#8594;</span>
          </a>
        </section>

        <footer className={styles.foot}>
          <span>Marginalia &mdash; a second brain</span>
          <span>Iteration 05 / 05</span>
        </footer>
      </div>
    </div>
  );
}
