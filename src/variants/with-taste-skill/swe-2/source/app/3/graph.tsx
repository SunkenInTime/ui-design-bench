"use client";

import { motion, useReducedMotion } from "motion/react";

const ice = "#7cc4ff";

const NODES = [
  { id: 0, x: 400, y: 290, r: 10, hub: true, label: "the essay" },
  { id: 1, x: 250, y: 160, r: 6, label: "weil on attention" },
  { id: 2, x: 560, y: 150, r: 7, label: "garden notes" },
  { id: 3, x: 640, y: 330, r: 6, label: "two-paragraph rule" },
  { id: 4, x: 480, y: 460, r: 8, hub: true, label: "meetings" },
  { id: 5, x: 230, y: 380, r: 7, label: "books to re-lend" },
  { id: 6, x: 130, y: 270, r: 5 },
  { id: 7, x: 330, y: 90, r: 4 },
  { id: 8, x: 690, y: 210, r: 4 },
  { id: 9, x: 560, y: 540, r: 5, label: "tax notes" },
  { id: 10, x: 300, y: 520, r: 5 },
  { id: 11, x: 120, y: 470, r: 4 },
  { id: 12, x: 700, y: 460, r: 5 },
  { id: 13, x: 480, y: 60, r: 4 },
  { id: 14, x: 180, y: 80, r: 5 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 6],
  [1, 7],
  [1, 14],
  [2, 8],
  [2, 13],
  [3, 8],
  [3, 12],
  [4, 9],
  [4, 10],
  [4, 12],
  [5, 6],
  [5, 10],
  [5, 11],
  [7, 13],
  [9, 12],
  [10, 11],
];

export function Graph() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 800 600"
      className="h-full w-full"
      role="img"
      aria-label="A graph of fourteen notes connected by twenty-one links"
    >
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke={ice}
          strokeOpacity={0.22}
          strokeWidth={1}
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.4 + i * 0.05, ease: "easeOut" }}
        />
      ))}
      {NODES.map((n, i) => (
        <g key={n.id}>
          {n.hub && !reduce && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke={ice}
              strokeOpacity={0.5}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{
                duration: 2.8,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 1.6,
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          )}
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hub ? ice : "#0e1624"}
            stroke={ice}
            strokeWidth={n.hub ? 0 : 1.4}
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
              delay: 0.15 + i * 0.06,
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          {n.label && (
            <motion.text
              x={n.x + n.r + 8}
              y={n.y + 4}
              fontSize={12}
              fill="#8a93a5"
              fontFamily="var(--font-geist-mono), monospace"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.06, duration: 0.6 }}
            >
              {n.label}
            </motion.text>
          )}
        </g>
      ))}
    </svg>
  );
}
