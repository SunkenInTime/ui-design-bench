"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildVariantHref } from "@/lib/gallery-paths";

const ROUTES = [
  { num: 1, href: buildVariantHref("without-design-skill", "composer-2.0", "1") },
  { num: 2, href: buildVariantHref("without-design-skill", "composer-2.0", "2") },
  { num: 3, href: buildVariantHref("without-design-skill", "composer-2.0", "3") },
  { num: 4, href: buildVariantHref("without-design-skill", "composer-2.0", "4") },
  { num: 5, href: buildVariantHref("without-design-skill", "composer-2.0", "5") },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const currentIndex = ROUTES.findIndex((r) => r.href === pathname);
  const idx = currentIndex >= 0 ? currentIndex : 0;
  const prev = ROUTES[(idx - 1 + ROUTES.length) % ROUTES.length];
  const next = ROUTES[(idx + 1) % ROUTES.length];

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/90 px-1 py-1 shadow-lg backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/90"
      role="navigation"
      aria-label="Switch landing design iteration"
    >
      <Link
        href={prev.href}
        className="flex h-9 min-w-9 items-center justify-center rounded-full text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        title={`Previous: iteration ${prev.num}`}
      >
        ‹
      </Link>
      <div className="mx-0.5 flex gap-0.5">
        {ROUTES.map((r) => {
          const active = r.href === pathname;
          return (
            <Link
              key={r.href}
              href={r.href}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full text-xs font-semibold tabular-nums transition ${
                active
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              }`}
              title={`Iteration ${r.num}`}
              aria-current={active ? "page" : undefined}
            >
              {r.num}
            </Link>
          );
        })}
      </div>
      <Link
        href={next.href}
        className="flex h-9 min-w-9 items-center justify-center rounded-full text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        title={`Next: iteration ${next.num}`}
      >
        ›
      </Link>
    </div>
  );
}

