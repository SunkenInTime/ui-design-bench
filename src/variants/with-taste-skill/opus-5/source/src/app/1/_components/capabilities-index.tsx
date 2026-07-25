import type { Icon } from "@phosphor-icons/react";
import {
  FolderOpenIcon,
  GraphIcon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@phosphor-icons/react/ssr";

import { capabilities, type Capability } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Shell } from "./ui";

/*
  Layout family: book index, two columns of three entries with one vertical
  hairline between them and no rule under any row. This section carries the
  page's single eyebrow.

  Icon weight is "light" everywhere on the page, here and in the pricing list.
*/
const icons: Record<string, Icon> = {
  LightningIcon,
  GraphIcon,
  SunIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  LockIcon,
};

function Entry({ item }: { item: Capability }) {
  const Glyph = icons[item.icon];

  return (
    <div>
      {Glyph ? (
        <Glyph size={20} weight="light" aria-hidden className="text-[#27418f]" />
      ) : null}
      <h3 className="mt-3 font-garamond text-[1.5rem] leading-[1.15] text-[#17171a] md:text-[1.65rem]">
        {item.title}
      </h3>
      <p className="mt-2 max-w-[45ch] text-[15px] leading-[1.6] text-[#5c5c5e]">
        {item.body}
      </p>
    </div>
  );
}

export function CapabilitiesIndex() {
  const recto = capabilities.slice(0, 3);
  const verso = capabilities.slice(3);

  return (
    <section id="features" className="border-t border-[#dcdcd8] py-24 md:py-32">
      <Shell>
        {/* The one eyebrow on this page. */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#27418f]">
          Capabilities
        </p>

        <h2 className="mt-4 max-w-[28ch] font-garamond text-[2rem] leading-[1.12] text-[#17171a] md:text-[2.5rem]">
          What Verso does with a note.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          <div className="space-y-12">
            {recto.map((item) => (
              <Entry key={item.title} item={item} />
            ))}
          </div>
          <div className="space-y-12 md:border-l md:border-[#dcdcd8] md:pl-12 lg:pl-16">
            {verso.map((item) => (
              <Entry key={item.title} item={item} />
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
