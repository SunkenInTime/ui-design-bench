"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Slow scale on the plate behind the page's strongest sentence. Motivated by
 * hierarchy: this is the one line we want people to leave with.
 */
export function ZoomPlate({
  image,
  alt,
  children,
}: {
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.26]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[76vh] items-center overflow-hidden bg-[#0b0b0c]"
    >
      <motion.div
        style={reduce ? undefined : { scale }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Scrim keeps the sentence above AA contrast over any frame of the plate. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0b0b0c]/72"
      />
      <div className="relative w-full">{children}</div>
    </div>
  );
}
