import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commonplace — 02 · Observatory",
};

const stars = [
  [90, 90], [160, 540], [260, 60], [350, 620], [430, 90], [520, 470],
  [640, 600], [720, 560], [780, 90], [860, 620], [980, 60], [1080, 180],
  [1130, 560], [1180, 320], [60, 360], [210, 250], [1010, 500], [880, 220],
];

const nodes = [
  { id: "attention residue", x: 620, y: 300, r: 7, hot: true },
  { id: "deep work", x: 480, y: 210, r: 4.5, lx: -10, ly: -14 },
  { id: "mornings", x: 720, y: 180, r: 4, lx: 14, ly: -8 },
  { id: "the phone problem", x: 790, y: 360, r: 5, lx: 16, ly: 4 },
  { id: "meetings, annotated", x: 500, y: 400, r: 4.5, lx: -30, ly: -16 },
  { id: "tea ceremony — kyoto", x: 330, y: 300, r: 4, lx: -10, ly: -12 },
  { id: "sourdough v4", x: 200, y: 440, r: 3.5 },
  { id: "running log", x: 380, y: 520, r: 3.5 },
  { id: "the ring road", x: 560, y: 545, r: 4, lx: 2, ly: 26 },
  { id: "dream, 12 march", x: 830, y: 545, r: 3.5 },
  { id: "brutalist maps", x: 945, y: 300, r: 4, lx: -148, ly: 4 },
  { id: "tokyo metro", x: 1050, y: 430, r: 3.5, lx: -118, ly: 8 },
  { id: "app idea — silent gym", x: 920, y: 140, r: 3.5, lx: -30, ly: -12 },
  { id: "woolf, quotes", x: 690, y: 80, r: 3, lx: 12, ly: -6 },
  { id: "spaced repetition", x: 280, y: 145, r: 4, lx: -8, ly: -12 },
  { id: "compound interest", x: 125, y: 245, r: 3 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 8],
  [1, 5], [1, 14], [1, 2], [2, 13], [2, 12],
  [3, 10], [3, 11], [4, 8], [4, 7], [4, 5],
  [5, 6], [5, 14], [7, 8], [8, 9], [9, 11],
  [10, 12], [12, 13], [5, 15],
];

