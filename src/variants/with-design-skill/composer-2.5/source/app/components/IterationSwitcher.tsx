"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const ITERATIONS = [
  { path: "/1", num: 1, name: "Mycelium", mood: "Organic neural" },
  { path: "/2", num: 2, name: "RAW_NOTE", mood: "Brutalist" },
  { path: "/3", num: 3, name: "Lumen", mood: "Art deco" },
  { path: "/4", num: 4, name: "NEURALINK", mood: "Retro-future" },
  { path: "/5", num: 5, name: "Folio", mood: "Editorial" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const active =
    ITERATIONS.find((item) => item.path === pathname) ?? ITERATIONS[0];
  const visible = ITERATIONS.some((item) => item.path === pathname);

  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  if (!visible) return null;

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2"
    >
      <div
        className={`overflow-hidden rounded-2xl border border-white/20 bg-black/80 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
          open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <p className="px-4 pt-3 pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
          Design iterations
        </p>
        <ul className="pb-2">
          {ITERATIONS.map((item) => {
            const isActive = item.path === active.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-white/10 text-white/80"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[11px] text-white/45">
                      {item.mood}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Switch design iteration"
        className="group flex items-center gap-2 rounded-full border border-white/25 bg-black/85 px-4 py-2.5 text-sm font-medium text-white shadow-xl backdrop-blur-md transition hover:border-white/40 hover:bg-black"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
          {active.num}
        </span>
        <span className="hidden sm:inline">{active.name}</span>
        <svg
          className={`h-4 w-4 text-white/60 transition-transform duration-300 group-hover:text-white/90 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
