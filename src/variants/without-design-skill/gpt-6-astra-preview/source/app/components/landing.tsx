"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { AppPreview, BoldScene, GardenScene, OrbitScene, PaperScene, People, QuietScene } from "./artwork";
import Experience, { type ExperienceMode } from "./experience";
import { Brand, Flower, Icon, type IconName } from "./icons";

type Variant = 1 | 2 | 3 | 4 | 5;
type HeroActions = { onStart: () => void; onTour: () => void };
const routeNames = ["one", "two", "three", "four", "five"];
const designNames = ["The quiet mind", "A connected universe", "The curious collector", "A little more spark", "Room to breathe"];

function Header({ variant, onStart, onTour }: HeroActions & { variant: Variant }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><a className="home-link" href="#top" aria-label="mote home"><Brand /></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#product">{variant === 5 ? "Inside mote" : variant === 4 ? "The good stuff" : "Why mote"}</a><button onClick={onTour}>How it works</button><a href="#philosophy">Our philosophy</a><a href="#pricing">Pricing</a></nav><div className="header-actions"><button className="open-app" onClick={onStart}>Open app <Icon name="arrow-up" size={13} /></button><button className="button header-cta" onClick={onStart}>{variant === 4 ? "GET SOME HEADSPACE" : variant === 5 ? "Begin for free" : "Get mote free"}<Icon name="arrow-up" size={14} /></button><button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation"><Icon name={menuOpen ? "close" : "menu"} /></button></div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><a href="#product" onClick={() => setMenuOpen(false)}>Inside mote <Icon name="arrow-up" size={16} /></a><button onClick={() => { setMenuOpen(false); onTour(); }}>How it works <Icon name="play" size={16} /></button><a href="#philosophy" onClick={() => setMenuOpen(false)}>Our philosophy <Icon name="arrow-up" size={16} /></a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing <Icon name="arrow-up" size={16} /></a></nav>}</header>;
}

function GardenHero({ onStart, onTour }: HeroActions) {
  return <><section className="hero garden-hero"><div className="hero-copy"><div className="eyebrow garden-eyebrow"><span><Flower size={14} /></span>A SECOND BRAIN. A LIGHTER MIND.</div><h1>Your mind,<br />with room<br /><em>to grow.</em><svg className="heading-flourish" width="82" height="66" viewBox="0 0 82 66" fill="none" aria-hidden="true"><path d="M9 57C17 36 33 7 62 6c-3 28-22 41-45 41m5-8 21-19M10 56C4 36 2 25 5 19c13 6 17 14 14 24" stroke="currentColor" strokeWidth="1.5" /></svg></h1><p className="hero-description">All your notes, ideas, and little sparks of inspiration. One thoughtful space to keep them — and see what connects.</p><div className="hero-actions"><button className="button primary" onClick={onStart}>Start your second brain <Icon name="arrow" size={17} /></button><button className="text-button" onClick={onTour}><span className="play-circle"><Icon name="play" size={11} /></span>Take a little tour</button></div><p className="cta-note">Free to start. No credit card. Just a little curiosity.</p><People /></div><GardenScene onOpen={onStart} /></section><div className="kindred-strip"><span>A HOME FOR EVERY KIND OF MIND</span><div><span>The daydreamers.</span><span>The deep thinkers.</span><span>The note-takers.</span><span>The <em>what-if</em> people.</span><span className="kindred-you">You.<Flower size={21} /></span></div></div></>;
}

function OrbitHero({ onStart, onTour }: HeroActions) {
  return <><section className="hero orbit-hero"><div className="orbit-rings" aria-hidden="true"><i /><i /><i /></div><div className="eyebrow orbit-eyebrow"><span /> YOUR MIND HAS A WHOLE UNIVERSE INSIDE.</div><h1>Think freely.<br /><span>Find the connection.</span></h1><p className="hero-description">A home for your thoughts. A map of your ideas.<br />Meet the second brain that brings it all together.</p><div className="hero-actions"><button className="button primary" onClick={onStart}>Start your second brain <Icon name="arrow-up" size={17} /></button><button className="text-button" onClick={onTour}><Icon name="play" size={15} />See mote in motion</button></div><p className="orbit-reassurance"><Icon name="lock" size={11} /> Private by nature. Limitless by design.</p><OrbitScene onOpen={onStart} /></section><div className="orbit-feature-strip">{([{ icon: "note", text: "Capture in a heartbeat" }, { icon: "spark", text: "Connect what matters" }, { icon: "search", text: "Find your way back" }, { icon: "lock", text: "Yours. Always." }] as { icon: IconName; text: string }[]).map(item => <span key={item.text}><Icon name={item.icon} size={18} />{item.text}</span>)}</div></>;
}

