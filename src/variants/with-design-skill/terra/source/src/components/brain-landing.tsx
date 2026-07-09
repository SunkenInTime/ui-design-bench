import styles from "./brain-landing.module.css";

type Iteration = "one" | "two" | "three" | "four" | "five";

export function BrainLanding({ iteration }: { iteration: Iteration }) {
  return (
    <main className={`${styles.page} ${styles[iteration]}`}>
      {iteration === "one" && <Atlas />}
      {iteration === "two" && <Garden />}
      {iteration === "three" && <Index />}
      {iteration === "four" && <Signal />}
      {iteration === "five" && <Studio />}
    </main>
  );
}

function Glyph() {
  return <span className={styles.glyph} aria-hidden="true"><i /><i /><i /></span>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Atlas() {
  return (
    <section className={styles.atlasSection} id="top">
      <header className={styles.atlasHeader}>
        <a className={styles.atlasBrand} href="#top"><Glyph />mnemon</a>
        <p>Personal knowledge, at a glance.</p>
        <a className={styles.atlasSignIn} href="#start">Sign in <Arrow /></a>
      </header>

      <div className={styles.atlasHero}>
        <div className={styles.atlasCopy}>
          <p className={styles.atlasKicker}><span />The memory map</p>
          <h1>Give your thoughts <em>somewhere to meet.</em></h1>
          <p className={styles.atlasIntro}>
            Mnemon turns the things you save into a living map of what you know — and what you might know next.
          </p>
          <div className={styles.atlasActions} id="start">
            <a className={styles.atlasPrimary} href="#explore">Build your second brain <Arrow /></a>
            <span>No folders required</span>
          </div>
        </div>

        <div className={styles.atlasSystem} aria-label="An illustration of connected notes">
          <svg className={styles.atlasLines} viewBox="0 0 760 620" fill="none" aria-hidden="true">
            <path d="M101 134C228 20 390 36 457 188C513 314 649 314 717 198" />
            <path d="M78 458C220 568 341 490 376 354C414 208 572 144 676 347" />
            <path d="M149 126C236 267 271 305 374 309C499 314 557 385 646 467" />
            <circle cx="377" cy="310" r="162" />
          </svg>
          <div className={`${styles.atlasCard} ${styles.atlasCardOne}`}><b>Field notes</b><span>→ ideas for attention</span></div>
          <div className={`${styles.atlasCard} ${styles.atlasCardTwo}`}><b>Somatic memory</b><span>three references</span></div>
          <div className={`${styles.atlasCard} ${styles.atlasCardThree}`}><b>Sunday / 14</b><span>loose thoughts</span></div>
          <div className={`${styles.atlasCard} ${styles.atlasCardFour}`}><b>Reading list</b><span>24 saved sources</span></div>
          <div className={styles.atlasCore}>
            <span>YOUR</span>
            <strong>mind,</strong>
            <em>connected</em>
            <i>✦</i>
          </div>
          <div className={styles.atlasPulse} aria-hidden="true" />
          <span className={`${styles.atlasStar} ${styles.starA}`}>✦</span>
          <span className={`${styles.atlasStar} ${styles.starB}`}>✦</span>
          <span className={`${styles.atlasStar} ${styles.starC}`}>✦</span>
        </div>
      </div>

      <footer className={styles.atlasFooter} id="explore">
        <p><span>01</span> A note is more useful when it knows where it belongs.</p>
        <div><span>CAPTURE</span><span>CONNECT</span><span>RETURN</span></div>
      </footer>
    </section>
  );
}

function Garden() {
  return (
    <section className={styles.gardenSection} id="top">
      <header className={styles.gardenHeader}>
        <a className={styles.gardenBrand} href="#top"><Glyph />mnemon</a>
        <nav aria-label="Primary navigation"><a href="#method">How it grows</a><a href="#garden-start">Start a garden</a></nav>
      </header>

      <div className={styles.gardenHero}>
        <div className={styles.gardenCopy}>
          <p className={styles.gardenKicker}>A notebook that puts down roots</p>
          <h1>Your mind grows in <em>connections.</em></h1>
          <p>Collect the bright fragments. Mnemon gathers their threads until they become a place you can return to.</p>
          <a className={styles.gardenCta} id="garden-start" href="#method">Plant your first note <Arrow /></a>
          <div className={styles.gardenFootnote}><i />Private by default. Yours for the long haul.</div>
        </div>

        <div className={styles.gardenScene} aria-label="A notebook page with a growing knowledge garden">
          <div className={styles.gardenSun}>new<br />thought</div>
          <div className={styles.gardenPaper}>
            <p className={styles.paperMeta}>Daily note · Wednesday</p>
            <h2>Pay attention to what feels <span>alive.</span></h2>
            <div className={styles.paperRule} />
            <p className={styles.paperText}>A line from a book, a question from the walk home, a thought worth keeping close.</p>
            <span className={styles.paperLink}>Links to: <b>attention / field notes / rituals</b></span>
          </div>
          <div className={styles.gardenStem}><i /><b /><em /></div>
          <div className={styles.gardenLabel}><span>↳</span> a connection appears</div>
          <div className={styles.gardenLeafOne} />
          <div className={styles.gardenLeafTwo} />
          <div className={styles.gardenBud} />
          <div className={styles.gardenSoil}><span>saved today</span><b>07</b><i /></div>
        </div>
      </div>

      <div className={styles.gardenStrip} id="method">
        <div><span>01</span><b>Gather</b><p>Save the small things before they vanish.</p></div>
        <div><span>02</span><b>Notice</b><p>See the ideas that keep showing up.</p></div>
        <div><span>03</span><b>Grow</b><p>Build a body of work that remembers you.</p></div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <section className={styles.indexSection} id="top">
      <header className={styles.indexHeader}>
        <a className={styles.indexBrand} href="#top"><Glyph />MNEMON</a>
        <p>PERSONAL RESEARCH SYSTEM / 2025</p>
        <a href="#index-start">Open workspace <Arrow /></a>
      </header>

      <div className={styles.indexHero}>
        <div className={styles.indexTitle}>
          <p>FOR THE CURIOUSLY OVER-PREPARED</p>
          <h1>Find what your <span>research remembers.</span></h1>
          <p>More than a pile of tabs. Mnemon keeps the source, the thought, and the unexpected connection in the same place.</p>
          <a id="index-start" className={styles.indexCta} href="#index-desk">Start an index <Arrow /></a>
        </div>

        <div className={styles.indexDesk} id="index-desk" aria-label="A visual research index">
          <aside className={styles.indexSpine}>
            <span>INDEX</span><b>128</b><i />
            <span>LINKED</span><b>046</b><i />
            <span>OPEN</span><b>017</b>
          </aside>
          <article className={styles.indexPaper}>
            <div className={styles.indexPaperTop}><span>NOTE / 048</span><span>⟡ 3 BACKLINKS</span></div>
            <p className={styles.indexTag}>ATTENTION · READING · PRACTICE</p>
            <h2>What we return to shapes what we can see.</h2>
            <p>Attention is an act of choosing a world. The work is to make a record of the worlds we want to keep choosing.</p>
            <div className={styles.indexQuote}>“A library is not a storage room. It is a pattern-making machine.”</div>
            <div className={styles.indexPaperBottom}><span>↳ RELATED: FIELD NOTES</span><b>23.07</b></div>
          </article>
          <div className={styles.indexThread} aria-hidden="true"><i /><b /><em /></div>
          <div className={styles.indexRelated}><span>CONNECTED</span><b>Field notes</b><b>Research ritual</b><b>Questions worth keeping</b></div>
          <div className={styles.indexStamp}>KEEP<br />THIS</div>
        </div>
      </div>

      <footer className={styles.indexFooter}><span>Built for sources, sketches, questions, and the occasional rabbit hole.</span><b>⌘ K&nbsp;&nbsp; Capture anything</b></footer>
    </section>
  );
}

function Signal() {
  return (
    <section className={styles.signalSection} id="top">
      <header className={styles.signalHeader}>
        <a className={styles.signalBrand} href="#top"><Glyph />MNEMON</a>
        <div className={styles.signalStatus}><i />SYSTEM: IN CONTEXT</div>
        <a href="#signal-start">Get in sync <Arrow /></a>
      </header>

      <div className={styles.signalHero}>
        <div className={styles.signalCopy}>
          <p className={styles.signalKicker}>COGNITION, TUNED.</p>
          <h1>Keep the <em>signal</em> in your notes.</h1>
          <p>Mnemon listens across your ideas, so the note you need arrives with the context that makes it matter.</p>
          <div className={styles.signalActions} id="signal-start"><a href="#signal-board">Open your signal desk <Arrow /></a><span>Private intelligence, not public noise.</span></div>
        </div>

        <div className={styles.signalBoard} id="signal-board" aria-label="A signal desk visual">
          <div className={styles.signalBoardTop}><span>CONTEXT ENGINE</span><b>LIVE</b><i>10:42</i></div>
          <div className={styles.signalScore}><span>CLARITY</span><strong>86</strong><b>/100</b><i>+12 this week</i></div>
          <div className={styles.signalWave} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className={styles.signalSource}><span>NOW CONNECTING</span><b>Field notes ↔ Attention ritual</b><i>2m ago</i></div>
          <div className={styles.signalOrbit} aria-hidden="true"><i /><i /><i /><b>✦</b><em>+</em></div>
          <div className={styles.signalPillOne}>7 notes resurfaced</div>
          <div className={styles.signalPillTwo}>new thread detected</div>
        </div>
      </div>

      <div className={styles.signalFooter}><span>STORE LESS. REMEMBER BETTER.</span><p>Signals are gentle prompts, never a feed.</p><div><i /> Encrypted at rest</div></div>
    </section>
  );
}

function Studio() {
  return (
    <section className={styles.studioSection} id="top">
      <header className={styles.studioHeader}>
        <a className={styles.studioBrand} href="#top"><Glyph />mnemon</a>
        <nav aria-label="Primary navigation"><a href="#studio-note">A place to begin</a><a href="#studio-start">Start writing <Arrow /></a></nav>
      </header>

      <div className={styles.studioHero}>
        <div className={styles.studioCopy}>
          <p className={styles.studioKicker}>WHEN EVERYTHING STARTS SOMEWHERE</p>
          <h1>Make a home for your <em>unfinished thoughts.</em></h1>
          <p>Mnemon is a quiet place to catch the ideas that follow you around — before they get lost in the day.</p>
          <a className={styles.studioCta} id="studio-start" href="#studio-note">Begin with a blank page <Arrow /></a>
          <div className={styles.studioTrust}><i>✦</i> Your notes stay yours. Always.</div>
        </div>

        <div className={styles.studioDesk} id="studio-note" aria-label="A quiet note-taking workspace illustration">
          <div className={styles.studioHalo} aria-hidden="true" />
          <article className={styles.studioPaper}>
            <div className={styles.studioPaperHead}><span>THURSDAY, 24 JUL</span><i>•••</i></div>
            <h2>Things I want to remember about a slower life</h2>
            <p>— the soft insistence of morning light<br />— walking without an answer in mind<br />— <mark>making room for the next thought</mark></p>
            <div className={styles.studioPaperFoot}><span>3 quiet links</span><b>↗</b></div>
          </article>
          <div className={styles.studioClipOne}>↳ A note from last May</div>
          <div className={styles.studioClipTwo}>saved for later</div>
          <div className={styles.studioThread} aria-hidden="true"><i /><b /><em /></div>
          <div className={styles.studioPebbleOne} aria-hidden="true" />
          <div className={styles.studioPebbleTwo} aria-hidden="true" />
        </div>
      </div>

      <footer className={styles.studioFooter}><span>NOTES FOR A LIFE IN PROGRESS</span><div><b>Capture</b><i /> <b>Connect</b><i /> <b>Come back</b></div></footer>
    </section>
  );
}
