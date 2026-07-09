import Link from "next/link";

export type LandingVariant = "one" | "two" | "three" | "four" | "five";

type LandingPageProps = {
  variant: LandingVariant;
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className={diagonal ? "icon icon-diagonal" : "icon"} viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12M10.5 4.5 16 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.2c.4 4.48.93 5.13 5.25 5.55-4.32.42-4.85 1.07-5.25 5.55-.4-4.48-.93-5.13-5.25-5.55C9.07 7.33 9.6 6.68 10 2.2Z" fill="currentColor" />
      <path d="M15.8 12.2c.16 1.8.38 2.06 2.12 2.23-1.74.17-1.96.43-2.12 2.23-.16-1.8-.38-2.06-2.12-2.23 1.74-.17 1.96-.43 2.12-2.23Z" fill="currentColor" />
    </svg>
  );
}

function Check() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      <path d="m4 10.2 3.5 3.45L16 5.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Play() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      <path d="m7 5.35 7.1 4.3a.4.4 0 0 1 0 .7L7 14.65a.4.4 0 0 1-.6-.35v-8.6a.4.4 0 0 1 .6-.35Z" fill="currentColor" />
    </svg>
  );
}

function Command() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      <path d="M7.3 7.3a2.3 2.3 0 1 1-3.25-3.25A2.3 2.3 0 0 1 7.3 7.3Zm8.65 8.65a2.3 2.3 0 1 1-3.25-3.25 2.3 2.3 0 0 1 3.25 3.25ZM4.05 15.95A2.3 2.3 0 1 1 7.3 12.7a2.3 2.3 0 0 1-3.25 3.25ZM12.7 7.3a2.3 2.3 0 1 1 3.25-3.25A2.3 2.3 0 0 1 12.7 7.3ZM7.3 5.7h5.4m0 8.6H7.3m-1.6-1.6V7.3m8.6 0v5.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function Brand({ name, symbol }: { name: string; symbol?: "orb" | "wave" | "seed" | "bolt" | "stack" }) {
  return (
    <Link href="#top" className={`brand brand--${symbol ?? "orb"}`} aria-label={`${name} home`}>
      <span className="brand-mark" aria-hidden="true">
        {symbol === "wave" ? <span className="brand-wave">~</span> : null}
        {symbol === "seed" ? <span className="brand-seed" /> : null}
        {symbol === "bolt" ? <span className="brand-bolt">↗</span> : null}
        {symbol === "stack" ? <span className="brand-stack">▤</span> : null}
      </span>
      <span>{name}</span>
    </Link>
  );
}

function One() {
  return (
    <main className="landing landing-one">
      <div className="one-halo one-halo--left" aria-hidden="true" />
      <div className="one-halo one-halo--right" aria-hidden="true" />
      <header className="site-header one-header">
        <Brand name="muse" />
        <nav className="header-links" aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#journal">Journal</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="quiet-link" href="#login">Log in <Arrow /></a>
      </header>

      <section className="one-hero">
        <div className="one-kicker"><Sparkle /> YOUR MIND, REMEMBERED</div>
        <h1>Give every <em>thought</em> a place to land.</h1>
        <p className="hero-copy">A second brain that quietly gathers the sparks, threads, and moments shaping your life.</p>
        <div className="hero-actions">
          <a className="button button--violet" href="#start">Start building yours <Arrow /></a>
          <a className="watch-link" href="#preview"><span><Play /></span> See it in motion</a>
        </div>
        <p className="micro-copy"><span>✦</span> Free to begin. No credit card.</p>
      </section>

      <section className="one-workspace" id="preview" aria-label="Muse workspace preview">
        <div className="workspace-topbar">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="workspace-path">workspace <span>/</span> spring ideas</div>
          <div className="workspace-profile">A</div>
        </div>
        <aside className="workspace-sidebar">
          <div className="sidebar-workspace"><span className="tiny-orb" /> Ava&apos;s space <span>⌄</span></div>
          <div className="sidebar-search">⌘&nbsp; Search everything <kbd>⌘ K</kbd></div>
          <div className="sidebar-list">
            <span className="is-current">◈ &nbsp; Today</span>
            <span>◌ &nbsp; Inbox <b>4</b></span>
            <span>⌁ &nbsp; Threads</span>
          </div>
          <p>COLLECTIONS</p>
          <div className="sidebar-list muted">
            <span>◐ &nbsp; Learning</span>
            <span>◒ &nbsp; Studio notes</span>
            <span>◓ &nbsp; Personal</span>
          </div>
          <div className="sidebar-add">＋ New collection</div>
        </aside>
        <div className="workspace-main">
          <div className="workspace-note-head">
            <div><span className="note-emoji">✳</span><span className="note-date">THURSDAY, APRIL 18</span></div>
            <div className="note-actions">↗ &nbsp; ···</div>
          </div>
          <h2>A soft place to<br />keep a big life.</h2>
          <p className="note-intro">Things I want to remember from this small, luminous week.</p>
          <div className="note-item"><span className="note-check"><Check /></span><div><b>Make room for boredom</b><small>Idea from a walk around the reservoir</small></div><span className="note-tag">thought</span></div>
          <div className="note-item"><span className="note-check"><Check /></span><div><b>Read Annie Dillard again</b><small>“How we spend our days is, of course, how we spend our lives.”</small></div><span className="note-tag note-tag--orange">book</span></div>
          <div className="note-item"><span className="note-check is-empty" /><div><b>Plan the next studio dinner</b><small>Invite the people who make the room feel larger</small></div><span className="note-tag note-tag--green">life</span></div>
          <div className="workspace-line" />
          <div className="workspace-connection"><span>✦</span> Connected to <u>Slow productivity</u>, <u>Sunday walks</u> and 12 more memories</div>
        </div>
        <aside className="workspace-context">
          <div className="context-title">IN THIS THOUGHT</div>
          <div className="context-person"><span>◉</span><div><b>Slow productivity</b><small>Topic · 8 notes</small></div></div>
          <div className="context-person"><span className="orange-orb">◉</span><div><b>Sunday walks</b><small>Collection · 14 notes</small></div></div>
          <div className="context-divider" />
          <div className="context-title">RECENTLY CAPTURED</div>
          <p>“The creative act is an act of attention.”</p>
          <small>from The Marginalian · 2h ago</small>
        </aside>
        <div className="one-float-card one-float-card--top"><span>✦</span><div><small>CONNECTED THOUGHT</small><b>Your best ideas rarely arrive alone.</b></div></div>
        <div className="one-float-card one-float-card--bottom"><span className="green-dot" /><div><small>MEMORY SURFACED</small><b>One year ago today</b></div><Arrow /></div>
      </section>
    </main>
  );
}

