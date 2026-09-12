import Image from "next/image";
import Link from "next/link";

export default function DirectionTwo() {
  return (
    <div className="direction direction-two">
      <header className="site-header two-header">
        <Link className="wordmark" href="#top">
          mnemo
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#attention">Attention</a>
          <a href="#reading">Reading</a>
        </nav>
      </header>

      <main>
        <section className="two-hero">
          <div className="two-hero__copy enter enter--one">
            <p className="kicker">For notes worth returning to</p>
            <h1>Give your ideas a longer life.</h1>
            <p className="hero-copy">
              A calm place for ideas that need time, context, and your full attention.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#attention">
                Keep a thought
              </a>
              <a className="button button--quiet" href="#reading">
                Read the idea
              </a>
            </div>
          </div>
          <div className="two-hero__image enter enter--two">
            <Image
              alt="A tablet displaying a long-form note in Mnemo."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 46vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-two.png"
            />
          </div>
        </section>

        <section className="two-attention" id="attention">
          <p className="two-attention__lede">Keep less. Keep it better.</p>
          <h2>Notes are not a feed. They are an invitation to look again.</h2>
          <div className="two-attention__rule" />
          <p className="two-attention__copy">
            Mnemo gives a useful fragment somewhere to settle until you have a reason to meet it again.
          </p>
        </section>

        <section className="two-reading" id="reading">
          <div className="two-reading__image">
            <Image
              alt="A dark Mnemo workspace showing research notes linked together."
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-four.png"
            />
          </div>
          <div className="two-reading__copy">
            <p className="section-label">Context is the point</p>
            <h2>A good note takes you somewhere.</h2>
            <p>
              Follow a question back to its source, then forward to the thought it helped shape.
            </p>
            <a className="text-link" href="#attention">
              Keep reading
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer two-footer">
        <span>Mnemo makes space for attention.</span>
        <a href="#attention">Return to the beginning</a>
      </footer>
    </div>
  );
}
