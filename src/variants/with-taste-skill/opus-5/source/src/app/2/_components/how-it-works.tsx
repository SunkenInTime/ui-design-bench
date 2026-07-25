import { StepColumns } from "./step-columns";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-16 border-b border-white/[0.09] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="text-2xl tracking-[-0.01em] text-[#e8e8e6] md:text-[1.9rem]">
          How it works
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-[#8b8b87]">
          The whole loop runs from the keyboard, and none of it asks you to file
          anything.
        </p>

        <StepColumns />
      </div>
    </section>
  );
}
