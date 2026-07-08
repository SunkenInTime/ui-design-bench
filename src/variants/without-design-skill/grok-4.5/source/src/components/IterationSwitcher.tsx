"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ITERATIONS = [
  { href: "/one", num: "1", name: "Ink" },
  { href: "/two", num: "2", name: "Graph" },
  { href: "/three", num: "3", name: "Garden" },
  { href: "/four", num: "4", name: "Archive" },
  { href: "/five", num: "5", name: "Signal" },
] as const;

export function IterationSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current =
    ITERATIONS.find((item) => pathname === item.href) ?? ITERATIONS[0];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="iteration-switcher" ref={rootRef}>
      <button
        type="button"
        className="iteration-switcher__toggle"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="iteration-switcher__dot" aria-hidden />
        <span className="iteration-switcher__label">
          Design {current.num}{" "}
          <span className="iteration-switcher__name">{current.name}</span>
        </span>
        <span className="iteration-switcher__chevron" aria-hidden>
          {open ? "×" : "+"}
        </span>
      </button>

      <div
        className={`iteration-switcher__panel${open ? " is-open" : ""}`}
        role="menu"
        hidden={!open}
      >
        {ITERATIONS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className={`iteration-switcher__link${active ? " is-active" : ""}`}
              aria-current={active ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="iteration-switcher__num">{item.num}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
