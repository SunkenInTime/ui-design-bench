"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SynapticNode {
  id: string;
  label: string;
  category: "biology" | "systems" | "philosophy" | "cognition";
  x: number; // percentage
  y: number; // percentage
  connections: string[];
  excerpt: string;
}

const NODES: SynapticNode[] = [
  {
    id: "mycelium",
    label: "Mycelial Routing",
    category: "biology",
    x: 22,
    y: 28,
    connections: ["distributed", "entropy"],
    excerpt: "Nutrient allocation across fungal hyphae without centralized pacemaker or single point of failure.",
  },
  {
    id: "distributed",
    label: "Byzantine Fault Consensus",
    category: "systems",
    x: 48,
    y: 22,
    connections: ["mycelium", "entropy", "metacognition"],
    excerpt: "Reaching agreement in asynchronous networks under arbitrary node crash and adversarial conditions.",
  },
  {
    id: "entropy",
    label: "Shannon Information Entropy",
    category: "cognition",
    x: 35,
    y: 65,
    connections: ["mycelium", "distributed", "memory"],
    excerpt: "Surprise value of a message: high entropy indicates maximum conceptual density and novelty.",
  },
  {
    id: "memory",
    label: "Hippocampal Consolidation",
    category: "cognition",
    x: 72,
    y: 35,
    connections: ["metacognition", "entropy"],
    excerpt: "Sharp-wave ripple replays converting labile short-term traces into neocortical crystal structures.",
  },
  {
    id: "metacognition",
    label: "Extended Mind Thesis",
    category: "philosophy",
    x: 65,
    y: 72,
    connections: ["memory", "distributed"],
    excerpt: "Clark & Chalmers: cognitive artifacts outside the skull are constitutionally part of the human mind.",
  },
];

const SYNTHESIS_MATRIX: Record<string, string> = {
  "mycelium-distributed":
    "Synthesis: Self-healing data networks modeled after hyphal nutrient shunts eliminate partition gossip overhead by 40%.",
  "distributed-mycelium":
    "Synthesis: Self-healing data networks modeled after hyphal nutrient shunts eliminate partition gossip overhead by 40%.",
  "entropy-distributed":
    "Synthesis: Dynamic consensus rate throttling proportional to incoming semantic entropy prevents cascading stale reads.",
  "distributed-entropy":
    "Synthesis: Dynamic consensus rate throttling proportional to incoming semantic entropy prevents cascading stale reads.",
  "memory-metacognition":
    "Synthesis: Notes as externalized neocortical replay buffers: active note retrieval functions as artificial sharp-wave ripples.",
  "metacognition-memory":
    "Synthesis: Notes as externalized neocortical replay buffers: active note retrieval functions as artificial sharp-wave ripples.",
  "mycelium-entropy":
    "Synthesis: Biological mycelium optimizes for minimal entropy dissipation across uncertain substrate gradients.",
  "entropy-mycelium":
    "Synthesis: Biological mycelium optimizes for minimal entropy dissipation across uncertain substrate gradients.",
  "distributed-metacognition":
    "Synthesis: Distributed multi-agent cognition: the individual note is not private storage, but an asynchronous peer protocol.",
  "metacognition-distributed":
    "Synthesis: Distributed multi-agent cognition: the individual note is not private storage, but an asynchronous peer protocol.",
};

