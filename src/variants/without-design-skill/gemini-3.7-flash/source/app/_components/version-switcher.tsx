"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VERSIONS = [
  { href: "/1", label: "1", name: "Paper" },
  { href: "/2", label: "2", name: "Graph" },
  { href: "/3", label: "3", name: "Index" },
  { href: "/4", label: "4", name: "Studio" },
  { href: "/5", label: "5", name: "Library" },
] as const;

export function VersionSwitcher() {
  const pathname = usePathname();
  const current =
    VERSIONS.find((version) => version.href === pathname) ?? VERSIONS[0];

  return (
    <nav
      aria-label="Landing page iterations"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-neutral-950/85 p-1.5 pl-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <span className="hidden pr-2 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.2em] text-white/45 uppercase sm:inline">
        {current.name}
      </span>
      {VERSIONS.map((version) => {
        const active = pathname === version.href;

        return (
          <Link
            key={version.href}
            href={version.href}
            title={`${version.label} · ${version.name}`}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "flex h-8 w-8 items-center justify-center rounded-full bg-white text-[13px] font-medium text-neutral-950"
                : "flex h-8 w-8 items-center justify-center rounded-full text-[13px] text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            }
          >
            {version.label}
          </Link>
        );
      })}
    </nav>
  );
}
