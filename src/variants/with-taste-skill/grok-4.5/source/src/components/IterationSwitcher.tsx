"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CirclesFourIcon, XIcon } from "@phosphor-icons/react";

const ITERATIONS = [
  { href: "/one", label: "1", name: "Linear clean" },
  { href: "/two", label: "2", name: "Editorial" },
  { href: "/three", label: "3", name: "Cold luxury" },
  { href: "/four", label: "4", name: "Dark graph" },
  { href: "/five", label: "5", name: "Kinetic" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const active = ITERATIONS.find((i) => pathname === i.href);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-2"
    >
      {open && (
        <nav
          aria-label="Landing iterations"
          className="w-56 overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 shadow-[0_12px_40px_rgba(24,24,27,0.18)] backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/95"
        >
          <p className="border-b border-zinc-100 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            Iterations
          </p>
          <ul className="p-1.5">
            {ITERATIONS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-semibold ${
                        isActive
                          ? "bg-white/15 dark:bg-zinc-900/10"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="iteration-switcher"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-950 px-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(24,24,27,0.35)] transition-transform active:scale-[0.98] dark:border-zinc-600 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {open ? (
          <XIcon weight="bold" className="h-4 w-4" />
        ) : (
          <CirclesFourIcon weight="bold" className="h-4 w-4" />
        )}
        <span>{active ? `View ${active.label}` : "Views"}</span>
      </button>
    </div>
  );
}
