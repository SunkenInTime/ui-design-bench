"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ITERATIONS = [
  { n: 1, label: "Editorial" },
  { n: 2, label: "Neural" },
  { n: 3, label: "Playful" },
  { n: 4, label: "Product" },
  { n: 5, label: "Swiss" },
];

export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const current = Number(pathname.replace("/", "")) || 1;
  const prev = ((current - 2 + ITERATIONS.length) % ITERATIONS.length) + 1;
  const next = (current % ITERATIONS.length) + 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key >= "1" && e.key <= "5") {
        router.push(`/${e.key}`);
      } else if (e.key === "ArrowRight" || e.key === "]") {
        router.push(`/${next}`);
      } else if (e.key === "ArrowLeft" || e.key === "[") {
        router.push(`/${prev}`);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, next, prev]);

  const label = ITERATIONS.find((i) => i.n === current)?.label ?? "";

  return (
    <div className="fixed bottom-5 left-1/2 z-[1000] -translate-x-1/2 print:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-950/85 p-1 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <Link
          href={`/${prev}`}
          aria-label="Previous iteration"
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div className="flex items-center gap-0.5">
          {ITERATIONS.map((it) => {
            const active = it.n === current;
            return (
              <Link
                key={it.n}
                href={`/${it.n}`}
                aria-label={`Iteration ${it.n}: ${it.label}`}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-8 min-w-8 items-center justify-center rounded-full px-2 font-mono text-[12px] tabular-nums transition ${
                  active
                    ? "bg-white text-neutral-950"
                    : "text-neutral-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {it.n}
              </Link>
            );
          })}
        </div>
        <Link
          href={`/${next}`}
          aria-label="Next iteration"
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
        <span className="hidden select-none items-center gap-2 border-l border-white/10 pl-3 pr-3 text-[11px] uppercase tracking-[0.14em] text-neutral-400 sm:flex">
          {label}
          <kbd className="rounded border border-white/15 px-1 py-px font-mono text-[10px] normal-case tracking-normal text-neutral-500">
            1–5
          </kbd>
        </span>
      </div>
    </div>
  );
}
