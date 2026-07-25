/*
  Capabilities bento. Exactly six cells for the six capabilities, no empty tile.

  Rhythm on `lg` is 2+1 / 1+2 / 2+1, so no row is three equal cards and the two
  cells that carry real visual weight (one forest fill, one photograph) sit
  diagonally opposite each other:

      [ 1 capture ........ ][ 2 forest ]
      [ 3 recall ][ 4 photograph ...... ]
      [ 5 files .......... ][ 6 lock   ]

  Mobile fallback is declared here: `grid-cols-1` is the base, every span is
  prefixed `lg:`, so under 1024px the grid is a single column.

  Icons are Phosphor, imported from the `/ssr` entry so this stays a Server
  Component, mapped by an explicit record and locked to `weight="light"` (the
  same weight used for the check marks in pricing).

  This section carries the page's single eyebrow.
*/

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
import { Container, Eyebrow, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

const icons: Record<string, typeof LightningIcon> = {
  LightningIcon,
  GraphIcon,
  SunIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  LockIcon,
};

type Surface = "panel" | "forest" | "photograph";

const layout: { span: string; surface: Surface }[] = [
  { span: "lg:col-span-2", surface: "panel" },
  { span: "lg:col-span-1", surface: "forest" },
  { span: "lg:col-span-1", surface: "panel" },
  { span: "lg:col-span-2", surface: "photograph" },
  { span: "lg:col-span-2", surface: "panel" },
  { span: "lg:col-span-1", surface: "panel" },
];

export function CapabilitiesBento() {
  return (
    <section id="features" className="scroll-mt-28 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <SectionHeading className="mt-5 max-w-[22ch]">
            What Verso does while you write.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = icons[capability.icon];
            const { span, surface } = layout[index];

            const shell =
              "relative flex min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl p-7 lg:min-h-[15rem]";

            if (surface === "forest") {
              return (
                <Reveal
                  key={capability.title}
                  delay={index * 0.05}
                  className={span}
                >
                  <div className={`${shell} h-full bg-[#12352a]`}>
                    {Icon ? (
                      <Icon size={26} weight="light" className="text-[#e9eae7]" />
                    ) : null}
                    <div className="mt-10">
                      <h3 className="font-outfit text-lg tracking-tight text-[#e9eae7]">
                        {capability.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#e9eae7]/80">
                        {capability.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            }

            if (surface === "photograph") {
              return (
                <Reveal
                  key={capability.title}
                  delay={index * 0.05}
                  className={span}
                >
                  <div className={`${shell} h-full lg:min-h-[17rem]`}>
                    <Image
                      src={photo("verso-quiet-capability-ask", 1400, 1000)}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover saturate-[0.85]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,53,42,0.94)_0%,rgba(18,53,42,0.82)_55%,rgba(18,53,42,0.72)_100%)]"
                    />
                    {Icon ? (
                      <Icon
                        size={26}
                        weight="light"
                        className="relative text-[#e9eae7]"
                      />
                    ) : null}
                    <div className="relative mt-10 max-w-[34ch]">
                      <h3 className="font-outfit text-lg tracking-tight text-[#e9eae7]">
                        {capability.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#e9eae7]/85">
                        {capability.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={capability.title}
                delay={index * 0.05}
                className={span}
              >
                <div className={`${shell} h-full bg-[#f4f5f2]`}>
                  {Icon ? (
                    <Icon size={26} weight="light" className="text-[#12352a]" />
                  ) : null}
                  <div className="mt-10 max-w-[46ch]">
                    <h3 className="font-outfit text-lg tracking-tight text-[#1c211e]">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5a635e]">
                      {capability.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
