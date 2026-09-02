"use client";

import React from "react";
import Link from "next/link";
import {
  Graph,
  BookOpen,
  TerminalWindow,
  Flower,
  Sparkle,
  ArrowRight,
  SlidersHorizontal,
  Compass,
} from "@phosphor-icons/react";
import { ITERATIONS } from "../components/IterationSwitcher";

export default function HomeHub() {
  return (
    <div className="min-h-[100dvh] bg-[#090b11] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      {/* Top Banner */}
      <header className="border-b border-white/10 bg-[#090b11]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/15">
              <Compass size={20} weight="duotone" />
            </div>
            <div>
              <span className="font-semibold text-sm text-white block">
                Second Brain
              </span>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                5 Distinct Architectural Iterations
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/1"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-slate-200 transition-colors"
            >
              <span>Launch Iteration 01</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-300">
              <SlidersHorizontal size={14} />
              <span>Design Taste Exploration</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              Five distinct aesthetic architectures for personal knowledge.
            </h1>

            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Each iteration explores a radically different design philosophy, dial calibration, typography pairing, and interactive mental model for note-taking.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-white">Quick Jump:</span>
              {ITERATIONS.map((it) => (
                <Link
                  key={it.id}
                  href={it.path}
                  className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  /{it.id} ({it.name})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Iterations Grid */}
      <section className="py-20 bg-[#090b11]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITERATIONS.map((it) => {
              const IconComp = it.icon;
              return (
                <Link
                  key={it.id}
                  href={it.path}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="h-10 w-10 rounded-2xl flex items-center justify-center font-bold text-sm"
                        style={{
                          backgroundColor: `${it.accentColor}20`,
                          color: it.accentColor,
                          border: `1px solid ${it.accentColor}40`,
                        }}
                      >
                        <IconComp size={22} weight="duotone" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-bold">
                        ITERATION {it.number}
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {it.name}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {it.subtitle}
                    </p>

                    <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                      {it.id === "1" &&
                        "Dynamic spatial graph with live node clusters, bidirectional backlinks, and interactive knowledge mesh exploration."}
                      {it.id === "2" &&
                        "Distraction-free Swiss monograph with margin notes, strict typographic measure, and quiet solitary craft."}
                      {it.id === "3" &&
                        "Local-first Rust terminal with Vim modal navigation, SQLite semantic vectors, and 0.18ms query speeds."}
                      {it.id === "4" &&
                        "Serene Scandinavian ceramic bento with ambient audio journaling, circadian themes, and quiet sovereign local vault."}
                      {it.id === "5" &&
                        "Apple-adjacent ambient glass console with multi-modal voice and vision parsing on local Apple Silicon hardware."}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>VARIANCE: {it.dials.variance}</span>
                      <span>MOTION: {it.dials.motion}</span>
                      <span>DENSITY: {it.dials.density}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                      <span>Explore /{it.id}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-500">
        <p>Design Taste Frontend Exploration. 5 distinct second-brain architectures.</p>
        <p className="mt-2 text-slate-600 font-mono">Use the floating switcher dock in the bottom right corner on any page.</p>
      </footer>
    </div>
  );
}
