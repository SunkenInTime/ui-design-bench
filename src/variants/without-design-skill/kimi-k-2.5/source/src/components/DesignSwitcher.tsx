"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildModelHref, buildVariantHref } from "@/lib/gallery-paths";

const designs = [
  { path: buildModelHref("without-design-skill", "kimi-k-2.5"), label: "Home", color: "bg-zinc-500" },
  { path: buildVariantHref("without-design-skill", "kimi-k-2.5", "1"), label: "1", color: "bg-stone-600" },
  { path: buildVariantHref("without-design-skill", "kimi-k-2.5", "2"), label: "2", color: "bg-indigo-600" },
  { path: buildVariantHref("without-design-skill", "kimi-k-2.5", "3"), label: "3", color: "bg-rose-500" },
  { path: buildVariantHref("without-design-skill", "kimi-k-2.5", "4"), label: "4", color: "bg-cyan-500" },
  { path: buildVariantHref("without-design-skill", "kimi-k-2.5", "5"), label: "5", color: "bg-violet-600" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg px-4 py-3 border border-zinc-200/50 dark:bg-black/90 dark:border-zinc-800/50">
      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 pr-2 border-r border-zinc-200 dark:border-zinc-800">
        Designs
      </span>
      <div className="flex items-center gap-1.5">
        {designs.map((design) => (
          <Link
            key={design.path}
            href={design.path}
            className={`
              w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold
              transition-all duration-200 hover:scale-110 active:scale-95
              ${
                pathname === design.path
                  ? `${design.color} text-white shadow-md`
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }
            `}
            title={`Design ${design.label}`}
          >
            {design.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

