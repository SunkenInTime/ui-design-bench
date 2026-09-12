import type { Metadata } from "next";
import styles from "./four.module.css";

export const metadata: Metadata = {
  title: "Subconscious",
  description:
    "Offload your mind. Pour in everything; the connections surface on their own, quietly, while you rest.",
};

export default function SubconsciousPage() {
  return (
    <div className={styles.page}>
      <div className={styles.aurora} aria-hidden>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <div className={styles.stars} aria-hidden>
        <span className={styles.star} style={{ left: "44%", top: "16%" }} />
        <span className={styles.star} />
        <span className={styles.star} />
        <span className={styles.star} />
        <span className={styles.star} />
        <span className={styles.star} />
        <span className={styles.star} />
      </div>

      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.brand}>
            Marginal<b>i</b>a
          </div>
          <div className={styles.topMeta}>iv &middot; the mind at rest</div>
        </header>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>the mind at rest</p>
          <h1 className={styles.headline}>
            Offload your mind.
            <br />
            Let it work <em>in the dark.</em>
          </h1>
          <p className={styles.sub}>
            Marginalia holds everything you can&apos;t keep in your head. Pour
            in the half-thoughts, the questions, the loose ends. The
            connections surface on their own, quietly, while you rest.
          </p>
          <a className={styles.cta} href="#rest">
            Rest your mind <span aria-hidden>&#8594;</span>
          </a>
        </section>

        <section className={styles.method}>
          <h2 className={styles.sectionLabel}>three quiet movements</h2>
          <div className={styles.movements}>
            <article className={styles.movement}>
              <div className={styles.movementText}>
                <h3 className={styles.movementTitle}>Pour</h3>
                <p className={styles.movementBody}>
                  Empty the working memory. Anything on your mind goes in,
                  unsorted, unedited &mdash; the act of writing it down is the
                  whole point.
                </p>
              </div>
              <div className={styles.movementNum}>i</div>
            </article>
            <article className={styles.movement}>
              <div className={styles.movementText}>
                <h3 className={styles.movementTitle}>Settle</h3>
                <p className={styles.movementBody}>
                  Leave it. Notes find their neighbors over time, without
                  effort on your part &mdash; the way a dream arranges the
                  day while you sleep.
                </p>
              </div>
              <div className={styles.movementNum}>ii</div>
            </article>
            <article className={styles.movement}>
              <div className={styles.movementText}>
                <h3 className={styles.movementTitle}>Surface</h3>
                <p className={styles.movementBody}>
                  Return to find the connection that was forming all along. You
                  don&apos;t retrieve it. You recognize it, already made.
                </p>
              </div>
              <div className={styles.movementNum}>iii</div>
            </article>
          </div>
        </section>

        <section className={styles.proof}>
          <p className={styles.quote}>
            The mind that forgets nothing cannot <b>rest.</b> A second brain
            remembers, so the first can sleep.
          </p>
          <p className={styles.cite}>a note, found already written</p>
        </section>

        <section className={styles.closing} id="rest">
          <h2 className={styles.closingHead}>
            Close your eyes. <em>It&apos;s kept.</em>
          </h2>
          <a className={styles.cta} href="#rest">
            Rest your mind <span aria-hidden>&#8594;</span>
          </a>
        </section>

        <footer className={styles.foot}>
          <span>Marginalia &mdash; a second brain</span>
          <span>Iteration 04 / 05</span>
        </footer>
      </div>
    </div>
  );
}
