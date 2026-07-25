"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { designs } from "@/variants/without-design-skill/opus-5/source/src/lib/designs";

export default function DesignSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const activeIndex = designs.findIndex((d) => d.slug === pathname);
  const active = activeIndex === -1 ? null : designs[activeIndex];

  // Press 1-5 to jump between designs, [ / ] to step through them.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "")
      ) {
        return;
      }

      const digit = Number(event.key);
      if (digit >= 1 && digit <= designs.length) {
        router.push(designs[digit - 1].slug);
        return;
      }

      if (event.key === "[" || event.key === "]") {
        const step = event.key === "]" ? 1 : -1;
        const from = activeIndex === -1 ? 0 : activeIndex;
        const next = (from + step + designs.length) % designs.length;
        router.push(designs[next].slug);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, router]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 print:hidden">
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-neutral-900/80 p-1.5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <Link
          href="/"
          aria-label="All designs"
          title="All designs"
          className={`grid size-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold transition-colors ${
            pathname === "/"
              ? "bg-white text-neutral-900"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
            <g fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1.5" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" />
            </g>
          </svg>
        </Link>

        <span aria-hidden className="mx-0.5 h-5 w-px bg-white/15" />

        {designs.map((design, i) => {
          const isActive = pathname === design.slug;
          return (
            <Link
              key={design.slug}
              href={design.slug}
              title={`${design.name} — ${design.vibe}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative grid size-8 place-items-center rounded-full text-[12px] font-semibold tabular-nums transition-colors ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {i + 1}
              <span
                aria-hidden
                className="absolute -bottom-0.5 size-1 rounded-full"
                style={{
                  background: isActive ? "transparent" : design.swatch[2],
                }}
              />
            </Link>
          );
        })}

        <div
          className={`grid transition-all duration-300 ease-out ${
            expanded || active
              ? "grid-cols-[1fr] opacity-100"
              : "grid-cols-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex items-baseline gap-2 whitespace-nowrap pr-3 pl-2.5">
              <span className="text-[12px] font-semibold">
                {active ? active.name : "Gallery"}
              </span>
              <span className="hidden text-[10px] tracking-wide text-white/45 uppercase sm:inline">
                {expanded ? "keys 1–5" : active?.vibe}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
