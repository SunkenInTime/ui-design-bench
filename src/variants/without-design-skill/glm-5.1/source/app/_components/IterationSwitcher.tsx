"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const iterations = [
  { href: "/one", label: "1", name: "Minimal" },
  { href: "/two", label: "2", name: "Bold" },
  { href: "/three", label: "3", name: "Neural" },
  { href: "/four", label: "4", name: "Editorial" },
  { href: "/five", label: "5", name: "Playful" },
];

export default function IterationSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white/90 px-2 py-2 shadow-lg backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90">
      {iterations.map((iter) => {
        const isActive = pathname === iter.href;
        return (
          <Link
            key={iter.href}
            href={iter.href}
            className={`flex h-9 items-center justify-center rounded-xl px-3 text-sm font-medium transition-all ${
              isActive
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            }`}
            title={iter.name}
          >
            <span className="mr-1.5 text-xs opacity-60">{iter.label}</span>
            <span className="hidden sm:inline">{iter.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
