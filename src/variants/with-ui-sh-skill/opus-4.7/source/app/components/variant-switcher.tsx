"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = [
  { num: 1, label: "Editorial" },
  { num: 2, label: "Terminal" },
  { num: 3, label: "Notebook" },
  { num: 4, label: "Synapse" },
  { num: 5, label: "Garden" },
];

export function VariantSwitcher() {
  const pathname = usePathname();
  const match = pathname.match(/^\/(\d)/);
  const active = match ? Number(match[1]) : null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 print:hidden pointer-events-none">
      <nav
        aria-label="Design variants"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/85 p-1 text-sm shadow-2xl ring-1 ring-black/20 backdrop-blur-md"
      >
        <span className="px-3 py-1 font-mono text-[0.6875rem] tracking-wide text-neutral-400 uppercase">
          variant
        </span>
        {variants.map((v) => {
          const isActive = active === v.num;
          return (
            <Link
              key={v.num}
              href={`/${v.num}`}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs transition ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="tabular-nums">{v.num}</span>
              <span
                className={`hidden sm:inline ${
                  isActive ? "" : "text-neutral-400 group-hover:text-neutral-200"
                }`}
              >
                {v.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
