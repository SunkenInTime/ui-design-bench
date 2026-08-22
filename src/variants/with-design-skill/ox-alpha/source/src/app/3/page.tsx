import type { Metadata } from "next";
import { Barlow_Condensed, Space_Mono } from "next/font/google";
import {
  Gauge,
  SemanticFader,
  PowerSwitch,
  Screw,
  CaptureConsole,
  RecallConsole,
} from "./widgets";
import "@/generated/scoped-variant-css/with-design-skill/ox-alpha/source/src/app/3/instrument.css";

const cond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-cond",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--f-mono",
});

export const metadata: Metadata = {
  title: "Substrate — memory you can operate",
  description:
    "Concept 3 of 5: The Instrument. Substrate files, wires and re-delivers your thoughts with the calm of a good machine.",
};

export default function Page() {
  return (
    <div className={`ins ${cond.variable} ${mono.variable}`}>
      <div className="frame">
        <header className="ins-head">
          <span className="brand">
            SUBSTRATE
            <small>MODEL S-2 · SECOND-BRAIN UNIT</small>
          </span>
          <nav className="mono" aria-label="Site">
            <a href="#modules">Modules</a>
            <a href="#specs">Specs</a>
            <a href="#power">Power</a>
          </nav>
        </header>

        <section className="ins-hero">
          <div>
            <p className="hero-eyebrow">
              SECOND-BRAIN APPARATUS · FULLY MECHANICAL MEMORY · SN 000001
            </p>
            <h1>
              Memory you<br />
              can <span className="sig">operate.</span>
            </h1>
            <p className="lede">
              Substrate files, wires and re-delivers your thoughts with the
              calm of a good machine. No feeds. No noise. Just switches that do
              exactly what they say.
            </p>
            <div className="cta-row">
              <a className="btn-signal" href="#power">
                Start free — throw the switch
              </a>
              <a className="link-quiet" href="#modules">
                read the manual ↓
              </a>
            </div>
          </div>

          <div className="gauge-panel">
            <Screw pos="tl" />
            <Screw pos="tr" />
            <Screw pos="bl" />
            <Screw pos="br" />
            <Gauge value={98} label="Recall fidelity" />
            <Gauge value={30} label="Capture latency" unit=" ms ×10" />
            <Gauge value={74} label="Links per note" unit=" %ile" />
          </div>
        </section>

        <section id="modules">
          <article className="module">
            <div>
              <p className="module-id">MODULE 01 — CAPTURE</p>
              <h2>Every thought, filed before it evaporates.</h2>
              <p>
                A global quick-capture takes dictation at typing speed. The
                sweep files each entry against your existing archive while you
                move on to the next idea.
              </p>
            </div>
            <CaptureConsole />
          </article>

          <article className="module">
            <div>
              <p className="module-id">MODULE 02 — CONNECT</p>
              <h2>Wiring you don’t have to solder.</h2>
              <p>
                As notes accumulate, Substrate proposes connections by meaning,
                not memory. Set the range; the machine draws the lines both
                ways.
              </p>
            </div>
            <div className="module-console">
              <Screw pos="tl" />
              <Screw pos="tr" />
              <Screw pos="bl" />
              <Screw pos="br" />
              <SemanticFader />
            </div>
          </article>

          <article className="module">
            <div>
              <p className="module-id">MODULE 03 — RECALL</p>
              <h2>Two operating modes. Zero guesswork.</h2>
              <p>
                Precise returns exactly what you asked for. Serendipity lets
                the needle wander into adjacent shelves and come back with
                something better than what you wanted.
              </p>
            </div>
            <RecallConsole />
          </article>
        </section>

        <section className="specs" id="specs">
          <ul>
            <li>
              STORAGE <strong>LOCAL-FIRST</strong>
            </li>
            <li>
              SYNC <strong>END-TO-END ENCRYPTED</strong>
            </li>
            <li>
              EXPORT <strong>MARKDOWN, ONE CLICK</strong>
            </li>
            <li>
              LOCK-IN <strong>NONE</strong>
            </li>
          </ul>
        </section>

        <section className="ins-final" id="power">
          <h2>Your second brain ships assembled.</h2>
          <PowerSwitch />
          <p className="power-sub">free while in beta · no credit card required</p>
        </section>

        <footer className="ins-footer">
          <span>SUBSTRATE INSTRUMENTS © 2026</span>
          <span>CONCEPT 3 OF 5 — THE INSTRUMENT</span>
          <span>BARLOW CONDENSED &amp; SPACE MONO</span>
        </footer>
      </div>
    </div>
  );
}
