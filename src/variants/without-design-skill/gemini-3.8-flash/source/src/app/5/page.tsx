"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Move,
  ZoomIn,
  ZoomOut,
  MousePointer,
  Square,
  FileText,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
  Grid,
  Plus,
  Sliders,
  Image as ImageIcon,
  FolderPlus,
  ChevronRight,
  ExternalLink,
  SplitSquareVertical,
  Palette
} from "lucide-react";

interface CanvasCard {
  id: string;
  title: string;
  type: "research" | "architecture" | "interview" | "synthesis";
  x: number;
  y: number;
  color: string;
  badge: string;
  content: string;
  metric?: string;
  tags: string[];
}

const INITIAL_CARDS: CanvasCard[] = [
  {
    id: "card-1",
    title: "1. The Retention Dropoff",
    type: "interview",
    x: 40,
    y: 50,
    color: "border-blue-400 bg-blue-50/90 text-blue-950",
    badge: "User Interview #28",
    content: "'I take 15 notes a week during meetings, but three weeks later I have zero clue which folder they were saved in.'",
    metric: "42% context loss",
    tags: ["#friction", "#discovery"]
  },
  {
    id: "card-2",
    title: "2. Spatial Memory Model",
    type: "research",
    x: 360,
    y: 30,
    color: "border-purple-400 bg-purple-50/90 text-purple-950",
    badge: "Cognitive Science PDF",
    content: "The human hippocampus encodes memory spatially (Method of Loci). People recall items 3.2x better when positioned in 2D space.",
    metric: "3.2x recall boost",
    tags: ["#neuroscience", "#loci"]
  },
  {
    id: "card-3",
    title: "3. Event-Driven Architecture",
    type: "architecture",
    x: 400,
    y: 280,
    color: "border-emerald-400 bg-emerald-50/90 text-emerald-950",
    badge: "System RFC",
    content: "Store canvas nodes as vector coordinates in CRDT trees. Real-time multi-cursor spatial collaboration with 0 merge conflicts.",
    metric: "< 14ms sync",
    tags: ["#crdt", "#wasm"]
  },
  {
    id: "card-4",
    title: "4. The Spatial Moat",
    type: "synthesis",
    x: 60,
    y: 290,
    color: "border-amber-400 bg-amber-50/90 text-amber-950",
    badge: "Strategic Thesis",
    content: "Linear documents create cognitive bottlenecks. Moving to spatial whiteboards turns fragmented notes into visual strategy maps.",
    metric: "High Moat",
    tags: ["#strategy", "#canvas"]
  }
];

