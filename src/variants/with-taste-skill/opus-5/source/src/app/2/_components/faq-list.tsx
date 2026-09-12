import { CaretDownIcon } from "@phosphor-icons/react/ssr";
import { faq } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Native details/summary, so keyboard support and the open state come for free.
  The caret rotates with CSS on [open] through Tailwind's group-open variant, no
  JavaScript and no client component.
*/
export function FaqList() {
  return (
    <section className="border-b border-white/[0.09] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="text-2xl tracking-[-0.01em] text-[#e8e8e6] md:text-[1.9rem]">
          Questions
        </h2>

        <div className="mt-9 max-w-[74ch] divide-y divide-white/[0.09] border-t border-white/[0.09]">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-mono text-[13px] text-[#e8e8e6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3ddc97] [&::-webkit-details-marker]:hidden">
                {item.q}
                <CaretDownIcon
                  size={14}
                  weight="regular"
                  className="shrink-0 text-[#8b8b87] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.7] text-[#8b8b87]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
