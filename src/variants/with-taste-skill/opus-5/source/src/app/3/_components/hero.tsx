/*
  Hero. Full bleed photograph via `fill`, copy anchored to the lower left.

  Next 16: `priority` is deprecated, so the LCP image uses `loading="eager"` plus
  `fetchPriority="high"`. No `quality` prop (config pins qualities to [75]).

  Alt text is empty on purpose. picsum returns arbitrary photography per seed, so
  any subject description would be a claim we cannot keep. The headline beside it
  carries the meaning, which makes this a decorative image in the a11y sense.

  Contrast: the copy sits over two forest gradients, one from the left and one
  rising from the bottom, weighted so the lower left is about 90% forest before
  any type lands on it while the upper right still reads as photography. Both
  CTAs are opaque fills, so neither depends on the scrim.
*/

import Image from "next/image";
import { cta, photo, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Container, PillButton } from "./ui";
import { MountRise } from "./reveal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      <Image
        src={photo("verso-quiet-hero-ridge", 2400, 1400)}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover saturate-[0.85]"
      />

      {/*
        Two stacked forest scrims, weighted toward the lower left where the copy
        lands rather than spread evenly over the frame.

        Bone type over an arbitrary photograph needs roughly 0.89 combined alpha to
        hold WCAG AA in the worst case, which is a near-white region of the image.
        Applying that evenly would flatten the whole hero into a green wash and the
        photograph would stop being a photograph. So the horizontal pass leans left,
        the vertical pass does its work in the bottom 45% and reaches zero by 66%,
        and the two multiply to about 0.90 under the headline and 0.97 behind the
        CTAs while the upper right stays clear enough to actually read as an image.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,53,42,0.72)_0%,rgba(18,53,42,0.5)_30%,rgba(18,53,42,0.12)_68%,rgba(18,53,42,0)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,53,42,0.9)_0%,rgba(18,53,42,0.82)_26%,rgba(18,53,42,0.5)_44%,rgba(18,53,42,0)_66%)]"
      />

      <Container className="relative pb-20 pt-24 md:pb-28">
        <div className="max-w-[46rem] text-left">
          <MountRise delay={0.05}>
            <h1 className="font-outfit text-[2.5rem] font-medium leading-[1.06] tracking-tight text-[#e9eae7] sm:text-5xl lg:text-[4rem]">
              A notebook with a long memory.
            </h1>
          </MountRise>

          <MountRise delay={0.18}>
            <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-[#e9eae7]/85 md:text-lg">
              {product.name} links each new note to what you already wrote, then
              brings the right one back when it matters.
            </p>
          </MountRise>

          <MountRise delay={0.3}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <PillButton
                href={`https://${product.domain}`}
                tone="bone"
                size="lg"
              >
                {cta.primary}
              </PillButton>
              <PillButton
                href="#how"
                tone="forest"
                size="lg"
                className="border border-[#e9eae7]/45"
              >
                {cta.secondary}
              </PillButton>
            </div>
          </MountRise>
        </div>
      </Container>
    </section>
  );
}
