"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const DESIGNS = [
  { n: 1, name: "Archive" },
  { n: 2, name: "Terminal" },
  { n: 3, name: "Constellation" },
  { n: 4, name: "Poster" },
  { n: 5, name: "Calm" },
];

export function DesignSwitcher() {
  const pathname = usePathname();
  const current = Math.min(
    Math.max(Number(pathname.split("/")[1]) || 1, 1),
    DESIGNS.length,
  );
  const prev = current === 1 ? DESIGNS.length : current - 1;
  const next = current === DESIGNS.length ? 1 : current + 1;

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-neutral-900/90 py-1.5 pr-2 pl-1.5 text-neutral-100 shadow-2xl shadow-black/30 backdrop-blur-md">
        <Link
          href={`/with-taste-skill/swe-2/${prev}`}
          aria-label={`Previous design: ${DESIGNS[prev - 1].name}`}
          className="grid size-8 place-items-center rounded-full text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95"
        >
          <CaretLeft size={15} weight="bold" />
        </Link>
        <div className="flex items-center gap-1">
          {DESIGNS.map((d) => (
            <Link
              key={d.n}
              href={`/with-taste-skill/swe-2/${d.n}`}
              aria-current={d.n === current ? "page" : undefined}
              className={`grid h-8 min-w-8 place-items-center rounded-full px-1 text-[13px] font-medium tabular-nums transition active:scale-95 ${
                d.n === current
                  ? "bg-white text-neutral-900"
                  : "text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {d.n}
            </Link>
          ))}
        </div>
        <Link
          href={`/with-taste-skill/swe-2/${next}`}
          aria-label={`Next design: ${DESIGNS[next - 1].name}`}
          className="grid size-8 place-items-center rounded-full text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95"
        >
          <CaretRight size={15} weight="bold" />
        </Link>
        <span className="ml-1 hidden border-l border-white/15 pl-3 text-[12px] tracking-wide text-neutral-400 sm:block">
          {DESIGNS[current - 1].name}
        </span>
      </div>
    </nav>
  );
}
