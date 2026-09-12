"use client";

import { useState } from "react";

type Star = {
  id: string;
  x: number;
  y: number;
  r: number;
  label: string;
  cluster: string;
};

const STARS: Star[] = [
  // LABOR — work cluster, left
  { id: "launch", x: 122, y: 168, r: 4.5, label: "launch plan", cluster: "LABOR" },
  { id: "vendor", x: 208, y: 236, r: 3, label: "vendor emails", cluster: "LABOR" },
  { id: "q3", x: 138, y: 306, r: 3.5, label: "q3 review", cluster: "LABOR" },
  { id: "hiring", x: 66, y: 244, r: 2.5, label: "hiring rubric", cluster: "LABOR" },
  // IDEA — center cluster
  { id: "forgetting", x: 452, y: 240, r: 5.5, label: "on forgetting", cluster: "IDEA" },
  { id: "attention", x: 368, y: 176, r: 4, label: "essay: attention", cluster: "IDEA" },
  { id: "fonts", x: 536, y: 172, r: 3.5, label: "fonts that think", cluster: "IDEA" },
  { id: "brains", x: 506, y: 312, r: 4.5, label: "second brains", cluster: "IDEA" },
  { id: "argue", x: 394, y: 330, r: 3, label: "notes that argue back", cluster: "IDEA" },
  // DISCERE — learning cluster, upper right
  { id: "rust", x: 712, y: 110, r: 3.5, label: "rust lifetimes", cluster: "DISCERE" },
  { id: "thesis", x: 806, y: 178, r: 4.5, label: "thesis notes", cluster: "DISCERE" },
  { id: "sourdough", x: 646, y: 178, r: 3, label: "sourdough, finally", cluster: "DISCERE" },
  { id: "birdsong", x: 772, y: 62, r: 2.5, label: "birdsong app idea", cluster: "DISCERE" },
  // VITA — life cluster, lower right
  { id: "recipe", x: 762, y: 348, r: 4, label: "mum's recipe", cluster: "VITA" },
  { id: "kyoto", x: 848, y: 286, r: 3.5, label: "kyoto, november", cluster: "VITA" },
  { id: "dentist", x: 694, y: 400, r: 2.5, label: "dentist — book it", cluster: "VITA" },
  { id: "elo", x: 834, y: 396, r: 2.5, label: "elo's birthday", cluster: "VITA" },
];

const EDGES: [string, string][] = [
  ["launch", "vendor"],
  ["launch", "hiring"],
  ["vendor", "q3"],
  ["q3", "hiring"],
  ["launch", "q3"],
  ["forgetting", "attention"],
  ["forgetting", "brains"],
  ["forgetting", "argue"],
  ["attention", "fonts"],
  ["fonts", "brains"],
  ["argue", "brains"],
  ["rust", "thesis"],
  ["rust", "birdsong"],
  ["sourdough", "thesis"],
  ["rust", "sourdough"],
  ["thesis", "birdsong"],
  ["recipe", "kyoto"],
  ["recipe", "dentist"],
  ["kyoto", "elo"],
  ["recipe", "elo"],
  // the cross-links — where a second brain earns its keep
  ["thesis", "brains"],
  ["sourdough", "recipe"],
  ["q3", "forgetting"],
  ["fonts", "thesis"],
];

const CLUSTER_LABELS = [
  { name: "LABOR", x: 116, y: 380 },
  { name: "IDEA", x: 452, y: 404 },
  { name: "DISCERE", x: 726, y: 222 },
  { name: "VITA", x: 776, y: 448 },
];

const byId = new Map(STARS.map((s) => [s.id, s]));

const NEIGHBORS = new Map<string, Set<string>>();
for (const s of STARS) NEIGHBORS.set(s.id, new Set([s.id]));
for (const [a, b] of EDGES) {
  NEIGHBORS.get(a)!.add(b);
  NEIGHBORS.get(b)!.add(a);
}

export function Sky() {
  const [active, setActive] = useState<string | null>(null);
  const neighborhood = active ? NEIGHBORS.get(active)! : null;

  const starOpacity = (id: string) =>
    !neighborhood ? 0.95 : neighborhood.has(id) ? 1 : 0.22;
  const labelOpacity = (id: string) =>
    !neighborhood ? 0.55 : neighborhood.has(id) ? 1 : 0.12;

  return (
    <figure>
      <svg
        viewBox="0 0 940 500"
        role="img"
        aria-label="A constellation map of notes. Four clusters — Labor, Idea, Discere, Vita — joined by thin lines."
        className="h-auto w-full"
        onMouseLeave={() => setActive(null)}
      >
        {/* faint graticule */}
        {[80, 180, 280, 380].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="940"
            y2={y}
            stroke="#252E5C"
            strokeWidth="0.5"
            strokeDasharray="2 6"
          />
        ))}

        {/* edges */}
        {EDGES.map(([a, b]) => {
          const sa = byId.get(a)!;
          const sb = byId.get(b)!;
          const lit = active !== null && (a === active || b === active);
          return (
            <line
              key={`${a}-${b}`}
              x1={sa.x}
              y1={sa.y}
              x2={sb.x}
              y2={sb.y}
              stroke={lit ? "#D9A94E" : "#3A4470"}
              strokeWidth={lit ? 1.4 : 0.8}
              opacity={!neighborhood ? 0.5 : lit ? 0.95 : 0.12}
              className="transition-opacity duration-200"
            />
          );
        })}

        {/* constellation names */}
        {CLUSTER_LABELS.map((c) => (
          <text
            key={c.name}
            x={c.x}
            y={c.y}
            textAnchor="middle"
            className="fill-[#5A6599] text-[11px] italic"
            style={{ letterSpacing: "0.35em" }}
          >
            {c.name}
          </text>
        ))}

        {/* stars */}
        {STARS.map((s) => (
          <g
            key={s.id}
            onMouseEnter={() => setActive(s.id)}
            className="cursor-pointer"
          >
            {/* generous hit area */}
            <circle cx={s.x} cy={s.y} r={22} fill="transparent" />
            <circle
              cx={s.x}
              cy={s.y}
              r={s.r + 7}
              fill="none"
              stroke="#D9A94E"
              strokeWidth="0.8"
              opacity={active === s.id ? 0.9 : 0}
              className="transition-opacity duration-200"
            />
            <circle
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={active === s.id ? "#D9A94E" : "#F4F1E4"}
              opacity={starOpacity(s.id)}
              className="transition-opacity duration-200"
            />
            <text
              x={s.x}
              y={s.y - s.r - 8}
              textAnchor="middle"
              className="fill-[#C9CEEF] text-[12px]"
              opacity={labelOpacity(s.id)}
              style={{ transition: "opacity 200ms" }}
            >
              {s.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 flex items-baseline justify-between text-[12px] text-[#5A6599]">
        <span>fig. 1 — one person&rsquo;s sky, october</span>
        <span className="hidden sm:inline">
          hover a star to trace its neighbourhood
        </span>
      </figcaption>
    </figure>
  );
}
