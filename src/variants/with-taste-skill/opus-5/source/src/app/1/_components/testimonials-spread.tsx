import { testimonials } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

import { Shell } from "./ui";

/*
  Layout family: pull-quote spread. One large Garamond quote centred at the top of
  the spread, the remaining two set smaller in Geist side by side beneath it, and
  stacked under md. Typographic quote marks, attribution on two lines so no dash
  is ever needed between the name and the role.
*/
export function TestimonialsSpread() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="border-t border-[#dcdcd8] py-24 md:py-32">
      <Shell>
        <figure className="mx-auto max-w-[54ch] text-center">
          <blockquote className="font-garamond text-[1.6rem] leading-[1.3] text-[#17171a] md:text-[2.15rem]">
            {`“${lead.quote}”`}
          </blockquote>
          <figcaption className="mt-7 text-[14px] leading-[1.6] text-[#17171a]">
            {lead.name}
            <span className="block text-[#5c5c5e]">{lead.role}</span>
          </figcaption>
        </figure>

        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-2 md:gap-14">
          {rest.map((item) => (
            <figure key={item.name}>
              <blockquote className="max-w-[52ch] text-[16px] leading-[1.6] text-[#17171a]">
                {`“${item.quote}”`}
              </blockquote>
              <figcaption className="mt-4 text-[14px] leading-[1.6] text-[#17171a]">
                {item.name}
                <span className="block text-[#5c5c5e]">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Shell>
    </section>
  );
}
