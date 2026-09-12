"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export interface IterationInfo {
  id: string;
  num: string;
  name: string;
  tagline: string;
  paradigm: string;
  theme: {
    accent: string;
    bgBadge: string;
    textBadge: string;
    border: string;
  };
}

export const ITERATIONS: IterationInfo[] = [
  {
    id: "1",
    num: "01",
    name: "CORTEX",
    tagline: "Bioluminescent Synaptic Graph",
    paradigm: "Associative Neural Substrate",
    theme: {
      accent: "#00F2FE",
      bgBadge: "rgba(0, 242, 254, 0.12)",
      textBadge: "#00F2FE",
      border: "rgba(0, 242, 254, 0.3)",
    },
  },
  {
    id: "2",
    num: "02",
    name: "ATELIER",
    tagline: "Spatial Drafting Workbench",
    paradigm: "Tactile Polymath Pinboard",
    theme: {
      accent: "#E2583E",
      bgBadge: "rgba(226, 88, 62, 0.12)",
      textBadge: "#E2583E",
      border: "rgba(226, 88, 62, 0.3)",
    },
  },
  {
    id: "3",
    num: "03",
    name: "SYNTACT",
    tagline: "Hypertext Plaintext Kernel",
    paradigm: "Sub-10ms Keyboard Zettelkasten",
    theme: {
      accent: "#10B981",
      bgBadge: "rgba(16, 185, 129, 0.12)",
      textBadge: "#10B981",
      border: "rgba(16, 185, 129, 0.3)",
    },
  },
  {
    id: "4",
    num: "04",
    name: "MNEME",
    tagline: "Stream of Consciousness River",
    paradigm: "Chronological Crystallization",
    theme: {
      accent: "#B388FF",
      bgBadge: "rgba(179, 136, 255, 0.15)",
      textBadge: "#B388FF",
      border: "rgba(179, 136, 255, 0.3)",
    },
  },
  {
    id: "5",
    num: "05",
    name: "TESSERA",
    tagline: "Ruthless Distillation Monolith",
    paradigm: "Anti-Hoarding Synthesis Engine",
    theme: {
      accent: "#C25E3E",
      bgBadge: "rgba(194, 94, 62, 0.15)",
      textBadge: "#C25E3E",
      border: "rgba(194, 94, 62, 0.3)",
    },
  },
];

export default function IterationSwitcher({ currentId }: { currentId?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHotkeysHelp, setShowHotkeysHelp] = useState(false);

  // Extract iteration id from path if not explicitly provided
  const activeId =
    currentId ||
    ITERATIONS.find((it) => pathname === `/${it.id}` || pathname === `/iteration-${it.id}`)?.id ||
    "";

  // Keyboard shortcut: Press 1-5 to navigate immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (["1", "2", "3", "4", "5"].includes(e.key)) {
        router.push(`/${e.key}`);
      }
      if (e.key === "?" && (e.metaKey || e.ctrlKey || e.shiftKey)) {
        setIsExpanded((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <aside
      aria-label="Design Iteration Switcher"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center max-w-[94vw] transition-all duration-300"
    >
      {/* Expanded drawer showing details of all 5 iterations */}
      {isExpanded && (
        <div className="mb-3 w-[min(680px,94vw)] rounded-2xl bg-stone-950/90 text-stone-100 p-4 sm:p-5 backdrop-blur-xl border border-stone-800 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-stone-400">
                Design Lead Studio // 5 Second-Brain Paradigms
              </span>
              <h4 className="text-sm font-medium text-stone-200">
                Radically Different Mental Models & Aesthetics
              </h4>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-stone-400 hover:text-white p-1 rounded-md text-xs font-mono transition-colors"
              aria-label="Close iteration drawer"
            >
              ✕ Esc
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {ITERATIONS.map((iter) => {
              const isActive = activeId === iter.id;
              return (
                <Link
                  key={iter.id}
                  href={`/${iter.id}`}
                  onClick={() => setIsExpanded(false)}
                  className={`group relative flex flex-col justify-between p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-stone-900 border-stone-500 shadow-md ring-1 ring-stone-400/30"
                      : "bg-stone-900/50 border-stone-800/80 hover:bg-stone-900 hover:border-stone-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: iter.theme.bgBadge,
                          color: iter.theme.textBadge,
                        }}
                      >
                        {iter.num}
                      </span>
                      <kbd className="text-[9px] font-mono text-stone-500 border border-stone-800 rounded px-1">
                        {iter.id}
                      </kbd>
                    </div>
                    <div className="font-semibold text-xs text-stone-100 group-hover:text-white">
                      {iter.name}
                    </div>
                    <div className="text-[10px] text-stone-400 line-clamp-2 mt-1 leading-snug">
                      {iter.tagline}
                    </div>
                  </div>
                  <div
                    className="mt-2 text-[9px] font-mono uppercase tracking-wider"
                    style={{ color: iter.theme.accent }}
                  >
                    {iter.paradigm}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
            <span className="font-mono">
              Press keys <kbd className="px-1 py-0.5 bg-stone-800 rounded text-stone-200">1</kbd>–
              <kbd className="px-1 py-0.5 bg-stone-800 rounded text-stone-200">5</kbd> on any screen to jump
            </span>
            <Link
              href="/"
              className="text-stone-300 hover:text-white underline underline-offset-4 decoration-stone-600 transition-colors"
            >
              All Iterations Index →
            </Link>
          </div>
        </div>
      )}

      {/* Compact Floating Capsule Bar */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-950/85 text-stone-200 backdrop-blur-md border border-stone-800/90 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:border-stone-700 transition-all">
        {/* Gallery index shortcut */}
        <Link
          href="/"
          className="px-2.5 py-1 text-xs font-mono text-stone-400 hover:text-white hover:bg-stone-900 rounded-full transition-colors flex items-center gap-1"
          title="All iterations index overview"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <span className="hidden sm:inline">Index</span>
        </Link>

        <div className="h-4 w-px bg-stone-800 my-auto" />

        {/* The 5 buttons */}
        <div className="flex items-center gap-1">
          {ITERATIONS.map((iter) => {
            const isActive = activeId === iter.id;
            return (
              <Link
                key={iter.id}
                href={`/${iter.id}`}
                className={`group relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-stone-800 text-white shadow-inner font-semibold"
                    : "text-stone-400 hover:text-stone-100 hover:bg-stone-900/80"
                }`}
                style={
                  isActive
                    ? {
                        border: `1px solid ${iter.theme.border}`,
                        boxShadow: `0 0 12px ${iter.theme.bgBadge}`,
                      }
                    : {}
                }
                title={`${iter.name} (${iter.tagline}) - Press key ${iter.id}`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-125"
                  style={{
                    backgroundColor: isActive ? iter.theme.accent : "rgba(255,255,255,0.3)",
                  }}
                />
                <span>/{iter.id}</span>
                <span className="hidden md:inline font-sans text-[11px] opacity-80 font-normal">
                  {iter.name}
                </span>
                <kbd
                  className={`hidden lg:inline text-[9px] px-1 rounded opacity-50 ${
                    isActive ? "bg-stone-700 text-stone-200" : "bg-stone-900 text-stone-500"
                  }`}
                >
                  {iter.id}
                </kbd>
              </Link>
            );
          })}
        </div>

        <div className="h-4 w-px bg-stone-800 my-auto" />

        {/* Drawer expand toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1.5 rounded-full transition-colors ${
            isExpanded
              ? "bg-stone-800 text-white"
              : "text-stone-400 hover:text-white hover:bg-stone-900"
          }`}
          title="Compare concepts & philosophy"
          aria-label="Toggle iteration drawer"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
