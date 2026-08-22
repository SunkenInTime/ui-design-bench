import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import { Mark, Underline } from "./mark";
import "@/generated/scoped-variant-css/with-design-skill/ox-alpha/source/src/app/5/highlight.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-anton",
});
const arch = Archivo({ subsets: ["latin"], variable: "--f-arch" });

export const metadata: Metadata = {
  title: "Substrate — stop writing into the void",
  description:
    "Concept 5 of 5: Highlighter Punk. Substrate reads your archive back to you — the right note at the right moment.",
};

const TICKER = [
  "captured 08:14 “entropy is a lullaby”",
  "linked to “garden notes”",
  "resurfaced “borges, again”",
  "cluster formed reading / memory",
  "you wrote 4 cards before coffee",
];

export default function Page() {
  return (
    <div className={`hp ${anton.variable} ${arch.variable}`}>
      <header className="hp-head">
        <span className="brand">
          SUBSTRATE<sup>*</sup>
        </span>
        <nav aria-label="Site">
          <a href="#capture">Capture</a>
          <a href="#connect">Connect</a>
          <a href="#recall">Recall</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      <div className="legend" aria-label="How to read this page">
        <span>HOW TO READ THIS PAGE:</span>
        <span>
          <i className="swatch sw-y" aria-hidden="true" />
          YELLOW = CAPTURE
        </span>
        <span>
          <i className="swatch sw-p" aria-hidden="true" />
          PINK = CONNECT
        </span>
        <span>
          <i className="swatch sw-b" aria-hidden="true" />
          BLUE = RECALL
        </span>
      </div>

      <section className="hp-hero">
        <div className="sticker" aria-hidden="true">
          READS
          <br />
          YOU
          <br />
          BACK ★
        </div>
        <h1>
          Stop writing into{" "}
          <Mark color="yellow">the void.</Mark>
        </h1>
        <p className="sub">
          Substrate is the second brain that reads your archive back to you —
          the right note at the right moment, highlighted like you meant it.
        </p>
        <div className="cta-row">
          <a className="btn-hi" href="#pricing">
            Start free
          </a>
          <a className="link-quiet" href="#capture">
            see it work ↓
          </a>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1}>
              {TICKER.map((t) => (
                <i key={t}>✳ {t}</i>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="statement" id="capture">
        <div>
          <span className="system-tag tag-y">System 01 · Capture</span>
          <h2>
            Capture at the speed of <Mark color="yellow">wait—</Mark>
          </h2>
          <p>
            One keystroke from anywhere on your machine. Substrate timestamps,
            files and links while you’re still thinking. The average capture
            takes four seconds; the average excuse takes longer.
          </p>
        </div>
        <div className="demo" role="img" aria-label="Quick capture bar with a typed thought and filing chips">
          <p className="demo-label">QUICK CAPTURE — 08:14:03</p>
          <p className="capture-bar">
            entropy is a lullaby
            <span className="caret" aria-hidden="true" />
          </p>
          <div className="chips">
            <span className="chip y">FILED → INBOX</span>
            <span className="chip">LINKED ×3</span>
            <span className="chip p">↔ GARDEN NOTES</span>
          </div>
        </div>
      </section>

      <section className="statement" id="connect">
        <div className="demo">
          <p className="demo-label">LIVE LINK MAP</p>
          <svg
            className="mini-graph"
            viewBox="0 0 320 210"
            role="img"
            aria-label="Hand-drawn style graph connecting notes about entropy, gardens, Borges and memory"
          >
            <g stroke="#101010" strokeWidth="2.5" fill="none" strokeLinecap="round">
              <path d="M60 60 C 100 90, 130 110, 160 105" />
              <path d="M160 105 C 200 100, 230 80, 262 62" />
              <path d="M160 105 C 150 140, 120 160, 92 168" />
              <path d="M160 105 C 190 140, 220 158, 248 164" />
              <path d="M92 168 C 150 185, 200 182, 248 164" />
            </g>
            <circle cx="60" cy="60" r="13" fill="#ff7ac8" stroke="#101010" strokeWidth="2.5" />
            <circle cx="262" cy="62" r="10" fill="#fff" stroke="#101010" strokeWidth="2.5" />
            <circle cx="160" cy="105" r="16" fill="#ffe81a" stroke="#101010" strokeWidth="2.5" />
            <circle cx="92" cy="168" r="9" fill="#fff" stroke="#101010" strokeWidth="2.5" />
            <circle cx="248" cy="164" r="11" fill="#ff7ac8" stroke="#101010" strokeWidth="2.5" />
            <text x="146" y="82" fontSize="11" fontWeight="700" fontFamily="var(--f-arch), sans-serif">entropy</text>
            <text x="228" y="48" fontSize="11" fontWeight="700" fontFamily="var(--f-arch), sans-serif">borges</text>
            <text x="30" y="188" fontSize="11" fontWeight="700" fontFamily="var(--f-arch), sans-serif">gardens</text>
            <text x="222" y="192" fontSize="11" fontWeight="700" fontFamily="var(--f-arch), sans-serif">memory</text>
          </svg>
        </div>
        <div>
          <span className="system-tag tag-p">System 02 · Connect</span>
          <h2>
            Every note arrives <Mark color="pink">with its friends.</Mark>
          </h2>
          <p>
            Bidirectional links draw themselves by meaning, not memory. Write
            about entropy today; your essay on gardens gains a line to it
            tonight. Folders sort paper. Substrate sorts sense.
          </p>
        </div>
      </section>

      <section className="statement" id="recall">
        <div>
          <span className="system-tag tag-b">System 03 · Recall</span>
          <h2>
            Your archive <Underline>talks back.</Underline>
          </h2>
          <p>
            Ask in plain words. Substrate answers with your own notes — dated,
            linked, and resurfaced in the order you’d have wanted them. It’s
            not search results. It’s your past self, finally organized.
          </p>
        </div>
        <div className="demo">
          <p className="demo-label">ASK YOUR ARCHIVE</p>
          <p className="chat-q">“what did i know about flow states?”</p>
          <ul className="chat-a">
            <li>
              <b>Resurfaced · 647 days ago</b>
              Flow = boredom plus edge. You had it backwards.
            </li>
            <li>
              <b>Linked · 212 days ago</b>
              The climbing-gym note where this clicked.
            </li>
            <li>
              <b>Drafted · last night</b>
              Three notes merged into a paragraph, ready to ship.
            </li>
          </ul>
        </div>
      </section>

      <section className="wall">
        <h2>Found in the wild, highlighted by us.</h2>
        <div className="passages">
          <figure className="passage">
            <p>
              “I stopped losing ideas the week my notes started{" "}
              <Mark color="yellow">introducing themselves.</Mark>”
            </p>
            <cite>— D. Kim, product designer</cite>
          </figure>
          <figure className="passage">
            <p>
              “It’s the first app that treats my archive as{" "}
              <Mark color="pink">a colleague,</Mark> not a corpse.”
            </p>
            <cite>— S. Ferreira, PhD candidate</cite>
          </figure>
          <figure className="passage">
            <p>
              “Recall used to mean scrolling. Now it means{" "}
              <Underline>being answered.</Underline>”
            </p>
            <cite>— J. Whitfield, staff writer</cite>
          </figure>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <h2>
          Free while in <Mark color="yellow">beta.</Mark>
        </h2>
        <p>then $6/mo · no card required · export everything, always</p>
      </section>

      <section className="hp-final">
        <h2>
          Make your <Mark color="yellow">mark.</Mark>
        </h2>
        <a className="btn-ink" href="#top">
          Start free now
        </a>
      </section>

      <footer className="hp-footer">
        <span>SUBSTRATE © 2026</span>
        <span>CONCEPT 5 OF 5 — HIGHLIGHTER PUNK</span>
        <span>SET IN ANTON &amp; ARCHIVO</span>
      </footer>
    </div>
  );
}
