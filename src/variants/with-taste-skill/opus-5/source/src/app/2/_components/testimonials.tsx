import Image from "next/image";
import { photo, testimonials } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Asymmetric 7/5, not three equal cards. Wider column: one featured quote in a
  raised #121214 panel with an emerald left rule. Narrower column: the other two
  as plain quotes, then a supporting photograph on the standard treatment so the
  short column carries its own weight. Single column under md.
*/
export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="border-b border-white/[0.09] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="text-2xl tracking-[-0.01em] text-[#e8e8e6] md:text-[1.9rem]">
          What people say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <figure className="rounded-md border-l-2 border-l-[#3ddc97] bg-[#121214] p-7 md:col-span-7 md:p-9">
            <blockquote className="text-[17px] leading-[1.6] text-[#e8e8e6] md:text-xl md:leading-[1.5]">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 font-mono text-[12px] text-[#8b8b87]">
              {featured.name}, {featured.role}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-7 md:col-span-5">
            {rest.map((item, index) => (
              <figure
                key={item.name}
                className={
                  index === 0
                    ? ""
                    : "border-t border-white/[0.09] pt-7"
                }
              >
                <blockquote className="text-[15px] leading-[1.65] text-[#e8e8e6]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-[12px] text-[#8b8b87]">
                  {item.name}, {item.role}
                </figcaption>
              </figure>
            ))}

            <Image
              src={photo("verso-quotes-workbench", 800, 600)}
              alt="Editorial photograph in black and white"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="mt-1 h-auto w-full rounded-md border border-white/[0.09] brightness-[0.8] contrast-125 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
