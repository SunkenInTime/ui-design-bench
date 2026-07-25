"use client";

import { useState } from "react";
import styles from "./page.module.css";

/*
 * Resurface, drawn as the plate rack behind the press: old plates you have not
 * pulled in a long time, kept because they still touch what is on the drum
 * today. One button pulls the next one out.
 */

type Plate = {
  title: string;
  dormant: string;
  links: string;
  line: string;
};

const TODAY = "Kiln temperature curves";

const RACK: Plate[] = [
  {
    title: "Sourdough: hydration log",
    dormant: "not opened in 14 months",
    links: "3 links in common",
    line: "Both logs are about a curve you are not allowed to rush.",
  },
  {
    title: "Estuary sediment cores",
    dormant: "not opened in 2 years",
    links: "4 links in common",
    line: "Same clay, asked a different question, wrote down the same firing range.",
  },
  {
    title: "Bridge deck expansion joints",
    dormant: "not opened in 19 months",
    links: "2 links in common",
    line: "Anything you heat has to be given somewhere to go.",
  },
];

export function ResurfaceRack() {
  const [index, setIndex] = useState(0);
  const plate = RACK[index];

  return (
    <div className={styles.rack}>
      <p className={styles.rackToday}>
        <span className={styles.rackTodayTag}>On the drum today</span>
        <span className={styles.rackTodayTitle}>{TODAY}</span>
      </p>

      <div className={styles.rackStage}>
        <span aria-hidden="true" className={`${styles.rackShim} ${styles.rackShimA}`} />
        <span aria-hidden="true" className={`${styles.rackShim} ${styles.rackShimB}`} />

        <article className={styles.rackPlate}>
          <p className={styles.rackPlateTag}>Resurfaced</p>
          <h3 className={styles.rackPlateTitle}>{plate.title}</h3>
          <p className={styles.rackPlateLine}>{plate.line}</p>
          <p className={styles.rackPlateMeta}>
            <span>{plate.dormant}</span>
            <span aria-hidden="true" className={styles.rackDivider} />
            <span>{plate.links}</span>
          </p>
        </article>
      </div>

      <div className={styles.rackControls}>
        <button
          type="button"
          className={styles.rackButton}
          onClick={() => setIndex((i) => (i + 1) % RACK.length)}
        >
          Pull the next plate
        </button>
        <p className={styles.rackCount} aria-live="polite">
          {index + 1} of {RACK.length} in the rack
        </p>
      </div>
    </div>
  );
}
