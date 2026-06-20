import type { Metadata } from "next";
import styles from "./one.module.css";

export const metadata: Metadata = {
  title: "Slip Box",
  description:
    "A digital slip-box. Capture thoughts as atomic notes, link them, and let the box connect what your memory can't.",
};

export default function SlipBoxPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.brand}>
            Marginal<b>i</b>a
          </div>
          <div className={styles.topMeta}>No. 01 — The Slip-Box</div>
        </header>

        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>A second brain, the old way</p>
            <h1 className={styles.headline}>
              Every idea you&apos;ve ever had,
              <br />
              on a <em>card</em>.
            </h1>
            <p className={styles.sub}>
              Marginalia is a digital slip-box. Write thoughts as atomic notes,
              drop them in the box, and let the links do the remembering. Your
              mind stays free for the thinking.
            </p>
            <a className={styles.cta} href="#open">
              Start your slip-box <span aria-hidden>&#8594;</span>
            </a>
          </div>

          <div className={styles.stack} aria-hidden>
            <article className={`${styles.card} ${styles.card1}`}>
              <span className={styles.cardNum}>0142</span>
              <p className={styles.cardTag}>Fleeting — 03 Mar</p>
              <h3 className={styles.cardTitle}>attention as a budget</h3>
              <p className={styles.cardBody}>
                what if focus isn&apos;t a state but a currency you spend? link
                to the willpower note &amp; the cost-of-context note.
              </p>
            </article>
            <article className={`${styles.card} ${styles.card2}`}>
              <span className={styles.cardNum}>0141</span>
              <p className={styles.cardTag}>Reference</p>
              <h3 className={styles.cardTitle}>cost of context</h3>
              <p className={styles.cardBody}>
                switching tasks leaves residue. the previous task keeps a share
                of attention for ~15 min.
              </p>
            </article>
            <article className={`${styles.card} ${styles.card3}`}>
              <span className={styles.cardNum}>0143</span>
              <p className={styles.cardTag}>Permanent</p>
              <h3 className={styles.cardTitle}>A note is a question</h3>
              <p className={styles.cardBody}>
                The best notes don&apos;t answer things. They hold a question
                open long enough for the next idea to land in it.
              </p>
              <p className={styles.cardLinks}>
                <span>links:</span> 0142 attention as a budget
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>0089 willpower
                as fuel
              </p>
            </article>
          </div>
        </section>

        <section className={styles.method}>
          <h2 className={styles.sectionLabel}>The method, in three cards</h2>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.stepTitle}>Fleeting</h3>
              <p className={styles.stepBody}>
                Catch the thought before it leaves. A scratch note, undated,
                unpolished &mdash; good enough to recognize later is enough.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.stepTitle}>Permanent</h3>
              <p className={styles.stepBody}>
                Rewrite it in your own words. One idea per card, self-contained,
                so it still makes sense a year from now.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <h3 className={styles.stepTitle}>Connect</h3>
              <p className={styles.stepBody}>
                Link it to what you already know. The box finds the patterns
                you&apos;d forget &mdash; that&apos;s the whole point.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.proof}>
          <div className={styles.quoteCard}>
            <p className={styles.quote}>
              Niklas Luhmann wrote <b>90,000 cards</b> in a wooden box and
              published 70 books. The system, not the genius, did the work.
            </p>
            <p className={styles.cite}>From the slip-box, 1952&ndash;1998</p>
          </div>
        </section>

        <section className={styles.closing} id="open">
          <h2 className={styles.closingHead}>
            Open the box. <em>Leave the remembering to it.</em>
          </h2>
          <a className={styles.cta} href="#open">
            Start your slip-box <span aria-hidden>&#8594;</span>
          </a>
        </section>

        <footer className={styles.foot}>
          <span>Marginalia &mdash; a second brain</span>
          <span>Iteration 01 / 05</span>
        </footer>
      </div>
    </div>
  );
}
