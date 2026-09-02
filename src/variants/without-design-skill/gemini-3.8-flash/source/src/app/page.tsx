import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Share2,
  Feather,
  Terminal,
  BrainCircuit,
  Layers,
  ArrowRight,
  ExternalLink,
  Laptop,
  CheckCircle2
} from "lucide-react";
import { ITERATIONS } from "../data/iterations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090E] text-neutral-100 selection:bg-cyan-500/30">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        {/* Header Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-6 backdrop-blur">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>5 Second Brain Landing Page Archetypes</span>
            <span className="text-neutral-500">•</span>
            <span className="text-emerald-400 font-mono">Port :3001</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            The Second Brain Design Lab
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Five completely distinct design philosophies, visual languages, and interactive experiences for the future of knowledge management.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400 font-mono">
            <span>Use the floating switcher dock at the bottom</span>
            <span>•</span>
            <span>Or press keys <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-semibold">1</kbd>–<kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-semibold">5</kbd> anytime</span>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITERATIONS.map((iter) => {
            const Icon = iter.icon;
            return (
              <Link
                key={iter.id}
                href={iter.slug}
                className="group rounded-3xl border border-white/10 bg-[#0C101A]/80 p-6 backdrop-blur-xl hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center font-bold text-white shadow"
                        style={{
                          backgroundColor: iter.palette[0] === "#FAF7F2" || iter.palette[0] === "#F8FAFC" ? "#1E293B" : iter.palette[0],
                          color: iter.palette[1],
                          border: `1px solid ${iter.palette[1]}50`
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400">
                          Iteration 0{iter.number}
                        </span>
                        <h2 className="text-lg font-bold text-white leading-tight">
                          {iter.name}
                        </h2>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {iter.badge}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-semibold text-neutral-200">
                      {iter.theme}
                    </span>
                    <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                      {iter.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                      Visual Identity:
                    </span>
                    <p className="text-[11px] text-neutral-300">
                      {iter.style}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-cyan-400 group-hover:text-cyan-300">
                  <span className="font-mono">Explore /{iter.number}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Quick Info / Architecture Card */}
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                All 5 Iterations Ready
              </span>
              <h2 className="mt-2 text-lg font-bold text-white">
                Shared Switcher System
              </h2>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Every page contains the floating switcher bar and responds to keyboard shortcuts. You can effortlessly cycle through all five iterations to evaluate layout, typography, and interaction patterns.
              </p>
              <div className="mt-4 space-y-1.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Accessible via <code className="text-cyan-300">/1</code> to <code className="text-cyan-300">/5</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Also aliased via <code className="text-cyan-300">/pages/1</code> to <code className="text-cyan-300">/pages/5</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Running on port <code className="text-amber-400">:3001</code></span>
                </div>
              </div>
            </div>

            <Link
              href="/1"
              className="mt-6 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-center text-xs font-semibold text-white transition flex items-center justify-center gap-2"
            >
              <span>Launch Iteration 1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
