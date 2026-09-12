import Image from "next/image";
import { photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Full width photograph, no text over it, same treatment as every other image on
  the route: grayscale, contrast up, brightness down, one hairline border.
*/
export function ImageBand() {
  return (
    <section className="border-b border-white/[0.09] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Image
          src={photo("verso-band-reading-room", 2000, 700)}
          alt="Wide editorial photograph in black and white"
          width={2000}
          height={700}
          sizes="100vw"
          className="h-[200px] w-full rounded-md border border-white/[0.09] object-cover brightness-[0.8] contrast-125 grayscale md:h-[340px]"
        />
      </div>
    </section>
  );
}
