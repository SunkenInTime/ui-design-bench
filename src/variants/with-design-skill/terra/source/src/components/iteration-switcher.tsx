import Link from "next/link";
import styles from "./iteration-switcher.module.css";

export type Iteration = "one" | "two" | "three" | "four" | "five";

const directions: Array<{ id: Iteration; number: string; name: string }> = [
  { id: "one", number: "01", name: "Atlas" },
  { id: "two", number: "02", name: "Garden" },
  { id: "three", number: "03", name: "Index" },
  { id: "four", number: "04", name: "Signal" },
  { id: "five", number: "05", name: "Studio" },
];

export function IterationSwitcher({ current }: { current: Iteration }) {
  const active = directions.find((direction) => direction.id === current)!;

  return (
    <details className={styles.switcher}>
      <summary className={styles.trigger} aria-label="Open landing page directions">
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.triggerLabel}>Directions</span>
        <span className={styles.current}>{active.number}</span>
      </summary>
      <nav className={styles.panel} aria-label="Landing page directions">
        <div className={styles.panelTitle}>
          <span>Five ways in</span>
          <span>{active.name}</span>
        </div>
        {directions.map((direction) => {
          const isCurrent = direction.id === current;
          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={`${styles.option} ${isCurrent ? styles.active : ""}`}
              href={`/${direction.id}`}
              key={direction.id}
            >
              <span>{direction.number}</span>
              <span>{direction.name}</span>
              <span aria-hidden="true">{isCurrent ? "●" : "→"}</span>
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
