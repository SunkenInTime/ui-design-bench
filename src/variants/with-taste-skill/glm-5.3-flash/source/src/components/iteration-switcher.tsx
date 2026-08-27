"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ITERATIONS = [
  { slug: "one", numeral: "1", name: "Synapse" },
  { slug: "two", numeral: "2", name: "Marginalia" },
  { slug: "three", numeral: "3", name: "Index" },
  { slug: "four", numeral: "4", name: "Quiet" },
  { slug: "five", numeral: "5", name: "Bloom" },
] as const;

type IterationSwitcherProps = {
  current: (typeof ITERATIONS)[number]["slug"];
  theme: "dark" | "light";
};

const styles = {
  dark: {
    shell:
      "border-white/10 bg-zinc-950/80 text-zinc-400 shadow-[0_8px_32px_rgba(0,0,0,0.45)]",
    item: "hover:text-zinc-100",
    active: "bg-emerald-400/15 text-emerald-300",
    label: "text-zinc-500",
  },
  light: {
    shell:
      "border-stone-200 bg-white/85 text-stone-500 shadow-[0_8px_32px_rgba(28,25,23,0.12)]",
    item: "hover:text-stone-900",
    active: "bg-stone-900 text-stone-50",
    label: "text-stone-400",
  },
} as const;

export function IterationSwitcher({ current, theme }: IterationSwitcherProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const t = styles[theme];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const hit = ITERATIONS.find((i) => i.numeral === e.key);
      if (hit && hit.slug !== current) router.push(`/${hit.slug}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, router]);

  return (
    <nav
      aria-label="Design iterations"
      className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border backdrop-blur-md transition-colors ${t.shell}`}
    >
      <div className="flex items-center gap-0.5 p-1">
        <span
          className={`pl-3 pr-2 font-mono text-[10px] uppercase tracking-[0.18em] ${t.label}`}
        >
          Draft
        </span>
        <div
          className="flex items-center gap-0.5"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {ITERATIONS.map((it) => {
            const isActive = it.slug === current;
            return (
              <Link
                key={it.slug}
                href={`/${it.slug}`}
                aria-current={isActive ? "page" : undefined}
                aria-label={`${it.name} iteration`}
                className={`flex h-8 items-center justify-center overflow-hidden rounded-full px-2.5 text-[13px] font-medium transition-all duration-300 ${
                  isActive ? t.active : t.item
                } ${expanded || isActive ? "min-w-8" : "w-8"}`}
              >
                <span className="tabular-nums">{it.numeral}</span>
                <span
                  className={`ml-1.5 whitespace-nowrap text-xs transition-all duration-300 ${
                    expanded || isActive
                      ? "max-w-28 opacity-100"
                      : "max-w-0 opacity-0"
                  }`}
                >
                  {it.name}
                </span>
              </Link>
            );
          })}
        </div>
        <kbd
          className={`mr-3 ml-1 hidden rounded border px-1.5 py-0.5 font-mono text-[10px] sm:block ${t.label} ${
            theme === "dark" ? "border-white/10" : "border-stone-200"
          }`}
        >
          1-5
        </kbd>
      </div>
    </nav>
  );
}
