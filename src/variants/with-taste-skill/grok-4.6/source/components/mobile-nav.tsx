"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

type MobileNavProps = {
  links: { href: string; label: string }[];
  cta: string;
  ctaHref: string;
  buttonClass: string;
  panelClass: string;
  linkClass: string;
  ctaClass: string;
};

export function MobileNav({
  links,
  cta,
  ctaHref,
  buttonClass,
  panelClass,
  linkClass,
  ctaClass,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={buttonClass}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X size={20} weight="regular" />
        ) : (
          <List size={20} weight="regular" />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {open ? (
        <div
          id="mobile-nav-panel"
          className={panelClass}
          style={{ zIndex: z.overlay }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={ctaHref} className={ctaClass} onClick={() => setOpen(false)}>
            {cta}
          </a>
        </div>
      ) : null}
    </div>
  );
}
