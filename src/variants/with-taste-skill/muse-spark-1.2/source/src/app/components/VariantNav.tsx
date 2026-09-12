"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const variants = [
  { href: "/one", label: "01", name: "Archive" },
  { href: "/two", label: "02", name: "Prism" },
  { href: "/three", label: "03", name: "Field" },
  { href: "/four", label: "04", name: "Index" },
  { href: "/five", label: "05", name: "Mind" },
];

export default function VariantNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: bottom center pill */}
      <div className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/90 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl md:flex dark:border-white/10 dark:bg-zinc-900/90">
        <span className="px-3 pr-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          Variants
        </span>
        <div className="flex items-center gap-1">
          {variants.map((v) => {
            const active = pathname === v.href;
            return (
              <Link
                key={v.href}
                href={v.href}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] opacity-60">{v.label}</span>
                {v.name}
              </Link>
            );
          })}
        </div>
        <div className="ml-1 h-6 w-px bg-black/10 dark:bg-white/10" />
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        >
          Home
        </Link>
      </div>

      {/* Mobile: floating button + sheet */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg dark:bg-white dark:text-zinc-900"
          aria-label="Switch variant"
        >
          <span className="font-mono text-xs font-bold">
            {pathname?.replace("/", "") || "—"}
          </span>
        </button>
        {open && (
          <div className="absolute bottom-14 right-0 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-zinc-900">
            <div className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              Choose variant
            </div>
            {variants.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium ${
                  pathname === v.href
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono text-xs opacity-50">{v.label}</span>
                  {v.name}
                </span>
                {pathname === v.href && <span className="h-2 w-2 rounded-full bg-white dark:bg-zinc-900" />}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-1 flex rounded-xl px-3 py-2 text-xs font-medium text-zinc-500"
            >
              ← Back to home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
