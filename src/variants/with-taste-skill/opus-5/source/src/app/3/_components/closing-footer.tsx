/*
  Closing line plus the locked primary CTA, then an airy footer.

  The footer carries `pb-28` so the fixed iteration switcher that floats at bottom
  centre never covers its content.

  Footer links point only at real anchors on this page. No version stamp, no locale
  strip, no invented pages.
*/

import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { AccentRule, Container, PillButton } from "./ui";
import { Reveal } from "./reveal";

export function ClosingFooter() {
  return (
    <>
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <AccentRule />
            <h2 className="mt-7 max-w-[20ch] font-outfit text-[2rem] leading-[1.1] tracking-tight text-[#1c211e] md:text-5xl">
              Start with one note.
            </h2>
            <div className="mt-9">
              <PillButton
                href={`https://${product.domain}`}
                tone="forest"
                size="lg"
              >
                {cta.primary}
              </PillButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="pb-28 pt-16 md:pt-20">
        <Container>
          <div className="flex flex-col gap-10 border-t border-[#1c211e]/10 pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-outfit text-lg tracking-tight text-[#1c211e]">
                {product.name}
              </p>
              <p className="mt-2 text-sm text-[#5a635e]">{product.domain}</p>
            </div>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#1c211e] underline-offset-[6px] decoration-2 decoration-[#c2761a] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-xs text-[#5a635e]">
            &copy; 2026 {product.name}
          </p>
        </Container>
      </footer>
    </>
  );
}
