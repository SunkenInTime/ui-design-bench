"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VARIANTS = [
  { href: "/1", label: "01", name: "Index" },
  { href: "/2", label: "02", name: "Graph" },
  { href: "/3", label: "03", name: "Quiet" },
  { href: "/4", label: "04", name: "Desk" },
  { href: "/5", label: "05", name: "Signal" },
];

export function VariantSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Landing page variants"
      className="ui fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-black/85 p-1 pl-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <span className="mr-1 hidden pr-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:inline">
          Variant
        </span>
        {VARIANTS.map((v) => {
          const active =
            pathname === v.href || pathname === v.href + "/";
          return (
            <Link
              key={v.href}
              href={v.href}
              title={v.name}
              aria-current={active ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
                active
                  ? "bg-white text-black"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              {v.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
