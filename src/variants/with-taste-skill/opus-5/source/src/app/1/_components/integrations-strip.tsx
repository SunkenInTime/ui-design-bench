import Image from "next/image";

import { integrations, logoUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Shell } from "./ui";

/*
  Layout family: hairline strip. One centred row of six marks held between two
  rules, three by two under md. Logos only: no names printed, no category labels.
  Each mark is drawn in ink so the accent stays reserved for links and the button.
*/
export function IntegrationsStrip() {
  return (
    <section className="pb-24 md:pb-28">
      <Shell>
        <p className="mx-auto max-w-[52ch] text-center text-[15px] leading-[1.6] text-[#5c5c5e]">
          Works with the tools you already read and write in.
        </p>

        <ul className="mt-8 grid grid-cols-3 items-center gap-y-10 border-t border-b border-[#dcdcd8] py-10 md:grid-cols-6 md:gap-y-0">
          {integrations.map((item) => (
            <li key={item.slug} className="flex items-center justify-center">
              <Image
                unoptimized
                src={logoUrl(item.slug, "#17171a")}
                alt={item.name}
                width={26}
                height={26}
                className="h-[26px] w-[26px] opacity-70 transition-opacity hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
