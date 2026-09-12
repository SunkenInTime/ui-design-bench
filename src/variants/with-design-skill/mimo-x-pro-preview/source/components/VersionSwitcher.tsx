"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VERSIONS = [
  { id: "1", label: "1", name: "Quiet Study" },
  { id: "2", label: "2", name: "Neural" },
  { id: "3", label: "3", name: "Editorial" },
  { id: "4", label: "4", name: "Product" },
  { id: "5", label: "5", name: "Organic" },
] as const;

export default function VersionSwitcher() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] || "1";

  return (
    <nav
      aria-label="Landing page version"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-black/10 bg-white/90 px-1.5 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/90">
        <span className="pl-2 pr-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
          V
        </span>
        {VERSIONS.map((v) => {
          const active = current === v.id;
          return (
            <Link
              key={v.id}
              href={`/${v.id}`}
              title={v.name}
              aria-current={active ? "page" : undefined}
              className={[
                "flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition-colors",
                active
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white",
              ].join(" ")}
            >
              {v.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
