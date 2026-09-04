"use client";

import { createContext, useContext, useEffect, useRef, useState, memo, type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Check, FileText, MagnifyingGlass, Plus, Stack, X, DownloadSimple } from "@phosphor-icons/react";

const DemoContext = createContext<() => void>(() => {});
type Note = { id: string; title: string; body: string };
const samples: Note[] = [
  { id: "sample-1", title: "The beginnings of an idea", body: "What if a notebook felt more like a garden?\n\nA place to leave a thought, come back to it, and find that it connects to something else.\n\nThings to explore:\n- Make space for unfinished thinking\n- Bring interesting ideas back into view\n- Let connections happen naturally" },
  { id: "sample-2", title: "Things worth noticing", body: "The shape of the shadows on the kitchen wall.\nA sentence in a book that changes how you see something.\nThe best ideas often start with paying attention." },
];
const storageKey = "morrow-notebook-v1";

export function ExperienceProvider({ children, iteration = "1" }: { children: ReactNode; iteration?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [notes, setNotes] = useState<Note[]>(samples);
  const [selected, setSelected] = useState<Note>(samples[0]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const variant = Number(iteration);

  function open() {
    setError(""); setStatus(""); setQuery("");
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.every((n) => typeof n.id === "string" && typeof n.title === "string" && typeof n.body === "string")) {
          setNotes(parsed);
          setSelected(parsed[0] || { id: crypto.randomUUID(), title: "", body: "" });
        }
      }
    } catch { setError("Your saved notes couldn't be loaded. You can still write and export a note."); }
    dialog.current?.showModal();
  }
  async function save() {
    if (!selected.title.trim()) { setError("Give your note a title before saving."); return; }
    setSaving(true); setError(""); setStatus("");
    const note = { ...selected, title: selected.title.trim() };
    const next = notes.some((n) => n.id === note.id) ? notes.map((n) => n.id === note.id ? note : n) : [note, ...notes];
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setNotes(next); setStatus("Saved in this browser.");
    } catch { setError("Browser storage is unavailable. Export your note to keep a copy."); }
    finally { setSaving(false); }
  }
  function newNote() { setSelected({ id: crypto.randomUUID(), title: "", body: "" }); setError(""); setStatus(""); }
  function exportNote() {
    const blob = new Blob([`# ${selected.title || "Untitled note"}\n\n${selected.body}`], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `${selected.title.replace(/[^a-z0-9 -]/gi, "").slice(0,60) || "morrow-note"}.md`; a.click(); URL.revokeObjectURL(url);
    setStatus("Your note has been exported.");
  }
  const visible = notes.filter((n) => `${n.title} ${n.body}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <DemoContext.Provider value={open}>
      {children}
      <dialog aria-label="Morrow notebook" ref={dialog} className={`notebook-dialog site variant-${variant}`} onClick={(e) => { if(e.target === e.currentTarget) dialog.current?.close(); }}>
        <div className="notebook-top"><span className="brand"><Stack size={26} weight="regular" /> morrow</span><span className="notebook-label">Your local notebook</span><button className="icon-button" aria-label="Close notebook" onClick={() => dialog.current?.close()}><X size={22} /></button></div>
        <div className="notebook-layout">
          <aside className="notebook-sidebar">
            <button className="button primary new-note" onClick={newNote}><Plus size={17} /> New note</button>
            <label className="search-label" htmlFor="note-search">Search notes</label>
            <div className="note-search"><MagnifyingGlass size={17} /><input id="note-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a thought..." /></div>
            <div className="note-list">{visible.length ? visible.map((note) => <button key={note.id} className={`note-list-item ${selected.id === note.id ? "selected" : ""}`} onClick={() => {setSelected(note);setStatus("");setError("");}}><FileText size={18} /><span>{note.title}</span></button>) : <p className="empty-state">No matching notes. Try a different word or create a new note.</p>}</div>
            <p className="local-note">A little space to try Morrow.<br />Notes stay in this browser.</p>
          </aside>
          <form className="note-editor" onSubmit={(e) => {e.preventDefault();void save();}}>
            <label htmlFor="note-title">Note title</label>
            <input id="note-title" className="note-title" value={selected.title} onChange={(e) => { setSelected({...selected, title: e.target.value}); setStatus("Unsaved changes"); }} placeholder="A thought worth keeping" maxLength={120} />
            <label htmlFor="note-body">Your thoughts</label>
            <textarea id="note-body" value={selected.body} onChange={(e) => {setSelected({...selected, body: e.target.value});setStatus("Unsaved changes");}} placeholder="Start anywhere. A sentence, a list, a question..." />
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="editor-bottom"><p role="status">{status || "Try editing a sample or start a new note."}</p><button type="button" className="icon-button" onClick={exportNote} aria-label="Export note as Markdown"><DownloadSimple size={20} /></button><button className="button primary" disabled={saving}>{saving ? "Saving..." : "Save note"}<Check size={17} /></button></div>
          </form>
        </div>
      </dialog>
    </DemoContext.Provider>
  );
}

export function StartButton({ className = "", arrow = true }: { className?: string; arrow?: boolean }) {
  const open = useContext(DemoContext);
  return <button className={`button primary ${className}`} onClick={open}>Start writing{arrow && <ArrowUpRight size={19} />}</button>;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu"><button className="icon-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <span className="menu-lines" />}</button>{open && <nav><a href="#why" onClick={() => setOpen(false)}>Why Morrow</a><a href="#how" onClick={() => setOpen(false)}>How it works</a><a href="#questions" onClick={() => setOpen(false)}>Questions</a></nav>}</div>;
}

export const Reveal = memo(function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node || className.includes("hero-") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.revealed = "true";
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [className]);
  return <div ref={element} className={`reveal-region ${className}`} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>{children}</div>;
});

const tabs = [
  { title: "Catch a thought", description: "The sentence you don't want to lose. The idea that arrived on a walk. Give it a home.", prompt: "What’s on your mind?", value: "A small idea for a slower Sunday..." },
  { title: "Find a connection", description: "Put related thoughts together. Your next idea might already be hiding in your last one.", prompt: "What does this remind you of?", value: "This connects to my idea about making more time to read." },
  { title: "Pick it back up", description: "Return to unfinished ideas with a little more context, whenever you're ready.", prompt: "Where would you like to begin again?", value: "Next time, explore what a reading corner could look like." },
];
export function ThoughtDemo() {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState(tabs.map((t) => t.value));
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  function save() {
    if(!values[active].trim()) {setError("Write a thought before saving it.");return;}
    try {
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if(!Array.isArray(existing)) throw new Error("Invalid storage");
      localStorage.setItem(storageKey, JSON.stringify([{id:crypto.randomUUID(), title:tabs[active].title, body:values[active]},...existing]));
      setSaved(true);setError("");
    } catch {setError("This browser couldn't save your thought. You can copy it to keep it.");}
  }
  return <div className="thought-demo"><div className="thought-tabs" role="tablist" aria-label="Ways to use Morrow">{tabs.map((t,i) => <button key={t.title} id={`thought-tab-${i}`} role="tab" aria-selected={active===i} aria-controls="thought-panel" tabIndex={active===i?0:-1} onKeyDown={(e) => {if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const next=(i+(e.key==="ArrowRight"?1:2))%3;setActive(next);document.getElementById(`thought-tab-${next}`)?.focus();setSaved(false);setError("");}}} onClick={() => {setActive(i);setSaved(false);setError("");}}>{i===0?<Plus size={19}/>:i===1?<Stack size={19}/>:<ArrowRight size={19}/>}<span>{t.title}</span><ArrowUpRight className="tab-arrow" size={18}/></button>)}</div><div className="thought-panel" id="thought-panel" role="tabpanel" aria-labelledby={`thought-tab-${active}`}><p>{tabs[active].description}</p><label htmlFor="quick-thought">{tabs[active].prompt}</label><textarea id="quick-thought" value={values[active]} onChange={(e)=>{setValues(values.map((v,i)=>i===active?e.target.value:v));setSaved(false);}}/><div className="thought-actions"><span role="status">{saved?"Kept in your local notebook.":"Try it. This space is yours."}</span><button className="icon-button" aria-label="Save thought" disabled={saved} onClick={save}>{saved?<Check size={21}/>:<ArrowUpRight size={21}/>}</button></div>{error&&<p role="alert" className="form-error">{error}</p>}</div></div>;
}
