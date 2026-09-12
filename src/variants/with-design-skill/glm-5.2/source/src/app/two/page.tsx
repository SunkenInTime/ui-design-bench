import type { Metadata } from "next";
import styles from "./two.module.css";

export const metadata: Metadata = {
  title: "The Graph",
  description:
    "Your knowledge grows into a living graph you navigate by association, not by whichever folder you last remembered to use.",
};

export default function GraphPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.brand}>
            <svg className={styles.glyph} viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="3.2" fill="#f0b23c" />
              <circle cx="4" cy="6" r="1.8" fill="#4fd1c5" />
              <circle cx="20" cy="7" r="1.8" fill="#4fd1c5" />
              <circle cx="5" cy="19" r="1.8" fill="#4fd1c5" />
              <line x1="12" y1="12" x2="4" y2="6" stroke="#4fd1c5" strokeWidth="1" />
              <line x1="12" y1="12" x2="20" y2="7" stroke="#4fd1c5" strokeWidth="1" />
              <line x1="12" y1="12" x2="5" y2="19" stroke="#4fd1c5" strokeWidth="1" />
            </svg>
            Marginalia
          </div>
          <div className={styles.topMeta}>
            nodes <b>1,204</b> &nbsp; edges <b>3,886</b>
          </div>
        </header>

        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Thought, as a network</p>
            <h1 className={styles.headline}>
              Your ideas aren&apos;t a list.
              <br />
              <span className={styles.dim}>They&apos;re a</span>{" "}
              <em>constellation.</em>
            </h1>
            <p className={styles.sub}>
              Marginalia links every note to every other. Your knowledge grows
              into a living graph you navigate by association &mdash; not by
              whichever folder you last remembered to use.
            </p>
            <a className={styles.cta} href="#enter">
              See your graph <span aria-hidden>&#8594;</span>
            </a>
          </div>

          <div className={styles.graph} aria-hidden>
            <svg viewBox="0 0 600 520">
              {/* edges */}
              <line className={styles.edge} x1="320" y1="250" x2="180" y2="130" />
              <line className={styles.edge} x1="320" y1="250" x2="480" y2="150" />
              <line className={styles.edgeHot} x1="320" y1="250" x2="120" y2="320" />
              <line className={styles.edge} x1="320" y1="250" x2="470" y2="360" />
              <line className={styles.edge} x1="320" y1="250" x2="300" y2="430" />
              <line className={styles.edge} x1="480" y1="150" x2="560" y2="270" />
              <line className={styles.edge} x1="470" y1="360" x2="560" y2="270" />
              <line className={styles.edge} x1="300" y1="430" x2="470" y2="360" />
              <line className={styles.edge} x1="120" y1="320" x2="60" y2="200" />
              <line className={styles.edge} x1="180" y1="130" x2="60" y2="200" />
              <line className={styles.edge} x1="300" y1="430" x2="150" y2="450" />

              {/* nodes */}
              <circle className={styles.node} cx="60" cy="200" r="6" />
              <circle className={styles.node} cx="180" cy="130" r="7" />
              <circle className={styles.node} cx="480" cy="150" r="7" />
              <circle className={styles.node} cx="120" cy="320" r="8" />
              <circle className={styles.node} cx="470" cy="360" r="7" />
              <circle className={styles.node} cx="300" cy="430" r="7" />
              <circle className={styles.nodeDim} cx="560" cy="270" r="5" />
              <circle className={styles.nodeDim} cx="150" cy="450" r="5" />
              <circle className={styles.nodeHot} cx="320" cy="250" r="11" />

              {/* labels */}
              <text className={styles.nodeLabel} x="332" y="240">
                attention
              </text>
              <text className={styles.nodeLabel} x="135" y="248">
                context
              </text>
              <text className={styles.nodeLabel} x="150" y="120">
                focus
              </text>
              <text className={styles.nodeLabel} x="452" y="140">
                memory
              </text>
              <text className={styles.nodeLabel} x="442" y="382">
                recall
              </text>
              <text className={styles.nodeLabel} x="270" y="452">
                linking
              </text>
              <text className={styles.nodeLabel} x="530" y="262">
                surface
              </text>
              <text className={styles.nodeLabel} x="36" y="190">
                capture
              </text>
              <text
                className={`${styles.nodeLabel} ${styles.nodeLabelHot}`}
                x="336"
                y="272"
              >
                42 links
              </text>
            </svg>
            <div className={styles.graphReadout}>
              <b>graph://attention</b>
              <br />
              42 backlinks &middot; 11 clusters &middot; live
            </div>
          </div>
        </section>

        <section className={styles.method}>
          <h2 className={styles.sectionLabel}>How the graph grows</h2>
          <div className={styles.steps}>
            <article className={styles.step}>
              <p className={styles.stepCoord}>[ 01 / capture ]</p>
              <h3 className={styles.stepTitle}>Capture</h3>
              <p className={styles.stepBody}>
                A note takes seconds. Tags and links are optional &mdash; the
                graph grows either way. Nothing you write is ever lost to a
                folder.
              </p>
            </article>
            <article className={styles.step}>
              <p className={styles.stepCoord}>[ 02 / link ]</p>
              <h3 className={styles.stepTitle}>Link</h3>
              <p className={styles.stepBody}>
                Type [[ and connect. Backlinks form on their own, in both
                directions, so every note knows what points at it.
              </p>
            </article>
            <article className={styles.step}>
              <p className={styles.stepCoord}>[ 03 / traverse ]</p>
              <h3 className={styles.stepTitle}>Traverse</h3>
              <p className={styles.stepBody}>
                Follow a thought across hundreds of notes without losing the
                thread. The graph is a map of your own mind, drawn as you go.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.proof}>
          <p className={styles.stat}>
            400<span className={styles.dim}>x</span>
          </p>
          <p className={styles.statCap}>
            One note, forty links, <b>four hundred paths</b> back to it. The
            graph compounds while you sleep &mdash; the more you add, the more
            every old note is worth.
          </p>
        </section>

        <section className={styles.closing} id="enter">
          <h2 className={styles.closingHead}>
            Stop filing. <em>Start connecting.</em>
          </h2>
          <a className={styles.cta} href="#enter">
            Enter the graph <span aria-hidden>&#8594;</span>
          </a>
        </section>

        <footer className={styles.foot}>
          <span>Marginalia &mdash; a second brain</span>
          <span>Iteration 02 / 05</span>
        </footer>
      </div>
    </div>
  );
}
