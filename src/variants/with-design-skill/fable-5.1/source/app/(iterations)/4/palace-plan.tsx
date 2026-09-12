"use client";

import { useState } from "react";
import styles from "./palace-plan.module.css";
import { ROOMS } from "./rooms";

// Walls drawn as paths so they can be plotted with pathLength.
const WALLS_OUTER = [
  "M 60 60 L 140 60",
  "M 176 60 L 740 60",
  "M 740 60 L 740 500",
  "M 740 500 L 60 500",
  "M 60 500 L 60 60",
];

const WALLS_INNER = [
  "M 260 60 L 260 200",
  "M 560 60 L 560 100",
  "M 560 136 L 560 360",
  "M 560 396 L 560 500",
  "M 60 200 L 150 200",
  "M 186 200 L 400 200",
  "M 436 200 L 560 200",
  "M 60 260 L 180 260",
  "M 216 260 L 430 260",
  "M 466 260 L 560 260",
  "M 560 260 L 740 260",
  "M 340 260 L 340 500",
];

const DOORS = [
  // front door
  "M 176 60 L 176 96 M 140 60 A 36 36 0 0 0 176 96",
  // vestibule → corridor
  "M 150 200 L 150 236 M 186 200 A 36 36 0 0 1 150 236",
  // library → corridor
  "M 400 200 L 400 236 M 436 200 A 36 36 0 0 1 400 236",
  // study ← corridor
  "M 216 260 L 216 224 M 180 260 A 36 36 0 0 1 216 224",
  // archive ← corridor
  "M 466 260 L 466 224 M 430 260 A 36 36 0 0 1 466 224",
  // gallery
  "M 560 136 L 596 136 M 560 100 A 36 36 0 0 1 596 136",
  // courtyard
  "M 560 396 L 596 396 M 560 360 A 36 36 0 0 1 596 396",
];

const FURNITURE = [
  // library shelves along top wall
  "M 280 64 L 540 64 L 540 78 L 280 78 Z M 300 64 L 300 78 M 320 64 L 320 78 M 340 64 L 340 78 M 360 64 L 360 78 M 380 64 L 380 78 M 400 64 L 400 78 M 420 64 L 420 78 M 440 64 L 440 78 M 460 64 L 460 78 M 480 64 L 480 78 M 500 64 L 500 78 M 520 64 L 520 78",
  // library table
  "M 370 100 L 450 100 L 450 130 L 370 130 Z",
  // vestibule table + bench
  "M 90 120 L 130 120 L 130 140 L 90 140 Z M 190 66 L 250 66 L 250 76 L 190 76 Z",
  // study desk + chair
  "M 100 300 L 220 300 L 220 350 L 100 350 Z M 160 382 m -12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0",
  // archive boxes
  "M 360 280 h 28 v 28 h -28 Z M 396 280 h 28 v 28 h -28 Z M 432 280 h 28 v 28 h -28 Z M 468 280 h 28 v 28 h -28 Z M 504 280 h 28 v 28 h -28 Z M 360 316 h 28 v 28 h -28 Z M 396 316 h 28 v 28 h -28 Z M 432 316 h 28 v 28 h -28 Z",
  // gallery plinths
  "M 610 100 h 22 v 22 h -22 Z M 680 100 h 22 v 22 h -22 Z M 610 210 h 22 v 22 h -22 Z M 680 210 h 22 v 22 h -22 Z",
  // courtyard tree + bench
  "M 650 380 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0 M 650 380 m -16 0 a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0 M 590 470 L 640 470 L 640 480 L 590 480 Z",
];

