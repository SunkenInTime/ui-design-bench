import { CaretDownIcon } from "@phosphor-icons/react/ssr";
import { faq } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { sectionHeading, shell } from "./primitives";

/*
  Layout family: disclosure list.
  Native details and summary, so this stays a Server Component with no JavaScript.
  3px outer border, 3px dividers between items, question in Archivo and answer in
  Geist. The chevron rotates through an ancestor-state selector on [open], which is
  a transform, the only property this direction animates.
*/
export function FaqList() {
  return (
    <section id="faq" className="pb-12 md:pb-16">
      <div className={shell}>
        <h2 className={sectionHeading}>Questions.</h2>

        <div className="mt-8 border-[3px] border-[#0c0c0c] md:mt-10">
          {faq.map((item, index) => (
            <details
              key={item.q}
              name="verso-faq"
              className={`group ${
                index > 0 ? "border-t-[3px] border-[#0c0c0c]" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 transition-transform duration-100 active:translate-y-[1px] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#ff4d00] md:p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-archivo text-lg font-black leading-tight tracking-[-0.01em] md:text-xl">
                  {item.q}
                </h3>
                <CaretDownIcon
                  size={20}
                  weight="bold"
                  className="shrink-0 transition-transform duration-150 ease-out [[open]_&]:rotate-180"
                />
              </summary>
              <p className="max-w-[70ch] px-5 pb-5 text-[15px] leading-relaxed text-[#4a4a4a] md:px-6 md:pb-6 md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
