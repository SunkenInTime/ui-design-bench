"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const ITERATIONS = ["1", "2", "3", "4", "5"];

export function IterationSwitcher() {
  const pathname = usePathname();
  const current = ITERATIONS.findIndex((n) => pathname?.startsWith(`/${n}`));
  const active = current === -1 ? 0 : current;
  const prev = ITERATIONS[(active + ITERATIONS.length - 1) % ITERATIONS.length];
  const next = ITERATIONS[(active + 1) % ITERATIONS.length];

  return (
    <nav
      aria-label="Switch between design iterations"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-neutral-900/90 p-1.5 text-white shadow-lg backdrop-blur-md"
    >
      <Link
        href={`/${prev}`}
        aria-label="Previous iteration"
        className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
      >
        <CaretLeft size={14} weight="bold" />
      </Link>
      {ITERATIONS.map((n, i) => (
        <Link
          key={n}
          href={`/${n}`}
          aria-label={`Iteration ${n}`}
          aria-current={i === active ? "page" : undefined}
          className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs transition ${
            i === active
              ? "bg-white text-neutral-900"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          {n}
        </Link>
      ))}
      <Link
        href={`/${next}`}
        aria-label="Next iteration"
        className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
      >
        <CaretRight size={14} weight="bold" />
      </Link>
    </nav>
  );
}
