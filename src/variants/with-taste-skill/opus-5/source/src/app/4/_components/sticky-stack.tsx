"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export type StackCard = {
  heading: string;
  body: string;
  image: StaticImageData;
  alt: string;
};

/**
 * A real sticky pile: each card pins near the top of the viewport at a slightly
 * lower offset than the last, and shrinks as the following card arrives over it.
 * Motivated by sequence: the three cards are one story told in order.
 */
export function StickyStack({ cards }: { cards: StackCard[] }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="grid gap-6">
        {cards.map((card) => (
          <CardBody key={card.heading} card={card} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {cards.map((card, index) => (
        <StickyCard
          key={card.heading}
          card={card}
          index={index}
          isLast={index === cards.length - 1}
        />
      ))}
    </div>
  );
}

function StickyCard({
  card,
  index,
  isLast,
}: {
  card: StackCard;
  index: number;
  isLast: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 8%", "end 8%"],
  });
  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0.4]);

  return (
    <div ref={track} className="h-[76vh] lg:h-[84vh]">
      <div
        className="sticky"
        style={{ top: `${5.5 + index * 1.1}rem` }}
      >
        <motion.div
          style={isLast ? undefined : { scale, opacity }}
          className="origin-top"
        >
          <CardBody card={card} />
        </motion.div>
      </div>
    </div>
  );
}

function CardBody({ card }: { card: StackCard }) {
  return (
    <article className="glass grid overflow-hidden rounded-3xl lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <h3 className="max-w-[16ch] font-[family-name:var(--font-outfit)] text-[1.9rem] leading-[1.1] font-medium tracking-[-0.025em] text-[#0f141a] sm:text-[2.4rem]">
          {card.heading}
        </h3>
        <p className="mt-5 max-w-[40ch] text-[15.5px] leading-relaxed text-[#586274]">
          {card.body}
        </p>
      </div>
      <div className="relative min-h-[240px] lg:min-h-[380px]">
        <Image
          src={card.image}
          alt={card.alt}
          placeholder="blur"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
