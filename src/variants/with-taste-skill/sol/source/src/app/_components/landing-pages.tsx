import Image from "next/image";
import Link from "next/link";
import styles from "./landing-pages.module.css";

const images = {
  paper: "/variants/with-taste-skill/sol/images/cairn/paper-atlas.png",
  night: "/variants/with-taste-skill/sol/images/cairn/night-index.png",
  garden: "/variants/with-taste-skill/sol/images/cairn/signal-garden.png",
  archive: "/variants/with-taste-skill/sol/images/cairn/archive-grid.png",
  spatial: "/variants/with-taste-skill/sol/images/cairn/spatial-calm.png",
} as const;

function CairnBrand({ className = "" }: { className?: string }) {
  return (
    <Link className={`${styles.brand} ${className}`} href="/one" aria-label="Cairn home">
      <span className={styles.brandMark} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>Cairn</span>
    </Link>
  );
}

function SkipLink({ target }: { target: string }) {
  return (
    <a className={styles.skipLink} href={`#${target}`}>
      Skip to content
    </a>
  );
}

export function OneLanding() {
  return (
    <div className={`${styles.page} ${styles.one}`}>
      <SkipLink target="one-main" />
      <header className={styles.oneNav}>
        <CairnBrand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#one-method">Method</a>
          <a href="#one-memory">Why Cairn</a>
        </nav>
        <a className={`${styles.button} ${styles.onePrimary}`} href="#one-start">
          Start writing
        </a>
      </header>

      <main id="one-main">
        <section className={styles.oneHero}>
          <div className={styles.oneHeroCopy}>
            <p className={styles.kicker}>Notes that remember</p>
            <h1>Room for every thought.</h1>
            <p className={styles.heroText}>
              Capture what matters. Cairn connects your notes when the right idea returns.
            </p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.onePrimary}`} href="#one-start">
                Start writing
              </a>
              <a className={`${styles.textLink} ${styles.oneTextLink}`} href="#one-method">
                See the method
              </a>
            </div>
          </div>
          <figure className={`${styles.imageFrame} ${styles.oneHeroImage}`}>
            <Image
              src={images.paper}
              alt="Index cards linked with red thread on a white table"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section className={styles.oneMethod} id="one-method">
          <div className={styles.stackHeading}>
            <h2>A place for unfinished thinking.</h2>
            <p>Write naturally. Cairn builds the structure quietly, then brings useful context back when you need it.</p>
          </div>
          <div className={styles.oneMethodGrid}>
            <article className={styles.oneCapture}>
              <span className={styles.largeWord}>Capture</span>
              <h3>Keep the rough edges.</h3>
              <p>Drop in a sentence, a voice note, a link, or the thought you cannot name yet.</p>
            </article>
            <figure className={`${styles.imageFrame} ${styles.oneGardenImage}`}>
              <Image
                src={images.garden}
                alt="White paper leaves connected by dark branches"
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
              />
            </figure>
            <div className={styles.oneMethodStack}>
              <article>
                <h3>Connect by meaning.</h3>
                <p>Related fragments gather around the idea, not the folder you happened to choose.</p>
              </article>
              <article>
                <h3>Return with context.</h3>
                <p>Open one note and see the decisions, sources, and questions that shaped it.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.oneMemory} id="one-memory">
          <figure className={`${styles.imageFrame} ${styles.oneMemoryImage}`}>
            <Image
              src={images.spatial}
              alt="White paper forms orbiting a coral sphere"
              fill
              sizes="(max-width: 767px) 100vw, 55vw"
            />
          </figure>
          <div className={styles.oneQuote}>
            <blockquote>
              “I follow the thought now, not the folder.”
            </blockquote>
            <p>Mara Vélez, research lead</p>
          </div>
        </section>

        <section className={styles.oneThesis}>
          <h2>Your notes know more together.</h2>
          <div>
            <p>Private by default.</p>
            <p>Useful on every device.</p>
            <p>Designed for years of thought.</p>
          </div>
        </section>

        <section className={styles.oneCta} id="one-start">
          <div>
            <h2>Keep what your days teach you.</h2>
            <p>Start with one thought. Cairn will help you find the rest.</p>
          </div>
          <a className={`${styles.button} ${styles.onePrimary}`} href="#one-main">
            Start writing
          </a>
        </section>
      </main>

      <footer className={styles.oneFooter}>
        <CairnBrand />
        <p>Your private place to think.</p>
        <p>© 2026 Cairn</p>
      </footer>
    </div>
  );
}

export function TwoLanding() {
  return (
    <div className={`${styles.page} ${styles.two}`}>
      <SkipLink target="two-main" />
      <header className={styles.twoNav}>
        <CairnBrand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#two-system">System</a>
          <a href="#two-context">Context</a>
        </nav>
        <a className={`${styles.button} ${styles.twoPrimary}`} href="#two-start">
          Start writing
        </a>
      </header>

      <main id="two-main">
        <section className={styles.twoHero}>
          <div className={styles.twoHeroCopy}>
            <p className={styles.kicker}>A private index for a noisy mind</p>
            <h1>Knowledge, within reach.</h1>
            <p className={styles.heroText}>Cairn turns scattered notes into a living map that gets clearer as you use it.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.twoPrimary}`} href="#two-start">
                Start writing
              </a>
              <a className={`${styles.textLink} ${styles.twoTextLink}`} href="#two-system">
                Explore the system
              </a>
            </div>
          </div>
          <figure className={`${styles.imageFrame} ${styles.twoHeroImage}`}>
            <Image
              src={images.night}
              alt="Glass discs connected by fine amber lines in a dark studio"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section className={styles.twoSystem} id="two-system">
          <div className={styles.stackHeading}>
            <h2>Thought has a shape.</h2>
            <p>Cairn notices themes, references, and open questions without asking you to maintain another system.</p>
          </div>
          <div className={styles.twoRows}>
            <article>
              <span>Capture</span>
              <h3>Write at the speed of the thought.</h3>
              <p>Use plain text, audio, images, or links. Structure can wait.</p>
            </article>
            <article>
              <span>Link</span>
              <h3>See what belongs together.</h3>
              <p>Cairn finds shared ideas across projects, meetings, and reading.</p>
            </article>
            <article>
              <span>Recall</span>
              <h3>Bring the right context forward.</h3>
              <p>Search by meaning and return to the whole trail, not one result.</p>
            </article>
          </div>
        </section>

        <section className={styles.twoContext} id="two-context">
          <figure className={`${styles.imageFrame} ${styles.twoArchiveImage}`}>
            <Image
              src={images.archive}
              alt="Modern wall of metal index drawers with cobalt folders"
              fill
              sizes="(max-width: 767px) 100vw, 62vw"
            />
          </figure>
          <div className={styles.twoContextCopy}>
            <h2>No folders to outgrow.</h2>
            <p>Your work can change shape without making the old thinking disappear.</p>
          </div>
        </section>

        <section className={styles.twoBento} aria-label="Cairn principles">
          <article className={styles.twoBentoLead}>
            <h2>Built for a long memory.</h2>
            <p>Local-first foundations keep your archive available, portable, and yours.</p>
          </article>
          <figure className={`${styles.imageFrame} ${styles.twoPaperImage}`}>
            <Image
              src={images.paper}
              alt="Connected paper notes arranged on a drafting table"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
            />
          </figure>
          <article className={styles.twoBentoAccent}>
            <p>One place for research, decisions, reading, and the unfinished thought between them.</p>
          </article>
          <figure className={`${styles.imageFrame} ${styles.twoSpatialImage}`}>
            <Image
              src={images.spatial}
              alt="Paper planes suspended around a coral sphere"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
            />
          </figure>
        </section>

        <section className={styles.twoCta} id="two-start">
          <p>Give your thinking somewhere to return to.</p>
          <a className={`${styles.button} ${styles.twoPrimary}`} href="#two-main">
            Start writing
          </a>
        </section>
      </main>

      <footer className={styles.twoFooter}>
        <CairnBrand />
        <p>Private notes. Connected thinking.</p>
        <p>© 2026 Cairn</p>
      </footer>
    </div>
  );
}

