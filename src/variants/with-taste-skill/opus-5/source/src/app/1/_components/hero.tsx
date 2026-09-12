import { photo, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Plate, PrimaryCta, SecondaryCta, Shell } from "./ui";

/*
  Layout family: asymmetric editorial split on a 12 column grid, 7 columns of
  copy against 5 columns of portrait photography. Single column under md with the
  plate below the copy.

  Three text elements only: headline, subtext, buttons. No eyebrow here; the
  page's single eyebrow belongs to the capabilities section.
*/
export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Shell>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="md:col-span-7">
            <h1 className="font-garamond text-[2.25rem] leading-[1.08] tracking-[-0.01em] text-[#17171a] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
              A commonplace book that keeps its own index.
            </h1>

            <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.6] text-[#5c5c5e] md:text-[18px]">
              {product.what}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryCta />
              <SecondaryCta />
            </div>
          </div>

          <div className="md:col-span-5">
            <Plate
              src={photo("verso-hero-portrait", 900, 1200)}
              alt="Photograph accompanying the introduction to Verso"
              width={900}
              height={1200}
              sizes="(min-width: 768px) 40vw, 100vw"
              eager
            />
          </div>
        </div>
      </Shell>
    </section>
  );
}
