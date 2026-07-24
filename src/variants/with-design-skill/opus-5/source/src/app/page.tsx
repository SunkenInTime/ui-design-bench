import Link from "next/link";
import { directions } from "@/variants/with-design-skill/opus-5/source/src/directions";
import styles from "./page.module.css";

export default function Index() {
  return (
    <main className={styles.sheet}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Contact sheet</p>
        <h1 className={styles.title}>
          Tessera — a second brain. Five landing page directions, one product.
        </h1>
        <p className={styles.lede}>
          Same brief, same feature set, five different worlds to borrow from.
          Open one, then use the switcher in the corner (or the number keys) to
          compare them side by side.
        </p>
      </header>

      <ol className={styles.list}>
        {directions.map((d) => (
          <li key={d.slug}>
            <Link href={d.slug} className={styles.row}>
              <span className={styles.num}>{d.index}</span>
              <span className={styles.name}>{d.name}</span>
              <span className={styles.note}>{d.note}</span>
              <span className={styles.bars} aria-hidden>
                {d.swatches.map((c) => (
                  <span
                    key={c}
                    className={styles.bar}
                    style={{ background: c }}
                  />
                ))}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
