"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "../icons";
import { Action, Footer, SiteHeader } from "../studio";

const connections = [
  { title: "The creative process", label: "THE BIGGER PICTURE", text: "Make space for the unexpected. The interesting part is where your ideas meet.", related: "A book worth keeping + Morning pages" },
  { title: "Morning pages", label: "A DAILY PRACTICE", text: "Three pages. No filter. Somewhere in the ordinary thoughts, a new idea starts to show up.", related: "The creative process + A slower Sunday" },
  { title: "A book worth keeping", label: "FROM THE READING PILE", text: "Pay attention to what catches your attention. A thought from a book can become the start of something else.", related: "The creative process + Things I noticed" },
  { title: "A slower Sunday", label: "ROOM FOR SOMETHING NEW", text: "Take the long way home. A little empty space might be the most useful thing on your calendar.", related: "Morning pages + Things I noticed" },
];

function IdeaNetwork() {
  const [active, setActive] = useState(0);
  return <div className="two-network">
    <div className="network-caption"><span className="network-live-dot" /> A FEW THINGS ON YOUR MIND <span>↙ FOLLOW A THREAD</span></div>
    <svg className="network-lines" viewBox="0 0 650 610" fill="none" aria-hidden="true"><ellipse cx="341" cy="291" rx="233" ry="195" stroke="currentColor" strokeOpacity=".22" strokeDasharray="3 7" transform="rotate(-24 341 291)" /><path d="M156 131C278 143 283 262 335 287S469 386 529 455M146 452c39-72 119-117 184-154S405 146 489 139M143 453C20 286 163 160 336 282S535 300 490 139" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.5" /><circle cx="336" cy="288" r="95" stroke="currentColor" strokeOpacity=".12" /><circle cx="336" cy="288" r="122" stroke="currentColor" strokeOpacity=".08" /><circle cx="335" cy="287" r="5" fill="#FFC6AF" /></svg>
    <button className={`network-card network-morning ${active === 1 ? "node-active" : ""}`} onClick={() => setActive(1)}><span className="network-note-label"><Icon name="note" size={13} /> A NOTE TO SELF <span>↗</span></span><h3>Morning<br />pages.</h3><div className="network-mini-lines"><i /><i /><i /></div><span className="network-card-tag">clear a little space</span></button>
    <button className={`network-photo ${active === 3 ? "node-active" : ""}`} onClick={() => setActive(3)}><Image src="/variants/with-design-skill/gpt-6-astra-preview/images/mountains.jpg" alt="Fog winding between green hills at sunrise" width={800} height={530} preload /><span>A slower Sunday <Icon name="arrow-up" size={14} /></span></button>
    <button className={`network-book ${active === 2 ? "node-active" : ""}`} onClick={() => setActive(2)}><Icon name="book" size={20} /><span>A book worth<br /><strong>keeping.</strong></span><span className="network-book-plus">+</span></button>
    <button className={`network-main ${active === 0 ? "node-active" : ""}`} onClick={() => setActive(0)}><Icon name="spark" size={29} /><h3>The creative<br />process</h3><span>4 thoughts connected</span></button>
    <div className="network-whatif"><span>WHAT<br />IF<span className="network-question">?</span></span><svg viewBox="0 0 90 40" fill="none" aria-hidden="true"><path d="M5 27C15 3 34 2 47 23c9 16 24 13 37-17M74 7l11-3-2 12" stroke="currentColor" strokeWidth="3" /></svg></div>
    <div className="network-reading"><Icon name="link" size={14} /><span>It’s all connected.</span></div>
    <div className="network-detail" aria-live="polite"><p>{connections[active].label}</p><span>{connections[active].text}</span></div>
  </div>;
}

