"use client";

import { useState } from "react";
import styles from "./plan.module.css";

/* ------------------------------------------------------------------ *
 * Isometric projection
 *
 * One projection function drives every mark in the drawing: floors,
 * walls, furniture, hatching, door swings and dimension lines. Nothing
 * is hand-placed in screen space except the callout labels, so the
 * projection can never drift between elements.
 *
 *   screen.x = (x - y) * KX * U
 *   screen.y = (x + y) * KY * U - z * KZ * U
 *
 * Plan coordinates are in metres. +x runs down-right, +y runs down-left.
 * ------------------------------------------------------------------ */

const U = 34; // pixels per metre
const KX = 0.88;
const KY = 0.5;
const KZ = 0.95;
const WALL_H = 0.62; // metres — knee-high walls so every room stays readable

const r2 = (n: number) => Math.round(n * 100) / 100;

function proj(x: number, y: number, z = 0): [number, number] {
  return [r2((x - y) * KX * U), r2((x + y) * KY * U - z * KZ * U)];
}

const p = (x: number, y: number, z = 0) => proj(x, y, z).join(",");

/*
 * Text lying flat on the floor plane. Both frames keep the glyph "up" vector
 * pointing up-screen — the other pairing of in-plane axes is a pure 180°
 * rotation, which passes a determinant check but renders upside down.
 */
/** Reads along plan +x, running down-right. */
const FLAT_X = `matrix(${KX} ${KY} ${-KX} ${KY} 0 0)`;
/** Reads along plan -y, running up-right (the right-facing axis). */
const FLAT_Y = `matrix(${KX} ${-KY} ${KX} ${KY} 0 0)`;

type Pt = [number, number];
type Rect = [number, number, number, number]; // x0, y0, x1, y1

type Room = {
  id: string;
  name: string;
  full: string;
  rect: Rect;
  dim: string;
  area: string;
  /** Room schedule "function" column — the claim, stated plainly. */
  fn: string;
  /** Redline callout, authored as short lines so it never overruns the sheet. */
  note: string[];
  anchor: Pt; // leader origin, plan coords
  dx: number; // label offset, screen px
  dy: number;
  align: "start" | "end";
  axis?: "x" | "y"; // which plan axis the floor label reads along
  hatch?: boolean;
  furniture?: Rect[];
};

