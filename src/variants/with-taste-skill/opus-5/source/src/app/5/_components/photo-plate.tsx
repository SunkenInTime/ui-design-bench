import Image from "next/image";

/*
  One image treatment for the whole route. Picsum returns arbitrary photography
  per seed, so every photograph is desaturated and then tinted with a
  low-opacity rose layer plus a bottom scrim. Random subjects still read as one
  deliberate system.

  RADIUS RULE (page-wide): interactive elements are full-pill, panels and images
  are 12px (rounded-xl), nothing else has a radius.

  Performance note: the greyscale filter sits on the <img> itself, never on the
  pinned horizontal track that moves it. Filters on a moving container repaint
  continuously and destroy frame rate on mobile.
*/
export function PhotoPlate({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  sizes,
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Sizing lives on the wrapper so callers control the aspect per slot. */
  className?: string;
  /** Hook for animating the image inside its static frame. */
  imageClassName?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl bg-[#141416] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={`h-full w-full object-cover grayscale ${imageClassName}`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#f43f5e]/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/55 via-transparent to-transparent"
      />
    </div>
  );
}
