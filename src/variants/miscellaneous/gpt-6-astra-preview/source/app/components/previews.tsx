"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Dialog } from "./dialog";
import { useExperience } from "./experience";
import { BrandMark, Icon, type IconName } from "./icons";
import { sampleNotes, type SampleNote } from "./sample-notes";

function SampleNoteDialog({ note, onClose }: { note: SampleNote | null; onClose: () => void }) {
  const { openNotebook } = useExperience();
  return <Dialog open={!!note} onClose={onClose} title={note?.collection ?? "A note from Morrow"} className="sample-dialog">{note && <><div className="sample-note-body">{note.image && <Image src={note.image} alt={note.imageAlt ?? ""} width={800} height={400} className="sample-note-image" />}<Icon name={note.icon} size={24} /><h2>{note.title}</h2>{note.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="sample-note-footer"><span>An example from the Morrow collection</span><button className="button button-primary" onClick={() => { onClose(); openNotebook({ title: note.title, body: note.body }); }}>Make it yours <Icon name="arrow" size={16} /></button></div></>}</Dialog>;
}

export function LibraryPreview() {
  const [filter, setFilter] = useState("Everything");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selected, setSelected] = useState<SampleNote | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");
  const { openNotebook } = useExperience();
  const displayed = sampleNotes.slice(0, 4).filter((note) => (filter === "Everything" || note.kind === filter || (filter === "Links" && note.kind === "Images")) && `${note.title} ${note.excerpt}`.toLowerCase().includes(query.toLowerCase()));

  return <div className="library-demo" id="product">
    <div className="demo-window-bar"><span className="demo-window-name"><BrandMark size={19} /> My little corner</span><div className="demo-window-controls"><button type="button" className="icon-button" aria-label="Search the example library" aria-expanded={searchOpen} onClick={() => { setSearchOpen(!searchOpen); setQuery(""); }}><Icon name="search" size={16} /></button><button type="button" className="icon-button" aria-label="Open your full notebook" onClick={() => openNotebook()}><Icon name="expand" size={15} /></button></div></div>
    <div className="library-demo-content">
      <div className="library-title-row"><h2>A little bit of everything.</h2><button type="button" className="demo-add-button" aria-label="Create a note" onClick={() => openNotebook()}><Icon name="plus" size={16} /></button></div>
      <div className="library-toolbar"><div className="library-tabs" aria-label="Filter example notes">{["Everything", "Notes", "Ideas", "Links"].map((tab) => <button key={tab} type="button" aria-pressed={filter === tab} onClick={() => setFilter(tab)}>{tab}</button>)}</div><button type="button" className="icon-button library-view-toggle" aria-label={view === "grid" ? "Show notes as a list" : "Show notes as a grid"} onClick={() => setView(view === "grid" ? "list" : "grid")}><Icon name={view === "grid" ? "list" : "grid"} size={15} /></button></div>
      {searchOpen && <label className="library-search"><Icon name="search" size={16} /><input aria-label="Search example notes" placeholder="Find a thought…" value={query} onChange={(event) => setQuery(event.target.value)} autoFocus /></label>}
      <div className={`library-note-grid ${view === "list" ? "is-list" : ""}`}>
        {displayed.map((note) => <button key={note.id} type="button" className={`library-note note-${note.color ?? "paper"} ${note.image ? "has-image" : ""} ${note.items ? "has-checklist" : ""}`} onClick={() => setSelected(note)}>
          {note.image && <Image className="library-note-image" src={note.image} alt={note.imageAlt ?? ""} width={400} height={200} sizes="(max-width: 700px) 45vw, 260px" priority={note.id === "attention"} />}
          <div className="library-note-content">{note.color && <Icon name={note.icon} size={19} />}<h3>{note.color ? note.excerpt : note.title}</h3>{note.items && <ul>{note.items.map((item, index) => <li key={item}><span className={index === 0 ? "mini-check checked" : "mini-check"}>{index === 0 && <Icon name="check" size={10} />}</span>{item}</li>)}</ul>}<span className="note-caption"><Icon name={note.icon} size={12} />{note.collection}</span></div>
        </button>)}
        {!displayed.length && <div className="library-empty"><Icon name="search" size={24} /><p>No thoughts found here yet.</p><button type="button" className="text-button" onClick={() => { setFilter("Everything"); setQuery(""); }}>Show all notes</button></div>}
      </div>
    </div>
    <div className="library-demo-footer"><span>{displayed.length} notes, endless possibilities</span><span><Icon name="lock" size={12} /> Only you</span></div>
    <SampleNoteDialog note={selected} onClose={() => setSelected(null)} />
  </div>;
}

