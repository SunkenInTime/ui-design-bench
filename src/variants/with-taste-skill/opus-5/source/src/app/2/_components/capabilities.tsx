import { CapabilityRows } from "./capability-rows";

/*
  The page's ONE eyebrow sits here. Every other section runs on its heading
  alone.
*/
export function Capabilities() {
  return (
    <section
      id="features"
      className="scroll-mt-16 border-b border-white/[0.09] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8b8b87]">
          Capabilities
        </p>
        <h2 className="mt-4 text-2xl tracking-[-0.01em] text-[#e8e8e6] md:text-[1.9rem]">
          What you get
        </h2>

        <CapabilityRows />
      </div>
    </section>
  );
}