function PaperHero({ onStart, onTour }: HeroActions) {
  return <><section className="hero paper-hero"><div className="hero-copy"><div className="eyebrow"><span className="paper-small-star">✳</span> FOR YOUR BEAUTIFULLY UNFINISHED MIND</div><h1>One thought<br />leads to<br /><em>another.</em><span className="paper-heading-dot">*</span></h1><p className="hero-description">The half-baked ideas. The things you underline.<br className="desktop-break" /> The “I should write that down” moments.<br className="desktop-break" /> A little home for all of them.</p><div className="hero-actions"><button className="button primary" onClick={onStart}>Give your thoughts a home <Icon name="arrow-up" size={18} /></button><button className="text-button" onClick={onTour}>Take a peek <Icon name="arrow" size={16} /></button></div><div className="paper-promise"><span><Icon name="check" size={13} /> FREE TO START</span><span><Icon name="check" size={13} /> NO PERFECT SYSTEM REQUIRED</span></div></div><PaperScene onOpen={onStart} /></section><div className="paper-ticker"><span>CATCH A THOUGHT.</span><Flower size={25} /><span>FOLLOW A THREAD.</span><Flower size={25} /><span>MAKE A LITTLE MAGIC.</span><Flower size={25} /><span>REPEAT.</span></div></>;
}

function BoldHero({ onStart, onTour }: HeroActions) {
  return <><section className="hero bold-hero"><div className="hero-copy"><div className="eyebrow"><span className="bold-live-dot" /> YOUR BRAIN CALLED. IT WANTS SOME SPACE.</div><h1>Less chaos.<br />More <span>aha.<svg viewBox="0 0 230 28" fill="none" aria-hidden="true"><path d="M4 17c87-24 125-5 217-6M13 25c95-17 143-5 201-5" stroke="currentColor" strokeWidth="5" /></svg></span></h1><p className="hero-description">Big ideas. Random rabbit holes. That thing you<br className="desktop-break" /> saw at 2am. Put it all in mote — your brain’s<br className="desktop-break" /> new favorite place to hang out.</p><div className="hero-actions"><button className="button primary" onClick={onStart}>MEET YOUR SECOND BRAIN <Icon name="arrow-up" size={20} /></button><button className="text-button" onClick={onTour}><Icon name="play" size={15} />Show me around</button></div><div className="bold-micro"><Flower size={20} /> FREE YOUR MIND. KEEP THE GOOD STUFF.</div></div><BoldScene onOpen={onStart} /></section><div className="bold-ticker"><span>A LITTLE NOTE.</span><Icon name="spark" size={31} /><span>A BIG POSSIBILITY.</span><Icon name="spark" size={31} /><span>A VERY YOU KIND OF SPACE.</span><Icon name="spark" size={31} /></div></>;
}

function QuietHero({ onStart, onTour }: HeroActions) {
  return <><section className="hero quiet-hero"><div className="hero-copy"><div className="eyebrow"><span /> A LITTLE SPACE FOR YOUR INNER WORLD</div><h1>Keep what<br />moves you.<br /><em>Find your clarity.</em></h1><p className="hero-description">Gather the little things. Discover the bigger picture.<br className="desktop-break" /> A quiet, personal space for your notes, ideas,<br className="desktop-break" /> and everything that makes you, you.</p><div className="hero-actions"><button className="button primary" onClick={onStart}>Begin your little collection <Icon name="arrow-up" size={17} /></button></div><button className="quiet-tour" onClick={onTour}><span><Icon name="play" size={11} /></span>A moment to look inside <span className="tour-duration">01:00</span></button><div className="quiet-hero-foot"><Flower size={20} outline /><span>Less to hold. More room to be.</span></div></div><QuietScene onOpen={onStart} /></section><div className="quiet-pause"><span><i /> NO NOISE. NO RUSH. NO PRESSURE.</span><span>A second brain, thoughtfully made.</span><Flower size={19} outline /></div></>;
}

const productCopy = {
  1: { eyebrow: "A LITTLE ORDER. A LOT OF POSSIBILITY.", title: <>Less keeping track.<br />More <em>connecting dots.</em></>, description: "Your mind doesn’t work in folders. Neither should your ideas." },
  2: { eyebrow: "BUILT FOR THE WAY YOU THINK", title: <>More than a collection.<br /><em>A constellation.</em></>, description: "Let your ideas find each other. The bigger picture is already there." },
  3: { eyebrow: "A SIMPLE SPACE. AN INTERESTING LIFE.", title: <>A place for the bits.<br /><em>And the bigger picture.</em></>, description: "No complicated systems. Just a little room to follow your curiosity." },
  4: { eyebrow: "WELCOME TO YOUR MIND, MINUS THE MESS", title: <>THINK OUTSIDE<br /><em>THE FOLDER.</em></>, description: "Keep the stuff you love. Connect the dots. Make your next big thing." },
  5: { eyebrow: "THOUGHTFULLY SIMPLE", title: <>Everything in its own time.<br /><em>Everything in one place.</em></>, description: "A gentler way to keep, connect, and come back to what matters." },
};

