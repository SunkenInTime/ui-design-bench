"use client";

import { useReducedMotion } from "motion/react";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  if (reduce) {
    return (
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-4">
        {items.map((item) => (
          <li key={item} className="text-2xl font-medium md:text-4xl">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="overflow-hidden">
      <ul className="animate-marquee flex w-max gap-10 pr-10">
        {row.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="text-2xl font-medium whitespace-nowrap md:text-5xl"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
