"use client";

import {
  createContext, useContext, useEffect, useRef, useState,
  useSyncExternalStore, type ReactNode,
} from "react";
import Link from "next/link";
import {
  ArrowRight, Asterisk, CaretDown, List, Moon, SquaresFour, Sun, X,
} from "@phosphor-icons/react";
import { designs, type Design, layers } from "../lib/designs";
import { addNote } from "../lib/notebook";
import { NotebookDemo } from "./notebook-demo";

type NoteSeed = { title: string; body: string; tags?: string[] };
const ExperienceContext = createContext<{ variant: Design; openNotebook: (seed?: NoteSeed) => void } | null>(null);

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) throw new Error("Aster components need an Experience provider.");
  return context;
}

export function Experience({ variant, children, showSwitcher = false }: { variant: Design; children: ReactNode; showSwitcher?: boolean }) {
  const [open, setOpen] = useState(false);
  const [initialNoteId, setInitialNoteId] = useState<string>();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-astra-taste-root]");
    try {
      const theme = localStorage.getItem("aster-theme");
      if (root && (theme === "light" || theme === "dark")) root.dataset.theme = theme;
    } catch {}
    window.dispatchEvent(new Event("aster-theme-change"));
  }, []);

  useEffect(() => {
    if (!open) return;
    const currentDialog = dialog.current;
    currentDialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      currentDialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function openNotebook(seed?: NoteSeed) {
    setInitialNoteId(seed ? addNote(seed) : undefined);
    setOpen(true);
  }

  return (
    <ExperienceContext.Provider value={{ variant, openNotebook }}>
      <div className={`experience theme-${variant}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        {showSwitcher && <DesignSwitcher current={variant} />}
        <dialog
          ref={dialog}
          className="workspace-dialog"
          aria-labelledby="workspace-title"
          onCancel={() => setOpen(false)}
          onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
        >
          <div className="workspace-dialog-inner">
            <div className="workspace-heading">
              <div>
                <h2 id="workspace-title">Make yourself at home.</h2>
                <p>Your notes stay in this browser. Export a copy whenever you like.</p>
              </div>
              <button className="icon-button" aria-label="Close notebook" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>
            {open && <NotebookDemo key={initialNoteId ?? "notebook"} expanded initialNoteId={initialNoteId} />}
          </div>
        </dialog>
      </div>
    </ExperienceContext.Provider>
  );
}

export function StartButton({ className = "", children = "Start thinking", seed }: {
  className?: string; children?: ReactNode; seed?: NoteSeed;
}) {
  const { openNotebook } = useExperience();
  return (
    <button className={`button button-primary ${className}`} onClick={() => openNotebook(seed)}>
      {children}<ArrowRight size={18} aria-hidden="true" />
    </button>
  );
}

export function Brand() {
  return <a href="#main" className="brand" aria-label="Aster home"><Asterisk size={34} weight="bold" aria-hidden="true" /><span>aster</span></a>;
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header" style={{ zIndex: layers.navigation }}>
      <div className="nav-container">
        <Brand />
        <nav id="main-navigation" aria-label="Main navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#why-aster" onClick={() => setMenuOpen(false)}>Why Aster</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <StartButton className="button-small nav-cta" />
          <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation">
            {menuOpen ? <X size={23} /> : <List size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function subscribeTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  window.addEventListener("aster-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("aster-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getTheme() {
  const explicit = document.querySelector<HTMLElement>("[data-astra-taste-root]")?.dataset.theme;
  return explicit === "dark" || (!explicit && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
}

function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "light");
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.querySelector<HTMLElement>("[data-astra-taste-root]");
    if (root) root.dataset.theme = next;
    try { localStorage.setItem("aster-theme", next); } catch { /* The toggle also works without storage. */ }
    window.dispatchEvent(new Event("aster-theme-change"));
  }
  return <button className="icon-button theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
    {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
  </button>;
}

function DesignSwitcher({ current }: { current: Design }) {
  const [collapsed, setCollapsed] = useState(false);
  const index = designs.findIndex((design) => design.slug === current);
  return (
    <aside className={`design-switcher ${collapsed ? "is-collapsed" : ""}`} aria-label="Choose a landing page design" style={{ zIndex: layers.switcher }}>
      <button className="switcher-label" aria-expanded={!collapsed} aria-controls="design-options" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? "Show all designs" : "Minimize design switcher"} title={collapsed ? "Show all designs" : "Minimize design switcher"}>
        <SquaresFour size={16} /><span>{collapsed ? `Design ${index + 1}` : "Designs"}</span><CaretDown size={12} className="switcher-caret" />
      </button>
      <nav id="design-options" className="design-options" aria-label="Design iterations" hidden={collapsed}>
        {designs.map((design, i) => <Link
          key={design.slug}
          href={`/${design.slug}`}
          className={`design-option ${current === design.slug ? "is-current" : ""}`}
          aria-label={`Design ${i + 1}: ${design.name}`}
          aria-current={current === design.slug ? "page" : undefined}
          title={design.name}
        >{i + 1}</Link>)}
      </nav>
    </aside>
  );
}
