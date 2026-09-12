import styles from "./three.module.css";

export default function ThreePage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">
          Cairn
        </a>
        <a className={styles.navCta} href="#start">
          Grow your network
        </a>
      </header>

      <main id="top">
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.network} aria-hidden="true">
            <span className={styles.node} />
            <span className={styles.node} />
            <span className={styles.node} />
            <span className={styles.node} />
            <span className={styles.node} />
            <span className={styles.filament} />
            <span className={styles.filament} />
            <span className={styles.filament} />
            <span className={styles.filament} />
          </div>

          <div className={styles.copy}>
            <span className={styles.brandMark}>Cairn</span>
            <h1 className={styles.headline}>
              Ideas connect underground before you notice.
            </h1>
            <p className={styles.lede}>
              Your second brain shouldn&apos;t be a filing cabinet. Cairn grows
              quiet links between notes — a living network that surfaces the
              thought you need when a new one arrives.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#start" id="start">
                Plant a note
              </a>
              <a className={styles.secondary} href="#network">
                How links form
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="network">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Mycelial memory</h2>
            <p className={styles.sectionBody}>
              Write freely. Cairn listens for shared language, recurring
              questions, and unfinished threads — then draws hyphae between
              them so your knowledge composts into something usable.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>notes as living matter</footer>
    </div>
  );
}
