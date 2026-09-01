"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PAN_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(PAN_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** True when the pan should run: wide viewport and no reduced-motion preference. */
function usePanEnabled() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(PAN_QUERY).matches,
    () => true,
  );
}

/**
 * Vertical scroll drives a horizontal pan across feature panels.
 * Motivation: the five features are one sequence (capture, link, resurface,
 * own, search); reading them as a strip keeps them in order.
 *
 * Falls back to a vertical stack under prefers-reduced-motion and below md.
 * GSAP only in this leaf; no Motion in the same tree.
 */
export function HorizontalPan({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const enabled = usePanEnabled();

  useEffect(() => {
    if (!enabled || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [enabled]);

  if (!enabled) {
    return (
      <section id="features" data-mode="stack" className="group flex flex-col">
        {children}
      </section>
    );
  }

  return (
    <section
      id="features"
      data-mode="pan"
      ref={wrap}
      className="group relative overflow-hidden"
    >
      <div ref={track} className="flex h-[100dvh] items-stretch will-change-transform">
        {children}
      </div>
    </section>
  );
}
