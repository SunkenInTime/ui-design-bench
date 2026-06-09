"use client";

import "@/generated/scoped-variant-css/with-design-skill/fable/source/src/app/4/landing.css";

/* Revision-cloud path: scalloped arcs clockwise around a rect. */
function cloudPath(x: number, y: number, w: number, h: number, step = 22) {
  let d = `M ${x} ${y}`;
  for (let cx = x; cx < x + w; cx += step) {
    d += ` A ${step / 2} ${step / 2} 0 0 1 ${Math.min(cx + step, x + w)} ${y}`;
  }
  for (let cy = y; cy < y + h; cy += step) {
    d += ` A ${step / 2} ${step / 2} 0 0 1 ${x + w} ${Math.min(cy + step, y + h)}`;
  }
  for (let cx = x + w; cx > x; cx -= step) {
    d += ` A ${step / 2} ${step / 2} 0 0 1 ${Math.max(cx - step, x)} ${y + h}`;
  }
  for (let cy = y + h; cy > y; cy -= step) {
    d += ` A ${step / 2} ${step / 2} 0 0 1 ${x} ${Math.max(cy - step, y)}`;
  }
  return d + " Z";
}

function Schematic() {
  const line = "#E8EEF7";
  const dim = "rgba(232, 238, 247, 0.65)";
  return (
    <svg
      className="bp-schematic"
      viewBox="0 0 760 440"
      role="img"
      aria-label="Schematic of a second brain: capture inlet feeding note cells joined by bidirectional ties, flowing to a recall outlet"
    >
      <defs>
        <marker
          id="bp-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={dim} />
        </marker>
        <pattern
          id="bp-hatch"
          width="7"
          height="7"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="7" stroke={dim} strokeWidth="0.8" />
        </pattern>
      </defs>

      {/* dimension line, top */}
      <g stroke={dim} strokeWidth="1">
        <line x1="70" y1="36" x2="296" y2="36" markerStart="url(#bp-arrow)" />
        <line x1="464" y1="36" x2="690" y2="36" markerEnd="url(#bp-arrow)" />
        <line x1="70" y1="28" x2="70" y2="52" />
        <line x1="690" y1="28" x2="690" y2="52" />
      </g>
      <text x="380" y="40" textAnchor="middle" className="bp-svg-text">
        CAPACITY — UNLIMITED
      </text>

      {/* incoming fragments */}
      <g stroke={dim} strokeWidth="1">
        <line x1="340" y1="62" x2="356" y2="84" markerEnd="url(#bp-arrow)" />
        <line x1="380" y1="58" x2="380" y2="84" markerEnd="url(#bp-arrow)" />
        <line x1="420" y1="62" x2="404" y2="84" markerEnd="url(#bp-arrow)" />
      </g>
      <text x="448" y="66" className="bp-svg-text bp-svg-small">
        FRAGMENTS, UNSORTED
      </text>

      {/* capture funnel */}
      <polygon
        points="320,88 440,88 396,144 364,144"
        fill="url(#bp-hatch)"
        stroke={line}
        strokeWidth="1.5"
      />
      <line x1="380" y1="144" x2="380" y2="176" stroke={line} strokeWidth="1.5" markerEnd="url(#bp-arrow)" />

      {/* note cells */}
      <g fill="none" stroke={line} strokeWidth="1.5">
        <rect x="180" y="180" width="100" height="60" />
        <rect x="330" y="180" width="100" height="60" />
        <rect x="480" y="180" width="100" height="60" />
      </g>
      <g className="bp-svg-text bp-svg-small">
        <text x="230" y="214" textAnchor="middle">NOTE 21/3a</text>
        <text x="380" y="214" textAnchor="middle">NOTE 21/3b</text>
        <text x="530" y="214" textAnchor="middle">NOTE 8/4</text>
      </g>

      {/* bidirectional ties */}
      <g fill="none" stroke={dim} strokeWidth="1.2" strokeDasharray="5 4">
        <path d="M 230 240 C 250 282, 360 282, 380 242" markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" />
        <path d="M 380 242 C 400 284, 510 284, 530 240" markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" />
        <path d="M 228 244 C 240 330, 520 330, 532 244" markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" />
      </g>

      {/* recall outlet with revision cloud */}
      <line x1="580" y1="210" x2="618" y2="210" stroke={line} strokeWidth="1.5" markerEnd="url(#bp-arrow)" />
      <rect x="622" y="180" width="96" height="60" fill="none" stroke={line} strokeWidth="1.5" />
      <text x="670" y="208" textAnchor="middle" className="bp-svg-text bp-svg-small">
        RECALL
      </text>
      <text x="670" y="222" textAnchor="middle" className="bp-svg-text bp-svg-tiny">
        VALVE — OPEN
      </text>
      <path d={cloudPath(606, 164, 128, 92, 24)} fill="none" stroke="#F2C53D" strokeWidth="1.2" opacity="0.9" />
      <text x="700" y="152" className="bp-svg-text bp-svg-tiny" fill="#F2C53D">
        REV B
      </text>

      {/* balloons + leaders */}
      <g stroke={dim} strokeWidth="1" fill="none">
        <line x1="290" y1="104" x2="252" y2="92" />
        <line x1="180" y1="206" x2="132" y2="196" />
        <line x1="380" y1="300" x2="380" y2="336" />
      </g>
      <g className="bp-balloon">
        <circle cx="238" cy="88" r="13" />
        <text x="238" y="93" textAnchor="middle">1</text>
        <circle cx="118" cy="192" r="13" />
        <text x="118" y="197" textAnchor="middle">2</text>
        <circle cx="380" cy="352" r="13" />
        <text x="380" y="357" textAnchor="middle">3</text>
      </g>

      {/* centerline */}
      <line
        x1="380"
        y1="70"
        x2="380"
        y2="420"
        stroke={dim}
        strokeWidth="0.6"
        strokeDasharray="14 5 3 5"
        opacity="0.5"
      />
      <text x="380" y="434" textAnchor="middle" className="bp-svg-text bp-svg-tiny">
        ℄ TRAIN OF THOUGHT
      </text>
    </svg>
  );
}

