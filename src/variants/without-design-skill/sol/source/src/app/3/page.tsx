import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bookmark,
  Camera,
  Check,
  Feather,
  Leaf,
  Menu,
  Paperclip,
  Plus,
} from "lucide-react";
import styles from "./page.module.css";

export default function PaperGardenPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Commonplace home">
          <span className={styles.brandSeal}>
            <Leaf size={17} />
          </span>
          <span>Commonplace</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#gather">Gather</a>
          <a href="#grow">Grow</a>
          <a href="#remember">Remember</a>
          <a href="#journal">Journal</a>
        </nav>
        <div className={styles.headerActions}>
          <a href="#journal">Sign in</a>
          <a className={styles.joinButton} href="#gather">
            Plant your first note <Leaf size={13} />
          </a>
          <button className={styles.menuButton} aria-label="Open navigation">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>
              <span>✿</span> A thoughtful home for everything you notice
            </div>
            <h1>
              A garden for
              <span>your inner world.</span>
            </h1>
            <p>
              Save the sentences, questions, images, and tiny sparks you want to
              keep. Commonplace helps them take root—and grow into something new.
            </p>
            <div className={styles.heroActions}>
              <a href="#gather" className={styles.primaryCta}>
                Start a free commonplace <ArrowRight size={17} />
              </a>
              <a href="#journal" className={styles.paperLink}>
                Open a sample journal <ArrowUpRight size={14} />
              </a>
            </div>
            <div className={styles.loveNote}>
              <span className={styles.handArrow} aria-hidden="true">↳</span>
              <p>
                no feeds, no performance,
                <br />
                <strong>just a space that&apos;s yours.</strong>
              </p>
            </div>
          </div>

          <div className={styles.scrapbook} id="gather">
            <div className={styles.sunShape} aria-hidden="true" />
            <div className={styles.botanical} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.photoCard}>
              <div className={styles.photo}>
                <div className={styles.photoSky} />
                <div className={styles.photoHillOne} />
                <div className={styles.photoHillTwo} />
                <div className={styles.photoSun} />
              </div>
              <p>the long way home · sunday</p>
            </div>

            <div className={styles.notebook} id="journal">
              <div className={styles.tape} aria-hidden="true" />
              <div className={styles.notebookTop}>
                <span>12 MAY, MONDAY</span>
                <button aria-label="More journal actions">•••</button>
              </div>
              <h2>Small things worth keeping</h2>
              <div className={styles.ruledText}>
                <p>
                  The smell of wet pavement after a warm day. A stranger
                  humming while choosing oranges.
                </p>
                <p>
                  Maybe a good life is mostly attention—practiced gently, over
                  and over.
                </p>
              </div>
              <div className={styles.highlight}>
                <span>“attention is a form of love”</span>
                <small>— found in a book note, 8 months ago</small>
              </div>
              <div className={styles.noteTags}>
                <span>#ordinary-magic</span>
                <span>#attention</span>
              </div>
              <div className={styles.editorTools}>
                <button aria-label="Add attachment"><Paperclip size={14} /></button>
                <button aria-label="Record audio"><AudioLines size={14} /></button>
                <button aria-label="Add photo"><Camera size={14} /></button>
                <button className={styles.addButton} aria-label="Add to entry"><Plus size={14} /></button>
              </div>
            </div>

            <div className={styles.stickyNote}>
              <span>today&apos;s question</span>
              <p>What are you paying attention to?</p>
              <div>♡</div>
            </div>

            <div className={styles.seedPacket}>
              <span className={styles.seedIcon}>❋</span>
              <small>COMMONPLACE</small>
              <strong>IDEA SEEDS</strong>
              <i>save now · grow later</i>
            </div>

            <div className={styles.savedTag}>
              <span><Check size={12} strokeWidth={3} /></span>
              Safely tucked away
            </div>
          </div>
        </section>

        <section className={styles.ribbon} aria-label="Commonplace features">
          <span>WRITE</span><i>✦</i><span>CLIP</span><i>✿</i><span>WANDER</span><i>✦</i>
          <span>CONNECT</span><i>✿</i><span>REMEMBER</span>
        </section>

        <section className={styles.growing} id="grow">
          <div className={styles.sectionCopy}>
            <span className={styles.sectionNumber}>CHAPTER ONE</span>
            <h2>Your ideas don&apos;t belong in little boxes.</h2>
            <p>
              Commonplace keeps the lovely mess, then quietly shows you the
              paths running through it. No rigid filing system. No garden to weed.
            </p>
            <a href="#remember">See how it grows <ArrowRight size={15} /></a>
          </div>
          <div className={styles.ideaGarden} aria-label="Example connected ideas">
            <svg viewBox="0 0 640 410" aria-hidden="true">
              <path d="M80 305C170 330 168 220 260 232C370 245 360 105 478 122" />
              <path d="M260 232C330 330 445 328 550 278" />
              <path d="M260 232C202 180 180 110 132 82" />
            </svg>
            <article className={styles.gardenCardA}>
              <small>BOOK NOTE</small>
              <strong>The art of noticing</strong>
              <p>“Look closely. Everything is interesting.”</p>
            </article>
            <article className={styles.gardenCardB}>
              <small>THOUGHT</small>
              <strong>Attention as care</strong>
              <p>Maybe what we notice is who we become.</p>
            </article>
            <article className={styles.gardenCardC}>
              <small>PHOTO · APR 18</small>
              <strong>Morning light</strong>
            </article>
            <article className={styles.gardenCardD}>
              <small>QUESTION</small>
              <strong>What makes a day feel full?</strong>
            </article>
            <span className={styles.flowerOne}>✿</span>
            <span className={styles.flowerTwo}>❋</span>
            <span className={styles.flowerThree}>✦</span>
          </div>
        </section>

        <section className={styles.remember} id="remember">
          <div className={styles.rememberHeading}>
            <span>THREE GENTLE HABITS</span>
            <h2>Keep a life, not just a list.</h2>
          </div>
          <div className={styles.habits}>
            <article>
              <div className={styles.habitIllustration}><Feather size={28} /></div>
              <span>01 · GATHER</span>
              <h3>Catch it while it&apos;s alive</h3>
              <p>Words, voice, photos, links—everything lands in one welcoming place.</p>
            </article>
            <article>
              <div className={styles.habitIllustration}><Leaf size={28} /></div>
              <span>02 · TEND</span>
              <h3>Let meaning emerge</h3>
              <p>Your notes find their neighbors, even when you forget to organize.</p>
            </article>
            <article>
              <div className={styles.habitIllustration}><Bookmark size={28} /></div>
              <span>03 · RETURN</span>
              <h3>Meet your past self</h3>
              <p>Old ideas return in daily pages, writing prompts, and quiet reminders.</p>
            </article>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.closingDoodle} aria-hidden="true">✿﹏✦﹏❋</div>
          <h2>There&apos;s more in your mind than you can remember.</h2>
          <p>Give it somewhere beautiful to live.</p>
          <a href="#top">Begin your commonplace <ArrowRight size={17} /></a>
          <small>Free forever for your first 500 notes · No credit card</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><Leaf size={18} /> Commonplace</div>
        <p>Made for curious people, everywhere.</p>
        <a href="#top">back to the beginning ↑</a>
      </footer>

    </div>
  );
}
