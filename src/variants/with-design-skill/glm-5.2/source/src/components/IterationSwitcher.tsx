"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./IterationSwitcher.module.css";

const ITERATIONS = [
  { slug: "one", name: "Slip Box" },
  { slug: "two", name: "The Graph" },
  { slug: "three", name: "Field Notebook" },
  { slug: "four", name: "Subconscious" },
  { slug: "five", name: "Workshop" },
];

export function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentSlug = (pathname ?? "").replace(/^\//, "");
  const currentIndex = ITERATIONS.findIndex((i) => i.slug === currentSlug);
  const isActive = currentIndex !== -1;

  const prev =
    ITERATIONS[(currentIndex - 1 + ITERATIONS.length) % ITERATIONS.length];
  const next = ITERATIONS[(currentIndex + 1) % ITERATIONS.length];

  useEffect(() => {
    if (!isActive) return;
    function onKey(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowLeft") router.push(`/${prev.slug}`);
    if (e.key === "ArrowRight") router.push(`/${next.slug}`);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isActive, prev.slug, next.slug, router]);

  if (!isActive) return null;

  return (
    <nav className={styles.switcher} aria-label="Design iterations">
      <Link
        className={styles.btn}
        href={`/${prev.slug}`}
        aria-label={`Previous iteration: ${prev.name}`}
      >
        &#8249;
      </Link>
      <div className={styles.center}>
        <span className={styles.count}>
          {String(currentIndex + 1).padStart(2, "0")}
          <span className={styles.countTotal} aria-hidden>
            {" "}
            / {String(ITERATIONS.length).padStart(2, "0")}
          </span>
        </span>
        <span className={styles.name}>{ITERATIONS[currentIndex].name}</span>
      </div>
      <Link
        className={styles.btn}
        href={`/${next.slug}`}
        aria-label={`Next iteration: ${next.name}`}
      >
        &#8250;
      </Link>
    </nav>
  );
}
