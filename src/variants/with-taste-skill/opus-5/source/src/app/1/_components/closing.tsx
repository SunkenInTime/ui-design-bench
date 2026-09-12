import { photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Plate, PrimaryCta, Shell } from "./ui";

/*
  Layout family: centred colophon. A contained plate, one closing line, one
  button. The italic sits on "index", which has no descenders, and the wrapper
  still reserves leading and bottom padding for it.
*/
export function Closing() {
  return (
    <section className="border-t border-[#dcdcd8] py-24 md:py-32">
      <Shell>
        <div className="mx-auto max-w-[560px]">
          <Plate
            src={photo("verso-closing-margin", 1200, 800)}
            alt="Photograph closing the page"
            width={1200}
            height={800}
            sizes="(min-width: 768px) 560px, 100vw"
          />
        </div>

        <h2 className="mx-auto mt-12 max-w-[26ch] pb-1 text-center font-garamond text-[2rem] leading-[1.15] text-[#17171a] md:text-[2.5rem]">
          Begin a page today. Verso keeps the <em className="italic">index</em>.
        </h2>

        <div className="mt-9 flex justify-center">
          <PrimaryCta />
        </div>
      </Shell>
    </section>
  );
}
