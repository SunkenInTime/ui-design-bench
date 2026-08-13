"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { z } from "../lib/z";

const versions = [
  { href: "/1", n: "1", name: "Quiet tool" },
  { href: "/2", n: "2", name: "Cold luxury" },
  { href: "/3", n: "3", name: "Editorial" },
  { href: "/4", n: "4", name: "Graph" },
  { href: "/5", n: "5", name: "Studio" },
] as const;

export function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Design directions"
      className="fixed bottom-4 left-1/2 w-[min(92vw,22rem)] -translate-x-1/2 rounded-full border border-zinc-200/80 bg-zinc-950/92 px-2 py-1.5 text-zinc-50 shadow-[0_12px_40px_rgb(24_24_27/0.28)] backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-100/92 dark:text-zinc-950 dark:shadow-[0_12px_40px_rgb(0_0_0/0.45)]"
      style={{ zIndex: z.switcher }}
    >
      <div className="flex items-center gap-1">
        <p className="hidden pl-3 pr-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:block dark:text-zinc-500">
          Dir
        </p>
        {versions.map((v) => {
          const active = pathname === v.href;
          return (
            <Link
              key={v.href}
              href={v.href}
              title={v.name}
              aria-current={active ? "page" : undefined}
              className={`flex h-9 flex-1 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                active
                  ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-950/10 dark:hover:text-zinc-950"
              }`}
            >
              <span className="sr-only">{v.name}, direction </span>
              {v.n}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
