"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ITERATIONS } from "./iterations";

const ACCENT_ACTIVE: Record<string, string> = {
  emerald: "bg-emerald-500 text-white",
  lime: "bg-lime-400 text-zinc-950",
  cobalt: "bg-blue-600 text-white",
  rose: "bg-rose-500 text-white",
  blue: "bg-blue-500 text-white",
};

export function IterationSwitcher() {
  const pathname = usePathname();
  const current = ITERATIONS.find((it) => it.href === pathname) ?? ITERATIONS[0];
  const currentIndex = current.index - 1;
  const prev = ITERATIONS[(currentIndex - 1 + ITERATIONS.length) % ITERATIONS.length];
  const next = ITERATIONS[(currentIndex + 1) % ITERATIONS.length];

  return (
    <nav
      aria-label="Switch design iteration"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-4"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-900/80 p-1 pl-2 pr-2 text-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:gap-2 sm:pl-3 sm:pr-3">
        <Link
          href={prev.href}
          aria-label={`Previous: ${prev.name}`}
          className="grid size-7 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white sm:size-8"
        >
          <CaretLeft size={16} weight="bold" />
        </Link>

        <span className="mx-1 hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400 md:inline">
          {current.index}/5 · {current.name}
        </span>

        <div className="flex items-center gap-1">
          {ITERATIONS.map((it) => {
            const active = it.href === current.href;
            return (
              <Link
                key={it.slug}
                href={it.href}
                aria-label={`Iteration ${it.index}: ${it.name}`}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? `grid size-7 place-items-center rounded-full font-mono text-[12px] font-semibold tabular-nums transition-colors sm:size-8 ${ACCENT_ACTIVE[it.accent]}`
                    : "grid size-7 place-items-center rounded-full font-mono text-[12px] tabular-nums text-zinc-400 transition-colors hover:bg-white/10 hover:text-white sm:size-8"
                }
              >
                {it.index}
              </Link>
            );
          })}
        </div>

        <Link
          href={next.href}
          aria-label={`Next: ${next.name}`}
          className="grid size-7 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white sm:size-8"
        >
          <CaretRight size={16} weight="bold" />
        </Link>
      </div>
    </nav>
  );
}
