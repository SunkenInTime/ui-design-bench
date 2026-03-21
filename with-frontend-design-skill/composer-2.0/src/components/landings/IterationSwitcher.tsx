"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { href: "/one", label: "I", n: 1 },
  { href: "/two", label: "II", n: 2 },
  { href: "/three", label: "III", n: 3 },
  { href: "/four", label: "IV", n: 4 },
  { href: "/five", label: "V", n: 5 },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/85 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/85 dark:shadow-black/40"
      role="navigation"
      aria-label="Switch landing design iteration"
    >
      <span className="hidden pl-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:inline dark:text-zinc-400">
        Iteration
      </span>
      <div className="flex items-center gap-0.5">
        {ROUTES.map(({ href, label, n }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 ${
                active
                  ? "bg-zinc-900 text-white shadow-md dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              }`}
              aria-current={active ? "page" : undefined}
              title={`Design iteration ${n}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
