import { CheckIcon } from "@phosphor-icons/react/ssr";

import { pricing } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { PrimaryCta, Shell } from "./ui";

/*
  Layout family: two-column comparison split by one vertical hairline. No cards,
  no panels, no shadows. Under md the columns stack and the hairline turns
  horizontal, so there is still exactly one rule between the two plans.
*/
export function PricingColumns() {
  return (
    <section id="pricing" className="border-t border-[#dcdcd8] py-24 md:py-32">
      <Shell>
        <h2 className="max-w-[30ch] font-garamond text-[2rem] leading-[1.12] text-[#17171a] md:text-[2.5rem]">
          Two plans. The second one adds your other devices.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:mt-16 md:grid-cols-2">
          {pricing.map((plan, index) => {
            const includes: readonly string[] = plan.includes;
            const isSecond = index === 1;

            return (
              <div
                key={plan.name}
                className={
                  isSecond
                    ? "mt-14 border-t border-[#dcdcd8] pt-14 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-12 lg:pl-16"
                    : "md:pr-12 lg:pr-16"
                }
              >
                <p className="text-[14px] font-medium text-[#17171a]">{plan.name}</p>

                <p className="mt-3 flex items-baseline gap-2">
                  <span className="font-garamond text-[3rem] leading-none text-[#17171a] md:text-[3.5rem]">
                    {plan.price}
                  </span>
                  {plan.cadence ? (
                    <span className="text-[14px] text-[#5c5c5e]">{plan.cadence}</span>
                  ) : null}
                </p>

                <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-[#5c5c5e]">
                  {plan.summary}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {includes.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2.5 text-[15px] leading-[1.5] text-[#17171a]"
                    >
                      <CheckIcon
                        size={16}
                        weight="light"
                        aria-hidden
                        className="mt-[3px] shrink-0 text-[#27418f]"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <PrimaryCta className="mt-9" />
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