export function Landing() {
  return (
    <div className="bp-page">
      <div className="bp-sheet">
        <header className="bp-strip">
          <span className="bp-strip-id">TANGENT · DWG. NO. SB-001</span>
          <span className="bp-strip-title">GENERAL ARRANGEMENT — SECOND BRAIN</span>
          <span className="bp-strip-rev">REV B — SUPERSEDES: PAPER</span>
        </header>

        <main>
          <section className="bp-hero">
            <p className="bp-fig">FIG. 01 — GENERAL ARRANGEMENT</p>
            <h1 className="bp-headline">
              Build a brain
              <br />
              you can point to.
            </h1>
            <p className="bp-sub">
              Tangent is a note-taking application assembled from three
              components: capture, links, recall. No moving parts you don’t
              control. Erected in minutes. Holds for decades.
            </p>
            <div className="bp-cta-row">
              <a href="#titleblock" className="bp-btn bp-btn-primary">
                Approved for construction →
              </a>
              <a href="#schedule" className="bp-btn bp-btn-ghost">
                View full spec
              </a>
            </div>

            <Schematic />

            <dl className="bp-key">
              <div>
                <dt>① CAPTURE INLET</dt>
                <dd>
                  Global hotkey, operable over any app. ≤ 2 s from thought to
                  filed. No titles or folders at intake.
                </dd>
              </div>
              <div>
                <dt>② NOTE CELLS</dt>
                <dd>
                  Plain text, local-first. Each cell carries an address and
                  remains owner-readable forever.
                </dd>
              </div>
              <div>
                <dt>③ BIDIRECTIONAL TIES</dt>
                <dd>
                  Load-bearing. Links run both ways and carry recall in either
                  direction. No orphan notes permitted.
                </dd>
              </div>
            </dl>
          </section>

          <section className="bp-details">
            <article className="bp-detail">
              <p className="bp-fig">FIG. 02 — CAPTURE, DETAIL</p>
              <svg viewBox="0 0 300 120" aria-hidden="true" className="bp-detail-svg">
                <rect x="20" y="36" width="64" height="48" rx="6" fill="none" stroke="#E8EEF7" strokeWidth="1.5" />
                <text x="52" y="65" textAnchor="middle" className="bp-svg-text">⌘K</text>
                <line x1="92" y1="60" x2="148" y2="60" stroke="rgba(232,238,247,0.65)" strokeWidth="1" markerEnd="url(#bp-arrow)" />
                <rect x="156" y="40" width="124" height="40" fill="none" stroke="#E8EEF7" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="218" y="64" textAnchor="middle" className="bp-svg-text bp-svg-small">BLANK LINE</text>
              </svg>
              <ul className="bp-spec">
                <li>TIME TO FILE ……… ≤ 2 SEC</li>
                <li>TITLES REQUIRED …… 0</li>
                <li>OPERABLE OVER …… EVERY APP</li>
              </ul>
            </article>

            <article className="bp-detail">
              <p className="bp-fig">FIG. 03 — RECALL, SECTION</p>
              <svg viewBox="0 0 300 120" aria-hidden="true" className="bp-detail-svg">
                <rect x="20" y="22" width="180" height="28" rx="14" fill="none" stroke="#E8EEF7" strokeWidth="1.5" />
                <text x="110" y="40" textAnchor="middle" className="bp-svg-text bp-svg-small">“that thing about…”</text>
                <g fill="none" stroke="rgba(232,238,247,0.65)" strokeWidth="1">
                  <rect x="36" y="66" width="148" height="14" />
                  <rect x="44" y="84" width="148" height="14" />
                  <rect x="52" y="102" width="148" height="14" />
                  <line x1="110" y1="50" x2="110" y2="64" markerEnd="url(#bp-arrow)" />
                </g>
                <text x="232" y="94" className="bp-svg-text bp-svg-tiny">MATCHES,</text>
                <text x="232" y="106" className="bp-svg-text bp-svg-tiny">RANKED</text>
              </svg>
              <ul className="bp-spec">
                <li>QUERY TYPE ……… HALF-REMEMBERED</li>
                <li>RANKED BY ……… PROXIMITY OF THOUGHT</li>
                <li>DEAD ENDS ……… NONE; EVERY NOTE LINKS ON</li>
              </ul>
            </article>
          </section>

          <section className="bp-schedule" id="schedule">
            <p className="bp-fig">TABLE 01 — MATERIALS SCHEDULE</p>
            <div className="bp-table-wrap">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th scope="col">MARK</th>
                    <th scope="col">ITEM</th>
                    <th scope="col">SPECIFICATION</th>
                    <th scope="col">RATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A1</td>
                    <td>VAULT</td>
                    <td>PLAIN-TEXT NOTES, STORED ON OWNER’S DISK</td>
                    <td>$0</td>
                  </tr>
                  <tr>
                    <td>B2</td>
                    <td>SYNC</td>
                    <td>END-TO-END ENCRYPTED, ALL DEVICES</td>
                    <td>$4/MO</td>
                  </tr>
                  <tr>
                    <td>C3</td>
                    <td>NOTHING ELSE</td>
                    <td>NO ADS. NO TRAINING ON YOUR NOTES.</td>
                    <td>INCL.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bp-notes">
            <p className="bp-fig">GENERAL NOTES</p>
            <ol className="bp-notes-list">
              <li>ALL THOUGHTS TO BE FILED WITHIN 2 SECONDS OF ARRIVAL.</li>
              <li>LINKS SHALL BE BIDIRECTIONAL THROUGHOUT.</li>
              <li>NO CLOUD SHALL BE LOAD-BEARING. VAULT REMAINS ON OWNER’S MACHINE.</li>
              <li>FORGETTING BY OWNER: PERMITTED. FORGETTING BY SYSTEM: PROHIBITED.</li>
              <li>THIS DRAWING TO BE READ TOGETHER WITH THE OWNER’S CURIOSITY.</li>
            </ol>
          </section>
        </main>

        <footer className="bp-titleblock" id="titleblock">
          <div className="bp-tb-logo">
            <span className="bp-tb-name">TANGENT</span>
            <span className="bp-tb-dept">drafting dept.</span>
          </div>
          <dl className="bp-tb-grid">
            <div><dt>PROJECT</dt><dd>A SECOND BRAIN</dd></div>
            <div><dt>CLIENT</dt><dd>YOU</dd></div>
            <div><dt>SCALE</dt><dd>1 : ∞</dd></div>
            <div><dt>DATE</dt><dd>JUN 2026</dd></div>
            <div><dt>SHEET</dt><dd>1 OF 1</dd></div>
            <div><dt>REV</dt><dd className="bp-tb-rev">B</dd></div>
          </dl>
          <a href="#" className="bp-btn bp-btn-primary bp-tb-cta">
            Begin construction — free
          </a>
        </footer>
      </div>
    </div>
  );
}
