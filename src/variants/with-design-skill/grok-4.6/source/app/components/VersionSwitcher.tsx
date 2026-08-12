"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ITERATIONS } from "../iterations";
import styles from "./VersionSwitcher.module.css";

export default function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Design iterations">
      <span className={styles.label}>Iterations</span>
      <ul className={styles.list}>
        {ITERATIONS.map((item) => {
          const current = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${current ? styles.current : ""}`}
                aria-current={current ? "page" : undefined}
                aria-label={`Iteration ${item.n}: ${item.name}`}
                title={item.name}
              >
                {item.n}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
