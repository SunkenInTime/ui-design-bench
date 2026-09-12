"use client";

import { useState } from "react";
import styles from "./page.module.css";

/*
 * Two note cards printed as two ink plates. They overlap, they multiply, and
 * the band where they meet goes violet — which is where the link lives.
 * Both ink layers and both text layers share the same grid area and the same
 * rotation, so the text never drifts off its plate. Body text is kept clear of
 * the violet band except where it is set in paper colour, which reads cleanly
 * on all three inks.
 */

type Pairing = {
  title: string;
  excerpt: string;
  shared: string;
  edited: string;
};

const COLOUR_ONE = {
  title: "Why the 1854 cholera map worked",
  excerpt:
    "Snow did not argue from the water. He argued from where the dead were standing.",
  edited: "edited 12 Mar · 14 links",
};

const COLOUR_TWO: Pairing[] = [
  {
    title: "Estuary sediment cores",
    excerpt:
      "Every core is an argument about where a thing settled, not what anyone called it.",
    shared: "Both notes reason from where something was found.",
    edited: "edited 4 Nov · 9 links",
  },
  {
    title: "Reading — Seeing Like a State",
    excerpt:
      "The map is not a bad copy of the ground. It is a decision about what to leave out.",
    shared: "Both notes ask what a map leaves out on purpose.",
    edited: "edited 27 Jan · 6 links",
  },
  {
    title: "Bridge deck expansion joints",
    excerpt:
      "The failure was legible for eleven years. Nobody had drawn it on one sheet.",
    shared: "Both notes are about a failure nobody had drawn yet.",
    edited: "edited 8 Aug · 11 links",
  },
];

export function BacklinkPlates() {
  const [index, setIndex] = useState(0);
  const two = COLOUR_TWO[index];

  return (
    <div className={styles.plateStack}>
      <div className={styles.plates}>
        <div
          aria-hidden="true"
          className={`${styles.ink} ${styles.inkOne} ${styles.geoOne}`}
        />
        <div
          aria-hidden="true"
          className={`${styles.ink} ${styles.inkTwo} ${styles.geoTwo}`}
        />

        <article className={`${styles.plateCard} ${styles.cardOne} ${styles.geoOne}`}>
          <p className={styles.plateTag}>
            <span className={styles.swatchDot} data-ink="blue" aria-hidden="true" />
            Colour 1 · medium blue
          </p>
          <h3 className={styles.plateTitle}>{COLOUR_ONE.title}</h3>
          <p className={styles.plateExcerpt}>{COLOUR_ONE.excerpt}</p>
          <p className={styles.plateMeta}>{COLOUR_ONE.edited}</p>
        </article>

        <p className={styles.overlapBand}>
          <span className={styles.overlapLabel}>prints on both sheets</span>
          <span className={styles.overlapLink}>[[{two.title}]]</span>
        </p>

        <article className={`${styles.plateCard} ${styles.cardTwo} ${styles.geoTwo}`}>
          <p className={styles.plateTag}>
            <span className={styles.swatchDot} data-ink="pink" aria-hidden="true" />
            Colour 2 · fluorescent pink
          </p>
          <h3 className={styles.plateTitle}>{two.title}</h3>
          <p className={styles.plateBacklink}>
            Linked from — {COLOUR_ONE.title}
          </p>
          <p className={styles.plateExcerpt}>{two.excerpt}</p>
          <p className={styles.plateMeta}>{two.edited}</p>
        </article>
      </div>

      <div className={styles.plateControls}>
        <p className={styles.plateControlsLabel} id="plate-picker">
          Load a second note onto the drum
        </p>
        <div
          className={styles.plateButtons}
          role="group"
          aria-labelledby="plate-picker"
        >
          {COLOUR_TWO.map((option, i) => (
            <button
              key={option.title}
              type="button"
              className={styles.plateButton}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              {option.title}
            </button>
          ))}
        </div>
        <p className={styles.plateShared}>{two.shared}</p>
      </div>
    </div>
  );
}
