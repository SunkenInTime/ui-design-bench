"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ITERATIONS = [
  { n: 1, name: "Card Index" },
  { n: 2, name: "Synapse" },
  { n: 3, name: "Garden" },
  { n: 4, name: "Blueprint" },
  { n: 5, name: "Desk" },
];

export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const current = ITERATIONS.find((it) => pathname === `/${it.n}`);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
      ) {
        return;
      }
      if (/^[1-5]$/.test(e.key)) {
        router.push(`/${e.key}`);
      } else if (e.key === "0") {
        router.push("/");
      } else if (e.key === "ArrowRight" && current) {
        router.push(`/${(current.n % 5) + 1}`);
      } else if (e.key === "ArrowLeft" && current) {
        router.push(`/${((current.n + 3) % 5) + 1}`);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, current]);

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-4 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-zinc-950/85 px-1.5 py-1.5 font-sans shadow-xl shadow-black/30 ring-1 ring-white/15 backdrop-blur-md"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <Link
        href="/"
        title="All iterations (0)"
        aria-label="All iterations"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          pathname === "/"
            ? "bg-white text-zinc-950"
            : "text-zinc-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="3" cy="3" r="1.7" fill="currentColor" />
          <circle cx="9" cy="3" r="1.7" fill="currentColor" />
          <circle cx="3" cy="9" r="1.7" fill="currentColor" />
          <circle cx="9" cy="9" r="1.7" fill="currentColor" />
        </svg>
      </Link>
      <span aria-hidden="true" className="mx-1 h-4 w-px bg-white/15" />
      {ITERATIONS.map((it) => (
        <Link
          key={it.n}
          href={`/${it.n}`}
          title={`${it.name} (${it.n})`}
          aria-label={`Iteration ${it.n}: ${it.name}`}
          aria-current={current?.n === it.n ? "page" : undefined}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            current?.n === it.n
              ? "bg-white text-zinc-950"
              : "text-zinc-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          {it.n}
        </Link>
      ))}
      {current && (
        <span className="hidden whitespace-nowrap pl-2 pr-2.5 text-xs text-zinc-300 sm:block">
          {current.name}
        </span>
      )}
    </nav>
  );
}
