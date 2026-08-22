import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { Dish } from "./growth";
import "@/generated/scoped-variant-css/with-design-skill/ox-alpha/source/src/app/4/petri.css";

const bric = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--f-bric",
});
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-plex",
});

export const metadata: Metadata = {
  title: "Substrate — ideas are cultures",
  description:
    "Concept 4 of 5: Petri Lab. Substrate is a growth medium for notes — inoculate, cross-feed, harvest.",
};

export default function Page() {
  return (
    <div className={`lab ${bric.variable} ${plex.variable}`}>
      <header className="lab-head">
        <span className="brand">
          SUBSTRATE
          <small>CULTURE COLLECTION Nº 2-BRAIN</small>
        </span>
        <nav aria-label="Site">
          <a href="#specimens">Specimens</a>
          <a href="#protocol">Protocol</a>
          <a href="#start">Start</a>
        </nav>
      </header>

      <main className="bench">
        <aside className="log" aria-label="Culture log">
          <h2>CULTURE LOG</h2>
          <ol>
            <li>
              <strong>D001</strong> inoculated inbox with 3 stray thoughts
            </li>
            <li>
              <strong>D004</strong> first link observed: “entropy” ↔ “garden
              notes”
            </li>
            <li>
              <strong>D009</strong> cluster formed: reading / memory (7 notes)
            </li>
            <li>
              <strong>D017</strong> resurfaced: “call re: studio acoustics”
            </li>
            <li className="wild">
              <strong>D023</strong> wild contaminant logged — see SPEC 04
            </li>
            <li>
              <strong>D031</strong> fruiting: essay drafted from 11 notes
            </li>
          </ol>
        </aside>

        <div>
          <section className="hero">
            <div>
              <p className="hero-eyebrow">COLLECTION: SECOND BRAIN · FIELD SERIES</p>
              <h1>
                Ideas are cultures. <span>Give them somewhere to grow.</span>
              </h1>
              <p className="lede">
                Substrate is a growth medium for notes. Inoculate it with stray
                thoughts; it connects, feeds and resurfaces them until they
                fruit into writing you didn’t know you’d finished.
              </p>
              <div className="cta-row">
                <a className="btn-culture" href="#start">
                  Start a culture
                </a>
                <a className="link-quiet" href="#protocol">
                  read the protocol ↓
                </a>
              </div>
            </div>
            <Dish variant="hero" label="Large petri dish with a mature colony of connected notes and one rust-colored contamination" />
          </section>

          <section className="specimens" id="specimens">
            <h2>Selected specimens.</h2>
            <div className="spec-grid">
              <article className="spec">
                <figure>
                  <Dish variant="alpha" label="Petri dish, rapid spreading colony" />
                  <figcaption>SPEC 01 · GROWTH: RAPID</figcaption>
                </figure>
                <h3>Capture</h3>
                <p>
                  Isolate: stray thoughts. Medium: universal inbox. One
                  keystroke from anywhere; colonies spread before the idea
                  cools.
                </p>
              </article>

              <article className="spec">
                <figure>
                  <Dish variant="beta" label="Petri dish, dense rhizoid network" />
                  <figcaption>SPEC 02 · GROWTH: RHIZOID</figcaption>
                </figure>
                <h3>Backlinks</h3>
                <p>
                  Isolate: connections. Networks thread between distant
                  isolates on their own — no folders, only mycelium.
                </p>
              </article>

              <article className="spec">
                <figure>
                  <Dish variant="gamma" label="Petri dish, weekly fruiting bodies" />
                  <figcaption>SPEC 03 · FRUITING: WEEKLY</figcaption>
                </figure>
                <h3>Resurfacing</h3>
                <p>
                  Isolate: memory. Dormant notes fruit again exactly when
                  they’re relevant. You forget; the medium doesn’t.
                </p>
              </article>

              <article className="spec wild">
                <figure>
                  <Dish variant="wild" label="Contaminated petri dish with rust-colored wild colony" />
                  <figcaption>SPEC 04 · STATUS: CONTAMINANT</figcaption>
                </figure>
                <h3>The wild idea</h3>
                <p>
                  Do not discard. Contaminants often outgrow the intended
                  culture. Substrate keeps them labeled and breathing.
                </p>
              </article>
            </div>
          </section>

          <section className="protocol" id="protocol">
            <h2>The protocol.</h2>
            <div className="proto-grid">
              <div className="proto">
                <strong>STEP 01</strong>
                <h3>Inoculate daily</h3>
                <p>Small entries, honestly captured. Purity is not the goal; volume is.</p>
              </div>
              <div className="proto">
                <strong>STEP 02</strong>
                <h3>Cross-feed links</h3>
                <p>Accept suggested connections. Feeding one note feeds its neighbors.</p>
              </div>
              <div className="proto">
                <strong>STEP 03</strong>
                <h3>Incubate quietly</h3>
                <p>No streaks, no gamification. Cultures grow in silence.</p>
              </div>
              <div className="proto">
                <strong>STEP 04</strong>
                <h3>Harvest weekly</h3>
                <p>Resurfaced clusters arrive pre-sorted. Write from them directly.</p>
              </div>
            </div>
          </section>

          <section className="quote">
            <blockquote>
              “My archive stopped being a graveyard the week it became{" "}
              <em>a garden.</em>”
            </blockquote>
            <cite>— M. OKAFOR, SCIENCE WRITER · CULTURE SINCE 2023</cite>
          </section>

          <section className="final" id="start">
            <h2>Label your first dish.</h2>
            <a className="btn-culture" href="#top">
              Start a culture — free
            </a>
            <small>no credit card · your medium stays local · export anytime</small>
          </section>
        </div>
      </main>

      <footer className="lab-footer">
        <span>SUBSTRATE CULTURE COLLECTION © 2026</span>
        <span>CONCEPT 4 OF 5 — PETRI LAB</span>
        <span>BRICOLAGE GROTESQUE &amp; IBM PLEX MONO</span>
      </footer>
    </div>
  );
}
