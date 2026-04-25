"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const designs = [
  { path: "/one", label: "Brutalist", color: "#ff0000" },
  { path: "/two", label: "Organic", color: "#2d4a3e" },
  { path: "/three", label: "Terminal", color: "#33ff00" },
  { path: "/four", label: "Editorial", color: "#c9a227" },
  { path: "/five", label: "Playground", color: "#ff006e" },
];

export default function DesignSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="mb-2 flex flex-col gap-1 overflow-hidden rounded-xl border border-black/10 bg-white/90 p-2 shadow-2xl backdrop-blur-md">
          {designs.map((d) => (
            <Link
              key={d.path}
              href={d.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === d.path
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              {d.label}
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-transform hover:scale-105"
        aria-label="Switch design"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </button>
    </div>
  );
}