const features: { icon: IconName; title: string; description: string }[] = [
  { icon: "note", title: "Catch the little things.", description: "A passing thought. A good read. A tiny spark. Keep it in the moment, before the moment moves on." },
  { icon: "spark", title: "Let good ideas meet.", description: "Put your thoughts together and see what happens. Sometimes the connection is the interesting part." },
  { icon: "search", title: "Find your way back.", description: "Less searching through scattered tabs. More finding that one thing, right when you need it." },
];

function ProductSection({ variant, onStart }: { variant: Variant; onStart: () => void }) {
  const [active, setActive] = useState(0);
  const content = productCopy[variant];
  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % 3;
    else if (event.key === "ArrowLeft") next = (index + 2) % 3;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 2;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`product-tab-${next}`)?.focus();
  }
  return <section className="product-section section-wrap" id="product"><div className="section-heading"><span className="eyebrow">{content.eyebrow}</span><h2>{content.title}</h2><p>{content.description}</p></div><div className="product-tabs" role="tablist" aria-label="Explore mote features">{["Save a little", "Connect the dots", "Find it again"].map((label, index) => <button role="tab" id={`product-tab-${index}`} aria-controls="product-panel" aria-selected={active === index} tabIndex={active === index ? 0 : -1} key={label} className={active === index ? "active" : ""} onClick={() => setActive(index)} onKeyDown={event => onTabKey(event, index)}><span>0{index + 1}</span>{label}<Icon name={index === 0 ? "plus" : index === 1 ? "spark" : "search"} size={16} /></button>)}</div><div className="product-preview-frame" role="tabpanel" id="product-panel" aria-labelledby={`product-tab-${active}`}><AppPreview view={active} onOpen={onStart} /></div><div className="feature-columns">{features.map((feature, index) => <article key={feature.title}><span className="feature-icon"><Icon name={feature.icon} size={23} /></span><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></section>;
}

function Philosophy({ variant, onStart }: { variant: Variant; onStart: () => void }) {
  return <section className="philosophy-section section-wrap" id="philosophy"><div className="philosophy-illustration"><div className="philosophy-orbit orbit-a" /><div className="philosophy-orbit orbit-b" /><Flower size={160} outline={variant === 5 || variant === 3} /><span>{variant === 4 ? "LET IT ALL OUT." : "a little space goes a long way."}</span><i className="philosophy-spark spark-a"><Icon name="spark" size={25} /></i><i className="philosophy-spark spark-b"><Icon name="spark" size={15} /></i></div><div className="philosophy-copy"><span className="eyebrow">A THOUGHT WE KEEP COMING BACK TO</span><h2>{variant === 4 ? <>YOUR MIND IS FOR<br /><em>MAKING THINGS.</em></> : <>Your mind is for having ideas.<br /><em>Give them room to live.</em></>}</h2><p>We think a second brain should feel a little more human. Less like another thing to manage. More like opening a window.</p><p>So we made mote. A small, thoughtful space for the wonderfully scattered way your mind works.</p><button className="text-button" onClick={onStart}>Make yourself at home <Icon name="arrow" size={16} /></button></div></section>;
}

function Pricing({ onStart }: { onStart: () => void }) {
  return <section className="pricing-section section-wrap" id="pricing"><div><span className="eyebrow">GOOD THINGS CAN START SMALL</span><h2>A little space.<br /><em>Freely yours.</em></h2><p>No grand commitment.<br />Just a first thought, and somewhere to put it.</p></div><div className="price-card"><div className="price-card-top"><Flower size={30} /><span>YOUR PERSONAL SPACE</span></div><div className="price"><span>$0</span><p>to find your flow.<br />No credit card needed.</p></div><ul><li><Icon name="check" size={16} /> A home for all your personal notes</li><li><Icon name="check" size={16} /> Find any thought with a quick search</li><li><Icon name="check" size={16} /> Keep your words with a simple export</li></ul><button className="button primary" onClick={onStart}>Take your first little step <Icon name="arrow-up" size={16} /></button><span className="price-small">A small beginning. A world of possibility.</span></div></section>;
}

function Questions() {
  const questions = [
    { question: "What is a second brain, anyway?", answer: "A place outside your head for the things you want to keep. Ideas, notes, reflections, and little reminders — all together, so your mind has more room to think, create, and wander." },
    { question: "Do I need a system to get started?", answer: "Not at all. Start with a thought. Add another when it comes along. You can search your notes anytime, and build a space that feels like you. No complicated setup or perfect organization required." },
    { question: "Where do my notes live?", answer: "The notes you write here are saved in this browser, on this device. Your writing stays with you and isn’t sent to a server. Use “Export your notes” to keep a text copy. Clearing browser data will clear the notes stored here." },
  ];
  return <section className="faq-section section-wrap"><div><span className="eyebrow">A LITTLE MORE CLARITY</span><h2>A few good<br /><em>questions.</em></h2></div><div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<Icon name="plus" size={18} /></summary><p>{item.answer}</p></details>)}</div></section>;
}

