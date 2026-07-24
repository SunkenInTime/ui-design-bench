"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const base =
  "inline-flex h-13 items-center gap-2.5 rounded-full bg-[#2549e0] px-7 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_14px_34px_-12px_rgba(37,73,224,0.65)] transition-colors hover:bg-[#1d3cc4] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2549e0]";

/**
 * Pointer-following CTA. Position lives in motion values, never React state, so
 * tracking the cursor does not re-render the tree.
 */
export function MagneticCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 17, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 190, damping: 17, mass: 0.4 });

  if (reduce) {
    return (
      <a href={href} className={`${base} active:translate-y-[1px]`}>
        {children}
        <ArrowRightIcon size={16} weight="bold" />
      </a>
    );
  }

  function onMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 20);
    y.set(((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 14);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={base}
    >
      {children}
      <ArrowRightIcon size={16} weight="bold" />
    </motion.a>
  );
}
