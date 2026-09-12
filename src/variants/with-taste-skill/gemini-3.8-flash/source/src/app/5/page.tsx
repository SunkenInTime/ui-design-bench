"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkle,
  Waves,
  Eye,
  Cpu,
  ArrowsInLineVertical,
  Fingerprint,
  Cube,
  Broadcast,
  ArrowUpRight,
  DeviceMobile,
  Play,
  Article,
} from "@phosphor-icons/react";

/*
  DESIGN READ:
  Reading this as: Multimodal cognitive amplifier for polymaths and founders,
  with an Apple-adjacent ambient glass language, leaning toward deep cosmic obsidian #060813,
  layered refraction glass panels, electric cyan-cerulean #06b6d4 accent,
  and semantic stream audio/visual preview.

  DIALS:
  DESIGN_VARIANCE: 9
  MOTION_INTENSITY: 8
  VISUAL_DENSITY: 4
*/

type ModalStreamType = "voice" | "vision" | "synthesis";

export default function NebulaLandingPage() {
  const [activeModal, setActiveModal] = useState<ModalStreamType>("voice");

  return (
    <div className="min-h-[100dvh] bg-[#060813] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />

      {/* Glass Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060813]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/with-taste-skill/gemini-3.8-flash/5" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <Sparkle size={19} weight="duotone" />
            </div>
            <span className="font-semibold text-base tracking-tight text-white">
              Nebula
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#console" className="hover:text-cyan-400 transition-colors">
              Multimodal Engine
            </a>
            <a href="#prisms" className="hover:text-cyan-400 transition-colors">
              Cognitive Prisms
            </a>
            <a href="#silicon" className="hover:text-cyan-400 transition-colors">
              Silicon Hardware
            </a>
            <a href="#horizon" className="hover:text-cyan-400 transition-colors">
              Horizon
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#console"
              className="hidden sm:inline-flex text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#ignite"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-xs font-semibold text-slate-950 transition-all hover:brightness-110 active:scale-[0.98] shadow-lg shadow-cyan-500/20"
            >
              Ignite Nebula
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Fits Viewport, Asymmetric Split, max pt-16) */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-22 border-b border-white/10 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow 1 of 2 */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                <Broadcast size={14} weight="bold" />
                <span>Multimodal Cognitive Synthesizer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
                Amplify your intellect across modal dimensions.
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-[50ch]">
                The multimodal cognitive synthesizer merging voice, spatial sketches, video notes, and real-time semantic association.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#ignite"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300 active:scale-[0.98] shadow-xl shadow-cyan-400/25"
                >
                  Ignite Nebula
                </a>
                <a
                  href="#console"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl hover:bg-white/10 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <span>Witness Live</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Layered Refraction Glass Workspace (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl shadow-cyan-950/40">
                {/* 1px inner highlight edge */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

                {/* Header controls */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-cyan-300 text-[11px]">
                      MODAL STREAM: ONLINE
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    NEURAL ENGINE 82 FPS
                  </span>
                </div>

                {/* Tab selector */}
                <div className="mt-4 flex rounded-full bg-black/40 border border-white/10 p-1 text-xs">
                  <button
                    onClick={() => setActiveModal("voice")}
                    className={`flex-1 py-1.5 rounded-full transition-all text-center ${
                      activeModal === "voice"
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Audio Stream
                  </button>
                  <button
                    onClick={() => setActiveModal("vision")}
                    className={`flex-1 py-1.5 rounded-full transition-all text-center ${
                      activeModal === "vision"
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Spatial Canvas
                  </button>
                  <button
                    onClick={() => setActiveModal("synthesis")}
                    className={`flex-1 py-1.5 rounded-full transition-all text-center ${
                      activeModal === "synthesis"
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Neural Synthesis
                  </button>
                </div>

                {/* Interactive Modal Output View */}
                <div className="mt-4 rounded-2xl bg-black/50 border border-white/10 p-5 min-h-[190px]">
                  {activeModal === "voice" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>LIVE TRANSLATION</span>
                        <span className="text-cyan-400">LATENCY 42ms</span>
                      </div>
                      <div className="flex items-center gap-1.5 py-2">
                        {[40, 75, 30, 90, 60, 100, 45, 80, 65, 95, 50, 70, 85, 30, 60].map(
                          (h, i) => (
                            <span
                              key={i}
                              style={{ height: `${h * 0.3}px` }}
                              className="w-1.5 rounded-full bg-cyan-400/80 inline-block animate-pulse"
                            />
                          )
                        )}
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        "Synthesizing the interaction between generative neural diffusion and memory retrieval networks..."
                      </p>
                    </div>
                  )}

                  {activeModal === "vision" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>SPATIAL CLIPPING</span>
                        <span className="text-cyan-400">4 BOUNDING BOXES</span>
                      </div>
                      <div className="rounded-xl border border-dashed border-cyan-500/40 bg-cyan-950/20 p-4 text-center">
                        <Cube size={28} className="mx-auto text-cyan-400 mb-1" />
                        <span className="text-xs text-slate-300">
                          Whiteboard snapshot parsed into structured markdown blocks.
                        </span>
                      </div>
                    </div>
                  )}

                  {activeModal === "synthesis" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>CROSS-ASSOCIATION</span>
                        <span className="text-cyan-400">3 HYPOTHESES</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                          Found recurring conceptual bridge: [[quantum-entanglement]] and [[distributed-consensus]].
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>APPLE SILICON NATIVE ENGINE</span>
                  <span className="text-cyan-400 font-medium">100% PRIVATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Banner */}
      <section className="py-8 border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
            Adopted by visionary researchers and founders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Synaptic Quantum Lab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Aether Cognitive AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Horizon Autonomous Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Kinetics Foundry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Multimodal Engine Console (ID: console) */}
      <section id="console" className="py-20 border-b border-white/10 bg-[#060813]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Break free of keyboard typing constraints.
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-[60ch]">
              Thoughts arrive through speech, hand-drawn sketches, screen captures, and video clips. Nebula fuses all modalities into a coherent neural lattice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Waves size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Continuous Speech Stream
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Record 2-hour brainstorming sessions. Nebula creates timestamped bookmarks, extracts action items, and connects discussed topics to past notes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                Whisper on-device neural model
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Eye size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Spatial Vision Parsing
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Snap photos of handwritten whiteboard diagrams or book pages. Optical OCR and geometry detection translate arrows into actual graph connections.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                Vectorized graph extraction
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Cpu size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Autonomous Synthesis
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Nebula continually operates in background standby. It notices thematic links between your audio notes and your reading highlights.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                Sub-conscious synthesis daemon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 4 Cognitive Prisms (ID: prisms) */}
      <section id="prisms" className="py-20 border-b border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            {/* Eyebrow 2 of 2 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-4">
              <Cube size={14} weight="bold" />
              <span>Cognitive Architecture</span>
            </div>
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Four prisms for organizing human memory.
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Each prism converts raw unstructured sensory signals into lasting mental models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-cyan-400 font-semibold">PRISM I</div>
              <h3 className="mt-3 text-xl font-semibold text-white">Sensory Transduction</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Raw audio, typed prose, and visual images are converted into dense vector embeddings locally without cloud processing.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-cyan-400 font-semibold">PRISM II</div>
              <h3 className="mt-3 text-xl font-semibold text-white">Topological Associator</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Ideas occupy coordinates in n-dimensional thought space. Similar concepts naturally cluster together without rigid tag hierarchies.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-cyan-400 font-semibold">PRISM III</div>
              <h3 className="mt-3 text-xl font-semibold text-white">Spatial Mind Palaces</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Step inside interactive 2D and 3D visual environments where cards can be arranged according to your spatial memory intuition.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-cyan-400 font-semibold">PRISM IV</div>
              <h3 className="mt-3 text-xl font-semibold text-white">Universal Export Matrix</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Publish interactive mind maps to the web with password protection or export comprehensive monographs to clean Markdown and PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Hardware Integration & Silicon Performance (ID: silicon) */}
      <section id="silicon" className="py-20 border-b border-white/10 bg-[#060813]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Tuned for modern silicon architectures.
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Built in Metal and Swift to exploit Apple Neural Engine and modern PC GPU capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 font-mono">16 Core</div>
              <div className="text-sm font-semibold text-white mt-2">Neural Engine</div>
              <div className="text-xs text-slate-500 mt-1">Zero cloud latency inference</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 font-mono">120 Hz</div>
              <div className="text-sm font-semibold text-white mt-2">ProMotion Rendering</div>
              <div className="text-xs text-slate-500 mt-1">Fluid spatial graph panning</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 font-mono">0 Egress</div>
              <div className="text-sm font-semibold text-white mt-2">Cryptographic Seal</div>
              <div className="text-xs text-slate-500 mt-1">Hardware Secure Enclave</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Polymath Letters (Clean Attribution, No Em-dashes) */}
      <section className="py-20 border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Perspectives from early adopters.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm text-slate-300 leading-relaxed">
                "Nebula completely changed how I prepare venture diligence. Being able to record founder calls, photograph whiteboards, and watch the connections emerge in real time is astonishing."
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs">
                <span className="font-semibold text-white">Alexander Vance</span>
                <span className="text-slate-500 block">General Partner, Deep Horizon Capital</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm text-slate-300 leading-relaxed">
                "The Apple Silicon optimization is tangible. The app stays completely cool and battery-efficient even while parsing hundreds of hours of spoken lecture notes."
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs">
                <span className="font-semibold text-white">Mira Thorne</span>
                <span className="text-slate-500 block">Cognitive Science Fellow, Stanford</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Ambient Horizon CTA (ID: ignite, horizon) */}
      <section id="ignite" className="py-22 bg-[#060813] relative">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-white/[0.06] to-transparent p-12 sm:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
            <div className="h-12 w-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-5 border border-cyan-400/40">
              <Sparkle size={24} weight="duotone" />
            </div>
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Step into the future of memory.
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-md mx-auto">
              Download Nebula Studio for macOS Sonoma and iPadOS. Unlock unlimited multimodal streams.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-400/25 active:scale-[0.98]"
              >
                Download Nebula Studio
              </a>
              <a
                href="#specs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Inspect Technical Architecture
              </a>
            </div>
          </div>

          <footer id="horizon" className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>NEBULA COGNITIVE SYSTEMS. ACCELERATED BY LOCAL SILICON.</div>
            <div className="flex items-center gap-6">
              <a href="#console" className="hover:text-cyan-400">MULTIMODAL</a>
              <a href="#silicon" className="hover:text-cyan-400">HARDWARE</a>
              <a href="#ignite" className="hover:text-cyan-400">DOWNLOAD</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
