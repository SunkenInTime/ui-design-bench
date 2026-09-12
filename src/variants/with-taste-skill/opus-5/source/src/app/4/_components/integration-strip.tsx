import Image from "next/image";
import { integrations, logoUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { sectionHeading, shell } from "./primitives";

/*
  Layout family: bordered cell strip.
  Six equal cells, ink gridlines at 3px, one logo per cell and nothing else in it.
  Three columns over two rows under md, six across at md and up. The row and column
  rules are driven by nth-child so the outer strip keeps exactly one border on each
  edge instead of doubling up.
*/
export function IntegrationStrip() {
  return (
    <section id="integrations" className="py-12 md:py-16">
      <div className={shell}>
        <h2 className={sectionHeading}>Works with what you already use.</h2>
      </div>

      <div className="mt-8 border-y-[3px] border-[#0c0c0c] md:mt-10">
        <div className={`${shell} grid grid-cols-3 md:grid-cols-6`}>
          {integrations.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-center border-l-[3px] border-[#0c0c0c] py-8 [&:nth-child(-n+3)]:border-b-[3px] [&:nth-child(3n+1)]:border-l-0 md:py-10 md:[&:nth-child(-n+3)]:border-b-0 md:[&:nth-child(3n+1)]:border-l-[3px] md:[&:first-child]:border-l-0"
            >
              <Image
                unoptimized
                src={logoUrl(item.slug, "0c0c0c")}
                alt={item.name}
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
