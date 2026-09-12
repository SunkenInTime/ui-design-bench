"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, MorrowMark } from "./icons";
import { NotebookEditor } from "./notebook";

type ModalName = "notebook" | "pricing" | "guide" | "privacy";
const StudioContext = createContext<{ open: (name: ModalName) => void }>({ open: () => {} });
export function useStudio() { return useContext(StudioContext); }

const designs = [
  { slug: "one", name: "Room to think", color: "#B7CDB9" },
  { slug: "two", name: "Connected thinking", color: "#2949ED" },
  { slug: "three", name: "The thought garden", color: "#C6B3DC" },
  { slug: "four", name: "A clearer signal", color: "#25394F" },
  { slug: "five", name: "Keep the good stuff", color: "#F7D653" },
];

function DesignSwitcher() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const current = Math.max(0, designs.findIndex((design) => pathname === `/${design.slug}`));
  return (
    <nav className={`design-switcher ${expanded ? "is-expanded" : ""}`} aria-label="Landing page designs">
      <button className="switcher-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="design-options" aria-label={expanded ? "Collapse design switcher" : "Explore the five designs"}>
        <Icon name="layers" size={17} /><span>{expanded ? "Designs" : `Design ${current + 1} / 5`}</span>
      </button>
      {expanded && <div className="design-options" id="design-options">
        {designs.map((design, index) => <Link key={design.slug} href={`/${design.slug}`} className={`design-option ${index === current ? "is-active" : ""}`} aria-label={`Design ${index + 1}: ${design.name}`} aria-current={index === current ? "page" : undefined} title={design.name}><span className="design-dot" style={{ background: design.color }} /><span>{index + 1}</span></Link>)}
      </div>}
      <Link className="switcher-next" href={`/${designs[(current + 1) % designs.length].slug}`} aria-label={`Next design: ${designs[(current + 1) % designs.length].name}`}><Icon name="chevron" size={15} /></Link>
    </nav>
  );
}

export function StudioProvider({ children, showSwitcher = false }: { children: ReactNode; showSwitcher?: boolean }) {
  const [modal, setModal] = useState<ModalName | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (modal) {
      trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previous; trigger.current?.focus(); };
    }
  }, [modal]);

  const close = () => { dialog.current?.close(); setModal(null); };
  return (
    <StudioContext.Provider value={{ open: setModal }}>
      {children}
      {showSwitcher && <DesignSwitcher />}
      {modal && <dialog ref={dialog} className={`studio-dialog ${modal === "notebook" ? "notebook-dialog" : ""}`} onCancel={close} onClick={(event) => { if (event.target === event.currentTarget) close(); }} aria-labelledby="dialog-title">
        <button className="dialog-close" onClick={close} aria-label="Close dialog"><Icon name="close" /></button>
        {modal === "notebook" && <NotebookEditor />}
        {modal === "pricing" && <div className="info-dialog">
          <MorrowMark size={42} /><p className="eyebrow">A LITTLE SPACE. YOURS TO KEEP.</p>
          <h2 id="dialog-title">Good thoughts.<br />A very good price.</h2>
          <p>Your personal browser notebook is free. Make a little room for whatever comes next.</p>
          <div className="price-line"><span>$0</span><span>for your own<br />little thinking space</span></div>
          <ul className="check-list"><li><Icon name="check" /> Create as many text notes as you like</li><li><Icon name="check" /> Find things by title, content, or tag</li><li><Icon name="check" /> Keep your notes in this browser</li><li><Icon name="check" /> Export your notes whenever you want</li></ul>
          <button className="dialog-primary" onClick={() => setModal("notebook")}>Open your free notebook <Icon name="arrow" /></button>
        </div>}
        {modal === "guide" && <div className="info-dialog">
          <MorrowMark size={42} /><p className="eyebrow">A SECOND BRAIN, AT YOUR OWN PACE</p><h2 id="dialog-title">Start with one<br />small thought.</h2>
          <div className="guide-step"><Icon name="note" /><div><h3>Catch it while it’s here.</h3><p>A sentence from a book. An idea on a walk. A link to come back to. Give it a home.</p></div></div>
          <div className="guide-step"><Icon name="link" /><div><h3>Leave a little thread.</h3><p>Add a tag that makes sense to you. Similar thoughts are easier to find together.</p></div></div>
          <div className="guide-step"><Icon name="spark" /><div><h3>See it with fresh eyes.</h3><p>Search your notes, follow a familiar word, and give an old idea a new beginning.</p></div></div>
          <button className="dialog-primary" onClick={() => setModal("notebook")}>Save your first thought <Icon name="arrow" /></button>
        </div>}
        {modal === "privacy" && <div className="info-dialog">
          <Icon name="lock" size={36} /><p className="eyebrow">YOUR THOUGHTS STAY YOURS</p><h2 id="dialog-title">A private place<br />to think.</h2>
          <p>The notebook on this site saves your notes in this browser’s local storage. Your notes are not sent to a server.</p><p>They stay here when you close the page. Clearing your browser’s site data will remove them, so use “Export notes” to keep a copy.</p><p>No account, tracking cookies, or email address required.</p>
          <button className="dialog-primary" onClick={() => setModal("notebook")}>Open your notebook <Icon name="arrow" /></button>
        </div>}
      </dialog>}
    </StudioContext.Provider>
  );
}

export function Action({ children, className = "", intent = "notebook", ariaLabel }: { children: ReactNode; className?: string; intent?: ModalName; ariaLabel?: string }) {
  const { open } = useStudio();
  return <button className={className} onClick={() => open(intent)} aria-label={ariaLabel}>{children}</button>;
}

export function SiteHeader({ variant }: { variant: "one" | "two" | "three" | "four" | "five" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useStudio();
  return (
    <header className={`site-header header-${variant}`}>
      <Link href={`/with-design-skill/gpt-6-astra-preview/${["one", "two", "three", "four", "five"].indexOf(variant) + 1}`} className="wordmark" aria-label="Morrow home"><MorrowMark /><span>morrow<span className="wordmark-period">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#features">The little details</a><a href="#philosophy">Why Morrow</a><Action intent="pricing">Pricing</Action></nav>
      <div className="header-actions"><Action className="header-start">Get Morrow free <Icon name="arrow-up" size={17} /></Action><button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div>
      {menuOpen && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation"><a href="#features" onClick={() => setMenuOpen(false)}>The little details <Icon name="arrow" /></a><a href="#philosophy" onClick={() => setMenuOpen(false)}>Why Morrow <Icon name="arrow" /></a><button onClick={() => { setMenuOpen(false); open("pricing"); }}>Pricing <Icon name="arrow" /></button></nav>}
    </header>
  );
}

export function Footer({ variant, line = "A little room for your mind." }: { variant: string; line?: string }) {
  return <footer className={`site-footer footer-${variant}`}><div><Link href={`/with-design-skill/gpt-6-astra-preview/${["one", "two", "three", "four", "five"].indexOf(variant) + 1}`} className="wordmark"><MorrowMark size={28} /><span>morrow.</span></Link><p>{line}</p></div><nav aria-label="Footer navigation"><Action intent="guide">A little introduction</Action><Action intent="privacy">Your privacy</Action><Action intent="pricing">Pricing</Action></nav><span className="footer-small">Made for the beautifully curious.</span></footer>;
}
