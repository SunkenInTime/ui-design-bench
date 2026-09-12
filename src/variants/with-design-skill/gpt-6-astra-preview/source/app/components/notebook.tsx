"use client";

import { useState } from "react";
import { Icon } from "./icons";

export type Note = { id: string; title: string; content: string; tag: string; date: string };
export const sampleNotes: Note[] = [
  { id: "slow", title: "A slower kind of Sunday", content: "Leave the phone at home. Take the long way to the coffee shop.\n\nI keep coming back to this: a good idea needs a little empty space around it. Maybe the best thing I can do for my work is make more time for the things that aren’t work.\n\nTry this next week:\n— A morning walk without a podcast\n— Read a few pages before opening my inbox\n— Keep one afternoon completely unplanned", tag: "Everyday life", date: "Today" },
  { id: "creative", title: "The creative process", content: "Creativity is often a conversation between things you already know.\n\nCollect widely. Notice what keeps catching your attention. The thread usually appears before the finished idea does.\n\nRelated thoughts: morning pages, a slower kind of Sunday, and the book I keep returning to.", tag: "Ideas", date: "Yesterday" },
  { id: "book", title: "A book worth keeping", content: "Notes from The Creative Act, by Rick Rubin.\n\nPay attention to the ordinary things. A sound, a color, a conversation on the train. Keeping a record helps me notice the patterns.\n\nMy takeaway: make more things for the pleasure of making them. Worry about where they belong later.", tag: "Reading", date: "Monday" },
  { id: "walk", title: "Things I noticed on a walk", content: "The morning light through the trees. A tiny garden growing out of a pavement crack. How much easier it is to think when I’m moving.\n\nAn idea: a small collection of photographs from the same walk, taken in each season.\n\nStart with the path by the river.", tag: "Everyday life", date: "Monday" },
  { id: "project", title: "A small project for spring", content: "Make a neighborhood field guide.\n\nPlaces to sit and read, the best little bookshops, a few trees worth knowing by name. Ask friends for one place they’d add.\n\nStart small: one page, five places, a hand-drawn map.", tag: "Ideas", date: "Last week" },
];
const storageKey = "morrow-personal-notes-v1";

function readNotes(): Note[] {
  if (typeof window === "undefined") return sampleNotes;
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return sampleNotes;
    const parsed: unknown = JSON.parse(stored);
    if (Array.isArray(parsed) && parsed.every((note) => note && typeof note.id === "string" && typeof note.title === "string" && typeof note.content === "string" && typeof note.tag === "string" && typeof note.date === "string")) return parsed;
  } catch { /* A fresh notebook remains usable if browser storage is unavailable. */ }
  return sampleNotes;
}

