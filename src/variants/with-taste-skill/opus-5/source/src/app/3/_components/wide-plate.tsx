"use client";

/*
  Wide photographic plate. One full width image with a gentle scale driven by
  Motion's `useScroll`, transform only, no scroll listener.

  Why the motion is here: it is the one moment on the page that is purely
  atmospheric, and the slow settle gives the plate a sense of depth as it passes
  rather than reading as a flat band. It collapses to a static frame under
  `useReducedMotion`.

  The caption sits outside the image and states a real product fact, not a photo
  credit.
*/

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Container } from "./ui";

export function WidePlate() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div
          ref={ref}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f4f5f2] md:aspect-[21/9]"
        >
          <motion.div
            className="absolute inset-0"
            style={reduce ? undefined : { scale }}
          >
            <Image
              src={photo("verso-quiet-plate-wide", 2400, 1100)}
              alt=""
              fill
              sizes="100vw"
              className="object-cover saturate-[0.85]"
            />
          </motion.div>
        </div>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-[#5a635e]">
          Every note is a markdown file in a folder you choose.
        </p>
      </Container>
    </section>
  );
}
