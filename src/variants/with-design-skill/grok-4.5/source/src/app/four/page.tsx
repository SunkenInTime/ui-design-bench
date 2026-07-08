import styles from "./four.module.css";

export default function FourPage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">
          Cairn
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#margins">Why margins</a>
          <a href="#start">Begin</a>
        </nav>
      </header>

      <main id="top">
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.copy}>
            <span className={styles.brandMark}>Cairn</span>
            <h1 className={styles.headline}>
              The best thinking happens in the margins.
            </h1>
            <p className={styles.lede}>
              Cairn is a second brain for people who annotate as they go —
              capturing asides, questions, and half-formed links beside the
              work itself.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#start" id="start">
                Open a blank page
              </a>
              <a className={styles.secondary} href="#margins">
                Read the idea
              </a>
            </div>
          </div>

          <div className={styles.spread} aria-hidden="true">
            <p className={styles.bodyText}>
              A second brain is not a vault of finished essays. It is the{" "}
              <span className={styles.mark}>trail of attention</span> you leave
              while reading, deciding, and changing your mind.
            </p>
            <aside className={styles.annotation}>
              return here when the launch brief feels thin
            </aside>
            <aside className={`${styles.annotation} ${styles.annotationTwo}`}>
              links to: trust timing note
            </aside>
          </div>
        </section>

        <section className={styles.section} id="margins">
          <h2 className={styles.sectionTitle}>Notes that stay beside the thought</h2>
          <p className={styles.sectionBody}>
            Highlight a line, scribble why it mattered, and Cairn keeps the
            relationship intact. Months later you don&apos;t just find the quote —
            you find the reason you cared.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>write in the margins · remember in context</footer>
    </div>
  );
}
