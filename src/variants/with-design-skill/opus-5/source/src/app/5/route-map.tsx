"use client";

import { useState } from "react";
import styles from "./route-map.module.css";

/* ------------------------------------------------------------------ *
 * Line coding system. These three meanings are fixed for the whole
 * page: red = backlinks, amber = shared tags, blue = daily notes.
 * The dashed service is Resurface.
 * ------------------------------------------------------------------ */

type LineId = "A" | "B" | "C" | "R";

const LINE_LABEL: Record<LineId, string> = {
  A: "Line A",
  B: "Line B",
  C: "Line C",
  R: "Resurface",
};

const LINE_MEANING: Record<LineId, string> = {
  A: "backlinks",
  B: "shared tags",
  C: "daily notes",
  R: "not opened in a year",
};

/* ------------------------------------------------------------------ *
 * Geometry. Strict transit-map discipline: every segment is
 * horizontal, vertical or exactly 45 degrees. Corners are rounded to
 * a constant radius by roundedRoute().
 * ------------------------------------------------------------------ */

type Point = [number, number];

function roundedRoute(points: Point[], radius = 18): string {
  if (points.length < 2) return "";
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const inX = px - cx;
    const inY = py - cy;
    const outX = nx - cx;
    const outY = ny - cy;
    const inLen = Math.hypot(inX, inY);
    const outLen = Math.hypot(outX, outY);
    if (inLen === 0 || outLen === 0) continue;
    const r = Math.min(radius, inLen / 2, outLen / 2);
    const ax = cx + (inX / inLen) * r;
    const ay = cy + (inY / inLen) * r;
    const bx = cx + (outX / outLen) * r;
    const by = cy + (outY / outLen) * r;
    d += ` L ${ax.toFixed(2)} ${ay.toFixed(2)} Q ${cx} ${cy} ${bx.toFixed(
      2,
    )} ${by.toFixed(2)}`;
  }
  const end = points[points.length - 1];
  d += ` L ${end[0]} ${end[1]}`;
  return d;
}

const ROUTE_A: Point[] = [
  [120, 120],
  [340, 120],
  [620, 400],
  [780, 400],
];

const ROUTE_B: Point[] = [
  [140, 440],
  [340, 440],
  [620, 160],
  [800, 160],
];

const ROUTE_C: Point[] = [
  [100, 280],
  [860, 280],
];

const ROUTE_RESURFACE: Point[] = [
  [860, 280],
  [860, 60],
  [180, 60],
  [120, 120],
];

/* ------------------------------------------------------------------ *
 * Stations. Titles are real notes from one vault.
 * ------------------------------------------------------------------ */

type Mark = "tick" | "interchange" | "terminus";

type Station = {
  id: string;
  title: string;
  x: number;
  y: number;
  mark: Mark;
  lines: LineId[];
  /** Plain description of what calls here. */
  note: string;
  /** Utility line, set in mono. */
  service: string;
  label: {
    anchor: "start" | "middle" | "end";
    x: number;
    y: number;
    rows: string[];
  };
  /** Optional small mono line above the label. */
  overline?: { x: number; y: number; text: string };
};

