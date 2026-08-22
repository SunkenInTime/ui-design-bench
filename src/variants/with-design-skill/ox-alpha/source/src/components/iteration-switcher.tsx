"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ITERATIONS = [
  { n: 1, href: "/1", name: "The Slip Box" },
  { n: 2, href: "/2", name: "Planetarium" },
  { n: 3, href: "/3", name: "The Instrument" },
  { n: 4, href: "/4", name: "Petri Lab" },
  { n: 5, href: "/5", name: "Highlighter Punk" },
];

export default function IterationSwitcher({ current }: { current: number }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (/^[1-5]$/.test(e.key)) {
        router.push(`/${e.key}`);
      } else if (e.key === "ArrowRight" && current < 5) {
        router.push(`/${current + 1}`);
      } else if (e.key === "ArrowLeft" && current > 1) {
        router.push(`/${current - 1}`);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, router]);

  return (
    <nav
      aria-label="Design concept switcher"
      className="fixed left-1/2 z-[100] flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/25 bg-black/85 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      {current > 1 && (
        <Link
          href={`/${current - 1}`}
          aria-label={`Previous concept (${current - 1})`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-base text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          ‹
        </Link>
      )}
      {ITERATIONS.map((it) => (
        <Link
          key={it.n}
          href={it.href}
          title={`Concept ${it.n} — ${it.name}`}
          aria-current={it.n === current ? "page" : undefined}
          aria-label={`Concept ${it.n}: ${it.name}`}
          className={
            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tabular-nums transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white " +
            (it.n === current
              ? "bg-white text-black"
              : "text-white/70 hover:bg-white/10 hover:text-white")
          }
        >
          {it.n}
        </Link>
      ))}
      {current < 5 && (
        <Link
          href={`/${current + 1}`}
          aria-label={`Next concept (${current + 1})`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-base text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          ›
        </Link>
      )}
    </nav>
  );
}
