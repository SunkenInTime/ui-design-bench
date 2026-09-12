/*
  How it works. A horizontal scroll snap gallery of the three steps.

  Accessibility: the track is a labelled, focusable scroll region
  (`tabIndex={0}`), which is the standard way to make an overflow container
  keyboard operable. Once focused, the arrow keys and Home / End pan it. Native
  overflow scrolling also gives a real swipe on touch, and the visible focus ring
  makes the interaction discoverable.

  The verb from `steps` is the heading. No "Step 1 / Step 2" labels: the verb is
  the label.

  Alt text is empty because picsum photography is arbitrary per seed, so the
  heading and body directly beneath each frame are the text equivalent.
*/

import Image from "next/image";
import { photo, steps } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

const seeds = [
  "verso-quiet-step-capture",
  "verso-quiet-step-connect",
  "verso-quiet-step-recall",
];

export function HowGallery() {
  return (
    <section id="how" className="scroll-mt-28 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <SectionHeading>How it works.</SectionHeading>
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        <div
          tabIndex={0}
          role="group"
          aria-label="The three steps in Verso"
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12352a] md:mt-16 md:gap-6 md:px-10"
        >
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="w-[80vw] shrink-0 snap-start sm:w-[24rem] lg:w-[30rem]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f4f5f2]">
                <Image
                  src={photo(seeds[index], 1200, 900)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 80vw, 30rem"
                  className="object-cover saturate-[0.85]"
                />
              </div>
              <h3 className="mt-6 font-outfit text-xl tracking-tight text-[#1c211e]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[#5a635e]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
