import {
  ArrowDownRight,
  ArrowRight,
  Asterisk,
  Blocks,
  Check,
  CircleDot,
  Command,
  CornerDownLeft,
  FileText,
  Hash,
  Menu,
  Plus,
  Search,
  Zap,
} from "lucide-react";
import styles from "./page.module.css";

const recentNotes = [
  ["THE WEB IS A PLACE", "ESSAY", "12:48"],
  ["COMPOSTING IDEAS", "THOUGHT", "09:31"],
  ["TOOLS FOR THINKING", "RESEARCH", "YESTERDAY"],
];

export default function MindOperatingSystemPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Mind OS home">
          <span>MIND</span><i>{"//"}</i><span>OS</span>
        </a>
        <div className={styles.version}>V.04 / PERSONAL INTELLIGENCE</div>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#system">SYSTEM</a>
          <a href="#modules">MODULES</a>
          <a href="#pricing">PRICING</a>
          <a className={styles.launch} href="#system">LAUNCH OS <ArrowDownRight size={15} /></a>
        </nav>
        <button className={styles.menu} aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroTopline}>
            <span>KNOWLEDGE SOFTWARE FOR HUMAN BRAINS</span>
            <span>[ NO. 04 / 05 ]</span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                STOP
                <span>ORGANIZING.</span>
                START
                <em>CONNECTING.</em>
              </h1>
              <div className={styles.heroFooter}>
                <p>
                  MIND//OS TURNS SCATTERED NOTES INTO AN ACTIVE NETWORK OF
                  IDEAS. CAPTURE FAST. CONNECT AUTOMATICALLY. THINK FORWARD.
                </p>
                <a href="#system">INSTALL YOUR SECOND BRAIN <ArrowRight size={19} /></a>
              </div>
            </div>

            <div className={styles.systemPreview} id="system">
              <div className={styles.previewHeader}>
                <div className={styles.previewBrand}><Asterisk size={18} /> MIND//OS</div>
                <div>WORKSPACE_01</div>
                <div className={styles.status}><i /> SYSTEM ONLINE</div>
              </div>
              <div className={styles.previewBody}>
                <aside className={styles.sidebar}>
                  <button className={styles.search}><Search size={14} /><span>SEARCH</span><kbd>⌘K</kbd></button>
                  <div className={styles.sideLinks}>
                    <a className={styles.sideActive} href="#system"><Blocks size={14} /> NETWORK <span>142</span></a>
                    <a href="#system"><FileText size={14} /> NOTES <span>819</span></a>
                    <a href="#system"><Hash size={14} /> TOPICS <span>26</span></a>
                  </div>
                  <div className={styles.todayPanel}>
                    <span>TODAY / 024</span>
                    <strong>7</strong>
                    <small>IDEAS CAPTURED</small>
                  </div>
                  <button className={styles.capture}><Plus size={14} /> CAPTURE</button>
                </aside>
                <div className={styles.dashboard}>
                  <div className={styles.dashboardTop}>
                    <div><span>ACTIVE NETWORK</span><strong>THINKING SPACE</strong></div>
                    <button aria-label="Open commands"><Command size={15} /></button>
                  </div>
                  <div className={styles.networkCanvas}>
                    <svg viewBox="0 0 550 280" aria-hidden="true">
                      <path d="M274 139L99 64M274 139L470 58M274 139L443 228M274 139L110 225M99 64L42 140M470 58L518 152M443 228L518 152M110 225L42 140" />
                    </svg>
                    <span className={`${styles.netNode} ${styles.netCenter}`}>TOOLS FOR THOUGHT</span>
                    <span className={`${styles.netNode} ${styles.netA}`}>MEMORY</span>
                    <span className={`${styles.netNode} ${styles.netB}`}>CRAFT</span>
                    <span className={`${styles.netNode} ${styles.netC}`}>SYSTEMS</span>
                    <span className={`${styles.netNode} ${styles.netD}`}>ATTENTION</span>
                    <i className={`${styles.netDot} ${styles.netDotA}`} />
                    <i className={`${styles.netDot} ${styles.netDotB}`} />
                  </div>
                  <div className={styles.insightBar}>
                    <Zap size={14} fill="currentColor" />
                    <div><span>NEW CONNECTION DETECTED</span><strong>ATTENTION ↔ CREATIVE SYSTEMS</strong></div>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <div className={styles.previewFooter}>
                <span>819 NOTES</span><span>1,340 LINKS</span><span>26 ACTIVE TOPICS</span><span>SYNCED 00:01 AGO</span>
              </div>
            </div>
          </div>
          <div className={styles.marquee} aria-hidden="true">
            <span>MIND IS NOT A FOLDER</span><Asterisk /><span>MIND IS NOT A FOLDER</span><Asterisk /><span>MIND IS NOT A FOLDER</span>
          </div>
        </section>

        <section className={styles.problem}>
          <div className={styles.problemLabel}>[ THE PROBLEM ]</div>
          <div className={styles.problemStatement}>
            <h2>YOU DON&apos;T NEED MORE NOTES.</h2>
            <p>YOU NEED YOUR NOTES TO <span>DO SOMETHING.</span></p>
          </div>
          <div className={styles.problemIndex}>001—003</div>
        </section>

        <section className={styles.modules} id="modules">
          <div className={styles.modulesHeader}>
            <span>CORE MODULES</span>
            <span>EVERYTHING REQUIRED. NOTHING ELSE.</span>
          </div>
          <article>
            <div className={styles.moduleNumber}>01</div>
            <div className={styles.moduleIcon}><CornerDownLeft size={32} /></div>
            <div className={styles.moduleCopy}><span>INBOX_</span><h3>CAPTURE AT THE SPEED OF THOUGHT.</h3></div>
            <p>TEXT. VOICE. LINKS. IMAGES. THROW IT IN. THE SYSTEM HANDLES STRUCTURE.</p>
            <ArrowDownRight className={styles.moduleArrow} size={26} />
          </article>
          <article>
            <div className={styles.moduleNumber}>02</div>
            <div className={styles.moduleIcon}><CircleDot size={32} /></div>
            <div className={styles.moduleCopy}><span>GRAPH_</span><h3>CONNECTIONS, WITHOUT THE ADMIN.</h3></div>
            <p>SEMANTIC LINKS FORM IN REAL TIME. YOUR KNOWLEDGE MAP BUILDS ITSELF.</p>
            <ArrowDownRight className={styles.moduleArrow} size={26} />
          </article>
          <article>
            <div className={styles.moduleNumber}>03</div>
            <div className={styles.moduleIcon}><Zap size={32} /></div>
            <div className={styles.moduleCopy}><span>RECALL_</span><h3>THE RIGHT IDEA. RIGHT ON TIME.</h3></div>
            <p>CONTEXT-AWARE RECALL SURFACES WHAT YOU KNEW BEFORE YOU NEED TO SEARCH.</p>
            <ArrowDownRight className={styles.moduleArrow} size={26} />
          </article>
        </section>

        <section className={styles.liveDemo}>
          <div className={styles.demoLabel}>
            <span>LIVE MEMORY FEED</span><i />
          </div>
          <div className={styles.noteFeed}>
            {recentNotes.map(([title, type, time], index) => (
              <div className={styles.feedRow} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <em>{type}</em>
                <small>{time}</small>
              </div>
            ))}
          </div>
          <div className={styles.commandBox}>
            <div><Asterisk size={16} /><span>ASK MIND//OS</span></div>
            <p>“WHAT HAVE I LEARNED ABOUT BUILDING BETTER CREATIVE SYSTEMS?”</p>
            <button aria-label="Ask Mind OS"><CornerDownLeft size={17} /></button>
          </div>
        </section>

        <section className={styles.pricing} id="pricing">
          <div className={styles.priceCopy}>
            <span>ONE MIND. ONE PLAN.</span>
            <h2>YOUR BRAIN,<br />UPGRADED.</h2>
          </div>
          <div className={styles.priceCard}>
            <div className={styles.priceTop}><span>PERSONAL OS</span><span>MONTHLY</span></div>
            <div className={styles.price}><sup>$</sup>12<small>/MONTH</small></div>
            <ul>
              <li><Check size={15} /> UNLIMITED NOTES</li>
              <li><Check size={15} /> AUTOMATIC CONNECTIONS</li>
              <li><Check size={15} /> PERSONAL AI RECALL</li>
              <li><Check size={15} /> LOCAL-FIRST ENCRYPTION</li>
            </ul>
            <a href="#top">BOOT YOUR SYSTEM <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <strong>MIND//OS</strong>
        <span>©2026 PERSONAL INTELLIGENCE SYSTEMS</span>
        <a href="#top">TOP_↑</a>
      </footer>

    </div>
  );
}
