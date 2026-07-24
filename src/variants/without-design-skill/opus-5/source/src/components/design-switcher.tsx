"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { designs, findDesign } from "@/variants/without-design-skill/opus-5/source/src/lib/designs";

export function DesignSwitcher() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = findDesign(pathname);
  const index = current ? designs.indexOf(current) : -1;

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const step = (delta: number) => {
    go(designs[(index + delta + designs.length) % designs.length].href);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "");
      if (typing || event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key === "[") {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key === "]") {
        event.preventDefault();
        step(1);
        return;
      }
      const match = designs.find((design) => String(design.id) === event.key);
      if (match) {
        event.preventDefault();
        go(match.href);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, router]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2 font-sans"
    >
      {open && (
        <div className="absolute bottom-full left-1/2 mb-3 w-80 -translate-x-1/2 animate-rise overflow-hidden rounded-2xl border border-white/12 bg-neutral-950/95 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <div className="flex items-baseline justify-between px-4 pt-3.5 pb-2">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">
              Design iterations
            </p>
            <p className="font-mono text-[10px] text-white/30">esc</p>
          </div>

          <ul className="px-2 pb-2">
            {designs.map((design) => {
              const active = design.id === current?.id;
              return (
                <li key={design.id}>
                  <Link
                    href={design.href}
                    onClick={() => setOpen(false)}
                    className={`group flex gap-3 rounded-xl px-2.5 py-2.5 transition-colors ${
                      active ? "bg-white/10" : "hover:bg-white/6"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="mt-1 size-2.5 shrink-0 rounded-full ring-3 ring-white/8"
                      style={{ background: design.accent }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-white">
                          {design.name}
                        </span>
                        <span className="text-[11px] text-white/40">
                          {design.direction}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-relaxed text-white/45">
                        {design.note}
                      </span>
                    </span>
                    <kbd className="mt-0.5 h-5 shrink-0 rounded border border-white/12 bg-white/6 px-1.5 font-mono text-[10px] leading-5 text-white/50">
                      {design.id}
                    </kbd>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-white/8 px-4 py-2.5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[11px] text-white/45 transition-colors hover:text-white"
            >
              View all side by side →
            </Link>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1 rounded-full border border-white/12 bg-neutral-950/90 p-1 shadow-xl shadow-black/50 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous design"
          className="grid size-7 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
            <path
              d="M10 3 5 8l5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full px-2.5 py-1 transition-colors hover:bg-white/10"
        >
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{ background: current?.accent ?? "#a1a1aa" }}
          />
          <span className="text-[13px] font-medium text-white">
            {current?.name ?? "Pick a design"}
          </span>
          <span className="font-mono text-[11px] text-white/35">
            {current ? `${current.id}/${designs.length}` : designs.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next design"
          className="grid size-7 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
            <path
              d="M6 3l5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
