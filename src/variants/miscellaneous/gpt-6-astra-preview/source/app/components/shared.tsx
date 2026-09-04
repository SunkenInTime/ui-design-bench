"use client";

import { useState, type ReactNode } from "react";
import { Dialog } from "./dialog";
import { ExperienceProvider, StartButton } from "./experience";
import { BrandMark, Icon, type IconName } from "./icons";

export type Variant = "one" | "two" | "three" | "four" | "five";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="Morrow home"><BrandMark size={compact ? 26 : 34} /><span>morrow</span></a>;
}

function Header({ variant }: { variant: Variant }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const productLabel = variant === "two" ? "The workspace" : variant === "four" ? "The notebook" : "A look inside";
  return <header className="site-header"><div className="container header-inner"><Brand /><nav className={`header-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Main navigation"><a href="#product" onClick={() => setMenuOpen(false)}>{productLabel}</a><a href="#why-morrow" onClick={() => setMenuOpen(false)}>Why Morrow</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></nav><div className="header-actions"><StartButton className="text-button header-open" arrow={false}>Open Morrow <Icon name="arrow-up" size={14} /></StartButton><StartButton className="button header-start" arrow={false}>{variant === "four" ? "Start a notebook" : "Start for free"}<Icon name="arrow-up" size={14} /></StartButton><button type="button" className="icon-button mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div></div></header>;
}

export function PageFrame({ variant, children }: { variant: Variant; children: ReactNode }) {
  return <div className={`landing theme-${variant}`} id="top"><ExperienceProvider><Header variant={variant} /><main id="main-content">{children}</main><Footer /></ExperienceProvider></div>;
}

export function FeatureStrip({ items, intro }: { items: { icon: IconName; text: string }[]; intro?: string }) {
  return <div className="feature-strip"><div className="container feature-strip-inner">{intro && <p>{intro}</p>}<ul>{items.map((item) => <li key={item.text}><Icon name={item.icon} size={18} /><span>{item.text}</span></li>)}</ul></div></div>;
}

export function FeatureColumns({ items }: { items: { icon: IconName; title: string; body: string }[] }) {
  return <div className="feature-columns">{items.map((item) => <article key={item.title}><Icon name={item.icon} size={22} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>;
}

export function StartSection() {
  return <section className="start-section" id="pricing"><div className="container start-section-inner"><div><h2>A little space.<br />A good place to start.</h2><p>Your first thought doesn’t need a subscription.<br />Open a notebook and see where it takes you.</p><StartButton>Make room for a thought</StartButton></div><div className="free-plan"><div className="free-plan-heading"><div><Icon name="book" size={22} /><h3>Your personal notebook</h3></div><strong>Free<span>to make your own</span></strong></div><ul><li><Icon name="check" size={16} />As many notes as you need</li><li><Icon name="check" size={16} />Saved privately on this device</li><li><Icon name="check" size={16} />Yours to keep with Markdown export</li></ul><p>No account. No credit card. Just you and your ideas.</p></div></div></section>;
}

export function Questions() {
  return <section className="questions-section container" id="questions"><h2>A few good questions.</h2><div className="questions-list"><details><summary>What is a second brain?<Icon name="plus" size={18} /></summary><p>A place outside your head for the things you want to remember. Save your thoughts, gather ideas, and return to them when you need a starting point. Morrow begins with something simple: a note.</p></details><details><summary>Do I need an account to start?<Icon name="plus" size={18} /></summary><p>No. Open a notebook and start writing. Your notes are saved in this browser on this device, ready for the next time you visit.</p></details><details><summary>Can I take my notes with me?<Icon name="plus" size={18} /></summary><p>Yes. Use “Download .md” in your notebook to save a note as a Markdown file. You can open it in any text editor. Keep a copy before clearing your browser data or moving to another device.</p></details></div></section>;
}

function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><Brand compact /><span>A little more room for your mind.</span></div><nav aria-label="Footer navigation"><a href="#questions">Questions</a><button type="button" onClick={() => setPrivacyOpen(true)}>Privacy</button><a href="#top">Back to top <Icon name="arrow-up" size={13} /></a></nav><span className="copyright">© {new Date().getFullYear()} Morrow</span></div><Dialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Your thoughts stay with you" className="privacy-dialog"><div className="privacy-copy"><Icon name="lock" size={30} /><h2>A space that’s yours.</h2><p>The notes you create are stored in your browser on this device. The text you write is not sent to a server.</p><p>Your notes will be here when you return using the same browser. Clearing this site’s browser data will remove them, so download a Markdown copy of anything you want to keep.</p><p>No account is required, and this experience uses no analytics or advertising cookies.</p><button type="button" className="button button-primary" onClick={() => setPrivacyOpen(false)}>Got it <Icon name="check" size={16} /></button></div></Dialog></footer>;
}
