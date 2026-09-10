"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const designs = [
  { n: "1", href: "/one", name: "Archive" },
  { n: "2", href: "/two", name: "Observatory" },
  { n: "3", href: "/three", name: "Slip-box" },
  { n: "4", href: "/four", name: "Buffer" },
  { n: "5", href: "/five", name: "Placard" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();
  const current =
    designs.find((d) => pathname.startsWith(d.href)) ?? designs[0];

  return (
    <nav className="design-switcher" aria-label="Switch design iteration">
      <span className="sw-name">{current.name}</span>
      {designs.map((d) => (
        <Link
          key={d.href}
          href={d.href}
          title={d.name}
          aria-label={`Design ${d.n}: ${d.name}`}
          aria-current={pathname.startsWith(d.href) ? "page" : undefined}
          className={pathname.startsWith(d.href) ? "sw-active" : undefined}
        >
          {d.n}
        </Link>
      ))}
    </nav>
  );
}
