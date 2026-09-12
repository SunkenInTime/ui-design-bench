import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { buttonSmall, primaryButton, shell } from "./primitives";

/*
  Layout family: full-bleed ink bar.
  One line at every width, 64px on mobile and 72px at desktop. Under md the three
  anchors drop out and the bar keeps the wordmark plus the signup button, which is
  the only thing a phone visitor needs from it.
*/
export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-[#0c0c0c] bg-[#0c0c0c]">
      <div className={`${shell} flex h-16 items-center justify-between gap-6 md:h-[72px]`}>
        <a
          href="#top"
          className="font-jet text-[15px] font-bold uppercase tracking-[0.3em] text-white transition-transform duration-100 active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]"
        >
          {product.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-jet text-[13px] text-white transition-transform duration-100 hover:text-[#ff4d00] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#pricing" className={`${primaryButton} ${buttonSmall}`}>
          {cta.primary}
        </a>
      </div>
    </header>
  );
}
