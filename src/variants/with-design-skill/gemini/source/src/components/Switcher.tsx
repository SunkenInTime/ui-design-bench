"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { buildVariantHref } from "@/lib/gallery-paths";

export function Switcher() {
  const pathname = usePathname();

  const iterations = [
    { path: buildVariantHref("with-design-skill", "gemini", "1"), label: "Brutalist" },
    { path: buildVariantHref("with-design-skill", "gemini", "2"), label: "Ethereal" },
    { path: buildVariantHref("with-design-skill", "gemini", "3"), label: "Terminal" },
    { path: buildVariantHref("with-design-skill", "gemini", "4"), label: "Neo-Brutalist" },
    { path: buildVariantHref("with-design-skill", "gemini", "5"), label: "Editorial" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 p-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
      {iterations.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              isActive ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

