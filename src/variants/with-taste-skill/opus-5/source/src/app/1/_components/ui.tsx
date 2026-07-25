import Image from "next/image";

import { cta, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Iteration 1, "Commonplace". A printed-page reading of the commonplace book:
  hairlines instead of boxes, book typography, near-total stillness.

  Locked palette, quoted from here by every section so nothing drifts:
    page    #f5f5f3
    ink     #17171a
    muted   #5c5c5e
    rule    #dcdcd8
    panel   #fdfdfc
    accent  #27418f   the only chromatic value anywhere on the page

  Radius is 0 on everything, buttons and photographs included.
  Motion is CSS :hover / :active only. No animation library is imported.
*/

/** Signup intent has one label (cta.primary) and one destination. */
const signupHref = `https://${product.domain}`;

/** The page measure. Every section sits on the same two gutters. */
export function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * The only signup button on the page. Accent fill with panel-white text:
 * #fdfdfc on #27418f measures about 9.2:1, comfortably past WCAG AA.
 */
export function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={signupHref}
      className={`inline-flex items-center justify-center rounded-none border border-[#27418f] bg-[#27418f] px-5 py-3 text-[15px] leading-none font-medium whitespace-nowrap text-[#fdfdfc] transition-colors hover:border-[#1c3170] hover:bg-[#1c3170] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27418f] active:translate-y-[1px] ${className}`}
    >
      {cta.primary}
    </a>
  );
}

/**
 * Used exactly once, in the hero. Ink hairline on the page ground, inverting to
 * a solid ink block on hover: about 15:1 at rest and 13:1 inverted.
 */
export function SecondaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#how"
      className={`inline-flex items-center justify-center rounded-none border border-[#17171a] px-5 py-3 text-[15px] leading-none font-medium whitespace-nowrap text-[#17171a] transition-colors hover:bg-[#17171a] hover:text-[#f5f5f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27418f] active:translate-y-[1px] ${className}`}
    >
      {cta.secondary}
    </a>
  );
}

/**
 * One treatment for every photograph on the page: slightly desaturated, a touch
 * more contrast, a single hairline border, no radius. Picsum returns arbitrary
 * subjects per seed, so this rule is what makes them read as one plate series.
 */
export function Plate({
  src,
  alt,
  width,
  height,
  sizes,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  /** Set on the hero plate only. Next 16 deprecates `priority`. */
  eager?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={`block h-auto w-full rounded-none border border-[#dcdcd8] saturate-[0.8] contrast-[1.05] ${className}`}
    />
  );
}
