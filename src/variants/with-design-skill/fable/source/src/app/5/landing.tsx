"use client";

import { useState } from "react";
import "@/generated/scoped-variant-css/with-design-skill/fable/source/src/app/5/landing.css";

type Tag = "todo" | "idea" | "quote" | "fact";

type Sticky = {
  id: number;
  text: string;
  color: "yellow" | "pink" | "blue" | "green" | "scrap";
  tag: Tag;
  scatter: { x: number; y: number; rot: number };
  grid: { col: number; row: number };
};

const TAG_LABEL: Record<Tag, string> = {
  todo: "to-do",
  idea: "idea",
  quote: "quote",
  fact: "fact",
};

const STICKIES: Sticky[] = [
  { id: 1, text: "ask Dana about the grant!!", color: "yellow", tag: "todo", scatter: { x: 4, y: 6, rot: -8 }, grid: { col: 0, row: 0 } },
  { id: 2, text: "follow up: kiln studio, tuesday?", color: "green", tag: "todo", scatter: { x: 64, y: 2, rot: 6 }, grid: { col: 1, row: 0 } },
  { id: 3, text: "memory palace book — title??", color: "pink", tag: "idea", scatter: { x: 33, y: 14, rot: 12 }, grid: { col: 2, row: 0 } },
  { id: 4, text: "IDEA: notes app but good", color: "yellow", tag: "idea", scatter: { x: 70, y: 38, rot: -11 }, grid: { col: 0, row: 1 } },
  { id: 5, text: "“we overestimate days, underestimate decades” — who said this", color: "blue", tag: "quote", scatter: { x: 8, y: 48, rot: 5 }, grid: { col: 1, row: 1 } },
  { id: 6, text: "that podcast line about attention (WHICH podcast)", color: "pink", tag: "quote", scatter: { x: 41, y: 56, rot: -5 }, grid: { col: 2, row: 1 } },
  { id: 7, text: "mum’s soup = nutmeg, NOT cinnamon", color: "green", tag: "fact", scatter: { x: 22, y: 70, rot: 9 }, grid: { col: 0, row: 2 } },
  { id: 8, text: "wifi: latte2019", color: "scrap", tag: "fact", scatter: { x: 57, y: 68, rot: -13 }, grid: { col: 1, row: 2 } },
  { id: 9, text: "screenshot_472.png — important???", color: "scrap", tag: "fact", scatter: { x: 84, y: 16, rot: 8 }, grid: { col: 2, row: 2 } },
];

export function Landing() {
  const [tidy, setTidy] = useState(false);

  return (
    <div className="dk-page">
      <header className="dk-nav">
        <span className="dk-logo">Tangent</span>
        <a href="#start" className="dk-btn dk-btn-small">
          Get Tangent
        </a>
      </header>

      <main>
        <section className="dk-hero">
          <h1 className="dk-headline">
            Your brain: great at ideas,
            <br />
            <span className="dk-headline-mark">terrible</span> at keeping them.
          </h1>
          <p className="dk-sub">
            Tangent is the second brain for people whose first brain is busy.
            Below: an honest reconstruction of your current system.
          </p>

          <div
            className={`dk-board ${tidy ? "dk-board-tidy" : ""}`}
            role="group"
            aria-label="A board of scattered notes that Tangent can organize"
          >
            {STICKIES.map((s, i) => (
              <div
                key={s.id}
                className={`dk-sticky dk-sticky-${s.color}`}
                style={
                  {
                    "--sx": `${s.scatter.x}%`,
                    "--sy": `${s.scatter.y}%`,
                    "--srot": `${s.scatter.rot}deg`,
                    "--gx": `${s.grid.col * 33.4 + 1.4}%`,
                    "--gy": `${s.grid.row * 33.4 + 1.4}%`,
                    transitionDelay: tidy ? `${i * 45}ms` : `${(STICKIES.length - i) * 30}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="dk-sticky-text">{s.text}</span>
                <span className={`dk-tag dk-tag-${s.tag}`} aria-hidden={!tidy}>
                  {TAG_LABEL[s.tag]}
                </span>
              </div>
            ))}
          </div>

          <div className="dk-board-controls">
            <button
              type="button"
              className="dk-btn dk-btn-big"
              aria-pressed={tidy}
              onClick={() => setTidy((v) => !v)}
            >
              {tidy ? "Mess it up again" : "Make it make sense"}
            </button>
            <p className="dk-toast" role="status">
              {tidy
                ? "9 thoughts filed · 4 linked · 1 wifi password forgiven."
                : "9 thoughts at large · 0 findable · 1 grant at risk."}
            </p>
          </div>
        </section>

        <section className="dk-features">
          <article className="dk-feature dk-underline-yellow">
            <h3>Catch it now</h3>
            <p>
              Two seconds from brain to board. A hotkey, a line, done — before
              the kettle boils or the light turns green.
            </p>
          </article>
          <article className="dk-feature dk-underline-pink">
            <h3>It files itself</h3>
            <p>
              Tangent reads the note, guesses the tag, and finds its friends.
              You can overrule it. You won’t need to.
            </p>
          </article>
          <article className="dk-feature dk-underline-blue">
            <h3>Find it half-remembered</h3>
            <p>
              Search “that soup thing” and get the nutmeg note. Wrong words
              work — that’s the point of a second brain.
            </p>
          </article>
        </section>

        <section className="dk-quote-wrap">
          <figure className="dk-quote-sticky">
            <blockquote>“I stopped emailing myself.”</blockquote>
            <figcaption>— every Tangent user, eventually</figcaption>
          </figure>
        </section>

        <section className="dk-final" id="start">
          <h2 className="dk-final-line">Start free. Your mess is welcome.</h2>
          <a href="#" className="dk-btn dk-btn-big">
            Get Tangent
          </a>
          <p className="dk-fine">
            Free for messy people, forever. Pro when the mess gets ambitious.
          </p>
        </section>
      </main>

      <footer className="dk-footer">
        <span>Tangent © 2026</span>
        <span>made by people with 41,000 unread screenshots</span>
      </footer>
    </div>
  );
}