const ROOMS: Room[] = [
  {
    id: "001",
    name: "DAILY",
    full: "Daily note",
    rect: [6.0, 0, 10.4, 4.4],
    dim: "4.40 × 4.40",
    area: "19.4",
    fn: "Opens the moment you launch Cairn. Today's date, an empty page, cursor already in it.",
    note: ["ENTRY. Today's note opens", "when you launch — dated,", "blank, cursor waiting."],
    anchor: [8.2, 2.2],
    dx: 170,
    dy: -132,
    align: "start",
    furniture: [[6.9, 2.6, 9.5, 3.4]],
  },
  {
    id: "002",
    name: "STACKS",
    full: "Stacks",
    rect: [0, 0, 4.2, 5.4],
    dim: "4.20 × 5.40",
    area: "22.7",
    fn: "Plain markdown files on your own disk. Opens with no network. Leave Cairn and you still have every file.",
    note: ["MARKDOWN ON YOUR DISK.", "No network required.", "Leave, and the files stay."],
    anchor: [2.1, 2.7],
    dx: -142,
    dy: -118,
    align: "end",
    furniture: [
      [0.4, 0.5, 1.0, 4.9],
      [1.6, 0.5, 2.2, 4.9],
      [2.8, 0.5, 3.4, 4.9],
    ],
  },
  {
    id: "003",
    name: "PASSAGE",
    full: "Passage",
    rect: [4.2, 0, 6.0, 9.2],
    dim: "1.80 × 9.20",
    area: "16.6",
    fn: "Type [[ to cut a door between two notes. The way back is drawn on the other note without you asking.",
    note: ["TYPE [[ TO CUT A DOOR.", "The way back appears on", "the other note by itself."],
    anchor: [5.1, 4.6],
    dx: -152,
    dy: 128,
    align: "end",
    axis: "y",
  },
  {
    id: "004",
    name: "ARCHIVE",
    full: "Archive",
    rect: [0, 5.4, 4.2, 9.2],
    dim: "4.20 × 3.80",
    area: "16.0",
    fn: "Every note keeps its own version history. Read any earlier draft, or put it back.",
    note: ["EVERY NOTE KEEPS ITS OWN", "history. Read any earlier", "draft, or put it back."],
    anchor: [2.1, 7.3],
    dx: -28,
    dy: 122,
    align: "end",
    hatch: true,
    furniture: [[0.5, 5.9, 3.7, 6.5]],
  },
  {
    id: "005",
    name: "RESURFACE",
    full: "Resurface",
    rect: [10.4, 0, 13.6, 4.0],
    dim: "3.20 × 4.00",
    area: "12.8",
    fn: "Reached through a door you had forgotten. Cairn opens notes you have not touched in a year that bear on the page you are writing today.",
    note: ["THE DOOR YOU FORGOT.", "Notes untouched for a year", "that bear on today's page."],
    anchor: [12.0, 2.0],
    dx: 152,
    dy: -140,
    align: "start",
    // Runs on the other floor axis so it does not share a baseline with 001.
    axis: "y",
    furniture: [[11.2, 2.8, 13.0, 3.4]],
  },
  {
    id: "006",
    name: "READING",
    full: "Reading room",
    rect: [6.0, 4.4, 10.4, 9.2],
    dim: "4.40 × 4.80",
    area: "21.1",
    fn: "Search reads every note you have, down to the text inside scanned PDFs and images.",
    note: ["SEARCH READS EVERYTHING,", "down to the text inside", "scanned PDFs and images."],
    anchor: [8.2, 6.8],
    dx: 150,
    dy: 128,
    align: "start",
    furniture: [[7.0, 5.7, 9.4, 7.9]],
  },
  {
    id: "007",
    name: "ANNEX",
    full: "Annex",
    rect: [10.4, 4.0, 13.6, 9.2],
    dim: "3.20 × 5.20",
    area: "16.6",
    fn: "The same vault opens on your desktop and on your phone.",
    note: ["ONE VAULT, TWO WAYS IN —", "the same rooms on your", "desktop and your phone."],
    anchor: [12.0, 6.6],
    dx: 150,
    dy: 72,
    align: "start",
    // Same reason as 005: keeps it clear of 006's label.
    axis: "y",
    furniture: [
      [11.0, 4.8, 12.9, 5.4],
      [11.0, 7.6, 12.9, 8.2],
    ],
  },
];

/* ---------------------------------- walls --------------------------------- */

type Wall = { a: Pt; b: Pt; doors?: [number, number][] };

/**
 * Walls are authored once for the whole building rather than per room, so a
 * shared wall is a single object and a doorway is never solid from one side.
 * Door positions are distances in metres measured from point `a`.
 */
const WALLS: Wall[] = [
  { a: [0, 0], b: [13.6, 0], doors: [[7.6, 8.8]] }, // entrance
  { a: [13.6, 0], b: [13.6, 9.2] },
  { a: [13.6, 9.2], b: [0, 9.2] },
  { a: [0, 9.2], b: [0, 0] },
  { a: [4.2, 0], b: [4.2, 9.2], doors: [[2.0, 2.9], [6.6, 7.5]] },
  { a: [6.0, 0], b: [6.0, 9.2], doors: [[1.4, 2.3], [6.0, 6.9]] },
  { a: [10.4, 0], b: [10.4, 9.2], doors: [[1.6, 2.5], [6.4, 7.3]] },
  { a: [0, 5.4], b: [4.2, 5.4] },
  { a: [6.0, 4.4], b: [10.4, 4.4], doors: [[1.6, 2.5]] },
  { a: [10.4, 4.0], b: [13.6, 4.0], doors: [[1.3, 2.2]] },
];

