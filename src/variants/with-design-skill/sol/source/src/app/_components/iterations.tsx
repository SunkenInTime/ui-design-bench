import styles from "./iterations.module.css";

function ArrowUpRight() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 14 14 4M6.5 4H14v7.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3.5 9h11M10 4.5 14.5 9 10 13.5" />
    </svg>
  );
}

function TangentMark() {
  return (
    <svg className={styles.tangentMark} viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="10.5" />
      <path d="M4 21.5 25.5 8" />
      <circle className={styles.markDot} cx="21.4" cy="10.6" r="2.15" />
    </svg>
  );
}

function Spark() {
  return (
    <svg className={styles.sparkIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 1.75c.42 4.84 3.4 7.82 8.25 8.25-4.85.42-7.83 3.4-8.25 8.25C9.58 13.4 6.6 10.42 1.75 10 6.6 9.57 9.58 6.59 10 1.75Z" />
    </svg>
  );
}

export function CartographerPage() {
  return (
    <main className={`${styles.page} ${styles.one}`} id="top">
      <header className={styles.oneHeader}>
        <a className={styles.oneBrand} href="#top" aria-label="Tangent home">
          <TangentMark />
          <span>Tangent</span>
        </a>
        <nav className={styles.oneNav} aria-label="Primary navigation">
          <a href="#method">How it works</a>
          <a href="#principles">Principles</a>
          <a href="#start">Pricing</a>
        </nav>
        <a className={styles.oneHeaderCta} href="#start">
          Enter your workspace <ArrowUpRight />
        </a>
      </header>

      <section className={styles.oneHero}>
        <div className={styles.oneCopy}>
          <div className={styles.oneEyebrow}>
            <span>Memory, made spatial</span>
            <span className={styles.oneNew}>New · Recall</span>
          </div>
          <h1>
            Give every thought <em>a way back.</em>
          </h1>
          <p className={styles.oneLead}>
            Tangent catches the fragments of your work and quietly draws the
            paths between them—so the right idea returns exactly when you need it.
          </p>
          <div className={styles.oneActions}>
            <a className={styles.onePrimary} href="#start">
              Build your first map <ArrowRight />
            </a>
            <a className={styles.oneSecondary} href="#method">
              Watch the 90-second tour
            </a>
          </div>
          <div className={styles.oneFootnote}>
            <div className={styles.oneAvatars} aria-hidden="true">
              <span>AL</span>
              <span>MK</span>
              <span>JT</span>
            </div>
            <p>
              <strong>18,000 curious minds</strong>
              <span>already thinking in Tangent</span>
            </p>
          </div>
        </div>

        <div
          className={styles.oneMap}
          role="img"
          aria-label="A knowledge map connecting a note about calm software to research, a book highlight, and a product principle"
        >
          <div className={styles.oneMapLabel}>
            <span>Project · Calm software</span>
            <span>14 connections</span>
          </div>
          <svg className={styles.oneConnections} viewBox="0 0 680 590" aria-hidden="true">
            <path d="M332 292C250 250 214 185 158 146" />
            <path d="M332 292C414 230 495 232 548 170" />
            <path d="M332 292C402 348 450 387 548 398" />
            <path d="M332 292C276 356 254 415 190 457" />
            <path className={styles.oneDottedPath} d="M158 146C293 73 441 81 548 170" />
            <path className={styles.oneDottedPath} d="M190 457C322 523 443 490 548 398" />
          </svg>

          <div className={`${styles.oneNode} ${styles.oneNodeTopLeft}`}>
            <span className={styles.oneNodeType}>BOOK HIGHLIGHT</span>
            <strong>“Good tools recede.”</strong>
            <span>The Shape of Design · p. 61</span>
          </div>
          <div className={`${styles.oneNode} ${styles.oneNodeTopRight}`}>
            <span className={styles.oneNodeType}>RESEARCH</span>
            <strong>Attention residue</strong>
            <span>Why unfinished work stays active</span>
          </div>
          <div className={styles.oneCenterNode}>
            <div className={styles.oneCenterIcon}>
              <Spark />
            </div>
            <span>WORKING NOTE</span>
            <strong>Software should hold context without demanding attention.</strong>
            <div className={styles.oneTags}>
              <span>#calm-tech</span>
              <span>#principles</span>
            </div>
          </div>
          <div className={`${styles.oneNode} ${styles.oneNodeBottomRight}`}>
            <span className={styles.oneNodeType}>DECISION</span>
            <strong>Default to quiet</strong>
            <span>Onboarding principle · today</span>
          </div>
          <div className={`${styles.oneNode} ${styles.oneNodeBottomLeft}`}>
            <span className={styles.oneNodeType}>VOICE MEMO</span>
            <strong>Designing for return</strong>
            <span>03:18 · transcribed</span>
          </div>
          <span className={`${styles.oneMapDot} ${styles.oneMapDotA}`} />
          <span className={`${styles.oneMapDot} ${styles.oneMapDotB}`} />
          <span className={`${styles.oneMapDot} ${styles.oneMapDotC}`} />
        </div>
      </section>

      <section className={styles.oneMethod} id="method">
        <p className={styles.oneSectionLabel}>A gentler way to remember</p>
        <div className={styles.oneMethodGrid} id="principles">
          <article>
            <span>Capture</span>
            <h2>Write before the thought disappears.</h2>
            <p>Text, links, images, and voice land in one frictionless inbox.</p>
          </article>
          <article>
            <span>Connect</span>
            <h2>See the company your ideas keep.</h2>
            <p>Tangent suggests meaningful links without rearranging your mind.</p>
          </article>
          <article>
            <span>Return</span>
            <h2>Ask in your words. Get your thinking back.</h2>
            <p>Recall answers with the notes and sources that shaped the answer.</p>
          </article>
        </div>
      </section>

      <section className={styles.oneClosing} id="start">
        <div>
          <span>No folders to babysit</span>
          <h2>Your next good idea is already in there.</h2>
        </div>
        <a href="#top">
          Start thinking in Tangent <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}

export function CaptureLedgerPage() {
  return (
    <main className={`${styles.page} ${styles.two}`} id="top">
      <header className={styles.twoHeader}>
        <a className={styles.twoBrand} href="#top" aria-label="Tangent home">
          <span className={styles.twoBrandMark}>T</span>
          <span>TANGENT®</span>
        </a>
        <span className={styles.twoHeaderNote}>A SECOND BRAIN THAT PULLS ITS WEIGHT</span>
        <nav className={styles.twoNav} aria-label="Primary navigation">
          <a href="#system">System</a>
          <a href="#proof">Stories</a>
          <a className={styles.twoNavButton} href="#start">
            Start free ↗
          </a>
        </nav>
      </header>

      <section className={styles.twoHero}>
        <div className={styles.twoHeadline}>
          <span className={styles.twoKicker}>NOTES / WITH FOLLOW-THROUGH</span>
          <h1>
            <span>NOTES ARE EASY.</span>
            <span className={styles.twoOutline}>FINDING THE</span>
            <span>
              <i>THREAD</i> IS THE TRICK.
            </span>
          </h1>
          <div className={styles.twoIntro}>
            <p>
              Tangent turns drive-by thoughts, half-finished research, and
              2 a.m. voice notes into one searchable line of thought.
            </p>
            <a href="#start">
              Open a fresh thread <ArrowRight />
            </a>
          </div>
        </div>

        <div className={styles.twoLedger} aria-label="A stream of notes being connected into one thread">
          <div className={styles.twoLedgerBar}>
            <span>TODAY’S STREAM</span>
            <span className={styles.twoLive}>● LIVE</span>
            <span>09:41 PT</span>
          </div>
          <div className={styles.twoLedgerRow}>
            <time>08:12</time>
            <span className={`${styles.twoType} ${styles.twoTypeBlue}`}>LINK</span>
            <div>
              <strong>Why tools for thought keep getting in the way</strong>
              <span>dense-discovery.com / saved from Safari</span>
            </div>
            <span className={styles.twoRowIndex}>001</span>
          </div>
          <div className={styles.twoLedgerRow}>
            <time>08:47</time>
            <span className={`${styles.twoType} ${styles.twoTypeYellow}`}>NOTE</span>
            <div>
              <strong>Maybe retrieval should feel like recognition, not search.</strong>
              <span>#product-thinking · private</span>
            </div>
            <span className={styles.twoRowIndex}>002</span>
          </div>
          <div className={`${styles.twoLedgerRow} ${styles.twoLedgerRowActive}`}>
            <time>09:16</time>
            <span className={`${styles.twoType} ${styles.twoTypeRed}`}>VOICE</span>
            <div>
              <strong>“The useful unit isn’t the note. It’s the thread.”</strong>
              <span>00:42 · transcribed · 3 suggested links</span>
            </div>
            <span className={styles.twoRowIndex}>003</span>
          </div>
          <div className={styles.twoThreadJoin}>
            <span>↳</span>
            <p>
              <strong>TANGENT FOUND A THREAD</strong>
              <span>These 3 fragments are shaping your idea about humane retrieval.</span>
            </p>
            <span className={styles.twoFakeButton}>JOIN 3 NOTES</span>
          </div>
        </div>
      </section>

      <div className={styles.twoTicker} aria-hidden="true">
        <div>
          CAPTURE FAST <span>✳</span> CONNECT LATER <span>✳</span> REMEMBER ON CUE <span>✳</span>
          CAPTURE FAST <span>✳</span> CONNECT LATER <span>✳</span> REMEMBER ON CUE <span>✳</span>
        </div>
      </div>

      <section className={styles.twoSystem} id="system">
        <div className={styles.twoSystemIntro}>
          <span>THE SYSTEM / 003 MOVES</span>
          <h2>Less filing.<br />More thinking.</h2>
        </div>
        <div className={styles.twoSystemCards}>
          <article>
            <span className={styles.twoCardNumber}>A</span>
            <h3>DROP IT IN</h3>
            <p>Notes, screenshots, PDFs, links, and audio. No filing ceremony.</p>
          </article>
          <article>
            <span className={styles.twoCardNumber}>B</span>
            <h3>LET IT COOK</h3>
            <p>Tangent spots names, themes, claims, and useful contradictions.</p>
          </article>
          <article id="proof">
            <span className={styles.twoCardNumber}>C</span>
            <h3>CALL IT BACK</h3>
            <p>Ask a question and get an answer grounded in your own source material.</p>
          </article>
        </div>
      </section>

      <section className={styles.twoClosing} id="start">
        <span>FREE FOR YOUR FIRST 500 NOTES</span>
        <h2>DON’T LOSE THE THREAD.</h2>
        <a href="#top">START YOUR SECOND BRAIN <ArrowUpRight /></a>
      </section>
    </main>
  );
}

export function ObservatoryPage() {
  return (
    <main className={`${styles.page} ${styles.three}`} id="top">
      <div className={styles.threeStars} aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => <span key={index} />)}
      </div>
      <header className={styles.threeHeader}>
        <a className={styles.threeBrand} href="#top" aria-label="Tangent home">
          <TangentMark />
          <span>Tangent</span>
        </a>
        <nav className={styles.threeNav} aria-label="Primary navigation">
          <a href="#observe">Observe</a>
          <a href="#remember">Remember</a>
          <a href="#start">Begin</a>
        </nav>
        <a className={styles.threeSignIn} href="#start">Open Tangent <span>↗</span></a>
      </header>

      <section className={styles.threeHero}>
        <div className={styles.threeCopy}>
          <span className={styles.threeKicker}>YOUR PRIVATE MEMORY OBSERVATORY</span>
          <h1>Ask your past self <em>anything.</em></h1>
          <p>
            Tangent studies the constellation of things you save, write, and
            decide—then brings the right memory into view.
          </p>
          <div className={styles.threeActions}>
            <a href="#start">Create your observatory <ArrowRight /></a>
            <span>Private by default · yours to export</span>
          </div>
        </div>

        <div
          className={styles.threeOrbit}
          id="observe"
          role="img"
          aria-label="An orbit of connected memories around a Tangent recall answer"
        >
          <div className={`${styles.threeRing} ${styles.threeRingOuter}`} />
          <div className={`${styles.threeRing} ${styles.threeRingMiddle}`} />
          <div className={`${styles.threeRing} ${styles.threeRingInner}`} />
          <div className={`${styles.threeOrbitalNode} ${styles.threeNodeOne}`}>
            <span>DECISION</span>
            <strong>Start with recognition</strong>
          </div>
          <div className={`${styles.threeOrbitalNode} ${styles.threeNodeTwo}`}>
            <span>INTERVIEW · MAY 14</span>
            <strong>“I remember the shape, not the title.”</strong>
          </div>
          <div className={`${styles.threeOrbitalNode} ${styles.threeNodeThree}`}>
            <span>HIGHLIGHT</span>
            <strong>Context is a retrieval cue</strong>
          </div>
          <div className={`${styles.threeOrbitalNode} ${styles.threeNodeFour}`}>
            <span>VOICE · 01:12</span>
            <strong>Search should feel familiar</strong>
          </div>
          <div className={styles.threeCore}>
            <div className={styles.threeCoreTop}>
              <Spark />
              <span>RECALL · 4 SOURCES</span>
            </div>
            <p>What did I learn about how people remember saved ideas?</p>
            <strong>
              People often recall the <em>context</em> around an idea before its
              exact words. Recognition cues outperformed strict search in three
              of your interviews.
            </strong>
            <div className={styles.threeSources}>
              <span>01</span><span>02</span><span>03</span><span>+1</span>
            </div>
          </div>
          <span className={`${styles.threeComet} ${styles.threeCometOne}`} />
          <span className={`${styles.threeComet} ${styles.threeCometTwo}`} />
        </div>

        <div className={styles.threePrompt} id="remember">
          <span className={styles.threePromptIcon}>⌘</span>
          <p>Ask anything you’ve read, written, or decided…</p>
          <span className={styles.threePromptKey}>RETURN ↵</span>
        </div>
      </section>

      <section className={styles.threeHorizon}>
        <article>
          <span>01 · REMEMBER</span>
          <h2>Every answer keeps its stars attached.</h2>
          <p>Trace any synthesis back to the exact note, recording, or source.</p>
        </article>
        <article>
          <span>02 · NOTICE</span>
          <h2>Old ideas surface when they become useful.</h2>
          <p>Quiet reminders reconnect today’s work with thoughts you forgot you had.</p>
        </article>
        <a href="#top" id="start">
          <span>YOUR CONSTELLATION STARTS WITH ONE NOTE</span>
          <strong>Begin in Tangent</strong>
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}

export function StudioWallPage() {
  return (
    <main className={`${styles.page} ${styles.four}`} id="top">
      <header className={styles.fourHeader}>
        <a className={styles.fourBrand} href="#top" aria-label="Tangent home">
          <span className={styles.fourLogoScribble} aria-hidden="true">↗</span>
          <span>Tangent!</span>
        </a>
        <nav className={styles.fourNav} aria-label="Primary navigation">
          <a href="#wall">The wall</a>
          <a href="#bits">Good bits</a>
          <a href="#start">Try it</a>
        </nav>
        <a className={styles.fourHeaderCta} href="#start">Make some space <span>→</span></a>
      </header>

      <section className={styles.fourHero}>
        <div className={styles.fourCopy}>
          <span className={styles.fourKicker}>A SECOND BRAIN FOR FIRST-DRAFT PEOPLE</span>
          <h1>
            Make a <span className={styles.fourGlorious}>glorious</span> mess.
            <small>Tangent remembers where everything went.</small>
          </h1>
          <p>
            Throw in the screenshot. Record the half-idea. Paste the suspiciously
            good paragraph. Tangent will connect the dots while you keep moving.
          </p>
          <div className={styles.fourActions}>
            <a className={styles.fourPrimary} href="#start">Start a fresh wall <ArrowRight /></a>
            <a className={styles.fourTextLink} href="#wall">Poke around ↓</a>
          </div>
        </div>

        <div
          className={styles.fourWall}
          id="wall"
          role="img"
          aria-label="A playful wall of connected notes, images, a voice memo, and a useful Tangent suggestion"
        >
          <svg className={styles.fourScribble} viewBox="0 0 720 650" aria-hidden="true">
            <path d="M134 156C246 112 267 224 346 273S500 293 566 205" />
            <path d="M270 486c89-120 179-64 278-96" />
            <path d="M114 345c82 15 95 89 156 141" />
          </svg>
          <article className={`${styles.fourNote} ${styles.fourNoteYellow}`}>
            <span className={styles.fourTape} />
            <small>THOUGHT / 10:42</small>
            <strong>What if the inbox felt like a workbench, not a waiting room?</strong>
            <span className={styles.fourUnderline}>keep this one</span>
          </article>
          <article className={`${styles.fourNote} ${styles.fourNoteBlue}`}>
            <small>VOICE NOTE · 00:38</small>
            <div className={styles.fourWave} aria-hidden="true">
              {Array.from({ length: 15 }, (_, index) => <span key={index} />)}
            </div>
            <strong>“Mess is just structure we haven’t met yet.”</strong>
          </article>
          <article className={`${styles.fourNote} ${styles.fourNoteWhite}`}>
            <small>SCREENSHOT / MATERIALS</small>
            <div className={styles.fourImageMock}>
              <span /><span /><span />
            </div>
            <p>Studio walls as external memory</p>
          </article>
          <article className={`${styles.fourNote} ${styles.fourNoteCoral}`}>
            <small>TANGENT NOTICED ✦</small>
            <strong>These three scraps are circling the same idea.</strong>
            <span className={styles.fourFakeButton}>Make a thread →</span>
          </article>
          <span className={styles.fourSticker}>OH!<br />THAT’S<br />USEFUL</span>
          <span className={styles.fourPinOne} />
          <span className={styles.fourPinTwo} />
        </div>
      </section>

      <section className={styles.fourBits} id="bits">
        <div className={styles.fourBitsTitle}>
          <span>GOOD BITS, NEATLY LABELED</span>
          <h2>Wild input.<br />Useful output.</h2>
        </div>
        <div className={styles.fourBitsGrid}>
          <article>
            <span>DROP</span>
            <h3>Anything goes in.</h3>
            <p>Voice, text, images, links, documents. Tangent doesn’t make you translate yourself.</p>
          </article>
          <article>
            <span>DOTS</span>
            <h3>Connections show up.</h3>
            <p>Related scraps find each other—even when you used completely different words.</p>
          </article>
          <article>
            <span>DIG</span>
            <h3>Your past work talks back.</h3>
            <p>Ask a real question. Get a grounded answer and every original source.</p>
          </article>
        </div>
      </section>

      <section className={styles.fourClosing} id="start">
        <div className={styles.fourClosingBurst} aria-hidden="true">✦</div>
        <p>NO PERFECT SYSTEM REQUIRED</p>
        <h2>Your brain has better things to do than file things.</h2>
        <a href="#top">Make your first mess <ArrowUpRight /></a>
      </section>
    </main>
  );
}

export function RecallInstrumentPage() {
  return (
    <main className={`${styles.page} ${styles.five}`} id="top">
      <header className={styles.fiveHeader}>
        <a className={styles.fiveBrand} href="#top" aria-label="Tangent home">
          <TangentMark />
          <span>Tangent</span>
        </a>
        <nav className={styles.fiveNav} aria-label="Primary navigation">
          <a href="#recall">Recall</a>
          <a href="#details">Details</a>
          <a href="#start">Pricing</a>
        </nav>
        <a className={styles.fiveHeaderCta} href="#start">Open a workspace <span>↗</span></a>
      </header>

      <section className={styles.fiveHero}>
        <div className={styles.fiveCopy}>
          <div className={styles.fiveKicker}>
            <span>PRIVATE NOTES</span>
            <span>CONNECTED MEMORY</span>
            <span>VERIFIABLE RECALL</span>
          </div>
          <h1>Think once.<br /><em>Find it forever.</em></h1>
          <p>
            Tangent gives your notes a dependable memory. Capture without sorting,
            retrieve without guessing, and see the source behind every answer.
          </p>
          <div className={styles.fiveActions}>
            <a href="#start">Start with one thought <ArrowRight /></a>
            <span>No card · Free up to 500 notes</span>
          </div>
          <div className={styles.fiveQuote}>
            <blockquote>
              “I stopped rebuilding context every Monday. Tangent already knows where I left off.”
            </blockquote>
            <p><strong>Mara V.</strong><span>Independent researcher</span></p>
          </div>
        </div>

        <div className={styles.fiveInstrument} id="recall">
          <div className={styles.fiveInstrumentTop}>
            <span>RECALL</span>
            <span>⌘ K</span>
          </div>
          <div className={styles.fiveQuery}>
            <span className={styles.fiveQueryMark}>?</span>
            <p>What did I decide about the first-run experience?</p>
            <span className={styles.fiveReturn}>↵</span>
          </div>
          <div className={styles.fiveAnswer}>
            <div className={styles.fiveAnswerLabel}>
              <Spark />
              <span>SYNTHESIS · 5 NOTES</span>
            </div>
            <h2>Let people experience a useful connection before asking them to organize anything.</h2>
            <p>
              Your March 8 decision says the first session should create one thread from imported notes.
              Two interviews support showing value before folder setup.
            </p>
          </div>
          <div className={styles.fiveTimeline}>
            <div className={styles.fiveTimelineLine} aria-hidden="true" />
            <article>
              <span className={styles.fiveTimelineDot} />
              <time>MAR 08</time>
              <div>
                <strong>Onboarding decision</strong>
                <p>First useful connection before first taxonomy.</p>
              </div>
              <span>01</span>
            </article>
            <article>
              <span className={styles.fiveTimelineDot} />
              <time>FEB 27</time>
              <div>
                <strong>Interview · Naomi</strong>
                <p>“I don’t know my categories until I’ve done the work.”</p>
              </div>
              <span>02</span>
            </article>
            <article>
              <span className={styles.fiveTimelineDot} />
              <time>FEB 19</time>
              <div>
                <strong>Pattern note</strong>
                <p>Demonstrate recognition, then invite structure.</p>
              </div>
              <span>03</span>
            </article>
          </div>
          <div className={styles.fiveInstrumentFooter}>
            <span>Answer grounded in your sources</span>
            <span className={styles.fiveSourceLink}>Open all 5 notes ↗</span>
          </div>
        </div>
      </section>

      <section className={styles.fiveDetails} id="details">
        <div className={styles.fiveDetailIntro}>
          <span>DESIGNED FOR TRUST</span>
          <h2>A memory you can inspect.</h2>
        </div>
        <div className={styles.fiveDetailGrid}>
          <article>
            <span>01</span>
            <h3>Source-aware</h3>
            <p>Every answer links back to the exact passages that informed it.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Quietly connected</h3>
            <p>Related thinking appears without forcing you to maintain a graph.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Yours, completely</h3>
            <p>Private by default, exportable in plain formats, and never sold.</p>
          </article>
        </div>
      </section>

      <section className={styles.fiveClosing} id="start">
        <div>
          <span>READY WHEN THE THOUGHT ARRIVES</span>
          <h2>Keep what matters within reach.</h2>
        </div>
        <a href="#top">Begin with Tangent <ArrowUpRight /></a>
      </section>
    </main>
  );
}
