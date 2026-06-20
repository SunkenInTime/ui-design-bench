"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DESIGNS = ["1", "2", "3", "4", "5"];

export function DesignSwitcher() {
  const pathname = usePathname();
  const current = DESIGNS.indexOf(pathname?.replace(/^\//, "") ?? "");
  const prev = DESIGNS[(current - 1 + DESIGNS.length) % DESIGNS.length];
  const next = DESIGNS[(current + 1) % DESIGNS.length];

  return (
    <nav
      aria-label="Design switcher"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-zinc-900/90 p-1.5 shadow-xl shadow-black/30 backdrop-blur-md"
    >
      <Link
        href={`/${prev}`}
        aria-label="Previous design"
        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {DESIGNS.map((d, i) => (
        <Link
          key={d}
          href={`/${d}`}
          aria-label={`Design ${d}`}
          aria-current={i === current ? "page" : undefined}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium tabular-nums transition-colors ${
            i === current
              ? "bg-white text-zinc-900"
              : "text-zinc-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          {d}
        </Link>
      ))}

      <Link
        href={`/${next}`}
        aria-label="Next design"
        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </nav>
  );
}
