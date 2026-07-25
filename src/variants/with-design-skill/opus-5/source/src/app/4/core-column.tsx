"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BEDS, CORE_BASE, CORE_ID, type Bed } from "./beds";
import styles from "./page.module.css";

const TONE_CLASS: Record<Bed["tone"], string> = {
  surface: styles.toneSurface,
  loose: styles.toneLoose,
  interbed: styles.toneInterbed,
  laminated: styles.toneLaminated,
  graded: styles.toneGraded,
  unconformity: styles.toneUnconformity,
  bedrock: styles.toneBedrock,
  catcher: styles.toneCatcher,
};

/**
 * The strat column. It renders complete and legible with no JavaScript at all:
 * every band carries its depth, year, name and specimen ID, and every band is a
 * link to its bed. The observer only adds emphasis — which band is currently
 * under the reading line — and moves the depth marker to it.
 */
export function CoreColumn() {
  const [activeId, setActiveId] = useState(BEDS[0].id);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const tubeRef = useRef<HTMLDivElement | null>(null);
  const bandRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [marker, setMarker] = useState<{ y: number; x: number } | null>(null);

  useEffect(() => {
    const sections = BEDS.map((bed) => document.getElementById(bed.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        }
        // Shallowest bed crossing the reading line wins, so the marker only
        // ever descends one bed at a time.
        const next = BEDS.find((bed) => inView.has(bed.id));
        if (next) setActiveId(next.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const band = bandRefs.current.get(activeId);
      if (!band) return;
      setMarker({
        y: band.offsetTop + band.offsetHeight / 2,
        x: band.offsetLeft + band.offsetWidth / 2,
      });
    };

    update();
    const tube = tubeRef.current;
    const observer = new ResizeObserver(update);
    if (tube) observer.observe(tube);
    return () => observer.disconnect();
  }, [activeId]);

  const shown = BEDS.find((bed) => bed.id === (focusedId ?? activeId)) ?? BEDS[0];

  return (
    <div className={styles.column}>
      <div className={styles.columnHead}>
        <span className={styles.columnCore}>{CORE_ID}</span>
        <span className={styles.columnRecovery}>rec. 94%</span>
      </div>

      <div className={styles.tracks}>
        <ol className={styles.scaleTrack} aria-hidden="true">
          {BEDS.map((bed) => (
            <li
              key={bed.id}
              className={styles.scaleRow}
              style={{ flexGrow: bed.bottom - bed.top }}
            >
              <span className={styles.scaleDepth}>
                {String(bed.top).padStart(3, "0")}
              </span>
              <span className={styles.scaleYear}>{bed.year}</span>
            </li>
          ))}
        </ol>

        <div className={styles.tubeWrap}>
          <div className={styles.tube} ref={tubeRef}>
          {BEDS.map((bed) => {
            const isActive = bed.id === activeId;
            return (
              <a
                key={bed.id}
                href={`#${bed.id}`}
                ref={(node) => {
                  if (node) bandRefs.current.set(bed.id, node);
                  else bandRefs.current.delete(bed.id);
                }}
                className={`${styles.band} ${TONE_CLASS[bed.tone]} ${
                  isActive ? styles.bandActive : ""
                }`}
                style={{ flexGrow: bed.bottom - bed.top }}
                aria-current={isActive ? "true" : undefined}
                onFocus={() => setFocusedId(bed.id)}
                onBlur={() => setFocusedId(null)}
                onMouseEnter={() => setFocusedId(bed.id)}
                onMouseLeave={() => setFocusedId(null)}
              >
                <span className={styles.srOnly}>
                  {`${bed.sample}, ${bed.top} to ${bed.bottom} centimetres, ${bed.year}. ${bed.name}: ${bed.lithology}.`}
                </span>
                </a>
              );
            })}
          </div>
          {/* The marker sits outside the clipped tube so its rule and
              arrowhead can overhang the core. */}
          <span
            className={styles.marker}
            aria-hidden="true"
            style={
              marker
                ? ({
                    "--marker-y": `${marker.y}px`,
                    "--marker-x": `${marker.x}px`,
                  } as CSSProperties)
                : { opacity: 0 }
            }
          />
        </div>

        <ol className={styles.labelTrack}>
          {BEDS.map((bed) => (
            <li
              key={bed.id}
              className={`${styles.labelRow} ${
                bed.id === activeId ? styles.labelRowActive : ""
              }`}
              style={{ flexGrow: bed.bottom - bed.top }}
            >
              <span className={styles.labelName}>{bed.name}</span>
              <span className={styles.labelSample}>{bed.sample}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Not a live region: it changes on every scroll, and each bed's depth,
          year and sample ID are already stated in the section heading block. */}
      <p className={styles.plate}>
        <span className={styles.plateTop}>
          <span className={styles.plateSample}>{shown.sample}</span>
          <span className={styles.plateDepth}>
            {shown.top}–{shown.bottom} cm
          </span>
          <span className={styles.plateYear}>{shown.year}</span>
        </span>
        <span className={styles.plateLitho}>{shown.lithology}</span>
      </p>

      <p className={styles.columnFoot} aria-hidden="true">
        base {CORE_BASE} cm
      </p>
    </div>
  );
}