const steps = [
  { title: "Catch it.", icon: "note" as const, copy: "The idea that finds you on the train. The article you can’t stop thinking about. Save it before the moment moves on.", cardTitle: "An idea on the 8:42", card: "What if a neighborhood guide felt more like a letter from a friend? Bookshops, quiet corners, a really good sandwich.", tag: "JUST CAPTURED" },
  { title: "Connect it.", icon: "link" as const, copy: "Your thoughts don’t live in neat little boxes. Give them room to cross paths. A familiar word can lead somewhere new.", cardTitle: "Wait. There’s a connection.", card: "That neighborhood guide. The photos from Sunday. The book about noticing things. Three little thoughts, one new project.", tag: "THREE IDEAS, ONE THREAD" },
  { title: "Come back to it.", icon: "spark" as const, copy: "Find the note you forgot you needed. Revisit the things that interested you, and see what they have to say today.", cardTitle: "The beginning of something", card: "A small field guide for curious people. Five places worth the long way home. First draft: this weekend.", tag: "AN OLD THOUGHT, A NEW START" },
];

export default function Two() {
  const [step, setStep] = useState(0);
  return <div className="landing theme-two"><div className="two-blue-stage"><SiteHeader variant="two" /><main id="main-content"><section className="two-hero page-width"><div className="two-hero-copy"><p className="two-eyebrow"><span>↳</span> FOR MINDS THAT WANDER</p><h1>Good ideas.<br />No straight<br /><span>lines.</span><svg viewBox="0 0 140 85" fill="none" aria-hidden="true"><path d="M8 47C37-8 92-5 76 38c-22 57-12 64 49-9m-24 2 26-6-4 27" stroke="currentColor" strokeWidth="5" /></svg></h1><p>A second brain for your first thoughts.<br />Keep what sparks something. See what connects.<br />Make something only you could.</p><div className="hero-actions"><Action className="two-primary">Connect your thinking <Icon name="arrow-up" size={20} /></Action><a className="two-secondary" href="#features">Follow the idea <Icon name="arrow-down" size={16} /></a></div><span className="two-free">FREE YOUR MIND. START FOR FREE.</span></div><IdeaNetwork /></section><div className="two-ticker"><span>NOTES WITHOUT BOXES</span><Icon name="spark" size={20} /><span>IDEAS WITHOUT LIMITS</span><Icon name="spark" size={20} /><span>THINKING WITHOUT STRAIGHT LINES</span><Icon name="spark" size={20} /></div></main></div>
    <section className="two-process page-width" id="features"><div className="two-process-heading"><p className="eyebrow">A THOUGHT IS ONLY THE BEGINNING</p><h2>Less organizing.<br /><span>More connecting.</span></h2></div><div className="two-process-grid"><div className="two-step-list">{steps.map((item, index) => <button key={item.title} className={step === index ? "selected" : ""} onClick={() => setStep(index)} aria-pressed={step === index}><span><Icon name={item.icon} size={24} /><h3>{item.title}</h3><Icon name="arrow" size={22} /></span>{step === index && <p>{item.copy}</p>}</button>)}</div><div className="two-step-canvas"><div className="two-step-card" key={step}><span className="scrap-meta"><Icon name={steps[step].icon} size={18} />{steps[step].tag}</span><h3>{steps[step].cardTitle}</h3><p>{steps[step].card}</p><span className="two-step-tag"># a little curiosity</span></div><div className="two-step-badge"><Icon name="spark" size={33} /></div><span className="two-step-footnote">Your next big thing starts somewhere.</span></div></div></section>
    <section className="two-philosophy" id="philosophy"><div className="page-width"><span className="two-asterisk">✳</span><div><p className="eyebrow">BUILT FOR HOW YOU ACTUALLY THINK</p><h2>You’re not a filing cabinet.<br />Your notes shouldn’t be either.</h2><p>Your mind makes leaps. Doubles back. Finds the unexpected.<br />Morrow gives all that good, messy thinking a place to happen.</p><Action className="two-dark-button">Give your ideas somewhere to go <Icon name="arrow-up" size={20} /></Action></div></div></section><Footer variant="two" line="A little less linear. A lot more you." /></div>;
}
