"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./direction.module.css";

/**
 * One vertical run of the root system, drawn in the gutter beside a horizon.
 * Every segment enters at x=20 and leaves at x=20, so consecutive segments
 * join into one continuous root down the page. A segment draws itself the
 * first time it comes into view; the node is a zero-length round-capped path,
 * which stays a circle even though the viewBox is stretched to the row.
 * Reduced motion is handled in CSS, where the segments start drawn.
 */
export function RootSegment({ hairs = "right" }: { hairs?: "right" | "left" }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`${styles.seg} ${drawn ? styles.segOn : ""}`}
      viewBox="0 0 40 400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        className={styles.trunk}
        pathLength={1}
        d="M20 0 C 13 70, 27 130, 20 200 C 13 270, 26 330, 20 400"
      />
      <path
        className={styles.branch}
        pathLength={1}
        d="M20 34 C 27 38, 31 44, 40 46"
      />
      {hairs === "right" ? (
        <>
          <path
            className={styles.hair}
            pathLength={1}
            d="M20 150 C 27 158, 31 172, 33 190"
          />
          <path
            className={styles.hair}
            pathLength={1}
            d="M20 250 C 25 262, 27 276, 26 296"
          />
        </>
      ) : (
        <>
          <path
            className={styles.hair}
            pathLength={1}
            d="M20 130 C 13 140, 9 152, 8 172"
          />
          <path
            className={styles.hair}
            pathLength={1}
            d="M20 280 C 14 292, 12 306, 13 326"
          />
        </>
      )}
      <path className={styles.node} d="M20 34 h0" />
    </svg>
  );
}
