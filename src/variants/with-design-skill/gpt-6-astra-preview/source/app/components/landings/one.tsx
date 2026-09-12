import Image from "next/image";
import { Icon, Sprout } from "../icons";
import { Action, Footer, SiteHeader } from "../studio";
import { NotebookPreview } from "../notebook";

function Thoughtscape() {
  return <div className="one-thoughtscape" aria-label="A few thoughts, finding their connections">
    <svg className="one-threads" viewBox="0 0 620 610" fill="none" aria-hidden="true"><path d="M137 168C32 174 11 299 92 343s225-152 338-89c134 75 62 246-67 243S150 550 133 438" stroke="#83927A" strokeWidth="1.5" strokeDasharray="5 6" /><path d="M363 173c-18 44-63 60-52 114" stroke="#83927A" strokeWidth="1.5" /><circle cx="137" cy="168" r="4" fill="#71866C" /><circle cx="363" cy="173" r="4" fill="#71866C" /></svg>
    <div className="one-floating-note one-first-thought"><div className="scrap-meta"><Icon name="spark" size={15} /><span>A PASSING THOUGHT</span></div><p>What if I made<br />more room<br />for <em>less?</em></p><span className="scrap-tag">a little perspective</span></div>
    <div className="one-photo-note"><span className="paper-tape" /><Image src="/variants/with-design-skill/gpt-6-astra-preview/images/forest.jpg" alt="Morning light finding its way through a quiet forest" width={700} height={467} preload /><div><span>Somewhere to get lost.</span><Icon name="heart" size={15} /></div></div>
    <div className="one-main-note"><div className="scrap-meta"><Icon name="note" size={15} /><span>NOTES TO SELF</span><span>Today</span></div><h3>Follow your curiosity.</h3><p>Read the book. Take the long way home. Save the thing that made you stop and think.</p><p className="one-highlight">There’s a thread in here somewhere.</p><div className="scrap-bottom"><span><span className="tiny-dot" /> Everyday inspiration</span><Icon name="link" size={14} /></div></div>
    <div className="one-sticky"><Icon name="sun" size={33} /><p>A weekend<br />with no plans.</p><span>also a very good idea</span></div>
    <div className="one-connection"><Icon name="link" size={14} /><span>Oh, that connects.</span><Icon name="spark" size={13} /></div>
    <span className="one-margin-note">a place for all<br />your little pieces.</span>
    <Sprout className="one-sprout" />
  </div>;
}

export default function One() {
  return <div className="landing theme-one">
    <SiteHeader variant="one" />
    <main id="main-content">
      <section className="one-hero page-width">
        <div className="one-hero-copy"><div className="one-eyebrow"><span className="status-dot" /> A SECOND BRAIN. A LIGHTER MIND.</div><h1>For everything<br />on your <em>mind.</em></h1><p className="one-intro">The passing thoughts. The rabbit holes. The next big idea.<br className="desktop-break" /> A little home for it all, and the connections in between.</p><div className="hero-actions"><Action className="one-primary">Start your second brain <Icon name="arrow-up" size={18} /></Action><a className="one-demo-link" href="#your-space"><span className="play-circle"><Icon name="play" size={11} /></span>Take a little look</a></div><p className="one-free-note">Free to begin. Room to become.</p><div className="one-bottom-note"><span className="little-star">✳</span><span>Less keeping it all in your head.<br /><strong>More being here, now.</strong></span></div></div>
        <Thoughtscape />
      </section>
      <section className="one-features page-width" id="features"><div><span className="one-feature-icon"><Icon name="note" size={23} /></span><h2>Catch the little things.</h2><p>A note, a link, a line from a book.<br />If it matters to you, it belongs here.</p></div><div><span className="one-feature-icon"><Icon name="link" size={23} /></span><h2>Find the hidden threads.</h2><p>Let one thought lead to another.<br />Good ideas rarely happen alone.</p></div><div><span className="one-feature-icon"><Icon name="sun" size={23} /></span><h2>Give your mind some room.</h2><p>Keep what’s worth remembering.<br />Let go of remembering it all.</p></div></section>
      <section className="one-space-section" id="your-space"><div className="page-width"><div className="one-section-heading"><div><p className="eyebrow">YOUR OWN LITTLE CORNER</p><h2>A place to put things.<br /><em>And put things together.</em></h2></div><p>Not another system to keep up with.<br />Just a thoughtful space that feels like you.<br /><span>Go on, explore a few notes below.</span></p></div><NotebookPreview /><div className="one-preview-caption"><span><Icon name="lock" size={14} /> Your thoughts. Your space. Always.</span><Action>Make yourself at home <Icon name="arrow" size={16} /></Action></div></div></section>
      <section className="one-philosophy page-width" id="philosophy"><Sprout className="philosophy-sprout" /><p className="eyebrow">A LITTLE PHILOSOPHY</p><h2>Your brain is for having ideas.<br /><em>Let Morrow do the holding.</em></h2><p>There’s a particular kind of calm in knowing a thought is safe.<br />We’re making a little more of that. One note at a time.</p><Action className="one-primary">Make a little room <Icon name="arrow-up" size={18} /></Action></section>
    </main><Footer variant="one" />
  </div>;
}
