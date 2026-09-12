/*
  Shared primitives for the "Quiet" direction at /3.

  RADIUS RULE for this whole route (documented once, obeyed everywhere):
    - interactive elements (buttons, pills, the floating nav shell) -> full pill
      (`rounded-full`)
    - panels, cards and images -> 16px (`rounded-2xl`)
    - nothing else on the page carries a radius

  Palette (locked, light theme, "Forest" family):
    bone page  #e9eae7   forest panel/CTA #12352a   ink text  #1c211e
    muted text #5a635e   soft panel       #f4f5f2   accent    #c2761a (amber)

  Accent discipline: amber is the single accent and appears only as a 2px rule
  mark and as link underlines. It is never used for text or for a fill, which
  also keeps every string comfortably above WCAG AA on bone.

  Hex values are written as literals in the class strings on purpose: Tailwind v4
  scans source text, so an interpolated token would never be compiled.
*/

import type { ReactNode } from "react";

/** Page gutter. Every section shares it so the vertical rhythm lines up. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-transform duration-200 ease-out hover:-translate-y-[2px] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-3";

/**
 * `forest` = forest fill with bone label (11.1:1).
 * `bone`   = bone fill with forest label (11.1:1). Used where the button sits on
 *            a photograph or on a forest panel.
 * Both fills are fully opaque, so no CTA ever relies on a photograph for its
 * contrast.
 */
export function PillButton({
  href,
  children,
  tone,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone: "forest" | "bone";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const tones = {
    forest:
      "bg-[#12352a] text-[#e9eae7] hover:bg-[#173f31] focus-visible:outline-[#12352a]",
    bone: "bg-[#e9eae7] text-[#12352a] hover:bg-[#f4f5f2] focus-visible:outline-[#e9eae7]",
  } as const;

  const sizes = {
    sm: "h-10 px-5 text-[13px]",
    md: "h-12 px-6",
    lg: "h-14 px-8 text-base",
  } as const;

  return (
    <a
      href={href}
      className={`${buttonBase} ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

/** The one eyebrow on this page. The amber rule is the accent mark. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="h-[2px] w-6 shrink-0 bg-[#c2761a]" />
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5a635e]">
        {children}
      </span>
    </div>
  );
}

/** Short amber rule used as a standalone accent mark (no label attached). */
export function AccentRule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-[2px] w-8 bg-[#c2761a] ${className}`} />;
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-outfit text-[1.75rem] leading-[1.12] tracking-tight text-[#1c211e] md:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}
