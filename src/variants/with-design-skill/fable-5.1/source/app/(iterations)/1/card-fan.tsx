"use client";

import { useState } from "react";
import styles from "./card-fan.module.css";

type Card = {
  id: string;
  title: string;
  body: string;
  x: number;
  y: number;
  r: number;
  links: string[];
};

// Positions are % of a square stage. Cards are 50% wide, 30% tall (5×3 index card).
const CARDS: Card[] = [
  {
    id: "21/3d",
    title: "Attention residue",
    body: "Switching tasks leaves attention on the last one (Leroy, 2009). The fix isn't focus. It's fewer switches.",
    x: 2,
    y: 6,
    r: -6,
    links: ["21/3d1", "21/3d1a", "4/2"],
  },
  {
    id: "21/3d1",
    title: "Batch shallow work",
    body: "Email and admin in two windows a day. Residue shrinks when switches are scheduled, not reactive.",
    x: 48,
    y: 0,
    r: 5,
    links: ["21/3d", "21/3d1a"],
  },
  {
    id: "4/2",
    title: "Resurfacing",
    body: "A card you can't find is a card you don't have. Pull by relevance to what you're writing, not by date.",
    x: 26,
    y: 34,
    r: 2,
    links: ["21/3d", "9/8a"],
  },
  {
    id: "9/8a",
    title: "A conversation partner",
    body: "Luhmann: the box only surprises you if it can disagree. The links you didn't plan are the point.",
    x: 0,
    y: 64,
    r: -4,
    links: ["4/2"],
  },
  {
    id: "21/3d1a",
    title: "Ninety-minute blocks",
    body: "Phone in the other room, one card open. The block ends with the timer, not with the thought.",
    x: 50,
    y: 60,
    r: 7,
    links: ["21/3d", "21/3d1"],
  },
];

const CARD_W = 50;
const CARD_H = 30;

function anchor(c: Card) {
  return { x: c.x + CARD_W / 2, y: c.y + CARD_H / 2 };
}

const THREADS: [string, string][] = [];
for (const c of CARDS) {
  for (const l of c.links) {
    const exists = THREADS.some(
      ([a, b]) => (a === c.id && b === l) || (a === l && b === c.id),
    );
    if (!exists) THREADS.push([c.id, l]);
  }
}

export function CardFan() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredCard = CARDS.find((c) => c.id === hovered);
  const activeIds = hoveredCard
    ? new Set([hoveredCard.id, ...hoveredCard.links])
    : null;

  return (
    <div
      className={styles.fan}
      aria-label="Five index cards connected by red thread"
      role="img"
    >
      <svg
        className={styles.threads}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {THREADS.map(([a, b], i) => {
          const ca = CARDS.find((c) => c.id === a)!;
          const cb = CARDS.find((c) => c.id === b)!;
          const pa = anchor(ca);
          const pb = anchor(cb);
          const active = activeIds ? activeIds.has(a) && activeIds.has(b) : false;
          const dim = activeIds ? !active : false;
          return (
            <line
              key={`${a}-${b}`}
              x1={pa.x}
              y1={pa.y}
              x2={pb.x}
              y2={pb.y}
              className={`${styles.thread} ${active ? styles.threadActive : ""} ${dim ? styles.threadDim : ""}`}
              style={{ animationDelay: `${1.1 + i * 0.08}s` }}
            />
          );
        })}
      </svg>

      {CARDS.map((c, i) => {
        const p = anchor(c);
        const isActive = activeIds ? activeIds.has(c.id) : false;
        const isDim = activeIds ? !isActive : false;
        return (
          <div
            key={c.id}
            className={styles.slot}
            style={
              {
                "--x": c.x,
                "--y": c.y,
                "--r": `${c.r}deg`,
                "--i": i,
                zIndex: hovered === c.id ? 10 : isActive ? 5 : 1,
              } as React.CSSProperties
            }
          >
            <article
              className={`${styles.card} ${hovered === c.id ? styles.cardHover : ""} ${isDim ? styles.cardDim : ""}`}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(c.id)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
            >
              <header className={styles.head}>
                <span className={styles.id}>{c.id}</span>
                <h3 className={styles.title}>{c.title}</h3>
              </header>
              <p className={styles.body}>{c.body}</p>
              <span
                className={styles.pin}
                style={{
                  left: `${((p.x - c.x) / CARD_W) * 100}%`,
                  top: `${((p.y - c.y) / CARD_H) * 100}%`,
                }}
              />
            </article>
          </div>
        );
      })}
    </div>
  );
}
