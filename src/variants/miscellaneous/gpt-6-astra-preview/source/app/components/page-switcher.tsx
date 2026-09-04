"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";

const designs = [
  { path: "/miscellaneous/gpt-6-astra-preview/1", label: "The personal library" },
  { path: "/miscellaneous/gpt-6-astra-preview/2", label: "The writing space" },
  { path: "/miscellaneous/gpt-6-astra-preview/3", label: "The idea collection" },
  { path: "/miscellaneous/gpt-6-astra-preview/4", label: "The daily notebook" },
  { path: "/miscellaneous/gpt-6-astra-preview/5", label: "The connected mind" },
];

export function PageSwitcher() {
  const pathname = usePathname();
  return <nav className="page-switcher" aria-label="Choose a landing page design"><span className="switcher-label"><Icon name="grid" size={14} /> Design</span><div className="switcher-options">{designs.map((design, index) => { const active = pathname === design.path || (index === 0 && pathname === "/"); return <Link key={design.path} href={design.path} aria-label={`Design ${index + 1}: ${design.label}`} title={design.label} aria-current={active ? "page" : undefined}>{index + 1}</Link>; })}</div></nav>;
}
