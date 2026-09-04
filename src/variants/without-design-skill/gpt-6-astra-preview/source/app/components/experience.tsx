"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AppPreview } from "./artwork";
import { Brand, Flower, Icon } from "./icons";

export type ExperienceMode = "workspace" | "tour" | null;
type Note = { id: string; title: string; body: string; updatedAt: string };
const storageKey = "mote-notes-v1";
const initialNotes: Note[] = [
  { id: "a-little-beginning", title: "A little beginning", body: "Every good idea starts somewhere. This one starts with a little space to think.\n\nA line from a book. An idea for the weekend. Something you noticed on your walk. It all belongs here.\n\nGo ahead, make this space yours.", updatedAt: "2026-09-03T12:00:00Z" },
  { id: "follow-your-curiosity", title: "Follow your curiosity", body: "Things I’d like to make more time for:\n\n• Taking the scenic route\n• Learning something just because\n• Making things with my hands\n• Conversations that go somewhere unexpected\n\nWhat would you add?", updatedAt: "2026-09-02T12:00:00Z" },
];

function readNotes(): Note[] {
  if (typeof window === "undefined") return initialNotes;
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (Array.isArray(stored)) {
      const valid = stored.filter((note): note is Note => note !== null && typeof note === "object" && typeof note.id === "string" && typeof note.title === "string" && typeof note.body === "string" && typeof note.updatedAt === "string" && !Number.isNaN(Date.parse(note.updatedAt)));
      if (valid.length) return valid;
    }
  } catch { /* A fresh space is available when browser storage is unavailable. */ }
  return initialNotes;
}

