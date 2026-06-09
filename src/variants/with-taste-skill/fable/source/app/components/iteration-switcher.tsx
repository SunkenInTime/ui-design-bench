"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = [
  { n: 1, name: "Quiet" },
  { n: 2, name: "Commonplace" },
  { n: 3, name: "Signal" },
  { n: 4, name: "Glass" },
  { n: 5, name: "Index" },
];

export function IterationSwitcher() {
  const pathname = usePathname();
  const current = ITERATIONS.find((it) => pathname === `/${it.n}`);
  if (!current) return null;

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-950/85 p-1.5 shadow-[0_8px_30px_rgb(0_0_0/0.35)] backdrop-blur-md">
        {ITERATIONS.map((it) => {
          const active = it.n === current.n;
          return (
            <Link
              key={it.n}
              href={`/${it.n}`}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "flex h-8 items-center gap-2 rounded-full bg-white px-3 text-xs font-semibold text-zinc-900"
                  : "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              }
            >
              {it.n}
              {active && (
                <span className="hidden sm:inline">{it.name}</span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
