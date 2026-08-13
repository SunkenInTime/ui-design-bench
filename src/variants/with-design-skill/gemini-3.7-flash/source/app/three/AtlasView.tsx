"use client";

import { useMemo, useState } from "react";
import styles from "./atlas.module.css";

const named = [
  {
    id: "capture",
    x: 280,
    y: 210,
    r: 6.8,
    name: "Capture",
    bayer: "α Mneme",
    note: "The first mark. A thought lands before it has a name.",
    links: ["link", "compost"],
  },
  {
    id: "link",
    x: 400,
    y: 150,
    r: 5.8,
    name: "Link",
    bayer: "β Mneme",
    note: "A line drawn because two thoughts recognized each other.",
    links: ["capture", "recall"],
  },
  {
    id: "recall",
    x: 560,
    y: 205,
    r: 6.2,
    name: "Recall",
    bayer: "γ Mneme",
    note: "Not search. Recognition. The chart finds the shape you already knew.",
    links: ["link", "wander"],
  },
  {
    id: "compost",
    x: 340,
    y: 310,
    r: 5.2,
    name: "Compost",
    bayer: "δ Mneme",
    note: "Old notes that feed new ones. Nothing is deleted; it darkens into soil.",
    links: ["capture", "sleep"],
  },
  {
    id: "wander",
    x: 640,
    y: 300,
    r: 5.5,
    name: "Wander",
    bayer: "ε Mneme",
    note: "The long way home. Adjacent thoughts you did not query, but needed.",
    links: ["recall", "sleep"],
  },
  {
    id: "sleep",
    x: 480,
    y: 390,
    r: 6,
    name: "Sleep",
    bayer: "ζ Mneme",
    note: "What the palace does after you close it. Connections set like plaster.",
    links: ["compost", "wander"],
  },
] as const;

const field = [
  [90, 80, 1.1],
  [150, 140, 1.4],
  [210, 60, 0.9],
  [250, 320, 1.2],
  [120, 400, 1],
  [70, 260, 1.3],
  [190, 470, 0.8],
  [310, 40, 1.1],
  [380, 90, 0.7],
  [450, 50, 1.5],
  [520, 100, 1],
  [600, 70, 1.2],
  [690, 120, 0.9],
  [760, 80, 1.3],
  [820, 160, 1],
  [780, 240, 0.8],
  [840, 320, 1.4],
  [800, 400, 1],
  [730, 450, 1.2],
  [670, 500, 0.9],
  [580, 530, 1.1],
  [500, 500, 0.7],
  [420, 540, 1.3],
  [330, 510, 1],
  [240, 540, 1.2],
  [160, 500, 0.8],
  [720, 200, 0.7],
  [140, 200, 1],
  [470, 80, 0.9],
  [300, 450, 1.1],
  [610, 420, 0.8],
  [90, 330, 0.7],
] as const;

type StarId = (typeof named)[number]["id"];

export function AtlasView() {
  const [active, setActive] = useState<StarId | null>("capture");
  const star = named.find((item) => item.id === active) ?? named[0];

  const lines = useMemo(() => {
    const drawn = new Set<string>();
    const pairs: Array<[number, number, number, number, boolean]> = [];
    for (const item of named) {
      for (const link of item.links) {
        const other = named.find((node) => node.id === link);
        if (!other) continue;
        const key = [item.id, other.id].sort().join("-");
        if (drawn.has(key)) continue;
        drawn.add(key);
        const lit =
          active !== null && (item.id === active || other.id === active);
        pairs.push([item.x, item.y, other.x, other.y, lit]);
      }
    }
    return pairs;
  }, [active]);

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <p>Tab. XIV · Borealis</p>
        <p>Plate of the northern thought</p>
        <p>Mneme 0h 12m</p>
      </header>

      <main id="content" className={styles.main}>
        <div className={styles.cartouche}>
          <p className={styles.kicker}>Uranographia domestica</p>
          <h1>Locus</h1>
          <p className={styles.sub}>
            Thoughts as stars. Links as constellations you name yourself.
          </p>
        </div>

        <div className={styles.chart}>
          <svg
            className={styles.svg}
            viewBox="0 0 900 600"
            role="img"
            aria-label="Star chart of the constellation Mneme"
          >
            <defs>
              <radialGradient id="wash" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#d7deea" />
                <stop offset="100%" stopColor="#c5d0dc" />
              </radialGradient>
            </defs>
            <rect width="900" height="600" fill="url(#wash)" />
            <g className={styles.grid} aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={50 + i * 100}
                  y1={30}
                  x2={50 + i * 100}
                  y2={570}
                />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1={40}
                  y1={50 + i * 100}
                  x2={860}
                  y2={50 + i * 100}
                />
              ))}
            </g>
            {lines.map(([x1, y1, x2, y2, lit], i) => (
              <line
                key={i}
                className={lit ? styles.lineOn : styles.line}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
              />
            ))}
            {field.map(([x, y, r], i) => (
              <circle key={i} className={styles.dim} cx={x} cy={y} r={r} />
            ))}
            {named.map((item) => (
              <g key={item.id}>
                <circle
                  className={styles.hit}
                  cx={item.x}
                  cy={item.y}
                  r={26}
                  onClick={() => setActive(item.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.bayer}, ${item.name}`}
                  aria-pressed={active === item.id}
                />
                <circle
                  className={active === item.id ? styles.starOn : styles.star}
                  cx={item.x}
                  cy={item.y}
                  r={item.r}
                />
                <text
                  className={styles.label}
                  x={item.x + 10}
                  y={item.y - 10}
                >
                  {item.bayer}
                </text>
              </g>
            ))}
            <g className={styles.compass} transform="translate(92 500)">
              <circle r="28" />
              <polygon points="0,-22 6,4 0,10 -6,4" />
              <text y="-32">N</text>
            </g>
          </svg>

          <aside className={styles.legend} aria-live="polite">
            <p className={styles.plate}>Constellation Mneme</p>
            <h2>
              {star.bayer}
              <span>{star.name}</span>
            </h2>
            <p>{star.note}</p>
            <button
              className={styles.cta}
              type="button"
              onClick={() => setActive("link")}
            >
              Chart a thought
            </button>
          </aside>
        </div>
      </main>

      <footer className={styles.foot}>
        <p>Engraved for private use · Locus atlas · Do not catalog by folder</p>
      </footer>
    </div>
  );
}
