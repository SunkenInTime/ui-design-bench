"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const designs = [
  { n: "1", label: "Archive", href: "/1" },
  { n: "2", label: "Garden", href: "/2" },
  { n: "3", label: "Console", href: "/3" },
  { n: "4", label: "Palace", href: "/4" },
  { n: "5", label: "Zen", href: "/5" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.1)_inset] backdrop-blur-xl border border-white/10">
      <Link
        href="/"
        className={`w-8 h-8 grid place-items-center rounded-full text-[10px] font-mono tracking-widest transition ${pathname === "/" ? "bg-white text-black" : "text-white/60 hover:text-white hover:bg-white/10"}`}
        aria-label="Index"
      >
        ⌂
      </Link>
      <div className="w-px h-5 bg-white/15 mx-1" />
      {designs.map((d) => {
        const active = pathname === d.href;
        return (
          <Link
            key={d.n}
            href={d.href}
            className={`w-8 h-8 grid place-items-center rounded-full text-xs font-medium transition-all ${active ? "bg-white text-black shadow-md scale-105" : "text-white/60 hover:text-white hover:bg-white/10"}`}
            aria-label={`Design ${d.n}: ${d.label}`}
            title={`${d.n} — ${d.label}`}
          >
            {d.n}
          </Link>
        );
      })}
      <div className="hidden sm:flex items-center gap-2 pl-2 pr-3 ml-1 border-l border-white/15">
        <span className="text-[10px] font-mono tracking-[0.14em] text-white/40 uppercase">Iteration</span>
        <span className="text-xs font-medium text-white/90">
          {pathname === "/" ? "—" : designs.find((d) => d.href === pathname)?.label ?? "—"}
        </span>
      </div>
    </div>
  );
}
