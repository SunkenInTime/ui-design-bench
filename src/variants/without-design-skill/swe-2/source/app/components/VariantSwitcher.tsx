"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VARIANTS = [
  { n: "1", name: "Slip-box" },
  { n: "2", name: "Plain text" },
  { n: "3", name: "Star atlas" },
  { n: "4", name: "Two minds" },
  { n: "5", name: "Poster" },
];

export function VariantSwitcher() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] ?? "";
  const active = VARIANTS.find((v) => v.n === current);

  return (
    <nav
      aria-label="Landing page iterations"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full bg-[#17171c]/95 p-1.5 shadow-2xl shadow-black/30 ring-1 ring-white/15 backdrop-blur-md">
        <Link
          href="/"
          title="All iterations"
          aria-label="Index of all iterations"
          className="grid h-9 w-9 place-items-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="5"
              height="5"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="8"
              y="1"
              width="5"
              height="5"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="1"
              y="8"
              width="5"
              height="5"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="8"
              y="8"
              width="5"
              height="5"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </Link>
        <span className="h-5 w-px bg-white/15" aria-hidden="true" />
        {VARIANTS.map((v) => {
          const isActive = v.n === current;
          return (
            <Link
              key={v.n}
              href={`/${v.n}`}
              title={v.name}
              aria-current={isActive ? "page" : undefined}
              className={`grid h-9 w-9 place-items-center rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {v.n}
            </Link>
          );
        })}
        {active && (
          <>
            <span className="h-5 w-px bg-white/15" aria-hidden="true" />
            <span className="pr-3 pl-1 text-xs font-medium whitespace-nowrap text-neutral-400">
              {active.name}
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
