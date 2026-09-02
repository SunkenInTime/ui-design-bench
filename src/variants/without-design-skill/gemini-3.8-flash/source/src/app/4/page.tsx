"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Sparkles,
  Bot,
  Cpu,
  Search,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Mic,
  MessageSquare,
  Lightbulb,
  Network,
  Zap,
  Fingerprint,
  Share2,
  Compass,
  Send,
  RefreshCw
} from "lucide-react";

interface SynthesisScenario {
  id: string;
  sourceA: string;
  sourceB: string;
  timeGap: string;
  emergentThesis: string;
  actionableStep: string;
  vectorSimilarity: string;
}

const SYNTHESIS_SCENARIOS: SynthesisScenario[] = [
  {
    id: "stoic-product",
    sourceA: "2023 Journal: Seneca on Anticipating Ruin & Premeditatio Malorum",
    sourceB: "Yesterday: SaaS User Onboarding Drop-off & Churn Analysis",
    timeGap: "3 years apart",
    emergentThesis: "Apply Premeditatio Malorum to UX onboarding: deliberately design failure state recovery so users never experience surprise friction or catastrophic cognitive load.",
    actionableStep: "Draft 'Pre-mortem onboarding playbook' and eliminate single-point user dropoffs.",
    vectorSimilarity: "0.89 cosine affinity"
  },
  {
    id: "biomimicry-systems",
    sourceA: "Book Highlight: Ant Colony Pheromone Foraging & Decentralization",
    sourceB: "RFC Draft: Microservice Cache Invalidation & Eventual Consistency",
    timeGap: "14 months apart",
    emergentThesis: "Stigmergy-driven caching: cache nodes leave synthetic digital pheromones that naturally decay, eliminating centralized Redis locking overhead.",
    actionableStep: "Prototype decay-based gossip algorithm for service workers.",
    vectorSimilarity: "0.93 cosine affinity"
  },
  {
    id: "habit-investing",
    sourceA: "2024 Memo: Dopamine Prediction Errors & Atomic Habit Loops",
    sourceB: "Current Project: Angel Investment Due Diligence Framework",
    timeGap: "9 months apart",
    emergentThesis: "Evaluate consumer startup viral loops not by TAM, but by dopamine reward prediction frequency and micro-friction barriers.",
    actionableStep: "Add 'Habit Loop Loop Score' as mandatory filter in portfolio checklist.",
    vectorSimilarity: "0.86 cosine affinity"
  }
];

