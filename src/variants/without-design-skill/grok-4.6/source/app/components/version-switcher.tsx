"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { versions } from "@/variants/without-design-skill/grok-4.6/source/app/lib/versions";

export function VersionSwitcher() {
  const pathname = usePathname();
  const current =
    versions.find((version) => pathname === version.path) ?? versions[0];

  return (
    <nav
      aria-label="Landing page versions"
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-zinc-950/80 p-1.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <span className="hidden items-baseline gap-2 px-3 sm:flex">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Designs
          </span>
          <span className="text-xs text-white/70">{current.label}</span>
        </span>
        {versions.map((version) => {
          const active = pathname === version.path;
          return (
            <Link
              key={version.path}
              href={version.path}
              title={`${version.label} — ${version.hint}`}
              className={`grid h-9 min-w-9 place-items-center rounded-full px-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-white text-zinc-950"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <span className="sm:hidden">{version.id}</span>
              <span className="hidden sm:inline">{version.id}</span>
              <span className="sr-only">
                {version.label}, {version.hint}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
