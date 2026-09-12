import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Synapse — Ink",
  description: "A second brain for thoughts that refuse to stay linear.",
};

export default function OnePage() {
  return (
    <main className="lp-one">
      <section className="lp-one__hero">
        <div className="lp-one__media anim-ken">
          <Image
            src="/variants/without-design-skill/grok-4.5/heroes/one.jpg"
            alt="Open notebook with ink sketches of connected thoughts"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lp-one__veil" />
        <div className="lp-one__content">
          <p className="lp-one__brand anim-rise">Synapse</p>
          <h1 className="lp-one__headline anim-rise-delay-1">
            A second brain for thoughts that refuse to stay linear.
          </h1>
          <p className="lp-one__lede anim-rise-delay-2">
            Capture freely. Link ideas as they appear. Return to a mind that
            remembers for you.
          </p>
          <div className="lp-one__cta anim-rise-delay-3">
            <Link href="#start" className="lp-one__btn">
              Start writing free
            </Link>
            <Link href="#how" className="lp-one__btn-ghost">
              See how it thinks
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-one__section" id="how">
        <div className="lp-one__section-inner lp-one__split">
          <div>
            <h2>Write once. Find it forever.</h2>
            <p>
              Synapse turns fleeting notes into a living map—so the idea you
              scribbled last Tuesday surfaces when you need it today.
            </p>
          </div>
          <blockquote className="lp-one__quote">
            “I stopped organizing folders. My notes started organizing me.”
          </blockquote>
        </div>
      </section>

      <section className="lp-one__section" id="start">
        <div className="lp-one__section-inner">
          <h2>Built for the way minds wander.</h2>
          <p>
            No folders to babysit. No rigid outlines. Just connections that grow
            as your thinking does.
          </p>
        </div>
      </section>

      <footer className="lp-one__footer">
        © 2026 Synapse. Think in public, privately.
      </footer>
    </main>
  );
}
