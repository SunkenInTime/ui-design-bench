/*
  Testimonials. A forest panel carrying one featured quote in bone, then the other
  two quotes as plain ink text in a two column row on the bone page.

  Attribution is name then role, separated by a comma. No dashes anywhere.
  Quote marks are real typographic quotes. Each quote is held to roughly three
  lines by capping the measure rather than by trimming the quote text.

  Mobile: the panel padding steps down and the two column row becomes one column.
*/

import { testimonials } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Container } from "./ui";
import { Reveal } from "./reveal";

export function TestimonialsPanel() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <figure className="rounded-2xl bg-[#12352a] p-8 md:p-14 lg:p-16">
            <blockquote className="font-outfit text-[1.375rem] leading-[1.32] tracking-tight text-[#e9eae7] md:max-w-[46ch] md:text-[1.75rem] lg:text-[2rem]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-[#e9eae7]/70">
              {featured.name}, {featured.role}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
          {rest.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure>
                <blockquote className="max-w-[44ch] text-[1.0625rem] leading-relaxed text-[#1c211e]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-[#5a635e]">
                  {testimonial.name}, {testimonial.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
