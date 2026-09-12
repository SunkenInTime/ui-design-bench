"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SpatialCard {
  id: string;
  title: string;
  category: string;
  x: number; // px or %
  y: number;
  rotation: number; // degrees
  snippet: string;
  stamp: string;
  tapeColor: string;
}

const PRESETS: Record<
  string,
  { name: string; subtitle: string; cards: SpatialCard[] }
> = {
  polymath: {
    name: "Polymath Investigation",
    subtitle: "Connecting Bauhaus industrial design, cybernetics, and typography",
    cards: [
      {
        id: "card-1",
        title: "Bauhaus Dessau Glass Curtain",
        category: "ARCHITECTURE",
        x: 35,
        y: 40,
        rotation: -2,
        snippet:
          "Transparency as structural honesty. Gropius dissolved the masonry load-bearing wall into steel truss skeletons.",
        stamp: "FIG. 1925 // ARCH",
        tapeColor: "#D95338",
      },
      {
        id: "card-2",
        title: "Wiener's Cybernetic Feedback",
        category: "SYSTEMS",
        x: 340,
        y: 30,
        rotation: 1.5,
        snippet:
          "Steering behavior governed by error margin signals. Teleological mechanisms in living organisms and machines.",
        stamp: "NOTE #84-B",
        tapeColor: "#16253B",
      },
      {
        id: "card-3",
        title: "Swiss Grid Rationalism",
        category: "TYPOGRAPHY",
        x: 180,
        y: 200,
        rotation: -1,
        snippet:
          "Josef Müller-Brockmann: The grid is an attitude of mind. Rigorous mathematical proportion liberates rather than confines.",
        stamp: "PLT 12 // ZURICH",
        tapeColor: "#CCA43B",
      },
      {
        id: "card-4",
        title: "Synthesis: The Living Machine",
        category: "SYNTHESIS",
        x: 480,
        y: 190,
        rotation: 2.5,
        snippet:
          "When software interfaces adopt structural honesty + cybernetic telemetry, they cease to be skeuomorphic illusions.",
        stamp: "HYPOTHESIS // ACTIVE",
        tapeColor: "#D95338",
      },
    ],
  },
  screenplay: {
    name: "Non-Linear Narrative Arc",
    subtitle: "Spatial pacing of 3 parallel timelines across a 120-minute feature",
    cards: [
      {
        id: "card-s1",
        title: "Inciting Fracture: The Blackout",
        category: "ACT I // 00:14",
        x: 40,
        y: 50,
        rotation: -1.5,
        snippet:
          "Substation 4 fails in silence. No explosion, just the gradual descent into analog contingency systems.",
        stamp: "SCENE 04",
        tapeColor: "#16253B",
      },
      {
        id: "card-s2",
        title: "The Archivist's Discovery",
        category: "ACT II-A // 00:48",
        x: 270,
        y: 35,
        rotation: 2,
        snippet:
          "Elena pulls the 1974 microfiche. The blueprints were altered before the dam concrete was ever poured.",
        stamp: "REVELATION",
        tapeColor: "#D95338",
      },
      {
        id: "card-s3",
        title: "Simultaneous Climax: Twin Radios",
        category: "ACT III // 01:42",
        x: 460,
        y: 160,
        rotation: -2,
        snippet:
          "Split frequency broadcast. Two characters 800 miles apart utter the same sentence with opposite meanings.",
        stamp: "RESOLVE",
        tapeColor: "#CCA43B",
      },
    ],
  },
  spec: {
    name: "Industrial Hardware Blueprint",
    subtitle: "Thermal dissipation, chassis tolerances, and tactile rotary encoders",
    cards: [
      {
        id: "card-h1",
        title: "Anodized Aluminum Unibody",
        category: "MATERIALS",
        x: 60,
        y: 40,
        rotation: 1,
        snippet:
          "6000-series alloy CNC milled from solid billet. Bead-blasted surface roughness Ra 0.8µm.",
        stamp: "CAD-704",
        tapeColor: "#16253B",
      },
      {
        id: "card-h2",
        title: "Magnetic Detent Knob Physics",
        category: "HAPTICS",
        x: 310,
        y: 50,
        rotation: -2.5,
        snippet:
          "Neodymium ring with 24 distinct magnetic poles. 45 mN·m torque per step for unmistakable tactile feedback.",
        stamp: "SPEC // REV 3",
        tapeColor: "#D95338",
      },
      {
        id: "card-h3",
        title: "Passive Chimney Convection",
        category: "THERMAL",
        x: 200,
        y: 210,
        rotation: 1.5,
        snippet:
          "Internal fin stack creates natural stack effect. Zero fan acoustic noise at 35W sustained compute load.",
        stamp: "TDP-PASSIVE",
        tapeColor: "#CCA43B",
      },
    ],
  },
};

