import styles from "./one.module.css";

export default function OnePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Hero" id="top">
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualSky} />
          <div className={`${styles.ridge} ${styles.ridgeFar}`} />
          <div className={styles.ridge} />
          <div className={styles.cairn}>
            <span className={styles.stone} />
            <span className={styles.stone} />
            <span className={styles.stone} />
            <span className={styles.stone} />
            <span className={styles.stone} />
          </div>
          <div className={styles.mistLayer} />
        </div>

        <header className={styles.nav}>
          <a className={styles.brand} href="#top">
            Cairn
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#how">How it works</a>
            <a className={styles.navCta} href="#start">
              Start free
            </a>
          </nav>
        </header>

        <div className={styles.copy}>
          <span className={styles.brandMark}>Cairn</span>
          <h1 className={styles.headline}>
            Leave markers for the thoughts you&apos;ll need later.
          </h1>
          <p className={styles.lede}>
            A second brain that stacks ideas the way hikers stack stones —
            so you can find your way back when the path gets foggy.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#start" id="start">
              Build your trail
            </a>
            <a className={styles.secondary} href="#how">
              See how notes return
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.section} id="how">
          <div className={styles.sectionNarrow}>
            <h2 className={styles.sectionTitle}>Capture once. Return often.</h2>
            <p className={styles.sectionBody}>
              Cairn keeps every note as a marker on a living trail — linked by
              place, time, and the questions you were asking when you wrote it.
            </p>
          </div>
        </section>

        <section className={styles.trail} aria-label="How Cairn works">
          <article className={styles.trailItem}>
            <span className={styles.trailLabel}>Drop a stone</span>
            <h3>Write the thought before it vanishes</h3>
            <p>
              Quick capture from anywhere. No folders to invent first — just
              leave the idea where you are.
            </p>
          </article>
          <article className={styles.trailItem}>
            <span className={styles.trailLabel}>Watch the stack grow</span>
            <h3>Related notes gather on their own</h3>
            <p>
              Cairn notices echoes across your writing and stacks related
              markers so themes become visible.
            </p>
          </article>
          <article className={styles.trailItem}>
            <span className={styles.trailLabel}>Follow the trail back</span>
            <h3>Find the path when you need it</h3>
            <p>
              Search by feeling, unfinished question, or half-remembered phrase
              — and walk the trail your past self left.
            </p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        Cairn keeps your thinking findable.
      </footer>
    </div>
  );
}
