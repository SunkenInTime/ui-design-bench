"use client";

import React, { useState, useEffect } from "react";
import { 
  Flower, 
  Sprout, 
  Heart, 
  Calendar, 
  BookOpen, 
  Compass, 
  Sparkles, 
  ArrowRight,
  Sun,
  CloudRain,
  Wind,
  Coffee,
  PenTool
} from "lucide-react";

interface Seedling {
  id: string;
  name: string;
  category: string;
  stage: "Seed" | "Sprout" | "Budding" | "Flowering" | "Mature Tree";
  ageDays: number;
  lastNurtured: string;
  notes: string;
  color: string; // Tailwind color classes for the visual garden
}

const INITIAL_GARDEN: Seedling[] = [
  {
    id: "g1",
    name: "Aesthetics of Wabi-Sabi",
    category: "Philosophy",
    stage: "Flowering",
    ageDays: 45,
    lastNurtured: "2 hours ago",
    notes: "Wabi-sabi represents Japanese aesthetics centered on the acceptance of transience and imperfection. In writing, this means letting draft sentences be messy. Polishing too early kills the organic spirit of an idea.",
    color: "bg-rose-100 text-rose-800 border-rose-200"
  },
  {
    id: "g2",
    name: "The Slow Web Movement",
    category: "Internet Culture",
    stage: "Budding",
    ageDays: 14,
    lastNurtured: "Yesterday",
    notes: "In an era of hyper-speed algorithms, the Slow Web is a rebellion. It values asynchronous communication, RSS feeds, digital gardens, and newsletters that are sent once a month. No instant dopamine, just deep substance.",
    color: "bg-amber-100 text-amber-800 border-amber-200"
  },
  {
    id: "g3",
    name: "Permaculture in Cognition",
    category: "Systems Design",
    stage: "Sprout",
    ageDays: 5,
    lastNurtured: "3 days ago",
    notes: "How can we design our thoughts like self-sustaining ecosystems? By ensuring every note feeds into three other concepts. Waste nothing; old journal entries become organic fertilizer for future creative endeavors.",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    id: "g4",
    name: "Cozy Technology",
    category: "Design Philosophy",
    stage: "Seed",
    ageDays: 1,
    lastNurtured: "Just now",
    notes: "Can software feel like a hand-knitted sweater? Cozy software values calm colors, user sovereignty, local SQLite data, warm serif fonts, and the complete absence of engagement notifications. It respects your peace.",
    color: "bg-stone-100 text-stone-700 border-stone-200"
  }
];

