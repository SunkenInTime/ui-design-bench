import { cta } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Button } from "./button";

/*
  Compact band: one line of copy and the primary CTA on the same row at desktop,
  stacked under md.
*/
export function ClosingCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-7 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-[34ch] text-xl leading-[1.35] tracking-[-0.01em] text-[#e8e8e6] md:text-2xl">
          Install it, write one note, and let Verso do the filing.
        </p>
        <Button href="#pricing">{cta.primary}</Button>
      </div>
    </section>
  );
}
