import Image from "next/image";
import { cta, photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Button } from "./button";

/*
  6/6 split, single column under md. Four text elements at most: headline,
  subtext (with the capture hotkey as a real <kbd> inside it) and the CTA row.
  No eyebrow here, the page spends its single eyebrow on the capabilities list.
*/
export function Hero() {
  return (
    <section id="top" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 pt-14 pb-14 md:grid-cols-12 md:gap-12 md:px-8 md:pt-24 md:pb-20">
        <div className="md:col-span-6">
          <h1 className="text-[2.1rem] leading-[1.08] tracking-[-0.02em] text-[#e8e8e6] sm:text-5xl lg:text-[3.4rem]">
            A notebook that keeps its own index.
          </h1>

          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-[#8b8b87]">
            Hit{" "}
            <kbd className="rounded-md border border-white/[0.09] bg-[#121214] px-1.5 py-0.5 font-mono text-[12.5px] text-[#e8e8e6]">
              Ctrl + Space
            </kbd>
            , type the thought, and Verso links it to everything you have
            already written.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#pricing">{cta.primary}</Button>
            <Button href="#how" variant="secondary">
              {cta.secondary}
            </Button>
          </div>
        </div>

        <div className="md:col-span-6">
          <Image
            src={photo("verso-hero-desk", 1200, 900)}
            alt="Editorial photograph in black and white"
            width={1200}
            height={900}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full rounded-md border border-white/[0.09] brightness-[0.8] contrast-125 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
