"use client";

import Image from "next/image";
import { useState } from "react";
import { Brand, Flower, Icon, type IconName } from "./icons";

export function People({ text = "A little less scattered. A lot more you." }: { text?: string }) {
  return <div className="people-proof"><div className="avatars">{[1, 2, 3].map(i => <Image key={i} src={`/variants/without-design-skill/gpt-6-astra-preview/images/person-${i}.jpg`} alt="" width={36} height={36} />)}<span><Flower size={17} /></span></div><div><div className="little-stars" aria-label="Made for curious minds">✦ ✦ ✦ ✦ ✦</div><p>{text}</p></div></div>;
}

export function Waveform() {
  return <span className="waveform" aria-hidden="true">{[9, 17, 24, 14, 30, 19, 12, 25, 35, 18, 25, 13, 21, 10, 16, 24, 13, 7].map((h, i) => <i key={i} style={{ height: h }} />)}</span>;
}

export function GardenScene({ onOpen }: { onOpen: () => void }) {
  return <div className="garden-scene" aria-label="Notes, inspiration, and voice memos connected in mote">
    <div className="garden-wash" />
    <svg className="garden-threads" viewBox="0 0 620 570" fill="none" aria-hidden="true"><path d="M185 129C212 53 346 67 399 134S393 259 347 296M175 283c38 62 138 67 172 13M347 296c125-27 169 63 104 136M147 445c-25-62 41-119 153-127" stroke="#91a586" strokeWidth="1.4" strokeDasharray="5 6" /><path d="M508 296c40-49 63-24 42 1-15 18-35 12-30-8 4-17 31-22 43-6" stroke="#8f9c70" strokeWidth="1.4" /><circle cx="275" cy="99" r="4" fill="#7c946d" /><circle cx="219" cy="335" r="3" fill="#7c946d" /><circle cx="482" cy="345" r="4" fill="#7c946d" /></svg>
    <span className="garden-floating-label"><Icon name="link" size={13} /> Follow a little curiosity</span>
    <div className="garden-note"><span className="card-eyebrow"><i /> A LITTLE THOUGHT</span><h3>What if I made<br />more room for<br /><em>the good things?</em></h3><p>Slow mornings. Long walks.<br />Ideas that go somewhere.</p><div className="note-card-foot"><span>#life-lately</span><Icon name="note" size={14} /></div></div>
    <div className="garden-photo"><div className="photo-tape" /><Image src="/variants/without-design-skill/gpt-6-astra-preview/images/forest.jpg" width={250} height={240} alt="Sunlight finding its way through a green forest" preload /><div>Somewhere to get lost.<Icon name="arrow-up" size={13} /></div></div>
    <button className="garden-core" onClick={onOpen} aria-label="Open your second brain"><Flower size={65} /></button>
    <span className="garden-connected"><span /> Connected, naturally.</span>
    <div className="garden-sticky"><Icon name="spark" size={23} /><p>You don’t have to<br /><em>hold it all.</em></p><span>that’s what mote is for.</span></div>
    <button className="garden-audio" onClick={onOpen}><span className="audio-icon"><Icon name="headphones" size={21} /></span><span><strong>A thought on my walk</strong><small>Voice note · 0:42</small><Waveform /></span></button>
    <span className="garden-handwriting">a home for every little thing<svg viewBox="0 0 90 50" fill="none" aria-hidden="true"><path d="M3 42c54 5 74-5 75-36m-8 8 9-9 7 12" stroke="currentColor" strokeWidth="1.5" /></svg></span>
    <span className="garden-spark"><Icon name="spark" size={27} /></span>
  </div>;
}

const graphNodes: { title: string; icon: IconName; x: number; y: number; description: string }[] = [
  { title: "Creative confidence", icon: "spark", x: 74, y: 20, description: "Small experiments are the beginning of big ideas. Give yourself permission to start." },
  { title: "The art of noticing", icon: "sun", x: 79, y: 64, description: "A color on your walk. A line in a book. Pay attention to what makes you pay attention." },
  { title: "A slower kind of life", icon: "leaf", x: 29, y: 18, description: "Less rushing, more room. Collecting little ways to bring intention to the everyday." },
  { title: "Things worth making", icon: "note", x: 19, y: 59, description: "The ideas that keep coming back are usually worth listening to. This is their home." },
  { title: "Books that stay with me", icon: "book", x: 48, y: 84, description: "Words that changed the way you see things, ready for the moment you need them again." },
];

