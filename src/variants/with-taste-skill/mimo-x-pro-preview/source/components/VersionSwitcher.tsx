"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITERATIONS = [
  { href: "/one", num: "1", label: "Quiet" },
  { href: "/two", num: "2", label: "Graph" },
  { href: "/three", num: "3", label: "Edit" },
  { href: "/four", num: "4", label: "Bento" },
  { href: "/five", num: "5", label: "Mono" },
] as const;

export function VersionSwitcher() {
  const pathname = usePathname();
  const current = ITERATIONS.find((item) => pathname.startsWith(item.href));

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 print:hidden"
    >
      <div className="pointer-events-none select-none rounded-full border border-white/10 bg-zinc-950/92 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 shadow-xl backdrop-blur-md">
        {current ? `Design ${current.num} · ${current.label}` : "Cortex designs"}
      </div>
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/92 p-1.5 shadow-xl backdrop-blur-md">
        {ITERATIONS.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={`Iteration ${item.num}: ${item.label}`}
              aria-current={active ? "page" : undefined}
              className={[
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
                active
                  ? "bg-white text-zinc-950"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {item.num}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