const STATIONS: Station[] = [
  {
    id: "field",
    title: "Field recording — dawn chorus",
    x: 120,
    y: 120,
    mark: "interchange",
    lines: ["A", "R"],
    note: "Interchange — Line A ends here, Resurface calls",
    service: "Last opened 3 years ago",
    label: { anchor: "start", x: 104, y: 96, rows: ["Field recording — dawn chorus"] },
  },
  {
    id: "bridge",
    title: "Bridge deck expansion joints",
    x: 240,
    y: 120,
    mark: "tick",
    lines: ["A"],
    note: "Line A calls here",
    service: "Last opened 5 months ago",
    label: { anchor: "middle", x: 240, y: 152, rows: ["Bridge deck expansion joints"] },
  },
  {
    id: "cholera",
    title: "Why the 1854 cholera map worked",
    x: 500,
    y: 280,
    mark: "interchange",
    lines: ["A", "B", "C"],
    note: "Interchange — Lines A, B and C call here",
    service: "Opened today",
    label: {
      anchor: "middle",
      x: 500,
      y: 182,
      rows: ["Why the 1854", "cholera map", "worked"],
    },
  },
  {
    id: "letterpress",
    title: "Letterpress lockup diagram",
    x: 780,
    y: 400,
    mark: "terminus",
    lines: ["A"],
    note: "Line A terminates here",
    service: "Last opened 22 months ago",
    label: { anchor: "end", x: 804, y: 438, rows: ["Letterpress lockup diagram"] },
  },
  {
    id: "sourdough",
    title: "Sourdough: hydration log",
    x: 140,
    y: 440,
    mark: "terminus",
    lines: ["B"],
    note: "Line B terminates here",
    service: "Last opened 6 weeks ago",
    label: { anchor: "start", x: 118, y: 414, rows: ["Sourdough: hydration log"] },
  },
  {
    id: "mnemonics",
    title: "Mnemonics from the Ad Herennium",
    x: 260,
    y: 440,
    mark: "tick",
    lines: ["B"],
    note: "Line B calls here",
    service: "Last opened 2 years ago",
    label: {
      anchor: "middle",
      x: 290,
      y: 478,
      rows: ["Mnemonics from the Ad Herennium"],
    },
  },
  {
    id: "estuary",
    title: "Estuary sediment cores",
    x: 800,
    y: 160,
    mark: "terminus",
    lines: ["B"],
    note: "Line B terminates here",
    service: "Last opened 14 months ago",
    label: { anchor: "end", x: 812, y: 134, rows: ["Estuary sediment cores"] },
  },
  {
    id: "daily",
    title: "Daily note — 25 July",
    x: 100,
    y: 280,
    mark: "terminus",
    lines: ["C"],
    note: "Line C begins here",
    service: "Opens when you launch Cairn",
    label: { anchor: "start", x: 84, y: 252, rows: ["Daily note — 25 July"] },
    overline: { x: 84, y: 232, text: "FIRST SERVICE" },
  },
  {
    id: "kiln",
    title: "Kiln temperature curves",
    x: 280,
    y: 280,
    mark: "tick",
    lines: ["C"],
    note: "Line C calls here",
    service: "Last opened 17 months ago",
    label: { anchor: "end", x: 332, y: 314, rows: ["Kiln temperature curves"] },
  },
  {
    id: "seeing",
    title: "Reading — Seeing Like a State",
    x: 660,
    y: 280,
    mark: "tick",
    lines: ["C"],
    note: "Line C calls here",
    service: "Last opened 4 months ago",
    label: { anchor: "middle", x: 660, y: 250, rows: ["Reading — Seeing Like a State"] },
  },
  {
    id: "okonjo",
    title: "Interview — R. Okonjo, 12 Mar",
    x: 860,
    y: 280,
    mark: "interchange",
    lines: ["C", "R"],
    note: "Interchange — Line C ends here, Resurface departs",
    service: "Opened today — you are writing this now",
    label: { anchor: "end", x: 884, y: 318, rows: ["Interview — R. Okonjo, 12 Mar"] },
  },
];

const CALLOUT_W = 292;
const CALLOUT_H = 98;

function calloutPosition(station: Station) {
  const x = Math.min(Math.max(station.x - CALLOUT_W / 2, 10), 960 - CALLOUT_W - 10);
  const y = station.y < 260 ? station.y + 28 : station.y - 28 - CALLOUT_H;
  return { x, y };
}

function linesSummary(station: Station) {
  return station.lines.map((id) => LINE_LABEL[id]).join(" · ");
}

function spokenLabel(station: Station) {
  return `${station.title}. ${station.note}. ${station.service}.`;
}

/* ------------------------------------------------------------------ */

