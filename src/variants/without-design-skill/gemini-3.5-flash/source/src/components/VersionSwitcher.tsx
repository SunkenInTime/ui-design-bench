"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  Layers, 
  Brain, 
  Terminal, 
  Compass, 
  Flower, 
  Zap, 
  BookOpen, 
  ArrowLeft,
  ChevronUp,
  ChevronDown
} from "lucide-react";

export function VersionSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const versions = [
    {
      path: "/1",
      label: "v1: Minimalist",
      desc: "Graph-driven spatial canvas",
      icon: Terminal,
      color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100",
      activeColor: "ring-2 ring-slate-400 bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border-slate-500",
      accent: "slate"
    },
    {
      path: "/2",
      label: "v2: Cybernetic HUD",
      desc: "Neon dark-mode mental upgrade",
      icon: Brain,
      color: "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50",
      activeColor: "ring-2 ring-cyan-500 bg-cyan-950/80 text-cyan-300 border-cyan-400",
      accent: "cyan"
    },
    {
      path: "/3",
      label: "v3: Cozy Garden",
      desc: "Warm sepia reflective space",
      icon: Flower,
      color: "bg-amber-50 text-emerald-800 border border-amber-200/60 dark:bg-stone-900 dark:text-emerald-400 dark:border-stone-800",
      activeColor: "ring-2 ring-emerald-600 bg-amber-100 text-emerald-900 dark:bg-stone-800 dark:text-emerald-300 border-emerald-500",
      accent: "emerald"
    },
    {
      path: "/4",
      label: "v4: Brutalist",
      desc: "Bold high-contrast rapid-dump",
      icon: Zap,
      color: "bg-yellow-400 text-black border-2 border-black font-black",
      activeColor: "ring-4 ring-black bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]",
      accent: "yellow"
    },
    {
      path: "/5",
      label: "v5: Executive Elite",
      desc: "Deep navy editorial strategist",
      icon: BookOpen,
      color: "bg-indigo-950 text-amber-200 border border-amber-500/30",
      activeColor: "ring-2 ring-amber-500 bg-indigo-900 text-amber-100 border-amber-400",
      accent: "indigo"
    }
  ];

  const currentVersion = versions.find((v) => v.path === pathname);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 max-w-[90vw] md:max-w-xl transition-all duration-300 ease-in-out">
      {/* Small handle/status indicator when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900/90 hover:bg-black text-white rounded-full shadow-lg backdrop-blur-md border border-zinc-800 transition-all text-xs cursor-pointer group"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
          <span>Switch Brain Designs</span>
          <ChevronUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
        </button>
      )}

      {/* Main Switcher Box */}
      {isOpen && (
        <div className="w-full flex flex-col bg-zinc-900/95 dark:bg-zinc-950/98 text-white rounded-2xl shadow-2xl border border-zinc-800 p-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800/80 px-2">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                Design Lab: Second Brain
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-1 text-[10px] bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 transition-colors"
              >
                <ArrowLeft className="w-2.5 h-2.5" />
                <span>Home</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Minimize switcher"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5 md:gap-2">
            {versions.map((ver) => {
              const isActive = ver.path === pathname;
              const Icon = ver.icon;
              return (
                <Link
                  key={ver.path}
                  href={ver.path}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all text-center relative group select-none ${
                    isActive ? ver.activeColor : "hover:bg-zinc-800/60 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-bold tracking-tight block md:hidden">v{ver.path.slice(1)}</span>
                  <span className="text-[11px] font-medium hidden md:block">{ver.label.split(":")[1].trim()}</span>

                  {/* Desktop Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-black text-white text-[10px] py-1 px-2.5 rounded shadow-xl border border-zinc-800 whitespace-nowrap z-50">
                    <span className="font-semibold block text-zinc-300">{ver.label}</span>
                    <span className="text-zinc-500 text-[9px]">{ver.desc}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {currentVersion && (
            <div className="mt-2 pt-1.5 border-t border-zinc-800/40 text-center">
              <span className="text-[9px] text-zinc-500">
                Active Style: <strong className="text-zinc-300">{currentVersion.label}</strong> — {currentVersion.desc}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
