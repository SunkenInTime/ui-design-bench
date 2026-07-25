import Link from "next/link";
import { ITERATIONS } from "@/variants/with-design-skill/opus-5/source/src/lib/iterations";
import styles from "./page.module.css";

export default function Index() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Cairn · landing page</p>
        <h1 className={styles.title}>Five directions</h1>
        <p className={styles.intro}>
          The same product and the same claims, designed five ways. Pick a
          number below, or press 1–5 anywhere to jump between them.
        </p>

        <ul className={styles.list}>
          {ITERATIONS.map((it) => (
            <li key={it.slug}>
              <Link href={`/${it.slug}`} className={styles.row}>
                <span className={styles.num}>{it.slug.padStart(2, "0")}</span>
                <span>
                  <span className={styles.name}>{it.name}</span>
                  <span className={styles.premise}>{it.premise}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
