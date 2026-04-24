"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const variants = [
  { path: "/one", label: "1", name: "Archivist" },
  { path: "/two", label: "2", name: "Synapse" },
  { path: "/three", label: "3", name: "Redaction" },
  { path: "/four", label: "4", name: "Terminal" },
  { path: "/five", label: "5", name: "Liminal" },
];

export default function ThemeSwitcher() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 rounded-full border border-white/10 bg-black/80 px-2 py-2 shadow-2xl backdrop-blur-xl transition-all duration-300"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {variants.map((v) => {
        const active = pathname === v.path;
        return (
          <Link
            key={v.path}
            href={v.path}
            className={`
              relative flex h-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-all duration-300
              ${
                active
                  ? "bg-white text-black"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            <span className="tabular-nums">{v.label}</span>
            <span
              className={`
                ml-0 max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-wider transition-all duration-300
                ${expanded ? "ml-1.5 max-w-[80px] opacity-100" : "opacity-0"}
              `}
            >
              {v.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