type Quad = { pts: string; depth: number };

/** Split a wall around its door openings and extrude each remaining piece. */
function wallQuads(): Quad[] {
  const out: Quad[] = [];
  for (const w of WALLS) {
    const [ax, ay] = w.a;
    const [bx, by] = w.b;
    const len = Math.hypot(bx - ax, by - ay);
    const ux = (bx - ax) / len;
    const uy = (by - ay) / len;

    const spans: [number, number][] = [];
    let cursor = 0;
    for (const [d0, d1] of (w.doors ?? []).slice().sort((m, n) => m[0] - n[0])) {
      if (d0 > cursor) spans.push([cursor, d0]);
      cursor = Math.max(cursor, d1);
    }
    if (cursor < len) spans.push([cursor, len]);

    for (const [t0, t1] of spans) {
      const x0 = ax + ux * t0;
      const y0 = ay + uy * t0;
      const x1 = ax + ux * t1;
      const y1 = ay + uy * t1;
      out.push({
        pts: [
          p(x0, y0, 0),
          p(x1, y1, 0),
          p(x1, y1, WALL_H),
          p(x0, y0, WALL_H),
        ].join(" "),
        depth: (x0 + y0 + x1 + y1) / 2,
      });
    }
  }
  // Painter's algorithm: far walls first, so near walls occlude correctly.
  return out.sort((m, n) => m.depth - n.depth);
}

const WALL_QUADS = wallQuads();

/* --------------------------------- helpers -------------------------------- */

const floorPts = ([x0, y0, x1, y1]: Rect) =>
  [p(x0, y0), p(x1, y0), p(x1, y1), p(x0, y1)].join(" ");

/** Hatch lines running along plan +x, so the hatching sits in the floor plane. */
function hatch([x0, y0, x1, y1]: Rect, step = 0.42): number[][] {
  const out: number[][] = [];
  for (let y = y0 + step; y < y1 - 0.05; y += step) {
    const a = proj(x0 + 0.12, y);
    const b = proj(x1 - 0.12, y);
    out.push([a[0], a[1], b[0], b[1]]);
  }
  return out;
}

/** Filled arrow terminator pointing at `tip`, aligned to the dimension line. */
function arrow(tip: Pt, from: Pt, size = 8) {
  const dx = tip[0] - from[0];
  const dy = tip[1] - from[1];
  const l = Math.hypot(dx, dy) || 1;
  const ux = dx / l;
  const uy = dy / l;
  const bx = tip[0] - ux * size;
  const by = tip[1] - uy * size;
  const nx = -uy * size * 0.3;
  const ny = ux * size * 0.3;
  return `${r2(tip[0])},${r2(tip[1])} ${r2(bx + nx)},${r2(by + ny)} ${r2(bx - nx)},${r2(by - ny)}`;
}

/** A dimension line with extension lines, arrow terminators and a flat label. */
function Dimension({
  from,
  to,
  off,
  label,
  flat,
}: {
  from: Pt;
  to: Pt;
  off: Pt; // offset direction in plan coords
  label: string;
  flat: string;
}) {
  const ext = 1.15;
  const a = proj(from[0] + off[0], from[1] + off[1]);
  const b = proj(to[0] + off[0], to[1] + off[1]);
  const ea = proj(from[0] + off[0] * ext, from[1] + off[1] * ext);
  const eb = proj(to[0] + off[0] * ext, to[1] + off[1] * ext);
  const f0 = proj(from[0], from[1]);
  const f1 = proj(to[0], to[1]);
  const mid = proj(
    (from[0] + to[0]) / 2 + off[0],
    (from[1] + to[1]) / 2 + off[1],
  );

  return (
    <g className={styles.dim}>
      <line x1={f0[0]} y1={f0[1]} x2={ea[0]} y2={ea[1]} className={styles.dimExt} />
      <line x1={f1[0]} y1={f1[1]} x2={eb[0]} y2={eb[1]} className={styles.dimExt} />
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={styles.dimLine} />
      <polygon points={arrow(a, b)} className={styles.dimArrow} />
      <polygon points={arrow(b, a)} className={styles.dimArrow} />
      <text
        transform={`translate(${mid[0]} ${mid[1] - 7}) ${flat}`}
        textAnchor="middle"
        className={styles.dimText}
      >
        {label}
      </text>
    </g>
  );
}

