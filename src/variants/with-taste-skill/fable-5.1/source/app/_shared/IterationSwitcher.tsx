"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Z } from "./z";

export const ITERATIONS = [
  { n: 1, name: "Ledger" },
  { n: 2, name: "Commonplace" },
  { n: 3, name: "Substrate" },
  { n: 4, name: "Understory" },
  { n: 5, name: "Loud" },
] as const;

/**
 * Review-only overlay for flipping between the five landing page iterations.
 * Deliberately styled outside every iteration's token set so it reads as a
 * tool, not as part of the page. Keys 1-5 also switch.
 */
export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const current = Number(pathname.split("/")[1]) || 0;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= ITERATIONS.length && n !== current) router.push(`/${n}`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, router]);

  const active = ITERATIONS.find((i) => i.n === current);

  return (
    <nav
      aria-label="Switch design iteration"
      style={{ zIndex: Z.switcher }}
      className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-zinc-900/85 p-1 pl-3 text-zinc-100 shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
    >
      <span className="mr-2 hidden font-mono text-[11px] text-zinc-400 sm:inline">
        {active ? active.name : "Iteration"}
      </span>
      {ITERATIONS.map((it) => {
        const isActive = it.n === current;
        return (
          <Link
            key={it.n}
            href={`/${it.n}`}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Iteration ${it.n}: ${it.name}`}
            className={[
              "flex size-8 items-center justify-center rounded-full font-mono text-[13px] tabular-nums transition-colors duration-200 active:scale-[0.96]",
              isActive
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {it.n}
          </Link>
        );
      })}
    </nav>
  );
}
