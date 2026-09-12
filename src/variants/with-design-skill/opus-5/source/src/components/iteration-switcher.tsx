"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ITERATIONS } from "@/variants/with-design-skill/opus-5/source/src/lib/iterations";
import styles from "./iteration-switcher.module.css";

/**
 * A review tool, not part of any iteration's design. It stays deliberately
 * neutral so it reads as chrome sitting above the work rather than as
 * something belonging to whichever page is underneath it.
 */
export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const active = ITERATIONS.find((it) => pathname === `/${it.slug}`);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "")
      ) {
        return;
      }

      const match = ITERATIONS.find((it) => it.slug === event.key);
      if (match) {
        event.preventDefault();
        router.push(`/${match.slug}`);
      } else if (event.key === "0") {
        event.preventDefault();
        router.push("/");
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <nav className={styles.bar} aria-label="Design iterations">
      <Link
        href="/"
        className={styles.index}
        aria-current={pathname === "/" ? "page" : undefined}
        title="All iterations (0)"
      >
        <span className={styles.indexGlyph} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className={styles.srOnly}>All iterations</span>
      </Link>

      <span className={styles.divider} aria-hidden="true" />

      <ul className={styles.list}>
        {ITERATIONS.map((it) => (
          <li key={it.slug}>
            <Link
              href={`/${it.slug}`}
              className={styles.dot}
              aria-current={active?.slug === it.slug ? "page" : undefined}
              title={`${it.name} (${it.slug})`}
            >
              <span aria-hidden="true">{it.slug}</span>
              <span className={styles.srOnly}>{it.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <span className={styles.label}>
        {active ? active.name : "Index"}
        <span className={styles.hint}>press 1–5</span>
      </span>
    </nav>
  );
}