function Footer({ variant, onStart }: { variant: Variant; onStart: () => void }) {
  return <><section className="closing-section"><Flower size={43} outline={variant === 5} /><span className="eyebrow">YOUR NEXT GOOD IDEA IS IN THERE SOMEWHERE.</span><h2>{variant === 4 ? <>LET’S MAKE<br /><em>SOME SPACE.</em></> : variant === 2 ? <>A whole universe.<br /><em>Waiting for you.</em></> : <>Go on.<br /><em>Make a little space.</em></>}</h2><button className="button primary" onClick={onStart}>Start your second brain <Icon name="arrow-up" size={17} /></button><p>Free to start. Yours to make.</p></section><footer className="site-footer"><a href="#top" aria-label="mote back to top"><Brand compact /></a><span>© {new Date().getFullYear()} mote. All thoughts welcome.</span><nav aria-label="Footer navigation"><a href="#product">Inside mote</a><a href="#philosophy">Our philosophy</a><a href="#top">Back to top <Icon name="arrow-up" size={12} /></a></nav></footer></>;
}

function DesignSwitcher({ current }: { current: Variant }) {
  const [expanded, setExpanded] = useState(true);
  return <nav className={`design-switcher ${expanded ? "expanded" : "collapsed"}`} aria-label="Switch landing page design"><button className="switcher-toggle" onClick={() => setExpanded(!expanded)} aria-label={expanded ? "Collapse design switcher" : "Expand design switcher"} aria-expanded={expanded} aria-controls="design-options"><Icon name="grid" size={15} /><span>{expanded ? "Explore designs" : `Design 0${current}`}</span><Icon name="chevron" size={12} /></button>{expanded && <div id="design-options" className="design-options">{routeNames.map((route, index) => <Link href={`/${route}`} key={route} className={`design-option ${current === index + 1 ? "active" : ""}`} aria-current={current === index + 1 ? "page" : undefined} aria-label={`Design ${index + 1}: ${designNames[index]}`} title={designNames[index]}><span>0{index + 1}</span></Link>)}</div>}<Link className="switcher-next" href={`/${routeNames[current % 5]}`} aria-label="Next design" title="Next design"><Icon name="arrow" size={16} /></Link></nav>;
}

export default function Landing({ variant, showSwitcher = false }: { variant: Variant; showSwitcher?: boolean }) {
  const [mode, setMode] = useState<ExperienceMode>(null);
  const actions = { onStart: () => setMode("workspace"), onTour: () => setMode("tour") };
  return <div className={`landing theme-${variant}`} id="top"><a href="#product" className="skip-link">Skip to product</a>{variant === 3 && <div className="paper-announcement"><span>A SMALL TOOL FOR A VERY FULL MIND.</span><span>A LITTLE LESS SCATTERED, SINCE RIGHT NOW. <Icon name="spark" size={11} /></span></div>}<Header variant={variant} {...actions} /><main>{variant === 1 ? <GardenHero {...actions} /> : variant === 2 ? <OrbitHero {...actions} /> : variant === 3 ? <PaperHero {...actions} /> : variant === 4 ? <BoldHero {...actions} /> : <QuietHero {...actions} />}{variant === 3 && <Philosophy variant={variant} onStart={actions.onStart} />}<ProductSection variant={variant} onStart={actions.onStart} />{variant !== 3 && <Philosophy variant={variant} onStart={actions.onStart} />}<Pricing onStart={actions.onStart} /><Questions /><Footer variant={variant} onStart={actions.onStart} /></main>{showSwitcher && <DesignSwitcher current={variant} />}<Experience mode={mode} onClose={() => setMode(null)} onStart={actions.onStart} /></div>;
}
