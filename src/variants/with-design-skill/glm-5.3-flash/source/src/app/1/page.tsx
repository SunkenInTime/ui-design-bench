import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Courier_Prime, Caveat } from "next/font/google";
import CardDeck from "./card-deck";
import "@/generated/scoped-variant-css/with-design-skill/glm-5.3-flash/source/src/app/1/slipbox.css";

const display = Fraunces({ subsets: ["latin"], variable: "--f-display" });
const type = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--f-type",
});
const hand = Caveat({ subsets: ["latin"], variable: "--f-hand" });

export const metadata: Metadata = {
  title: "Substrate — every thought deserves a card",
  description:
    "Concept 1 of 5: The Slip Box. Substrate keeps your notes the way libraries kept minds before software.",
};

export default function Page() {
  return (
    <div
      className={`sb ${display.variable} ${type.variable} ${hand.variable}`}
    >
      <header className="sb-head">
        <strong>SUBSTRATE</strong>
        <nav aria-label="Site">
          <a href="#method">Method</a>
          <a href="#features">The box</a>
          <a href="#start">Pricing</a>
        </nav>
      </header>

      <section className="sb-hero">
        <div>
          <span className="stamp-eyebrow">SECOND BRAIN SYSTEM</span>
          <h1>
            Every thought deserves a card.
            <br />
            <em>Every card deserves a sibling.</em>
          </h1>
          <p className="lede">
            Substrate keeps notes the way libraries kept minds before software:
            on index cards, cross-referenced by hand, waiting in the box to
            surprise you.
          </p>
          <div className="cta-row">
            <Link className="btn-tab" href="#start">
              OPEN YOUR BOX →
            </Link>
            <a className="link-quiet" href="#method">
              see how the box works ↓
            </a>
          </div>
          <p className="fineprint">free while in beta · your notes stay yours</p>
        </div>

        <CardDeck />
      </section>

      <section className="sb-method" id="method">
        <p className="kicker">THE METHOD</p>
        <h2>Three moves, repeated for life.</h2>
        <div className="steps">
          <svg
            className="thread"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M 60 150 C 220 40, 320 190, 500 110 S 800 60, 950 120" />
          </svg>
          <article className="step-card">
            <span className="step-num">MOVE 01 — CAPTURE</span>
            <h3>Write it on a card</h3>
            <p>
              One thought, one card, ten seconds. If it takes longer, the
              thought wasn’t ready.
            </p>
          </article>
          <article className="step-card">
            <span className="step-num">MOVE 02 — LINK</span>
            <h3>Tie it to its siblings</h3>
            <p>
              Substrate suggests the relatives. One click and the red string is
              tied — both ways, forever.
            </p>
          </article>
          <article className="step-card">
            <span className="step-num">MOVE 03 — RESURFACE</span>
            <h3>Let the box deal them back</h3>
            <p>
              Old cards return when they’re relevant again. You forget; the box
              doesn’t.
            </p>
          </article>
        </div>
      </section>

      <section className="sb-feats" id="features">
        <p className="kicker">INSIDE THE BOX</p>
        <h2>Old habits, new hardware.</h2>
        <div className="feat-grid">
          <article className="feat">
            <h3>Backlinks both ways</h3>
            <p>
              Every link draws a return line. Open any card and see everything
              that ever pointed at it.
            </p>
            <span className="tag">STANDARD</span>
          </article>
          <article className="feat">
            <h3>Recall that forgives typos</h3>
            <p>
              Search “berer” and find Béres. Full-text, fuzzy, instant — across
              a decade of cards.
            </p>
            <span className="tag">STANDARD</span>
          </article>
          <article className="feat">
            <h3>Local-first files</h3>
            <p>
              Plain markdown on your disk first, sync second. The box lives in
              your house.
            </p>
            <span className="tag">STANDARD</span>
          </article>
          <article className="feat">
            <h3>Leave anytime</h3>
            <p>
              Export the whole drawer as markdown with one command. No lock-in,
              no ransom.
            </p>
            <span className="tag">GUARANTEED</span>
          </article>
        </div>
      </section>

      <section className="sb-quote">
        <figure className="duecard">
          <table>
            <caption>DATE DUE — AS RETURNED BY READERS</caption>
            <tbody>
              <tr>
                <th scope="col">ISSUED</th>
                <th scope="col">RETURNED</th>
                <th scope="col">BORROWER</th>
              </tr>
              <tr>
                <td>mar 3</td>
                <td>mar 9</td>
                <td>R. Alvarez</td>
              </tr>
              <tr>
                <td>jun 14</td>
                <td>—</td>
                <td>you, eventually</td>
              </tr>
            </tbody>
          </table>
          <blockquote>
            “I reread my own notes like letters from a smarter friend.”
          </blockquote>
          <figcaption>
            — R. Alvarez, researcher · card on file since 2019
          </figcaption>
        </figure>
      </section>

      <section className="sb-final" id="start">
        <h2>Your future self is taking notes.</h2>
        <Link className="btn-tab" href="#top">
          START THE BOX — FREE
        </Link>
        <p className="fineprint">no credit card · export everything, always</p>
      </section>

      <footer className="sb-footer">
        <span>SUBSTRATE © 2026</span>
        <span>CONCEPT 1 OF 5 — THE SLIP BOX</span>
        <span>SET IN FRAUNCES, COURIER PRIME &amp; CAVEAT</span>
      </footer>
    </div>
  );
}
