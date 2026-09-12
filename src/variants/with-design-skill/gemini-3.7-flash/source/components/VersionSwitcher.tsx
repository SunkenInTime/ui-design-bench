"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./VersionSwitcher.module.css";

const versions = [
  { href: "/one", label: "1", name: "Palace" },
  { href: "/two", label: "2", name: "Slips" },
  { href: "/three", label: "3", name: "Atlas" },
  { href: "/four", label: "4", name: "Garden" },
  { href: "/five", label: "5", name: "Lab" },
] as const;

export function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <>
      <a className={styles.skip} href="#content">
        Skip to content
      </a>
      <nav className={styles.nav} aria-label="Design iterations">
        {versions.map((version) => (
          <Link
            key={version.href}
            href={version.href}
            className={styles.link}
            aria-current={pathname === version.href ? "page" : undefined}
            title={version.name}
          >
            <span className={styles.num}>{version.label}</span>
            <span className={styles.name}>{version.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
