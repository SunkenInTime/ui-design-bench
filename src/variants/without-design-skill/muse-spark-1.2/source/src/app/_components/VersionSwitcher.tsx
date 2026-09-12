"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const versions = [
  { href: "/", label: "00", name: "Hub" },
  { href: "/1", label: "01", name: "Paper", color: "Paper" },
  { href: "/2", label: "02", name: "Graph", color: "Graph" },
  { href: "/3", label: "03", name: "Garden", color: "Garden" },
  { href: "/4", label: "04", name: "System", color: "System" },
  { href: "/5", label: "05", name: "Aura", color: "Aura" },
];

const navOrder = ["/", "/1", "/2", "/3", "/4", "/5"];

export default function VersionSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const idx = navOrder.indexOf(pathname);
      if (e.key === "ArrowRight") {
        const next = navOrder[Math.min(idx + 1, navOrder.length - 1)];
        if (next !== pathname) router.push(next);
      }
      if (e.key === "ArrowLeft") {
        const prev = navOrder[Math.max(idx - 1, 0)];
        if (prev !== pathname) router.push(prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pathname, router]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {/* Label */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[11px] font-medium tracking-widest uppercase shadow-lg">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        5 Iterations
      </div>

      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200 shadow-[0_16px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08)]">
        <Link
          href="/"
          className={`size-9 flex items-center justify-center rounded-full text-xs font-medium transition-all ${
            pathname === "/"
              ? "bg-zinc-900 text-white"
              : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
          }`}
          title="Hub"
        >
          ⌘
        </Link>
        <div className="w-px h-6 bg-zinc-200 mx-1" />
        {versions.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
              isActive(v.href)
                ? "bg-zinc-900 text-white shadow-md"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            <span className={`text-xs font-mono tracking-wider ${isActive(v.href) ? "text-white/60" : "text-zinc-400"}`}>{v.label}</span>
            <span className="hidden sm:inline text-[13px]">{v.name}</span>
            {isActive(v.href) && (
              <span className="absolute -top-1 -right-1 size-2 bg-emerald-500 rounded-full ring-2 ring-white" />
            )}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-2 text-[11px] text-zinc-500">
        <span className="px-2 py-1 bg-white border border-zinc-200 rounded-md shadow-sm font-mono">← →</span>
        <span>to navigate</span>
      </div>
    </div>
  );
}
