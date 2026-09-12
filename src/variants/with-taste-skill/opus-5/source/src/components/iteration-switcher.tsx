"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HouseIcon, XIcon, SlidersHorizontalIcon } from "@phosphor-icons/react";
import { iterations } from "@/variants/with-taste-skill/opus-5/source/src/lib/iterations";

/*
  Development chrome, not part of any iteration's design.

  It deliberately carries its own dark palette and its own radius so it reads as
  a tool sitting on top of the work rather than a component belonging to whichever
  route is behind it. That is also why it is the only thing in the app allowed to
  ignore the page theme lock.

  z-index scale for this app:
    0  .. 40  route content, including each route's own sticky nav
    100       this switcher, which must stay above every route's chrome
*/
const SWITCHER_Z = "z-[100]";

export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);

  const activeSlug = iterations.find((i) => pathname === `/${i.slug}`)?.slug;
  const active = iterations.find((i) => i.slug === activeSlug);

  /*
    Number keys jump between iterations, which is the whole point of the control:
    comparing five directions is much easier when switching costs one keystroke.
    `0` returns to the index.
  */
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      // Never steal a keystroke that belongs to a field or an editable region.
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      if (event.key === "0") {
        router.push("/");
        return;
      }
      if (iterations.some((i) => i.slug === event.key)) {
        router.push(`/${event.key}`);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  if (hidden) {
    return (
      <button
        type="button"
        onClick={() => setHidden(false)}
        className={`${SWITCHER_Z} fixed bottom-5 left-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-900/90 text-zinc-300 shadow-lg backdrop-blur-md transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-[0.97]`}
        aria-label="Show the iteration switcher"
      >
        <SlidersHorizontalIcon size={16} weight="bold" />
      </button>
    );
  }

  return (
    <nav
      aria-label="Design iteration switcher"
      className={`${SWITCHER_Z} fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-zinc-900/90 p-1.5 font-sans shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md`}
    >
      <Link
        href="/"
        aria-label="All iterations"
        aria-current={pathname === "/" ? "page" : undefined}
        className={`flex size-8 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-[0.97] ${
          pathname === "/"
            ? "bg-white text-zinc-900"
            : "text-zinc-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        <HouseIcon size={15} weight="bold" />
      </Link>

      <span aria-hidden className="mx-0.5 h-5 w-px bg-white/15" />

      {iterations.map((iteration) => {
        const isActive = iteration.slug === activeSlug;
        return (
          <Link
            key={iteration.slug}
            href={`/${iteration.slug}`}
            aria-current={isActive ? "page" : undefined}
            title={`${iteration.name}: ${iteration.note}`}
            className={`flex size-8 items-center justify-center rounded-full text-[13px] font-medium tabular-nums transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-[0.97] ${
              isActive
                ? "bg-white text-zinc-900"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {iteration.slug}
          </Link>
        );
      })}

      {/* The name of the current direction, so the number means something. */}
      <span
        className="hidden px-2 text-[12px] leading-none text-zinc-400 sm:block"
        // Reserves width for the longest name so the pill does not resize on nav.
        style={{ minWidth: "5.5rem" }}
      >
        {active ? active.name : "Index"}
      </span>

      <span aria-hidden className="mx-0.5 h-5 w-px bg-white/15" />

      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label="Hide the iteration switcher"
        className="flex size-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-[0.97]"
      >
        <XIcon size={14} weight="bold" />
      </button>
    </nav>
  );
}
