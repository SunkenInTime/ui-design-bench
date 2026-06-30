"use client";

import { motion, useReducedMotion } from "motion/react";

const NODES = [
  { x: 200, y: 130, r: 9, label: "Today", primary: true },
  { x: 90, y: 60, r: 5, label: "Reading list" },
  { x: 320, y: 50, r: 5, label: "Project retro" },
  { x: 60, y: 190, r: 4 },
  { x: 150, y: 220, r: 4 },
  { x: 270, y: 210, r: 5, label: "Weekly review" },
  { x: 350, y: 160, r: 4 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [4, 5],
];

export function LiveGraph() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      role="img"
      aria-label="A graph of connected notes, with today's note at the center"
    >
      {EDGES.map(([from, to], i) => {
        const a = NODES[from];
        const b = NODES[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#C99A4B"
            strokeOpacity={0.35}
            strokeWidth={1}
          />
        );
      })}
      {NODES.map((node, i) => (
        <g key={i}>
          {node.primary ? (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#C99A4B"
              animate={
                reduce
                  ? undefined
                  : { opacity: [1, 0.65, 1], scale: [1, 1.12, 1] }
              }
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
          ) : (
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#C99A4B"
              fillOpacity={node.label ? 0.9 : 0.45}
            />
          )}
          {node.label && (
            <text
              x={node.x}
              y={node.primary ? node.y - 18 : node.y - 12}
              textAnchor="middle"
              className="font-mono"
              fontSize={10}
              fill={node.primary ? "#F4F4F5" : "#A1A1AA"}
            >
              {node.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