export default function Two() {
  return (
    <main className="d2">
      <header className="d2-head">
        <span className="d2-wordmark">Commonplace</span>
        <nav className="d2-nav" aria-label="Page">
          <a href="#mechanism">How it links</a>
          <a href="#neighborhood">A neighborhood</a>
          <a href="#start">Pricing</a>
        </nav>
        <a className="d2-navcta" href="#start">
          Open your vault
        </a>
      </header>

      <section className="d2-hero">
        <svg
          className="d2-sky"
          viewBox="0 0 1200 640"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g className="d2-stars">
            {stars.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.3} />
            ))}
          </g>
          <g className="d2-edges">
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                pathLength={100}
                style={{ ["--d" as string]: `${0.5 + i * 0.09}s` }}
              />
            ))}
          </g>
          <g className="d2-nodes">
            {nodes.map((n, i) => (
              <g key={n.id} style={{ ["--d" as string]: `${0.15 + i * 0.07}s` }}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  className={n.hot ? "d2-node d2-node--hot" : "d2-node"}
                />
                {n.lx !== undefined && (
                  <text x={n.x + n.lx} y={n.y + (n.ly ?? 0)}>
                    {n.id}
                  </text>
                )}
              </g>
            ))}
          </g>
        </svg>

        <div className="d2-readout">
          <p className="d2-readout-title">attention residue</p>
          <p className="d2-readout-meta">6 links — last touched 2h ago</p>
        </div>

        <div className="d2-hero-copy">
          <h1>Every thought knows its neighbors.</h1>
          <p>
            Commonplace maps your notes into a living constellation — each idea
            linked to the ones around it, each cluster denser than you
            remember.
          </p>
          <div className="d2-cta">
            <a className="d2-btn" href="#start">
              Start mapping your thinking
            </a>
            <a className="d2-quiet" href="#mechanism">
              See how links form
            </a>
          </div>
        </div>
      </section>

      <section className="d2-mech" id="mechanism">
        <h2>How the map forms</h2>
        <div className="d2-mech-rows">
          <div className="d2-mech-row">
            <svg viewBox="0 0 48 24" aria-hidden="true">
              <circle cx={6} cy={12} r={3.4} />
              <line x1={9.5} y1={12} x2={38} y2={12} />
              <circle cx={42} cy={12} r={3.4} className="fill" />
            </svg>
            <div>
              <h3>You link</h3>
              <p>
                Type [[tea ceremony]] mid-sentence and the edge is drawn —
                no filing, no tagging ritual.
              </p>
            </div>
          </div>
          <div className="d2-mech-row">
            <svg viewBox="0 0 48 24" aria-hidden="true">
              <circle cx={24} cy={12} r={3.4} className="fill" />
              <line x1={24} y1={8} x2={10} y2={4} />
              <line x1={24} y1={16} x2={10} y2={20} />
              <line x1={24} y1={8} x2={38} y2={4} />
              <line x1={24} y1={16} x2={38} y2={20} />
              <circle cx={8} cy={4} r={2.4} />
              <circle cx={8} cy={20} r={2.4} />
              <circle cx={40} cy={4} r={2.4} />
              <circle cx={40} cy={20} r={2.4} />
            </svg>
            <div>
              <h3>It backlinks</h3>
              <p>
                Every note keeps a list of what points at it — including the
                mentions you never formalized.
              </p>
            </div>
          </div>
          <div className="d2-mech-row">
            <svg viewBox="0 0 48 24" aria-hidden="true">
              <circle cx={10} cy={16} r={2.6} />
              <circle cx={38} cy={16} r={2.6} />
              <path d="M 13 14 Q 24 -2 35 14" />
              <circle cx={24} cy={7} r={3} className="fill" />
            </svg>
            <div>
              <h3>It resurfaces</h3>
              <p>
                The graph notices when today&rsquo;s writing sits near an old
                node, and deals the note back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="d2-hood" id="neighborhood">
        <div className="d2-hood-copy">
          <h2>A neighborhood, inspected</h2>
          <p>
            Open any note and you see its sky: everything that links in,
            everything it links to, and the second-order neighbors one hop
            away. Search finds what you typed. The neighborhood finds what you
            meant.
          </p>
        </div>
        <div className="d2-catalog">
          <p className="d2-cat-name">attention residue</p>
          <p className="d2-cat-meta">
            node 0412 · first seen 2y ago · 6 inbound
          </p>
          <ul>
            <li>
              <span>deep work</span>
              <span className="d2-cat-rel">mentions ×3</span>
            </li>
            <li>
              <span>mornings</span>
              <span className="d2-cat-rel">links directly</span>
            </li>
            <li>
              <span>the phone problem</span>
              <span className="d2-cat-rel">mentions ×5</span>
            </li>
            <li>
              <span>meetings, annotated</span>
              <span className="d2-cat-rel">links directly</span>
            </li>
            <li>
              <span>journal, october</span>
              <span className="d2-cat-rel">mentions ×9</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="d2-stats" aria-label="Readouts">
        <div className="d2-stat">
          <p className="d2-stat-n">2,847</p>
          <p className="d2-stat-l">notes mapped</p>
        </div>
        <div className="d2-stat">
          <p className="d2-stat-n">11,204</p>
          <p className="d2-stat-l">links drawn</p>
        </div>
        <div className="d2-stat">
          <p className="d2-stat-n">96</p>
          <p className="d2-stat-l">resurfaced this week</p>
        </div>
      </section>

      <section className="d2-start" id="start">
        <h2>Start mapping your thinking.</h2>
        <p>Free for the first thousand notes. Syncs end-to-end encrypted.</p>
        <Link className="d2-btn" href="/two">
          Open your vault
        </Link>
      </section>

      <footer className="d2-foot">
        <span>Commonplace</span>
        <span className="d2-foot-dim">the observatory build</span>
      </footer>
    </main>
  );
}
