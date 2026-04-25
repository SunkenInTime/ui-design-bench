"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const iterations = [
  { path: "/one", label: "One" },
  { path: "/two", label: "Two" },
  { path: "/three", label: "Three" },
  { path: "/four", label: "Four" },
  { path: "/five", label: "Five" },
];

export function IterationSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
        <span className="px-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Iteration
        </span>
        {iterations.map((iter) => {
          const isActive = pathname === iter.path;
          return (
            <Link
              key={iter.path}
              href={iter.path}
              className={`relative rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {iter.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