function Modal({ children, onClose, className = "" }: { children: ReactNode; onClose: () => void; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return <dialog ref={ref} className={`experience-dialog ${className}`} aria-labelledby="experience-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div className="dialog-inner">{children}<button className="dialog-close" aria-label="Close dialog" onClick={onClose}><Icon name="close" size={20} /></button></div></dialog>;
}

function Workspace({ onClose }: { onClose: () => void }) {
  const [notes, setNotes] = useState<Note[]>(readNotes);
  const [selectedId, setSelectedId] = useState(notes[0].id);
  const [search, setSearch] = useState("");
  const [saveStatus, setSaveStatus] = useState("All changes saved");
  const titleRef = useRef<HTMLInputElement>(null);
  const selected = notes.find(note => note.id === selectedId) || notes[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(notes));
        setSaveStatus("All changes saved");
      } catch {
        setSaveStatus("Storage is unavailable. Export to keep your notes.");
      }
    }, 350);
    return () => window.clearTimeout(timer);
  }, [notes]);

  function updateNote(field: "title" | "body", value: string) {
    setSaveStatus("Saving your thought…");
    setNotes(current => current.map(note => note.id === selected.id ? { ...note, [field]: value, updatedAt: new Date().toISOString() } : note));
  }

  function addNote() {
    const note = { id: crypto.randomUUID(), title: "", body: "", updatedAt: new Date().toISOString() };
    setNotes(current => [note, ...current]);
    setSelectedId(note.id);
    setSearch("");
    setSaveStatus("Saving your thought…");
    window.setTimeout(() => titleRef.current?.focus(), 0);
  }

  function saveNow() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(notes));
      setSaveStatus("All changes saved");
    } catch { setSaveStatus("Storage is unavailable. Export to keep your notes."); }
  }

  function closeWorkspace() {
    try { localStorage.setItem(storageKey, JSON.stringify(notes)); } catch { /* Export remains available for restricted browsers. */ }
    onClose();
  }

  function exportNotes() {
    const content = notes.map(note => `${note.title || "Untitled thought"}\n${"—".repeat(36)}\n\n${note.body}`).join("\n\n\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "my-mote-notes.txt";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const filtered = notes.filter(note => `${note.title} ${note.body}`.toLowerCase().includes(search.toLowerCase()));
  return <Modal onClose={closeWorkspace} className="workspace-dialog"><div className="workspace-header"><Brand compact /><h2 id="experience-title">A little space, just for you.</h2><span><Icon name="lock" size={12} /> Private by nature</span></div><div className="workspace-body"><aside className="workspace-sidebar"><label className="workspace-search"><Icon name="search" size={15} /><input aria-label="Search your notes" placeholder="Find a thought…" value={search} onChange={event => setSearch(event.target.value)} /></label><button className="new-note-button" onClick={addNote}><Icon name="plus" size={16} /> A new thought</button><div className="workspace-list-label">ALL NOTES <span>{notes.length}</span></div><div className="workspace-note-list">{filtered.map(note => <button key={note.id} className={note.id === selected.id ? "selected" : ""} onClick={() => setSelectedId(note.id)}><Icon name="note" size={15} /><span><strong>{note.title || "Untitled thought"}</strong><small>{note.body.slice(0, 50) || "A little possibility…"}</small></span></button>)}{filtered.length === 0 && <p className="workspace-no-results">No matching thoughts.<br />Try a different word.</p>}</div><button className="export-button" onClick={exportNotes}><Icon name="download" size={15} /> Export your notes</button><p className="workspace-local-note">Yours to keep.<br />Saved in this browser, on this device.</p></aside><section className="workspace-editor" aria-label="Note editor"><div className="editor-topline"><span><i /> PERSONAL NOTES</span><span>{new Date(selected.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span></div><input className="editor-title" ref={titleRef} aria-label="Note title" placeholder="A thought worth keeping…" value={selected.title} onChange={event => updateNote("title", event.target.value)} /><div className="editor-rule" /><textarea className="editor-body" aria-label="Note content" placeholder={"Start anywhere. It doesn’t have to be perfect.\n\nWhat’s on your mind?"} value={selected.body} onChange={event => updateNote("body", event.target.value)} /><div className="editor-bottom"><span className="editor-save-status" role="status"><Icon name={saveStatus === "All changes saved" ? "check" : "clock"} size={14} />{saveStatus}</span><button onClick={saveNow}>Save note <Icon name="arrow" size={15} /></button></div></section></div></Modal>;
}

const tourSteps = [
  { title: "Catch the little things.", body: "A fleeting thought, a good read, a place you want to go. Give it a home before it slips away.", label: "Collect" },
  { title: "Follow a new thread.", body: "See your thoughts side by side. Explore the connections and find an unexpected bigger picture.", label: "Connect" },
  { title: "Find your way back.", body: "Your good ideas are never far away. Search the notes below to find exactly what you’re thinking of.", label: "Rediscover" },
];

function Tour({ onClose, onStart }: { onClose: () => void; onStart: () => void }) {
  const [step, setStep] = useState(0);
  return <Modal onClose={onClose} className="tour-dialog"><div className="tour-header"><Flower size={34} /><span>A LITTLE LOOK INSIDE</span></div><div className="tour-intro"><div><span className="mini-label">0{step + 1} / 03</span><h2 id="experience-title">{tourSteps[step].title}</h2><p>{tourSteps[step].body}</p></div><div className="tour-steps" aria-label="Tour steps">{tourSteps.map((item, index) => <button key={item.label} onClick={() => setStep(index)} className={step === index ? "active" : ""} aria-current={step === index ? "step" : undefined}><span>{index + 1}</span>{item.label}</button>)}</div></div><div className="tour-preview"><AppPreview view={step} onOpen={onStart} /></div><div className="tour-footer"><span>No perfect system needed. Just you.</span><button className="button primary" onClick={() => step < 2 ? setStep(step + 1) : onStart()}>{step < 2 ? "Keep exploring" : "Make yourself at home"}<Icon name="arrow" size={16} /></button></div></Modal>;
}

export default function Experience({ mode, onClose, onStart }: { mode: ExperienceMode; onClose: () => void; onStart: () => void }) {
  if (mode === "workspace") return <Workspace onClose={onClose} />;
  if (mode === "tour") return <Tour onClose={onClose} onStart={onStart} />;
  return null;
}