export function ConnectionGraph({ dark = false, onOpen }: { dark?: boolean; onOpen?: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  return <div className={`connection-graph ${dark ? "graph-dark" : ""}`}>
    <svg viewBox="0 0 800 380" preserveAspectRatio="none" className="graph-lines" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1"><path d="M400 180 590 75 635 245 400 180 385 319 152 225 232 69 400 180 635 245 385 319M232 69 590 75M152 225 400 180" /><path d="m400 180 45-140m-45 140 319-42M152 225 65 121m567 124 97 70" opacity=".45" /></g>{[[445, 40], [719, 138], [65, 121], [729, 315], [317, 120], [489, 250], [225, 269], [517, 58], [705, 65], [84, 292], [452, 352]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} fill="currentColor" />)}</svg>
    <button className="graph-center" onClick={onOpen} aria-label="Open your connected notes"><Flower size={43} /></button>
    {graphNodes.map((node, index) => <button key={node.title} className={`graph-node ${selected === index ? "selected" : ""}`} style={{ left: `${node.x}%`, top: `${node.y}%` }} onClick={() => setSelected(selected === index ? null : index)} aria-expanded={selected === index}><span><Icon name={node.icon} size={17} /></span>{node.title}<i /></button>)}
    {selected !== null && <div className="graph-detail" role="status"><button onClick={() => setSelected(null)} aria-label="Close connection"><Icon name="close" size={14} /></button><strong>{graphNodes[selected].title}</strong><p>{graphNodes[selected].description}</p></div>}
    <span className="graph-caption"><span /> {selected === null ? "Click a thought. Follow the thread." : "Every thought is a new beginning."}</span>
  </div>;
}

export function OrbitScene({ onOpen }: { onOpen: () => void }) {
  return <div className="orbit-scene">
    <div className="orbit-ambient" />
    <div className="orbit-window"><div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span><Icon name="lock" size={11} /> Your little universe</span><button onClick={onOpen} aria-label="Open the notes workspace"><Icon name="arrow-up" size={14} /></button></div>
      <div className="orbit-window-body"><aside className="preview-sidebar"><Brand compact /><span className="sidebar-caption">YOUR SPACE</span><span><Icon name="note" size={15} /> All notes <small>24</small></span><span><Icon name="sun" size={15} /> Daily thoughts</span><span className="sidebar-active"><Icon name="spark" size={15} /> Connections</span><span className="sidebar-caption collection-label">COLLECTIONS <Icon name="plus" size={12} /></span><span><i className="collection-dot lilac" /> Ideas & sparks</span><span><i className="collection-dot peach" /> Good reads</span><span><i className="collection-dot sage" /> Life, lately</span><div className="sidebar-bottom"><span className="mini-avatar">J</span> Jamie’s space <Icon name="chevron" size={12} /></div></aside>
        <div className="orbit-main"><div className="orbit-main-heading"><div><span className="mini-label">A BIGGER PICTURE</span><h3>Good ideas don’t happen alone.</h3></div><span className="live-pill"><i /> 24 connected thoughts</span></div><ConnectionGraph dark onOpen={onOpen} /></div>
      </div>
    </div>
    <div className="orbit-notification"><span><Icon name="spark" size={19} /></span><div><strong>A new connection, just for you.</strong><p>“Creative confidence” meets “The art of noticing”</p></div><i /></div>
  </div>;
}

export function PaperScene({ onOpen }: { onOpen: () => void }) {
  return <div className="paper-scene">
    <svg className="paper-doodles" viewBox="0 0 620 550" fill="none" aria-hidden="true"><path d="M78 62c-15-11-29 7-19 17 8 9 32 7 50-12m-7-4 12-2-4 13M379 74c-51 22-15 59 20 37s-7-53-16-24c-9 29 53 61 89 111M498 395c38 8 56 34 38 60s-46 12-27 0c18-13 47 10 54 38" stroke="#da6546" strokeWidth="2" /><path d="m447 197 27 6-1-25M51 407l-6 31m-15-13 32-2" stroke="#da6546" strokeWidth="2" /></svg>
    <span className="paper-margin-note">a second brain,<br />with a little soul.</span>
    <div className="paper-index"><div className="index-top"><span>FIELD NOTES</span><span>No. 002</span></div><h3>There is no<br />wrong way<br />to be <em>curious.</em></h3><p>Keep the question.<br />Follow the interesting bit.<br />See where it takes you.</p><div className="index-bottom"><span>SAVED FOR A SUNNY DAY</span><Icon name="sun" size={20} /></div></div>
    <div className="paper-photo"><div className="photo-tape" /><Image src="/variants/without-design-skill/gpt-6-astra-preview/images/mountains.jpg" alt="A sunlit mountain peak, saved as inspiration" width={220} height={250} preload /><span>somewhere I’d like to go.</span></div>
    <button className="paper-sticky" onClick={onOpen}><span className="pin" /><span>A thought today.<br />A possibility<br /><em>tomorrow.</em></span><Icon name="arrow-up" size={23} /></button>
    <div className="paper-bookmark"><Icon name="link" size={17} /><div><strong>The beauty of paying attention</strong><span>A good read · 6 min</span></div></div>
    <Flower className="paper-flower" size={87} outline />
    <span className="paper-caption">YOUR BEAUTIFULLY UNFINISHED MIND, ALL IN ONE PLACE.</span>
  </div>;
}

export function BoldScene({ onOpen }: { onOpen: () => void }) {
  return <div className="bold-scene">
    <svg className="bold-burst" viewBox="0 0 400 400" aria-hidden="true"><path d="m200 0 33 92 78-56-8 105 96-8-61 79 62 76-106-9 9 99-77-62-44 84-23-101-91 46 30-93L0 235l96-49-79-65 105 8 7-99 71 79Z" fill="#dcf48d" /></svg>
    <div className="bold-photo"><Image src="/variants/without-design-skill/gpt-6-astra-preview/images/oranges.jpg" width={230} height={235} alt="Bright citrus fruit, a saved spark of inspiration" preload /><div><Icon name="image" size={14} /> a little zest.jpg <Icon name="plus" size={14} /></div></div>
    <div className="bold-note"><span><Icon name="note" size={15} /> TODAY’S BRAIN DUMP <i /></span><h3>What if that<br />random thought<br />is the start of<br />something <em>big?</em></h3><div>#whatif <span>#keepgoing</span><Icon name="spark" size={25} /></div></div>
    <span className="bold-pointer"><svg viewBox="0 0 25 32" width="22" height="30" aria-hidden="true"><path d="m2 2 20 17-9 1-5 9Z" fill="#fb8957" stroke="#182116" strokeWidth="2" /></svg><span>Your next big thing</span></span>
    <button className="bold-sticky" onClick={onOpen}><span>DON’T LOSE<br />THAT THOUGHT.</span><svg viewBox="0 0 100 46" fill="none" aria-hidden="true"><path d="M3 31c29-45 23 24 51-7 24-27 25-11 21-1m-7-8 8 12 17-10" stroke="currentColor" strokeWidth="2.5" /></svg><small>DROP IT IN MOTE ↗</small></button>
    <div className="bold-round-sticker"><span>LESS SCATTER<br />MORE SPARK</span><Flower size={37} /></div>
    <span className="bold-plus">+</span>
  </div>;
}

export function QuietScene({ onOpen }: { onOpen: () => void }) {
  return <div className="quiet-scene"><div className="quiet-arch"><Image src="/variants/without-design-skill/gpt-6-astra-preview/images/coast.jpg" fill sizes="(max-width: 700px) 90vw, 44vw" alt="A quiet pink sunset over the sea" preload /><span className="arch-caption">A little perspective changes everything.</span></div><span className="quiet-orbit"><Flower size={110} outline /></span><div className="quiet-saved"><span className="quiet-saved-icon"><Icon name="check" size={15} /></span><span>A moment, kept.</span><span>just now</span></div><button className="quiet-thought" onClick={onOpen}><span><Icon name="note" size={14} /> A NOTE TO SELF <Icon name="arrow-up" size={15} /></span><p>There’s so much more<br />room to think when<br /><em>you let a little go.</em></p><div><i /> Personal reflections <span>Today</span></div></button><span className="quiet-coordinate">36° 43′ N · A CLEARER STATE OF MIND</span></div>;
}

const sampleNotes = [
  { title: "The art of noticing", body: "Pay attention to what makes you pay attention. The best ideas are already around you.", icon: "sun" as IconName, tag: "little discoveries" },
  { title: "A room to think", body: "Soft light, a quiet corner, and nowhere else to be.", icon: "image" as IconName, tag: "inspiration", image: "/variants/without-design-skill/gpt-6-astra-preview/images/interior.jpg" },
  { title: "Keep going, gently.", body: "You don’t have to see the whole staircase. Just take the first small step.", icon: "note" as IconName, tag: "notes to self" },
];

export function AppPreview({ view = 0, onOpen }: { view?: number; onOpen: () => void }) {
  const [query, setQuery] = useState("");
  return <div className="app-preview"><div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span><Flower size={13} /> a little space for you</span><button onClick={onOpen} aria-label="Open the full notes workspace"><Icon name="arrow-up" size={14} /></button></div><div className="preview-body"><aside className="preview-sidebar"><Brand compact /><span className="sidebar-caption">YOUR SPACE</span><button className={view === 0 ? "sidebar-active" : ""} onClick={onOpen}><Icon name="grid" size={15} /> All notes <small>24</small></button><button onClick={onOpen}><Icon name="sun" size={15} /> Daily thoughts</button><button className={view === 1 ? "sidebar-active" : ""} onClick={onOpen}><Icon name="spark" size={15} /> Connections</button><span className="sidebar-caption collection-label">COLLECTIONS</span><span><i className="collection-dot sage" /> Life, lately</span><span><i className="collection-dot peach" /> Ideas & sparks</span><span><i className="collection-dot lilac" /> Good reads</span><div className="sidebar-bottom"><Flower size={15} /> Make a little space.</div></aside><div className="preview-content"><div className="preview-heading"><div><span className="mini-label">{view === 1 ? "FOLLOW THE THREAD" : view === 2 ? "IT’S ALL IN HERE" : "MAKE YOURSELF AT HOME"}</span><h3>{view === 1 ? "A bigger picture." : view === 2 ? "Find that little thing." : "A little bit of everything."}</h3></div><button className="preview-add" onClick={onOpen} aria-label="Create a note"><Icon name="plus" size={18} /></button></div>{view === 1 ? <ConnectionGraph onOpen={onOpen} /> : <>{view === 2 && <label className="preview-search"><Icon name="search" size={15} /><input placeholder="Try ‘light’ or ‘ideas’…" value={query} onChange={e => setQuery(e.target.value)} aria-label="Search example notes" /><kbd>↵</kbd></label>}<div className="preview-notes">{sampleNotes.filter(n => view !== 2 || `${n.title} ${n.body} ${n.tag}`.toLowerCase().includes(query.toLowerCase())).map((note, index) => <button key={note.title} className={`preview-note preview-note-${index}`} onClick={onOpen}>{note.image ? <Image src={note.image} width={280} height={160} alt="A light-filled room with warm, natural details" /> : <Icon name={note.icon} size={18} />}<h4>{note.title}</h4><p>{note.body}</p><span>#{note.tag.replaceAll(" ", "")}</span></button>)}</div>{view === 2 && sampleNotes.filter(n => `${n.title} ${n.body} ${n.tag}`.toLowerCase().includes(query.toLowerCase())).length === 0 && <div className="preview-empty"><Icon name="search" /><p>No notes yet on “{query}”.<br />Try another little thread.</p></div>}<div className="preview-foot"><span><Icon name="lock" size={11} /> Just for you. Always.</span><span>All thoughts welcome <Icon name="spark" size={12} /></span></div></>}</div></div></div>;
}
