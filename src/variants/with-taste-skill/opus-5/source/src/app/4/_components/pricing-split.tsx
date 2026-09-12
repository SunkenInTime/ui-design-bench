import { PlusIcon } from "@phosphor-icons/react/ssr";
import { cta, pricing, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import {
  buttonLarge,
  primaryButton,
  sectionHeading,
  shell,
} from "./primitives";

/*
  Layout family: two-column rule split.
  No boxes anywhere: the two tiers are separated by a single 3px vertical rule at md
  and by one horizontal rule under md. Prices are Archivo 900 at display size, and the
  Sync price sits on a solid orange block with black text. Feature markers are a
  Phosphor plus, not a decorative dot. Four lines per tier, so no long list problem.

  Each tier ends in the signup CTA. Every other primary CTA on the page points at
  #pricing, so this is where the funnel lands and it has to be actionable. Both tiers
  carry the same locked label: you start on Solo either way, Sync is the upgrade.
*/
export function PricingSplit() {
  return (
    <section id="pricing" className="border-t-[3px] border-[#0c0c0c] py-12 md:py-16">
      <div className={shell}>
        <h2 className={sectionHeading}>Two plans.</h2>

        <div className="mt-8 grid grid-cols-1 md:mt-12 md:grid-cols-2">
          {pricing.map((tier, index) => {
            // Only the Sync tier declares `featured`, so read it off the union safely.
            const isFeatured = "featured" in tier && tier.featured === true;

            return (
              <div
                key={tier.name}
                className={`border-[#0c0c0c] ${
                  index === 1
                    ? "mt-10 border-t-[3px] pt-10 md:mt-0 md:border-t-0 md:border-l-[3px] md:pt-0 md:pl-10 lg:pl-14"
                    : "md:pr-10 lg:pr-14"
                }`}
              >
                <h3 className="font-archivo text-2xl font-black tracking-[-0.01em]">
                  {tier.name}
                </h3>

                <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span
                    className={`font-archivo text-6xl font-black leading-none tracking-[-0.04em] md:text-7xl ${
                      isFeatured
                        ? "inline-block bg-[#ff4d00] px-3 py-1 text-[#0c0c0c]"
                        : ""
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.cadence ? (
                    <span className="font-jet text-[12px] text-[#4a4a4a]">
                      {tier.cadence}
                    </span>
                  ) : null}
                </p>

                <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-[#4a4a4a]">
                  {tier.summary}
                </p>

                <ul className="mt-7 grid gap-3">
                  {tier.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <PlusIcon
                        size={16}
                        weight="bold"
                        className="mt-[3px] shrink-0 text-[#ff4d00]"
                      />
                      <span className="text-[15px] leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://${product.domain}`}
                  className={`${primaryButton} ${buttonLarge} mt-8`}
                >
                  {cta.primary}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
