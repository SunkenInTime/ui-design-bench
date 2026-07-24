"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = ["1", "2", "3", "4", "5"] as const;

export default function IterationSwitcher() {
  const pathname = usePathname() ?? "";
  const currentIndex = ITERATIONS.findIndex(
    (it) => pathname === `/${it}` || pathname.startsWith(`/${it}/`)
  );

  const prev =
    currentIndex > 0
      ? `/${ITERATIONS[currentIndex - 1]}`
      : `/${ITERATIONS[ITERATIONS.length - 1]}`;
  const next =
    currentIndex >= 0 && currentIndex < ITERATIONS.length - 1
      ? `/${ITERATIONS[currentIndex + 1]}`
      : `/${ITERATIONS[0]}`;

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 print:hidden"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-neutral-900/90 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md">
        <Link
          href={prev}
          aria-label="Previous iteration"
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>

        {ITERATIONS.map((it, index) => {
          const isActive = index === currentIndex;
          return (
            <Link
              key={it}
              href={`/${it}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {it}
            </Link>
          );
        })}

        <Link
          href={next}
          aria-label="Next iteration"
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
      <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 [text-shadow:0_1px_2px_rgba(255,255,255,0.35)]">
        Iteration {currentIndex >= 0 ? ITERATIONS[currentIndex] : "—"} of 5
      </p>
    </nav>
  );
}
