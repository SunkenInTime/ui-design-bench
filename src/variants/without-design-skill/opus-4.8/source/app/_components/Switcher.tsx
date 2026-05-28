"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const iterations = [
  { slug: "/1", label: "Minimal" },
  { slug: "/2", label: "Aurora" },
  { slug: "/3", label: "Graph" },
  { slug: "/4", label: "Editorial" },
  { slug: "/5", label: "Bento" },
];

export default function Switcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Show design switcher"
        className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition hover:bg-black"
      >
        Designs
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-900/85 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl">
        <span className="pl-2.5 pr-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 select-none">
          Designs
        </span>
        {iterations.map((it, i) => {
          const active = pathname === it.slug;
          return (
            <Link
              key={it.slug}
              href={it.slug}
              title={it.label}
              className={`group relative flex h-8 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-white text-zinc-900"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{i + 1}</span>
              <span
                className={`hidden text-xs sm:inline ${
                  active ? "text-zinc-500" : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {it.label}
              </span>
            </Link>
          );
        })}
        <button
          onClick={() => setOpen(false)}
          aria-label="Hide design switcher"
          className="ml-0.5 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
