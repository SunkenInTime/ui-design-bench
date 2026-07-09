import type { IterationId } from "./types";

type SecondBrainPageProps = {
  iteration: IterationId;
};

function Arrow() {
  return (
    <span className="inline-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function Wordmark() {
  return (
    <a className="brain-wordmark" href="#start" aria-label="Mica home">
      <span className="wordmark-orb" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>mica</span>
    </a>
  );
}

function SiteHeader({ iteration }: { iteration: IterationId }) {
  return (
    <header className="brain-header">
      <Wordmark />
      <nav className="brain-nav" aria-label="Main navigation">
        <a href="#capture">Capture</a>
        <a href="#connect">Connect</a>
        <a href="#retrieve">Retrieve</a>
      </nav>
      <a className="header-cta" href="#start">
        Start a brain <Arrow />
      </a>
      <span className="header-iteration" aria-label={`Direction ${iteration}`}>
        0{iteration}
      </span>
    </header>
  );
}

function AtlasIteration() {
  return (
    <>
      <section className="atlas-hero" id="start">
        <div className="atlas-copy">
          <p className="eyebrow eyebrow-rule">A personal archive for unfinished thoughts</p>
          <h1>
            Make room
            <br />
            <em>for your mind.</em>
          </h1>
          <p className="atlas-lede">
            Mica catches the loose threads—then quietly helps you find the ones worth
            pulling again.
          </p>
          <div className="atlas-actions">
            <a className="atlas-primary" href="#capture">
              Build your first shelf <Arrow />
            </a>
            <span className="atlas-caption">No folders to learn. No perfect system required.</span>
          </div>
        </div>
        <div className="atlas-map" aria-label="A constellation map connecting ideas">
          <div className="atlas-map-wash" aria-hidden="true" />
          <div className="atlas-orbit atlas-orbit-one" aria-hidden="true" />
          <div className="atlas-orbit atlas-orbit-two" aria-hidden="true" />
          <div className="atlas-map-line atlas-line-one" aria-hidden="true" />
          <div className="atlas-map-line atlas-line-two" aria-hidden="true" />
          <div className="atlas-map-line atlas-line-three" aria-hidden="true" />
          <span className="atlas-node atlas-node-one" aria-hidden="true" />
          <span className="atlas-node atlas-node-two" aria-hidden="true" />
          <span className="atlas-node atlas-node-three" aria-hidden="true" />
          <span className="atlas-node atlas-node-four" aria-hidden="true" />
          <span className="atlas-node atlas-node-five" aria-hidden="true" />
          <div className="atlas-center-card">
            <span className="card-kicker">Your mind, in motion</span>
            <strong>248</strong>
            <span>notes finding their way back to you</span>
          </div>
          <span className="atlas-map-label atlas-label-one">slow mornings</span>
          <span className="atlas-map-label atlas-label-two">designing for trust</span>
          <span className="atlas-map-label atlas-label-three">the long way home</span>
        </div>
      </section>
      <section className="atlas-strip" id="capture">
        <div>
          <span className="strip-index">01 / capture</span>
          <strong>Put the thought somewhere kind.</strong>
        </div>
        <div id="connect">
          <span className="strip-index">02 / connect</span>
          <strong>Let patterns show up over time.</strong>
        </div>
        <div>
          <span className="strip-index">03 / retrieve</span>
          <strong>Meet the right idea at the right moment.</strong>
        </div>
      </section>
      <section className="atlas-footer-note" id="retrieve">
        <span>For people who think in fragments.</span>
        <span>Made for the whole picture.</span>
      </section>
    </>
  );
}

function NightSignalIteration() {
  return (
    <>
      <section className="signal-hero" id="start">
        <div className="signal-copy">
          <p className="signal-status"><span /> Memory system / online</p>
          <h1>
            Keep the
            <br />
            <span>good signal.</span>
          </h1>
          <p className="signal-lede">
            Your second brain for the tabs still open in your head. Capture the spark;
            Mica handles the static.
          </p>
          <a className="signal-action" href="#capture">
            Enter the archive <Arrow />
          </a>
        </div>
        <div className="signal-console" aria-label="Mica memory console preview">
          <div className="console-topline">
            <span>mica / field notes</span>
            <span>sync 04:17:09</span>
          </div>
          <div className="console-prompt">
            <span className="console-caret">&gt;</span>
            <span>drop a thought, any shape</span>
            <span className="console-cursor" aria-hidden="true" />
          </div>
          <div className="signal-stack">
            <article className="signal-note signal-note-hot">
              <div className="signal-note-meta"><span>just now</span><span>unfiled</span></div>
              <p>“Maybe the best interfaces feel a little like being remembered.”</p>
              <div className="signal-note-tags"><span>design</span><span>human</span><span>thread +2</span></div>
            </article>
            <article className="signal-note signal-note-cool">
              <div className="signal-note-meta"><span>yesterday</span><span>linked</span></div>
              <p>Read later: the quiet power of giving someone a place to start.</p>
              <div className="signal-note-tags"><span>reading</span><span>onboarding</span></div>
            </article>
            <article className="signal-note signal-note-muted">
              <div className="signal-note-meta"><span>may 18</span><span>3 links</span></div>
              <p>A small collection of things that made the work feel lighter.</p>
              <div className="signal-note-tags"><span>studio log</span><span>rituals</span></div>
            </article>
          </div>
          <div className="console-bottomline">
            <span><i /> 12 threads breathing</span>
            <span>⌘ K to wander</span>
          </div>
        </div>
      </section>
      <section className="signal-flow" id="capture">
        <p className="signal-flow-heading">The loop</p>
        <div className="signal-flow-row" id="connect">
          <div><span>01</span><strong>Catch it</strong><small>before it disappears</small></div>
          <b aria-hidden="true">→</b>
          <div><span>02</span><strong>Connect it</strong><small>when something rhymes</small></div>
          <b aria-hidden="true">→</b>
          <div><span>03</span><strong>Call it back</strong><small>when it can help</small></div>
        </div>
      </section>
      <section className="signal-footer" id="retrieve">
        <span>Less sorting.</span><strong>More noticing.</strong><span>{"/// mica, v2.4"}</span>
      </section>
    </>
  );
}

function SoftArchitectureIteration() {
  return (
    <>
      <section className="soft-hero" id="start">
        <div className="soft-hero-topline">
          <span>For the curious, the restless, the in-progress.</span>
          <span>02:47 pm / Thursday</span>
        </div>
        <div className="soft-hero-content">
          <div className="soft-copy">
            <p className="soft-kicker">A gentler operating system for your attention</p>
            <h1>
              Let your ideas
              <br />
              <span>take up space.</span>
            </h1>
            <p className="soft-lede">
              Mica gives the half-sentences, bright hunches, and “come back to this”s a
              place to become more than a pile.
            </p>
            <a className="soft-action" href="#capture">Make a little room <Arrow /></a>
          </div>
          <div className="soft-ribbon" aria-label="A flowing ribbon of connected thoughts">
            <div className="soft-ribbon-glow" aria-hidden="true" />
            <div className="soft-thought soft-thought-one"><span>small rituals</span><b>↗</b></div>
            <div className="soft-thought soft-thought-two"><span>the shape of trust</span><b>↗</b></div>
            <div className="soft-thought soft-thought-three"><span>things worth repeating</span><b>↗</b></div>
            <div className="soft-ribbon-thread" aria-hidden="true" />
            <div className="soft-ribbon-badge"><span>this is where<br />the pieces meet</span><b>✳</b></div>
          </div>
        </div>
      </section>
      <section className="soft-grid" id="capture">
        <div className="soft-grid-intro"><span>Three simple moves</span><strong>Enough structure<br />to stay in motion.</strong></div>
        <article><span className="soft-card-number">01</span><h2>Catch the spark.</h2><p>Write it like you mean it, or like you barely have time. Both are allowed.</p><a href="#start">Open the quick capture <Arrow /></a></article>
        <article id="connect"><span className="soft-card-number">02</span><h2>Notice the echo.</h2><p>Mica surfaces the ideas that have been circling each other quietly.</p><a href="#start">See your threads <Arrow /></a></article>
        <article><span className="soft-card-number">03</span><h2>Return with ease.</h2><p>A calm, searchable home for the things you will be glad you kept.</p><a href="#retrieve">Find something useful <Arrow /></a></article>
      </section>
      <section className="soft-footer" id="retrieve"><span>Nothing to maintain.</span><strong>Just more of your own thinking, in reach.</strong></section>
    </>
  );
}

function IndexMachineIteration() {
  return (
    <>
      <section className="index-hero" id="start">
        <div className="index-hero-copy">
          <p className="index-kicker"><span>MIC—04</span> / Personal knowledge, without the performance</p>
          <h1>
            Give your
            <br />
            <em>ideas a spine.</em>
          </h1>
          <p className="index-lede">Mica turns the loose pages of your life into a living index—useful, human, and still a little messy.</p>
          <a className="index-action" href="#capture">Start the first chapter <Arrow /></a>
        </div>
        <div className="index-specimen" aria-label="An index of thoughts and connections">
          <div className="index-specimen-head"><span>Index / 2026</span><span>Updated as you live</span></div>
          <div className="index-specimen-title"><span>A living index</span><b>↘</b></div>
          <div className="index-lines">
            <div><span>01</span><strong>Things I know now</strong><i>18 notes</i></div>
            <div><span>02</span><strong>Questions worth carrying</strong><i>31 notes</i></div>
            <div className="index-line-highlight"><span>03</span><strong>Ways to make work lighter</strong><i>12 notes</i></div>
            <div><span>04</span><strong>People who changed the room</strong><i>07 notes</i></div>
            <div><span>05</span><strong>Recipes for beginning again</strong><i>24 notes</i></div>
          </div>
          <div className="index-specimen-foot"><span>← follow the thread</span><span>5 chapters / ∞ directions</span></div>
        </div>
      </section>
      <section className="index-band" id="capture">
        <div className="index-band-label">A better kind of backlog</div>
        <div className="index-band-content" id="connect"><span>It is not a productivity system.</span><strong>It is a place for the work<br />to become yours.</strong></div>
        <div className="index-band-aside">No streaks.<br />No dashboards.<br />No guilt.</div>
      </section>
      <section className="index-bottom" id="retrieve">
        <div><span className="index-bottom-label">The promise</span><strong>Remember<br /><em>what matters.</em></strong></div>
        <div className="index-note"><span>note / 0001</span><p>You do not need a better memory. You need a kinder place to put things.</p><a href="#start">Make one <Arrow /></a></div>
        <div className="index-bottom-mark" aria-hidden="true">↳</div>
      </section>
    </>
  );
}

function QuietLibraryIteration() {
  return (
    <>
      <section className="library-hero" id="start">
        <div className="library-spine" aria-hidden="true"><span>01</span><span>MICA / PRIVATE LIBRARY</span><span>2026</span></div>
        <div className="library-copy">
          <p className="library-kicker">A quiet place for a loud mind</p>
          <h1>
            Keep the good
            <br />
            parts <em>close.</em>
          </h1>
          <p className="library-lede">Your second brain, arranged like a well-loved shelf. Everything you save stays findable, even when you are not.</p>
          <a className="library-action" href="#capture">Take a first note <Arrow /></a>
        </div>
        <div className="library-shelf" aria-label="A shelf of saved notes">
          <div className="library-shelf-label"><span>Recently returned to</span><span>← turn a page</span></div>
          <article className="book-card book-card-featured"><span className="book-card-number">A—17</span><h2>The art of<br />staying with it</h2><p>8 notes · 3 connections</p><b aria-hidden="true">↗</b></article>
          <article className="book-card book-card-small book-card-amber"><span>F—04</span><strong>On making<br />enough room</strong><small>5 notes</small></article>
          <article className="book-card book-card-small book-card-blue"><span>C—09</span><strong>What the<br />morning knows</strong><small>11 notes</small></article>
          <div className="shelf-line" aria-hidden="true" />
          <div className="library-shelf-foot"><span>248 notes on the shelf</span><span>12 threads in bloom</span></div>
        </div>
      </section>
      <section className="library-manifesto" id="capture">
        <p className="library-manifesto-quote">“A thought kept is a thought given time.”</p>
        <div className="library-manifesto-rule" aria-hidden="true" />
        <div className="library-manifesto-copy"><span>01 / Keep</span><strong>Save the things<br />you want to become.</strong></div>
        <div className="library-manifesto-copy" id="connect"><span>02 / Return</span><strong>Come back when<br />the timing is right.</strong></div>
        <div className="library-manifesto-copy"><span>03 / Share</span><strong>Let the useful<br />parts travel.</strong></div>
      </section>
      <section className="library-footer" id="retrieve"><span>Built for a life of noticing.</span><a href="#start">Open the library <Arrow /></a><span>Vol. I / 2026</span></section>
    </>
  );
}

export default function SecondBrainPage({ iteration }: SecondBrainPageProps) {
  const variant =
    iteration === 1
      ? "atlas"
      : iteration === 2
        ? "signal"
        : iteration === 3
          ? "soft"
          : iteration === 4
            ? "index"
            : "library";

  return (
    <main className={`brain-page brain-page--${variant}`}>
      <div className="brain-grain" aria-hidden="true" />
      <SiteHeader iteration={iteration} />
      {iteration === 1 && <AtlasIteration />}
      {iteration === 2 && <NightSignalIteration />}
      {iteration === 3 && <SoftArchitectureIteration />}
      {iteration === 4 && <IndexMachineIteration />}
      {iteration === 5 && <QuietLibraryIteration />}
    </main>
  );
}
