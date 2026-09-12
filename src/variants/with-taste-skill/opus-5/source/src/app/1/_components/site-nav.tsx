import { nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { PrimaryCta, Shell } from "./ui";

/*
  Layout family: hairline masthead. One line, 68px of bar plus a 1px rule.
  The three links fold away under md so the bar never wraps; wordmark and the
  signup button stay put at every width.
*/
export function SiteNav() {
  return (
    <header className="border-b border-[#dcdcd8]">
      <Shell>
        <div className="flex h-[68px] items-center justify-between gap-6">
          <a
            href="#top"
            className="font-garamond text-[22px] leading-none tracking-[-0.01em] text-[#17171a]"
          >
            {product.name}
          </a>

          <div className="flex items-center gap-6 md:gap-8">
            <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-[#5c5c5e] transition-colors hover:text-[#27418f]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <PrimaryCta className="px-4 py-2.5 text-[14px]" />
          </div>
        </div>
      </Shell>
    </header>
  );
}
