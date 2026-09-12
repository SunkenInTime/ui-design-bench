import Link from "next/link";
import styles from "./iteration-switcher.module.css";

const iterations = [
  { slug: "one", short: "1", name: "Paper Atlas" },
  { slug: "two", short: "2", name: "Night Index" },
  { slug: "three", short: "3", name: "Signal Garden" },
  { slug: "four", short: "4", name: "Archive Grid" },
  { slug: "five", short: "5", name: "Spatial Calm" },
] as const;

type Iteration = (typeof iterations)[number]["slug"];

export function IterationSwitcher({
  active,
  shape = "soft",
}: {
  active: Iteration;
  shape?: "soft" | "round" | "sharp";
}) {
  return (
    <nav
      className={`${styles.switcher} ${styles[shape]}`}
      aria-label="Landing page iterations"
    >
      <span className={styles.label}>View</span>
      <ol className={styles.list}>
        {iterations.map((iteration) => {
          const isActive = iteration.slug === active;

          return (
            <li key={iteration.slug}>
              <Link
                href={`/${iteration.slug}`}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                aria-label={`Open ${iteration.name} iteration`}
                aria-current={isActive ? "page" : undefined}
              >
                {iteration.short}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
