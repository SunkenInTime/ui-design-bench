"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Brain, 
  Terminal, 
  Flower, 
  Zap, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Monitor,
  Heart,
  Palette,
  Globe,
  Laptop
} from "lucide-react";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiments = [
    {
      id: 1,
      path: "/1",
      title: "Æther",
      vibe: "Minimalist Spatial",
      colorClass: "bg-slate-100 hover:bg-slate-200 border-slate-300 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100",
      accent: "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900",
      desc: "A sleek, distraction-free markdown canvas featuring an interactive node network. Banish directories and browse your mind via keypress.",
      icon: Terminal,
      tag: "Monospace / Spatial",
      bulletPoints: ["Bidirectional Wiki-Links", "Command Palette (⌘K)", "Interactive Node SVG Graph", "Local Plaintext MD"]
    },
    {
      id: 2,
      path: "/2",
      title: "Cortex",
      vibe: "Futuristic Cyber HUD",
      colorClass: "bg-cyan-950/20 hover:bg-cyan-950/30 border-cyan-800/40 text-cyan-400",
      accent: "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]",
      desc: "A high-performance cyberpunk terminal dashboard with live sync telemetry, memory cache monitors, and local AI vector embeddings.",
      icon: Brain,
      tag: "Sci-Fi / Dark Mode Only",
      bulletPoints: ["Telemetry Diagnostics HUD", "Local Semantic Vector coordination", "AI Synaptic Log Stream", "Interactive Coordinate Node HUD"]
    },
    {
      id: 3,
      path: "/3",
      title: "Verdant",
      vibe: "Cozy Organic Garden",
      colorClass: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200/80 text-emerald-800 dark:bg-stone-900 dark:border-stone-800 dark:text-emerald-400 dark:hover:bg-stone-900/80",
      accent: "bg-[#3d5a45] text-white",
      desc: "A calming sepia journal and slow-thinking retreat. Treat your thoughts as delicate seeds, water them over time, and cultivate a living ecosystem.",
      icon: Flower,
      tag: "Serif / Warm Sepia",
      bulletPoints: ["Aesthetic Botanical Graphics", "Water & Nurture growth loops", "Calming weather overlays", "Reflective quiet journaling"]
    },
    {
      id: 4,
      path: "/4",
      title: "SLAM!",
      vibe: "Neo-Brutalist Scrap",
      colorClass: "bg-yellow-100 hover:bg-yellow-200 border-yellow-300 text-yellow-900 dark:bg-yellow-900/10 dark:border-yellow-700/30 dark:text-yellow-400",
      accent: "bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] font-black",
      desc: "A loud, saturated, rebellious dump-ground with thick black borders, sticker nodes, and flat drop shadows. Stop organizing and slam notes raw.",
      icon: Zap,
      tag: "Gumroad / High Saturated",
      bulletPoints: ["Thick Black Border Outlines", "Raw Dump form", "Interactive Sticky Card Grid", "Instant Semantic Sort Slammer"]
    },
    {
      id: 5,
      path: "/5",
      title: "Aethelgard",
      vibe: "Executive Strategic",
      colorClass: "bg-indigo-950/30 hover:bg-indigo-950/40 border-indigo-900/30 text-amber-200 dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-900/80",
      accent: "bg-[#ebd5b3] text-black",
      desc: "A premium strategists' editorial briefing room. Auto-summarizes advisory transcripts, evaluates venture parameters, and distills tactical actions.",
      icon: BookOpen,
      tag: "Premium Navy / Luxury Gold",
      bulletPoints: ["Strategic Venture Dossiers", "Intelligence advisory synthesis", "Distilled actions with calculated confidence", "Corporate cryptographic audit vaults"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-[#08080a] text-zinc-900 dark:text-zinc-100 font-sans flex flex-col transition-colors relative overflow-hidden">
      
      {/* Mesh Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-500/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 border-b border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-extrabold shadow-md">
            <span>B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wider uppercase font-mono">BrainLab</span>
            <span className="text-[9px] text-zinc-400 tracking-wider">Multi-Paradigm UI Experiment</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-[10px] text-zinc-500">
            <Laptop className="w-3.5 h-3.5 text-indigo-500" />
            <span>Today&apos;s Date: May 26, 2026</span>
          </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 px-3.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Source Code</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-16 pb-20 z-10 flex flex-col items-center">
        
        <div className="text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Sovereign Knowledge Landing Page Lab</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            One App. <br className="xs:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500">
              Five Entirely Different Souls.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Welcome to the design laboratory. We have structured five highly differentiated, fully functional, and interactive iterations of a landing page for a **&quot;Second Brain&quot; note-taking application**. Explore each paradigm, toggle between them with our persistent bottom-dock switcher, and discover which aesthetic resonates with your cognitive workflow.
          </p>
        </div>

        {/* Experiment Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-16">
          {experiments.map((exp, index) => {
            const Icon = exp.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${exp.colorClass} ${
                  isHovered 
                    ? "shadow-xl -translate-y-1.5" 
                    : "shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 bg-white/40 dark:bg-black/20 px-2 py-0.5 rounded border border-zinc-300/30">
                      {exp.tag}
                    </span>
                    <span className="text-xs font-extrabold font-mono text-zinc-400">
                      /0{exp.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-zinc-200/50 bg-white/60 dark:bg-black/20 text-zinc-800 dark:text-white">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white flex items-center gap-1.5">
                        {exp.title}
                      </h3>
                      <p className="text-[10px] font-sans font-bold tracking-wider uppercase opacity-60">
                        {exp.vibe}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {exp.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block">// Featured Tech</span>
                    <ul className="grid grid-cols-2 gap-1.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                      {exp.bulletPoints.map((pt, i) => (
                        <li key={i} className="flex items-center gap-1 truncate">
                          <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={exp.path}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 ${exp.accent}`}
                  >
                    <span>Launch Version {exp.id}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Intro Card */}
          <div className="border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between bg-zinc-100/20 dark:bg-zinc-950/20">
            <div className="space-y-4">
              <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-400">
                Core Philosophy
              </span>
              <h3 className="font-extrabold text-base text-zinc-950 dark:text-white flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-indigo-500" />
                The Second Brain Manifesto
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Your mind is designed for having ideas, not holding them. By offloading memories, project roadmaps, and reading lists to a persistent digital environment, we cultivate focus, spark creative synapses, and secure our intellectual sovereignty in a hyper-connected world.
              </p>
              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100/50 rounded-xl text-[10px] text-indigo-600 dark:text-indigo-400 leading-relaxed italic">
                &quot;The design of software controls the shape of thought. Choose your canvas with intention.&quot;
              </div>
            </div>
            
            <div className="pt-6 text-[10px] text-zinc-400 text-center font-mono">
              Designed dynamically with Next.js & Tailwind CSS v4 • Offline Capable
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-10 px-6 bg-[#FAF9F6] dark:bg-zinc-950 font-sans text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-400 flex items-center gap-1.5 text-[11px]">
            <span>© 2026 BrainLab Inc. Built with love and architectural precision.</span>
          </div>
          <div className="text-zinc-400 flex items-center gap-1.5 text-[10px]">
            <span>Powered by Next.js 16.2.6 & Tailwind v4</span>
          </div>
        </div>
      </footer>

      {/* Persistent Swapper Button */}

    </div>
  );
}
