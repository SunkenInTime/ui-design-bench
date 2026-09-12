import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import Constellation from "./constellation";
import "@/generated/scoped-variant-css/with-design-skill/glm-5.3-flash/source/src/app/2/starfield.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--f-serif",
});
const grot = Space_Grotesk({ subsets: ["latin"], variable: "--f-grot" });

export const metadata: Metadata = {
  title: "Substrate — you already had the thought",
  description:
    "Concept 2 of 5: Planetarium. Substrate maps what you write into a living constellation.",
};

function Star({
  x,
  y,
  r,
  gold = false,
}: {
  x: number;
  y: number;
  r: number;
  gold?: boolean;
}) {
  return (
    <circle cx={x} cy={y} r={r} fill={gold ? "#e9be62" : "#f4efe2"} />
  );
}

export default function Page() {
  return (
    <div className={`pl ${serif.variable} ${grot.variable}`}>
      <Constellation />

      <main>
        <header className="pl-head">
          <strong>SUBSTRATE</strong>
          <nav aria-label="Site">
            <a href="#plates">Plates</a>
            <a href="#instruments">Instruments</a>
            <a href="#begin">Begin</a>
          </nav>
        </header>

        <section className="pl-hero">
          <p className="eyebrow">SKY CHART Nº 1 — THE WORKING MIND</p>
          <h1>
            You already had the thought.{" "}
            <em>We keep it where you can find it.</em>
          </h1>
          <p className="lede">
            Substrate draws what you write as a living constellation — every
            note a star, every connection a line — so retrieval feels like
            looking up, not digging down.
          </p>
          <div className="cta-row">
            <Link className="btn-star" href="#begin">
              BEGIN THE SURVEY
            </Link>
            <a className="link-quiet" href="#plates">
              view the plates ↓
            </a>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            DESCEND
          </div>
        </section>

        <section id="plates">
          <article className="plate">
            <div>
              <p className="designation">PLATE I · CAPTURA</p>
              <h2>
                Capture at the speed <span>of thought.</span>
              </h2>
              <p>
                One keystroke from anywhere and the sky files it while you keep
                typing. No folders to choose, no notebooks to name — a new star
                is simply born.
              </p>
            </div>
            <figure className="plate-chart">
              <svg viewBox="0 0 300 190" role="img" aria-label="Constellation diagram of scattered new notes joining the sky">
                <line x1="40" y1="140" x2="110" y2="90" stroke="rgba(244,239,226,.25)" strokeWidth="0.8" />
                <line x1="110" y1="90" x2="180" y2="120" stroke="rgba(244,239,226,.25)" strokeWidth="0.8" />
                <line x1="180" y1="120" x2="250" y2="60" stroke="rgba(233,190,98,.6)" strokeWidth="0.9" strokeDasharray="3 4" />
                <Star x={40} y={140} r={2} />
                <Star x={110} y={90} r={2.6} />
                <Star x={180} y={120} r={2} />
                <Star x={250} y={60} r={4} gold />
                <text x={252} y={44} fill="#8fc7de" fontSize="8" letterSpacing="2">NEW</text>
              </svg>
              <figcaption className="chart-label">
                <span>FIG. 1 — INBOX EVENT</span>
                <span>MAG. 1.4</span>
              </figcaption>
              <i className="tick-b" aria-hidden="true" />
            </figure>
          </article>

          <article className="plate">
            <div>
              <p className="designation">PLATE II · CONNEXIO</p>
              <h2>
                Notes find <span>their neighbors.</span>
              </h2>
              <p>
                Bidirectional links draw themselves. Write about attention today
                and yesterday’s essay on gardens quietly gains a line to it.
                Clusters emerge without a single folder.
              </p>
            </div>
            <figure className="plate-chart">
              <svg viewBox="0 0 300 190" role="img" aria-label="Cluster of connected notes forming a constellation">
                <line x1="70" y1="60" x2="130" y2="100" stroke="rgba(244,239,226,.3)" strokeWidth="0.8" />
                <line x1="130" y1="100" x2="200" y2="70" stroke="rgba(244,239,226,.3)" strokeWidth="0.8" />
                <line x1="130" y1="100" x2="110" y2="150" stroke="rgba(244,239,226,.3)" strokeWidth="0.8" />
                <line x1="200" y1="70" x2="240" y2="130" stroke="rgba(143,199,222,.55)" strokeWidth="0.9" />
                <line x1="110" y1="150" x2="240" y2="130" stroke="rgba(143,199,222,.55)" strokeWidth="0.9" />
                <Star x={70} y={60} r={2.2} />
                <Star x={130} y={100} r={3.4} gold />
                <Star x={200} y={70} r={2} />
                <Star x={110} y={150} r={2.4} />
                <Star x={240} y={130} r={2.6} />
              </svg>
              <figcaption className="chart-label">
                <span>FIG. 2 — CLUSTER “MEMORY”</span>
                <span>7 STARS</span>
              </figcaption>
              <i className="tick-b" aria-hidden="true" />
            </figure>
          </article>

          <article className="plate">
            <div>
              <p className="designation">PLATE III · REDIVIVUS</p>
              <h2>
                Old observations <span>return as weather.</span>
              </h2>
              <p>
                Spaced resurfacing moves forgotten notes back into tonight’s
                sky, exactly when they’re relevant again. You forgot; the chart
                didn’t.
              </p>
            </div>
            <figure className="plate-chart">
              <svg viewBox="0 0 300 190" role="img" aria-label="A returning note streaking across the chart">
                <path d="M 20 30 L 150 95" stroke="rgba(233,190,98,.5)" strokeWidth="0.9" strokeDasharray="4 5" />
                <line x1="150" y1="95" x2="230" y2="135" stroke="rgba(244,239,226,.3)" strokeWidth="0.8" />
                <Star x={20} y={30} r={1.6} />
                <Star x={150} y={95} r={3.8} gold />
                <Star x={230} y={135} r={2.2} />
                <circle cx={150} cy={95} r={10} fill="none" stroke="rgba(233,190,98,.35)" strokeWidth="0.8" />
                <text x={162} y={82} fill="#8fc7de" fontSize="8" letterSpacing="2">RETURNED</text>
              </svg>
              <figcaption className="chart-label">
                <span>FIG. 3 — RESURFACING</span>
                <span>AFTER 647 D</span>
              </figcaption>
              <i className="tick-b" aria-hidden="true" />
            </figure>
          </article>
        </section>

        <section className="interlude">
          <blockquote>
            “Memory is not a warehouse. It’s a sky.”
          </blockquote>
          <cite>— FIELD NOTEBOOK, VOL. IV</cite>
        </section>

        <section className="instruments" id="instruments">
          <h2>Choose your instrument.</h2>
          <div className="tiers">
            <div className="tier">
              <p className="t-name">BINOCULARS</p>
              <p className="t-price">$0</p>
              <p className="t-per">FREE WHILE IN BETA</p>
              <ul>
                <li>Unlimited notes &amp; links</li>
                <li>Local-first markdown</li>
                <li>Full-text recall</li>
              </ul>
            </div>
            <div className="tier hot">
              <span className="hot-tag">MOST CHARTED</span>
              <p className="t-name">OBSERVATORY</p>
              <p className="t-price">$8</p>
              <p className="t-per">PER MONTH</p>
              <ul>
                <li>Everything in Binoculars</li>
                <li>Spaced resurfacing</li>
                <li>Sync across devices</li>
              </ul>
            </div>
            <div className="tier">
              <p className="t-name">EXPEDITION</p>
              <p className="t-price">$16</p>
              <p className="t-per">PER MONTH</p>
              <ul>
                <li>Everything in Observatory</li>
                <li>Shared atlases for teams</li>
                <li>Version history, one year</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pl-final" id="begin">
          <h2>The sky is already full.</h2>
          <Link className="btn-star" href="#top">
            BEGIN THE SURVEY — FREE
          </Link>
        </section>
      </main>

      <footer className="pl-footer">
        <span>SUBSTRATE — CHARTED NIGHTLY</span>
        <span>CONCEPT 2 OF 5 — PLANETARIUM</span>
        <span>CORMORANT GARMOND &amp; SPACE GROTESK</span>
      </footer>
    </div>
  );
}
