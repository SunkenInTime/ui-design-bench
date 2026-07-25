import Image from "next/image";
import { integrations, logoUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Hairline strip. Logos only: no printed brand names, no category labels, no
  visible heading. The heading is screen reader only so the section is still
  announced as integrations rather than as customers.
*/
export function IntegrationsStrip() {
  return (
    <section className="border-y border-white/[0.09]">
      <h2 className="sr-only">Works with</h2>
      <ul className="mx-auto grid max-w-[1400px] grid-cols-3 items-center gap-y-9 px-5 py-9 md:grid-cols-6 md:px-8">
        {integrations.map((item) => (
          <li key={item.slug} className="flex justify-center">
            <Image
              unoptimized
              src={logoUrl(item.slug, "8b8b87")}
              alt={item.name}
              width={24}
              height={24}
              className="h-6 w-6 opacity-80 transition-opacity duration-200 hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
