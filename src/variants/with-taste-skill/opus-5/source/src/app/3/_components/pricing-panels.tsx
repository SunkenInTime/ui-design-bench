/*
  Pricing. Two soft 16px panels: Sync on forest with bone text and a bone pill
  CTA, Solo on the soft `#f4f5f2` panel with a forest pill CTA. Both buttons carry
  the locked signup label, so there is one phrasing for one intent.

  The four included items per tier use a light weight check mark, the same Phosphor
  weight as the capability icons. Four rows is under the long list threshold, and
  there are no row dividers at all, which suits the density of this direction.

  The questions block below reuses the shared `faq` facts verbatim as an airy
  vertical prose stack: no dividers, no accordion, one measure. It is a different
  layout family from every other block on the page.

  Mobile: `grid-cols-1` base, two panels only from `md`.
*/

import { CheckIcon } from "@phosphor-icons/react/ssr";
import { cta, faq, pricing, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { AccentRule, Container, PillButton, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

export function PricingPanels() {
  const solo = pricing.find((tier) => tier.name === "Solo")!;
  const sync = pricing.find((tier) => tier.name === "Sync")!;

  return (
    <section id="pricing" className="scroll-mt-28 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <SectionHeading>What it costs.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl bg-[#12352a] p-8 md:p-10">
              <h3 className="font-outfit text-lg tracking-tight text-[#e9eae7]">
                {sync.name}
              </h3>
              <AccentRule className="mt-4" />
              <p className="mt-6 font-outfit text-4xl tracking-tight text-[#e9eae7]">
                {sync.price}
                <span className="ml-2 align-middle text-sm tracking-normal text-[#e9eae7]/70">
                  {sync.cadence}
                </span>
              </p>
              <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-[#e9eae7]/80">
                {sync.summary}
              </p>
              <ul className="mt-8 grid gap-3">
                {sync.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon
                      size={17}
                      weight="light"
                      className="mt-[3px] shrink-0 text-[#e9eae7]/70"
                    />
                    <span className="text-sm text-[#e9eae7]/90">{item}</span>
                  </li>
                ))}
              </ul>
              <PillButton
                href={`https://${product.domain}`}
                tone="bone"
                className="mt-10 self-start"
              >
                {cta.primary}
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="flex h-full flex-col rounded-2xl bg-[#f4f5f2] p-8 md:p-10">
              <h3 className="font-outfit text-lg tracking-tight text-[#1c211e]">
                {solo.name}
              </h3>
              <AccentRule className="mt-4" />
              <p className="mt-6 font-outfit text-4xl tracking-tight text-[#1c211e]">
                {solo.price}
              </p>
              <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-[#5a635e]">
                {solo.summary}
              </p>
              <ul className="mt-8 grid gap-3">
                {solo.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon
                      size={17}
                      weight="light"
                      className="mt-[3px] shrink-0 text-[#5a635e]"
                    />
                    <span className="text-sm text-[#1c211e]">{item}</span>
                  </li>
                ))}
              </ul>
              <PillButton
                href={`https://${product.domain}`}
                tone="forest"
                className="mt-10 self-start"
              >
                {cta.primary}
              </PillButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 max-w-[62ch] md:mt-24">
            <h3 className="font-outfit text-xl tracking-tight text-[#1c211e]">
              Questions.
            </h3>
            <dl className="mt-10 grid gap-9">
              {faq.map((entry) => (
                <div key={entry.q}>
                  <dt className="font-outfit text-[1.0625rem] tracking-tight text-[#1c211e]">
                    {entry.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#5a635e]">
                    {entry.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
