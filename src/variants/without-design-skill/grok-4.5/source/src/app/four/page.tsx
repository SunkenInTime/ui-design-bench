import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Synapse — Archive",
  description: "A second brain with the gravity of a personal library.",
};

export default function FourPage() {
  return (
    <main className="lp-four">
      <section className="lp-four__hero">
        <div className="lp-four__media anim-ken">
          <Image
            src="/variants/without-design-skill/grok-4.5/heroes/four.jpg"
            alt="Warm wooden desk with leather journal and brass lamp"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lp-four__veil" />
        <div className="lp-four__content">
          <p className="lp-four__brand anim-rise">Synapse</p>
          <h1 className="lp-four__headline anim-rise-delay-1">
            A second brain with the gravity of a personal library.
          </h1>
          <p className="lp-four__lede anim-rise-delay-2">
            Keep every insight within reach. Synapse is the quiet archive that
            remembers what you meant—not just what you typed.
          </p>
          <div className="lp-four__cta anim-rise-delay-3">
            <Link href="#start" className="lp-four__btn">
              Open the archive
            </Link>
            <Link href="#drawers" className="lp-four__btn-ghost">
              Browse the shelves →
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-four__section" id="drawers">
        <div className="lp-four__section-inner">
          <h2>Knowledge that ages well.</h2>
          <p>
            Notes should feel like volumes on a shelf—findable, durable, and
            worth returning to years later.
          </p>
          <div className="lp-four__drawers">
            <div className="lp-four__drawer">
              <h3>Capture</h3>
              <p>
                Write without ceremony. Synapse files the thought where future-you
                will look.
              </p>
            </div>
            <div className="lp-four__drawer">
              <h3>Cross-index</h3>
              <p>
                Mentions and backlinks weave a catalog that grows more useful
                with every entry.
              </p>
            </div>
            <div className="lp-four__drawer">
              <h3>Retrieve</h3>
              <p>
                Search by meaning, not filename. Pull the right page from a
                lifetime of notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-four__section" id="start">
        <div className="lp-four__section-inner">
          <h2>Built for deep work, not busywork.</h2>
          <p>
            Less sorting. More thinking. An archive that earns its keep every
            time you sit down to write.
          </p>
        </div>
      </section>

      <footer className="lp-four__footer">
        © 2026 Synapse. Your private stacks.
      </footer>
    </main>
  );
}
