"use client";

import React, { useState } from "react";
import { 
  Zap, 
  Trash2, 
  Plus, 
  Search, 
  Sparkles, 
  Grid, 
  Flame, 
  CornerRightDown, 
  FolderMinus, 
  ArrowRight,
  Smile,
  Megaphone,
  Share2
} from "lucide-react";

interface DumpCard {
  id: string;
  title: string;
  content: string;
  color: string; // Vibrant brutalist colors
  tags: string[];
  emoji: string;
}

const INITIAL_DUMPS: DumpCard[] = [
  {
    id: "d1",
    title: "Screaming Hot App Ideas",
    content: "Uber but for dog bathing, or maybe Tinder but for finding tennis double partners. Need to keep it local-first and high-vibe. Build with Next.js in a weekend. Slam it to Vercel.",
    color: "bg-yellow-300",
    tags: ["hustle", "code"],
    emoji: "🔥"
  },
  {
    id: "d2",
    title: "Subway Overhearings",
    content: "'He told me he had a second brain but honestly he couldn't even remember his sister's birthday...' - overheard on the L train at 8:45 AM. Write a screenplay about a guy who replaces his actual brain with a Notion template.",
    color: "bg-cyan-300",
    tags: ["writing", "nyc"],
    emoji: "🚇"
  },
  {
    id: "d3",
    title: "Deep Coffee Thoughts",
    content: "Why do we pay $7 for espresso when we could buy a bag of beans for $15? It's the rental fee for 45 minutes of workspace. Coffee shops are the co-working spaces of the post-capitalist era.",
    color: "bg-[#ff90e8]",
    tags: ["philosophy", "rants"],
    emoji: "☕"
  },
  {
    id: "d4",
    title: "Design Dictums",
    content: "Thicker borders = better products. If you can't design it clean, make it brutal. Saturated colors scare boring managers, which is exactly why you should use them. Slam everything.",
    color: "bg-emerald-300",
    tags: ["design", "brutal"],
    emoji: "🎨"
  }
];

