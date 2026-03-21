"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { defaultIteration, designIterations } from "@/variants/with-design-skill/gpt-5.4/source/src/lib/iterations";

export function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeIteration = useMemo(() => {
    return (
      designIterations.find((iteration) => pathname === iteration.href) ??
      defaultIteration
    );
  }, [pathname]);

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <div className="flex flex-col items-end gap-3">
        {open ? (
          <nav
            id="iteration-switcher-menu"
            aria-label="Landing page design iterations"
            className="w-[18rem] rounded-[1.5rem] border border-white/15 bg-black/70 p-3 text-white shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          >
            <p className="px-2 pb-2 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-white/55">
              Design Iterations
            </p>
            <ul className="space-y-1">
              {designIterations.map((iteration) => {
                const isActive = iteration.id === activeIteration.id;

                return (
                  <li key={iteration.id}>
                    <Link
                      href={iteration.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-3 py-3 transition ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/0 text-white/78 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      <span>
                        <span className="block text-[0.65rem] uppercase tracking-[0.28em] opacity-60">
                          {iteration.label}
                        </span>
                        <span className="block text-sm font-semibold">
                          {iteration.title}
                        </span>
                      </span>
                      <span className="text-right text-[0.68rem] uppercase tracking-[0.18em] opacity-70">
                        {iteration.mood}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}

        <button
          type="button"
          aria-expanded={open}
          aria-controls="iteration-switcher-menu"
          onClick={() => setOpen((current) => !current)}
          className="group flex items-center gap-3 rounded-full border border-white/15 bg-black/72 px-4 py-3 text-left text-white shadow-[0_20px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:bg-black/82"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[0.72rem] font-semibold tracking-[0.22em] text-black">
            {activeIteration.label}
          </span>
          <span className="min-w-0">
            <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-white/55">
              Switch concept
            </span>
            <span className="block truncate text-sm font-semibold">
              {activeIteration.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`text-lg leading-none text-white/70 transition-transform ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </div>
    </div>
  );
}