const editorNotes = [
  { title: "A second brain, a quieter mind", collection: "Getting started", icon: "book" as IconName, body: "My brain is for having ideas, not holding on to every one of them.\n\nThis is a place for the loose threads. The half-formed thoughts. The interesting thing I read at 11 pm and would otherwise forget.", links: ["The creative process", "Things worth remembering"] },
  { title: "The creative process", collection: "Ideas & thinking", icon: "spark" as IconName, body: "Most ideas don’t arrive fully formed. They turn up as scraps: a sentence, an image, a question that won’t quite leave.\n\nCollect the scraps. Come back to them. Notice what starts to fit together.", links: ["A second brain, a quieter mind", "Things worth remembering"] },
  { title: "Things worth remembering", collection: "Everyday notes", icon: "bookmark" as IconName, body: "You can change your mind.\nYou can start before you’re ready.\nYou can write something down without knowing what it means yet.\n\nKeep a record of what catches your attention. There’s usually a reason.", links: ["A second brain, a quieter mind", "The creative process"] },
];

export function EditorPreview() {
  const [selected, setSelected] = useState(0);
  const [bodies, setBodies] = useState(editorNotes.map((note) => note.body));
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const { openNotebook } = useExperience();
  const note = editorNotes[selected];
  const matching = editorNotes.map((entry, index) => ({ ...entry, index })).filter((entry) => entry.title.toLowerCase().includes(query.toLowerCase()));

  return <div className="editor-demo" id="product">
    <div className="editor-window-bar"><span><BrandMark size={18} /> morrow <span className="window-slash">/</span> Personal space</span><div><span className="preview-label">Interactive preview</span><button type="button" className="icon-button" aria-label="Open full notebook" onClick={() => openNotebook()}><Icon name="expand" size={15} /></button></div></div>
    <div className="editor-demo-layout">
      <aside className="editor-sidebar">
        <button type="button" className="editor-search-button" onClick={() => setSearchOpen(!searchOpen)}><Icon name="search" size={16} /> Find anything <Icon name="command" size={13} /></button>
        {searchOpen && <input className="editor-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search these notes…" aria-label="Search writing preview" autoFocus />}
        <div className="editor-sidebar-title"><span>Your notes</span><button className="icon-button" type="button" aria-label="Add your own note" onClick={() => openNotebook()}><Icon name="plus" size={15} /></button></div>
        <nav aria-label="Example documents">{matching.map((entry) => <button type="button" key={entry.title} className={selected === entry.index ? "active" : ""} onClick={() => setSelected(entry.index)}><Icon name={entry.icon} size={16} /><span>{entry.title}</span></button>)}{!matching.length && <p className="search-empty">No matching notes.</p>}</nav>
        <div className="editor-sidebar-bottom"><Icon name="network" size={16} /><span>Everything is connected.</span></div>
      </aside>
      <div className="editor-document">
        <div className="editor-breadcrumb"><span>{note.collection}</span><Icon name="chevron" size={12} /><span>Note</span></div>
        <div className="editor-mobile-tabs">{editorNotes.map((entry, index) => <button key={entry.title} type="button" aria-label={entry.title} aria-pressed={selected === index} onClick={() => setSelected(index)}><Icon name={entry.icon} size={16} />{index + 1}</button>)}</div>
        <Icon name={note.icon} size={27} className="editor-page-icon" />
        <h2>{note.title}</h2>
        <textarea aria-label="Edit the example note" spellCheck={false} value={bodies[selected]} onChange={(event) => setBodies(bodies.map((body, index) => index === selected ? event.target.value : body))} />
        <div className="editor-inline-link"><Icon name="link" size={15} /><button type="button" onClick={() => setSelected((selected + 1) % editorNotes.length)}>{note.links[0]}</button></div>
        <div className="editor-document-footer"><span>{bodies[selected].trim().split(/\s+/).filter(Boolean).length} words · Editable preview</span><button type="button" onClick={() => openNotebook({ title: note.title, body: bodies[selected] })}>Keep this note <Icon name="arrow" size={13} /></button></div>
      </div>
      <aside className="editor-connections"><div><Icon name="link" size={15} />Connected notes</div>{note.links.map((title) => <button type="button" key={title} onClick={() => setSelected(editorNotes.findIndex((entry) => entry.title === title))}><Icon name="note" size={15} />{title}<Icon name="arrow-up" size={12} /></button>)}<p>Follow a thought.<br />See where it takes you.</p></aside>
    </div>
  </div>;
}

