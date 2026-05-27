"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DESIGNS = [
  { id: "one", num: "1", name: "Editorial", subtitle: "The Archivist", path: "/one", color: "from-[#8C7A6B] to-[#5C4D41]" },
  { id: "two", num: "2", name: "Terminal", subtitle: "Cortex-OS", path: "/two", color: "from-emerald-500 to-green-700" },
  { id: "three", num: "3", name: "Organic", subtitle: "Mycelium", path: "/three", color: "from-teal-600 to-amber-700" },
  { id: "four", num: "4", name: "Brutalist", subtitle: "NEUGRID", path: "/four", color: "from-yellow-400 to-orange-600" },
  { id: "five", num: "5", name: "Luxury", subtitle: "Aether", path: "/five", color: "from-indigo-500 to-purple-800" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 font-sans select-none print:hidden">
      {/* Container */}
      <div className="flex flex-col items-center gap-2">
        {/* Toggle Button for minimizing the dock */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-6 items-center gap-1.5 rounded-full bg-zinc-900/95 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-zinc-400 border border-zinc-800 backdrop-blur-md shadow-lg transition-all hover:bg-zinc-800 hover:text-white"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"}`} />
          AESTHETIC DECK {isOpen ? "ACTIVE" : "HIDDEN"}
        </button>

        {isOpen && (
          <nav className="flex items-center gap-1 rounded-2xl bg-zinc-950/90 p-1.5 border border-zinc-800/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Quick Home Portal Link */}
            <Link
              href="/"
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                pathname === "/"
                  ? "bg-zinc-800 text-white shadow-inner"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
              title="Return to Portal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>

            <div className="h-6 w-px bg-zinc-800/80 mx-1" />

            {/* Design Buttons */}
            <div className="flex items-center gap-1.5">
              {DESIGNS.map((design) => {
                const isActive = pathname === design.path;
                return (
                  <Link
                    key={design.id}
                    href={design.path}
                    className={`group relative flex items-center gap-2.5 rounded-xl px-3.5 py-2 transition-all duration-300 ${
                      isActive
                        ? "bg-zinc-800 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)] border border-zinc-700/50"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {/* Tiny decorative indicator */}
                    <span className={`absolute top-1 right-1 h-1.5 w-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 ${isActive ? "opacity-100 bg-gradient-to-r " + design.color : "bg-zinc-500"}`} />

                    {/* Design Number and Titles */}
                    <div className="flex flex-col items-start leading-none">
                      <div className="flex items-center gap-1.5">
                        <span className={`flex h-4 w-4 items-center justify-center rounded-md text-[10px] font-bold ${
                          isActive
                            ? "bg-gradient-to-br " + design.color + " text-white"
                            : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-white"
                        }`}>
                          {design.num}
                        </span>
                        <span className="text-xs font-bold tracking-tight">{design.name}</span>
                      </div>
                      <span className="mt-0.5 text-[8px] font-medium text-zinc-500 group-hover:text-zinc-400">
                        {design.subtitle}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
