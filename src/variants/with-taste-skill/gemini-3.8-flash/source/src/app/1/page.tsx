"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Graph,
  ShareNetwork,
  Lightning,
  ShieldCheck,
  Brain,
  ArrowsSplit,
  MagnifyingGlass,
  ArrowUpRight,
  Sparkle,
  HardDrives,
  CheckCircle,
  FileText,
} from "@phosphor-icons/react";

/*
  DESIGN READ:
  Reading this as: Spatial knowledge graph engine for researchers and systems thinkers,
  with a kinetic dark slate and emerald language, leaning toward asymmetric canvas
  composition and interactive node clusters.

  DIALS:
  DESIGN_VARIANCE: 8
  MOTION_INTENSITY: 7
  VISUAL_DENSITY: 4
*/

interface NodeItem {
  id: string;
  label: string;
  connections: string[];
  x: number;
  y: number;
  summary: string;
  category: string;
}

const GRAPH_NODES: NodeItem[] = [
  {
    id: "active-recall",
    label: "Active Recall Engine",
    connections: ["neural-arch", "epistemic"],
    x: 18,
    y: 28,
    summary: "Spaced retrieval intervals automatically scheduled from note density.",
    category: "Cognition",
  },
  {
    id: "neural-arch",
    label: "Neural Architecture",
    connections: ["active-recall", "vector-db", "quantum-mem"],
    x: 48,
    y: 20,
    summary: "Bidirectional association layer that synthesizes disparate concepts.",
    category: "Structure",
  },
  {
    id: "quantum-mem",
    label: "Episodic Buffer",
    connections: ["neural-arch", "epistemic"],
    x: 78,
    y: 35,
    summary: "Transient capture drawer with instant local CRDT synchronization.",
    category: "Memory",
  },
  {
    id: "epistemic",
    label: "Epistemic Synthesis",
    connections: ["active-recall", "quantum-mem", "vector-db"],
    x: 32,
    y: 68,
    summary: "Autonomous detection of conflicting hypotheses across reading notes.",
    category: "Analysis",
  },
  {
    id: "vector-db",
    label: "Local Vector Mesh",
    connections: ["neural-arch", "epistemic"],
    x: 72,
    y: 75,
    summary: "On-device embeddings running via WebAssembly with zero data egress.",
    category: "Storage",
  },
];