export function PalacePlan() {
  const [active, setActive] = useState<string | null>(null);
  const room = ROOMS.find((r) => r.id === active) ?? null;

  return (
    <div className={styles.wrap}>
      <svg
        className={styles.plan}
        viewBox="0 20 800 500"
        role="img"
        aria-labelledby="plan-title plan-desc"
      >
        <title id="plan-title">Ground floor plan of a memory palace</title>
        <desc id="plan-desc">
          Six rooms around a corridor: Vestibule for the inbox, Library for
          sources, Study for drafts, Gallery for evergreen notes, Courtyard for
          daily notes, and Archive for cold storage.
        </desc>
        <defs>
          <pattern
            id="hatch"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" className={styles.hatch} />
          </pattern>
        </defs>

        {/* courtyard hatch */}
        <rect
          x="560"
          y="260"
          width="180"
          height="240"
          fill="url(#hatch)"
          className={styles.hatchFill}
        />

        {/* room highlight fills */}
        {ROOMS.map((r) => (
          <rect
            key={`fill-${r.id}`}
            x={r.rect[0]}
            y={r.rect[1]}
            width={r.rect[2]}
            height={r.rect[3]}
            className={`${styles.roomFill} ${active === r.id ? styles.roomFillActive : ""}`}
          />
        ))}

        {/* corridor arrows: links run both ways */}
        <g className={styles.corridor}>
          <path
            d="M 90 232 L 530 232"
            className={styles.corridorLine}
            pathLength={1}
          />
          <path d="M 90 232 l 10 -5 v 10 Z M 530 232 l -10 -5 v 10 Z" className={styles.arrowHead} />
          <text x="310" y="222" textAnchor="middle" className={styles.roomSub}>
            CORRIDOR · LINKS RUN BOTH WAYS
          </text>
        </g>

        {/* furniture */}
        {FURNITURE.map((d, i) => (
          <path
            key={`f-${i}`}
            d={d}
            className={styles.furniture}
            pathLength={1}
            style={{ animationDelay: `${1.5 + i * 0.08}s` }}
          />
        ))}

        {/* walls */}
        {WALLS_INNER.map((d, i) => (
          <path
            key={`wi-${i}`}
            d={d}
            className={styles.wallInner}
            pathLength={1}
            style={{ animationDelay: `${0.5 + i * 0.06}s` }}
          />
        ))}
        {WALLS_OUTER.map((d, i) => (
          <path
            key={`wo-${i}`}
            d={d}
            className={styles.wallOuter}
            pathLength={1}
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          />
        ))}

        {/* doors */}
        {DOORS.map((d, i) => (
          <path
            key={`d-${i}`}
            d={d}
            className={styles.door}
            pathLength={1}
            style={{ animationDelay: `${1.2 + i * 0.07}s` }}
          />
        ))}

        {/* dimensions */}
        <g className={styles.dims}>
          <path d="M 60 40 L 740 40 M 60 34 L 60 46 M 740 34 L 740 46" className={styles.dimLine} />
          <text x="400" y="34" textAnchor="middle" className={styles.dimText}>
            1,204 NOTES
          </text>
          <path d="M 766 60 L 766 500 M 760 60 L 772 60 M 760 500 L 772 500" className={styles.dimLine} />
          <text
            x="778"
            y="280"
            textAnchor="middle"
            transform="rotate(90 778 280)"
            className={styles.dimText}
          >
            3,118 LINKS
          </text>
        </g>

        {/* labels */}
        {ROOMS.map((r) => (
          <g key={`l-${r.id}`} className={styles.labelGroup}>
            <text x={r.label[0]} y={r.label[1]} textAnchor="middle" className={styles.roomName}>
              {r.name.toUpperCase()}
            </text>
            <text
              x={r.label[0]}
              y={r.label[1] + 16}
              textAnchor="middle"
              className={styles.roomSub}
            >
              {r.num} · {r.concept.toUpperCase()}
            </text>
          </g>
        ))}

        {/* hit areas */}
        {ROOMS.map((r) => (
          <rect
            key={`hit-${r.id}`}
            x={r.rect[0]}
            y={r.rect[1]}
            width={r.rect[2]}
            height={r.rect[3]}
            className={styles.hit}
            tabIndex={0}
            role="button"
            aria-label={`${r.name}: ${r.concept}`}
            onMouseEnter={() => setActive(r.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(r.id)}
            onBlur={() => setActive(null)}
          />
        ))}
      </svg>

      <div className={styles.callout} aria-live="polite">
        {room ? (
          <>
            <p className={styles.calloutEyebrow}>
              {room.num} · {room.name}
            </p>
            <p className={styles.calloutTitle}>{room.concept}</p>
            <p className={styles.calloutBody}>{room.body}</p>
            <p className={styles.calloutCount}>{room.count}</p>
          </>
        ) : (
          <>
            <p className={styles.calloutEyebrow}>Ground floor</p>
            <p className={styles.calloutTitle}>Hover a room</p>
            <p className={styles.calloutBody}>
              Six rooms, one corridor. Each room holds one kind of note; the
              corridor is how they find each other.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
