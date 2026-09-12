import styles from "./transit-map.module.css";

export const LINES = [
  { key: "R", name: "Reading", color: "#EE352E", d: "M 80 540 L 80 320 L 220 180 L 620 180 L 740 300" },
  { key: "W", name: "Writing", color: "#0039A6", d: "M 300 580 L 300 420 L 440 280 L 440 60" },
  { key: "P", name: "Projects", color: "#00933C", d: "M 40 380 L 200 380 L 340 240 L 760 240" },
  { key: "O", name: "People", color: "#FF6319", d: "M 700 580 L 700 420 L 560 280 L 560 140 L 500 80" },
] as const;

type Anchor = "start" | "middle" | "end";

type Station = {
  name: string;
  x: number;
  y: number;
  line: string;
  dx: number;
  dy: number;
  anchor: Anchor;
  interchange?: boolean;
  terminus?: boolean;
};

const STATIONS: Station[] = [
  // Reading
  { name: "Attention residue", x: 80, y: 520, line: "R", dx: 16, dy: 4, anchor: "start" },
  { name: "Deep Work, ch. 2", x: 80, y: 440, line: "R", dx: 16, dy: 4, anchor: "start" },
  { name: "Flow", x: 150, y: 250, line: "R", dx: -14, dy: 4, anchor: "end" },
  { name: "Spaced repetition", x: 300, y: 180, line: "R", dx: 0, dy: -16, anchor: "middle" },
  { name: "Memory palace", x: 740, y: 300, line: "R", dx: 0, dy: 26, anchor: "middle", terminus: true },
  // Writing
  { name: "Draft: essay on focus", x: 300, y: 560, line: "W", dx: 16, dy: 4, anchor: "start" },
  { name: "Outline", x: 300, y: 460, line: "W", dx: 16, dy: 4, anchor: "start" },
  { name: "Thesis statement", x: 370, y: 350, line: "W", dx: 16, dy: 4, anchor: "start" },
  { name: "Title ideas", x: 440, y: 100, line: "W", dx: -16, dy: 4, anchor: "end" },
  { name: "Publish", x: 440, y: 60, line: "W", dx: -16, dy: 4, anchor: "end", terminus: true },
  // Projects
  { name: "Q4 roadmap", x: 40, y: 380, line: "P", dx: -4, dy: -16, anchor: "start" },
  { name: "Focus app pitch", x: 130, y: 380, line: "P", dx: 0, dy: 26, anchor: "middle" },
  { name: "Weekly review", x: 270, y: 310, line: "P", dx: -14, dy: 4, anchor: "end" },
  { name: "Ship it", x: 760, y: 240, line: "P", dx: 0, dy: 26, anchor: "middle", terminus: true },
  // People
  { name: "Sam, 1:1 notes", x: 700, y: 540, line: "O", dx: -16, dy: 4, anchor: "end" },
  { name: "Mentor call", x: 700, y: 440, line: "O", dx: -16, dy: 4, anchor: "end" },
  { name: "Advice from Ana", x: 630, y: 350, line: "O", dx: 16, dy: 4, anchor: "start" },
  { name: "Book club", x: 500, y: 80, line: "O", dx: 16, dy: 4, anchor: "start", terminus: true },
  // Interchanges
  { name: "Compounding", x: 440, y: 180, line: "RW", dx: 0, dy: -18, anchor: "middle", interchange: true },
  { name: "Argument map", x: 440, y: 240, line: "WP", dx: 0, dy: 28, anchor: "middle", interchange: true },
  { name: "Zettelkasten", x: 560, y: 180, line: "RO", dx: 0, dy: -18, anchor: "middle", interchange: true },
  { name: "Reading list", x: 560, y: 240, line: "PO", dx: 0, dy: 28, anchor: "middle", interchange: true },
  { name: "Parkinson's law", x: 680, y: 240, line: "RP", dx: 16, dy: -10, anchor: "start", interchange: true },
];

export function TransitMap() {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.map}
        viewBox="0 0 800 600"
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">A transit map of one person&apos;s notes</title>
        <desc id="map-desc">
          Four colored lines, Reading, Writing, Projects, and People, each with
          stations named after notes. Where lines cross, notes from two
          subjects meet.
        </desc>

        {/* Line casings */}
        {LINES.map((l, i) => (
          <path
            key={`case-${l.key}`}
            d={l.d}
            className={styles.casing}
            pathLength={1}
            style={{ animationDelay: `${0.2 + i * 0.35}s` }}
          />
        ))}
        {LINES.map((l, i) => (
          <path
            key={l.key}
            d={l.d}
            className={styles.line}
            stroke={l.color}
            pathLength={1}
            style={{ animationDelay: `${0.2 + i * 0.35}s` }}
          />
        ))}

        {/* Stations */}
        {STATIONS.map((s, i) => {
          const color =
            LINES.find((l) => l.key === s.line)?.color ?? "#101010";
          const delay = 1.4 + i * 0.05;
          return (
            <g
              key={s.name}
              className={styles.station}
              style={{ animationDelay: `${delay}s` }}
            >
              {s.interchange ? (
                <circle cx={s.x} cy={s.y} r={10} className={styles.interchange} />
              ) : s.terminus ? (
                <rect
                  x={s.x - 7}
                  y={s.y - 7}
                  width={14}
                  height={14}
                  className={styles.terminus}
                  style={{ stroke: color }}
                />
              ) : (
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={6}
                  className={styles.stop}
                  style={{ stroke: color }}
                />
              )}
              <text
                x={s.x + s.dx}
                y={s.y + s.dy}
                textAnchor={s.anchor}
                className={`${styles.label} ${s.interchange ? styles.labelBold : ""}`}
              >
                {s.name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className={styles.legend}>
        {LINES.map((l) => (
          <span key={l.key} className={styles.legendItem}>
            <span className={styles.badge} style={{ background: l.color }}>
              {l.key}
            </span>
            {l.name}
          </span>
        ))}
        <span className={styles.legendNote}>Map not to scale</span>
      </figcaption>
    </figure>
  );
}