function Two() {
  return (
    <main className="landing landing-two">
      <div className="two-aurora" aria-hidden="true" />
      <header className="site-header two-header">
        <Brand name="afterglow" symbol="wave" />
        <nav className="header-links" aria-label="Main navigation">
          <a href="#method">Method</a>
          <a href="#members">For members</a>
          <a href="#notes">Notes</a>
        </nav>
        <a className="two-join" href="#join">Join the quiet <Arrow /></a>
      </header>

      <section className="two-hero">
        <div className="two-side-note two-side-note--left"><span>001</span><p>for every<br />open tab<br />in your mind</p></div>
        <div className="two-headline">
          <div className="two-eyebrow"><i /> A PRIVATE PLACE TO THINK</div>
          <h1>Keep the noise.<br /><em>Lose the clutter.</em></h1>
          <p>A thoughtful second brain for the ideas that arrive after the meeting, during the walk, and just before sleep.</p>
          <a className="two-cta" href="#start"><span>Begin with a blank page</span><Arrow /></a>
        </div>
        <div className="two-side-note two-side-note--right"><span>EST. 2024</span><p>Open a note.<br />Close a loop.</p></div>
      </section>

      <section className="two-stage" aria-label="Afterglow writing experience preview">
        <div className="two-stage-glow" aria-hidden="true" />
        <div className="two-axis two-axis--horizontal" aria-hidden="true" />
        <div className="two-axis two-axis--vertical" aria-hidden="true" />
        <article className="two-note two-note--main">
          <div className="two-note-meta"><span>11:48 PM</span><span className="live-dot" /> unfiled</div>
          <h2>Small observations<br />from a full day</h2>
          <p>Maybe the work is not to hold on to everything, but to build a place where the important things can return when we need them.</p>
          <div className="two-note-footer"><span>↗ linked to 3 ideas</span><span>•••</span></div>
        </article>
        <article className="two-note two-note--left"><div className="two-card-number">01</div><p>“A good system should feel like an exhale.”</p><span>— saved from a conversation</span></article>
        <article className="two-note two-note--right"><div className="two-card-number">02</div><h3>Today, gently</h3><ul><li><span /><s>Water the herbs</s></li><li><span />Send the last draft</li><li><span />Call Mom</li></ul></article>
        <div className="two-path two-path--a" aria-hidden="true" />
        <div className="two-path two-path--b" aria-hidden="true" />
        <div className="two-stage-caption"><span>THE LONG WAY AROUND</span><p>Every note becomes a path back to yourself.</p></div>
      </section>
      <footer className="two-footer"><span>MADE FOR A LIFETIME OF CURIOUS MINDS</span><span>SCROLL TO RECOLLECT ↓</span></footer>
    </main>
  );
}