export default function SynapseLandingPage() {
  const [selectedNode, setSelectedNode] = useState<NodeItem>(GRAPH_NODES[1]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNodes = GRAPH_NODES.filter((n) =>
    n.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[100dvh] bg-[#0b0f17] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/with-taste-skill/gemini-3.8-flash/1" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShareNetwork size={20} weight="duotone" />
            </div>
            <span className="font-semibold text-base tracking-tight text-white">
              Synapse
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            <a href="#graph" className="hover:text-emerald-400 transition-colors">
              Knowledge Graph
            </a>
            <a href="#architecture" className="hover:text-emerald-400 transition-colors">
              Architecture
            </a>
            <a href="#workflows" className="hover:text-emerald-400 transition-colors">
              Workflows
            </a>
            <a href="#manifesto" className="hover:text-emerald-400 transition-colors">
              Principles
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#graph"
              className="hidden sm:inline-flex text-xs font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98] shadow-sm shadow-emerald-500/20"
            >
              Initialize Graph
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Fits Viewport, Asymmetric Split, pt-12 to pt-16) */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/60">
        {/* Subtle emerald grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Headline, subtext, CTAs (Max 4 text elements) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow 1 of 2 across page */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                <Brain size={13} weight="bold" />
                <span>Spatial Knowledge Engine</span>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                Your thoughts connected in real time.
              </h1>

              <p className="text-base text-slate-400 leading-relaxed max-w-[50ch]">
                A non-linear second brain mapping ideas across bidirectional nodes as fast as you think.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98] shadow-lg shadow-emerald-500/25"
                >
                  Explore Synapse
                </a>
                <a
                  href="#graph"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:bg-slate-800 hover:text-white"
                >
                  <span>Interactive Demo</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Node Canvas */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl">
                {/* Header bar of canvas */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-medium text-slate-300">
                      synapse://graph-cluster.live
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    5 nodes active
                  </span>
                </div>

                {/* Node visualization map */}
                <div className="relative h-72 w-full rounded-xl bg-[#080c14] border border-slate-800/80 overflow-hidden">
                  {/* SVG Connection Lines */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none">
                    {GRAPH_NODES.map((node) =>
                      node.connections.map((targetId) => {
                        const target = GRAPH_NODES.find((n) => n.id === targetId);
                        if (!target) return null;
                        const isSelected =
                          selectedNode.id === node.id || selectedNode.id === target.id;
                        return (
                          <line
                            key={`${node.id}-${target.id}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke={isSelected ? "#10b981" : "#334155"}
                            strokeWidth={isSelected ? "1.8" : "1"}
                            strokeDasharray={isSelected ? "none" : "3,3"}
                            opacity={isSelected ? 0.9 : 0.4}
                          />
                        );
                      })
                    )}
                  </svg>

                  {/* Interactive Nodes */}
                  {GRAPH_NODES.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNode(node)}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                      >
                        <div
                          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            isSelected
                              ? "bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40 scale-105"
                              : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500/60 hover:text-white"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isSelected ? "bg-slate-950" : "bg-emerald-400"
                            }`}
                          />
                          <span className="text-[11px] whitespace-nowrap">
                            {node.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Node details Inspector Card */}
                <div className="mt-4 rounded-xl bg-slate-950/70 border border-slate-800 p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-emerald-400">
                        {selectedNode.label}
                      </span>
                      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                        {selectedNode.category}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {selectedNode.connections.length} bidirectional links
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {selectedNode.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Logo Strip (Clean SVG Logos, No Category Labels) */}
      <section className="py-10 border-b border-slate-800/60 bg-[#090d15]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Trusted by researchers and engineers from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-90 transition-opacity">
            {/* Real SVG brand marks */}
            <div className="flex items-center gap-2 text-slate-300">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-sm font-semibold tracking-tight">Cerebral Lab</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm font-semibold tracking-tight">Helios Systems</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm font-semibold tracking-tight">Kinesis Foundry</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-sm font-semibold tracking-tight">Vectoria Labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Knowledge Mesh Explorer (ID: graph) */}
      <section id="graph" className="py-20 border-b border-slate-800/60 bg-[#0b0f17]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Knowledge as a living neural network.
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-[60ch]">
              Folders force artificial hierarchies onto fluid thoughts. Synapse links ideas associatively based on conceptual distance and citation paths.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <ShareNetwork size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Bidirectional Backlinking
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Every link creates an automatic reverse portal. Traverse connected thoughts forward or backward without broken paths.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs text-emerald-400">
                [[quantum-computing]] &lt;=&gt; [[cryptography]]
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <Lightning size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Semantic Surface Retrieval
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  When writing a thesis or paper, Synapse automatically suggests forgotten notes with matching conceptual vectors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs text-emerald-400">
                Cosine similarity score: 0.942
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <HardDrives size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Plain Markdown On Disk
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  No proprietary database lock-in. Your notes remain plain text files on your local drive, compatible with Git and Obsidian.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs text-emerald-400">
                /vault/research/*.md - Zero egress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bento Architecture (Diverse Cell Backgrounds) (ID: architecture) */}
      <section id="architecture" className="py-20 border-b border-slate-800/60 bg-[#090d15]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            {/* Eyebrow 2 of 2 across page */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-4">
              <Sparkle size={13} weight="bold" />
              <span>Architectural Rigor</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineered for decades of sustained thought.
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-[60ch]">
              A second brain is only as good as its durability. Every component is designed around offline longevity and rapid access.
            </p>
          </div>

          {/* 4 Cells Bento Grid with visual diversity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cell 1: Large 2-column card with glowing emerald gradient */}
            <div className="md:col-span-2 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-300">
                  CRDT ENGINE
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Conflict-free local synchronization
                </h3>
                <p className="mt-2 text-slate-400 text-sm max-w-lg leading-relaxed">
                  Type on your desktop without an internet connection. Edit the same note on your phone. When connected, changes merge deterministically without duplicate files.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-slate-950/80 border border-slate-800 p-4 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-500">
                  <span>SYNC STATE</span>
                  <span className="text-emerald-400">STATE_SYNCHRONIZED</span>
                </div>
                <div className="pt-2 text-slate-400 text-[11px]">
                  &gt; Vector clock updated: 4 nodes aligned in 1.2ms.
                </div>
              </div>
            </div>

            {/* Cell 2: Security & Encryption */}
            <div className="rounded-2xl border border-slate-800 bg-[#0d131f] p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-4">
                  <ShieldCheck size={24} weight="duotone" className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Zero Knowledge Crypto
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  Your cryptographic keys never leave your device. Notes are encrypted with AES-256-GCM before touching any sync relay.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle size={15} weight="fill" />
                <span>Client-side key derivation</span>
              </div>
            </div>

            {/* Cell 3: Instantaneous Search */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-4">
                  <MagnifyingGlass size={24} weight="duotone" className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Sub-millisecond Search
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  SQLite FTS5 full-text indexing directly inside your browser and local client. Search through 100,000 notes in 4ms.
                </p>
              </div>
              <div className="mt-6 font-mono text-xs text-slate-400">
                Latency: 0.38ms average query
              </div>
            </div>

            {/* Cell 4: 2-column wide card with canvas diagram */}
            <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Infinite Visual Thought Canvas
                </h3>
                <p className="mt-2 text-slate-400 text-sm max-w-xl leading-relaxed">
                  Switch from markdown editor to a spatial 2D whiteboard. Lay out PDFs, quotes, sketches, and connections in one unbounded space.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                  <div className="text-base font-semibold text-white">Spatial</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Non-linear freeform</div>
                </div>
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                  <div className="text-base font-semibold text-white">Hierarchical</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Structured outlines</div>
                </div>
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                  <div className="text-base font-semibold text-white">Relational</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Graph associations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Three-Stage Thought Flow (ID: workflows) */}
      <section id="workflows" className="py-20 border-b border-slate-800/60 bg-[#0b0f17]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From fleeting impulse to synthesized doctrine.
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-[60ch]">
              Three stages designed to eliminate capture friction and turn isolated fragments into enduring systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
              <span className="text-xs font-mono text-emerald-400 font-semibold">STAGE 01</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Omni-Capture</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Global hotkey invokes floating modal. Record voice memos, drop code snippets, or clip article quotes without losing your current window.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
              <span className="text-xs font-mono text-emerald-400 font-semibold">STAGE 02</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Associative Synthesis</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Synapse detects implicit links between recent captures and historical notes. Connect related ideas with a single keystroke.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
              <span className="text-xs font-mono text-emerald-400 font-semibold">STAGE 03</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Active Production</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Assemble structured essays, technical specifications, and research papers from your graph. Export to LaTeX, Markdown, or PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Real Quotes (Max 3 lines, Clean attribution, No em-dashes) */}
      <section id="manifesto" className="py-20 border-b border-slate-800/60 bg-[#090d15]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Endorsed by deep practitioners.
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Engineers and academics who outgrew conventional nested folders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
              <p className="text-sm text-slate-300 leading-relaxed">
                "The graph visualizer is not a gimmick here. It caught three overlapping research citations that saved me weeks of redundant lab experiments."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs">
                <div className="font-semibold text-white">Dr. Elena Rostova</div>
                <div className="text-slate-500">Computational Biology, Zurich</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
              <p className="text-sm text-slate-300 leading-relaxed">
                "Having my entire knowledge repository stored as raw markdown on my SSD gives me complete peace of mind. Synapse is lighting fast."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs">
                <div className="font-semibold text-white">Marcus Vance</div>
                <div className="text-slate-500">Distributed Systems Architect</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
              <p className="text-sm text-slate-300 leading-relaxed">
                "My writing output doubled within three months. The bidirectional links make synthesizing complex book chapters completely effortless."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs">
                <div className="font-semibold text-white">Aria Thorne</div>
                <div className="text-slate-500">Author and Philosophy Fellow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final Focused CTA & Clean Footer */}
      <section id="get-started" className="py-20 bg-[#0b0f17]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-10 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build your external cognitive cortex.
            </h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
              Download the desktop application for macOS, Linux, and Windows. Local files forever free.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.98]"
              >
                Download Synapse v1.0
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                Read Architectural Spec
              </a>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Synapse Knowledge Systems. Open local protocol.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
              <a href="#docs" className="hover:text-slate-400 transition-colors">Docs</a>
              <a href="#changelog" className="hover:text-slate-400 transition-colors">Changelog</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
