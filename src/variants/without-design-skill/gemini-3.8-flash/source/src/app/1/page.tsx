"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Share2,
  Search,
  Terminal,
  ShieldCheck,
  Database,
  Zap,
  Cpu,
  Compass,
  ArrowRight,
  CheckCircle2,
  FileText,
  Maximize2,
  ExternalLink,
  Sliders,
  ChevronRight,
  GitBranch,
  Lock,
  Download,
  Sparkles,
  RefreshCw,
  FolderLock
} from "lucide-react";

interface GraphNode {
  id: string;
  title: string;
  category: "theory" | "systems" | "philosophy" | "daily";
  x: number;
  y: number;
  connections: string[];
  backlinks: number;
  summary: string;
  tags: string[];
  excerpt: string;
}

const INITIAL_NODES: GraphNode[] = [
  {
    id: "zettelkasten",
    title: "Zettelkasten Method",
    category: "theory",
    x: 280,
    y: 190,
    connections: ["antifragility", "systems-thinking", "associative-indexing"],
    backlinks: 14,
    summary: "Atomized note units connected by strict bi-directional references.",
    tags: ["#epistemology", "#methodology", "#luhmann"],
    excerpt: "Each slip-note contains one idea. Knowledge accumulates organically as cross-references multiply over decades."
  },
  {
    id: "systems-thinking",
    title: "Complex Adaptive Systems",
    category: "systems",
    x: 480,
    y: 130,
    connections: ["zettelkasten", "emergent-behavior", "cybernetics"],
    backlinks: 22,
    summary: "Networks where macroscopic behaviors emerge from local interactions.",
    tags: ["#complexity", "#chaos-theory", "#feedback-loops"],
    excerpt: "The behavior of the whole cannot be deduced simply from properties of its parts. Feedback loops drive self-organization."
  },
  {
    id: "antifragility",
    title: "Antifragility & Convexity",
    category: "philosophy",
    x: 200,
    y: 330,
    connections: ["zettelkasten", "ergodicity", "systems-thinking"],
    backlinks: 9,
    summary: "Things that gain from disorder, volatility, and stressors.",
    tags: ["#taleb", "#risk", "#heuristic"],
    excerpt: "Some things benefit from shocks; they thrive and grow when exposed to volatility, randomness, disorder, and stressors."
  },
  {
    id: "associative-indexing",
    title: "Associative Indexing",
    category: "theory",
    x: 120,
    y: 140,
    connections: ["zettelkasten", "memex"],
    backlinks: 7,
    summary: "Information retrieval through semantic paths rather than tree hierarchies.",
    tags: ["#hypertext", "#vannevar-bush", "#second-brain"],
    excerpt: "The human mind operates by association. With one item in its grasp, it snaps instantly to the next that is suggested by association."
  },
  {
    id: "emergent-behavior",
    title: "Emergent Synthesis",
    category: "systems",
    x: 640,
    y: 240,
    connections: ["systems-thinking", "cybernetics", "neural-plasticity"],
    backlinks: 18,
    summary: "Unexpected insights crystallizing at the intersection of distant domains.",
    tags: ["#synthesis", "#creativity", "#emergence"],
    excerpt: "When 100 disparate notes on biology cross-pollinate with economics, entirely novel theses form automatically."
  },
  {
    id: "cybernetics",
    title: "First & Second Order Cybernetics",
    category: "systems",
    x: 490,
    y: 340,
    connections: ["systems-thinking", "emergent-behavior", "neural-plasticity"],
    backlinks: 11,
    summary: "Circular causal chains, feedback, and the role of the observer.",
    tags: ["#wiener", "#feedback", "#observation"],
    excerpt: "A science of control and communication in animals and machines. The observer becomes part of the observed system."
  },
  {
    id: "neural-plasticity",
    title: "Cognitive Resonance",
    category: "philosophy",
    x: 630,
    y: 390,
    connections: ["emergent-behavior", "cybernetics"],
    backlinks: 13,
    summary: "Dynamic restructuring of knowledge substrates as new inputs enter.",
    tags: ["#neuroscience", "#memory", "#resonance"],
    excerpt: "Neural pathways strengthen with recurring activation. A second brain must reflect physical synaptic pruning and strengthening."
  },
  {
    id: "memex",
    title: "Vannevar's Memex (1945)",
    category: "theory",
    x: 90,
    y: 280,
    connections: ["associative-indexing", "zettelkasten"],
    backlinks: 5,
    summary: "The historical conceptual precursor to personal hypertext systems.",
    tags: ["#history", "#computing", "#bush"],
    excerpt: "An enlarged intimate supplement to memory. Trails of interconnected items that never fade or break."
  },
  {
    id: "ergodicity",
    title: "Ergodicity & Survival",
    category: "philosophy",
    x: 330,
    y: 430,
    connections: ["antifragility"],
    backlinks: 8,
    summary: "Distinction between ensemble averages and time-series reality.",
    tags: ["#probability", "#risk-management"],
    excerpt: "If ruin is absorbing, you cannot evaluate the system by ensemble averages. You must survive time-series volatility."
  }
];

