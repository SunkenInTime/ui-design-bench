"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildVariantHref } from "@/lib/gallery-paths";

const ITERATIONS = [
  { id: "1", label: "1", name: "Monastic" },
  { id: "2", label: "2", name: "Terminal" },
  { id: "3", label: "3", name: "Organic" },
  { id: "4", label: "4", name: "Luxury" },
  { id: "5", label: "5", name: "Maximal" },
];

export function DesignSwitcher() {
  const pathname = usePathname();
  const currentId = pathname?.split("/").at(-1) || "1";

  return (
    <nav
      className="design-switcher"
      role="navigation"
      aria-label="Switch between design iterations"
    >
      <span className="design-switcher__label">Design:</span>
      <div className="design-switcher__buttons">
        {ITERATIONS.map(({ id, label, name }) => (
          <Link
            key={id}
            href={buildVariantHref("with-design-skill", "composer-1.5", id as "1" | "2" | "3" | "4" | "5")}
            className={`design-switcher__btn ${currentId === id ? "design-switcher__btn--active" : ""}`}
            aria-current={currentId === id ? "page" : undefined}
            title={`Iteration ${id}: ${name}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

