import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Synapse — Signal",
  description: "Cut through the noise. Keep the signal. Build a second brain.",
};

export default function FivePage() {
  return (
    <main className="lp-five">
      <section className="lp-five__hero">
        <div className="lp-five__media anim-ken">
          <Image
            src="/variants/without-design-skill/grok-4.5/heroes/five.jpg"
            alt="Architectural light cutting through fog over concrete forms"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lp-five__veil" />
        <div className="lp-five__content">
          <p className="lp-five__brand anim-rise">
            Syn<em>apse</em>
          </p>
          <h1 className="lp-five__headline anim-rise-delay-1">
            Cut through the noise. Keep the signal. Build a second brain.
          </h1>
          <p className="lp-five__lede anim-rise-delay-2">
            Capture what matters. Link what connects. Forget the rest—on purpose.
          </p>
          <div className="lp-five__cta anim-rise-delay-3">
            <Link href="#start" className="lp-five__btn">
              Start free
            </Link>
            <Link href="#clarity" className="lp-five__btn-ghost">
              See the method
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-five__section" id="clarity">
        <div className="lp-five__section-inner">
          <h2>Clarity is a practice.</h2>
          <p>
            Synapse helps you separate durable insight from disposable noise—so
            your second brain stays sharp as it grows.
          </p>
          <div className="lp-five__strip">
            <article>
              <h3>Capture fast</h3>
              <p>Get the thought down before the moment passes.</p>
            </article>
            <article>
              <h3>Link lightly</h3>
              <p>Connect only what earns a connection.</p>
            </article>
            <article>
              <h3>Recall cleanly</h3>
              <p>Find the signal when the question arrives.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-five__section" id="start">
        <div className="lp-five__section-inner">
          <h2>A second brain without the clutter.</h2>
          <p>
            Designed for people who think in drafts, ship in public, and refuse
            to drown in their own notes.
          </p>
        </div>
      </section>

      <footer className="lp-five__footer">
        © 2026 Synapse. Signal over noise.
      </footer>
    </main>
  );
}
