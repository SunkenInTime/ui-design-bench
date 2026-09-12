"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sparkles,
  Share2,
  Feather,
  Terminal,
  BrainCircuit,
  Layers,
  ChevronRight,
  ChevronLeft,
  Grid,
  Info,
  X,
  ExternalLink
} from "lucide-react";

import { ITERATIONS, IterationInfo } from "../data/iterations";

export default function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Determine current active iteration (supports /1, /pages/1, /2, etc.)
  const activeNumber = (() => {
    const match = pathname.match(/(?:pages\/)?(\d)/);
    return match ? parseInt(match[1], 10) : null;
  })();

  const currentIter = ITERATIONS.find((item) => item.number === activeNumber) || ITERATIONS[0];

  // Keyboard navigation 1-5
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (["1", "2", "3", "4", "5"].includes(e.key) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        router.push(`/${e.key}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const prevIteration = activeNumber && activeNumber > 1 ? `/${activeNumber - 1}` : null;
  const nextIteration = activeNumber && activeNumber < 5 ? `/${activeNumber + 1}` : null;

  return (
    <>
      {/* Floating Floating Switcher Dock */}
      <aside
        aria-label="Design iteration switcher"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center select-none"
      >
        {/* Expanded Drawer / Menu */}
        {isOpen && (
          <div className="mb-3 w-[92vw] max-w-xl rounded-2xl border border-white/20 bg-neutral-900/90 p-4 text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold text-white">
                  5
                </span>
                <span className="text-sm font-semibold tracking-wide">
                  Second Brain Landing Page Iterations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition flex items-center gap-1"
                >
                  <Grid className="w-3 h-3" />
                  All Cards
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-neutral-400 hover:bg-white/10 hover:text-white"
                  title="Close switcher menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-3">
              {ITERATIONS.map((iter) => {
                const Icon = iter.icon;
                const isActive = activeNumber === iter.number;
                return (
                  <Link
                    key={iter.id}
                    href={iter.slug}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between rounded-xl p-2.5 transition-all ${
                      isActive
                        ? "bg-white/15 border border-white/30 text-white shadow-inner"
                        : "bg-white/5 border border-transparent hover:bg-white/10 text-neutral-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold shadow"
                        style={{
                          backgroundColor: iter.palette[0] === "#FAF7F2" || iter.palette[0] === "#F8FAFC" ? "#1E293B" : iter.palette[0],
                          color: iter.palette[1],
                          border: `1px solid ${iter.palette[1]}40`
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-200">
                            /{iter.number}
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {iter.name}
                          </span>
                          <span className="text-[10px] text-neutral-400">
                            — {iter.theme}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                          {iter.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                        {iter.badge}
                      </span>
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-neutral-400">
              <span>Press keys <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono">1</kbd> through <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono">5</kbd> anytime to switch</span>
              <span className="text-neutral-500">Port :3001</span>
            </div>
          </div>
        )}

        {/* The Pill Dock Bar */}
        <div className="flex items-center gap-1.5 rounded-full border border-neutral-700/60 bg-neutral-950/85 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl ring-1 ring-white/10 transition-all hover:ring-white/20">
          {/* Quick Prev Button */}
          {prevIteration ? (
            <Link
              href={prevIteration}
              aria-label="Previous iteration"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-white/10 hover:text-white transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
          ) : (
            <div className="w-2" />
          )}

          {/* Quick Jump Buttons 1-5 */}
          <div className="flex items-center gap-1 px-1">
            {ITERATIONS.map((iter) => {
              const isActive = activeNumber === iter.number;
              return (
                <Link
                  key={iter.id}
                  href={iter.slug}
                  title={`Iteration ${iter.number}: ${iter.name} (${iter.theme})`}
                  className={`relative flex h-8 px-2.5 items-center justify-center rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white text-neutral-950 font-semibold shadow-md scale-105"
                      : "text-neutral-300 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[11px]">v{iter.number}</span>
                  {isActive && (
                    <span className="ml-1.5 hidden sm:inline text-[11px] font-sans font-semibold tracking-tight">
                      {iter.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-white/20 mx-0.5" />

          {/* Toggle All Iterations Drawer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 text-xs font-medium text-white transition cursor-pointer"
            title="Explore all 5 iterations"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Switch Design</span>
            <span className="sm:hidden">Menu</span>
          </button>

          {/* Quick Next Button */}
          {nextIteration ? (
            <Link
              href={nextIteration}
              aria-label="Next iteration"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-white/10 hover:text-white transition"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="w-2" />
          )}
        </div>
      </aside>
    </>
  );
}
