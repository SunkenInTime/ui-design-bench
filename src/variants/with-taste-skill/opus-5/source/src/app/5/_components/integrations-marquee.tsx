"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { integrations, logoUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Reduced-motion preference read as an external store, so it stays correct if the
  user flips the OS setting while the page is open. This is a `change` listener on
  a media query, not a scroll listener.
*/
const REDUCE = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(REDUCE);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

const getSnapshot = () => !window.matchMedia(REDUCE).matches;
/* On the server, render the static wrapped row. */
const getServerSnapshot = () => false;

/*
  MOTION: one infinite horizontal marquee, the only marquee on the page.
  Justification: breadth that needs no individual attention, the row shows how
  many tools Verso sits beside without asking anyone to read six logos in order.
  Pauses on hover so a logo can be looked at. Under reduced motion it never
  builds and the same logos render as a static wrapped row.
*/
export function IntegrationsMarquee() {
  const root = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  const animate = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!animate) return;
    const ctx = gsap.context(() => {
      tween.current = gsap.to(".k-marquee-track", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, root);
    return () => {
      tween.current = null;
      ctx.revert();
    };
  }, [animate]);

  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className={
        animate
          ? "flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
          : "flex flex-wrap items-center justify-center gap-10 md:gap-14"
      }
    >
      {integrations.map((brand) => (
        <Image
          key={brand.slug}
          unoptimized
          src={logoUrl(brand.slug, "#f4f4f3")}
          alt={brand.name}
          width={112}
          height={28}
          className="h-6 w-auto opacity-55 md:h-7"
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[6vw]">
        <p className="max-w-[38ch] text-sm text-[#8e8e8c]">
          Verso works with the tools already open on your machine.
        </p>
      </div>

      <div
        ref={root}
        className="mt-9 w-full overflow-hidden border-t border-white/10 py-9"
        onMouseEnter={() => tween.current?.pause()}
        onMouseLeave={() => tween.current?.resume()}
      >
        <div
          className={`k-marquee-track flex items-center ${
            animate ? "w-max" : "justify-center px-5"
          }`}
        >
          {row(false)}
          {animate ? row(true) : null}
        </div>
      </div>
    </section>
  );
}
