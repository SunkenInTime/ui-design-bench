import { nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Shell } from "./ui";

/*
  Hairline top rule, three columns of links, one column under md. The bottom
  padding clears the fixed iteration switcher that floats at bottom centre.
*/
const columns = [
  { heading: "Product", links: nav.map((item) => ({ label: item.label, href: item.href })) },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Writing", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Security", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dcdcd8] pt-14 pb-28 md:pb-32">
      <Shell>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-[13px] font-medium text-[#17171a]">{column.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#5c5c5e] transition-colors hover:text-[#27418f]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-4 border-t border-[#dcdcd8] pt-6">
          <span className="font-garamond text-[20px] leading-none text-[#17171a]">
            {product.name}
          </span>
          <span className="text-[13px] text-[#5c5c5e]">{product.domain}</span>
        </div>
      </Shell>
    </footer>
  );
}
