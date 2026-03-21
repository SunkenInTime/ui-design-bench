"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildVariantHref } from "@/lib/gallery-paths";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-4 py-2 flex gap-2 z-50 border border-neutral-200">
      <span className="text-sm font-medium text-neutral-500 mr-2 flex items-center">Iterations:</span>
      {[1, 2, 3, 4, 5].map((num) => {
        const path = buildVariantHref("without-design-skill", "gemini", String(num) as "1" | "2" | "3" | "4" | "5");
        const isActive = pathname === path;
        return (
          <Link
            key={num}
            href={path}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors ${
              isActive
                ? "bg-black text-white font-bold"
                : "hover:bg-neutral-100 text-neutral-700"
            }`}
          >
            {num}
          </Link>
        );
      })}
    </div>
  );
}

