"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome } from "./icons";

const VARIANTS = [
  { slug: "1", label: "Editorial" },
  { slug: "2", label: "Neural" },
  { slug: "3", label: "Playful" },
  { slug: "4", label: "Terminal" },
  { slug: "5", label: "Atelier" },
] as const;

export function VariantSwitcher() {
  const pathname = usePathname();
  const active = VARIANTS.find((v) => pathname === `/${v.slug}`)?.slug;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex justify-center px-4 sm:bottom-6">
      <nav
        aria-label="Landing page variant switcher"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl ring-1 ring-black/5"
      >
        <Link
          href="/"
          aria-label="Gallery home"
          title="Gallery"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            pathname === "/"
              ? "bg-white text-zinc-900"
              : "text-zinc-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          <IconHome className="h-4 w-4" />
        </Link>

        <span className="mx-0.5 h-5 w-px shrink-0 bg-white/10" aria-hidden="true" />

        <ul className="flex items-center gap-1">
          {VARIANTS.map((v) => {
            const isActive = active === v.slug;
            return (
              <li key={v.slug}>
                <Link
                  href={`/${v.slug}`}
                  title={`Iteration ${v.slug} — ${v.label}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex h-8 min-w-8 items-center justify-center rounded-full px-3 text-sm font-medium tabular-nums transition-all ${
                    isActive
                      ? "bg-white text-zinc-900"
                      : "text-zinc-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {v.slug}
                  <span
                    className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-200 opacity-0 ring-1 ring-white/10 transition-opacity group-hover:opacity-100 ${
                      isActive ? "hidden" : ""
                    }`}
                  >
                    {v.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
