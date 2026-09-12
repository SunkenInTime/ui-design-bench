"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = [
  { href: "/one", label: "1", name: "Field Notes" },
  { href: "/two", label: "2", name: "Neural" },
  { href: "/three", label: "3", name: "Index" },
  { href: "/four", label: "4", name: "Spatial" },
  { href: "/five", label: "5", name: "Ledger" },
] as const;

export default function Switcher() {
  const pathname = usePathname();
  const current = ITERATIONS.find((item) => pathname.startsWith(item.href));

  return (
    <div
      className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 print:hidden"
      role="navigation"
      aria-label="Design iterations"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-950/90 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <span className="hidden pl-3 pr-1 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400 sm:inline">
          Design
        </span>
        {ITERATIONS.map((item) => {
          const active = current?.href === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.name}
              aria-label={`Iteration ${item.label}: ${item.name}`}
              aria-current={active ? "page" : undefined}
              className={[
                "flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-[13px] font-semibold tabular-nums transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
                active
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
