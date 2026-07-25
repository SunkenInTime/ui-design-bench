import { photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Plate, Shell } from "./ui";

/*
  Layout family: full-bleed plate. One wide photograph running edge to edge at
  roughly 16:6, with a single functional caption line set below it and inside the
  page gutter. Nothing is laid over the photograph.
*/
export function PhotoPlate() {
  return (
    <section className="pb-24 md:pb-32">
      <Plate
        src={photo("verso-plate-open-desk", 1800, 675)}
        alt="Photograph opening the section on how Verso works"
        width={1800}
        height={675}
        sizes="100vw"
      />
      <Shell className="mt-3">
        <p className="text-[14px] leading-[1.6] text-[#5c5c5e]">
          Every note is a markdown file in a folder you choose.
        </p>
      </Shell>
    </section>
  );
}