export default function NeoBrutalistSlam() {
  const [dumps, setDumps] = useState<DumpCard[]>(INITIAL_DUMPS);
  const [activeCardId, setActiveCardId] = useState<string>("d1");
  const [searchQuery, setSearchQuery] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newEmoji, setNewEmoji] = useState("⚡");
  const [newColor, setNewColor] = useState("bg-yellow-300");

  const colors = [
    "bg-yellow-300",
    "bg-cyan-300",
    "bg-[#ff90e8]",
    "bg-emerald-300",
    "bg-[#ff5e5e]",
    "bg-orange-300"
  ];

  const emojis = ["⚡", "🔥", "🧠", "🚇", "☕", "🎨", "🚀", "🎸", "🍕"];

  const activeCard = dumps.find(d => d.id === activeCardId) || dumps[0];

  const handleSlamNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newDump: DumpCard = {
      id: `d${dumps.length + 1}`,
      title: newTitle,
      content: newContent,
      color: newColor,
      tags: ["raw-dump"],
      emoji: newEmoji
    };

    setDumps([newDump, ...dumps]);
    setActiveCardId(newDump.id);
    setNewTitle("");
    setNewContent("");
  };

  const handleDeleteCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDumps(prev => prev.filter(d => d.id !== id));
    if (activeCardId === id && dumps.length > 1) {
      setActiveCardId(dumps.filter(d => d.id !== id)[0].id);
    }
  };

  const filteredDumps = dumps.filter(d => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-orange-50 text-black font-sans pb-24 relative overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Heavy Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_2px,transparent_2px)] [background-size:20px_24px] pointer-events-none"></div>

      {/* Header */}
      <header className="border-b-4 border-black bg-yellow-400 p-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="bg-black text-yellow-400 border-2 border-black font-black text-2xl px-4 py-1.5 rotate-[-2deg] hover:rotate-0 transition-transform shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            <Zap className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span>SLAM!</span>
          </div>
          <span className="text-xs font-black uppercase tracking-wider bg-white px-2.5 py-1 border-2 border-black rounded shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            NEO-BRUTALIST BRAIN
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-black">
          <a href="#demo" className="bg-white hover:bg-black hover:text-white border-2 border-black px-4 py-2 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            [THE GRID]
          </a>
          <a href="#philosophy" className="bg-white hover:bg-black hover:text-white border-2 border-black px-4 py-2 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            [ANTI-FOLDERS]
          </a>
          <button className="bg-black hover:bg-yellow-300 hover:text-black text-yellow-400 border-2 border-black px-5 py-2 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer">
            SLAM IT FOR FREE!
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block bg-black text-[#ff90e8] font-black uppercase text-xs px-4 py-2 rounded-sm border-2 border-black rotate-[1.5deg] shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            🚀 BANISH THE FILING CABINETS!
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black leading-none uppercase">
            STOP ORGANIZING.<br />
            <span className="bg-[#ff5e5e] text-white px-4 border-4 border-black inline-block my-1.5 shadow-[6px_6px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
              START CREATING.
            </span>
          </h1>

          <p className="text-sm md:text-base text-black font-extrabold max-w-xl mx-auto leading-relaxed uppercase pt-3">
            SLAM is the ultimate digital scrap-heap for your messy brainwaves. No hierarchies, no tags, no tedious folders. Slam your raw notes, rants, and links. Our semantic matrix indexes the chaos behind the scenes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <a 
              href="#demo"
              className="bg-black text-white hover:bg-yellow-400 hover:text-black font-black text-sm px-10 py-4 border-3 border-black transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5 fill-current" />
              <span>LAUNCH THE SLAM GRID</span>
            </a>
            <button className="bg-white text-black hover:bg-black hover:text-white font-black text-sm px-10 py-4 border-3 border-black transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none">
              PULL DESKTOP LEDGER
            </button>
          </div>
        </div>
      </section>

      {/* Slam Demo Section */}
      <section id="demo" className="max-w-6xl mx-auto px-6 py-12">
        <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between border-b-4 border-black pb-6 gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-black uppercase text-red-500 flex items-center gap-1.5 justify-center md:justify-start">
                <Smile className="w-4 h-4 fill-current" /> WORKSPACE_SANDBOX_V4 // UNFILTERED INPUT
              </span>
              <h2 className="text-3xl font-extrabold uppercase">THE MESSY IDEA LAB</h2>
              <p className="text-xs font-bold text-stone-500">
                Type in the slammer to inject notes instantly. Click any card to select, edit or dump. Hit &quot;SORT COGNITION&quot; to see vectors sync!
              </p>
            </div>

            {/* Custom Search bar */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search raw rants..."
                className="w-full bg-orange-50 border-3 border-black p-2 text-xs font-bold placeholder-stone-500 focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              />
              <Search className="w-4 h-4 absolute right-3 top-3" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Note Slammer Form */}
            <div className="lg:col-span-4 border-3 border-black bg-pink-100 p-5 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <form onSubmit={handleSlamNote} className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider block bg-black text-white px-2 py-0.5 text-center">
                  // THE SCRAP SLAMMER
                </span>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase">NOTE TITLE:</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Slam a header..."
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase">RAW THOUGHT DUMP:</label>
                  <textarea
                    required
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Pour your raw, unfiltered brain fluid in here..."
                    className="w-full h-32 bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Emoji selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase">STIK EMOJI:</label>
                    <select
                      value={newEmoji}
                      onChange={(e) => setNewEmoji(e.target.value)}
                      className="w-full bg-white border-2 border-black p-1.5 text-xs font-bold focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    >
                      {emojis.map(emo => (
                        <option key={emo} value={emo}>{emo}</option>
                      ))}
                    </select>
                  </div>

                  {/* Color Picker */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase">STIK COLOR:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {colors.map(col => (
                        <button
                          key={col}
                          type="button"
                          onClick={() => setNewColor(col)}
                          className={`w-5 h-5 rounded border border-black cursor-pointer ${col} ${newColor === col ? "ring-2 ring-black scale-110" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-black hover:bg-yellow-400 text-yellow-400 hover:text-black font-black border-2 border-black rounded shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none text-xs tracking-wider transition-all uppercase cursor-pointer"
                >
                  ⚡ SLAM NOTE TO GRID! ⚡
                </button>
              </form>

              <div className="pt-4 border-t-2 border-black/10 mt-4 text-[10px] font-bold text-stone-600 flex items-center gap-1">
                <CornerRightDown className="w-3.5 h-3.5 text-black" />
                Dumping maps directly into SQLite memory heap.
              </div>
            </div>

            {/* Middle: Active Card View & Edit */}
            <div className="lg:col-span-5 border-3 border-black bg-[#ff90e8]/10 p-5 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-2.5 text-xs font-black">
                  <span>ACTIVE_BOARD // STIK_{activeCard.id.toUpperCase()}</span>
                  <span className="bg-black text-white px-2 py-0.5 text-[9px] rounded font-mono">DRAFT_MD</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeCard.emoji}</span>
                    <input
                      type="text"
                      value={activeCard.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setDumps(prev => prev.map(d => d.id === activeCardId ? { ...d, title: val } : d));
                      }}
                      className="bg-transparent border-b-2 border-black border-dashed text-lg font-black text-black w-full focus:outline-none focus:border-red-500"
                    />
                  </div>
                  
                  <textarea
                    value={activeCard.content}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDumps(prev => prev.map(d => d.id === activeCardId ? { ...d, content: val } : d));
                    }}
                    className="w-full h-44 bg-transparent border-none text-xs font-bold leading-relaxed text-black focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black">
                <span className="text-[10px] text-stone-500">TAGS: {activeCard.tags.map(t => `#${t}`).join(", ")}</span>
                <button 
                  onClick={(e) => handleDeleteCard(activeCard.id, e)}
                  className="bg-red-400 hover:bg-black text-black hover:text-white border-2 border-black p-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
                  title="Trash Note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: The Grid Pile */}
            <div className="lg:col-span-3 border-3 border-black bg-emerald-100 p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-black">
                  <span>STICKY SLAM GRID</span>
                  <span className="bg-black text-white px-1.5 py-0.2 rounded text-[8px]">{filteredDumps.length} STIX</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 overflow-y-auto max-h-72 p-1">
                  {filteredDumps.map((d) => {
                    const isActive = d.id === activeCardId;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setActiveCardId(d.id)}
                        className={`text-left p-2.5 rounded border-2 border-black transition-all cursor-pointer relative h-28 flex flex-col justify-between ${d.color} ${
                          isActive 
                            ? "shadow-none translate-x-[2px] translate-y-[2px]" 
                            : "shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-lg leading-none">
                          <span>{d.emoji}</span>
                          <span className="text-[8px] font-black uppercase text-stone-500 bg-white/60 border border-black/20 px-1 rounded">v{d.id}</span>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black truncate leading-tight mb-1">{d.title}</h4>
                          <p className="text-[8px] line-clamp-2 leading-tight opacity-80">{d.content}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t-2 border-black mt-3">
                <button 
                  onClick={() => {
                    alert("AUTOMATIC COGNITIVE MATRIX SORT: Synaptic weights synchronized! Concepts categorized semantically.");
                  }}
                  className="w-full py-2 bg-yellow-400 hover:bg-black hover:text-white text-black font-black border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none text-[10px] transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  SORT COGNITION!
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brutalist features */}
      <section id="philosophy" className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        
        <div className="border-4 border-black bg-cyan-200 p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] space-y-3">
          <div className="bg-black text-cyan-200 font-black text-xs px-2 py-0.5 inline-block border-2 border-black">
            // RULE_01
          </div>
          <h3 className="text-lg font-black uppercase">ZERO FILING TIME</h3>
          <p className="text-xs font-bold text-stone-700 leading-relaxed uppercase">
            Categories are cognitive handcuffs. Slam your files in a messy heap, and let our SQLite semantic vector query fetch them instantly. Organize nothing. Recall everything.
          </p>
        </div>

        <div className="border-4 border-black bg-emerald-200 p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] space-y-3">
          <div className="bg-black text-emerald-200 font-black text-xs px-2 py-0.5 inline-block border-2 border-black">
            // RULE_02
          </div>
          <h3 className="text-lg font-black uppercase">STICKY WEB SYNC</h3>
          <p className="text-xs font-bold text-stone-700 leading-relaxed uppercase">
            A quick-slam keyboard lock. Press a global key combo on your system and slam a text snippet, image, or link. It is indexed in under 200ms without opening the editor.
          </p>
        </div>

        <div className="border-4 border-black bg-[#ff90e8] p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] space-y-3">
          <div className="bg-black text-[#ff90e8] font-black text-xs px-2 py-0.5 inline-block border-2 border-black">
            // RULE_03
          </div>
          <h3 className="text-lg font-black uppercase">OWN YOUR SCRAPS</h3>
          <p className="text-xs font-bold text-stone-700 leading-relaxed uppercase">
            No venture capital server rents. No sneaky telemetry. Your dumps live in offline markdown folders. Clean text, clean files, complete data sovereignty forever.
          </p>
        </div>

      </section>

      {/* Rant about folders */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center space-y-4">
        <h3 className="text-3xl font-black uppercase rotate-[1deg] inline-block bg-black text-white p-3 border-2 border-black">
          THE manifesto: FOLDERS ARE LIE!
        </h3>
        <p className="text-xs font-extrabold text-stone-600 leading-relaxed max-w-xl mx-auto uppercase">
          Folders are an outdated relic of physical office buildings designed by 1950s consultants who loved metal filing cabinets. But your brain does not have drawer sliders. It is a messy, hyper-connected, high-energy biological neural heap. Slam your thoughts, let them collide, and let links emerge raw.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pt-12 border-t-4 border-black grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Zap className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="font-black text-lg tracking-wider text-black">SLAM! LABS INC</span>
          </div>
          <p className="text-xs font-bold leading-relaxed text-stone-600 uppercase max-w-sm mx-auto md:mx-0">
            We build tools that punch you in the face with productivity. No VC funding, no metrics, just heavy borders and raw speed.
          </p>
          <div className="text-[10px] font-bold text-stone-400 uppercase">
            © 2026 SLAM! DUMP SHACK. LICENSED RAW.
          </div>
        </div>

        <div className="border-4 border-black bg-yellow-300 p-6 max-w-sm w-full mx-auto md:ml-auto shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center pb-2 border-b-2 border-black mb-4">
            <span className="font-black text-sm uppercase">STANDARD COOP</span>
            <span className="bg-black text-yellow-300 font-bold px-1.5 py-0.2 text-[9px] rounded">FREE_DUMP</span>
          </div>
          <ul className="text-[10px] font-bold text-black space-y-2 uppercase leading-tight">
            <li>✓ INFINITE RAW SLAM CARDS</li>
            <li>✓ AUTO SEMANTIC MATRIZ CLUSTERING</li>
            <li>✓ THICK BLACK BORDER THEMING</li>
            <li>✓ LOCAL MARKDOWN BULK EXPORT</li>
          </ul>
          <button className="w-full mt-4 py-3 bg-black hover:bg-white text-yellow-400 hover:text-black font-black border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none text-xs tracking-wider uppercase transition-all cursor-pointer">
            SLAM THE DOWNLOAD KEY
          </button>
        </div>
      </footer>

      {/* Persistent Swapper Button */}

    </div>
  );
}