export function ThreeLanding() {
  return (
    <div className={`${styles.page} ${styles.three}`}>
      <SkipLink target="three-main" />
      <header className={styles.threeNav}>
        <CairnBrand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#three-flow">How it grows</a>
          <a href="#three-use">Use cases</a>
        </nav>
        <a className={`${styles.button} ${styles.threePrimary}`} href="#three-start">
          Start writing
        </a>
      </header>

      <main id="three-main">
        <section className={styles.threeHero}>
          <div className={styles.threeHeroCopy}>
            <p className={styles.kicker}>Your ideas are alive</p>
            <h1>Think in living notes.</h1>
            <p className={styles.heroText}>Catch ideas quickly. Watch them branch, meet, and become something you could not see before.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.threePrimary}`} href="#three-start">
                Start writing
              </a>
              <a className={`${styles.textLink} ${styles.threeTextLink}`} href="#three-flow">
                Watch it grow
              </a>
            </div>
          </div>
          <figure className={`${styles.imageFrame} ${styles.threeHeroImage}`}>
            <Image
              src={images.garden}
              alt="Sculpture of white paper leaves with chartreuse edges"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section className={styles.threeFlow} id="three-flow">
          <div className={styles.threeFlowCopy}>
            <h2>Start messy. Find the pattern.</h2>
            <p>Cairn keeps capture light and lets structure appear through use.</p>
            <div className={styles.threeFlowWords} aria-label="Cairn workflow">
              <span>Write</span>
              <span>Notice</span>
              <span>Follow</span>
            </div>
          </div>
          <figure className={`${styles.imageFrame} ${styles.threeFlowImage}`}>
            <Image
              src={images.spatial}
              alt="White paper forms circling a coral center"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </figure>
        </section>

        <section className={styles.threeUse} id="three-use">
          <h2>One space. Many kinds of thinking.</h2>
          <div className={styles.threeUseGrid}>
            <article className={styles.threeUseWide}>
              <h3>Research that remembers its sources.</h3>
              <p>Keep the claim, the evidence, and your questions in the same trail.</p>
            </article>
            <article>
              <h3>Projects with a memory.</h3>
              <p>Decisions stay connected to the thinking behind them.</p>
            </article>
            <article>
              <h3>Reading that keeps working.</h3>
              <p>Highlights return when a new idea makes them useful.</p>
            </article>
            <article className={styles.threeUseAccent}>
              <h3>Daily notes that add up.</h3>
              <p>Small observations become a clear view over time.</p>
            </article>
          </div>
        </section>

        <section className={styles.threeQuote}>
          <figure className={`${styles.imageFrame} ${styles.threeQuoteImage}`}>
            <Image
              src={images.paper}
              alt="Paper diagrams joined with a red thread"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </figure>
          <blockquote>
            “My research keeps talking to my work.”
            <span>Devika Raman, product strategist</span>
          </blockquote>
        </section>

        <section className={styles.threeCta} id="three-start">
          <div>
            <h2>Plant one thought.</h2>
            <p>Let your second brain grow from there.</p>
          </div>
          <a className={`${styles.button} ${styles.threePrimary}`} href="#three-main">
            Start writing
          </a>
        </section>
      </main>

      <footer className={styles.threeFooter}>
        <CairnBrand />
        <p>Think, connect, return.</p>
        <p>© 2026 Cairn</p>
      </footer>
    </div>
  );
}

export function FourLanding() {
  return (
    <div className={`${styles.page} ${styles.four}`}>
      <SkipLink target="four-main" />
      <header className={styles.fourNav}>
        <CairnBrand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#four-logic">Logic</a>
          <a href="#four-proof">Principles</a>
        </nav>
        <a className={`${styles.button} ${styles.fourPrimary}`} href="#four-start">
          Start writing
        </a>
      </header>

      <main id="four-main">
        <section className={styles.fourHero}>
          <div className={styles.fourHeroCopy}>
            <h1>Stop filing. Start finding.</h1>
            <p className={styles.heroText}>Cairn gives every note a useful address, then shows the routes between them.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.fourPrimary}`} href="#four-start">
                Start writing
              </a>
              <a className={`${styles.textLink} ${styles.fourTextLink}`} href="#four-logic">
                See the logic
              </a>
            </div>
          </div>
          <figure className={`${styles.imageFrame} ${styles.fourHeroImage}`}>
            <Image
              src={images.archive}
              alt="Grid of silver archive drawers with cobalt folders"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section className={styles.fourLogic} id="four-logic">
          <div className={styles.stackHeading}>
            <h2>Every thought gets a useful address.</h2>
            <p>Not one rigid folder. A network of topics, sources, people, and decisions that can change with your work.</p>
          </div>
          <div className={styles.fourLogicGrid}>
            <article className={styles.fourLogicLead}>
              <h3>Capture without ceremony.</h3>
              <p>Open Cairn, write the thing, close it. The thought is safe and searchable.</p>
            </article>
            <article>
              <h3>Link without maintenance.</h3>
              <p>Meaning creates the routes. You can edit or ignore them.</p>
            </article>
            <article>
              <h3>Retrieve without the perfect keyword.</h3>
              <p>Ask for the idea you remember, even when the phrase is gone.</p>
            </article>
          </div>
        </section>

        <section className={styles.fourImageStatement}>
          <figure className={`${styles.imageFrame} ${styles.fourPaperImage}`}>
            <Image
              src={images.paper}
              alt="A map of index cards connected by red thread"
              fill
              sizes="100vw"
            />
          </figure>
          <div>
            <p>Folders hold files.</p>
            <h2>Cairn holds relationships.</h2>
          </div>
        </section>

        <section className={styles.fourProof} id="four-proof">
          <article className={styles.fourProofLead}>
            <h2>Clear by design.</h2>
            <p>Your archive stays portable, readable, and under your control.</p>
          </article>
          <article>
            <h3>Private first</h3>
            <p>Your notes are not ad inventory.</p>
          </article>
          <figure className={`${styles.imageFrame} ${styles.fourNightImage}`}>
            <Image
              src={images.night}
              alt="A connected sculpture made from glass and amber wire"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
            />
          </figure>
          <article className={styles.fourProofAccent}>
            <h3>Open formats</h3>
            <p>Take your thinking with you whenever you choose.</p>
          </article>
        </section>

        <section className={styles.fourCta} id="four-start">
          <h2>Build an archive you can think with.</h2>
          <a className={`${styles.button} ${styles.fourPrimary}`} href="#four-main">
            Start writing
          </a>
        </section>
      </main>

      <footer className={styles.fourFooter}>
        <CairnBrand />
        <p>Notes with structure that moves.</p>
        <p>© 2026 Cairn</p>
      </footer>
    </div>
  );
}

