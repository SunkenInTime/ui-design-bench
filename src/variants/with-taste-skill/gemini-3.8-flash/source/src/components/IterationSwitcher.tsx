"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Graph,
  BookOpen,
  TerminalWindow,
  Flower,
  Sparkle,
  CaretRight,
  CaretLeft,
  SlidersHorizontal,
  X,
} from "@phosphor-icons/react";

export interface IterationMeta {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  path: string;
  vibe: string;
  dials: {
    variance: number;
    motion: number;
    density: number;
  };
  accentColor: string;
  icon: React.ElementType;
}

export const ITERATIONS: IterationMeta[] = [
  {
    id: "1",
    number: "01",
    name: "Synapse",
    subtitle: "Spatial Graph & Knowledge Mesh",
    path: "/1",
    vibe: "Kinetic Dark Slate & Emerald",
    dials: { variance: 8, motion: 7, density: 4 },
    accentColor: "#10b981",
    icon: Graph,
  },
  {
    id: "2",
    number: "02",
    name: "Atelier",
    subtitle: "Deep Craft Monograph & Editorial",
    path: "/2",
    vibe: "Austere Swiss Paper & Cobalt",
    dials: { variance: 6, motion: 4, density: 3 },
    accentColor: "#2563eb",
    icon: BookOpen,
  },
  {
    id: "3",
    number: "03",
    name: "Kortex // 0x",
    subtitle: "Neural Terminal & Keyboard Command",
    path: "/3",
    vibe: "High-Density Carbon & Phosphor Amber",
    dials: { variance: 7, motion: 6, density: 9 },
    accentColor: "#f59e0b",
    icon: TerminalWindow,
  },
  {
    id: "4",
    number: "04",
    name: "Mindwell",
    subtitle: "Tactile Ceramic & Organic Bento",
    path: "/4",
    vibe: "Scandinavian Mist & Deep Spruce",
    dials: { variance: 7, motion: 5, density: 4 },
    accentColor: "#059669",
    icon: Flower,
  },
  {
    id: "5",
    number: "05",
    name: "Nebula",
    subtitle: "Glassmorphic Synthesizer & Horizon",
    path: "/5",
    vibe: "Cosmic Obsidian & Refraction Cyan",
    dials: { variance: 9, motion: 8, density: 4 },
    accentColor: "#06b6d4",
    icon: Sparkle,
  },
];

export function IterationSwitcher() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  // Determine current active iteration
  const activeIter =
    ITERATIONS.find(
      (it) => pathname === it.path || pathname === `/one` && it.id === "1" ||
             pathname === `/two` && it.id === "2" ||
             pathname === `/three` && it.id === "3" ||
             pathname === `/four` && it.id === "4" ||
             pathname === `/five` && it.id === "5"
    ) || ITERATIONS[0];

  // Hotkey support for switching 1-5
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key >= "1" && e.key <= "5" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const target = ITERATIONS.find((it) => it.id === e.key);
        if (target) {
          window.location.href = target.path;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside
      aria-label="Design iteration switcher"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end select-none font-sans"
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-84 sm:w-96 rounded-2xl bg-zinc-950/90 text-white p-4 shadow-2xl backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-emerald-400" />
                <span className="text-xs font-semibold tracking-wide uppercase text-zinc-300">
                  5 Design Iterations
                </span>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close switcher"
              >
                <X size={15} />
              </button>
            </div>

            <p className="text-[11px] text-zinc-400 mt-2 mb-3 leading-relaxed">
              Press number keys 1-5 on your keyboard or select a concept below.
            </p>

            <div className="space-y-1.5">
              {ITERATIONS.map((it) => {
                const isActive = activeIter.id === it.id;
                const IconComponent = it.icon;
                return (
                  <Link
                    key={it.id}
                    href={it.path}
                    onClick={() => setExpanded(false)}
                    className={`group flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-white/15 border border-white/20 text-white"
                        : "hover:bg-white/5 text-zinc-400 hover:text-zinc-200 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                        style={{
                          backgroundColor: isActive
                            ? it.accentColor
                            : "rgba(255, 255, 255, 0.08)",
                          color: isActive ? "#000" : "#fff",
                        }}
                      >
                        {it.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">
                            {it.name}
                          </span>
                          <span className="text-[10px] text-zinc-400">
                            {it.subtitle}
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-2 mt-0.5">
                          <span>V:{it.dials.variance}</span>
                          <span>M:{it.dials.motion}</span>
                          <span>D:{it.dials.density}</span>
                          <span className="text-zinc-600">|</span>
                          <span className="truncate max-w-[140px]">{it.vibe}</span>
                        </div>
                      </div>
                    </div>
                    <CaretRight
                      size={14}
                      className={`transition-transform group-hover:translate-x-0.5 ${
                        isActive ? "text-white opacity-100" : "text-zinc-600 opacity-40"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent HUD Pill */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50 text-white">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          title="Toggle iteration details"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: activeIter.accentColor }}
          />
          <span className="font-semibold text-white">#{activeIter.number}</span>
          <span className="hidden sm:inline text-zinc-400 text-[11px]">
            {activeIter.name}
          </span>
          <SlidersHorizontal size={13} className="text-zinc-400 ml-1" />
        </button>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* 1 to 5 Quick jump buttons */}
        <div className="flex items-center gap-1">
          {ITERATIONS.map((it) => {
            const isActive = activeIter.id === it.id;
            return (
              <Link
                key={it.id}
                href={it.path}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-white text-zinc-950 font-bold shadow-sm scale-105"
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
                title={`Switch to Iteration ${it.number}: ${it.name} (${it.subtitle})`}
              >
                {it.id}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
