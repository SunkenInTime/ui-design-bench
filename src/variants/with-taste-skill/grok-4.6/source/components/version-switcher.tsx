"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const LOOKS = [
  { href: "/1", n: "1", label: "Linear" },
  { href: "/2", n: "2", label: "Quiet" },
  { href: "/3", n: "3", label: "Editorial" },
  { href: "/4", n: "4", label: "Trail" },
  { href: "/5", n: "5", label: "Studio" },
] as const;

export function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Design iterations"
      className="fixed bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/92 px-2 py-1.5 shadow-[0_12px_40px_rgb(24_24_27_/_0.45)]"
      style={{ zIndex: z.switcher }}
    >
      <ul className="flex items-center gap-0.5">
        {LOOKS.map((look) => {
          const active = pathname === look.href;
          return (
            <li key={look.href}>
              <Link
                href={look.href}
                aria-current={active ? "page" : undefined}
                aria-label={`Look ${look.n}, ${look.label}`}
                className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-[12px] font-medium tracking-wide transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-950"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"
                }`}
              >
                {look.n}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