export function FiveLanding() {
  return (
    <div className={`${styles.page} ${styles.five}`}>
      <SkipLink target="five-main" />
      <header className={styles.fiveNav}>
        <CairnBrand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#five-space">Space</a>
          <a href="#five-return">Return</a>
        </nav>
        <a className={`${styles.button} ${styles.fivePrimary}`} href="#five-start">
          Start writing
        </a>
      </header>

      <main id="five-main">
        <section className={styles.fiveHero}>
          <figure className={`${styles.imageFrame} ${styles.fiveHeroImage}`}>
            <Image
              src={images.spatial}
              alt="Airy paper forms suspended around a coral sphere"
              fill
              priority
              sizes="100vw"
            />
          </figure>
          <div className={styles.fiveHeroCopy}>
            <p className={styles.kicker}>A gentler second brain</p>
            <h1>Make a home for every thought.</h1>
            <p className={styles.heroText}>Capture freely. Cairn makes your ideas easier to find, connect, and trust over time.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.fivePrimary}`} href="#five-start">
                Start writing
              </a>
              <a className={`${styles.textLink} ${styles.fiveTextLink}`} href="#five-space">
                Take a closer look
              </a>
            </div>
          </div>
        </section>

        <section className={styles.fiveSpace} id="five-space">
          <div className={styles.fiveSpaceCopy}>
            <h2>Capture now. Understand later.</h2>
            <p>Your notes do not need to arrive finished. Cairn gives fragments room to become useful.</p>
          </div>
          <figure className={`${styles.imageFrame} ${styles.fiveGardenImage}`}>
            <Image
              src={images.garden}
              alt="A branching sculpture made from white folded paper"
              fill
              sizes="(max-width: 767px) 100vw, 56vw"
            />
          </figure>
        </section>

        <section className={styles.fiveFlow} aria-label="How Cairn works">
          <article>
            <span>Capture</span>
            <h3>Keep the sentence before it slips away.</h3>
          </article>
          <article>
            <span>Connect</span>
            <h3>Let related ideas gather without forced folders.</h3>
          </article>
          <article>
            <span>Return</span>
            <h3>Meet old thinking inside the work you are doing now.</h3>
          </article>
        </section>

        <section className={styles.fiveReturn} id="five-return">
          <figure className={`${styles.imageFrame} ${styles.fiveNightImage}`}>
            <Image
              src={images.night}
              alt="Fine amber connections crossing between glass discs"
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
            />
          </figure>
          <div className={styles.fiveReturnCopy}>
            <h2>Nothing useful gets buried.</h2>
            <p>Cairn brings back the note, source, or decision that gives today’s work more depth.</p>
            <blockquote>
              “The right note appears before I remember to search for it.”
              <span>Jon Bellamy, independent writer</span>
            </blockquote>
          </div>
        </section>

        <section className={styles.fiveCta} id="five-start">
          <div>
            <h2>Give your thoughts somewhere calm to land.</h2>
            <p>One private space for the work of a lifetime.</p>
          </div>
          <a className={`${styles.button} ${styles.fivePrimary}`} href="#five-main">
            Start writing
          </a>
        </section>
      </main>

      <footer className={styles.fiveFooter}>
        <CairnBrand />
        <p>Keep more of what matters.</p>
        <p>© 2026 Cairn</p>
      </footer>
    </div>
  );
}
