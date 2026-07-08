"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./IterationSwitcher.module.css";

const ITERATIONS = [
  { href: "/one", label: "01", name: "Stone Trail" },
  { href: "/two", label: "02", name: "Capture Line" },
  { href: "/three", label: "03", name: "Mycelium" },
  { href: "/four", label: "04", name: "Margins" },
  { href: "/five", label: "05", name: "Orbit" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const active =
    ITERATIONS.find((item) => pathname === item.href) ?? ITERATIONS[0];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      {open && (
        <nav
          id={menuId}
          className={styles.menu}
          aria-label="Design iterations"
        >
          <p className={styles.menuLabel}>Iterations</p>
          <ul className={styles.list}>
            {ITERATIONS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      isActive ? `${styles.item} ${styles.itemActive}` : styles.item
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className={styles.itemIndex}>{item.label}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Switch design iteration. Current: ${active.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.triggerIndex}>{active.label}</span>
        <span className={styles.triggerMeta}>
          <span className={styles.triggerTitle}>Designs</span>
          <span className={styles.triggerName}>{active.name}</span>
        </span>
        <span className={styles.chevron} aria-hidden="true">
          {open ? "▾" : "▴"}
        </span>
      </button>
    </div>
  );
}
