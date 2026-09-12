import styles from "./five.module.css";

export default function FivePage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">
          Cairn
        </a>
        <a className={styles.navCta} href="#start">
          Enter orbit
        </a>
      </header>

      <main id="top">
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.system} aria-hidden="true">
            <div className={styles.ring}>
              <span className={styles.satellite} />
            </div>
            <div className={styles.ring}>
              <span className={styles.satellite} />
            </div>
            <div className={styles.ring}>
              <span className={styles.satellite} />
            </div>
            <div className={styles.core} />
          </div>

          <div className={styles.copy}>
            <span className={styles.brandMark}>Cairn</span>
            <h1 className={styles.headline}>
              Keep every thought in orbit around what matters.
            </h1>
            <p className={styles.lede}>
              Cairn is a second brain that pulls related notes into gravity —
              so your ideas circle the questions you&apos;re actually working on,
              not a graveyard of folders.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#start" id="start">
                Launch your vault
              </a>
              <a className={styles.secondary} href="#gravity">
                How gravity works
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="gravity">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Gravity over folders</h2>
            <p className={styles.sectionBody}>
              Pin a question as your center. New notes drift toward it when
              they share language, people, or unfinished threads — and drift
              away when they don&apos;t. Your second brain stays in motion.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>thoughts in orbit</footer>
    </div>
  );
}
