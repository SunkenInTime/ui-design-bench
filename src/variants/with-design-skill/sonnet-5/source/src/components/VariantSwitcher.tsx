"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { variants } from "../lib/variants";

export default function VariantSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const current = pathname?.replace(/^\//, "").split("/")[0];
  const active = variants.find((v) => v.id === current);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-2 [font-family:var(--font-switcher,system-ui)]"
    >
      <div
        id="variant-switcher-panel"
        className={`origin-bottom-right rounded-2xl border border-white/10 bg-[#15130f]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-150 motion-reduce:transition-none ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <p className="px-3 pb-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
          Five directions
        </p>
        <ul className="flex flex-col gap-0.5">
          {variants.map((v) => {
            const isActive = v.id === current;
            return (
              <li key={v.id}>
                <Link
                  href={`/${v.id}`}
                  onClick={() => setOpen(false)}
                  className={`group flex w-44 items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/55 hover:bg-white/5 hover:text-white/90"
                  }`}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold tabular-nums"
                    style={{
                      backgroundColor: isActive ? v.accent : "rgba(255,255,255,0.08)",
                      color: isActive ? "#15130f" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {v.id}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium">{v.name}</span>
                    <span className="text-[11px] text-white/35">{v.concept}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-1 border-t border-white/10 px-3 pt-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-1 text-[11px] text-white/40 underline-offset-2 hover:text-white/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            View all directions →
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="variant-switcher-panel"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-[#15130f]/95 py-2 pl-2 pr-3.5 text-white shadow-2xl shadow-black/40 backdrop-blur-md transition-transform duration-150 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 motion-reduce:transition-none active:scale-95"
      >
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums transition-colors"
          style={{ backgroundColor: active?.accent ?? "#888", color: "#15130f" }}
        >
          {active?.id ?? "?"}
        </span>
        <span className="text-xs font-medium tracking-wide text-white/85">
          {active ? active.name : "Directions"}
        </span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`shrink-0 text-white/50 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
