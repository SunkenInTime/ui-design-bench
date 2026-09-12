"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export type CatalogCard = {
  id: string;
  callNumber: string;
  accession: string;
  title: string;
  lines: string[];
  seeAlso: string[];
  /** Present on exactly one card in the drawer. */
  resurfaced?: {
    pulled: string;
    lastOpened: string;
  };
};

/**
 * Cards sit at slightly varied angles, the way they do when a drawer has been
 * riffled through for a decade. Rotating about the card centre keeps every
 * punched hole at the same height, so the brass rod behind the rail still
 * threads through all of them.
 */
const ROTATIONS = [-1.7, 1.2, -0.8, 1.9, -1.4, 0.9, -2.0, 1.5, -0.7, 1.3];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CardRail({ cards }: { cards: CatalogCard[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [focusIndex, setFocusIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const glide = useRef<number | null>(null);
  const drag = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  const stopGlide = useCallback(() => {
    if (glide.current !== null) {
      cancelAnimationFrame(glide.current);
      glide.current = null;
    }
  }, []);

  useEffect(() => stopGlide, [stopGlide]);

  const onPointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const rail = railRef.current;
    if (!rail) return;

    stopGlide();
    drag.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: rail.scrollLeft,
      lastX: event.clientX,
      lastTime: event.timeStamp,
      velocity: 0,
    };
    rail.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    const rail = railRef.current;
    const state = drag.current;
    if (!rail || !state.active || event.pointerId !== state.pointerId) return;

    rail.scrollLeft = state.startScroll - (event.clientX - state.startX);

    const elapsed = event.timeStamp - state.lastTime;
    if (elapsed > 0) {
      // px per ms, smoothed so a single jittery frame cannot throw the flick
      const instant = (event.clientX - state.lastX) / elapsed;
      state.velocity = state.velocity * 0.7 + instant * 0.3;
      state.lastX = event.clientX;
      state.lastTime = event.timeStamp;
    }
  };

  const endDrag = (event: React.PointerEvent<HTMLUListElement>) => {
    const rail = railRef.current;
    const state = drag.current;
    if (!rail || !state.active || event.pointerId !== state.pointerId) return;

    state.active = false;
    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
    setDragging(false);

    let velocity = state.velocity;
    if (prefersReducedMotion() || Math.abs(velocity) < 0.08) return;

    let last = performance.now();
    const step = (now: number) => {
      const frame = Math.min(now - last, 48);
      last = now;
      const el = railRef.current;
      if (!el) return;

      const before = el.scrollLeft;
      el.scrollLeft = before - velocity * frame;
      velocity *= Math.exp(-frame / 190);

      const stalled = Math.abs(el.scrollLeft - before) < 0.4;
      if (Math.abs(velocity) < 0.02 || stalled) {
        glide.current = null;
        return;
      }
      glide.current = requestAnimationFrame(step);
    };
    glide.current = requestAnimationFrame(step);
  };

  const focusCard = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(cards.length - 1, index));
      const card = cardRefs.current[clamped];
      const rail = railRef.current;
      if (!card || !rail) return;

      stopGlide();
      setFocusIndex(clamped);
      card.focus({ preventScroll: true });
      rail.scrollTo({
        left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    },
    [cards.length, stopGlide],
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusCard(focusIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusCard(focusIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusCard(0);
        break;
      case "End":
        event.preventDefault();
        focusCard(cards.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.railWrap}>
      <div className={styles.rod} aria-hidden="true" />

      <ul
        ref={railRef}
        className={`${styles.rail} ${dragging ? styles.railDragging : ""}`}
        aria-label="Cards in drawer 07"
        aria-describedby="drawer-help"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
      >
        {cards.map((card, index) => (
          <li
            key={card.id}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className={`${styles.card} ${card.resurfaced ? styles.cardPulled : ""}`}
            style={
              {
                "--rot": `${ROTATIONS[index % ROTATIONS.length]}deg`,
                "--stack": cards.length - index,
              } as React.CSSProperties
            }
            tabIndex={index === focusIndex ? 0 : -1}
            onFocus={() => setFocusIndex(index)}
          >
            <div className={`${styles.face} ${styles.punched}`}>
              <div className={styles.cardHead}>
                <span className={styles.callNumber}>{card.callNumber}</span>
                <span className={styles.accession}>{card.accession}</span>
              </div>

              <p className={styles.cardTitle}>{card.title}</p>

              <div className={styles.cardBody}>
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className={styles.seeAlso}>
                <span className={styles.seeAlsoLabel}>see also</span>
                <ul>
                  {card.seeAlso.map((ref) => (
                    <li key={ref}>{ref}</li>
                  ))}
                </ul>
              </div>

              {card.resurfaced ? (
                <div className={styles.stamp}>
                  <span className={styles.stampWord}>Resurfaced</span>
                  <span className={styles.stampDate}>
                    {card.resurfaced.pulled}
                  </span>
                </div>
              ) : null}
            </div>

            {card.resurfaced ? (
              <p className={styles.pulledNote}>
                last opened {card.resurfaced.lastOpened}
              </p>
            ) : null}

            <span className={styles.rim} aria-hidden="true" />
          </li>
        ))}
      </ul>

      <p id="drawer-help" className={styles.railHelp}>
        Drag the cards along the rod, or press the left and right arrow keys to
        walk the drawer.
      </p>
    </div>
  );
}
