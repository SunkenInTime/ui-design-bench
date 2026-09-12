import styles from "./two.module.css";

export default function TwoPage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">
          Cairn
        </a>
        <div className={styles.navMeta}>
          <span>v0.9 · local-first</span>
          <a href="#start">open app</a>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero} aria-label="Hero">
          <p className={styles.brandHero}>Cairn</p>
          <h1 className={styles.headline}>
            Your second brain starts as a blinking cursor.
          </h1>
          <p className={styles.lede}>
            Capture the line. Link it later. Cairn turns the notes you already
            write into a trail you can search by thought, not by folder.
          </p>

          <div className={styles.editor} aria-label="Sample note capture">
            <div className={styles.gutter} aria-hidden="true">
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
            </div>
            <div className={styles.editorBody}>
              <span className={styles.lineMuted}># meeting residue</span>
              {"\n"}
              the pricing objection wasn&apos;t price — it was trust timing
              <span className={styles.caret} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.actions}>
            <a className={styles.primary} href="#start" id="start">
              Start writing
            </a>
            <a className={styles.ghost} href="#commands">
              View capture keys
            </a>
          </div>
        </section>

        <section className={styles.section} id="commands">
          <h2 className={styles.sectionTitle}>Stay in the line</h2>
          <p className={styles.sectionBody}>
            Cairn is built for people who think in sentences. Keep typing; the
            structure arrives when you need it.
          </p>
          <div className={styles.commands}>
            <div className={styles.command}>
              <kbd>⌘ ↵</kbd>
              <p>Save the current thought and open a fresh line.</p>
            </div>
            <div className={styles.command}>
              <kbd>[[</kbd>
              <p>Link to another note the moment a connection appears.</p>
            </div>
            <div className={styles.command}>
              <kbd>⌘ K</kbd>
              <p>Jump to any marker by half-remembered wording.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>plain text in · connected thoughts out</footer>
    </div>
  );
}