export default function IterationFour() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("stoic-product");
  const [queryInput, setQueryInput] = useState("");
  const [simulatedChatAnswer, setSimulatedChatAnswer] = useState<string | null>(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const activeScenario = SYNTHESIS_SCENARIOS.find((s) => s.id === activeScenarioId) || SYNTHESIS_SCENARIOS[0];

  const handleAskBrain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    setIsSynthesizing(true);
    setSimulatedChatAnswer(null);

    setTimeout(() => {
      setIsSynthesizing(false);
      setSimulatedChatAnswer(
        `Synthesized from 12 notes across 2023–2026: You repeatedly gravitate toward local-first architecture and anti-fragile systems. Your strongest recurring thesis is that 'complexity must be pushed to the edges, keeping the core immutable.' Primary linked documents: [Distributed-Consensus.md], [2024-Reflection.md], [Taleb-Antifragile-Notes.md].`
      );
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#0A0718] text-neutral-100 selection:bg-purple-500/40 selection:text-purple-100">
      {/* Radiant Mesh Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[180px]" />
      </div>

      {/* Futuristic Floating Header */}
      <header className="sticky top-0 z-40 border-b border-purple-500/20 bg-[#0A0718]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/25">
              <div className="h-full w-full bg-[#0A0718] rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white flex items-center gap-2">
                MNEMONIC
                <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">
                  AI COGNITION
                </span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-300">
            <a href="#serendipity" className="hover:text-purple-400 transition">Autonomous Synthesis</a>
            <a href="#memory-graph" className="hover:text-purple-400 transition">Living Vector Engine</a>
            <a href="#voice" className="hover:text-purple-400 transition">Ambient Audio</a>
            <a href="#privacy" className="hover:text-purple-400 transition">Private On-Device LLM</a>
            <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>48,290 Vectors Indexed</span>
            </div>
            <a
              href="#activate"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-purple-600/30 transition cursor-pointer"
            >
              Activate Brain
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-8 backdrop-blur">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>The First Autonomous Cognitive Engine For Personal Knowledge</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Stop searching your notes.{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let them think together.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Traditional note tools are digital graveyards where good ideas go to die. Mnemonic AI constantly cross-pollinates your memories, surfacing forgotten breakthroughs the exact second you need them.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#activate"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:brightness-110 text-white font-semibold text-sm shadow-xl shadow-purple-600/25 transition-all hover:scale-105"
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Connect Your Knowledge Base</span>
          </a>
          <a
            href="#serendipity"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Test Live Serendipity Engine</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Runs On-Device via Apple Silicon / NPU
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Fingerprint className="w-4 h-4 text-purple-400" />
            Zero Training On User Data
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-cyan-400" />
            Real-time Semantic Clustering
          </span>
        </div>
      </section>

      {/* Interactive Serendipity & Synthesis Simulator */}
      <section id="serendipity" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-purple-500/30 bg-[#100D24]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-purple-400 animate-ping" />
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Autonomous Serendipity Simulator
                </h3>
                <p className="text-xs text-neutral-400">
                  Select two distant thoughts from your past to see how Mnemonic AI bridges them.
                </p>
              </div>
            </div>

            {/* Scenario Picker Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {SYNTHESIS_SCENARIOS.map((scenario, idx) => (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs transition ${
                    activeScenarioId === scenario.id
                      ? "bg-purple-600 text-white font-semibold shadow-md"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Pair 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Synthesis Cards Bridge Visualization */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Thought Card 1 */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                Memory Vector #01
              </span>
              <p className="mt-3 text-sm text-neutral-200 leading-relaxed font-sans">
                {activeScenario.sourceA}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>{activeScenario.timeGap}</span>
                <span className="text-purple-400">Archived Note</span>
              </div>
            </div>

            {/* AI Vector Affinity Bridge (Center 3 cols) */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center p-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 mb-2">
                <BrainCircuit className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-300">
                {activeScenario.vectorSimilarity}
              </span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                Semantic Synthesis Bridge
              </span>
            </div>

            {/* Thought Card 2 */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                Memory Vector #02
              </span>
              <p className="mt-3 text-sm text-neutral-200 leading-relaxed font-sans">
                {activeScenario.sourceB}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Current Attention</span>
                <span className="text-cyan-400">Active Buffer</span>
              </div>
            </div>
          </div>

          {/* Emergent Synthesis Result Box */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-black/60 border border-purple-500/40">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Synthesized Emergent Insight
            </div>
            <p className="text-sm sm:text-base text-white leading-relaxed font-sans">
              &quot;{activeScenario.emergentThesis}&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-300">
              <span className="text-cyan-300 font-mono">
                Suggested Action: {activeScenario.actionableStep}
              </span>
              <button
                onClick={() => {
                  const nextIdx = (SYNTHESIS_SCENARIOS.findIndex(s => s.id === activeScenarioId) + 1) % SYNTHESIS_SCENARIOS.length;
                  setActiveScenarioId(SYNTHESIS_SCENARIOS[nextIdx].id);
                }}
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 cursor-pointer"
              >
                <span>Cycle next bridge</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Interactive Chat Query to Your Second Brain */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              Or query your second brain directly:
            </h4>
            <form onSubmit={handleAskBrain} className="relative">
              <input
                type="text"
                placeholder="Ask your brain: 'What were my key principles for hiring in 2024?'"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                className="w-full h-12 pl-4 pr-28 rounded-xl bg-black/60 border border-purple-500/30 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
              >
                {isSynthesizing ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Send className="w-3 h-3" />
                )}
                <span>Ask Brain</span>
              </button>
            </form>

            {simulatedChatAnswer && (
              <div className="mt-4 p-4 rounded-xl bg-purple-950/30 border border-purple-500/40 text-xs sm:text-sm text-neutral-200 leading-relaxed animate-in fade-in">
                <span className="font-semibold text-purple-300 block mb-1">
                  Mnemonic Synthesis Response:
                </span>
                {simulatedChatAnswer}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section id="memory-graph" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Next-Gen Cognitive Architecture
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Memory That Evolves With You
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Built from scratch for local vector retrieval and automated cognitive synthesis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#120F24] border border-purple-500/20 hover:border-purple-500/50 transition">
            <div className="h-10 w-10 rounded-xl bg-purple-600/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Semantic Vector Clustering
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Every sentence you capture is transformed into dense vector representations. Notes are clustered by meaning rather than folder names or arbitrary tags.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-purple-400 font-mono">
              Continuous 1536-dim embeddings
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#120F24] border border-cyan-500/20 hover:border-cyan-500/50 transition">
            <div className="h-10 w-10 rounded-xl bg-cyan-600/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Ambient Audio Stream
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Talk freely during your morning walk. Mnemonic transcribes in real-time, extracts key action items, and connects ideas to past journal entries seamlessly.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-cyan-400 font-mono">
              Zero-latency Whisper v3
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#120F24] border border-emerald-500/20 hover:border-emerald-500/50 transition">
            <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              100% Private On-Device LLM
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Your most vulnerable personal journal entries and confidential client strategies never leave your hardware. Synthesize securely with zero cloud exposure.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-emerald-400 font-mono">
              Runs locally on Apple Neural Engine
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Access */}
      <section id="pricing" className="py-20 border-t border-purple-500/20 bg-[#080514]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Cognitive Plans
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Give Your Mind Infinite Recall
          </h2>
          <p className="mt-2 text-xs text-neutral-400">
            Choose whether you run purely on-device or utilize our high-powered hybrid cloud cluster.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* On-Device Plan */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#100D24]">
              <span className="text-xs font-mono uppercase text-neutral-400">Local Cognitive</span>
              <div className="mt-2 text-3xl font-bold text-white">$0</div>
              <p className="mt-1 text-xs text-neutral-400">Unlimited on-device embeddings and search.</p>
              <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Local semantic vector search (no size limits)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>On-device Whisper audio transcription</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Supports local Ollama / Llama 3 models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>100% private zero telemetry</span>
                </div>
              </div>
              <a
                href="#download"
                className="mt-8 block text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition"
              >
                Download On-Device App
              </a>
            </div>

            {/* Cloud Cognitive Plus */}
            <div className="p-6 rounded-2xl border-2 border-purple-500 bg-[#151030] relative shadow-xl shadow-purple-500/20">
              <span className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-[10px] uppercase">
                Most Powerful
              </span>
              <span className="text-xs font-mono uppercase text-purple-300">Mnemonic Pro Cloud</span>
              <div className="mt-2 text-3xl font-bold text-white">
                $14 <span className="text-xs font-normal text-neutral-400">/ mo</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">Continuous background autonomous synthesis.</p>
              <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Multi-year serendipity bridges generated daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Automated morning digest with relevant past memories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Claude 3.7 / GPT-5 cognitive reasoning bridges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Multi-device encrypted sync with vector cache</span>
                </div>
              </div>
              <a
                href="#trial"
                className="mt-8 block text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs shadow-md transition"
              >
                Start 14-Day Cognitive Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-purple-500/20 text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            <span className="font-bold text-white">Mnemonic AI</span>
            <span>— The Autonomous Cognitive Engine</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/without-design-skill/gemini-3.8-flash/5" className="hover:text-purple-300 transition text-purple-400">Iteration 5: MindPalace Spatial Studio →</Link>
            <a href="#privacy" className="hover:text-neutral-300 transition">Privacy & Ethics</a>
            <a href="#benchmarks" className="hover:text-neutral-300 transition">Embeddings Spec</a>
            <span>© 2026 Mnemonic Cognitive Systems</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
