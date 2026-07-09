import Link from "next/link";
import type { ReactNode } from "react";

export type IterationId = "1" | "2" | "3" | "4" | "5";

type Iteration = {
  id: IterationId;
  name: string;
  descriptor: string;
  accent: string;
};

export const iterations: Iteration[] = [
  { id: "1", name: "Orbit", descriptor: "command center", accent: "violet" },
  { id: "2", name: "Paper", descriptor: "analog studio", accent: "moss" },
  { id: "3", name: "Signal", descriptor: "focus mode", accent: "lime" },
  { id: "4", name: "Atlas", descriptor: "knowledge map", accent: "blue" },
  { id: "5", name: "Archive", descriptor: "editorial library", accent: "rose" },
];

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Plus({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Search({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="7.25" cy="7.25" r="4.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Spark({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5 9.35 6.65 14.5 8 9.35 9.35 8 14.5 6.65 9.35 1.5 8l5.15-1.35L8 1.5Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
    </svg>
  );
}

function Lock({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="3.25" y="6.75" width="9.5" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.25 6.75V4.9A2.75 2.75 0 0 1 8 2.15a2.75 2.75 0 0 1 2.75 2.75v1.85" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function Play({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="m6 4 5 4-5 4V4Z" fill="currentColor" />
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-mark ${light ? "brand-mark--light" : ""}`} href="#start" aria-label="Morrow home">
      <span className="brand-glyph" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>morrow</span>
    </Link>
  );
}

export function SourceIterationSwitcher({ active }: { active: IterationId }) {
  return (
    <nav className="iteration-switcher" aria-label="Landing page iterations">
      <div className="switcher-label">
        <span>Explore</span>
        <strong>5 directions</strong>
      </div>
      <div className="switcher-options">
        {iterations.map((iteration) => (
          <Link
            key={iteration.id}
            href={`/${iteration.id}`}
            className={`switcher-option switcher-option--${iteration.accent} ${active === iteration.id ? "is-active" : ""}`}
            aria-current={active === iteration.id ? "page" : undefined}
            title={`${iteration.name} — ${iteration.descriptor}`}
          >
            <span className="switcher-number">{iteration.id}</span>
            <span className="switcher-name">{iteration.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

function OrbitLanding() {
  return (
    <main className="landing landing--orbit">
      <Grain />
      <header className="site-header site-header--orbit">
        <Logo light />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#principles">Principles</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="quiet-link" href="#login">Log in</a>
          <a className="header-cta header-cta--light" href="#start">Start for free <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <section className="orbit-hero" id="product">
        <div className="orbit-copy">
          <div className="eyebrow eyebrow--violet"><span className="eyebrow-dot" />Your second brain, in orbit</div>
          <h1>Keep every thought <em>in motion.</em></h1>
          <p className="hero-lede">Morrow is the calm place where notes, questions, and half-formed ideas become a map you can actually use.</p>
          <div className="hero-actions">
            <a className="button button--violet" href="#start">Build your orbit <ArrowUpRight size={15} /></a>
            <a className="text-button text-button--light" href="#demo"><span className="play-button"><Play size={13} /></span> See how it works</a>
          </div>
          <div className="hero-proof hero-proof--light"><span className="mini-avatars"><span>AM</span><span>JS</span><span>NK</span></span><span>Join 12,000 curious minds</span></div>
        </div>

        <div className="orbit-visual" id="demo">
          <div className="orbit-glow" />
          <div className="orbit-ring orbit-ring--one" />
          <div className="orbit-ring orbit-ring--two" />
          <div className="orbit-ring orbit-ring--three" />
          <div className="orbit-planet orbit-planet--violet" />
          <div className="orbit-planet orbit-planet--peach" />
          <div className="orbit-planet orbit-planet--cyan" />
          <div className="orbit-console">
            <div className="console-sidebar">
              <div className="console-avatar">A</div>
              <div className="console-side-group">
                <span className="console-side-label">Workspace</span>
                <span className="console-side-item is-selected"><span className="side-icon side-icon--grid" />Today <span className="side-count">4</span></span>
                <span className="console-side-item"><span className="side-icon side-icon--inbox" />Inbox <span className="side-count">12</span></span>
                <span className="console-side-item"><span className="side-icon side-icon--star" />Starred</span>
              </div>
              <div className="console-side-group console-side-group--bottom">
                <span className="console-side-label">Collections</span>
                <span className="console-side-item"><span className="side-dot side-dot--peach" />Ideas</span>
                <span className="console-side-item"><span className="side-dot side-dot--violet" />Reading list</span>
                <span className="console-side-item"><span className="side-dot side-dot--cyan" />Field notes</span>
              </div>
              <span className="console-settings">⌘ ,</span>
            </div>
            <div className="console-main">
              <div className="console-topline"><span>Friday, June 14</span><span className="console-search"><Search size={13} /> Search <kbd>⌘ K</kbd></span></div>
              <div className="console-greeting"><span className="console-kicker">Good morning, Alex</span><h2>Make space for <span>good ideas.</span></h2></div>
              <div className="capture-bar"><span className="capture-plus"><Plus size={14} /></span><span>Capture a thought...</span><kbd>⌘ N</kbd></div>
              <div className="console-section-head"><span>In motion <b>4</b></span><span className="view-all">View all <ArrowRight size={12} /></span></div>
              <div className="idea-grid">
                <article className="idea-card idea-card--violet"><span className="idea-label">Reading note</span><h3>Attention is a form of love.</h3><span className="idea-meta">12 min ago · Philosophy</span><span className="idea-spark"><Spark size={17} /></span></article>
                <article className="idea-card idea-card--peach"><span className="idea-label">Loose thread</span><h3>What if rest is part of the work?</h3><span className="idea-meta">Yesterday · Life</span><span className="idea-lines" /></article>
                <article className="idea-card idea-card--cyan"><span className="idea-label">Project seed</span><h3>A tiny field guide to noticing.</h3><span className="idea-meta">Jun 11 · Projects</span><span className="idea-index">03</span></article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="orbit-footer-note" id="principles"><span className="footer-rule" /><span>Designed for the gap between knowing and doing.</span><span className="footer-rule" /></section>
    </main>
  );
}

function PaperLanding() {
  return (
    <main className="landing landing--paper">
      <Grain />
      <header className="site-header site-header--paper">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#notes">Notes that breathe</a>
          <a href="#journal">Journal</a>
        </nav>
        <a className="header-cta header-cta--ink" href="#start">Open your notebook <ArrowUpRight size={14} /></a>
      </header>

      <section className="paper-hero">
        <div className="paper-copy">
          <div className="eyebrow eyebrow--moss"><span className="eyebrow-line" />A quieter place for louder ideas</div>
          <h1>Give your thoughts<br /><i>a place to land.</i></h1>
          <p className="hero-lede">Morrow turns scattered notes into a living map of what you know — with room for the messy middle.</p>
          <div className="paper-cta-row"><a className="button button--ink" href="#start">Start with a blank page <ArrowRight size={15} /></a><span className="small-note"><Lock size={13} />Private by default</span></div>
          <div className="paper-stat-row"><div><strong>18k</strong><span>pages started</span></div><div><strong>0</strong><span>distractions</span></div><div><strong>∞</strong><span>ways to connect</span></div></div>
        </div>
        <div className="paper-visual" id="notes">
          <div className="paper-shadow" />
          <div className="notebook notebook--back"><span className="notebook-tab">FIELD NOTES</span><span className="notebook-stamp">M</span></div>
          <div className="notebook notebook--front">
            <div className="notebook-toolbar"><span className="notebook-status"><span /> Autosaved</span><span>June 14, 2024</span></div>
            <div className="paper-content"><span className="paper-kicker">A note on attention</span><h2>Start with the<br /><span>small thing.</span></h2><p>The details are not a detour. They are the way in.</p><div className="paper-divider" /><div className="paper-quote"><span>“</span><p>Notice what keeps<br />returning.</p></div><div className="paper-tags"><span>attention</span><span>practice</span><span>ideas</span></div></div>
            <div className="notebook-footer"><span><span className="footer-dot footer-dot--moss" />Personal</span><span>⌘ ↵ to close</span></div>
          </div>
          <div className="paper-note paper-note--yellow"><span>remember</span><strong>Take the long way<br />through the idea.</strong><span className="note-scribble">↗</span></div>
          <div className="paper-note paper-note--moss"><span>linked note</span><strong>On paying<br />attention</strong><span className="note-link">↗</span></div>
        </div>
      </section>

      <section className="paper-bottom" id="how"><span className="paper-bottom-quote">“The best note-taking app is the one that makes you want to think.”</span><span className="paper-bottom-author">— Morrow, for the curious</span><a className="paper-bottom-link" href="#journal">Read the field notes <ArrowRight size={14} /></a></section>
    </main>
  );
}

function SignalLanding() {
  return (
    <main className="landing landing--signal">
      <Grain />
      <header className="site-header site-header--signal">
        <Logo light />
        <div className="signal-system"><span className="signal-pulse" />System online <span className="signal-divider" /> v. 04.24</div>
        <a className="header-cta header-cta--lime" href="#start">Enter workspace <ArrowUpRight size={14} /></a>
      </header>

      <section className="signal-hero">
        <div className="signal-copy">
          <div className="eyebrow eyebrow--lime"><span className="signal-pulse" />For minds that run hot</div>
          <h1>Think clearly.<br /><span>Move lightly.</span></h1>
          <p className="hero-lede">A second brain with less noise. Capture the signal, connect the dots, and get back to the work that matters.</p>
          <div className="signal-cta-row"><a className="button button--lime" href="#start">Try Morrow free <ArrowRight size={15} /></a><span className="signal-footnote">No credit card · 14-day full access</span></div>
          <div className="signal-metrics"><div><strong>0.4s</strong><span>to capture a thought</span></div><div><strong>12k+</strong><span>quietly productive people</span></div></div>
        </div>
        <div className="signal-visual" id="workspace">
          <div className="signal-scanlines" />
          <div className="signal-window">
            <div className="signal-window-top"><span className="signal-window-title"><span className="window-dot" />morrow / focus</span><span>14:32:08 <span className="signal-live">LIVE</span></span></div>
            <div className="signal-window-body">
              <aside className="signal-sidebar"><div className="signal-side-logo">M<span>/</span></div><span className="signal-side-active">01</span><span>02</span><span>03</span><span>04</span><div className="signal-side-bottom">⌘</div></aside>
              <div className="signal-main-panel"><div className="signal-panel-heading"><span>Now thinking about</span><span className="signal-chip">deep work <span>×</span></span></div><h2>The invisible<br /><em>infrastructure</em><br />of a good day.</h2><div className="signal-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="signal-panel-footer"><span><span className="signal-mini-dot" />Focus session <b>24:18</b></span><span>Save to library <ArrowUpRight size={12} /></span></div></div>
            </div>
          </div>
          <div className="signal-float signal-float--left"><span className="signal-float-kicker">NEXT UP</span><strong>Write the<br />opening paragraph</strong><span>project / field guide</span></div>
          <div className="signal-float signal-float--right"><Spark size={14} /><span>one idea<br /><strong>worth keeping</strong></span></div>
        </div>
      </section>

      <section className="signal-strip"><span>Capture</span><i /> <span>Connect</span><i /> <span>Focus</span><i /> <span>Return</span><span className="signal-strip-end">The lighter way to think →</span></section>
    </main>
  );
}

function AtlasNode({ className, children }: { className: string; children: ReactNode }) {
  return <div className={`atlas-node ${className}`}><span className="atlas-node-dot" />{children}</div>;
}

function AtlasLanding() {
  return (
    <main className="landing landing--atlas">
      <Grain />
      <header className="site-header site-header--atlas">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#map">The map</a>
          <a href="#ritual">The ritual</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta header-cta--blue" href="#start">Make a map <ArrowUpRight size={14} /></a>
      </header>

      <section className="atlas-hero">
        <div className="atlas-copy">
          <div className="eyebrow eyebrow--blue"><span className="eyebrow-cross">+</span>Your mind is already a network</div>
          <h1>A map for<br /><span>the mind.</span></h1>
          <p className="hero-lede">Morrow helps you see the connections hiding between your notes, so the next idea has somewhere to come from.</p>
          <div className="atlas-cta-row"><a className="button button--blue" href="#start">Start connecting <ArrowRight size={15} /></a><span className="atlas-mini-copy">A visual second brain for<br />people who think in constellations.</span></div>
        </div>
        <div className="atlas-visual" id="map">
          <div className="atlas-map-heading"><span><span className="atlas-map-dot" />Your knowledge map</span><span>486 notes <span className="atlas-map-slash">/</span> 32 links</span></div>
          <div className="atlas-map-canvas">
            <span className="atlas-line atlas-line--one" /><span className="atlas-line atlas-line--two" /><span className="atlas-line atlas-line--three" /><span className="atlas-line atlas-line--four" /><span className="atlas-line atlas-line--five" /><span className="atlas-line atlas-line--six" />
            <AtlasNode className="atlas-node--center">Attention</AtlasNode>
            <AtlasNode className="atlas-node--top">Craft</AtlasNode>
            <AtlasNode className="atlas-node--left">Rituals</AtlasNode>
            <AtlasNode className="atlas-node--right">Field notes</AtlasNode>
            <AtlasNode className="atlas-node--bottom-left">Rest</AtlasNode>
            <AtlasNode className="atlas-node--bottom-right">Long view</AtlasNode>
            <span className="atlas-cursor">✦</span>
          </div>
          <div className="atlas-map-footer"><span><span className="atlas-legend-dot atlas-legend-dot--orange" />Idea</span><span><span className="atlas-legend-dot atlas-legend-dot--blue" />Note</span><span><span className="atlas-legend-dot atlas-legend-dot--green" />Connection</span><span className="atlas-zoom">− &nbsp; 100% &nbsp; +</span></div>
        </div>
      </section>

      <section className="atlas-bottom" id="ritual"><div><span className="atlas-bottom-number">01</span><strong>Notice</strong><span>Save the thought before it fades.</span></div><div><span className="atlas-bottom-number">02</span><strong>Connect</strong><span>Give it a neighbor.</span></div><div><span className="atlas-bottom-number">03</span><strong>Return</strong><span>See what you know, now.</span></div></section>
    </main>
  );
}

function ArchiveLanding() {
  return (
    <main className="landing landing--archive">
      <Grain />
      <header className="site-header site-header--archive">
        <Logo />
        <span className="archive-edition">The personal knowledge archive / Vol. 01</span>
        <div className="header-actions"><a className="quiet-link quiet-link--ink" href="#login">Sign in</a><a className="header-cta header-cta--rose" href="#start">Open the archive <ArrowUpRight size={14} /></a></div>
      </header>

      <section className="archive-hero">
        <div className="archive-title-block"><div className="archive-index">01 <span>of</span> 05</div><div className="eyebrow eyebrow--rose"><span className="eyebrow-line" />A home for unfinished thoughts</div><h1>Keep the<br /><i>good stuff.</i></h1><p className="hero-lede">The ideas that arrive in the shower, the margin, the walk home — collected, connected, and waiting when you are.</p><div className="archive-actions"><a className="button button--rose" href="#start">Begin an archive <ArrowUpRight size={15} /></a><span>Free forever for personal use</span></div></div>
        <div className="archive-visual" id="archive">
          <div className="archive-shelf"><span>01</span><span>02</span><span>03</span><span>04</span></div>
          <div className="archive-card archive-card--large"><div className="archive-card-top"><span>Recently resurfaced</span><span>↗</span></div><div className="archive-card-number">08.14</div><h2>Make room<br /><em>for the maybe.</em></h2><div className="archive-card-bottom"><span>Note / 14 Jun 2024</span><span className="archive-card-tag">thinking</span></div></div>
          <div className="archive-card archive-card--small archive-card--blue"><div className="archive-small-top"><span>Cross-reference</span><span>02</span></div><h3>On making<br />things slowly</h3><span>↗ Read note</span></div>
          <div className="archive-card archive-card--small archive-card--cream"><div className="archive-small-top"><span>Index / 004</span><span>✳</span></div><h3>Questions<br />worth keeping</h3><div className="archive-lines"><span /><span /><span /></div></div>
          <div className="archive-stamp">MORROW<br /><span>EST. 2024</span></div>
        </div>
      </section>

      <section className="archive-bottom" id="about"><span className="archive-bottom-label">A better relationship with your own mind</span><div className="archive-bottom-grid"><p>Less sorting.<br /><strong>More remembering.</strong></p><div><span className="archive-rule" /><span>Search the archive by feeling, not just by keyword.</span></div><div><span className="archive-rule" /><span>Everything is yours. Export any time.</span></div></div></section>
    </main>
  );
}

export function getIteration(version: string) {
  return iterations.find((iteration) => iteration.id === version);
}

export function BrainLanding({ iteration }: { iteration: IterationId }) {
  switch (iteration) {
    case "1":
      return <OrbitLanding />;
    case "2":
      return <PaperLanding />;
    case "3":
      return <SignalLanding />;
    case "4":
      return <AtlasLanding />;
    case "5":
      return <ArchiveLanding />;
  }
}
