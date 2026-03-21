"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const designs = [
  { path: "/1", label: "1", title: "Minimal" },
  { path: "/2", label: "2", title: "Neural" },
  { path: "/3", label: "3", title: "Organic" },
  { path: "/4", label: "4", title: "Geometric" },
  { path: "/5", label: "5", title: "Glass" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const current = designs.find((d) => d.path === pathname);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="flex flex-col gap-1.5 rounded-2xl bg-white/90 p-2 shadow-2xl ring-1 ring-black/10 backdrop-blur-xl dark:bg-zinc-900/90 dark:ring-white/10">
          {designs.map((d) => {
            const isActive = pathname === d.path;
            return (
              <Link
                key={d.path}
                href={d.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-200/80 text-xs font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                  {d.label}
                </span>
                <span>{d.title}</span>
              </Link>
            );
          })}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
        aria-label="Switch design"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <span className="text-sm font-bold">{current?.label ?? "#"}</span>
        )}
      </button>
    </div>
  );
}