export default function AtelierLandingPage() {
  const [activePresetKey, setActivePresetKey] = useState<string>("polymath");
  const [activeCardId, setActiveCardId] = useState<string>("card-1");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const activePreset = PRESETS[activePresetKey];
  const selectedCard =
    activePreset.cards.find((c) => c.id === activeCardId) || activePreset.cards[0];

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#22252A] selection:bg-[#D95338]/20 selection:text-[#22252A] font-serif antialiased overflow-x-hidden relative">
      {/* Drafting Board Technical Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 37, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 37, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 37, 59, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 37, 59, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Top Drafting Header / Caliper Bar */}
      <header className="relative z-20 border-b border-[#D8D2C5] bg-[#EFECE6]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-[#22252A] rounded-sm bg-[#D95338]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-bold text-[#16253B]">
                ATELIER
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[11px] text-[#716E65] border-l border-[#D8D2C5] pl-3">
              SPATIAL NOTE CARTOGRAPHY // DESK 04
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-mono text-xs text-[#524F47]">
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#D95338] rounded-full" />
              <span>CANVAS: UNCONSTRAINED 2D</span>
            </span>
            <span>COORDS: X+142 Y-88</span>
            <span>SCALE: {zoomLevel}%</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#workbench"
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#22252A] border border-[#22252A]/40 rounded hover:bg-[#E3DFD5] transition-colors"
            >
              Examine Desk
            </a>
            <a
              href="#enroll"
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#16253B] hover:bg-[#D95338] transition-colors rounded shadow-sm"
            >
              Claim Drafting Desk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#D95338]/30 bg-[#D95338]/10 text-[#D95338] font-mono text-[11px] tracking-widest uppercase">
            <span>METHOD OF LOCI // PHYSICAL PROXIMITY ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#16253B] leading-[1.08] tracking-tight">
            The human mind does not think in an 800-pixel vertical scroll.
            <span className="block italic font-light text-[#D95338] mt-2">
              It thinks in space, distance, and tangible proximity.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#4A473F] font-light leading-relaxed max-w-3xl">
            For three centuries, architects, essayists, and polymaths worked on massive drafting
            tables—laying out index cards, sketches, reference plates, and margin scribbles side by side.
            Atelier restores this physical cognition to software: a frictionless, infinite canvas where
            proximity is meaning.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href="#workbench"
              className="px-6 py-3.5 rounded bg-[#16253B] text-white hover:bg-[#D95338] transition-all flex items-center gap-3 uppercase tracking-wider font-semibold shadow-md"
            >
              <span>Explore The Live Drafting Table</span>
              <span>↓</span>
            </a>
            <a
              href="#why-spatial"
              className="px-6 py-3.5 rounded border border-[#22252A]/30 text-[#22252A] hover:bg-[#E3DFD5] transition-all uppercase tracking-wider"
            >
              Read Architectural Thesis
            </a>
          </div>
        </div>

        {/* The Live Interactive Spatial Workbench */}
        <section id="workbench" className="mt-16 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#D8D2C5] gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D95338]">
                INTERACTIVE DEMO // WORKBENCH VIEWPORT
              </span>
              <h2 className="text-2xl font-serif text-[#16253B] mt-0.5">
                {activePreset.name}
              </h2>
              <p className="text-xs font-mono text-[#716E65] mt-1">{activePreset.subtitle}</p>
            </div>

            {/* Discipline Presets Selector */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#716E65] text-[11px] mr-1">PRESET:</span>
              {(Object.keys(PRESETS) as (keyof typeof PRESETS)[]).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActivePresetKey(key);
                    setActiveCardId(PRESETS[key].cards[0].id);
                  }}
                  className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider border transition-all ${
                    activePresetKey === key
                      ? "bg-[#16253B] text-white border-[#16253B] font-semibold"
                      : "bg-[#EAE5DA] text-[#524F47] border-[#D8D2C5] hover:bg-[#DFD9CC]"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Workbench Canvas Container */}
          <div className="relative mt-6 rounded-xl border border-[#CFC7B7] bg-[#E5DFD1] p-6 sm:p-8 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06),0_12px_36px_rgba(34,37,42,0.08)] overflow-hidden">
            {/* Corner Caliper Marks */}
            <div className="absolute top-3 left-3 font-mono text-[9px] text-[#8C877D] select-none">
              +0.00 // N-DESK
            </div>
            <div className="absolute top-3 right-3 font-mono text-[9px] text-[#8C877D] select-none">
              GRID: 12MM METRIC
            </div>

            {/* Virtual Desk Canvas */}
            <div className="relative h-[480px] w-full rounded-lg bg-[#FAF8F5] border border-[#DDD6C7] overflow-hidden shadow-sm">
              {/* Paper Grid background */}
              <div
                className="absolute inset-0 opacity-[0.25]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #16253B 1px, transparent 1px),
                    linear-gradient(to bottom, #16253B 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Dynamic Connection String between Cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                  x1="120"
                  y1="100"
                  x2="280"
                  y2="240"
                  stroke="#D95338"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="280"
                  y1="240"
                  x2="480"
                  y2="100"
                  stroke="#16253B"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Spatial Pinned Index Cards */}
              {activePreset.cards.map((card) => {
                const isSelected = activeCardId === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCardId(card.id)}
                    style={{
                      left: `${card.x}px`,
                      top: `${card.y}px`,
                      transform: `rotate(${card.rotation}deg) scale(${isSelected ? 1.04 : 1})`,
                    }}
                    className={`absolute z-10 w-[240px] sm:w-[270px] cursor-pointer transition-transform duration-200 select-none ${
                      isSelected ? "z-30" : "hover:z-20"
                    }`}
                  >
                    {/* Washi Masking Tape on Top */}
                    <div
                      className="h-3.5 w-16 mx-auto -mb-2 shadow-sm relative z-20 opacity-80"
                      style={{
                        backgroundColor: card.tapeColor,
                        clipPath:
                          "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)",
                      }}
                    />

                    {/* Card Body */}
                    <div
                      className={`p-4 rounded-sm border bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all ${
                        isSelected
                          ? "ring-2 ring-[#D95338] shadow-[0_8px_24px_rgba(217,83,56,0.25)]"
                          : "border-[#DDD6C7] hover:border-[#16253B]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-[#EFECE6] mb-2 font-mono">
                        <span className="text-[9px] uppercase tracking-wider text-[#716E65]">
                          {card.category}
                        </span>
                        <span className="text-[9px] text-[#D95338] font-bold">
                          {card.stamp}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#16253B] leading-snug mb-1.5">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#524F47] leading-relaxed font-sans line-clamp-3">
                        {card.snippet}
                      </p>
                      <div className="mt-3 pt-1.5 border-t border-dashed border-[#EFECE6] flex justify-between items-center font-mono text-[9px] text-[#8C877D]">
                        <span>PROXIMITY: 0.84m</span>
                        <span className="text-[#16253B] underline">Open Detail →</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Card Inspect Strip */}
            <div className="mt-4 p-4 rounded bg-[#FAF8F5] border border-[#DDD6C7] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#16253B] text-white text-[10px]">
                  FOCUSED CARD
                </span>
                <span className="font-semibold text-[#16253B] font-serif text-sm">
                  {selectedCard.title}
                </span>
                <span className="text-[#716E65] text-xs">({selectedCard.category})</span>
              </div>
              <div className="flex items-center gap-4 text-[#716E65] text-[11px]">
                <span>TILT: {selectedCard.rotation}°</span>
                <span>SPATIAL CLUSTER: #03</span>
                <span className="text-[#D95338] cursor-pointer hover:underline">
                  Pin to Central Pinboard →
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Tyranny of the 800px Column */}
        <section id="why-spatial" className="mt-28 pt-16 border-t border-[#D8D2C5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D95338]">
                01 // COGNITIVE ARCHITECTURE
              </span>
              <h2 className="text-3xl font-serif text-[#16253B] leading-tight">
                Why linear documents destroy spatial memory.
              </h2>
              <p className="text-sm font-sans text-[#524F47] leading-relaxed">
                Evolution spent 200,000 years tuning human memory to remember where things are in
                three-dimensional space: the berry bush past the second ridge, the water spring
                behind the fallen birch.
              </p>
              <p className="text-sm font-sans text-[#524F47] leading-relaxed">
                When you scroll down a 40-page Google Doc or Notion page, every word replaces the
                previous word in the exact same coordinates on your screen. Your spatial hippocampus
                is blinded. Atelier preserves landmark orientation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#DDD6C7] shadow-sm">
                <div className="font-mono text-xs uppercase text-[#D95338] tracking-wider mb-2">
                  01. Proximity as Grammar
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#16253B] mb-2">
                  No Tagging Bureaucracy
                </h3>
                <p className="text-xs font-sans text-[#524F47] leading-relaxed">
                  Moving a note 20 pixels closer to another note exerts conceptual gravity. Atelier
                  dynamically infers relationships from layout rather than requiring tedious manual
                  tags.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#DDD6C7] shadow-sm">
                <div className="font-mono text-xs uppercase text-[#D95338] tracking-wider mb-2">
                  02. Translucent Vellum Layers
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#16253B] mb-2">
                  Trace Over Previous Drafts
                </h3>
                <p className="text-xs font-sans text-[#524F47] leading-relaxed">
                  Layer sheets of virtual architectural vellum over early drafts. Annotate in red
                  lead without destroying original text, exactly like an editor with physical paper.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#DDD6C7] shadow-sm">
                <div className="font-mono text-xs uppercase text-[#D95338] tracking-wider mb-2">
                  03. Semantic Continental Zoom
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#16253B] mb-2">
                  10,000ft View to Micro-Quote
                </h3>
                <p className="text-xs font-sans text-[#524F47] leading-relaxed">
                  Pinch to zoom out to view your entire life's research as a constellation of
                  continents; zoom in to read the handwritten margin note on a 1928 patent.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#DDD6C7] shadow-sm">
                <div className="font-mono text-xs uppercase text-[#D95338] tracking-wider mb-2">
                  04. Tangible Artifact Mediums
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#16253B] mb-2">
                  Beyond Plain Unicode
                </h3>
                <p className="text-xs font-sans text-[#524F47] leading-relaxed">
                  Pin scanned receipts, audio recordings, architectural blueprints, and high-res
                  sketches right next to your typography. Everything shares the same drawing
                  surface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Craft Specs & Studio Memberships */}
        <section id="enroll" className="mt-28 pt-16 border-t border-[#D8D2C5]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D95338]">
              02 // STUDIO EDITIONS
            </span>
            <h2 className="text-3xl font-serif text-[#16253B] mt-1">
              Select your drafting license.
            </h2>
            <p className="text-xs font-mono text-[#716E65] mt-2">
              Perpetual local license. Open Canvas JSON standard. Zero proprietary locks.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Solo Drafter */}
            <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#DDD6C7] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono">
                  <h3 className="text-lg font-serif font-bold text-[#16253B]">Solo Cartographer</h3>
                  <span className="text-[10px] text-[#716E65] uppercase px-2 py-0.5 bg-[#EAE5DA] rounded">
                    PERPETUAL SEED
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl text-[#16253B] font-bold">$79</span>
                  <span className="text-xs text-[#716E65]">/ one-time perpetual license</span>
                </div>
                <p className="text-xs font-sans text-[#524F47] mt-3 leading-relaxed">
                  Own the software for life. Runs completely offline on macOS, Windows, and Linux.
                  Includes 1 year of updates.
                </p>

                <ul className="mt-6 space-y-2.5 font-mono text-xs text-[#4A473F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Infinite 60fps pan/zoom canvas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Unlimited drafting boards & index cards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Vellum tracing overlays
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Export to PDF vector blueprints & SVG
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-3 rounded border border-[#16253B] text-xs font-mono uppercase tracking-wider font-semibold text-[#16253B] hover:bg-[#16253B] hover:text-white transition-all">
                Acquire Perpetual Studio License
              </button>
            </div>

            {/* Polymath Edition with Physical Letterpress Kit */}
            <div className="p-8 rounded-xl bg-white border-2 border-[#16253B] flex flex-col justify-between relative shadow-lg">
              <div className="absolute -top-3 right-6 bg-[#D95338] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded">
                INCLUDES PHYSICAL KIT
              </div>
              <div>
                <div className="flex justify-between items-center font-mono">
                  <h3 className="text-lg font-serif font-bold text-[#16253B]">Master Atelier + Kit</h3>
                </div>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl text-[#16253B] font-bold">$149</span>
                  <span className="text-xs text-[#716E65]">/ perpetual + physical box</span>
                </div>
                <p className="text-xs font-sans text-[#524F47] mt-3 leading-relaxed">
                  Software license plus a boxed physical companion: 100 letterpress heavy 400gsm
                  cotton index cards, drafting tape, and a physical desk caliper.
                </p>

                <ul className="mt-6 space-y-2.5 font-mono text-xs text-[#22252A]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Everything in Solo Cartographer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Physical Letterpress 400gsm Index Card Box
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Instant OCR scan sync from phone to desk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D95338]">✓</span> Lifetime software major upgrades
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-3 rounded bg-[#16253B] text-xs font-mono uppercase tracking-wider font-semibold text-white hover:bg-[#D95338] transition-all shadow-md">
                Order Master Atelier & Physical Kit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Drafting Table Ruler Footer */}
      <footer className="relative z-10 border-t border-[#D8D2C5] bg-[#E5DFD1] py-10 px-6 font-mono text-xs text-[#524F47]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#D95338]" />
            <span className="font-bold text-[#16253B]">ATELIER SPATIAL SYSTEMS</span>
            <span>//</span>
            <span>Built for minds that refuse linear text confinement.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/with-design-skill/gemini-3.8-flash/1" className="hover:text-[#16253B]">
              ← 01 Cortex
            </Link>
            <Link href="/with-design-skill/gemini-3.8-flash/3" className="hover:text-[#D95338] font-bold">
              Next: 03 Syntact (Hypertext Kernel) →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
