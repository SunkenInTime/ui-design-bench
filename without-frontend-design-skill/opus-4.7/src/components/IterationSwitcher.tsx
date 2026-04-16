"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const iterations = [
  { slug: "one", label: "01", name: "Minimal" },
  { slug: "two", label: "02", name: "Gradient" },
  { slug: "three", label: "03", name: "Brutalist" },
  { slug: "four", label: "04", name: "Editorial" },
  { slug: "five", label: "05", name: "Graph" },
];

export default function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const active = iterations.find((i) => pathname?.startsWith(`/${i.slug}`));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key >= "1" && e.key <= "5" && (e.metaKey || e.altKey)) {
        e.preventDefault();
        const target = iterations[parseInt(e.key, 10) - 1];
        if (target) {
          window.location.href = `/${target.slug}`;
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[998] bg-black/20 backdrop-blur-sm"
        />
      )}

      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
        {open && (
          <div className="flex flex-col gap-1 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95">
            <div className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Iterations
            </div>
            {iterations.map((it) => {
              const isActive = active?.slug === it.slug;
              return (
                <Link
                  key={it.slug}
                  href={`/${it.slug}`}
                  onClick={() => setOpen(false)}
                  className={`group flex min-w-[220px] items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      isActive
                        ? "text-white/70 dark:text-zinc-900/70"
                        : "text-zinc-400"
                    }`}
                  >
                    {it.label}
                  </span>
                  <span className="flex-1 font-medium">{it.name}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      isActive
                        ? "text-white/60 dark:text-zinc-900/60"
                        : "text-zinc-400 dark:text-zinc-500"
                    }`}
                  >
                    /{it.slug}
                  </span>
                </Link>
              );
            })}
            <div className="mt-1 border-t border-black/5 px-3 pt-2 pb-1 text-[10px] text-zinc-500 dark:border-white/5 dark:text-zinc-400">
              <kbd className="rounded border border-black/10 bg-zinc-100 px-1.5 py-0.5 font-mono text-[9px] dark:border-white/10 dark:bg-zinc-800">
                ⌘K
              </kbd>{" "}
              to toggle ·{" "}
              <kbd className="rounded border border-black/10 bg-zinc-100 px-1.5 py-0.5 font-mono text-[9px] dark:border-white/10 dark:bg-zinc-800">
                ⌘1–5
              </kbd>{" "}
              to jump
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Switch iteration"
          aria-expanded={open}
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 py-3 text-sm font-medium text-zinc-900 shadow-lg backdrop-blur-xl transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] dark:border-white/10 dark:bg-zinc-900/95 dark:text-white"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 font-mono text-[11px] text-white dark:bg-white dark:text-zinc-900">
            {active?.label ?? "—"}
          </span>
          <span className="tabular-nums">
            {active?.name ?? "Select iteration"}
          </span>
          <svg
            className={`h-4 w-4 text-zinc-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