/** Quarter-circle door swing, sampled in plan space then projected. */
function doorSwing(hinge: Pt, closed: Pt, openDir: Pt) {
  const rx = closed[0] - hinge[0];
  const ry = closed[1] - hinge[1];
  const radius = Math.hypot(rx, ry);
  const a0 = Math.atan2(ry, rx);
  const a1 = Math.atan2(openDir[1], openDir[0]);
  let sweep = a1 - a0;
  while (sweep > Math.PI) sweep -= Math.PI * 2;
  while (sweep < -Math.PI) sweep += Math.PI * 2;

  const steps = 16;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = a0 + (sweep * i) / steps;
    pts.push(p(hinge[0] + Math.cos(t) * radius, hinge[1] + Math.sin(t) * radius));
  }
  const leafEnd: Pt = [
    hinge[0] + Math.cos(a1) * radius,
    hinge[1] + Math.sin(a1) * radius,
  ];
  return { arc: pts.join(" "), hinge: proj(hinge[0], hinge[1]), leaf: proj(leafEnd[0], leafEnd[1]) };
}

/**
 * Scalloped revision cloud that follows a room's isometric outline. A
 * screen-aligned box around a diamond would swallow the neighbouring rooms,
 * so the cloud is grown outward from the room's own four corners.
 */
function cloudForRoom([x0, y0, x1, y1]: Rect, grow = 17, rad = 9) {
  const corners = [proj(x0, y0), proj(x1, y0), proj(x1, y1), proj(x0, y1)];
  const cx = corners.reduce((s, c) => s + c[0], 0) / 4;
  const cy = corners.reduce((s, c) => s + c[1], 0) / 4;
  const out = corners.map(([x, y]) => {
    const dx = x - cx;
    const dy = y - cy;
    const l = Math.hypot(dx, dy) || 1;
    return [r2(x + (dx / l) * grow), r2(y + (dy / l) * grow)] as Pt;
  });

  const parts = [`M ${out[0][0]} ${out[0][1]}`];
  for (let i = 0; i < 4; i++) {
    const a = out[i];
    const b = out[(i + 1) % 4];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.max(2, Math.round(len / (rad * 1.7)));
    for (let k = 1; k <= n; k++) {
      const t = k / n;
      parts.push(
        `A ${rad} ${rad} 0 0 1 ${r2(a[0] + (b[0] - a[0]) * t)} ${r2(a[1] + (b[1] - a[1]) * t)}`,
      );
    }
  }
  // Tag sits on the right-hand (east) corner of the cloud.
  return { d: parts.join(" ") + " Z", tag: out[1] };
}

const SWING = doorSwing([10.4, 2.5], [10.4, 1.6], [1, 0]);
const CLOUD = cloudForRoom([10.4, 0, 13.6, 4.0]);

/* ------------------------------- component -------------------------------- */

const DEFAULT_ROOM = "005";