export function RouteMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  const activeId = hovered ?? pinned;
  const active = STATIONS.find((s) => s.id === activeId) ?? null;

  const emphasised = (line: LineId) => (active ? active.lines.includes(line) : false);

  function togglePin(id: string) {
    setPinned((current) => (current === id ? null : id));
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.scrollHint} aria-hidden="true">
        Map scrolls sideways
      </p>

      <div className={styles.scroller}>
        <div className={styles.inner}>
          <svg
            className={styles.svg}
            viewBox="0 0 960 520"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>
              Network map of one vault: eleven notes on three lines, plus the
              Resurface service.
            </title>

            <defs>
              <filter id="cairn-callout-shadow" x="-20%" y="-40%" width="140%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="7"
                  floodColor="#10312B"
                  floodOpacity="0.34"
                />
              </filter>
            </defs>

            {/* --- line letter roundels ------------------------------ */}
            <g className={styles.roundels} aria-hidden="true">
              <circle cx="52" cy="120" r="15" className={styles.roundelA} />
              <text x="52" y="127" className={styles.roundelTextLight}>
                A
              </text>
              <circle cx="52" cy="280" r="15" className={styles.roundelC} />
              <text x="52" y="287" className={styles.roundelTextWhite}>
                C
              </text>
              <circle cx="52" cy="440" r="15" className={styles.roundelB} />
              <text x="52" y="447" className={styles.roundelTextDark}>
                B
              </text>
            </g>

            {/* --- routes -------------------------------------------- */}
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path
                d={roundedRoute(ROUTE_RESURFACE)}
                className={`${styles.route} ${styles.routeResurface} ${
                  emphasised("R") ? styles.routeOn : ""
                }`}
              />
              <path
                d={roundedRoute(ROUTE_C)}
                className={`${styles.route} ${styles.routeC} ${
                  emphasised("C") ? styles.routeOn : ""
                }`}
              />
              <path
                d={roundedRoute(ROUTE_A)}
                className={`${styles.route} ${styles.routeA} ${
                  emphasised("A") ? styles.routeOn : ""
                }`}
              />
              <path
                d={roundedRoute(ROUTE_B)}
                className={`${styles.route} ${styles.routeB} ${
                  emphasised("B") ? styles.routeOn : ""
                }`}
              />
            </g>

            {/* --- Resurface caption on the dashed route -------------- */}
            <g aria-hidden="true">
              <text x="516" y="44" className={styles.resurfaceCaption}>
                <tspan className={styles.resurfaceCaptionKey}>RESURFACE</tspan>
                <tspan dx="10" className={styles.resurfaceCaptionBody}>
                  the service you forgot still runs
                </tspan>
              </text>
            </g>

            {/* --- service dot on Line C ------------------------------ */}
            <g className={styles.serviceDot} aria-hidden="true">
              <circle cx="100" cy="280" r="11" className={styles.serviceDotHalo} />
              <circle cx="100" cy="280" r="6.5" className={styles.serviceDotCore} />
            </g>

            {/* --- stations ------------------------------------------- */}
            {STATIONS.map((station) => {
              const isActive = active?.id === station.id;
              return (
                <g
                  key={station.id}
                  className={styles.station}
                  tabIndex={0}
                  role="button"
                  aria-pressed={pinned === station.id}
                  aria-label={spokenLabel(station)}
                  onMouseEnter={() => setHovered(station.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(station.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() => togglePin(station.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      togglePin(station.id);
                    }
                  }}
                >
                  {/* hit area */}
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r="22"
                    className={styles.hit}
                  />

                  {/* selection halo */}
                  {isActive ? (
                    <>
                      <circle
                        cx={station.x}
                        cy={station.y}
                        r="21"
                        className={styles.haloOuter}
                      />
                      <circle
                        cx={station.x}
                        cy={station.y}
                        r="21"
                        className={styles.haloInner}
                      />
                    </>
                  ) : null}

                  {/* mark */}
                  {station.mark === "tick" ? (
                    <line
                      x1={station.x}
                      y1={station.y - 14}
                      x2={station.x}
                      y2={station.y + 14}
                      className={styles.tick}
                    />
                  ) : null}
                  {station.mark === "interchange" ? (
                    <circle
                      cx={station.x}
                      cy={station.y}
                      r="12"
                      className={styles.interchange}
                    />
                  ) : null}
                  {station.mark === "terminus" ? (
                    <>
                      <circle
                        cx={station.x}
                        cy={station.y}
                        r="11"
                        className={styles.terminusRing}
                      />
                      <circle
                        cx={station.x}
                        cy={station.y}
                        r="6.5"
                        className={styles.terminusCore}
                      />
                    </>
                  ) : null}

                  {/* label */}
                  {station.overline ? (
                    <text
                      x={station.overline.x}
                      y={station.overline.y}
                      textAnchor={station.label.anchor}
                      className={styles.overline}
                    >
                      {station.overline.text}
                    </text>
                  ) : null}
                  <text
                    x={station.label.x}
                    y={station.label.y}
                    textAnchor={station.label.anchor}
                    className={`${styles.stationLabel} ${
                      isActive ? styles.stationLabelOn : ""
                    }`}
                  >
                    {station.label.rows.map((row, index) => (
                      <tspan
                        key={row}
                        x={station.label.x}
                        dy={index === 0 ? 0 : 16}
                      >
                        {row}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            {/* --- callout panel -------------------------------------- */}
            {active ? (
              <g
                className={styles.callout}
                aria-hidden="true"
                pointerEvents="none"
              >
                <rect
                  x={calloutPosition(active).x}
                  y={calloutPosition(active).y}
                  width={CALLOUT_W}
                  height={CALLOUT_H}
                  rx="14"
                  className={styles.calloutPanel}
                  filter="url(#cairn-callout-shadow)"
                />
                <rect
                  x={calloutPosition(active).x + 6}
                  y={calloutPosition(active).y + 6}
                  width={CALLOUT_W - 12}
                  height={CALLOUT_H - 12}
                  rx="9"
                  className={styles.calloutKeyline}
                />
                <text
                  x={calloutPosition(active).x + 18}
                  y={calloutPosition(active).y + 27}
                  className={styles.calloutLines}
                >
                  {linesSummary(active).toUpperCase()}
                </text>
                <text
                  x={calloutPosition(active).x + 18}
                  y={calloutPosition(active).y + 52}
                  className={styles.calloutTitle}
                >
                  {active.title}
                </text>
                <text
                  x={calloutPosition(active).x + 18}
                  y={calloutPosition(active).y + 71}
                  className={styles.calloutNote}
                >
                  {active.note}
                </text>
                <text
                  x={calloutPosition(active).x + 18}
                  y={calloutPosition(active).y + 87}
                  className={styles.calloutService}
                >
                  {active.service.toUpperCase()}
                </text>
              </g>
            ) : null}
          </svg>
        </div>
      </div>

      {/* --- platform indicator: live text for the current station ---- */}
      <div className={styles.indicator}>
        <span className={styles.indicatorKey}>Selected station</span>
        <p className={styles.indicatorText} aria-live="polite">
          {active ? (
            <>
              <strong className={styles.indicatorTitle}>{active.title}</strong>
              <span className={styles.indicatorSep} aria-hidden="true">
                ·
              </span>
              <span>{active.note}</span>
              <span className={styles.indicatorSep} aria-hidden="true">
                ·
              </span>
              <span className={styles.indicatorService}>{active.service}</span>
            </>
          ) : (
            <span>
              Point at a station, or press Tab to walk the network. Click or
              press Enter to hold a station open.
            </span>
          )}
        </p>
      </div>

      <p className={styles.meanings}>
        {(["A", "B", "C", "R"] as LineId[]).map((id) => (
          <span key={id} className={styles.meaning}>
            <span className={`${styles.meaningSwatch} ${styles[`swatch${id}`]}`} />
            {LINE_LABEL[id]} — {LINE_MEANING[id]}
          </span>
        ))}
      </p>
    </div>
  );
}
