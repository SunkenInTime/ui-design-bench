import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  FileText,
  Link2,
  Mic,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import styles from "./page.module.css";

const miniNotes = [
  { icon: "◐", title: "Learning to notice", meta: "Edited 2m ago" },
  { icon: "↗", title: "The slow web", meta: "3 connections" },
  { icon: "✦", title: "Ideas for spring", meta: "7 fragments" },
];

export default function QuietEditorialPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Mori home">
          <span className={styles.brandMark} aria-hidden="true">
            <Sparkles size={15} strokeWidth={1.8} />
          </span>
          <span>mori</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#features">How it works</a>
          <a href="#stories">Stories</a>
        </nav>

        <div className={styles.headerActions}>
          <a href="#product" className={styles.signIn}>
            Sign in
          </a>
          <a href="#product" className={styles.smallCta}>
            Begin for free <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Notes that think beside you
            </div>
            <h1>
              A quiet place for a <em>loud mind.</em>
            </h1>
            <p className={styles.heroText}>
              Mori gathers your notes, half-thoughts, and discoveries—then
              gently brings them back when they matter.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="#product">
                Start your second brain <ArrowRight size={17} />
              </a>
              <a className={styles.textLink} href="#stories">
                See how people use Mori
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.proof}>
              <div className={styles.avatars} aria-hidden="true">
                <span>AV</span>
                <span>MO</span>
                <span>JI</span>
              </div>
              <div>
                <div className={styles.stars}>★★★★★</div>
                <p>Loved by 18,000 curious minds</p>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} id="product">
            <div className={styles.paperHalo} aria-hidden="true" />
            <div className={styles.workspace}>
              <aside className={styles.workspaceSidebar}>
                <div className={styles.windowDots} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <button className={styles.searchButton} aria-label="Search notes">
                  <Search size={14} />
                  <span>Find anything</span>
                  <kbd>⌘ K</kbd>
                </button>
                <div className={styles.sideSection}>
                  <span className={styles.sideLabel}>Space</span>
                  <a className={styles.sideActive} href="#product">
                    <Circle size={8} fill="currentColor" /> Today
                  </a>
                  <a href="#product">
                    <FileText size={13} /> All notes
                  </a>
                  <a href="#product">
                    <Link2 size={13} /> Connections
                  </a>
                </div>
                <div className={styles.sideSection}>
                  <span className={styles.sideLabel}>Collections</span>
                  <a href="#product">
                    <span className={styles.pinkDot} /> Field notes
                  </a>
                  <a href="#product">
                    <span className={styles.blueDot} /> Reading
                  </a>
                </div>
                <button className={styles.newNote}>
                  <Plus size={14} /> New note
                </button>
              </aside>

              <div className={styles.notePanel}>
                <div className={styles.noteMeta}>
                  <span>FIELD NOTE · MAY 24</span>
                  <button aria-label="More note actions">•••</button>
                </div>
                <h2>The shape of attention</h2>
                <p>
                  Attention isn&apos;t a spotlight. It&apos;s more like water: it
                  gathers, finds paths, and changes the shape of what it touches.
                </p>
                <blockquote>
                  “What we choose to notice becomes the texture of a life.”
                </blockquote>
                <div className={styles.inlineThought}>
                  <span className={styles.thoughtIcon}>✦</span>
                  <div>
                    <strong>Mori found a connection</strong>
                    <p>Related to “Walking without headphones”</p>
                  </div>
                  <ArrowUpRight size={15} />
                </div>
                <div className={styles.noteFooter}>
                  <span>#attention</span>
                  <span>#practice</span>
                  <div className={styles.noteTools}>
                    <button aria-label="Record audio">
                      <Mic size={14} />
                    </button>
                    <button aria-label="Attach link">
                      <Link2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.floatingList}>
              <span className={styles.listLabel}>Resurfaced for you</span>
              {miniNotes.map((note) => (
                <div className={styles.miniNote} key={note.title}>
                  <span className={styles.miniIcon}>{note.icon}</span>
                  <div>
                    <strong>{note.title}</strong>
                    <small>{note.meta}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.savedToast}>
              <span>
                <Check size={12} strokeWidth={3} />
              </span>
              Thought saved
            </div>
          </div>
        </section>

        <section className={styles.manifesto} id="features">
          <div className={styles.manifestoLabel}>Built for remembering</div>
          <p>
            Your best ideas rarely arrive in order. Mori keeps the threads,
            so you can keep following your curiosity.
          </p>
          <div className={styles.features}>
            <article>
              <span>01</span>
              <h3>Capture without ceremony</h3>
              <p>Write, speak, clip, or forward. Mori makes the rest effortless.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Discover hidden threads</h3>
              <p>Related moments meet naturally, without folders or upkeep.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Remember at the right time</h3>
              <p>Your thinking returns when the context makes it useful again.</p>
            </article>
          </div>
        </section>

        <section className={styles.story} id="stories">
          <span className={styles.quoteMark}>“</span>
          <blockquote>
            Mori feels less like software and more like the desk I always
            wanted—calm, familiar, and full of useful surprises.
          </blockquote>
          <div className={styles.attribution}>
            <span className={styles.attributionAvatar}>EL</span>
            <div>
              <strong>Elena Lin</strong>
              <small>Writer &amp; researcher</small>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <span className={styles.footerMark}>✦</span>
          <strong>Keep what matters close.</strong>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>

    </div>
  );
}
