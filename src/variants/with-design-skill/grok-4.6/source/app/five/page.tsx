import styles from "./five.module.css";

export default function FivePage() {
  return (
    <div className={styles.sheet}>
      <header className={styles.top}>
        <div>
          <p className={styles.series}>Sheet 7 · Mind survey · 1:1</p>
          <h1>Loci quadrangle</h1>
        </div>
        <button type="button" className={styles.cta}>
          Start writing
        </button>
      </header>

      <div className={styles.body}>
        <div className={styles.map}>
          <div className={styles.grid} />
          <div className={styles.compass} aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="22" fill="none" stroke="#243028" strokeWidth="1" />
              <path d="M32 12 L36 32 L32 28 L28 32 Z" fill="#243028" />
              <text x="32" y="10" textAnchor="middle" fontSize="8">
                N
              </text>
            </svg>
          </div>

          <svg className={styles.terrain} viewBox="0 0 640 520" role="img" aria-label="Topographic map of a mind">
            <ellipse className={styles.contour} cx="332" cy="236" rx="118" ry="78" transform="rotate(-18 332 236)" />
            <ellipse className={styles.contour} cx="332" cy="236" rx="86" ry="54" transform="rotate(-18 332 236)" />
            <ellipse className={styles.contour} cx="332" cy="236" rx="54" ry="32" transform="rotate(-18 332 236)" />
            <ellipse className={styles.contour} cx="332" cy="236" rx="26" ry="16" transform="rotate(-18 332 236)" />

            <ellipse className={styles.contour} cx="470" cy="92" rx="90" ry="58" transform="rotate(12 470 92)" />
            <ellipse className={styles.contour} cx="470" cy="92" rx="58" ry="36" transform="rotate(12 470 92)" />
            <ellipse className={styles.contour} cx="470" cy="92" rx="28" ry="16" transform="rotate(12 470 92)" />

            <ellipse className={styles.contour} cx="168" cy="168" rx="80" ry="52" transform="rotate(-8 168 168)" />
            <ellipse className={styles.contour} cx="168" cy="168" rx="48" ry="30" transform="rotate(-8 168 168)" />
            <ellipse className={styles.contour} cx="168" cy="168" rx="22" ry="12" transform="rotate(-8 168 168)" />

            <path
              className={styles.contour}
              d="M40 300 C120 280 180 310 250 300 C340 286 410 320 620 280"
            />
            <path
              className={styles.water}
              d="M40 430 C140 400 200 450 300 420 C400 390 480 430 620 400"
            />
            <path
              className={styles.trail}
              d="M70 400 C180 320 250 300 340 210 C400 150 430 120 470 90"
            />

            <g className={styles.hotspot} tabIndex={0}>
              <circle className={styles.peakDot} cx="332" cy="236" r="5" />
              <text className={styles.label} x="344" y="232">
                Essay ridge — 808m
              </text>
            </g>
            <g className={styles.hotspot} tabIndex={0}>
              <circle className={styles.peakDot} cx="470" cy="92" r="5" />
              <text className={styles.label} x="482" y="88">
                Unstarted peak
              </text>
            </g>
            <g className={styles.hotspot} tabIndex={0}>
              <circle className={styles.peakDot} cx="168" cy="168" r="5" />
              <text className={styles.label} x="180" y="164">
                Kitchen saddle
              </text>
            </g>
            <text className={styles.label} x="300" y="438">
              River of daily notes
            </text>
          </svg>
        </div>

        <aside className={styles.legend}>
          <h2>Legend</h2>
          <p>
            Survey your own mind. Peaks are the work you return to. Trails are
            the links you made. Blank quadrants are unsurveyed, not empty.
          </p>
          <ul className={styles.swatches}>
            <li>
              <span className={styles.swatch} style={{ color: "#6b4f2a" }} />
              Contour — density of notes
            </li>
            <li>
              <span className={styles.swatch} style={{ color: "#5e8494" }} />
              Water — daily capture
            </li>
            <li>
              <span className={styles.swatch} style={{ color: "#243028" }} />
              Trail — a link you can walk
            </li>
            <li>
              <span className={styles.swatch} style={{ color: "#d45d79" }} />
              Peak — a thought that holds
            </li>
          </ul>
          <div className={styles.scale}>
            Scale
            <span className={styles.bar} />
            0 ————— 1 thought
          </div>
        </aside>
      </div>
    </div>
  );
}
