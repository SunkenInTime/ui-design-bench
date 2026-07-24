"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { directions } from "@/variants/with-design-skill/opus-5/source/src/directions";
import styles from "./DirectionSwitcher.module.css";

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  );
}

export function DirectionSwitcher() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = directions.findIndex((d) => d.slug === pathname);
  const active = current === -1 ? null : directions[current];

  const go = useCallback(
    (i: number) => {
      const next = directions[(i + directions.length) % directions.length];
      router.push(next.slug);
      setOpen(false);
    },
    [router],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTyping(event.target)) return;

      if (event.key === "Escape") return setOpen(false);

      const digit = Number(event.key);
      if (digit >= 1 && digit <= directions.length) return go(digit - 1);

      if (current === -1) return;
      if (event.key === "]") return go(current + 1);
      if (event.key === "[") return go(current - 1);
      if (open && event.key === "ArrowDown") return go(current + 1);
      if (open && event.key === "ArrowUp") return go(current - 1);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      {open && (
        <div className={styles.panel} role="group" aria-label="Design directions">
          <div className={styles.panelHead}>
            <span>Tessera — five directions</span>
          </div>
          {directions.map((d, i) => (
            <Link
              key={d.slug}
              href={d.slug}
              className={`${styles.item} ${d.slug === pathname ? styles.itemActive : ""}`}
              aria-current={d.slug === pathname ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className={styles.itemIndex}>{d.index}</span>
              <span className={styles.itemName}>
                {d.name}
                <span className={styles.itemNote}>{d.note}</span>
              </span>
              <span className={styles.itemSwatches} aria-hidden>
                {d.swatches.map((c) => (
                  <span
                    key={c + i}
                    className={styles.swatch}
                    style={{ background: c }}
                  />
                ))}
              </span>
            </Link>
          ))}
          <p className={styles.hint}>
            Press <span className={styles.key}>1</span>–
            <span className={styles.key}>5</span> to jump,{" "}
            <span className={styles.key}>[</span>{" "}
            <span className={styles.key}>]</span> to step through.
          </p>
        </div>
      )}

      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.triggerIndex}>{active ? active.index : "—"}</span>
        <span className={styles.triggerName}>
          {active ? active.name : "Pick a direction"}
        </span>
        <span className={styles.pips} aria-hidden>
          {directions.map((d, i) => (
            <span
              key={d.slug}
              className={`${styles.pip} ${i === current ? styles.pipOn : ""}`}
            />
          ))}
        </span>
      </button>
    </div>
  );
}
