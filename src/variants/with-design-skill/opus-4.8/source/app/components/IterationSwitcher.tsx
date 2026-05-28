"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = [
  { n: 1, name: "Synapse", note: "Midnight neural", accent: "#f5b642" },
  { n: 2, name: "Marginalia", note: "Paper & ink", accent: "#c8472f" },
  { n: 3, name: "Stack", note: "Brutalist terminal", accent: "#c6ff3a" },
  { n: 4, name: "Verdant", note: "Knowledge garden", accent: "#5b8c6e" },
  { n: 5, name: "Helios", note: "Retro-future solar", accent: "#ff7a3c" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();

  const match = pathname?.match(/^\/([1-5])$/);
  const current = match ? Number(match[1]) : null;

  // Hide the switcher on routes that aren't iterations (e.g. while redirecting).
  if (current === null) return null;

  const active = ITERATIONS.find((i) => i.n === current)!;

  return (
    <div
      className="fixed inset-x-0 bottom-5 z-[9999] flex justify-center px-4"
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/12 bg-black/55 p-1.5 pr-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        {/* Current label */}
        <div className="flex items-center gap-2.5 rounded-full px-3 py-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full transition-all duration-300"
            style={{
              background: active.accent,
              boxShadow: `0 0 12px ${active.accent}`,
            }}
          />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
              Iteration {String(current).padStart(2, "0")}
            </span>
            <span className="mt-0.5 text-[13px] font-semibold text-white">
              {active.name}
            </span>
          </span>
        </div>

        <div className="mx-0.5 h-7 w-px bg-white/10" />

        {/* Number pips */}
        <nav className="flex items-center gap-0.5">
          {ITERATIONS.map((it) => {
            const isActive = it.n === current;
            return (
              <Link
                key={it.n}
                href={`/${it.n}`}
                aria-label={`Iteration ${it.n}: ${it.name}`}
                className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{
                  background: isActive ? "rgba(255,255,255,0.12)" : undefined,
                }}
              >
                <span
                  className="text-[13px] font-semibold tabular-nums transition-colors"
                  style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}
                >
                  {it.n}
                </span>
                <span
                  className="absolute -top-1 h-1 w-1 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: it.accent }}
                />
                {/* Tooltip */}
                <span className="pointer-events-none absolute bottom-full mb-3 hidden whitespace-nowrap rounded-md bg-white px-2 py-1 text-[11px] font-medium text-black opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
                  {it.name}
                  <span className="ml-1.5 text-black/45">{it.note}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