export function FloorPlan() {
  // Resurface is the drawing's subject, so it is annotated by default and the
  // sheet returns to it when the pointer leaves.
  const [active, setActive] = useState<string>(DEFAULT_ROOM);
  const current = ROOMS.find((room) => room.id === active) ?? ROOMS[4];

  return (
    <figure className={styles.figure}>
      <div className={styles.figureHead}>
        <div className={styles.figureTitle}>
          <span className={styles.drawingNo}>DWG CRN-002</span>
          <h2 className={styles.figureName}>Level 01 — vault plan</h2>
        </div>
        <div className={styles.figureMeta}>
          <span className={styles.scale}>SCALE 1:50</span>
          <span className={styles.projection}>ISOMETRIC</span>
          <span className={styles.north} aria-hidden="true">
            <svg viewBox="0 0 30 54" width="26" height="47">
              <polygon points="15,3 23,39 15,31 7,39" className={styles.northHead} />
              <polygon points="15,3 15,31 7,39" className={styles.northFill} />
              <text x="15" y="52" textAnchor="middle" className={styles.northN}>
                N
              </text>
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.canvas}>
        <svg viewBox="0 0 1140 550" className={styles.svg} role="group">
          <title>
            Isometric floor plan of a Cairn vault. Seven rooms, each one a
            feature of the app.
          </title>

          <g transform="translate(450 100)">
            {/* ---- floors + labels: the interactive layer ---- */}
            <g>
              {ROOMS.map((room) => {
                const on = room.id === active;
                const c = proj(
                  (room.rect[0] + room.rect[2]) / 2,
                  (room.rect[1] + room.rect[3]) / 2,
                );
                return (
                  <g
                    key={room.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={on}
                    aria-label={`Room ${room.id}, ${room.full}. ${room.fn}`}
                    className={`${styles.room} ${on ? styles.roomOn : ""}`}
                    onMouseEnter={() => setActive(room.id)}
                    onFocus={() => setActive(room.id)}
                    onClick={() => setActive(room.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(room.id);
                      }
                    }}
                  >
                    <polygon points={floorPts(room.rect)} className={styles.floor} />

                    {room.hatch &&
                      hatch(room.rect).map(([hx1, hy1, hx2, hy2], i) => (
                        <line
                          key={i}
                          x1={hx1}
                          y1={hy1}
                          x2={hx2}
                          y2={hy2}
                          className={styles.hatch}
                        />
                      ))}

                    {room.furniture?.map((f, i) => (
                      <polygon key={i} points={floorPts(f)} className={styles.furniture} />
                    ))}

                    <polygon points={floorPts(room.rect)} className={styles.floorEdge} />

                    <text
                      transform={`translate(${c[0]} ${c[1]}) ${
                        room.axis === "y" ? FLAT_Y : FLAT_X
                      }`}
                      textAnchor="middle"
                      className={styles.roomLabel}
                    >
                      <tspan x="0" dy="-9" className={styles.roomNo}>
                        {room.id}
                      </tspan>
                      <tspan x="0" dy="17" className={styles.roomName}>
                        {room.name}
                      </tspan>
                      <tspan x="0" dy="14" className={styles.roomDim}>
                        {room.dim}
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </g>

            {/* ---- walls, sorted back to front ---- */}
            <g className={styles.walls}>
              {WALL_QUADS.map((q, i) => (
                <polygon key={i} points={q.pts} className={styles.wall} />
              ))}
            </g>

            {/* ---- annotation layer, never occluded by walls ---- */}
            <g className={styles.annotation}>
              {/* the door you forgot */}
              <polyline points={SWING.arc} className={styles.swingArc} />
              <line
                x1={SWING.hinge[0]}
                y1={SWING.hinge[1]}
                x2={SWING.leaf[0]}
                y2={SWING.leaf[1]}
                className={styles.swingLeaf}
              />

              <path d={CLOUD.d} className={styles.cloud} />
              <g transform={`translate(${CLOUD.tag[0] + 15} ${CLOUD.tag[1] - 13})`}>
                <polygon points="0,-11 11,8 -11,8" className={styles.revTag} />
                <text x="0" y="5" textAnchor="middle" className={styles.revTagText}>
                  3
                </text>
              </g>

              {/* section marker A–A, cutting through the passage */}
              <g className={styles.section}>
                <line
                  x1={proj(5.1, -1.1)[0]}
                  y1={proj(5.1, -1.1)[1]}
                  x2={proj(5.1, 10.3)[0]}
                  y2={proj(5.1, 10.3)[1]}
                  className={styles.sectionLine}
                />
                {[
                  proj(5.1, -1.1),
                  proj(5.1, 10.3),
                ].map(([sx, sy], i) => (
                  <g key={i} transform={`translate(${sx} ${sy})`}>
                    <circle r="12" className={styles.sectionBubble} />
                    <text y="4.5" textAnchor="middle" className={styles.sectionText}>
                      A
                    </text>
                  </g>
                ))}
              </g>

              <Dimension
                from={[0, 0]}
                to={[13.6, 0]}
                off={[0, -1.9]}
                label="13.60"
                flat={FLAT_X}
              />
              <Dimension
                from={[0, 0]}
                to={[0, 9.2]}
                off={[-1.9, 0]}
                label="9.20"
                flat={FLAT_Y}
              />
              <Dimension
                from={[0, 5.4]}
                to={[0, 9.2]}
                off={[-0.75, 0]}
                label="3.80"
                flat={FLAT_Y}
              />
            </g>

            {/* ---- redline callout for the active room ---- */}
            <Callout room={current} />
          </g>
        </svg>
      </div>

      <figcaption className={styles.caption}>
        Point at a room, or tab into the plan, to read its redline note. The
        room schedule below carries the same information as text.
        <span className={styles.panHint}>
          The drawing is wider than this screen — drag it sideways to reach the
          east rooms.
        </span>
      </figcaption>

      <table className={styles.schedule}>
        <caption className={styles.scheduleCaption}>
          Room schedule — CRN-002
        </caption>
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Room</th>
            <th scope="col">Area</th>
            <th scope="col">Function</th>
          </tr>
        </thead>
        <tbody>
          {ROOMS.map((room) => (
            <tr
              key={room.id}
              className={room.id === active ? styles.rowOn : undefined}
              onMouseEnter={() => setActive(room.id)}
            >
              <td className={styles.cellNo}>{room.id}</td>
              <th scope="row" className={styles.cellName}>
                {room.full}
              </th>
              <td className={styles.cellArea}>
                {room.area} m<sup>2</sup>
              </td>
              <td className={styles.cellFn}>{room.fn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

function Callout({ room }: { room: Room }) {
  const a = proj(room.anchor[0], room.anchor[1]);
  const tipX = a[0] + room.dx;
  const tipY = a[1] + room.dy;
  // Elbow keeps the leader reading like a drafted leader line: one raking
  // segment, then a short horizontal landing under the text.
  const elbowX = tipX - (room.align === "start" ? 26 : -26);
  const landing = room.align === "start" ? tipX + 190 : tipX - 190;

  return (
    <g className={styles.callout} key={room.id}>
      <circle cx={a[0]} cy={a[1]} r="3.5" className={styles.calloutDot} />
      <polyline
        points={`${a[0]},${a[1]} ${elbowX},${tipY} ${tipX},${tipY}`}
        className={styles.calloutLeader}
      />
      <line
        x1={tipX}
        y1={tipY}
        x2={landing}
        y2={tipY}
        className={styles.calloutLanding}
      />
      <text
        x={tipX}
        y={tipY - 12 - (room.note.length - 1) * 17}
        textAnchor={room.align}
        className={styles.calloutText}
      >
        {room.note.map((line, i) => (
          <tspan key={line} x={tipX} dy={i === 0 ? 0 : 17}>
            {line}
          </tspan>
        ))}
      </text>
      <text
        x={landing}
        y={tipY + 17}
        textAnchor={room.align === "start" ? "end" : "start"}
        className={styles.calloutRef}
      >
        RM {room.id}
      </text>
    </g>
  );
}
