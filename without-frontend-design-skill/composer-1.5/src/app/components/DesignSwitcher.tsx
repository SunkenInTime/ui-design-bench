"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DESIGNS = [
  { path: "/one", label: "1" },
  { path: "/two", label: "2" },
  { path: "/three", label: "3" },
  { path: "/four", label: "4" },
  { path: "/five", label: "5" },
];

export function DesignSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentDesign =
    DESIGNS.find((d) => pathname === d.path)?.label ?? "•";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-zinc-900/95 text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:shadow-2xl"
          aria-label="Switch design iteration"
          title="Switch design iteration"
        >
          <span className="text-sm font-semibold">{currentDesign}</span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <div className="absolute bottom-14 right-0 flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/95">
              <span className="px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Design iteration
              </span>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                <span className="w-5 text-center">•</span>
                <span className="text-zinc-500 dark:text-zinc-400">/</span>
              </Link>
              {DESIGNS.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === path
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span className="w-5 text-center">{label}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{path}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