function Three() {
  return (
    <main className="landing landing-three">
      <div className="three-sun" aria-hidden="true" />
      <header className="site-header three-header">
        <Brand name="rivulet" symbol="seed" />
        <nav className="header-links" aria-label="Main navigation">
          <a href="#why">Why rivulet</a>
          <a href="#features">Features</a>
          <a href="#journal">Field journal</a>
        </nav>
        <a className="three-login" href="#login">Sign in</a>
      </header>

      <section className="three-hero">
        <div className="three-copy">
          <span className="three-kicker"><i /> A SECOND BRAIN, ALIVE</span>
          <h1>Let your ideas<br /><em>grow together.</em></h1>
          <p>Capture a passing thought. Rivulet helps you notice the unexpected ways it belongs to everything else.</p>
          <a className="button button--forest" href="#plant">Plant your first thought <Arrow /></a>
          <div className="three-proof"><div className="tiny-avatars"><i>A</i><i>J</i><i>M</i><i>R</i></div><span>Grown with 12,000 curious people</span></div>
        </div>

        <div className="three-garden" aria-label="A visual knowledge garden">
          <svg className="garden-lines" viewBox="0 0 650 560" fill="none" aria-hidden="true">
            <path d="M101 380C165 331 166 282 240 263s104 58 182 45c62-11 59-79 130-105" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" />
            <path d="M94 132c91 20 108 115 169 131 84 22 88-73 153-58 46 10 74 61 151 58" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" />
            <path d="M240 263c-12 93 60 137 78 219" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" />
            <path d="M422 308c6 73-41 119-104 174" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" />
          </svg>
          <div className="garden-node garden-node--quote"><span>✳</span><p>“Make more room for<br />wonder.”</p><small>captured today</small></div>
          <div className="garden-node garden-node--book"><span className="garden-icon">◒</span><div><b>The Creative Act</b><small>Reading note · 7 links</small></div></div>
          <div className="garden-node garden-node--center"><span className="center-flower">✦</span><b>How to make<br />a good life</b><small>12 connected notes</small></div>
          <div className="garden-node garden-node--idea"><span className="garden-icon">✎</span><div><b>Sunday dinner</b><small>Idea · 3 branches</small></div></div>
          <div className="garden-node garden-node--sound"><span className="garden-icon">◖</span><div><b>Voice memo</b><small>2:18 · this morning</small></div></div>
          <div className="garden-node garden-node--seed"><span>☼</span><p>Things I&apos;m<br />learning to want</p></div>
          <div className="garden-node garden-node--person"><span className="portrait-dot">L</span><div><b>Lauren</b><small>People · 18 moments</small></div></div>
          <div className="garden-label garden-label--one">A THOUGHT</div>
          <div className="garden-label garden-label--two">BECOMES A TRAIL</div>
        </div>
      </section>

      <section className="three-strip">
        <p><span>01</span> Catch what matters</p><p><span>02</span> Follow the thread</p><p><span>03</span> Return when ready</p>
      </section>
    </main>
  );
}

function Four() {
  return (
    <main className="landing landing-four">
      <div className="four-grid" aria-hidden="true" />
      <header className="site-header four-header">
        <Brand name="signal" symbol="bolt" />
        <nav className="header-links" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#use-cases">Use cases</a>
          <a href="#changelog">Changelog <sup>12</sup></a>
        </nav>
        <div className="four-header-actions"><a href="#sign-in">Sign in</a><a className="four-small-cta" href="#start">Get Signal <Arrow /></a></div>
      </header>

      <section className="four-hero">
        <div className="four-topline"><span>THE PERSONAL INTELLIGENCE LAYER</span><span>v1.0 — NOW OPEN</span></div>
        <h1>Know more.<br /><em>Carry less.</em></h1>
        <p>Your notes, decisions, people and projects — connected in a system that thinks at the speed you do.</p>
        <div className="four-actions"><a className="button button--electric" href="#start">Build your second brain <Arrow /></a><span><b>⌘</b> No setup required</span></div>
      </section>

      <section className="four-product" aria-label="Signal product preview">
        <aside className="four-rail">
          <div className="four-rail-mark"><Command /></div>
          <span className="is-selected">⌂</span><span>⌕</span><span>◫</span><span>◌</span><span>▣</span>
          <div className="four-rail-bottom">?</div>
        </aside>
        <div className="four-app">
          <div className="four-app-top"><div className="four-breadcrumb">HOME <b>/</b> PRODUCT STRATEGY <b>/</b> <span>2024 BET</span></div><div><span className="four-search">⌕ Search</span><span className="four-avatar">AK</span></div></div>
          <div className="four-app-content">
            <div className="four-main-note">
              <div className="four-note-meta"><span className="four-status">ACTIVE</span><span>UPDATED 2 MIN AGO</span></div>
              <h2>The best product<br />is the one people<br /><em>remember using.</em></h2>
              <p>We are not building another place to write. We are building recall: a way for every useful thing you have ever found to show up at the exact right moment.</p>
              <div className="four-note-tags"><span># strategy</span><span># product</span><span># north-star</span><button>＋</button></div>
              <div className="four-ai-callout"><span>✦</span><div><small>SIGNAL FOUND A PATTERN</small><p>This idea appears in <b>8 notes</b> across product research, customer calls, and your 2023 annual review.</p></div><Arrow /></div>
            </div>
            <aside className="four-context">
              <div className="four-context-title">LINKED CONTEXT <span>↗</span></div>
              <article><span className="context-type context-type--blue">NOTE</span><b>On friction as a feeling</b><small>Yesterday · 4 links</small></article>
              <article><span className="context-type context-type--lime">CALL</span><b>Customer interview #07</b><small>Monday · with Mateo R.</small></article>
              <article><span className="context-type context-type--pink">DOC</span><b>The memory layer</b><small>Feb 14 · 16 links</small></article>
              <button className="four-view-all">View all connections <Arrow /></button>
            </aside>
          </div>
        </div>
        <div className="four-capture"><div className="capture-top"><span>⌁</span><span>9:41</span></div><p>Quick capture</p><h3>The thing about good questions is they keep working after you ask them.</h3><div className="capture-bottom"><span>＋ Add context</span><button>Save <Arrow /></button></div></div>
        <div className="four-system-label">YOUR SYSTEM<br />IN MOTION <i>↘</i></div>
      </section>
    </main>
  );
}