export default function CozyGarden() {
  const [garden, setGarden] = useState<Seedling[]>(INITIAL_GARDEN);
  const [activeSeedId, setActiveSeedId] = useState<string>("g1");
  const [weather, setWeather] = useState<"sunny" | "rainy" | "windy">("sunny");
  const [editorNotes, setEditorNotes] = useState(INITIAL_GARDEN[0].notes);

  const activeSeed = garden.find(s => s.id === activeSeedId) || garden[0];

  // Sync editor field
  useEffect(() => {
    setGarden(prev => prev.map(s => {
      if (s.id === activeSeedId) {
        return { ...s, notes: editorNotes };
      }
      return s;
    }));
  }, [editorNotes, activeSeedId]);

  // Sync when active note changes
  const handleSelectSeed = (id: string) => {
    setActiveSeedId(id);
    const target = garden.find(s => s.id === id);
    if (target) {
      setEditorNotes(target.notes);
    }
  };

  // Grow seed mechanism
  const nurtureSeed = (id: string) => {
    setGarden(prev => prev.map(s => {
      if (s.id === id) {
        let nextStage = s.stage;
        if (s.stage === "Seed") nextStage = "Sprout";
        else if (s.stage === "Sprout") nextStage = "Budding";
        else if (s.stage === "Budding") nextStage = "Flowering";
        else if (s.stage === "Flowering") nextStage = "Mature Tree";

        return {
          ...s,
          stage: nextStage,
          lastNurtured: "Just now",
          ageDays: s.ageDays + 1
        };
      }
      return s;
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#121110] text-[#3c3630] dark:text-[#eae6e2] font-serif transition-colors selection:bg-[#E6DEC9] dark:selection:bg-[#3e3a34]">
      
      {/* Gentle Floral Overlay or organic grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#dfd8cc_1px,transparent_1px)] dark:bg-[radial-gradient(#252220_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      {/* Cozy Header */}
      <header className="border-b border-[#EAE3D2] dark:border-[#2C2622] bg-[#FAF7F2]/90 dark:bg-[#121110]/95 backdrop-blur-md px-6 py-5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#3d5a45] text-white flex items-center justify-center shadow-inner">
            <Sprout className="w-4 h-4 text-[#e0eed0]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#223a2b] dark:text-[#d3e3cd] tracking-wide font-serif">Verdant</span>
            <span className="text-[10px] font-sans text-stone-400 dark:text-stone-500 tracking-wider">A digital garden space</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-sans text-stone-500 dark:text-stone-400">
          <a href="#about" className="hover:text-[#223a2b] dark:hover:text-white transition-colors flex items-center gap-1">
            <span>Philosophy</span>
          </a>
          <a href="#garden" className="hover:text-[#223a2b] dark:hover:text-white transition-colors flex items-center gap-1">
            <span>Conservatory</span>
          </a>
          <a href="#features" className="hover:text-[#223a2b] dark:hover:text-white transition-colors flex items-center gap-1">
            <span>Garden Tools</span>
          </a>
        </nav>

        <div className="flex items-center gap-3 font-sans">
          <div className="hidden sm:flex items-center gap-1.5 border border-[#EAE3D2] dark:border-[#2C2622] rounded-full px-2.5 py-1 bg-white/40 dark:bg-stone-900/40 text-[10px] text-stone-500 dark:text-stone-400">
            <Coffee className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Calm space active</span>
          </div>
          <button className="bg-[#3d5a45] hover:bg-[#2b3f30] text-[#faf7f2] font-semibold text-xs px-5 py-2 rounded-full shadow-md transition-colors cursor-pointer">
            Begin Gardening
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3d5a45]/10 border border-[#3d5a45]/20 text-[10px] text-[#3d5a45] dark:text-[#a0cfa5] font-sans">
          <Flower className="w-3.5 h-3.5 animate-spin-slow" />
          Cultivate your thoughts slowly and gently
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#223a2b] dark:text-[#d3e3cd] leading-tight">
          Your thoughts aren&apos;t filing cabinets.<br />
          <span className="italic font-normal text-[#6c584c] dark:text-[#bcaaa4]">They are living, growing plants.</span>
        </h1>

        <p className="text-sm md:text-base text-stone-500 dark:text-stone-400 max-w-xl mx-auto leading-relaxed font-sans">
          Verdant is a peaceful, distraction-free sanctuary for deep thinking. Rather than organizing notes into sterile, rigid directories, plant your ideas in a cozy digital garden where concepts grow, bloom, and cross-pollinate over a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center font-sans">
          <a 
            href="#garden"
            className="bg-[#3d5a45] hover:bg-[#2b3f30] text-[#faf7f2] font-bold text-xs px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Enter the Conservatory</span>
          </a>
          <button className="border border-[#D1C7BD] dark:border-[#4A3F35] text-[#554e45] dark:text-[#dfd5cb] hover:border-[#3d5a45] dark:hover:border-[#a0cfa5] hover:text-[#3d5a45] dark:hover:text-[#a0cfa5] bg-white/40 dark:bg-stone-900/40 font-bold text-xs px-8 py-3 rounded-full transition-all">
            Download Desktop Ledger
          </button>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-sans text-stone-400 dark:text-stone-500 justify-center pt-4">
          <span className="flex items-center gap-1"><Sun className="w-3.5 h-3.5 text-amber-500" /> Sepia Eye-Care</span>
          <span className="flex items-center gap-1"><CloudRain className="w-3.5 h-3.5 text-sky-500" /> Offline SQLite Soil</span>
          <span className="flex items-center gap-1"><Wind className="w-3.5 h-3.5 text-teal-500" /> Calm Markdown Leaves</span>
        </div>
      </section>

      {/* Garden Conservatory Live Demo */}
      <section id="garden" className="border-t border-b border-[#EAE3D2] dark:border-[#2C2622] bg-white/30 dark:bg-stone-950/20 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] font-sans tracking-widest text-[#3d5a45] dark:text-[#a0cfa5] uppercase font-bold">Conservatory Interface</span>
              <h2 className="text-2xl font-bold text-[#223a2b] dark:text-[#d3e3cd]">The Conservatory Sandbox</h2>
              <p className="text-xs font-sans text-stone-400 max-w-md">
                Observe your thoughts as plants. Click any plant to select it, edit the text block to expand its root system, or click &quot;Water & Nurture&quot; to advance its growth cycle!
              </p>
            </div>

            {/* Weather controller */}
            <div className="flex items-center justify-center gap-2 bg-white dark:bg-stone-900 border border-[#EAE3D2] dark:border-[#2C2622] p-1.5 rounded-full shadow-sm font-sans text-[10px]">
              <span className="px-2 text-stone-400 font-semibold uppercase">Weather:</span>
              <button 
                onClick={() => setWeather("sunny")}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${weather === "sunny" ? "bg-amber-100 text-amber-800" : "text-stone-400 hover:text-stone-600"}`}
                title="Sunny"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setWeather("rainy")}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${weather === "rainy" ? "bg-sky-100 text-sky-800" : "text-stone-400 hover:text-stone-600"}`}
                title="Rainy"
              >
                <CloudRain className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setWeather("windy")}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${weather === "windy" ? "bg-teal-100 text-teal-800" : "text-stone-400 hover:text-stone-600"}`}
                title="Windy"
              >
                <Wind className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* The Plot: Botanical Nodes representation */}
            <div className="lg:col-span-4 border border-[#EAE3D2] dark:border-[#2C2622] bg-white dark:bg-[#121110] rounded-2xl p-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block">// Flora Inventory</span>
                
                <div className="space-y-2.5">
                  {garden.map((seed) => {
                    const isActive = seed.id === activeSeedId;
                    return (
                      <button
                        key={seed.id}
                        onClick={() => handleSelectSeed(seed.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between font-sans ${
                          isActive
                            ? "bg-[#3d5a45] border-[#3d5a45] text-white shadow-md"
                            : "bg-stone-50/50 dark:bg-stone-900/50 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isActive ? "bg-white/20 text-[#e0eed0]" : "bg-[#3d5a45]/10 text-[#3d5a45]"
                          }`}>
                            {seed.stage === "Seed" && <span className="text-[10px]">🪹</span>}
                            {seed.stage === "Sprout" && <Sprout className="w-3.5 h-3.5" />}
                            {(seed.stage === "Budding" || seed.stage === "Flowering") && <Flower className="w-3.5 h-3.5" />}
                            {seed.stage === "Mature Tree" && <span className="text-xs">🌳</span>}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold leading-none">{seed.name}</h4>
                            <span className={`text-[8px] uppercase tracking-wider ${isActive ? "text-stone-200" : "text-stone-400"}`}>
                              {seed.category}
                            </span>
                          </div>
                        </div>

                        <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${
                          isActive ? "bg-white/10" : "bg-stone-100 dark:bg-stone-800 text-stone-500"
                        }`}>
                          {seed.stage}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 dark:border-stone-900 mt-6">
                <button 
                  onClick={() => {
                    const newId = `g${garden.length + 1}`;
                    const newSeed: Seedling = {
                      id: newId,
                      name: "My New Botanical Seed",
                      category: "Creative Draft",
                      stage: "Seed",
                      ageDays: 1,
                      lastNurtured: "Just now",
                      notes: "Planted a new concept page. Describe this leaf. Feed it with other notes. Watch it sprout.",
                      color: "bg-emerald-50 text-emerald-800 border-emerald-100"
                    };
                    setGarden(prev => [...prev, newSeed]);
                    handleSelectSeed(newId);
                  }}
                  className="w-full py-2 bg-[#3d5a45]/10 hover:bg-[#3d5a45]/20 text-[#3d5a45] dark:text-[#a0cfa5] rounded-full border border-dashed border-[#3d5a45]/30 text-xs font-sans font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  🌱 Plant New Thought Seed
                </button>
              </div>
            </div>

            {/* Note Parchment Editor */}
            <div className="lg:col-span-5 border border-[#EAE3D2] dark:border-[#2C2622] bg-[#FCFBF9] dark:bg-stone-900/60 rounded-2xl shadow-sm flex flex-col min-h-[350px]">
              <div className="px-5 py-4 border-b border-[#F5EDE0] dark:border-[#2C2622] flex items-center justify-between text-xs font-sans text-stone-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700/60" />
                  parchment / {activeSeed.category.toLowerCase().replace(/\s+/g, "_")}
                </span>
                <span>Seed #{activeSeed.id}</span>
              </div>

              <div className="p-6 flex-1 flex flex-col font-serif">
                <input
                  type="text"
                  value={activeSeed.name}
                  onChange={(e) => {
                    const val = e.target.value;
                    setGarden(prev => prev.map(s => s.id === activeSeedId ? { ...s, name: val } : s));
                  }}
                  className="bg-transparent border-b border-dashed border-stone-200 dark:border-stone-800 focus:border-stone-400 outline-none pb-2 text-lg font-bold text-[#223a2b] dark:text-[#d3e3cd] mb-4"
                  placeholder="Idea Title"
                />
                
                <textarea
                  value={editorNotes}
                  onChange={(e) => setEditorNotes(e.target.value)}
                  className="flex-1 w-full bg-transparent resize-none border-none outline-none text-xs leading-relaxed text-stone-600 dark:text-stone-300 italic"
                  placeholder="Record your tranquil thoughts..."
                />
              </div>

              <div className="px-5 py-3.5 bg-[#FAF7F2] dark:bg-stone-900 border-t border-[#F5EDE0] dark:border-[#2C2622] flex items-center justify-between text-xs font-sans">
                <div className="text-stone-400 text-[10px]">
                  Planted {activeSeed.ageDays} days ago • Nurtured {activeSeed.lastNurtured}
                </div>
                <button 
                  onClick={() => nurtureSeed(activeSeedId)}
                  className="px-3.5 py-1 bg-[#3d5a45] hover:bg-[#2b3f30] text-white text-[10px] font-bold rounded-full shadow-sm transition-colors cursor-pointer flex items-center gap-1"
                >
                  💧 Water & Nurture
                </button>
              </div>
            </div>

            {/* Live Visual Botanical conservatory plot */}
            <div className="lg:col-span-3 border border-[#EAE3D2] dark:border-[#2C2622] bg-[#FAF7F2] dark:bg-stone-950/40 rounded-2xl p-4 flex flex-col justify-between min-h-[350px]">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block mb-3">Conservatory Plot</span>
                
                {/* Visual flower bed based on growth stages */}
                <div className="h-44 bg-white/70 dark:bg-stone-900/60 rounded-xl border border-[#F5EDE0] dark:border-stone-800 relative overflow-hidden flex items-end justify-around p-4 shadow-inner">
                  {/* Weather Overlay Anim */}
                  {weather === "rainy" && (
                    <div className="absolute inset-0 bg-blue-500/5 animate-pulse flex flex-col justify-around text-[9px] pointer-events-none text-blue-400/40 font-mono pl-3 overflow-hidden select-none">
                      <span>░░░░░░░░░░░░░░░░░░░░░░</span>
                      <span>░░░░░░░░░░░░░░░░░░░░░░</span>
                    </div>
                  )}
                  {weather === "windy" && (
                    <div className="absolute inset-0 bg-teal-500/5 flex flex-col justify-around text-[9px] pointer-events-none text-teal-400/30 font-mono pr-3 overflow-hidden select-none text-right">
                      <span>🍃 ~~~~~~~~~~~~~~ 🍃</span>
                      <span>~~~~~~~~~~~~~~</span>
                    </div>
                  )}

                  {/* Seedling 1 */}
                  {garden.map((seed, idx) => {
                    const isTarget = seed.id === activeSeedId;
                    return (
                      <div key={seed.id} className="flex flex-col items-center relative group">
                        
                        {/* Botanical growth graphics made out of pure Tailwind & SVGs */}
                        <div className="h-24 flex items-end justify-center pb-2">
                          {seed.stage === "Seed" && (
                            <div className={`w-3.5 h-3 bg-stone-300 rounded-full border border-stone-400 relative ${isTarget ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`}>
                              <span className="absolute -top-3.5 text-[8px] left-0">🪹</span>
                            </div>
                          )}
                          
                          {seed.stage === "Sprout" && (
                            <div className="flex flex-col items-center">
                              <div className="w-1 bg-emerald-600 h-6 relative">
                                <div className="absolute -left-2 top-1 w-2.5 h-1.5 bg-emerald-500 rounded-full -rotate-12"></div>
                              </div>
                              <Sprout className={`w-4 h-4 text-emerald-500 ${isTarget ? "animate-bounce" : ""}`} />
                            </div>
                          )}

                          {seed.stage === "Budding" && (
                            <div className="flex flex-col items-center">
                              <div className="w-1.5 bg-emerald-700 h-10 relative">
                                <div className="absolute -left-2.5 top-2 w-3 h-2 bg-emerald-600 rounded-full -rotate-12"></div>
                                <div className="absolute -right-2.5 top-4 w-3 h-2 bg-emerald-600 rounded-full rotate-12"></div>
                              </div>
                              <div className="w-4 h-4 bg-amber-400 rounded-full border-2 border-emerald-600 -mb-2 shadow-sm"></div>
                            </div>
                          )}

                          {seed.stage === "Flowering" && (
                            <div className="flex flex-col items-center">
                              <div className="w-1.5 bg-emerald-800 h-14 relative">
                                <div className="absolute -left-2.5 top-4 w-3 h-2 bg-emerald-600 rounded-full -rotate-12"></div>
                                <div className="absolute -right-2.5 top-8 w-3 h-2 bg-emerald-600 rounded-full rotate-12"></div>
                              </div>
                              <Flower className={`w-7 h-7 text-rose-500 ${isTarget ? "animate-pulse" : ""} -mb-3`} />
                            </div>
                          )}

                          {seed.stage === "Mature Tree" && (
                            <div className="flex flex-col items-center">
                              <div className="w-2 bg-amber-900 h-16 relative rounded-t">
                                <div className="absolute -left-3 top-5 w-4 h-2 bg-emerald-700 rounded-full -rotate-12"></div>
                                <div className="absolute -right-3 top-9 w-4 h-2 bg-emerald-700 rounded-full rotate-12"></div>
                              </div>
                              <div className={`w-10 h-10 bg-emerald-800 rounded-full border-2 border-emerald-950 -mb-4 shadow flex items-center justify-center ${isTarget ? "scale-105" : ""}`}>
                                <span className="text-[10px] text-white">🌳</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <span className={`text-[8px] font-sans text-center truncate w-14 block ${isTarget ? "font-bold text-[#3d5a45] dark:text-[#a0cfa5]" : "text-stone-400"}`}>
                          {seed.name.split(" ")[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white/50 dark:bg-stone-900/40 border border-[#EAE3D2] dark:border-stone-800 p-3 rounded-xl font-sans text-[9px] text-stone-500 leading-relaxed uppercase mt-4">
                🍂 <strong>WEATHER REPORT:</strong> The garden experiences a <strong className="text-stone-700 dark:text-stone-300">{weather}</strong> breeze. Concepts absorb rainwater, translating soil metrics into markdown structure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of digital gardening */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6">
        <span className="text-[10px] font-sans tracking-widest text-[#3d5a45] dark:text-[#a0cfa5] uppercase font-bold">Reflective Essay</span>
        <h3 className="text-xl font-bold text-[#223a2b] dark:text-[#d3e3cd]">The Cult of Slow Intellectualism</h3>
        <p className="text-stone-500 dark:text-stone-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          Social media teaches us that thoughts are objects to be thrown away after 24 hours. Modern notes apps teach us that files must be organized into rigid projects or static folders, creating high-stress filing boundaries before we even know what we are building.
          <br /><br />
          A <strong>Digital Garden</strong> behaves differently. It is private, relaxed, and continuous. Concepts start as seedlings. They sit quietly, absorbing moisture from books, and cross-pollinate with other concepts. When an idea is ready, it flourishes. It is an intellectual ecosystem designed to scale with your life.
        </p>
      </section>

      {/* Cozy Footer */}
      <footer id="features" className="border-t border-[#EAE3D2] dark:border-[#2C2622] py-16 px-6 bg-white dark:bg-[#121110] font-sans text-xs">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Sprout className="w-5 h-5 text-[#3d5a45]" />
              <span className="font-bold text-base text-[#223a2b] dark:text-[#d3e3cd] font-serif">VERDANT BOTANICAL</span>
            </div>
            <p className="text-stone-400 leading-relaxed text-[11px] max-w-xs mx-auto md:mx-0">
              Thought-gardening is a quiet art. Verdant is written entirely in local, rust-free, peer-to-peer web systems to keep your mind strictly private.
            </p>
            <div className="text-[9px] text-stone-400">
              © 2026 VERDANT INC. PLANTED SECURELY IN EARTH.
            </div>
          </div>

          <div className="border border-[#EAE3D2] dark:border-[#2C2622] bg-[#FCFBF9] dark:bg-stone-900/60 p-6 rounded-2xl max-w-sm w-full mx-auto md:ml-auto space-y-4 shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b border-[#F5EDE0] dark:border-stone-800">
              <span className="text-[#223a2b] dark:text-[#d3e3cd] font-bold text-xs">COMMUNITY EDITION</span>
              <span className="text-[#3d5a45] text-[10px] font-bold">FREE COOP</span>
            </div>
            <ul className="text-[10px] text-stone-500 space-y-2">
              <li>✓ UNLIMITED SEEDLING NODES</li>
              <li>✓ EXQUISITE SERIF GRAPHICS</li>
              <li>✓ LOCAL SQLite ORGANIC COMPOST</li>
              <li>✓ WATER & NUTTURE MECHANICS</li>
            </ul>
            <button className="w-full py-2.5 bg-[#3d5a45] hover:bg-[#2b3f30] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer">
              DOWNLOAD LEDGER (FREE)
            </button>
            <p className="text-[9px] text-stone-400 text-center">
              Optional Garden Cloud Backup is $3/mo.
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Swapper Button */}

    </div>
  );
}
