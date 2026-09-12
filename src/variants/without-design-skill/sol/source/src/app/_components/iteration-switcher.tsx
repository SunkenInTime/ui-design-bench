import Link from "next/link";
import styles from "./iteration-switcher.module.css";

type IterationSwitcherProps = {
  current: 1 | 2 | 3 | 4 | 5;
  tone?: "light" | "dark";
};

const iterations = [1, 2, 3, 4, 5] as const;

export function IterationSwitcher({
  current,
  tone = "light",
}: IterationSwitcherProps) {
  return (
    <nav
      className={`${styles.switcher} ${styles[tone]}`}
      aria-label="Landing page iterations"
    >
      <span className={styles.label}>Concept</span>
      <div className={styles.links}>
        {iterations.map((iteration) => (
          <Link
            key={iteration}
            href={`/${iteration}`}
            className={`${styles.link} ${
              current === iteration ? styles.active : ""
            }`}
            aria-label={`View landing page concept ${iteration}`}
            aria-current={current === iteration ? "page" : undefined}
          >
            {String(iteration).padStart(2, "0")}
          </Link>
        ))}
      </div>
    </nav>
  );
}
