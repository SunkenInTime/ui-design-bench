"use client";

import { useState } from "react";
import styles from "./slips.module.css";

const slips = [
  {
    id: "240812a",
    title: "The smell of rain on hot pavement",
    body: "Petrichor is a retrieval cue. I remember the argument we had in July every time the street steams. The note is not about weather. It is about how the body files what the mind refuses to.",
    see: ["240812a1", "240801c"],
    carbon: "working memory is a desk",
  },
  {
    id: "240812a1",
    title: "Child of 240812a — the cue, not the climate",
    body: "Do not tag this ‘nature’. Tag it under recall. If a smell can find a fight from last summer, a slip can find a thought from last year.",
    see: ["240812a"],
    carbon: "the smell of rain",
  },
  {
    id: "240801c",
    title: "Working memory is a desk, not a warehouse",
    body: "I keep clearing the desk into boxes labeled later. Later is where thoughts go to lose their neighbors. A slip stays on the desk until it has a number and a friend.",
    see: ["231104b", "240713f"],
    carbon: "why I abandon notebooks",
  },
  {
    id: "231104b",
    title: "Why I abandon notebooks",
    body: "Because a notebook is a hallway with no doors. Page 47 cannot see page 12. I need a box of slips that gossip.",
    see: ["240801c", "240713f"],
    carbon: "commonplace is not a diary",
  },
  {
    id: "240713f",
    title: "Commonplace is not a diary",
    body: "A diary keeps days. A commonplace keeps ammunition: quotes, doubts, half-built ideas. Locus is the box. You cut the paper.",
    see: ["240801c"],
    carbon: "every thought gets a number",
  },
] as const;

export function SlipView() {
  const [index, setIndex] = useState(0);
  const current = slips[index];

  function cycle(delta: number) {
    setIndex((value) => (value + delta + slips.length) % slips.length);
  }

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <p className={styles.form}>Locus · form 7-A · duplicate</p>
        <p className={styles.form}>NCR · keep the carbon</p>
      </header>

      <main id="content" className={styles.main}>
        <section className={styles.hero}>
          <div>
            <p className={styles.kicker}>Slip-box for restless notes</p>
            <h1 className={styles.title}>
              Cut a slip.
              <br />
              Keep the carbon.
            </h1>
            <p className={styles.lede}>
              Every thought gets a number. Every number knows its neighbors.
              Nothing files away — it stays in the box, faintly printed on the
              slip beneath it.
            </p>
            <div className={styles.actions}>
              <button className={styles.primary} type="button" onClick={() => cycle(1)}>
                Peel the next slip
              </button>
              <button className={styles.ghost} type="button" onClick={() => cycle(-1)}>
                Previous
              </button>
            </div>
          </div>

          <div className={styles.stage}>
            <div className={styles.stack} aria-live="polite">
              {slips.map((slip, i) => {
                const offset = (i - index + slips.length) % slips.length;
                return (
                  <article
                    key={slip.id}
                    className={styles.slip}
                    style={{
                      zIndex: slips.length - offset,
                      transform: `translate(${offset * 10}px, ${offset * 12}px) rotate(${offset * 1.4}deg)`,
                      opacity: offset > 3 ? 0 : 1,
                    }}
                    aria-hidden={i !== index}
                  >
                    <div className={styles.spine} aria-hidden="true">
                      {Array.from({ length: 9 }).map((_, hole) => (
                        <span key={hole} />
                      ))}
                    </div>
                    <div className={styles.slipBody}>
                      <p className={styles.id}>{slip.id}</p>
                      <h2>{slip.title}</h2>
                      <p>{slip.body}</p>
                      <p className={styles.see}>See also {slip.see.join(" · ")}</p>
                      <p className={styles.carbon} aria-hidden="true">
                        {slip.carbon}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className={styles.caption}>
              Showing {current.id} · {index + 1} of {slips.length} in the box
            </p>
          </div>
        </section>

        <section className={styles.legend} aria-label="How a slip works">
          <h2>Legend, printed on every pad</h2>
          <ul>
            <li>
              <span>ID</span>
              Date plus a letter. Children append a number. The box stays
              chronological; the mind does not have to.
            </li>
            <li>
              <span>Carbon</span>
              The slip underneath shows through. That is a backlink you can
              feel with a thumb.
            </li>
            <li>
              <span>See also</span>
              Written by hand when two slips argue or agree. Locus keeps the
              gossip.
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.foot}>
        <p>Locus · a second brain in a box of paper</p>
        <p>Tear at the perforation. Do not file.</p>
      </footer>
    </div>
  );
}