export function CollectionPreview() {
  const [filter, setFilter] = useState("Everything");
  const [selected, setSelected] = useState<SampleNote | null>(null);
  const [sort, setSort] = useState("recent");
  const collection = [sampleNotes[0], sampleNotes[2], sampleNotes[4], sampleNotes[5]];
  const filtered = collection.filter((note) => filter === "Everything" || (filter === "Inspiration" && ["Ideas", "Links"].includes(note.kind)) || (filter === "Everyday" && note.kind === "Notes") || (filter === "Places" && note.id === "kyoto"));
  const displayed = sort === "title" ? [...filtered].sort((a, b) => a.title.localeCompare(b.title)) : filtered;

  return <section className="collection-demo" id="product" aria-label="An example idea collection">
    <div className="collection-toolbar"><div className="collection-tabs" aria-label="Filter the collection">{["Everything", "Everyday", "Inspiration", "Places"].map((tab) => <button key={tab} type="button" aria-pressed={filter === tab} onClick={() => setFilter(tab)}>{tab}</button>)}</div><label className="collection-sort"><span className="sr-only">Sort example notes</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recent">Recently saved</option><option value="title">By title</option></select></label></div>
    <div className="collection-note-grid">{displayed.map((note) => <button key={note.id} type="button" className={`collection-note collection-note-${note.id}`} onClick={() => setSelected(note)}>
      {note.image && <Image src={note.image} alt={note.imageAlt ?? ""} width={500} height={500} className="collection-note-image" sizes="(max-width: 700px) 70vw, 300px" priority />}
      <div className="collection-note-copy">{!note.image && <Icon name={note.icon} size={24} />}<h3>{note.id === "creative" ? note.excerpt : note.title}</h3>{note.items ? <ul>{["A slow morning", "The book I keep putting off", "Somewhere with no signal", "Absolutely no plans"].map((item, index) => <li key={item}><span className={`mini-check ${index === 0 ? "checked" : ""}`}>{index === 0 && <Icon name="check" size={11} />}</span>{item}</li>)}</ul> : note.id !== "creative" && <p>{note.excerpt}</p>}<span className="collection-note-category"><Icon name={note.icon} size={13} />{note.collection}<Icon name="arrow-up" size={14} /></span></div>
    </button>)}</div>
    <div className="collection-demo-bottom"><span><Icon name="note" size={14} /> A few pages from a curious life.</span><span>Click a thought. Stay a while. <Icon name="arrow-up" size={13} /></span></div>
    <SampleNoteDialog note={selected} onClose={() => setSelected(null)} />
  </section>;
}

const dailyPages = [
  { day: "Mon", number: "18", date: "Monday, May 18", title: "Starting where I am", body: "A new week. Trying to leave a little room for things I didn’t plan.", thought: "Not everything needs to be figured out today.", tasks: ["A walk before the inbox", "Write to an old friend", "Finish the chapter"] },
  { day: "Tue", number: "19", date: "Tuesday, May 19", title: "Things worth keeping", body: "Lunch outside. An unexpectedly good conversation. A sentence in a book that felt written for me.", thought: "Small days are still full of things worth remembering.", tasks: ["Save that passage", "Call home", "Leave work at work"] },
  { day: "Wed", number: "20", date: "Wednesday, May 20", title: "A few things on my mind", body: "I want to get better at noticing the small things. The good coffee. The morning light. The idea that turns up on a walk.", thought: "You don’t need more time. Sometimes, just a little more attention.", tasks: ["Take a walk without my phone", "Make something, just because", "Leave a little room for tomorrow"] },
];

export function DailyPreview() {
  const [day, setDay] = useState(2);
  const [checks, setChecks] = useState<Record<string, boolean>>({ "2-0": true });
  const [thoughts, setThoughts] = useState(["", "", ""]);
  const { openNotebook } = useExperience();
  const id = useId();
  const page = dailyPages[day];
  return <div className="daily-demo" id="product">
    <div className="daily-toolbar"><span><Icon name="book" size={17} /> My daily pages</span><div><button type="button" className="icon-button" aria-label="Previous daily page" onClick={() => setDay((day + 2) % 3)}><Icon name="chevron-left" size={14} /></button><button type="button" className="icon-button" aria-label="Next daily page" onClick={() => setDay((day + 1) % 3)}><Icon name="chevron" size={14} /></button></div></div>
    <div className="daily-tabs" aria-label="Choose a daily page">{dailyPages.map((entry, index) => <button type="button" key={entry.number} aria-pressed={day === index} onClick={() => setDay(index)}>{entry.day}<span>{entry.number}</span></button>)}</div>
    <div className="daily-page-content"><div className="daily-date"><Icon name="sun" size={17} />{page.date}</div><h2>{page.title}</h2><p>{page.body}</p><blockquote>{page.thought}</blockquote><div className="daily-checklist">{page.tasks.map((task, index) => <label key={`${day}-${index}`}><input type="checkbox" checked={checks[`${day}-${index}`] ?? false} onChange={(event) => setChecks({ ...checks, [`${day}-${index}`]: event.target.checked })} /><span>{task}</span></label>)}</div><label htmlFor={id} className="daily-thought-label">One more thought</label><textarea id={id} placeholder="There’s always room for one more…" value={thoughts[day]} onChange={(event) => setThoughts(thoughts.map((thought, index) => index === day ? event.target.value : thought))} rows={2} /></div>
    <div className="daily-page-footer"><span>One day, one page.</span><button type="button" onClick={() => openNotebook({ title: `${page.date} — ${page.title}`, body: `${page.body}\n\n${page.thought}\n\n${page.tasks.map((task, index) => `${checks[`${day}-${index}`] ? "[x]" : "[ ]"} ${task}`).join("\n")}\n\n${thoughts[day]}` })}>Keep this page<Icon name="arrow" size={14} /></button></div>
  </div>;
}

