"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

/*
 * The signature: the headline is printed twice on the same spot — once in
 * fluorescent pink, once in medium blue — and the two plates are knocked out
 * of registration. Where the inks multiply, a third colour appears.
 *
 * The offset follows the pointer, so the misregistration breathes. Touch
 * devices drive it from scroll instead. Reduced motion and keyboard-only use
 * get a fixed, deliberately imperfect offset, plus a button to bring the two
 * plates into register and see the difference without moving anything.
 */

const HEADLINE = ["Two notes", "overprint", "into a third"];

/** Maximum knock-out of registration, in px, per axis. */
const MAX_OFFSET = 4.5;
/*
 * Where the plates sit before anyone touches anything. Each plate moves by
 * this much in opposite directions, so the separation on the sheet is double.
 * A real press is out by a hair, not by a letter-width.
 */
const REST_X = 3.2;
const REST_Y = 2;
/** CSS px per millimetre at 96dpi — the readout talks in press units. */
const PX_PER_MM = 3.7795;

function mm(px: number) {
  const value = px / PX_PER_MM;
  const sign = value < 0 ? "−" : "+";
  return `${sign}${Math.abs(value).toFixed(2)}`;
}

function readoutText(x: number, y: number) {
  return `x ${mm(x)} · y ${mm(y)} mm`;
}

const REST_READOUT = readoutText(REST_X, REST_Y);

export function OverprintHero() {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const readoutRef = useRef<HTMLSpanElement | null>(null);
  const [registered, setRegistered] = useState(false);
  const registeredRef = useRef(false);

  const paint = useCallback((x: number, y: number) => {
    const sheet = sheetRef.current;
    if (sheet) {
      sheet.style.setProperty("--reg-x", `${x.toFixed(2)}px`);
      sheet.style.setProperty("--reg-y", `${y.toFixed(2)}px`);
    }
    const readout = readoutRef.current;
    if (readout) readout.textContent = readoutText(x, y);
  }, []);

  /* The button snaps the plates into perfect register, or lets them off again. */
  useEffect(() => {
    registeredRef.current = registered;
    paint(registered ? 0 : REST_X, registered ? 0 : REST_Y);
  }, [registered, paint]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = REST_X;
    let y = REST_Y;
    let pointerDrove = false;

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!registeredRef.current) paint(x, y);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerDrove = true;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      x = ((event.clientX / w) * 2 - 1) * MAX_OFFSET;
      y = ((event.clientY / h) * 2 - 1) * MAX_OFFSET;
      schedule();
    };

    const onScroll = () => {
      if (pointerDrove) return;
      const runway = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const travelled = Math.min(1, Math.max(0, window.scrollY / runway));
      x = (travelled * 2 - 1) * MAX_OFFSET;
      y = (0.5 - travelled) * MAX_OFFSET * 1.4;
      schedule();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [paint]);

  return (
    <div
      ref={sheetRef}
      className={styles.heroInk}
      style={
        {
          "--reg-x": `${REST_X}px`,
          "--reg-y": `${REST_Y}px`,
        } as React.CSSProperties
      }
    >
      <div className={styles.overprint}>
        <h1 className={`${styles.plate} ${styles.platePink}`}>
          {HEADLINE.map((line) => (
            <span key={line} className={styles.plateLine}>
              {line}
            </span>
          ))}
        </h1>
        <p aria-hidden="true" className={`${styles.plate} ${styles.plateBlue}`}>
          {HEADLINE.map((line) => (
            <span key={line} className={styles.plateLine}>
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className={styles.regRow}>
        <p className={styles.regReadout}>
          <span className={styles.regTag}>Registration</span>
          <span
            ref={readoutRef}
            aria-hidden="true"
            className={styles.regValue}
          >
            {REST_READOUT}
          </span>
        </p>
        <button
          type="button"
          className={styles.regButton}
          onClick={() => setRegistered((was) => !was)}
        >
          {registered ? "Knock the plates out" : "Line the plates up"}
        </button>
      </div>
    </div>
  );
}
