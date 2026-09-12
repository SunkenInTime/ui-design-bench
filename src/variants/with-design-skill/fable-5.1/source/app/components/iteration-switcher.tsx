"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./iteration-switcher.module.css";

export const ITERATIONS = [
  { n: 1, name: "Slip-box" },
  { n: 2, name: "Transit map" },
  { n: 3, name: "Printout" },
  { n: 4, name: "Blueprint" },
  { n: 5, name: "Gloss" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const current = Number(pathname.split("/")[1]) || 1;
  const prev = current === 1 ? ITERATIONS.length : current - 1;
  const next = current === ITERATIONS.length ? 1 : current + 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;
      if (/^[1-5]$/.test(e.key)) router.push(`/${e.key}`);
      else if (e.key === "ArrowRight" || e.key === "]") router.push(`/${next}`);
      else if (e.key === "ArrowLeft" || e.key === "[") router.push(`/${prev}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prev, next]);

  const label = ITERATIONS.find((i) => i.n === current)?.name ?? "";

  return (
    <nav className={styles.bar} aria-label="Design iterations">
      <Link
        href={`/${prev}`}
        className={styles.arrow}
        aria-label={`Previous iteration (${prev})`}
      >
        ‹
      </Link>
      <ol className={styles.list}>
        {ITERATIONS.map((it) => (
          <li key={it.n}>
            <Link
              href={`/${it.n}`}
              className={`${styles.num} ${it.n === current ? styles.active : ""}`}
              aria-current={it.n === current ? "page" : undefined}
              title={it.name}
            >
              {it.n}
            </Link>
          </li>
        ))}
      </ol>
      <Link
        href={`/${next}`}
        className={styles.arrow}
        aria-label={`Next iteration (${next})`}
      >
        ›
      </Link>
      <span className={styles.label} aria-hidden="true">
        {label}
      </span>
      <span className={styles.hint} aria-hidden="true">
        1–5 / ← →
      </span>
    </nav>
  );
}
