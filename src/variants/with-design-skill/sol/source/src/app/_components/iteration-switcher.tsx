import Link from "next/link";
import styles from "./iteration-switcher.module.css";

const iterations = [
  { href: "/one", name: "Cartographer" },
  { href: "/two", name: "Capture ledger" },
  { href: "/three", name: "Observatory" },
  { href: "/four", name: "Studio wall" },
  { href: "/five", name: "Recall instrument" },
];

type IterationSwitcherProps = {
  current: number;
};

export function IterationSwitcher({ current }: IterationSwitcherProps) {
  const previous = current === 1 ? iterations.length : current - 1;
  const next = current === iterations.length ? 1 : current + 1;

  return (
    <nav className={styles.switcher} aria-label="Landing page iterations">
      <Link
        className={styles.arrow}
        href={iterations[previous - 1].href}
        aria-label={`Previous concept: ${iterations[previous - 1].name}`}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="m12.5 4.75-5.25 5.25 5.25 5.25" />
        </svg>
      </Link>
      <span className={styles.label}>Concept</span>
      <div className={styles.steps}>
        {iterations.map((iteration, index) => {
          const iterationNumber = index + 1;
          const isCurrent = iterationNumber === current;

          return (
            <Link
              key={iteration.href}
              className={`${styles.step} ${isCurrent ? styles.active : ""}`}
              href={iteration.href}
              aria-current={isCurrent ? "page" : undefined}
              aria-label={`${iteration.name}, concept ${iterationNumber}`}
            >
              {iterationNumber}
            </Link>
          );
        })}
      </div>
      <Link
        className={styles.arrow}
        href={iterations[next - 1].href}
        aria-label={`Next concept: ${iterations[next - 1].name}`}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="m7.5 4.75 5.25 5.25-5.25 5.25" />
        </svg>
      </Link>
    </nav>
  );
}
