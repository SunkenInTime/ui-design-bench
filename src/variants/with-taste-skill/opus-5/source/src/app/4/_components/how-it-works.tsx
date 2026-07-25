import { steps } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { sectionHeading, shell } from "./primitives";

/*
  Layout family: stacked full-width bands.
  One band per step, separated by 3px rules. The middle band is inverted ink as
  deliberate colour blocking (one of the two inverted bands on the page); the type
  system does not change inside it. The verb holds the left 4 columns, the body the
  right 8. Under md each band is a single column, verb above body.
*/
export function HowItWorks() {
  return (
    <section id="how" className="pt-12 md:pt-16">
      <div className={shell}>
        <h2 className={sectionHeading}>How it works.</h2>
      </div>

      <div className="mt-8 border-t-[3px] border-[#0c0c0c] md:mt-10">
        {steps.map((step, index) => {
          const inverted = index === 1;

          return (
            <div
              key={step.title}
              className={`border-b-[3px] border-[#0c0c0c] ${
                inverted ? "bg-[#0c0c0c] text-white" : "bg-white text-[#0c0c0c]"
              }`}
            >
              <div
                className={`${shell} grid grid-cols-1 gap-5 py-10 md:grid-cols-12 md:items-baseline md:gap-10 md:py-14`}
              >
                <h3 className="font-archivo text-4xl font-black leading-[0.9] tracking-[-0.03em] md:col-span-4 md:text-6xl">
                  {step.title}
                </h3>
                <p
                  className={`max-w-[62ch] text-base leading-relaxed md:col-span-8 md:text-lg ${
                    inverted ? "text-white" : "text-[#4a4a4a]"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
