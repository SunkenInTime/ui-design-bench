"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  FolderOpenIcon,
  GraphIcon,
  type Icon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { capabilities, type Capability } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Explicit string to component record. capabilities[].icon holds the Phosphor
  export name, and every icon on this route renders at weight="regular".
*/
const icons: Record<string, Icon> = {
  LightningIcon,
  GraphIcon,
  SunIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  LockIcon,
};

const columns: Capability[][] = [capabilities.slice(0, 3), capabilities.slice(3, 6)];

/*
  Motion: a scroll reveal stagger, so the six rows arrive in reading order
  instead of all at once. That is the only reason it exists, and it collapses to
  static under prefers-reduced-motion.
*/
export function CapabilityRows() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-14 lg:grid-cols-2">
      {columns.map((column, columnIndex) => (
        <ul
          key={columnIndex}
          className="divide-y divide-white/[0.09] border-t border-white/[0.09]"
        >
          {column.map((capability, rowIndex) => {
            const Icon = icons[capability.icon];
            const order = columnIndex * 3 + rowIndex;

            return (
              <motion.li
                key={capability.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: order * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex gap-4 rounded-md px-3 py-5 transition-colors duration-200 hover:bg-[#121214]"
              >
                {Icon ? (
                  <Icon
                    size={18}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-[#8b8b87] transition-colors duration-200 group-hover:text-[#e8e8e6]"
                  />
                ) : null}
                <div>
                  <h3 className="font-mono text-[13px] text-[#e8e8e6]">
                    {capability.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.65] text-[#8b8b87]">
                    {capability.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