const graphNotes: { title: string; icon: IconName; x: number; y: number; sample: string; description: string }[] = [
  { title: "A more intentional life", icon: "sun", x: 50, y: 48, sample: "weekend", description: "A few thoughts on making room for the things that matter." },
  { title: "The art of paying attention", icon: "leaf", x: 20, y: 17, sample: "attention", description: "The things you notice when you slow down and look around." },
  { title: "Spaces that feel like home", icon: "image", x: 79, y: 14, sample: "spaces", description: "Warm light, familiar objects, and a little room to breathe." },
  { title: "On being a beginner", icon: "spark", x: 83, y: 49, sample: "creative", description: "Curiosity is a good enough reason to try something new." },
  { title: "Japan, someday soon", icon: "globe", x: 73, y: 81, sample: "kyoto", description: "A collection of places to get wonderfully lost in." },
  { title: "An idea to come back to", icon: "note", x: 23, y: 80, sample: "unfinished", description: "A place for beginnings that aren’t quite ready to be anything yet." },
];

export function GraphPreview() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState<"graph" | "list">("graph");
  const [opened, setOpened] = useState<SampleNote | null>(null);
  const note = graphNotes[selected];
  return <div className="graph-demo" id="product">
    <div className="graph-toolbar"><span><Icon name="network" size={17} /> A few connected thoughts</span><div><button type="button" className="icon-button" aria-label="Graph view" aria-pressed={view === "graph"} onClick={() => setView("graph")}><Icon name="network" size={16} /></button><button type="button" className="icon-button" aria-label="List view" aria-pressed={view === "list"} onClick={() => setView("list")}><Icon name="list" size={16} /></button></div></div>
    {view === "graph" ? <div className="graph-canvas"><svg className="graph-edges" viewBox="0 0 600 410" preserveAspectRatio="none" aria-hidden="true">{graphNotes.slice(1).map((entry, index) => <path key={entry.title} className={selected === 0 || selected === index + 1 ? "active" : ""} d={`M300 197 C${entry.x * 6} 197, ${300} ${entry.y * 4.1}, ${entry.x * 6} ${entry.y * 4.1}`} />)}<path d="M120 70 C20 160, 45 265, 138 328" /><path d="M474 57 C565 103, 560 154, 498 201" /><path d="M438 332 C330 400, 255 398, 138 328" /></svg>{graphNotes.map((entry, index) => <button key={entry.title} type="button" className={`graph-node ${index === 0 ? "graph-center" : ""} ${selected === index ? "selected" : ""}`} style={{ left: `${entry.x}%`, top: `${entry.y}%` }} onClick={() => setSelected(index)} aria-pressed={selected === index}><Icon name={entry.icon} size={index === 0 ? 22 : 17} /><span>{entry.title}</span>{index === 0 && <span className="graph-node-meta">5 connected notes</span>}</button>)}</div> : <div className="graph-list">{graphNotes.map((entry, index) => <button key={entry.title} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><Icon name={entry.icon} size={18} /><span>{entry.title}</span><Icon name="chevron" size={15} /></button>)}</div>}
    <div className="graph-detail" aria-live="polite"><div><strong>{note.title}</strong><p>{note.description}</p></div><button type="button" className="icon-button" aria-label={`Read ${note.title}`} onClick={() => setOpened({ ...sampleNotes.find((entry) => entry.id === note.sample)!, title: note.title })}><Icon name="arrow-up" size={20} /></button></div>
    <SampleNoteDialog note={opened} onClose={() => setOpened(null)} />
  </div>;
}
