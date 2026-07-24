import styles from "./direction.module.css";

const stages = [
  { n: "1", name: "CAPTURE", x: 20, y: 20 },
  { n: "2", name: "CONNECT", x: 240, y: 20 },
  { n: "3", name: "RESURFACE", x: 240, y: 240 },
  { n: "4", name: "ACT", x: 20, y: 240 },
];

/**
 * Fig. 1 — the block diagram. The signal is a CSS-animated dot riding the
 * same rectangle the arrows describe, so the loop is visibly a loop.
 */
export function LoopDiagram() {
  return (
    <figure className={styles.fig}>
      {/* narrow screens pan the figure instead of shrinking its lettering */}
      <div className={styles.figScroll}>
        <svg
          className={styles.figSvg}
          viewBox="0 0 420 330"
          role="img"
          aria-label="Block diagram: capture feeds connect, connect feeds resurface, resurface feeds act, act feeds capture again"
        >
        <path className={styles.loop} d="M100 55 L320 55 L320 275 L100 275 Z" />

        {/* direction of travel, clockwise */}
        <path className={styles.arrow} d="M204 47 L220 55 L204 63 Z" />
        <path className={styles.arrow} d="M312 156 L320 172 L328 156 Z" />
        <path className={styles.arrow} d="M216 267 L200 275 L216 283 Z" />
        <path className={styles.arrow} d="M108 174 L100 158 L92 174 Z" />

        {stages.map((s) => (
          <g key={s.n}>
            <rect
              className={styles.block}
              x={s.x}
              y={s.y}
              width="160"
              height="70"
            />
            <text className={styles.blockNum} x={s.x + 14} y={s.y + 22}>
              {s.n}
            </text>
            <text className={styles.blockName} x={s.x + 14} y={s.y + 44}>
              {s.name}
            </text>
            <text className={styles.blockNote} x={s.x + 14} y={s.y + 60}>
              {s.n === "1"
                ? "anything, unsorted"
                : s.n === "2"
                  ? "links, both ways"
                  : s.n === "3"
                    ? "three, every morning"
                    : "the work you meant to do"}
            </text>
          </g>
        ))}

          <circle className={styles.signal} r="7" />
        </svg>
      </div>

      <figcaption className={styles.figCaption}>
        Fig. 1 — Four stages. Stage 3 is the one your current notes app leaves
        to you.
      </figcaption>
    </figure>
  );
}
