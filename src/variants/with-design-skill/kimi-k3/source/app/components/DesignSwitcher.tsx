"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./switcher.css";

export const DESIGNS = [
  { id: "1", name: "The Archive" },
  { id: "2", name: "The Observatory" },
  { id: "3", name: "The Garden" },
  { id: "4", name: "The Instrument" },
  { id: "5", name: "The Blueprint" },
] as const;

export default function DesignSwitcher() {
  const pathname = usePathname();
  const current = DESIGNS.find((d) => pathname === `/${d.id}`) ?? DESIGNS[0];
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="switcher" ref={rootRef}>
      {open && (
        <nav className="switcher-menu" aria-label="Design iterations">
          <p className="switcher-menu-title">Five takes on Cortex</p>
          <ul>
            {DESIGNS.map((design) => (
              <li key={design.id}>
                <Link
                  href={`/${design.id}`}
                  className={`switcher-link${
                    design.id === current.id ? " is-active" : ""
                  }`}
                  aria-current={design.id === current.id ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="switcher-num" aria-hidden="true">
                    {design.id}
                  </span>
                  <span className="switcher-name">{design.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        type="button"
        className="switcher-button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Switch design iteration. Current: ${current.id} of 5, ${current.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="switcher-count">{current.id}/5</span>
        <span className="switcher-caret" aria-hidden="true">
          {open ? "–" : "+"}
        </span>
      </button>
    </div>
  );
}
