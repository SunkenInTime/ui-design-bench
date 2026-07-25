import { testimonials } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { sectionHeading, shell } from "./primitives";

/*
  Layout family: asymmetric bordered quote grid.
  The first quote spans both columns with a 3px ink border and a solid orange rule
  down its left edge; the other two sit beneath it in plain bordered cells. Not three
  equal cards. One column under md, in source order.

  Attribution is name on one line, role on the next, so no dash is needed anywhere.
*/
export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-12 md:py-16">
      <div className={shell}>
        <h2 className={sectionHeading}>People who use it.</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          {/* Sides are declared one at a time so the orange left rule never depends
              on utility ordering to beat the ink border. */}
          <figure className="border-t-[3px] border-t-[#0c0c0c] border-r-[3px] border-r-[#0c0c0c] border-b-[3px] border-b-[#0c0c0c] border-l-[12px] border-l-[#ff4d00] p-6 md:col-span-2 md:p-8">
            <blockquote className="max-w-[52ch] font-archivo text-xl font-bold leading-[1.2] tracking-[-0.01em] md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-jet text-[12px] leading-relaxed">
              <span className="block font-bold">{featured.name}</span>
              <span className="block text-[#4a4a4a]">{featured.role}</span>
            </figcaption>
          </figure>

          {rest.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border-[3px] border-[#0c0c0c] p-6 md:p-7"
            >
              <blockquote className="text-base leading-relaxed text-[#0c0c0c] md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-jet text-[12px] leading-relaxed">
                <span className="block font-bold">{testimonial.name}</span>
                <span className="block text-[#4a4a4a]">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
