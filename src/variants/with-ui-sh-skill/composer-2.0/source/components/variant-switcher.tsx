"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VARIANTS = [
  { href: "/one", label: "Vault", short: "1" },
  { href: "/two", label: "Editorial", short: "2" },
  { href: "/three", label: "Glass", short: "3" },
  { href: "/four", label: "Terminal", short: "4" },
  { href: "/five", label: "Grove", short: "5" },
] as const;

export function VariantSwitcher() {
  const pathname = usePathname();
  const index = Math.max(
    0,
    VARIANTS.findIndex((v) => v.href === pathname),
  );
  const current = VARIANTS[index] ?? VARIANTS[0];
  const prev = VARIANTS[(index - 1 + VARIANTS.length) % VARIANTS.length];
  const next = VARIANTS[(index + 1) % VARIANTS.length];

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 pl-2 shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/90 dark:ring-white/10"
      role="region"
      aria-label="Landing design concepts"
    >
      <p className="hidden pr-2 text-sm text-neutral-600 sm:block dark:text-neutral-400">
        <span className="text-pretty">
          Concept{" "}
          <span className="tabular-nums text-neutral-950 dark:text-white">
            {index + 1}
          </span>
          <span className="text-neutral-400">/</span>
          <span className="tabular-nums">{VARIANTS.length}</span>
          <span className="sr-only">: {current.label}</span>
        </span>
      </p>
      <div className="flex items-center rounded-full bg-neutral-100/80 p-0.5 dark:bg-white/10">
        {VARIANTS.map((v) => {
          const active = v.href === pathname;
          return (
            <Link
              key={v.href}
              href={v.href}
              className={
                active
                  ? "relative rounded-full bg-white px-3 py-2 text-sm font-medium text-neutral-950 shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:text-white dark:ring-white/10"
                  : "relative rounded-full px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              }
              aria-current={active ? "page" : undefined}
            >
              {v.short}
              <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden />
            </Link>
          );
        })}
      </div>
      <div className="flex items-center pr-1">
        <Link
          href={prev.href}
          className="relative rounded-full px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label={`Previous concept: ${prev.label}`}
        >
          ←
          <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden />
        </Link>
        <Link
          href={next.href}
          className="relative rounded-full px-3 py-2 text-sm font-medium text-neutral-950 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-white dark:hover:bg-white/10"
          aria-label={`Next concept: ${next.label}`}
        >
          Next →
          <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
