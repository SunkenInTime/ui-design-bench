import {
  ArrowRight,
  Atom,
  BrainCircuit,
  Command,
  CornerDownLeft,
  FileText,
  Link,
  Menu,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import styles from "./page.module.css";

export default function NeuralNightPage() {
  return (
    <div className={styles.page}>
      <div className={styles.aurora} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Synapse home">
          <span className={styles.brandIcon}>
            <Atom size={19} />
          </span>
          <span>SYNAPSE</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#network">Network</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#security">Security</a>
        </nav>
        <div className={styles.headerActions}>
          <a href="#network">Log in</a>
          <a className={styles.accessButton} href="#network">
            Get early access <ArrowRight size={14} />
          </a>
          <button className={styles.mobileMenu} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.pill}>
            <Sparkles size={13} />
            Synapse 2.0 is now in private beta
            <span>Join →</span>
          </div>
          <h1>
            Your ideas already
            <span>know each other.</span>
          </h1>
          <p>
            Synapse is a living knowledge system that connects what you capture,
            reveals what you forgot, and thinks with you in real time.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#network">
              Build your knowledge graph <ArrowRight size={17} />
            </a>
            <a className={styles.secondaryButton} href="#intelligence">
              Watch 90 sec overview
              <span className={styles.play}>▶</span>
            </a>
          </div>

          <div className={styles.stage} id="network">
            <div className={`${styles.node} ${styles.nodeOne}`}>
              <span className={styles.nodeIcon}>✦</span>
              <strong>Creative systems</strong>
              <small>12 linked thoughts</small>
            </div>
            <div className={`${styles.node} ${styles.nodeTwo}`}>
              <span className={styles.nodeIcon}>◉</span>
              <strong>Attention &amp; craft</strong>
              <small>8 linked thoughts</small>
            </div>
            <div className={`${styles.node} ${styles.nodeThree}`}>
              <span className={styles.nodeIcon}>↗</span>
              <strong>Future of work</strong>
              <small>21 linked thoughts</small>
            </div>
            <svg
              className={styles.connections}
              viewBox="0 0 1000 500"
              aria-hidden="true"
            >
              <path d="M120 180 C 250 130, 260 270, 400 230" />
              <path d="M400 230 C 540 160, 620 120, 790 165" />
              <path d="M400 230 C 520 310, 660 320, 865 355" />
              <path d="M120 180 C 210 330, 260 390, 430 410" />
              <circle cx="120" cy="180" r="4" />
              <circle cx="400" cy="230" r="4" />
              <circle cx="790" cy="165" r="4" />
              <circle cx="865" cy="355" r="4" />
            </svg>

            <div className={styles.appWindow}>
              <aside className={styles.sidebar}>
                <div className={styles.trafficLights} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.profile}>
                  <span>SL</span>
                  <div>
                    <strong>Shawn&apos;s mind</strong>
                    <small>2,418 thoughts</small>
                  </div>
                </div>
                <button className={styles.quickFind}>
                  <Search size={13} />
                  <span>Quick find</span>
                  <kbd>⌘K</kbd>
                </button>
                <div className={styles.sidebarLinks}>
                  <a className={styles.activeLink} href="#network">
                    <BrainCircuit size={14} /> Graph
                  </a>
                  <a href="#network">
                    <FileText size={14} /> Notes
                  </a>
                  <a href="#network">
                    <Link size={14} /> Sources
                  </a>
                </div>
                <div className={styles.graphLegend}>
                  <span>GRAPH ACTIVITY</span>
                  <div className={styles.activityBars} aria-hidden="true">
                    {[2, 5, 4, 8, 6, 10, 7, 12, 9, 13, 8, 11].map(
                      (height, index) => (
                        <i key={index} style={{ height: `${height}px` }} />
                      ),
                    )}
                  </div>
                  <small>+38 connections this week</small>
                </div>
                <button className={styles.newThought}>
                  <Plus size={14} /> New thought
                </button>
              </aside>

              <div className={styles.canvas}>
                <div className={styles.canvasTopbar}>
                  <div>
                    <strong>Knowledge graph</strong>
                    <span>Live view</span>
                  </div>
                  <button aria-label="Open command menu">
                    <Command size={13} />
                  </button>
                </div>
                <div className={styles.graph} aria-label="Connected note graph">
                  <svg viewBox="0 0 620 330" aria-hidden="true">
                    <path d="M290 160L130 75M290 160L475 65M290 160L515 225M290 160L150 260M130 75L70 190M475 65L560 135M150 260L70 190M515 225L560 135" />
                  </svg>
                  <span className={`${styles.graphNode} ${styles.graphNodeCenter}`}>
                    <i /> Creative systems
                  </span>
                  <span className={`${styles.graphNode} ${styles.graphNodeA}`}>Atomic habits</span>
                  <span className={`${styles.graphNode} ${styles.graphNodeB}`}>Studio notes</span>
                  <span className={`${styles.graphNode} ${styles.graphNodeC}`}>Deep work</span>
                  <span className={`${styles.graphNode} ${styles.graphNodeD}`}>Idea compost</span>
                  <span className={`${styles.graphDot} ${styles.dotA}`} />
                  <span className={`${styles.graphDot} ${styles.dotB}`} />
                </div>
              </div>
            </div>

            <div className={styles.askPanel}>
              <div className={styles.askHeader}>
                <span>
                  <Sparkles size={13} /> Ask your mind
                </span>
                <small>⌘ /</small>
              </div>
              <p>How do my notes on attention relate to creative work?</p>
              <div className={styles.answerPreview}>
                <span className={styles.typingDot} />
                <span className={styles.answerLine} />
                <span className={styles.answerLine} />
                <span className={styles.answerLineShort} />
              </div>
              <button aria-label="Submit question">
                <CornerDownLeft size={13} />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.signalStrip}>
          <p>Used daily by minds at</p>
          <div>
            <span>ARC’TERYX</span>
            <span>NOTION</span>
            <span>IDEO</span>
            <span>LINEAR</span>
            <span>NASA</span>
          </div>
        </section>

        <section className={styles.intelligence} id="intelligence">
          <div className={styles.sectionIntro}>
            <span>INTELLIGENCE, NOT AUTOMATION</span>
            <h2>A mind that gets more useful the more you use it.</h2>
          </div>
          <div className={styles.capabilityGrid}>
            <article>
              <div className={styles.cardOrb}>01</div>
              <h3>Connects in the background</h3>
              <p>
                Every note joins a living map of meaning—without tags, folders,
                or maintenance.
              </p>
              <div className={styles.cardVisualOne} aria-hidden="true">
                <i />
                <i />
                <i />
                <span />
              </div>
            </article>
            <article>
              <div className={styles.cardOrb}>02</div>
              <h3>Answers from your world</h3>
              <p>
                Ask questions and get grounded answers drawn only from what
                you&apos;ve learned and saved.
              </p>
              <div className={styles.cardVisualTwo}>
                <Sparkles size={14} />
                <span>What patterns keep showing up?</span>
              </div>
            </article>
            <article id="security">
              <div className={styles.cardOrb}>03</div>
              <h3>Private by architecture</h3>
              <p>
                Your mind is yours. End-to-end encryption keeps every thought
                unreadable to everyone else.
              </p>
              <div className={styles.encryption}>
                <span>LOCAL</span>
                <div>••••••••••••••</div>
                <span>YOURS</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <Atom size={22} />
          <span>SYNAPSE</span>
        </div>
        <p>Make your mind visible.</p>
        <a href="#top">RETURN TO SIGNAL ↑</a>
      </footer>

    </div>
  );
}
