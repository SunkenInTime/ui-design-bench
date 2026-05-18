"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = [1, 2, 3, 4, 5] as const;
const LABELS = ["Lumen", "Synapse", "Folio", "Kernel", "Drift"] as const;

function getCurrent(pathname: string): (typeof ITERATIONS)[number] | null {
  const match = ITERATIONS.find((n) => pathname === `/${n}`);
  return match ?? null;
}

export function IterationSwitcher() {
  const pathname = usePathname();
  const current = getCurrent(pathname);

  if (current === null) return null;

  const index = current - 1;
  const prev = current === 1 ? 5 : current - 1;
  const next = current === 5 ? 1 : current + 1;

  return (
    <nav
      aria-label="Switch landing page design"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/90 px-2 py-2 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/90 dark:shadow-black/40"
    >
      <Link
        href={`/${prev}`}
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        aria-label={`Previous design: ${LABELS[prev - 1]}`}
      >
        <ChevronLeft />
      </Link>

      <div className="flex items-center gap-1 px-1" role="group">
        {ITERATIONS.map((n, i) => (
          <Link
            key={n}
            href={`/${n}`}
            title={LABELS[i]}
            className={`flex h-8 min-w-8 items-center justify-center rounded-full text-xs font-medium transition-all ${
              n === current
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            }`}
            aria-label={`Design ${n}: ${LABELS[i]}`}
            aria-current={n === current ? "page" : undefined}
          >
            {n}
          </Link>
        ))}
      </div>

      <Link
        href={`/${next}`}
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        aria-label={`Next design: ${LABELS[next - 1]}`}
      >
        <ChevronRight />
      </Link>

      <div className="hidden border-l border-zinc-200 pl-3 text-xs text-zinc-500 sm:block dark:border-zinc-700 dark:text-zinc-400">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {LABELS[index]}
        </span>
        <span className="mx-1.5 text-zinc-300 dark:text-zinc-600">·</span>
        {current} of 5
      </div>
    </nav>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 12L6 8l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
