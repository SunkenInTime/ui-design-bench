"use client";

import { useState } from "react";
import styles from "./direction.module.css";

type Room = {
  id: string;
  name: string;
  count: string;
  holds: string;
  links: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const rooms: Room[] = [
  {
    id: "reading",
    name: "Reading room",
    count: "1,204 notes",
    holds: "Clipped articles, quotations, margins of books",
    links: "2,910 links out",
    x: 20,
    y: 20,
    w: 220,
    h: 160,
  },
  {
    id: "workshop",
    name: "Workshop",
    count: "318 notes",
    holds: "Drafts in progress, outlines, honourable dead ends",
    links: "1,140 links out",
    x: 250,
    y: 20,
    w: 180,
    h: 160,
  },
  {
    id: "post",
    name: "Correspondence",
    count: "506 notes",
    holds: "Letters, the four emails a year worth keeping",
    links: "640 links out",
    x: 440,
    y: 20,
    w: 180,
    h: 96,
  },
  {
    id: "cold",
    name: "Cold store",
    count: "92 notes",
    holds: "Finished work, closed projects, nothing pending",
    links: "210 links out",
    x: 440,
    y: 126,
    w: 180,
    h: 54,
  },
  {
    id: "stacks",
    name: "The stacks",
    count: "4,760 notes",
    holds: "Anything older than a year, still fully linked",
    links: "8,300 links out",
    x: 20,
    y: 240,
    w: 300,
    h: 170,
  },
  {
    id: "table",
    name: "Kitchen table",
    count: "11 notes",
    holds: "Today: inbox, the daily note, three resurfaced cards",
    links: "26 links out",
    x: 330,
    y: 240,
    w: 290,
    h: 170,
  },
];

export function PlanDrawing() {
  const [activeId, setActiveId] = useState("table");
  const active = rooms.find((r) => r.id === activeId) ?? rooms[0];

  return (
    <div className={styles.plan}>
      <div className={styles.planHead}>
        <span>Plan · level 2 · rooms as your notes keep them</span>
        <span className={styles.planScale}>1 : 50</span>
      </div>

      {/* narrow screens pan the drawing rather than shrinking the lettering */}
      <div className={styles.planScroll}>
        <svg
          className={styles.planSvg}
          viewBox="0 0 640 440"
          role="group"
          aria-label="Floor plan of a note collection"
        >
        <defs>
          <pattern
            id="poche"
            width="6"
            height="6"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="6" className={styles.hatch} />
          </pattern>
        </defs>

        {/* circulation spine: the links that let you walk between rooms */}
        <path
          className={styles.circulation}
          d="M130 180 L130 210 L470 210 L470 180"
        />
        <path className={styles.circulation} d="M170 240 L170 210" />
        <path className={styles.circulation} d="M470 240 L470 210" />

        {rooms.map((room) => {
          const on = room.id === activeId;
          return (
            <g
              key={room.id}
              className={`${styles.room} ${on ? styles.roomOn : ""}`}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${room.name}, ${room.count}`}
              onMouseEnter={() => setActiveId(room.id)}
              onFocus={() => setActiveId(room.id)}
              onClick={() => setActiveId(room.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveId(room.id);
                }
              }}
            >
              <rect
                x={room.x}
                y={room.y}
                width={room.w}
                height={room.h}
                className={styles.roomFill}
                fill={on ? "url(#poche)" : "transparent"}
              />
              <text
                x={room.x + 12}
                y={room.y + 24}
                className={styles.roomName}
              >
                {room.name.toUpperCase()}
              </text>
              <text
                x={room.x + 12}
                y={room.y + 42}
                className={styles.roomCount}
              >
                {room.count}
              </text>
            </g>
          );
        })}

        {/* overall dimension, the way a drawing states one */}
        <g className={styles.dim}>
          <path d="M20 428 L250 428" />
          <path d="M390 428 L620 428" />
          <path d="M20 421 L20 435" />
          <path d="M620 421 L620 435" />
          <text x="320" y="432" textAnchor="middle">
            6,891 notes overall
          </text>
        </g>
        </svg>
      </div>

      <dl className={styles.callout} aria-live="polite">
        <div>
          <dt>Room</dt>
          <dd className={styles.calloutName}>{active.name}</dd>
        </div>
        <div>
          <dt>Holds</dt>
          <dd>{active.holds}</dd>
        </div>
        <div>
          <dt>Traffic</dt>
          <dd>{active.links}</dd>
        </div>
      </dl>
    </div>
  );
}
