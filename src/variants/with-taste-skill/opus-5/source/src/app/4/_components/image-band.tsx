import Image from "next/image";
import { photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { photoTreatment } from "./primitives";

/*
  Layout family: full-bleed bordered band.
  One wide photograph, the standard grayscale treatment, 3px rules top and bottom,
  no text over it and no caption under it. Fixed aspect via width and height so the
  band reserves its space and does not shift the page on load.
*/
export function ImageBand() {
  return (
    <section className="border-b-[3px] border-[#0c0c0c] bg-white">
      <Image
        src={photo("verso-band-wide", 2400, 800)}
        alt="Wide black and white photograph running the full width of the page."
        width={2400}
        height={800}
        sizes="100vw"
        className={`h-[220px] w-full object-cover md:h-[380px] ${photoTreatment}`}
      />
    </section>
  );
}