export default function CortexLandingPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("mycelium");
  const [secondaryNodeId, setSecondaryNodeId] = useState<string>("distributed");
  const [firingCount, setFiringCount] = useState(14280);
  const [activeSimulationQuery, setActiveSimulationQuery] = useState(
    "How do biological feedback loops inform resilient database design?"
  );
  const [isSparking, setIsSparking] = useState(false);

  // Periodic firing pulse simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setFiringCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeNode = NODES.find((n) => n.id === selectedNodeId) || NODES[0];
  const pairKey = `${selectedNodeId}-${secondaryNodeId}`;
  const synthesisResult =
    SYNTHESIS_MATRIX[pairKey] ||
    "Cross-synaptic resonance active: Cortex detected 4 structural isomorphisms between these concepts in your local vault.";

  const handleNodeClick = (nodeId: string) => {
    if (nodeId === selectedNodeId) return;
    setIsSparking(true);
    setSecondaryNodeId(selectedNodeId);
    setSelectedNodeId(nodeId);
    setTimeout(() => setIsSparking(false), 600);
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-[#E2E8F0] selection:bg-[#00F2FE]/30 selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Background Neural Lattice Ambient Sheen */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[50vw] rounded-full bg-gradient-to-br from-[#142347]/40 via-[#0B3B60]/20 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-[#1E113B]/30 via-[#00F2FE]/10 to-transparent blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#00F2FE 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Telemetry Header */}
      <header className="relative z-20 border-b border-white/[0.07] backdrop-blur-md bg-[#070A12]/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#00F2FE]/10 border border-[#00F2FE]/40">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE] animate-pulse" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00F2FE] font-bold">
                CORTEX
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-slate-500">
                // v3.4 Synaptic Substrate
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Membrane: Local-First</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              <span>Active Synapses: {firingCount.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#interactive-lattice"
              className="px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white border border-white/10 rounded-lg hover:border-white/25 transition-colors"
            >
              Examine Graph
            </Link>
            <a
              href="#get-started"
              className="relative group px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#070A12] bg-[#00F2FE] hover:bg-[#38F9D7] transition-all shadow-[0_0_20px_rgba(0,242,254,0.4)]"
            >
              Ignite Cortex
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: The Thesis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] font-mono text-[11px] tracking-wider uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              Associative Cognitive Physics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
              Your thoughts are not files in folders.
              <span className="block mt-2 font-light text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#A5B4FC] to-[#FFFFFF]">
                They are living synapses.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Hierarchical folder trees force fluid ideas into rigid bureaucratic graves.
              Cortex operates like your actual neocortex: as you write, thoughts establish
              dendritic pathways, spark spontaneous cross-disciplinary connections, and
              resurface exactly when conceptual resonance peaks.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#get-started"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider text-[#070A12] bg-gradient-to-r from-[#00F2FE] to-[#38F9D7] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <span>Initialize Neural Substrate</span>
                <span>→</span>
              </a>
              <a
                href="#interactive-lattice"
                className="px-6 py-3.5 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Play With Synaptic Canvas</span>
              </a>
            </div>

            {/* Micro Metrics Strip */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-light text-white">0.0 ms</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">Manual Folder Categorization</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-light text-[#00F2FE]">100%</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">Local SQLite + CRDT Privacy</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-light text-[#A5B4FC]">∞</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">Spontaneous Cross-Links</div>
              </div>
            </div>
          </div>

          {/* Hero Right: Live Interactive Synaptic Constellation */}
          <div id="interactive-lattice" className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#0C1220]/90 border border-white/[0.12] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Simulation Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
                  <span>Interactive Synaptic Cluster</span>
                </div>
                <span className="text-[10px] text-slate-500">
                  Click any node to spark a bridge
                </span>
              </div>

              {/* Neural Canvas Visualizer */}
              <div className="relative h-[340px] sm:h-[380px] w-full my-4 rounded-xl bg-[#080C16] border border-white/[0.05] overflow-hidden select-none">
                {/* Synaptic SVG Axons */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="axonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {NODES.map((n) =>
                    n.connections.map((targetId) => {
                      const target = NODES.find((item) => item.id === targetId);
                      if (!target) return null;
                      const isFiringLine =
                        (selectedNodeId === n.id && secondaryNodeId === target.id) ||
                        (selectedNodeId === target.id && secondaryNodeId === n.id);

                      return (
                        <line
                          key={`${n.id}-${target.id}`}
                          x1={`${n.x}%`}
                          y1={`${n.y}%`}
                          x2={`${target.x}%`}
                          y2={`${target.y}%`}
                          stroke={isFiringLine ? "url(#axonGlow)" : "rgba(255,255,255,0.08)"}
                          strokeWidth={isFiringLine ? 2.5 : 1}
                          strokeDasharray={isFiringLine ? "4 4" : undefined}
                          className={isFiringLine ? "animate-pulse" : ""}
                        />
                      );
                    })
                  )}
                </svg>

                {/* Nodes */}
                {NODES.map((node) => {
                  const isPrimary = selectedNodeId === node.id;
                  const isSecondary = secondaryNodeId === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => handleNodeClick(node.id)}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className={`absolute z-10 group flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${
                        isPrimary
                          ? "bg-[#00F2FE]/20 border-[#00F2FE] text-white shadow-[0_0_20px_rgba(0,242,254,0.6)] scale-110"
                          : isSecondary
                          ? "bg-[#A5B4FC]/20 border-[#A5B4FC] text-[#A5B4FC] shadow-[0_0_15px_rgba(165,180,252,0.4)]"
                          : "bg-[#111827]/80 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-transform ${
                          isPrimary
                            ? "bg-[#00F2FE] scale-125"
                            : isSecondary
                            ? "bg-[#A5B4FC]"
                            : "bg-slate-500 group-hover:bg-[#00F2FE]"
                        }`}
                      />
                      <span>{node.label}</span>
                    </button>
                  );
                })}

                {/* Ambient Center Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
                  <div className="w-48 h-48 rounded-full border border-[#00F2FE]/10 animate-ping opacity-25" />
                </div>
              </div>

              {/* Synthesis Output Card */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isSparking
                    ? "bg-[#00F2FE]/15 border-[#00F2FE] shadow-[0_0_25px_rgba(0,242,254,0.3)]"
                    : "bg-[#080D1A] border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F2FE]">
                      Active Synaptic Bridge:
                    </span>
                    <span className="text-xs font-mono font-medium text-white">
                      {activeNode.label} ↔ {NODES.find((n) => n.id === secondaryNodeId)?.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Resonance 98.4%</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">{synthesisResult}</p>
                <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-[10px] text-slate-500">
                    Source Note: #{activeNode.id} ({activeNode.category})
                  </span>
                  <span className="text-[#A5B4FC] hover:underline cursor-pointer">
                    Synthesize Into Evergreen Note →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Why Hierarchical Trees Die */}
        <section className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">
              01 // The Fundamental Error
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white mt-2 leading-tight">
              Why every traditional note application becomes a graveyard.
            </h2>
            <p className="text-slate-300 mt-4 text-base leading-relaxed">
              When you capture an idea in 2024, you do not know which project in 2027 will need it.
              Forcing notes into folders like <code className="text-[#00F2FE] font-mono text-xs">/Projects/Crypto/Tax</code>{" "}
              severs the idea from its natural philosophical or biological twins.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way: Folders */}
            <div className="p-6 rounded-2xl bg-[#090E1A] border border-red-500/20 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-4">
                <span>✕ The Dead Folder Hierarchy</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">→</span>
                  <span>Requires decision-making at capture time (creates procrastination barrier)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">→</span>
                  <span>Ideas rot in folders you never open again</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">→</span>
                  <span>Zero cross-pollination between disparate hobbies, career, and research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">→</span>
                  <span>Search relies on remembering exact arbitrary keywords you used years ago</span>
                </li>
              </ul>
            </div>

            {/* The Cortex Way: Neural Substrate */}
            <div className="p-6 rounded-2xl bg-[#0C1527] border border-[#00F2FE]/30 relative overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.1)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-4">
                <span>✓ The Cortex Synaptic Mesh</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00F2FE]">✓</span>
                  <span>Zero-friction capture: write raw thought, topological embeddings map it instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00F2FE]">✓</span>
                  <span>Autonomous dendrite formation: connects to relevant notes across your lifetime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00F2FE]">✓</span>
                  <span>Active recall ripples: surfaces dormant thoughts when you start new writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00F2FE]">✓</span>
                  <span>Local semantic vectors compute conceptual distance in 4 milliseconds</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: The 4 Neural Mechanics */}
        <section className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">
              02 // Bio-Cognitive Engines
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white mt-2">
              Engineered like real neurobiology.
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              Four distinct sub-processors keep your knowledge alive without manual upkeep.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dendritic Auto-Linking",
                tag: "Embedding Topology",
                desc: "Never manually maintain bidirectional [[wiki-links]] again. Cortex detects implicit analogies and stitches them into active synapses.",
                accent: "#00F2FE",
              },
              {
                title: "Hebbian Co-Activation",
                tag: "Synaptic Weighting",
                desc: "Notes that are contemplated together strengthen their synaptic axon. Ideas that drift apart decay in weight without being deleted.",
                accent: "#A5B4FC",
              },
              {
                title: "Subconscious Synthesis",
                tag: "Overnight Consolidator",
                desc: "While you sleep, a local quantized model runs sharp-wave ripple passes, drafting novel cross-field essays waiting for you in the morning.",
                accent: "#38F9D7",
              },
              {
                title: "Resonance Serendipity",
                tag: "Latent Distance",
                desc: "When drafting a project plan, Cortex highlights orthogonal insights from your unrelated readings in anthropology, biology, or chess.",
                accent: "#FBBF24",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090E1B] border border-white/[0.07] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="text-[10px] font-mono uppercase tracking-wider mb-3 px-2 py-0.5 rounded inline-block"
                    style={{
                      backgroundColor: `${feature.accent}15`,
                      color: feature.accent,
                      border: `1px solid ${feature.accent}33`,
                    }}
                  >
                    {feature.tag}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{feature.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-slate-500">
                  Hardware accelerated on Apple Neural Engine & CUDA
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Live Synthesis Simulator Input */}
        <section className="mt-28 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#070A12] border border-[#00F2FE]/20 shadow-[0_0_50px_rgba(0,242,254,0.15)]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">
              03 // Real-Time Synaptic Query
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-white mt-2">
              Test how Cortex bridges disparate domains.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Select a prompt to watch Cortex query the local synaptic embeddings and surface unexpected connective tissue:
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "How do biological feedback loops inform resilient database design?",
              "What links architectural brutalism to Unix philosophy?",
              "How can sharp-wave ripples improve distributed cache invalidation?",
            ].map((sample) => (
              <button
                key={sample}
                onClick={() => setActiveSimulationQuery(sample)}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border text-left transition-all ${
                  activeSimulationQuery === sample
                    ? "bg-[#00F2FE]/20 border-[#00F2FE] text-white"
                    : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {sample}
              </button>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-xl bg-[#070B14] border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-slate-400">
              <span className="text-[#00F2FE]">QUERY: {activeSimulationQuery}</span>
              <span className="text-emerald-400">Computed in 3.8ms</span>
            </div>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">1.</span>
                <span>
                  <strong>Root Analogy:</strong> Autonomic nervous systems employ decentralized vagal tone modulation, mathematically identical to Raft leader heartbeat backoff.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#A5B4FC] font-bold">2.</span>
                <span>
                  <strong>Your Stored Vault Match:</strong> Note <code>#412-hyphal-quorum</code> (written 14 months ago) contains the exact equation you need for partition tolerance.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#38F9D7] font-bold">3.</span>
                <span>
                  <strong>Novel Synthesis Prompt:</strong> "Synthesize hyphal quorum sensing into a single Raft cluster consensus rule."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Access / Pricing with Rigorous Transparency */}
        <section id="get-started" className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">
              04 // Deployment Membranes
            </span>
            <h2 className="text-3xl font-normal text-white mt-2">
              You own your thoughts forever.
            </h2>
            <p className="text-slate-400 mt-2 text-xs font-mono">
              Pure local SQLite files. No proprietary cloud lock-in. Plaintext markdown exports.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Solo Tier */}
            <div className="p-8 rounded-2xl bg-[#090E1B] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Local Membrane</h3>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-300">
                    OPEN LOCAL
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-mono text-white">$0</span>
                  <span className="text-xs font-mono text-slate-400">/ forever free</span>
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Everything runs on your Mac or Linux silicon. Local vector embeddings, zero network packets sent, offline forever.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Unlimited local synaptic nodes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> On-device embedding models (GGUF / CoreML)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Bi-directional markdown sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Full SQLite raw database access
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-3 rounded-xl border border-white/20 text-xs font-mono font-semibold text-white hover:bg-white/10 transition-all">
                Download Local Membrane (.dmg / .AppImage)
              </button>
            </div>

            {/* Subconscious Synthesis Tier */}
            <div className="p-8 rounded-2xl bg-[#0C1527] border border-[#00F2FE]/40 flex flex-col justify-between shadow-[0_0_35px_rgba(0,242,254,0.15)] relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 rounded bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/30 text-[10px] font-mono">
                  RECOMMENDED
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Subconscious Synapse</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-mono text-white">$12</span>
                  <span className="text-xs font-mono text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Adds encrypted multi-device CRDT neural sync and overnight generative synthesis passes across multiple machines.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs font-mono text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Everything in Local Membrane
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Zero-Knowledge End-to-End Encrypted Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Overnight synthesis briefs delivered to phone
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00F2FE]">✓</span> Audio whisper transcription with semantic tagging
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#38F9D7] text-[#070A12] text-xs font-mono font-semibold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all">
                Start 30-Day Synthesis Trial
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Technical Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#05080E] py-12 px-6 text-slate-400 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE]" />
            <span className="text-white font-medium">CORTEX ARCHITECTURE</span>
            <span className="text-slate-600">//</span>
            <span className="text-slate-500">No telemetry. No surveillance. Local physics.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/with-design-skill/gemini-3.8-flash/2" className="hover:text-white transition-colors">
              Next: Iteration 02 (Atelier) →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