export function NotebookEditor() {
  const [notes, setNotes] = useState<Note[]>(readNotes);
  const [selected, setSelected] = useState<Note>(() => readNotes()[0] ?? { id: "first", title: "", content: "", tag: "Ideas", date: "Today" });
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [dirty, setDirty] = useState(false);
  const [pending, setPending] = useState<Note | "new" | null>(null);
  const visible = notes.filter((note) => `${note.title} ${note.content} ${note.tag}`.toLowerCase().includes(query.toLowerCase()));

  function persist(next: Note[]) {
    setNotes(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); return true; }
    catch { setStatus("Your browser couldn’t save this note. Export your notes to keep a copy."); return false; }
  }
  function save() {
    if (!selected.title.trim() && !selected.content.trim()) { setStatus("Add a title or a thought to save your note."); return; }
    const updated = { ...selected, title: selected.title.trim() || "A little thought", date: "Today" };
    const next = notes.some((note) => note.id === updated.id) ? notes.map((note) => note.id === updated.id ? updated : note) : [updated, ...notes];
    const saved = persist(next);
    setSelected(updated); setDirty(false);
    if (saved) setStatus("Saved in this browser.");
  }
  function navigate(next: Note | "new", discard = false) {
    if (dirty && !discard) { setPending(next); return; }
    setSelected(next === "new" ? { id: crypto.randomUUID(), title: "", content: "", tag: "Ideas", date: "Today" } : next);
    setDirty(false); setStatus(""); setPending(null);
  }
  function edit(field: "title" | "content" | "tag", value: string) { setSelected({ ...selected, [field]: value }); setDirty(true); setStatus("Unsaved changes"); }
  function exportNotes() {
    const data = dirty ? [...notes.filter((note) => note.id !== selected.id), { ...selected, title: selected.title || "A little thought" }] : notes;
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = "morrow-notes.json"; link.click(); URL.revokeObjectURL(url); setStatus("Your notes have been exported.");
  }

  return <div className="notebook-editor">
    <div className="notebook-heading"><div><p className="eyebrow">A HOME FOR WHAT’S ON YOUR MIND</p><h2 id="dialog-title">Your little thinking space.</h2></div><p>Saved in this browser. Always yours.</p></div>
    <div className="editor-workspace">
      <aside className="editor-sidebar"><label className="notebook-search"><Icon name="search" size={17} /><input aria-label="Search your notes" placeholder="Find a thought…" value={query} onChange={(event) => setQuery(event.target.value)} /></label><button className="new-note" onClick={() => navigate("new")}><Icon name="plus" size={17} /> New note</button><div className="editor-note-list">{visible.length ? visible.map((note) => <button key={note.id} className={`editor-note ${selected.id === note.id ? "selected" : ""}`} onClick={() => navigate(note)}><span>{note.title}</span><small>{note.tag} <span>·</span> {note.date}</small></button>) : <p className="empty-notes">No thoughts found. Try a different word or start a new note.</p>}</div><button className="export-notes" onClick={exportNotes}><Icon name="download" size={16} /> Export notes</button></aside>
      <section className="editor-paper" aria-label="Note editor"><div className="editor-meta"><label>Filed under <select aria-label="Note category" value={selected.tag} onChange={(event) => edit("tag", event.target.value)}><option>Ideas</option><option>Reading</option><option>Everyday life</option><option>Work</option></select></label><Icon name="note" size={18} /></div><input className="editor-title" aria-label="Note title" placeholder="A thought worth keeping…" value={selected.title} onChange={(event) => edit("title", event.target.value)} /><textarea className="editor-content" aria-label="Note content" placeholder="It doesn’t have to make sense yet. Start anywhere." value={selected.content} onChange={(event) => edit("content", event.target.value)} /><div className="editor-bottom"><p role="status">{status || "A little space. All yours."}</p><button className="dialog-primary" onClick={save}>Save note <Icon name="check" size={17} /></button></div></section>
    </div>
    {pending && <div className="unsaved-prompt" role="alert"><p>You have a thought you haven’t saved yet.</p><button onClick={() => setPending(null)}>Keep editing</button><button onClick={() => navigate(pending, true)}>Discard changes</button></div>}
  </div>;
}

export function NotebookPreview({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const [active, setActive] = useState(sampleNotes[0]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All notes");
  const notes = sampleNotes.filter((note) => (category === "All notes" || note.tag === category) && `${note.title} ${note.content}`.toLowerCase().includes(query.toLowerCase()));
  return <div className={`notebook-preview ${dark ? "preview-dark" : ""} ${compact ? "preview-compact" : ""}`}>
    <div className="preview-topbar"><div className="window-dots"><span /><span /><span /></div><span>My little corner of the world</span><span><Icon name="lock" size={12} /> Just for you</span></div>
    <div className="preview-body"><aside className="preview-sidebar"><div className="preview-user"><span>J</span>Jamie’s space <Icon name="chevron" size={12} /></div><label className="preview-search"><Icon name="search" size={14} /><input placeholder="Find a thought" aria-label="Search example notes" value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>⌘ K</kbd></label><p className="preview-label">YOUR SPACE</p>{["All notes", "Ideas", "Reading", "Everyday life"].map((item, index) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}><Icon name={index === 0 ? "layers" : index === 1 ? "spark" : index === 2 ? "book" : "sun"} size={16} />{item}{index === 0 && <span>5</span>}</button>)}<div className="preview-sidebar-bottom"><span className="status-dot" /> Everything has its place.</div></aside>
    <div className="preview-list"><p className="preview-label">{category} <span>{notes.length}</span></p>{notes.map((note) => <button key={note.id} onClick={() => setActive(note)} className={active.id === note.id ? "active" : ""}><small>{note.date}</small><strong>{note.title}</strong><p>{note.content.slice(0, 65)}…</p></button>)}{notes.length === 0 && <p className="preview-empty">No notes found. Try another word.</p>}</div>
    <article className="preview-note"><div className="preview-note-meta"><span><Icon name="sun" size={14} /> {active.tag}</span><Icon name="spark" size={16} /></div><h3>{active.title}</h3><p className="preview-note-date">A thought from {active.date.toLowerCase()}</p>{active.content.split("\n\n").map((paragraph, index) => <p key={index} className={index === 1 ? "highlight-paragraph" : ""}>{paragraph}</p>)}<div className="preview-related"><Icon name="link" size={14} /><span>A little connection</span><button onClick={() => setActive(sampleNotes[active.id === "creative" ? 2 : 1])}>{active.id === "creative" ? "A book worth keeping" : "The creative process"} <Icon name="arrow-up" size={13} /></button></div></article></div>
  </div>;
}
