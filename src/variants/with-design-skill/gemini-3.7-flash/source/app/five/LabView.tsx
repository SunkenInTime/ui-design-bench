"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./lab.module.css";

const corpus = [
  {
    id: "07.12",
    title: "Working memory is a desk",
    body: "Clearing the desk into boxes labeled later is how thoughts lose their neighbors.",
    haystack: "working memory desk later boxes neighbors attention",
  },
  {
    id: "07.13",
    title: "Retrieval beats storage",
    body: "A warehouse of notes is useless if you cannot walk to the right shelf in under a minute.",
    haystack: "retrieval storage warehouse notes shelf search remember",
  },
  {
    id: "08.02",
    title: "The kettle window",
    body: "Most ideas arrive while water boils. Capture has to be faster than steam.",
    haystack: "kettle ideas capture steam daily thought carrying write",
  },
  {
    id: "08.09",
    title: "Links as lab tape",
    body: "A strip of tape between two pages is more honest than a folder hierarchy.",
    haystack: "links tape pages folder hierarchy connected notes",
  },
  {
    id: "08.11",
    title: "Sleep as incubation",
    body: "Connections set overnight. The notebook is still working after you close it.",
    haystack: "sleep incubation connections overnight notebook closed",
  },
];

export function LabView() {
  const [text, setText] = useState("");
  const area = useRef<HTMLTextAreaElement>(null);

  const neighbors = useMemo(() => {
    const words = text
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word.length > 3);
    if (words.length === 0) return [];
    return corpus
      .filter((note) => words.some((word) => note.haystack.includes(word)))
      .slice(0, 3);
  }, [text]);

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <p>Locus Laboratory Notebook</p>
        <p>Book 4 · 13 Aug 2026 · p. 118–119</p>
      </header>

      <main id="content" className={styles.book}>
        <section className={styles.left} aria-label="Experiment log">
          <p className={styles.exp}>Experiment 07 — Retrieval</p>
          <h1>Write it once. The notebook remembers the rest.</h1>
          <p className={styles.lede}>
            Locus is a second brain you can write in. Capture on the right-hand
            page. Related slips appear in the margin as soon as the words
            overlap.
          </p>
          <ol className={styles.log}>
            {corpus.map((note) => (
              <li key={note.id}>
                <span>{note.id}</span>
                <strong>{note.title}</strong>
                {note.body}
              </li>
            ))}
          </ol>
          <p className={styles.hand} aria-hidden="true">
            do not re-copy into another app —
          </p>
        </section>

        <div className={styles.gutter} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <section className={styles.right}>
          <label className={styles.label} htmlFor="thought">
            Live capture · the thought you are carrying
          </label>
          <textarea
            id="thought"
            ref={area}
            className={styles.area}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Start with the sentence in your head. Try ‘memory’, ‘kettle’, or ‘sleep’."
            rows={8}
          />
          <div className={styles.margin} aria-live="polite">
            {neighbors.length === 0 ? (
              <p className={styles.empty}>
                {text.trim()
                  ? "No neighbors yet. Keep writing — Locus finds them by the words you use."
                  : "Related notes will highlight here. The page is already listening."}
              </p>
            ) : (
              <ul>
                {neighbors.map((note) => (
                  <li key={note.id}>
                    <span className={styles.mark}>{note.id}</span>
                    <strong>{note.title}</strong>
                    <em>{note.body}</em>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className={styles.cta}
            type="button"
            onClick={() => area.current?.focus()}
          >
            {text.trim() ? "Keep this notebook" : "Write a line"}
          </button>
        </section>
      </main>

      <footer className={styles.foot}>
        <p>Locus · a second brain with graph paper</p>
        <p>Signed, dated, never filed</p>
      </footer>
    </div>
  );
}
