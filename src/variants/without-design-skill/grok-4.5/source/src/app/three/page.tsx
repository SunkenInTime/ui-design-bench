import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Synapse — Garden",
  description: "Grow a second brain from the seeds of everyday thought.",
};

export default function ThreePage() {
  return (
    <main className="lp-three">
      <section className="lp-three__hero">
        <div className="lp-three__media anim-ken">
          <Image
            src="/variants/without-design-skill/grok-4.5/heroes/three.jpg"
            alt="Lush botanical garden with soft morning light"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lp-three__veil" />
        <div className="lp-three__content">
          <p className="lp-three__brand anim-rise">Synapse</p>
          <h1 className="lp-three__headline anim-rise-delay-1">
            Grow a second brain from the seeds of everyday thought.
          </h1>
          <p className="lp-three__lede anim-rise-delay-2">
            Notes take root. Links branch. Over time, your knowledge becomes a
            living garden you can walk through.
          </p>
          <div className="lp-three__cta anim-rise-delay-3">
            <Link href="#start" className="lp-three__btn">
              Plant your first note
            </Link>
            <Link href="#grow" className="lp-three__btn-ghost">
              Watch ideas connect
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-three__section" id="grow">
        <div className="lp-three__section-inner">
          <h2>From scatter to canopy.</h2>
          <p>
            Drop thoughts without sorting them. Synapse grows the structure—so
            related ideas find each other while you keep moving.
          </p>
          <div className="lp-three__ritual">
            <article>
              <h3>Seed</h3>
              <p>Capture a fleeting thought before it evaporates.</p>
            </article>
            <article>
              <h3>Tend</h3>
              <p>Light links and gentle revisits deepen the roots.</p>
            </article>
            <article>
              <h3>Harvest</h3>
              <p>When you need clarity, the garden answers back.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-three__section" id="start">
        <div className="lp-three__section-inner">
          <h2>Clarity you can harvest.</h2>
          <p>
            When a question arrives, your garden answers—pulling the right
            threads from months of quiet capture.
          </p>
        </div>
      </section>

      <footer className="lp-three__footer">
        © 2026 Synapse. Cultivate your mind.
      </footer>
    </main>
  );
}
