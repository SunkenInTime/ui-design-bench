"use client";

import React from "react";
import Link from "next/link";
import IterationSwitcher, { ITERATIONS } from "../components/IterationSwitcher";

const ITERATION_DETAILS = [
  {
    id: "1",
    num: "01",
    name: "CORTEX",
    tagline: "The Bioluminescent Cognitive Lattice",
    paradigm: "Associative Neural Substrate",
    audience: "Deep researchers, systems theorists, polymaths",
    coreThesis: "Your thoughts are not files in folders. They are living synapses.",
    accent: "#00F2FE",
    bgClass: "from-[#080C16] to-[#0D1527] border-[#00F2FE]/30 hover:border-[#00F2FE]",
    badgeBg: "rgba(0, 242, 254, 0.12)",
    badgeColor: "#00F2FE",
    signatureElement: "Interactive living neural node graph with cross-synaptic spark synthesis engine",
    typography: "Futuristic optical sans + monospaced neural telemetry",
  },
  {
    id: "2",
    num: "02",
    name: "ATELIER",
    tagline: "The Spatial Drafting Workstation",
    paradigm: "Tactile Cartography & Method of Loci",
    audience: "Architects, screenwriters, visual thinkers",
    coreThesis: "The human mind does not think in an 800-pixel vertical column. It thinks in space and proximity.",
    accent: "#D95338",
    bgClass: "from-[#F3EFE6] to-[#E5DFD1] border-[#CFC7B7] hover:border-[#D95338] text-[#16253B]",
    badgeBg: "rgba(217, 83, 56, 0.12)",
    badgeColor: "#D95338",
    signatureElement: "Infinite 2D drafting table with pinned index cards, washi tape, and proximity calipers",
    typography: "Technical draftsman serif + architectural stamps and coordinate markers",
  },
  {
    id: "3",
    num: "03",
    name: "SYNTACT",
    tagline: "The Hypertext Plaintext Kernel",
    paradigm: "Sub-10ms Keyboard Terminal OS",
    audience: "Developers, cyberneticists, local-first purists",
    coreThesis: "Your second brain should run at the speed of thought, not the speed of an Electron webview.",
    accent: "#10B981",
    bgClass: "from-[#0D1117] to-[#161B22] border-[#30363D] hover:border-[#10B981]",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#10B981",
    signatureElement: "Live interactive in-browser CLI terminal with AST transclusion and bidirectional backlinks",
    typography: "Monospaced brutalist engineering font + tabular figures and vim modal keys",
  },
  {
    id: "4",
    num: "04",
    name: "MNEME",
    tagline: "Stream of Consciousness & Sediment",
    paradigm: "Chronological Crystallization",
    audience: "Memoirists, essayists, intuitive founders",
    coreThesis: "You cannot organize a thought before you have finished having it.",
    accent: "#B388FF",
    bgClass: "from-[#090A10] to-[#151221] border-white/10 hover:border-[#B388FF]/60",
    badgeBg: "rgba(179, 136, 255, 0.15)",
    badgeColor: "#B388FF",
    signatureElement: "Interactive time-scrubbing slider transforming raw audio whispers into crystalline essays",
    typography: "Poetic editorial serif with flowing italics + micro-circadian timestamps",
  },
  {
    id: "5",
    num: "05",
    name: "TESSERA",
    tagline: "The Ruthless Distillation Monolith",
    paradigm: "Anti-Digital-Hoarding Synthesis Engine",
    audience: "Executives, board directors, overwhelmed operators",
    coreThesis: "Note-taking has become digital hoarding. Tessera is the antidote.",
    accent: "#C25E3E",
    bgClass: "from-[#F7F5F0] to-[#EBE7DC] border-2 border-[#18181B] hover:border-[#C25E3E] text-[#18181B]",
    badgeBg: "rgba(194, 94, 62, 0.15)",
    badgeColor: "#C25E3E",
    signatureElement: "Interactive Compression Crucible stripping 98% of meeting/paper bloat into 3-point briefs",
    typography: "Monumental architectural grotesque + razor-sharp tabular reduction badges",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090E] text-stone-200 font-sans selection:bg-stone-700 selection:text-white antialiased relative pb-28">
      {/* Ambient background studio lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[400px] bg-gradient-to-b from-indigo-500/20 via-sky-500/10 to-transparent blur-[120px]" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 border-b border-stone-800 bg-[#07090E]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-100" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] font-bold text-stone-100">
              STUDIO ARCHIVE // SECOND BRAIN
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400 hidden sm:inline">
              5 Distinct Concepts &amp; Paradigms
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300">
              PORT :3002
            </span>
          </div>
        </div>
      </header>

      {/* Main Studio Presentation */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-20">
        {/* Intro Banner */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 font-mono text-[11px] tracking-wider uppercase">
            <span>Frontend Design Lead Exploration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
            Five Radically Different Visions of a
            <span className="block italic text-stone-400 font-serif font-light mt-1">
              &ldquo;Second Brain&rdquo; Note Application.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            Every client rejection of generic SaaS landing pages comes down to a lack of genuine
            point of view. Rather than building five slight variations of the same high-contrast serif
            or dark-mode template, we designed five distinct philosophical, aesthetic, and
            mechanical interpretations of how the human brain externalizes thought.
          </p>

          <div className="pt-2 flex items-center gap-3 font-mono text-xs">
            <Link
              href="/1"
              className="px-5 py-2.5 rounded-lg bg-stone-100 text-stone-900 font-semibold hover:bg-white transition-colors"
            >
              Start Tour at /1 (Cortex) →
            </Link>
            <span className="text-stone-500">
              or use the floating capsule switcher below at any time.
            </span>
          </div>
        </div>

        {/* 5 Concept Cards Showcase */}
        <div className="mt-16 space-y-8">
          {ITERATION_DETAILS.map((iter) => {
            const isLightCard = iter.id === "2" || iter.id === "5";
            return (
              <div
                key={iter.id}
                className={`group relative rounded-2xl border p-6 sm:p-8 bg-gradient-to-br ${iter.bgClass} transition-all duration-300 shadow-xl overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Thesis */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="px-2.5 py-1 rounded font-mono text-xs font-bold"
                        style={{
                          backgroundColor: iter.badgeBg,
                          color: iter.badgeColor,
                        }}
                      >
                        ITERATION {iter.num}
                      </span>
                      <span
                        className={`text-xs font-mono uppercase tracking-wider ${
                          isLightCard ? "text-[#524F47]" : "text-stone-400"
                        }`}
                      >
                        Route: <strong>/{iter.id}</strong> (or /
                        {iter.id === "1"
                          ? "one"
                          : iter.id === "2"
                          ? "two"
                          : iter.id === "3"
                          ? "three"
                          : iter.id === "4"
                          ? "four"
                          : "five"}
                        )
                      </span>
                    </div>

                    <div>
                      <h2
                        className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                          isLightCard ? "text-[#16253B]" : "text-white"
                        }`}
                      >
                        {iter.name} // {iter.tagline}
                      </h2>
                      <div
                        className="text-xs font-mono font-medium uppercase tracking-wider mt-1"
                        style={{ color: iter.accent }}
                      >
                        {iter.paradigm}
                      </div>
                    </div>

                    <p
                      className={`text-base font-serif italic ${
                        isLightCard ? "text-[#3F3D36]" : "text-stone-200"
                      }`}
                    >
                      &ldquo;{iter.coreThesis}&rdquo;
                    </p>

                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t text-xs ${
                        isLightCard
                          ? "border-[#D8D2C5] text-[#524F47]"
                          : "border-stone-800 text-stone-400"
                      }`}
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold block mb-0.5">
                          Target Audience
                        </span>
                        <span>{iter.audience}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold block mb-0.5">
                          Typography System
                        </span>
                        <span>{iter.typography}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Signature Element & Direct Launch Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                    <div
                      className={`p-4 rounded-xl border text-xs ${
                        isLightCard
                          ? "bg-white/80 border-[#DDD6C7] text-[#22252A]"
                          : "bg-black/40 border-white/10 text-stone-300"
                      }`}
                    >
                      <div
                        className="font-mono text-[10px] uppercase tracking-wider font-bold mb-1.5"
                        style={{ color: iter.accent }}
                      >
                        ★ Signature Aesthetic Risk &amp; Interactive Moment
                      </div>
                      <p className="leading-relaxed font-sans">{iter.signatureElement}</p>
                    </div>

                    <Link
                      href={`/${iter.id}`}
                      className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all text-center flex items-center justify-center gap-2 ${
                        isLightCard
                          ? "bg-[#16253B] text-white hover:bg-[#D95338]"
                          : "bg-white text-stone-950 hover:bg-stone-200"
                      }`}
                      style={{
                        boxShadow: `0 4px 20px ${iter.badgeBg}`,
                      }}
                    >
                      <span>Launch Iteration {iter.num} (/{iter.id})</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Summary */}
        <section className="mt-20 pt-12 border-t border-stone-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Comparative Analysis
            </span>
            <h3 className="text-2xl font-normal text-white mt-1">
              At a Glance: The 5 Mental Models
            </h3>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border border-stone-800 rounded-xl overflow-hidden">
              <thead className="bg-stone-900 text-stone-300 border-b border-stone-800">
                <tr>
                  <th className="p-3.5">ITERATION</th>
                  <th className="p-3.5">CORE METAPHOR</th>
                  <th className="p-3.5">PRIMARY INTERACTION</th>
                  <th className="p-3.5">ORGANIZING PRINCIPLE</th>
                  <th className="p-3.5">DIRECT LINK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 bg-stone-950/60 text-stone-400">
                <tr>
                  <td className="p-3.5 text-cyan-400 font-bold">/1 Cortex</td>
                  <td className="p-3.5 text-stone-200">Living Neocortex</td>
                  <td className="p-3.5">Interactive Synaptic Node Constellation</td>
                  <td className="p-3.5">Semantic Vector Proximity</td>
                  <td className="p-3.5">
                    <Link href="/1" className="text-cyan-400 hover:underline">
                      Open /1 →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-orange-400 font-bold">/2 Atelier</td>
                  <td className="p-3.5 text-stone-200">Draftsman Pinboard</td>
                  <td className="p-3.5">Draggable Index Cards &amp; Calipers</td>
                  <td className="p-3.5">Method of Loci (Physical 2D Space)</td>
                  <td className="p-3.5">
                    <Link href="/2" className="text-orange-400 hover:underline">
                      Open /2 →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-emerald-400 font-bold">/3 Syntact</td>
                  <td className="p-3.5 text-stone-200">Plaintext Kernel OS</td>
                  <td className="p-3.5">In-Browser Command Terminal &amp; AST Transclude</td>
                  <td className="p-3.5">Sub-10ms Keyboard Zettelkasten</td>
                  <td className="p-3.5">
                    <Link href="/3" className="text-emerald-400 hover:underline">
                      Open /3 →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-purple-400 font-bold">/4 Mneme</td>
                  <td className="p-3.5 text-stone-200">River of Consciousness</td>
                  <td className="p-3.5">Time Scrubbing Crystallizer (Whisper → Bedrock)</td>
                  <td className="p-3.5">Circadian REM Sleep Ripening</td>
                  <td className="p-3.5">
                    <Link href="/4" className="text-purple-400 hover:underline">
                      Open /4 →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-amber-500 font-bold">/5 Tessera</td>
                  <td className="p-3.5 text-stone-200">Distillation Monolith</td>
                  <td className="p-3.5">Compression Crucible (3-Sentence Decision Memo)</td>
                  <td className="p-3.5">Ruthless Anti-Hoarding Signal Sieve</td>
                  <td className="p-3.5">
                    <Link href="/5" className="text-amber-500 hover:underline">
                      Open /5 →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Floating Iteration Switcher */}
      <IterationSwitcher />
    </div>
  );
}
