import { CheckIcon } from "@phosphor-icons/react/ssr";
import { cta, pricing, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Button } from "./button";

/*
  Two columns, stacked under md. The Sync tier carries the accent: a 1px #3ddc97
  border and a mono accent label. Prices and tier names are mono, check marks are
  the accent.

  Each tier ends in the signup CTA. Every other primary CTA on the page points at
  #pricing, so this section is where the funnel lands and it has to be actionable.
  Both tiers use the same locked label: you start on Solo either way, and Sync is
  the upgrade, so there is still exactly one signup wording on the page.
*/
export function PricingTable() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-b border-white/[0.09] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="text-2xl tracking-[-0.01em] text-[#e8e8e6] md:text-[1.9rem]">
          Two plans
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pricing.map((tier) => {
            const featured = "featured" in tier && tier.featured;

            return (
              <div
                key={tier.name}
                className={`rounded-md border p-7 md:p-8 ${
                  featured
                    ? "border-[#3ddc97] bg-[#121214]"
                    : "border-white/[0.09]"
                }`}
              >
                <span className="block font-mono text-[11px] text-[#3ddc97]">
                  {featured ? "Recommended" : " "}
                </span>

                <h3 className="mt-4 font-mono text-[13px] text-[#e8e8e6]">
                  {tier.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-[2rem] leading-none text-[#e8e8e6]">
                    {tier.price}
                  </span>
                  {tier.cadence ? (
                    <span className="font-mono text-[12px] text-[#8b8b87]">
                      {tier.cadence}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 max-w-[42ch] text-[14px] leading-[1.65] text-[#8b8b87]">
                  {tier.summary}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/[0.09] pt-6">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-[#e8e8e6]">
                      <CheckIcon
                        size={15}
                        weight="regular"
                        className="mt-1 shrink-0 text-[#3ddc97]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`https://${product.domain}`}
                  variant={featured ? "primary" : "secondary"}
                  className="mt-7"
                >
                  {cta.primary}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