export default function IterationOne() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("zettelkasten");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isPhysicsActive, setIsPhysicsActive] = useState(true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const selectedNode = useMemo(() => {
    return INITIAL_NODES.find((n) => n.id === selectedNodeId) || INITIAL_NODES[0];
  }, [selectedNodeId]);

  // Connected nodes for active node
  const activeConnectedNodes = useMemo(() => {
    if (!selectedNode) return [];
    return INITIAL_NODES.filter((n) =>
      selectedNode.connections.includes(n.id) || n.connections.includes(selectedNode.id)
    );
  }, [selectedNode]);

  // Filtered nodes based on category or search
  const displayedNodes = useMemo(() => {
    return INITIAL_NODES.filter((n) => {
      const matchCat = filterCategory === "all" || n.category === filterCategory;
      const matchQuery = searchQuery === "" ||
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [filterCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#07090E] text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle background neural grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#07090E]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="h-full w-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
                <Share2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold tracking-tight text-white flex items-center gap-2">
                SYNAPSE
                <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                  v2.4
                </span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#graph" className="hover:text-cyan-400 transition-colors">Neural Graph</a>
            <a href="#backlinks" className="hover:text-cyan-400 transition-colors">Backlinks</a>
            <a href="#local-first" className="hover:text-cyan-400 transition-colors">Local-First</a>
            <a href="#specs" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#demo"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition"
            >
              <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              <span>Docs</span>
            </Link>
            <a
              href="#download"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-neutral-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Synapse Free</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-6 backdrop-blur shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Synapse 2.4 Released: 3D Force-Directed Graph Engine & Instant Wiki-Links</span>
          <ArrowRight className="w-3 h-3 text-cyan-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Your thoughts are not folders.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            They are a living neural constellation.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Break out of rigid file hierarchies. Synapse connects your ideas the way your mind naturally works—through bi-directional links, dynamic knowledge graphs, and local-first encrypted markdown.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-sm shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download for macOS & Linux</span>
            <span className="text-[10px] font-mono bg-neutral-950/20 px-1.5 py-0.5 rounded">v2.4.2</span>
          </a>

          <a
            href="#graph-interactive"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
          >
            <Share2 className="w-4 h-4 text-cyan-400" />
            <span>Interact with Live Graph</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            100% Local-First (.md)
          </span>
          <span className="text-neutral-700">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Zero Telemetry / No Cloud Lock-In
          </span>
          <span className="text-neutral-700">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            &lt; 2ms Query Latency
          </span>
        </div>

        {/* Live Interactive Knowledge Graph Showcase */}
        <div id="graph-interactive" className="mt-16 text-left">
          <div className="rounded-3xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="h-4 w-px bg-white/10" />
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  vault: /Users/second-brain/vault.synapse
                </span>
              </div>

              {/* Search & filter controls */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search nodes or #tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-8 pl-8 pr-3 text-xs rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 w-40 sm:w-56"
                  />
                </div>
                <button
                  onClick={() => setIsPhysicsActive(!isPhysicsActive)}
                  className={`h-8 px-2.5 text-xs rounded-lg border flex items-center gap-1.5 transition ${
                    isPhysicsActive
                      ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                      : "bg-white/5 border-white/10 text-neutral-400"
                  }`}
                  title="Toggle physics stabilization"
                >
                  <RefreshCw className={`w-3 h-3 ${isPhysicsActive ? "animate-spin" : ""}`} style={{ animationDuration: "12s" }} />
                  <span className="hidden sm:inline">Physics</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Canvas & Note Inspector */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[460px]">
              {/* Interactive SVG Graph Area (7 cols on lg) */}
              <div className="lg:col-span-8 rounded-2xl bg-[#06080E] border border-white/5 relative overflow-hidden flex flex-col justify-between p-4">
                {/* Visual Canvas Top HUD */}
                <div className="flex items-center justify-between text-xs text-neutral-400 z-10 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[11px] text-neutral-300">
                      {displayedNodes.length} Active Nodes • Click any node to explore connections
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-400">
                      Zoom: 100%
                    </span>
                  </div>
                </div>

                {/* SVG Graph Canvas */}
                <div className="relative w-full h-[360px] sm:h-[400px]">
                  <svg className="w-full h-full" viewBox="0 0 740 460">
                    <defs>
                      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Edge Lines */}
                    {INITIAL_NODES.flatMap((node) =>
                      node.connections.map((targetId) => {
                        const targetNode = INITIAL_NODES.find((n) => n.id === targetId);
                        if (!targetNode) return null;

                        const isConnectedToSelected =
                          node.id === selectedNodeId || targetNode.id === selectedNodeId;
                        const isHovered =
                          node.id === hoveredNodeId || targetNode.id === hoveredNodeId;

                        return (
                          <line
                            key={`${node.id}-${targetId}`}
                            x1={node.x}
                            y1={node.y}
                            x2={targetNode.x}
                            y2={targetNode.y}
                            stroke={
                              isConnectedToSelected
                                ? "#06B6D4"
                                : isHovered
                                ? "#10B981"
                                : "rgba(255,255,255,0.08)"
                            }
                            strokeWidth={isConnectedToSelected ? "2.5" : isHovered ? "2" : "1"}
                            strokeDasharray={isConnectedToSelected ? "none" : "3,3"}
                            className="transition-all duration-300"
                          />
                        );
                      })
                    )}

                    {/* Interactive Nodes */}
                    {displayedNodes.map((node) => {
                      const isSelected = node.id === selectedNodeId;
                      const isHovered = node.id === hoveredNodeId;
                      const isConnected = selectedNode.connections.includes(node.id) || node.connections.includes(selectedNode.id);

                      let nodeColor = "#38BDF8";
                      if (node.category === "systems") nodeColor = "#10B981";
                      if (node.category === "philosophy") nodeColor = "#A855F7";
                      if (node.category === "daily") nodeColor = "#F59E0B";

                      return (
                        <g
                          key={node.id}
                          className="cursor-pointer transition-transform duration-200"
                          onClick={() => setSelectedNodeId(node.id)}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          transform={`translate(${node.x}, ${node.y})`}
                        >
                          {/* Outer pulse circle for selected */}
                          {isSelected && (
                            <circle
                              r="26"
                              fill="none"
                              stroke="#06B6D4"
                              strokeWidth="1.5"
                              strokeOpacity="0.4"
                              className="animate-ping"
                              style={{ animationDuration: "3s" }}
                            />
                          )}

                          {/* Node core halo */}
                          <circle
                            r={isSelected ? "18" : isHovered ? "15" : "11"}
                            fill={isSelected ? "#06B6D4" : nodeColor}
                            fillOpacity={isSelected ? "0.9" : isConnected ? "0.7" : "0.3"}
                            stroke={isSelected ? "#E0F2FE" : nodeColor}
                            strokeWidth={isSelected ? "2.5" : "1.5"}
                            filter={isSelected || isHovered ? "url(#glow)" : undefined}
                          />

                          {/* Node Title Label */}
                          <text
                            y={isSelected ? 28 : 22}
                            textAnchor="middle"
                            className={`text-[10px] font-sans font-medium transition-all ${
                              isSelected
                                ? "fill-white font-semibold text-[11px]"
                                : isConnected
                                ? "fill-cyan-300"
                                : "fill-neutral-400"
                            }`}
                          >
                            {node.title}
                          </text>

                          {/* Backlink count tag */}
                          <circle
                            cx="10"
                            cy="-10"
                            r="6"
                            fill="#0B0F19"
                            stroke={nodeColor}
                            strokeWidth="1"
                          />
                          <text
                            x="10"
                            y="-8"
                            textAnchor="middle"
                            className="fill-neutral-300 text-[8px] font-mono"
                          >
                            {node.backlinks}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Graph Legend */}
                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/5 text-[11px] text-neutral-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      Theory
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Systems
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-purple-400" />
                      Philosophy
                    </span>
                  </div>
                  <span className="font-mono text-neutral-500">
                    Click node to inspect backlinks
                  </span>
                </div>
              </div>

              {/* Active Node Inspector / Note Panel (4 cols on lg) */}
              <div className="lg:col-span-4 rounded-2xl bg-[#080B12] border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                      Active Note Inspector
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {selectedNode.backlinks} backlinks
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      {selectedNode.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-sans">
                      {selectedNode.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {selectedNode.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-cyan-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Markdown Excerpt Simulation */}
                  <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-neutral-300">
                    <div className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1">
                      Raw .md content preview
                    </div>
                    <p className="text-neutral-400 italic">
                      &quot;{selectedNode.excerpt}&quot;
                    </p>
                    <div className="mt-2 pt-2 border-t border-white/5 text-cyan-400 flex items-center gap-1">
                      <span>Ref:</span>
                      <span className="underline decoration-cyan-500/50">
                        [[{selectedNode.connections[0] || "index"}]]
                      </span>
                    </div>
                  </div>

                  {/* Connected Bidirectional Links List */}
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 mb-2">
                      <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                      Direct Synaptic Links ({activeConnectedNodes.length})
                    </h4>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {activeConnectedNodes.map((conn) => (
                        <button
                          key={conn.id}
                          onClick={() => setSelectedNodeId(conn.id)}
                          className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition flex items-center justify-between group"
                        >
                          <span className="text-xs text-neutral-200 group-hover:text-cyan-300 truncate">
                            {conn.title}
                          </span>
                          <ChevronRight className="w-3 h-3 text-neutral-500 group-hover:translate-x-0.5 text-cyan-400 transition" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-mono text-[11px]">
                    /vault/{selectedNode.id}.md
                  </span>
                  <button
                    onClick={() => {
                      const nextIndex = (INITIAL_NODES.findIndex(n => n.id === selectedNodeId) + 1) % INITIAL_NODES.length;
                      setSelectedNodeId(INITIAL_NODES[nextIndex].id);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 text-xs font-medium flex items-center gap-1"
                  >
                    <span>Hop next node</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars: Why Neural Graphs Outperform Hierarchies */}
      <section id="backlinks" className="py-20 border-t border-white/5 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              The Synapse Architectural Paradigm
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Built on First Principles of Cognition
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Most note apps force you into nesting folders that collapse under their own weight. Synapse lets knowledge weave together like real biological memory.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 hover:border-cyan-500/40 transition group">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Bi-Directional Backlinks
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Type <code className="text-cyan-300 font-mono bg-white/5 px-1 rounded">[[Idea]]</code> anywhere. Synapse establishes two-way synaptic references with unlinked mention detection, ensuring no thought is ever lost in isolation.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-cyan-400 font-mono flex items-center gap-1">
                <span>Recursive graph traversal</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 hover:border-emerald-500/40 transition group">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <FolderLock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                100% Local-First Markdown
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Your notes are plain text files on your own filesystem. No proprietary databases, no vendor lock-in. If Synapse disappeared tomorrow, your life&apos;s thoughts remain readable in any text editor.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-emerald-400 font-mono flex items-center gap-1">
                <span>Standard CommonMark spec</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 hover:border-purple-500/40 transition group">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                SQL & Dataview Query Blocks
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Query your vault like an analytical database. Run real-time queries inside any note to dynamically aggregate projects, pending decisions, or reading backlogs.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-purple-400 font-mono flex items-center gap-1">
                <span>Embedded SQLite-WASM index</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Writing & Backlink Split Showcase */}
      <section id="specs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B0F19] to-[#07090E] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Zero Friction Capture
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-snug">
                Write freely. Let the graph weave connections in the background.
              </h2>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                As you type, Synapse parses semantic references, suggests existing nodes, and flags serendipitous links to notes you wrote months ago.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instant inline link autocomplete via <code>[[</code> trigger</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automatic graph recalculation in sub-5ms</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Spaced repetition flashcards generated from <code>#recall</code> tags</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-xs shadow-md transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Free App
                </a>
                <span className="text-xs text-neutral-400">macOS, Windows, Linux, iOS & Android</span>
              </div>
            </div>

            {/* Simulated Live Editor Screen */}
            <div className="rounded-2xl border border-white/15 bg-black/70 p-5 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-neutral-400">
                <span className="text-[11px] text-cyan-300">drafts/antifragile-thinking.md</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                  Live Sync • 842 words
                </span>
              </div>

              <div className="py-4 space-y-3 leading-relaxed text-neutral-300">
                <p className="text-neutral-500">---</p>
                <p className="text-neutral-400">tags: [philosophy, decision-making, systems]</p>
                <p className="text-neutral-400">updated: 2026-09-02</p>
                <p className="text-neutral-500">---</p>
                <p className="text-white font-semibold text-sm">
                  # The Convexity of Note Architecture
                </p>
                <p>
                  Most knowledge repositories suffer from <span className="text-cyan-400 underline decoration-cyan-500/40">[[Hierarchical Rot]]</span>. When you categorize by rigid topic directories, your notes become fragile.
                </p>
                <p>
                  Instead, through <span className="text-emerald-400 underline decoration-emerald-500/40">[[Associative Indexing]]</span> and <span className="text-cyan-400 underline decoration-cyan-500/40">[[Zettelkasten Method]]</span>, every additional note increases the value of the network exponentially.
                </p>
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/30 text-cyan-300 text-[11px] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-cyan-400" />
                  <span>2 unlinked mentions found: &quot;Vannevar Bush&quot; and &quot;Ergodicity&quot;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section id="pricing" className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Transparent Ownership
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Free forever for your own thoughts.
          </h2>
          <p className="mt-3 text-neutral-400 text-sm max-w-xl mx-auto">
            Synapse is local-first software. You only pay if you want our zero-knowledge end-to-end encrypted relay sync service.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Local Standard</span>
                <div className="mt-2 text-3xl font-extrabold text-white">$0</div>
                <p className="mt-2 text-xs text-neutral-400">Forever free. No account required.</p>
                <div className="mt-6 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Unlimited notes & local vaults</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Interactive 2D & 3D graph visualizer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SQL & dataview queries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Community plugins & themes</span>
                  </div>
                </div>
              </div>
              <a
                href="#download"
                className="mt-8 block text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition"
              >
                Download Now
              </a>
            </div>

            {/* Synapse Sync Tier */}
            <div className="rounded-2xl border-2 border-cyan-500 bg-[#0A101D] p-6 flex flex-col justify-between relative shadow-xl shadow-cyan-500/10">
              <span className="absolute -top-3 right-6 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500 text-neutral-950 font-bold">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Synapse Sync</span>
                <div className="mt-2 text-3xl font-extrabold text-white">
                  $8<span className="text-sm font-normal text-neutral-400">/mo</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">End-to-end encrypted relay for all your devices.</p>
                <div className="mt-6 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Zero-knowledge client-side encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Instant sync across Mac, iOS, Android, Linux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>1-year revision history with diff rollbacks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Priority early beta channels</span>
                  </div>
                </div>
              </div>
              <a
                href="#download"
                className="mt-8 block text-center py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs shadow-md transition"
              >
                Start 14-Day Trial
              </a>
            </div>

            {/* Teams Tier */}
            <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Research Teams</span>
                <div className="mt-2 text-3xl font-extrabold text-white">
                  $16<span className="text-sm font-normal text-neutral-400">/user</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">Shared knowledge graphs for research labs & labs.</p>
                <div className="mt-6 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Shared multi-user graph views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Granular branch permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Self-hosted relay server option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dedicated SLA & SOC2 Compliance</span>
                  </div>
                </div>
              </div>
              <a
                href="#download"
                className="mt-8 block text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition"
              >
                Contact Research Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#06080E] text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <Share2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-white">Synapse</span>
            <span>— The Neural Graph Second Brain</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/without-design-skill/gemini-3.8-flash/2" className="hover:text-neutral-300 transition">Iteration 2: Atelier →</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition">GitHub</a>
            <a href="#discord" className="hover:text-neutral-300 transition">Community</a>
            <span className="text-neutral-600">Local-first software license</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
