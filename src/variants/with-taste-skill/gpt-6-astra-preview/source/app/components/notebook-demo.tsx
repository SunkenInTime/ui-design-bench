"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowsOutSimple, Asterisk, Check, Export, LinkSimple, MagnifyingGlass,
  NoteBlank, NotePencil, Plus, Trash, X,
} from "@phosphor-icons/react";
import {
  addNote, exportNotebook, removeNote, restoreNote, updateNote, useNotebook, type Note,
} from "../lib/notebook";
import { useExperience } from "./experience";

export function NotebookDemo({ expanded = false, initialNoteId }: { expanded?: boolean; initialNoteId?: string }) {
  const { openNotebook } = useExperience();
  const { notes, ready, status, error } = useNotebook();
  const [selectedId, setSelectedId] = useState(initialNoteId ?? "attention");
  const [query, setQuery] = useState("");
  const [removed, setRemoved] = useState<Note>();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const fieldId = useId();
  const selected = notes.find((note) => note.id === selectedId) ?? notes[0];
  const results = notes.filter((note) => `${note.title} ${note.body} ${note.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
  const related = selected ? notes.filter((note) => note.id !== selected.id && note.tags.some((tag) => selected.tags.includes(tag))).slice(0, 2) : [];
  const isExample = notes.length > 0 && notes.every((note) => note.sample);

  function createNote() {
    const id = addNote();
    setSelectedId(id);
    setQuery("");
    requestAnimationFrame(() => contentRef.current?.focus());
  }

  if (!ready) return (
    <div className="notebook notebook-loading" aria-busy="true" aria-label="Loading your notebook">
      <span className="sr-only">Opening your notebook</span>
      <div className="skeleton-top" />
      <div className="skeleton-layout"><div className="skeleton-sidebar" /><div className="skeleton-page"><i /><i /><i /><i /></div></div>
    </div>
  );

  return (
    <div className={`notebook ${expanded ? "notebook-expanded" : ""}`} role="region" aria-label="Interactive Aster notebook">
      <div className="notebook-topbar">
        <span className="notebook-name"><Asterisk size={21} weight="bold" aria-hidden="true" /><span>{isExample ? "Example notebook" : "Your notebook"}</span></span>
        <div className="notebook-actions">
          <button className="icon-button" onClick={exportNotebook} disabled={!notes.length} aria-label="Export notes" title="Export notes"><Export size={16} /></button>
          {!expanded && <button className="icon-button notebook-expand" onClick={() => openNotebook()} aria-label="Expand notebook" title="Expand notebook"><ArrowsOutSimple size={16} /></button>}
          <button className="notebook-new" onClick={createNote}><Plus size={15} /><span>New note</span></button>
        </div>
      </div>
      <div className="notebook-body">
        <aside className="notebook-sidebar" aria-label="Your notes">
          <label htmlFor={`${fieldId}-search`} className="sr-only">Search notes</label>
          <div className="note-search">
            <MagnifyingGlass size={16} aria-hidden="true" />
            <input id={`${fieldId}-search`} type="search" placeholder="Find a thought" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <div className="notebook-list-label">All thoughts <span>{notes.length}</span></div>
          <div className="note-list">
            {results.map((note) => <button key={note.id} className={`note-list-item ${selected?.id === note.id ? "is-selected" : ""}`} onClick={() => setSelectedId(note.id)} aria-pressed={selected?.id === note.id}>
              <NoteBlank size={17} aria-hidden="true" /><span><strong>{note.title || "Untitled thought"}</strong><small>{note.tags[0] || "A new beginning"}</small></span>
            </button>)}
            {!results.length && <div className="note-search-empty"><MagnifyingGlass size={23} /><p>{query ? "No matching thoughts." : "A little room for something new."}</p>{query && <button onClick={() => setQuery("")}>Clear search</button>}</div>}
          </div>
          <div className="notebook-sidebar-foot"><LinkSimple size={15} /><span>Make room for connections.</span></div>
        </aside>
        {selected ? <div className="note-editor">
          <div className="note-toolbar"><span><NotePencil size={15} />{selected.sample ? "Try editing this note" : "A thought worth keeping"}</span><button className="icon-button" aria-label="Delete selected note" title="Delete note" onClick={() => setRemoved(removeNote(selected.id))}><Trash size={16} /></button></div>
          <div className="notebook-cover"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/horizon.webp" alt="A quiet lake and mountains at dusk" fill sizes={expanded ? "700px" : "(max-width: 768px) 80vw, 600px"} /></div>
          <div className="note-fields">
            <label className="sr-only" htmlFor={`${fieldId}-title`}>Note title</label>
            <input className="note-title" id={`${fieldId}-title`} value={selected.title} placeholder="Untitled thought" onChange={(event) => updateNote(selected.id, { title: event.target.value })} />
            <label className="sr-only" htmlFor={`${fieldId}-body`}>Your note</label>
            <textarea ref={contentRef} className="note-text" id={`${fieldId}-body`} value={selected.body} placeholder="What is on your mind?" onChange={(event) => updateNote(selected.id, { body: event.target.value })} />
            <TopicInput key={selected.id} note={selected} fieldId={fieldId} />
            {related.length > 0 && <div className="note-connections"><span><LinkSimple size={14} />Connected thoughts</span><div>{related.map((note) => <button key={note.id} onClick={() => setSelectedId(note.id)}>{note.title || "Untitled thought"}<LinkSimple size={12} /></button>)}</div></div>}
          </div>
        </div> : <div className="notebook-empty"><NotePencil size={44} weight="light" /><h3>Every idea starts somewhere.</h3><p>This page is yours. Add your first thought.</p><button className="button button-primary" onClick={createNote}>New note <Plus size={16} /></button></div>}
      </div>
      <div className="notebook-footer" aria-live="polite">
        {removed ? <span className="note-undo">Note removed.<button onClick={() => { restoreNote(removed); setSelectedId(removed.id); setRemoved(undefined); }}>Undo</button><button className="icon-button" aria-label="Dismiss undo" onClick={() => setRemoved(undefined)}><X size={12} /></button></span> : <span className={error ? "note-error" : "note-save-status"}>{error ? error : <><Check size={13} />{status === "saving" ? "Saving your thought..." : status === "saved" ? "Saved in this browser" : "Your thoughts, at your pace."}</>}</span>}
        {!error && <span className="notebook-footer-hint">A little more headspace.</span>}
      </div>
    </div>
  );
}

function TopicInput({ note, fieldId }: { note: Note; fieldId: string }) {
  const [value, setValue] = useState(note.tags.join(", "));
  return <div className="note-topics"><label htmlFor={`${fieldId}-topics`}>Topics</label><input id={`${fieldId}-topics`} value={value} placeholder="Add topics, separated by commas" onChange={(event) => setValue(event.target.value)} onBlur={() => updateNote(note.id, { tags: value.split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean) })} /><span className="sr-only">Notes with shared topics appear as connected thoughts.</span></div>;
}
