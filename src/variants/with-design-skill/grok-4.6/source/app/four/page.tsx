"use client";

import { useEffect, useState } from "react";
import styles from "./four.module.css";

const NOTE =
  "Attention is a room you furnish. I keep adding chairs and wondering why I cannot walk.";

export default function FourPage() {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const timeoutId = window.setTimeout(() => setChars(NOTE.length), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const id = window.setInterval(() => {
      setChars((count) => {
        if (count >= NOTE.length) {
          window.clearInterval(id);
          return count;
        }
        return count + 1;
      });
    }, 32);

    return () => window.clearInterval(id);
  }, []);

  const done = chars >= NOTE.length;

  return (
    <div className={styles.desk}>
      <header className={styles.top}>
        <span className={styles.mark}>Loci</span>
        <button type="button" className={styles.cta}>
          Start writing
        </button>
      </header>

      <main className={styles.sheet}>
        <aside className={styles.margin} aria-label="Linked notes">
          <span className={styles.marginLabel}>The other brain</span>
          <p className={styles.annotation}>
            <strong>Linked · 2019</strong>
            Method of loci: you remember a thing by the room you left it in.
          </p>
          <p className={styles.annotation}>
            <strong>Linked · draft</strong>
            The interruption essay. Still open. Still in the hallway.
          </p>
          <p className={styles.annotation}>
            <strong>Captured · 1:14am</strong>
            From the kitchen light. You were not trying to work.
          </p>
        </aside>

        <article className={`${styles.page} ${done ? styles.done : ""}`}>
          <p className={styles.kicker}>Tuesday · still thinking</p>
          <h1 className={styles.headline}>The part of you that remembers at 1am.</h1>
          <p className={styles.note} aria-label={NOTE}>
            {NOTE.slice(0, chars)}
            <span className={styles.caret} aria-hidden="true" />
          </p>
          <p className={styles.aside}>
            You write in the middle. Loci fills the margin with what you already
            knew.
          </p>
        </article>
      </main>
    </div>
  );
}
