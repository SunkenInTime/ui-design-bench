import styles from "./two.module.css";

export default function TwoPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.museumName}>Municipal collection of thought</p>
          <h1>Cabinet 14 · Living notes</h1>
        </div>
        <button type="button" className={styles.cta}>
          Start writing
        </button>
      </header>

      <main>
        <section className={styles.hero}>
          <div>
            <span className={styles.tape}>Loci cognoscens · Golgi–Cox stain</span>
            <h2 className={styles.headline}>Your thinking, prepared as a specimen.</h2>
            <p className={styles.lede}>
              Loci keeps notes the way a neuron keeps a life: a cell body, then
              branches. Capture a thought before it oxidizes. Link it, and a
              dendrite appears.
            </p>
          </div>

          <div className={styles.jarStage}>
            <div className={styles.jar} aria-hidden="true">
              <span className={styles.lid} />
              <span className={styles.shine} />
              <svg className={styles.neuron} viewBox="0 0 200 240">
                <path
                  className={styles.nerve}
                  pathLength={1}
                  d="M100 118 C92 96 70 88 52 70 C40 58 38 40 44 28"
                />
                <path
                  className={styles.nerve}
                  pathLength={1}
                  d="M100 118 C110 90 138 86 158 64 C170 50 168 34 150 24"
                />
                <path
                  className={styles.nerve}
                  pathLength={1}
                  d="M100 118 C78 130 54 128 34 146 C20 160 22 184 40 196"
                />
                <path
                  className={styles.nerve}
                  pathLength={1}
                  d="M100 118 C122 140 150 138 170 160 C186 178 178 204 156 214"
                />
                <path
                  className={styles.nerve}
                  pathLength={1}
                  d="M100 126 C100 160 96 190 100 226"
                />
                <circle className={styles.soma} cx="100" cy="118" r="11" />
                <text className={styles.bud} x="18" y="26">
                  hallway talk
                </text>
                <text className={styles.bud} x="112" y="22">
                  the essay
                </text>
                <text className={styles.bud} x="6" y="212">
                  recipe as graph
                </text>
                <text className={styles.bud} x="112" y="228">
                  March 3 still
                </text>
              </svg>
              <span className={styles.accession}>
                Acc. 2026.08.12
                <br />
                Private collection
              </span>
            </div>
          </div>
        </section>

        <section className={styles.drawers} aria-label="How Loci grows">
          <article className={styles.drawer}>
            <p className={styles.latin}>Fixative</p>
            <h2>Capture</h2>
            <p>
              Get the thought into the jar while it still has shape. A sentence
              is enough. Date and place cling to it on their own.
            </p>
          </article>
          <article className={styles.drawer}>
            <p className={styles.latin}>Stain</p>
            <h2>Link</h2>
            <p>
              Silver only some of the cells, the way Golgi did. A few honest
              links make the structure visible. Folders hide it.
            </p>
          </article>
          <article className={styles.drawer}>
            <p className={styles.latin}>Recall</p>
            <h2>See the tree</h2>
            <p>
              Later you do not search a pile. You follow a branch back to the
              body of the idea.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
