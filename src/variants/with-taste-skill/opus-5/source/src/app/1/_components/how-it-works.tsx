import { steps } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Shell } from "./ui";

/*
  Layout family: vertical stack. A single centred run, one hairline above the
  group and none between the entries. The verb is the label, so there is no
  "Step 1" anywhere. Naturally one column at every width.
*/
export function HowItWorks() {
  return (
    <section id="how" className="border-t border-[#dcdcd8] py-24 md:py-32">
      <Shell>
        <h2 className="text-center font-garamond text-[1.75rem] leading-[1.15] text-[#17171a] md:text-[2rem]">
          How it works.
        </h2>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <h3 className="font-garamond text-[2.5rem] leading-[1.1] tracking-[-0.01em] text-[#17171a] md:text-[3.25rem]">
                {step.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[65ch] text-[16px] leading-[1.65] text-[#5c5c5e] md:text-[17px]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  );
}
