"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const directions = [
  { href: "/one", label: "Quiet system", number: "01" },
  { href: "/two", label: "Editorial focus", number: "02" },
  { href: "/three", label: "Living index", number: "03" },
  { href: "/four", label: "Research desk", number: "04" },
  { href: "/five", label: "Open horizon", number: "05" },
];

type IterationSwitcherProps = {
  tone?: "light" | "dark";
};

export function IterationSwitcher({
  tone = "light",
}: IterationSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`iteration-switcher iteration-switcher--${tone}`}>
      <button
        aria-controls="iteration-menu"
        aria-expanded={isOpen}
        className="iteration-switcher__button"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? "Close directions" : "See directions"}
      </button>

      {isOpen ? (
        <nav
          aria-label="Landing page directions"
          className="iteration-switcher__menu"
          id="iteration-menu"
        >
          <p className="iteration-switcher__eyebrow">Five directions</p>
          {directions.map((direction) => {
            const isCurrent = pathname === direction.href;

            return (
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`iteration-switcher__link${
                  isCurrent ? " is-current" : ""
                }`}
                href={direction.href}
                key={direction.href}
                onClick={() => setIsOpen(false)}
              >
                <span>{direction.number}</span>
                <strong>{direction.label}</strong>
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
