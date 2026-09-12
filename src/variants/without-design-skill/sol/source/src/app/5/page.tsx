import {
  ArrowRight,
  AudioLines,
  Brain,
  CalendarDays,
  Check,
  ChevronRight,
  CircleUserRound,
  Clock3,
  FileText,
  Globe2,
  Image as ImageIcon,
  Link2,
  Menu,
  MessageCircleMore,
  Mic,
  Plus,
  Search,
  Sparkle,
  Sparkles,
} from "lucide-react";
import styles from "./page.module.css";

export default function CalmSpatialPage() {
  return (
    <div className={styles.page}>
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Luma home">
          <span className={styles.logo}><Sparkle size={17} fill="currentColor" /></span>
          <span>luma</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#memory">Memory</a>
          <a href="#flow">Flow</a>
          <a href="#privacy">Privacy</a>
          <a href="#stories">Stories</a>
        </nav>
        <div className={styles.headerActions}>
          <a href="#memory">Sign in</a>
          <a className={styles.headerCta} href="#memory">Try Luma free <ArrowRight size={14} /></a>
          <button className={styles.menu} aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.announcement}>
            <span><Sparkles size={13} /></span>
            Meet Luma Recall—your memory, right when you need it
            <ChevronRight size={13} />
          </div>
          <h1>
            Remember anything.
            <span>Become everything.</span>
          </h1>
          <p>
            Luma is a private space for your notes, ideas, and memories—gently
            connected by intelligence that feels like your own.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#memory">Create your space <ArrowRight size={16} /></a>
            <a className={styles.demoLink} href="#flow"><span>▶</span> See Luma in 60 seconds</a>
          </div>
          <div className={styles.trustLine}>
            <div className={styles.faces}><span>AK</span><span>JR</span><span>NM</span><span>+</span></div>
            <span>Trusted by 32,000 thoughtful people</span>
            <i />
            <span>Private by default</span>
          </div>

          <div className={styles.productStage} id="memory">
            <div className={styles.orbit} aria-hidden="true">
              <i /><i /><i /><i />
            </div>
            <div className={styles.memoryChip + " " + styles.chipOne}>
              <span className={styles.chipIcon}><ImageIcon size={14} /></span>
              <div><strong>Kyoto in the rain</strong><small>Photo memory · 2 years ago</small></div>
            </div>
            <div className={styles.memoryChip + " " + styles.chipTwo}>
              <span className={styles.chipIcon}><AudioLines size={14} /></span>
              <div><strong>Idea from my walk</strong><small>Voice note · 0:42</small></div>
            </div>
            <div className={styles.memoryChip + " " + styles.chipThree}>
              <span className={styles.chipIcon}><Link2 size={14} /></span>
              <div><strong>Designing for calm</strong><small>Saved article · 4 highlights</small></div>
            </div>

            <div className={styles.appWindow}>
              <div className={styles.windowTopbar}>
                <div className={styles.windowLights}><span /><span /><span /></div>
                <div className={styles.windowTitle}><Sparkle size={12} fill="currentColor" /> Shawn&apos;s Luma</div>
                <button aria-label="Account"><CircleUserRound size={16} /></button>
              </div>
              <div className={styles.appBody}>
                <aside className={styles.sidebar}>
                  <button className={styles.search}><Search size={14} /><span>Search your mind</span><kbd>⌘K</kbd></button>
                  <nav aria-label="Product navigation">
                    <a className={styles.active} href="#memory"><Sparkles size={14} /> For you</a>
                    <a href="#memory"><Clock3 size={14} /> Timeline</a>
                    <a href="#memory"><Brain size={14} /> Memories</a>
                    <a href="#memory"><FileText size={14} /> Notes</a>
                  </nav>
                  <div className={styles.spaces}>
                    <span>SPACES</span>
                    <a href="#memory"><i className={styles.spaceLavender} /> Creative work</a>
                    <a href="#memory"><i className={styles.spaceMint} /> Learning</a>
                    <a href="#memory"><i className={styles.spacePeach} /> Life lately</a>
                  </div>
                  <button className={styles.newNote}><Plus size={15} /> New thought</button>
                </aside>

                <div className={styles.homePanel}>
                  <div className={styles.greeting}>
                    <div><small>THURSDAY, JULY 9</small><h2>Good morning, Shawn.</h2></div>
                    <button aria-label="Open calendar"><CalendarDays size={15} /></button>
                  </div>
                  <div className={styles.askBox}>
                    <span><Sparkles size={16} /></span>
                    <div><small>ASK LUMA</small><p>What have I been thinking about lately?</p></div>
                    <button aria-label="Ask Luma"><ArrowRight size={15} /></button>
                  </div>
                  <div className={styles.sectionTitle}><span>RESURFACED FOR YOU</span><button>See all</button></div>
                  <div className={styles.memoryGrid}>
                    <article className={styles.largeMemory}>
                      <div className={styles.abstractImage}><span /><span /><i /></div>
                      <div><small>FROM YOUR JOURNAL · 1 YEAR AGO</small><h3>The life I&apos;m making space for</h3><p>I want a pace that lets me notice my own life while I&apos;m living it...</p></div>
                    </article>
                    <article className={styles.smallMemory}>
                      <span className={styles.smallMemoryIcon}><Globe2 size={16} /></span>
                      <small>SAVED IDEA</small>
                      <h3>“Clarity comes from contact with the work.”</h3>
                      <p>Connected to 6 notes</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.captureBar}>
              <button aria-label="Add"><Plus size={16} /></button>
              <span>Capture a thought...</span>
              <button aria-label="Record voice note"><Mic size={16} /></button>
              <kbd>⌘↵</kbd>
            </div>
            <div className={styles.recallToast}>
              <span><Sparkles size={14} /></span>
              <div><small>LUMA RECALL</small><strong>This connects to something from last spring</strong></div>
              <ChevronRight size={15} />
            </div>
          </div>
        </section>

        <section className={styles.partners}>
          <p>A daily thinking space for people at</p>
          <div><span>airbnb</span><span>OpenAI</span><span>stripe</span><span>Figma</span><span>Patagonia</span></div>
        </section>

        <section className={styles.flow} id="flow">
          <div className={styles.flowIntro}>
            <span>EFFORTLESS BY DESIGN</span>
            <h2>Less organizing.<br /><em>More becoming.</em></h2>
            <p>Luma keeps up with your mind without asking you to maintain a system.</p>
          </div>
          <div className={styles.flowSteps}>
            <article>
              <div className={styles.stepTop}><span>01</span><MessageCircleMore size={20} /></div>
              <h3>Capture in your own way</h3>
              <p>Type, speak, save, or send. Luma welcomes thoughts in whatever shape they arrive.</p>
              <div className={styles.captureTypes}><span><FileText size={13} /> Note</span><span><Mic size={13} /> Voice</span><span><ImageIcon size={13} /> Photo</span></div>
            </article>
            <article>
              <div className={styles.stepTop}><span>02</span><Brain size={20} /></div>
              <h3>Let connections emerge</h3>
              <p>Luma understands meaning and quietly links related pieces across months and years.</p>
              <div className={styles.miniGraph} aria-hidden="true"><i /><i /><i /><svg viewBox="0 0 250 80"><path d="M25 40L125 20L220 52M125 20L135 67" /></svg></div>
            </article>
            <article>
              <div className={styles.stepTop}><span>03</span><Sparkles size={20} /></div>
              <h3>Meet the right memory</h3>
              <p>What you knew returns in the moment it can help—while writing, planning, or wondering.</p>
              <div className={styles.recallMini}><Sparkles size={13} /><span>Remember this?</span><strong>“Make room before making plans.”</strong></div>
            </article>
          </div>
        </section>

        <section className={styles.privacy} id="privacy">
          <div className={styles.privacyVisual}>
            <div className={styles.privateCore}><span><Sparkle size={28} fill="currentColor" /></span><strong>Your thoughts</strong><small>Encrypted end-to-end</small></div>
            <div className={styles.privacyRing} aria-hidden="true" />
          </div>
          <div className={styles.privacyCopy}>
            <span>YOURS, FULL STOP</span>
            <h2>A private place should actually be private.</h2>
            <p>Your notes are encrypted before they leave your device. We can&apos;t read them, train on them, or sell what they reveal about you.</p>
            <ul>
              <li><Check size={15} /> End-to-end encrypted</li>
              <li><Check size={15} /> No ads. No data brokerage.</li>
              <li><Check size={15} /> Export everything, anytime</li>
            </ul>
          </div>
        </section>

        <section className={styles.story} id="stories">
          <div className={styles.storyQuote}>“</div>
          <blockquote>Luma doesn&apos;t make me feel more productive. It makes me feel more <em>present</em> with my own thinking.</blockquote>
          <div className={styles.storyPerson}><span>MC</span><div><strong>Maya Chen</strong><small>Designer &amp; lifelong note-taker</small></div></div>
        </section>

        <section className={styles.finalCta}>
          <span className={styles.finalLogo}><Sparkle size={24} fill="currentColor" /></span>
          <h2>Your mind has been waiting for a place like this.</h2>
          <p>Start with a thought. Luma will help you remember the rest.</p>
          <a href="#top">Create your space <ArrowRight size={17} /></a>
          <small>Free to begin · No credit card required</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><Sparkle size={15} fill="currentColor" /> luma</div>
        <p>A home for the life of your mind.</p>
        <a href="#top">Return to top ↑</a>
      </footer>

    </div>
  );
}
