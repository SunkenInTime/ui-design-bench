"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/ssr";
import { z } from "../lib/z";

export type NavLink = { href: string; label: string };

export function SiteNav({
  brand,
  links,
  cta,
  barClassName,
  linkClassName,
  ctaClassName,
  iconClassName,
  overlayClassName,
}: {
  brand: React.ReactNode;
  links: NavLink[];
  cta: { href: string; label: string };
  barClassName: string;
  linkClassName: string;
  ctaClassName: string;
  iconClassName: string;
  overlayClassName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 ${barClassName}`}
      style={{ zIndex: z.nav }}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 md:px-8">
        <Link href="#top" className="flex min-w-0 items-center gap-2">
          {brand}
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </a>
          ))}
          <a href={cta.href} className={ctaClassName}>
            {cta.label}
          </a>
        </nav>
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${iconClassName}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={20} weight="regular" />
          ) : (
            <List size={20} weight="regular" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className={`lg:hidden ${overlayClassName}`}>
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-4 md:px-8" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${linkClassName} py-3`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              className={`${ctaClassName} mt-2 self-start`}
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