export default function IterationFive() {
  const [cards, setCards] = useState<CanvasCard[]>(INITIAL_CARDS);
  const [selectedCardId, setSelectedCardId] = useState<string>("card-2");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const selectedCard = cards.find((c) => c.id === selectedCardId) || cards[0];

  const handleDragCard = (id: string, deltaX: number, deltaY: number) => {
    setCards((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, x: Math.max(20, c.x + deltaX), y: Math.max(20, c.y + deltaY) } : c
      )
    );
  };

  const filteredCards = cards.filter(
    (c) => activeFilter === "all" || c.type === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-900">
      {/* Precision Dot Grid Canvas Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #94A3B8 1px, transparent 0)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Modern Studio Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                MindPalace
              </span>
              <span className="hidden sm:inline-block text-[11px] text-slate-500 ml-2 border-l border-slate-200 pl-2">
                Spatial Infinite Canvas
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs text-slate-600">
            <button className="px-3 py-1 rounded-lg bg-white shadow-sm font-medium text-slate-900 flex items-center gap-1.5">
              <MousePointer className="w-3.5 h-3.5 text-blue-600" />
              <span>Select</span>
            </button>
            <button className="px-3 py-1 rounded-lg hover:bg-white/60 transition flex items-center gap-1.5">
              <Square className="w-3.5 h-3.5" />
              <span>Card</span>
            </button>
            <button className="px-3 py-1 rounded-lg hover:bg-white/60 transition flex items-center gap-1.5">
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>PDF Split</span>
            </button>
            <button className="px-3 py-1 rounded-lg hover:bg-white/60 transition flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              <span>Color Theme</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow transition cursor-pointer"
            >
              Start Free Board
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Infinite Spatial Thought Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Think outside the vertical scroll.{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Lay your entire mind on an infinite canvas.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Traditional notes force complex, multidimensional thinking into rigid linear documents. MindPalace gives you a 2D spatial studio where thoughts, research papers, visual diagrams, and flashcards link naturally.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#spatial-workbench"
            className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
          >
            Launch Interactive Board
          </a>
          <a
            href="#why-spatial"
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-sm transition shadow-sm"
          >
            See The Spatial Method
          </a>
        </div>
      </section>

      {/* Interactive 2D Spatial Workbench Showcase */}
      <section id="spatial-workbench" className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-slate-300/80 bg-white/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          {/* Top Canvas Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-slate-900">
                Board: Architecture & Synthesis 2026
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                (4 active spatial cards)
              </span>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 hidden sm:inline">Filter:</span>
              {(["all", "research", "architecture", "interview"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}

              {/* Zoom controls */}
              <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
                  className="p-1 rounded hover:bg-slate-100 text-slate-600"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 px-1">
                  {zoomLevel}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(130, z + 10))}
                  className="p-1 rounded hover:bg-slate-100 text-slate-600"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main 2D Canvas Area */}
          <div className="relative w-full h-[520px] bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden mt-4 select-none">
            {/* SVG Dynamic Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Line 1 to 2 */}
              <path
                d="M 230 110 C 290 110, 310 90, 360 90"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
              />
              {/* Line 2 to 3 */}
              <path
                d="M 450 160 C 450 210, 470 230, 470 280"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
              />
              {/* Line 3 to 4 */}
              <path
                d="M 400 340 C 320 340, 280 340, 240 340"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
              />
            </svg>

            {/* Spatial Cards */}
            {filteredCards.map((card) => {
              const isSelected = selectedCardId === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  style={{
                    transform: `translate(${card.x}px, ${card.y}px) scale(${zoomLevel / 100})`,
                    transformOrigin: "top left"
                  }}
                  className={`absolute w-72 rounded-2xl border-2 p-4 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-200 hover:shadow-xl ${
                    card.color
                  } ${
                    isSelected ? "ring-4 ring-blue-500/30 scale-105 z-20" : "z-10"
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-black/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/10">
                      {card.badge}
                    </span>
                    {card.metric && (
                      <span className="text-[11px] font-bold text-blue-700">
                        {card.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-sm font-bold leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-xs opacity-85 leading-relaxed font-sans">
                    {card.content}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/10 text-[10px]">
                    <div className="flex items-center gap-1">
                      {card.tags.map((t) => (
                        <span key={t} className="opacity-70 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* Move controls button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDragCard(card.id, 15, 15);
                      }}
                      className="px-2 py-0.5 rounded bg-black/10 hover:bg-black/20 text-slate-700 flex items-center gap-1"
                      title="Nudge spatial position"
                    >
                      <Move className="w-3 h-3" />
                      <span>Nudge</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Minimap Widget */}
            <div className="absolute bottom-4 right-4 w-40 h-28 rounded-xl bg-white/90 border border-slate-300 shadow-lg p-2 pointer-events-none">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">
                Spatial Minimap
              </span>
              <div className="relative w-full h-20 bg-slate-100 rounded border border-slate-200">
                {cards.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      left: `${(c.x / 600) * 80}%`,
                      top: `${(c.y / 400) * 70}%`
                    }}
                    className={`absolute w-3.5 h-2.5 rounded-[2px] ${
                      c.id === selectedCardId ? "bg-blue-600 ring-2 ring-blue-300" : "bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card Inspector Drawer */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-900">
                Selected Card: {selectedCard.title}
              </span>
              <span className="text-xs text-slate-500">
                ({selectedCard.badge})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                Click &quot;Nudge&quot; on any card or select different filters above
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Spatial Thinking Section */}
      <section id="why-spatial" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            The Method of Loci
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Visionaries Think in Space, Not Lists
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Einstein, da Vinci, and Nobel laureates did not keep vertical text bullet points. They mapped ideas across spatial planes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
              <SplitSquareVertical className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Side-by-Side PDF Extraction
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
              Drag PDFs, research papers, or clinical studies directly onto the canvas. Highlight text to instantaneously create connected visual thought cards.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-blue-600 font-semibold">
              Deep academic workflows
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Nested Sub-Canvases
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
              Double-click any card to zoom into a complete infinite canvas nested inside. Build hierarchical mind palaces with limitless recursive depth.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-purple-600 font-semibold">
              Infinite fractal structure
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Visual Relationship Arrows
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
              Connect cards with semantic arrows: &quot;contradicts&quot;, &quot;proves&quot;, &quot;causes&quot;. MindPalace compiles your visual map into structured markdown outlines on demand.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-emerald-600 font-semibold">
              Bidirectional synthesis
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Canvas Plans */}
      <section id="pricing" className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Studio Membership
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Simple, Transparent Studio Plans
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Start building your spatial palace today. Upgrade when you need team whiteboards.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <span className="text-xs uppercase font-bold text-slate-500">Free Studio</span>
              <div className="mt-2 text-3xl font-extrabold text-slate-900">$0</div>
              <p className="mt-1 text-xs text-slate-500">Free for up to 3 spatial canvases.</p>
              <div className="mt-6 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>3 Infinite Whiteboard Canvases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Up to 500 cards per board</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>PDF annotations and highlights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Export to Markdown & PNG</span>
                </div>
              </div>
              <a
                href="#start"
                className="mt-8 block text-center py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold text-xs transition"
              >
                Create Free Canvas
              </a>
            </div>

            <div className="p-6 rounded-2xl border-2 border-blue-600 bg-white relative shadow-xl shadow-blue-500/10">
              <span className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] uppercase">
                Unlimited
              </span>
              <span className="text-xs uppercase font-bold text-blue-600">Pro Studio</span>
              <div className="mt-2 text-3xl font-extrabold text-slate-900">
                $12 <span className="text-xs font-normal text-slate-500">/ mo</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Unlimited canvases and real-time collaboration.</p>
              <div className="mt-6 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Unlimited infinite canvases & cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Real-time multi-cursor collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Nested sub-boards with infinite depth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Local offline cache & encrypted sync</span>
                </div>
              </div>
              <a
                href="#start-trial"
                className="mt-8 block text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition"
              >
                Start 14-Day Free Pro Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="font-bold">MindPalace</span>
            <span>— The Infinite Spatial Canvas</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/without-design-skill/gemini-3.8-flash/1" className="hover:text-blue-600 transition text-blue-600 font-semibold">Back to Iteration 1: Synapse →</Link>
            <a href="#canvas" className="hover:text-slate-800 transition">Desktop App</a>
            <a href="#roadmap" className="hover:text-slate-800 transition">Roadmap</a>
            <span>© 2026 MindPalace Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
