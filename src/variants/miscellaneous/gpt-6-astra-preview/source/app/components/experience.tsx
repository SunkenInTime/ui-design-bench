"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog } from "./dialog";
import { BrandMark, Icon } from "./icons";

type Note = { id: string; title: string; body: string };
const storageKey = "morrow-personal-notes-v1";
const firstNote: Note = { id: "first-note", title: "My first thought", body: "" };
const ExperienceContext = createContext<{ openNotebook: (seed?: Pick<Note, "title" | "body">) => void }>({ openNotebook: () => {} });

export function useExperience() { return useContext(ExperienceContext); }

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<Note[]>([firstNote]);
  const [selected, setSelected] = useState(firstNote.id);
  const [status, setStatus] = useState("Saved on this device");
  const [deletedNote, setDeletedNote] = useState<Note | null>(null);
  const [query, setQuery] = useState("");
  const current = notes.find((note) => note.id === selected) ?? notes[0];

  function openNotebook(seed?: Pick<Note, "title" | "body">) {
    let next = notes;
    try {
      const stored: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "null");
      if (Array.isArray(stored) && stored.length && stored.every((note) => typeof note.id === "string" && typeof note.title === "string" && typeof note.body === "string")) {
        next = stored;
      }
    } catch { setStatus("Your notes will stay open for this visit"); }
    if (seed) {
      const imported = { id: crypto.randomUUID(), ...seed };
      next = [...next.filter((note) => note.id !== firstNote.id || note.body), imported];
      save(next);
      setSelected(imported.id);
    } else {
      setNotes(next);
      setSelected(next[0].id);
    }
    setOpen(true);
  }

  function save(next: Note[]) {
    setNotes(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setStatus("Saved on this device");
    } catch { setStatus("Couldn’t save on this device. Download a copy below."); }
  }

  function update(patch: Partial<Note>) {
    save(notes.map((note) => note.id === current.id ? { ...note, ...patch } : note));
  }

  function addNote() {
    const note: Note = { id: crypto.randomUUID(), title: "Untitled note", body: "" };
    save([...notes, note]);
    setSelected(note.id);
    setQuery("");
  }

  function removeNote() {
    setDeletedNote(current);
    const next = notes.filter((note) => note.id !== current.id);
    if (!next.length) next.push({ ...firstNote, id: crypto.randomUUID() });
    save(next);
    setSelected(next[0].id);
  }

  function exportNote() {
    const blob = new Blob([`# ${current.title || "Untitled note"}\n\n${current.body}\n`], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${(current.title || "note").replace(/[^a-z0-9\-_ ]/gi, "").trim().slice(0, 80) || "note"}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <ExperienceContext.Provider value={{ openNotebook }}>
      {children}
      <Dialog open={open} onClose={() => setOpen(false)} title="Your Morrow notebook" className="notebook-dialog">
        <div className="notebook-workspace">
          <aside className="notebook-sidebar">
            <div className="notebook-brand"><BrandMark size={24} /><strong>Your space</strong></div>
            <label className="notebook-search"><Icon name="search" size={16} /><input aria-label="Search your notes" placeholder="Find a note…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
            <button type="button" className="new-note-button" onClick={addNote}><Icon name="plus" size={16} /> New note</button>
            <div className="notebook-note-list">
              {notes.filter((note) => `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase())).map((note) => <button key={note.id} type="button" className={selected === note.id ? "selected" : ""} onClick={() => setSelected(note.id)}><Icon name="note" size={16} /><span>{note.title || "Untitled note"}</span></button>)}
              {notes.every((note) => !`${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase())) && <p className="search-empty">No notes found. Try another word.</p>}
            </div>
            <span className="notebook-count">{notes.length} {notes.length === 1 ? "note" : "notes"} · Just for you</span>
          </aside>
          <div className="notebook-editor">
            <div className="notebook-editor-top"><Icon name="note" size={18} /><span>Personal notes</span><button type="button" className="icon-button" onClick={removeNote} aria-label="Delete current note"><Icon name="trash" size={17} /></button></div>
            <label className="sr-only" htmlFor="note-title">Note title</label>
            <input id="note-title" className="notebook-title" value={current.title} onChange={(event) => update({ title: event.target.value })} placeholder="Untitled note" />
            <label className="sr-only" htmlFor="note-body">Note content</label>
            <textarea id="note-body" className="notebook-body" value={current.body} onChange={(event) => update({ body: event.target.value })} placeholder="An idea, a reminder, something you noticed. Start anywhere…" />
            <div className="notebook-editor-bottom"><span aria-live="polite"><Icon name="check" size={14} />{status}</span><button type="button" className="text-button" onClick={exportNote}><Icon name="download" size={15} /> Download .md</button></div>
            {deletedNote && <div className="undo-notice" role="status">Note removed.<button type="button" onClick={() => { save([...notes, deletedNote]); setSelected(deletedNote.id); setDeletedNote(null); }}>Undo</button><button type="button" aria-label="Dismiss undo" onClick={() => setDeletedNote(null)}><Icon name="close" size={14} /></button></div>}
          </div>
        </div>
      </Dialog>
    </ExperienceContext.Provider>
  );
}

export function StartButton({ children = "Start for free", className = "button button-primary", arrow = true }: { children?: ReactNode; className?: string; arrow?: boolean }) {
  const { openNotebook } = useExperience();
  return <button className={className} type="button" onClick={() => openNotebook()}>{children}{arrow && <Icon name="arrow" size={18} />}</button>;
}
