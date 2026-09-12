import { CheckIcon } from "@phosphor-icons/react/ssr";
import { cta, faq, pricing, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/* Fixed tuple, so each tier keeps its own type and the featured flag stays real. */
const [solo, sync] = pricing;

/*
  Radius rule for this route: pill for interactive, 12px for panels. Both tiers end
  in the signup CTA because every other primary CTA on the page points at #pricing,
  so this section is where the funnel lands and it has to be actionable. The label is
  the same on both tiers: you start on Solo either way, and Sync is the upgrade.
*/
const tierCta =
  "mt-9 inline-flex h-11 items-center justify-center self-start whitespace-nowrap rounded-full px-6 text-sm font-medium transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f43f5e]";

export function PricingPanels() {
  return (
    <section id="pricing" className="w-full pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[6vw]">
        <h2 className="font-grotesk max-w-[24ch] text-[1.9rem] leading-[1.02] font-medium tracking-[-0.02em] text-[#f4f4f3] md:text-[2.5rem] lg:text-[3rem]">
          One price, and only when you want it everywhere.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          <div className="rounded-xl border border-white/10 bg-[#141416] p-6 md:col-span-5 md:p-8">
            <h3 className="font-grotesk text-lg font-medium text-[#f4f4f3]">
              {solo.name}
            </h3>
            <p className="font-grotesk mt-5 text-[2.4rem] leading-none font-medium tracking-[-0.02em] text-[#f4f4f3]">
              {solo.price}
            </p>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-[#8e8e8c]">
              {solo.summary}
            </p>
            <ul className="mt-7 grid gap-3">
              {solo.includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm">
                  <CheckIcon
                    size={16}
                    className="mt-[0.2rem] shrink-0 text-[#f43f5e]"
                    aria-hidden
                  />
                  <span className="text-[#f4f4f3]">{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://${product.domain}`}
              className={`${tierCta} border border-white/20 text-[#f4f4f3] hover:border-white/40`}
            >
              {cta.primary}
            </a>
          </div>

          {/* Rose 1px border marks the featured tier. */}
          <div className="rounded-xl border border-[#f43f5e] bg-[#141416] p-6 md:col-span-7 md:p-8">
            <h3 className="font-grotesk text-lg font-medium text-[#f4f4f3]">
              {sync.name}
            </h3>
            <p className="mt-5 flex flex-wrap items-baseline gap-2">
              <span className="font-grotesk text-[2.4rem] leading-none font-medium tracking-[-0.02em] text-[#f4f4f3]">
                {sync.price}
              </span>
              <span className="text-sm text-[#8e8e8c]">{sync.cadence}</span>
            </p>
            <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-[#8e8e8c]">
              {sync.summary}
            </p>
            <ul className="mt-7 grid gap-3 md:grid-cols-2 md:gap-x-8">
              {sync.includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm">
                  <CheckIcon
                    size={16}
                    className="mt-[0.2rem] shrink-0 text-[#f43f5e]"
                    aria-hidden
                  />
                  <span className="text-[#f4f4f3]">{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://${product.domain}`}
              className={`${tierCta} bg-[#f43f5e] text-[#0a0a0b]`}
            >
              {cta.primary}
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-9 md:mt-20 md:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q}>
              <h3 className="font-grotesk text-[0.98rem] font-medium text-[#f4f4f3]">
                {item.q}
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-[#8e8e8c]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
