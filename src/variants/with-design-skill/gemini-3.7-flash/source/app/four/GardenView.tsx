"use client";

import { useState } from "react";
import styles from "./garden.module.css";

const stones = [
  {
    id: "sentence",
    name: "The sentence I cannot finish",
    sits: "This stone sits with two others. They share an unfinished verb.",
    x: 28,
    y: 42,
    w: 16,
    h: 11,
    rot: -8,
  },
  {
    id: "walk",
    name: "A walk without pockets",
    sits: "Placed after rain. It keeps company with weather, not with tasks.",
    x: 58,
    y: 28,
    w: 19,
    h: 13,
    rot: 6,
  },
  {
    id: "kettle",
    name: "What the kettle knows",
    sits: "A daily stone. Small on purpose. The garden would look empty without it.",
    x: 46,
    y: 58,
    w: 14,
    h: 10,
    rot: -3,
  },
  {
    id: "borrowed",
    name: "Borrowed certainty",
    sits: "Heavier than it looks. Do not move it until a better question arrives.",
    x: 72,
    y: 62,
    w: 17,
    h: 12,
    rot: 12,
  },
  {
    id: "tuesday",
    name: "Tuesday’s weather in my chest",
    sits: "An atmospheric note. It will be raked into compost before autumn.",
    x: 18,
    y: 68,
    w: 15,
    h: 10,
    rot: 4,
  },
] as const;

type StoneId = (typeof stones)[number]["id"];

export function GardenView() {
  const [active, setActive] = useState<StoneId>("kettle");
  const stone = stones.find((item) => item.id === active) ?? stones[2];

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <p className={styles.mark}>Locus</p>
        <p className={styles.season}>Late summer · raked this morning</p>
      </header>

      <main id="content" className={styles.main}>
        <div className={styles.poem}>
          <h1>
            A garden
            <br />
            of notes.
          </h1>
          <p>Do not organize them. Tend them. Place a thought, then rake around it until the neighboring stones come into view.</p>
        </div>

        <div className={styles.bed}>
          <svg
            className={styles.sand}
            viewBox="0 0 100 80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {Array.from({ length: 28 }).map((_, i) => (
              <path
                key={i}
                d={`M -5 ${6 + i * 2.6} Q 25 ${4 + i * 2.6} 50 ${7 + i * 2.6} T 105 ${6 + i * 2.6}`}
              />
            ))}
          </svg>

          {stones.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.stone}
              aria-pressed={active === item.id}
              aria-label={item.name}
              onClick={() => setActive(item.id)}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: `${item.w}%`,
                height: `${item.h}%`,
                transform: `translate(-50%, -50%) rotate(${item.rot}deg)`,
              }}
            />
          ))}
        </div>

        <aside className={styles.card} aria-live="polite">
          <p className={styles.inscribe}>{stone.name}</p>
          <p>{stone.sits}</p>
          <button
            className={styles.seal}
            type="button"
            onClick={() => setActive("walk")}
          >
            Place a stone
          </button>
        </aside>
      </main>

      <footer className={styles.foot}>
        <p>Locus · a second brain raked daily</p>
      </footer>
    </div>
  );
}
