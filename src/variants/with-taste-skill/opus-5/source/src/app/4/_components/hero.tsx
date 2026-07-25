import Image from "next/image";
import { cta, photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import {
  buttonLarge,
  photoTreatment,
  primaryButton,
  secondaryButton,
  shell,
} from "./primitives";

/*
  Layout family: asymmetric 12-column split.
  Copy takes 8 columns, the bordered photograph takes 4 and is pulled up 48px at md
  so the composition sits off its baseline on purpose. Under md the grid is one
  column, the image follows the copy and the offset is dropped.

  Three text elements only: headline, subtext, CTA pair. No eyebrow, no strip.
*/
export function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-[#0c0c0c]">
      <div className={`${shell} pt-12 pb-14 md:pt-20 md:pb-16`}>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <h1 className="max-w-[24ch] font-archivo text-[2.5rem] font-black leading-[0.9] tracking-[-0.03em] text-balance sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem]">
              Write it down once. Verso does the filing.
            </h1>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-[#4a4a4a] md:mt-7 md:text-lg">
              Verso links every new note to the ones it belongs with, then brings
              them back when they matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <a href="#pricing" className={`${primaryButton} ${buttonLarge}`}>
                {cta.primary}
              </a>
              <a href="#how" className={`${secondaryButton} ${buttonLarge}`}>
                {cta.secondary}
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:-mt-12">
            <Image
              src={photo("verso-hero-block", 1000, 1200)}
              alt="Tall black and white photograph set beside the headline."
              width={1000}
              height={1200}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 32vw, 100vw"
              className={`h-auto w-full border-[3px] border-[#0c0c0c] ${photoTreatment}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
