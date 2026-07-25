import Image from "next/image";
import {
  FolderOpenIcon,
  GraphIcon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@phosphor-icons/react/ssr";
import { capabilities, photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { photoTreatment, sectionHeading, shell } from "./primitives";

/*
  Layout family: six-cell hard grid.
  Exactly six cells for the six capabilities, 3px ink gridlines, three columns at md
  and a single column under it. Cell fills are fixed so the grid has real background
  variation rather than six white text boxes: two white, two orange, one ink, one
  photograph behind an ink scrim. Icons take their cell's text colour.

  This section carries the only eyebrow on the page.
*/
const icons: Record<string, typeof LightningIcon> = {
  LightningIcon,
  GraphIcon,
  SunIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  LockIcon,
};

type Fill = "white" | "orange" | "ink" | "photo";

const fills: Fill[] = ["orange", "white", "ink", "photo", "orange", "white"];

const cellSurface: Record<Fill, string> = {
  white: "bg-white text-[#0c0c0c]",
  orange: "bg-[#ff4d00] text-[#0c0c0c]",
  ink: "bg-[#0c0c0c] text-white",
  photo: "bg-[#0c0c0c] text-white",
};

const bodyTone: Record<Fill, string> = {
  white: "text-[#4a4a4a]",
  orange: "text-[#0c0c0c]",
  ink: "text-white",
  photo: "text-white",
};

export function CapabilityGrid() {
  return (
    <section id="features" className="py-12 md:py-16">
      <div className={shell}>
        <p className="font-jet text-[11px] font-bold uppercase tracking-[0.24em] text-[#4a4a4a]">
          Capabilities
        </p>
        <h2 className={`mt-3 ${sectionHeading}`}>Six things it does.</h2>

        <div className="mt-8 grid grid-cols-1 border-[3px] border-[#0c0c0c] md:mt-10 md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const fill = fills[index];
            const IconMark = icons[capability.icon];

            return (
              <div
                key={capability.title}
                className={`relative border-[#0c0c0c] p-6 md:p-7 ${cellSurface[fill]} border-t-[3px] [&:first-child]:border-t-0 md:border-t-0 md:border-l-[3px] md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(n+4)]:border-t-[3px]`}
              >
                {fill === "photo" ? (
                  <>
                    <Image
                      src={photo("verso-capability-cell", 900, 900)}
                      alt="Black and white photograph filling one cell of the grid."
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover ${photoTreatment}`}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[#0c0c0c]/72" />
                  </>
                ) : null}

                <div className="relative flex min-h-[190px] flex-col">
                  {IconMark ? <IconMark size={26} weight="bold" /> : null}
                  <h3 className="mt-5 font-archivo text-lg font-black leading-tight tracking-[-0.01em] md:text-xl">
                    {capability.title}
                  </h3>
                  <p className={`mt-3 text-[15px] leading-relaxed ${bodyTone[fill]}`}>
                    {capability.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
