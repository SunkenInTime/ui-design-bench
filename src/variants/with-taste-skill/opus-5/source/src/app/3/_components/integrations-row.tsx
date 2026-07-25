/*
  Airy logo row. Six forest coloured Simple Icons marks on the bone page.

  Framed as integrations, never as customers. Logos only: the brand name lives in
  alt text for screen readers and is never printed, and there is no category label
  under any mark.

  Simple Icons serves a square single colour SVG, so each mark renders
  `unoptimized` at a fixed 28px box. No query string is appended (the remote
  pattern pins `search: ""`).

  Mobile: three columns over two rows, six across from `md`.
*/

import Image from "next/image";
import { integrations, logoUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

export function IntegrationsRow() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[24ch] text-[1.5rem] md:text-3xl lg:text-[2rem]">
            Works with what you already have open.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-14 grid grid-cols-3 place-items-center gap-y-14 md:mt-20 md:grid-cols-6 md:gap-y-0">
            {integrations.map((brand) => (
              <li key={brand.slug}>
                <Image
                  src={logoUrl(brand.slug, "12352a")}
                  alt={brand.name}
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7 opacity-75 saturate-[0.85]"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