function Five() {
  return (
    <main className="landing landing-five">
      <div className="five-rule five-rule--left" aria-hidden="true" />
      <div className="five-rule five-rule--right" aria-hidden="true" />
      <header className="site-header five-header">
        <Brand name="memento" symbol="stack" />
        <nav className="header-links" aria-label="Main navigation">
          <a href="#story">Our story</a>
          <a href="#membership">Membership</a>
          <a href="#library">The library</a>
        </nav>
        <a className="five-button" href="#join">Enter the library <Arrow /></a>
      </header>

      <section className="five-hero">
        <div className="five-title-block">
          <div className="five-kicker"><span>VOL. I</span> A PERSONAL ARCHIVE FOR A FULL LIFE</div>
          <h1>Keep a record<br />of <em>becoming.</em></h1>
          <p>Memento is the private library for the ideas, observations, and little evidence of a life well lived.</p>
          <a className="five-text-cta" href="#begin">Begin your archive <Arrow /></a>
        </div>
        <div className="five-edition"><span>ISSUE 04</span><span>SPRING / 2024</span></div>
      </section>

      <section className="five-library" aria-label="Memento personal archive preview">
        <div className="five-library-title"><span>THE PERSONAL LIBRARY</span><span>183 ENTRIES</span></div>
        <div className="five-bookshelf">
          <article className="five-book five-book--one"><div className="book-spine"><span>2024</span><i>Notes<br />on attention</i><b>MM</b></div><div className="book-pages" /></article>
          <article className="five-book five-book--two"><div className="book-cover"><span>FIELD<br />NOTES</span><small>VOL. 02</small><i>⌁</i></div></article>
          <article className="five-book five-book--three"><div className="book-cover"><span>letters<br />to self</span><small>jan—mar</small></div></article>
          <article className="five-book five-book--four"><div className="book-cover"><span>THE<br />PEOPLE<br />I LOVE</span><i>✳</i></div></article>
          <div className="five-shelf-line" />
        </div>
        <div className="five-featured-entry">
          <div className="entry-stamp">18<br /><span>APR</span></div>
          <div className="entry-body"><small>FROM THE DAILY RECORD</small><h2>Things that made the day feel spacious</h2><p>Cold air through the open window. The good kind of tired. A note from a friend that said exactly what it meant.</p><div><span>PERSONAL</span><span>GRATITUDE</span><span>SPRING</span></div></div>
          <div className="entry-open"><span>READ ENTRY</span><Arrow diagonal /></div>
        </div>
        <div className="five-quote"><span>“</span><p>Memory is the<br />diary that we all<br />carry about with us.</p><small>— OSCAR WILDE</small></div>
      </section>
      <footer className="five-footer"><span>© MEMENTO, 2024</span><span>MADE TO OUTLAST THE MOMENT</span><span>PRIVACY FIRST</span></footer>
    </main>
  );
}

export function LandingPage({ variant }: LandingPageProps) {
  if (variant === "one") return <One />;
  if (variant === "two") return <Two />;
  if (variant === "three") return <Three />;
  if (variant === "four") return <Four />;
  return <Five />;
}
