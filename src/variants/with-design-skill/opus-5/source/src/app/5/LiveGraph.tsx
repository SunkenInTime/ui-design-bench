"use client";

import { useMemo, useState } from "react";
import styles from "./direction.module.css";

type Node = {
  id: number;
  label: string;
  x: number;
  y: number;
  channel: 1 | 2 | 3;
};

const seeded: Node[] = [
  { id: 1, label: "Ostrom, commons", x: 120, y: 70, channel: 1 },
  { id: 2, label: "Starter log", x: 300, y: 48, channel: 2 },
  { id: 3, label: "Shared metabolism", x: 210, y: 150, channel: 1 },
  { id: 4, label: "Monitoring costs", x: 420, y: 120, channel: 3 },
  { id: 5, label: "Why the first one died", x: 90, y: 210, channel: 2 },
  { id: 6, label: "Mutualism", x: 350, y: 226, channel: 1 },
  { id: 7, label: "Talk, November", x: 470, y: 216, channel: 3 },
];

const seededEdges: [number, number][] = [
  [1, 3],
  [3, 6],
  [1, 4],
  [2, 3],
  [5, 2],
  [6, 7],
  [4, 7],
];

/** Where a newly captured note lands, and what it attaches to. */
const landings = [
  { x: 250, y: 96, links: [3, 2] },
  { x: 380, y: 172, links: [6, 4] },
  { x: 160, y: 130, links: [1, 5] },
];

export function LiveGraph() {
  const [text, setText] = useState("");
  const [added, setAdded] = useState<Node[]>([]);
  const [edges, setEdges] = useState<[number, number][]>([]);

  const nodes = useMemo(() => [...seeded, ...added], [added]);

  const capture = () => {
    const label = text.trim();
    if (!label) return;
    const spot = landings[added.length % landings.length];
    const id = 100 + added.length;
    setAdded((prev) => [
      ...prev,
      { id, label: label.slice(0, 28), x: spot.x, y: spot.y, channel: 2 },
    ]);
    setEdges((prev) => [...prev, ...spot.links.map((l) => [id, l] as [number, number])]);
    setText("");
  };

  const find = (id: number) => nodes.find((n) => n.id === id);

  return (
    <section className={styles.console} aria-label="Capture demonstration">
      <header className={styles.consoleHead}>
        <span className={styles.channelKey}>
          <i className={styles.ch1} /> read
          <i className={styles.ch2} /> written
          <i className={styles.ch3} /> spoken
        </span>
        <span className={styles.readout}>
          {nodes.length} notes · {seededEdges.length + edges.length} links
        </span>
      </header>

      <svg
        className={styles.graph}
        viewBox="0 0 560 280"
        role="img"
        aria-label={`A graph of ${nodes.length} notes and the links between them`}
      >
        {seededEdges.map(([a, b]) => {
          const from = find(a);
          const to = find(b);
          if (!from || !to) return null;
          return (
            <line
              key={`s${a}-${b}`}
              className={styles.edge}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
            />
          );
        })}

        {edges.map(([a, b], i) => {
          const from = find(a);
          const to = find(b);
          if (!from || !to) return null;
          return (
            <line
              key={`n${a}-${b}-${i}`}
              className={styles.edgeNew}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
            />
          );
        })}

        {nodes.map((n) => {
          const fresh = n.id >= 100;
          return (
            <g key={n.id} className={fresh ? styles.nodeNew : styles.node}>
              <circle
                cx={n.x}
                cy={n.y}
                r={fresh ? 7 : 5}
                className={
                  n.channel === 1
                    ? styles.dot1
                    : n.channel === 2
                      ? styles.dot2
                      : styles.dot3
                }
              />
              <text x={n.x + 11} y={n.y + 4} className={styles.nodeLabel}>
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.captureRow}>
        <label className={styles.captureLabel} htmlFor="d5-capture">
          Capture
        </label>
        <div className={styles.captureField}>
          <span className={styles.shortcut}>⌥Space</span>
          <input
            id="d5-capture"
            className={styles.captureInput}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                capture();
              }
            }}
            placeholder="Type a thought, press enter, watch it attach"
            autoComplete="off"
          />
        </div>
        <button type="button" className={styles.captureButton} onClick={capture}>
          File it
        </button>
      </div>

      <p className={styles.consoleNote} aria-live="polite">
        {added.length === 0
          ? "Nothing is filed by hand. Tessera attaches a new note to the two it overlaps most."
          : `Filed “${added[added.length - 1].label}” and attached it to ${
              landings[(added.length - 1) % landings.length].links.length
            } existing notes.`}
      </p>
    </section>
  );
}
