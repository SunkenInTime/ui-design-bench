import Image from "next/image";
import Link from "next/link";

export default function DirectionFour() {
  return (
    <div className="direction direction-four">
      <header className="site-header four-header">
        <Link className="wordmark" href="#top">
          mnemo
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#thread">The thread</a>
          <a href="#source">The source</a>
        </nav>
      </header>

      <main>
        <section className="four-hero">
          <div className="four-hero__copy enter enter--one">
            <p className="kicker">Research without the sprawl</p>
            <h1>Keep every thread within reach.</h1>
            <p className="hero-copy">
              A research workspace that keeps every source, question, and connection close.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#thread">
                Find the thread
              </a>
              <a className="button button--quiet" href="#source">
                Follow a source
              </a>
            </div>
          </div>
          <div className="four-hero__image enter enter--two">
            <Image
              alt="A dark Mnemo research desk with connected notes on a laptop."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 59vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-four.png"
            />
          </div>
        </section>

        <section className="four-thread" id="thread">
          <div className="four-thread__copy">
            <p className="section-label">Keep the relation, not only the result</p>
            <h2>The context is often the useful part.</h2>
            <p>
              Mnemo keeps the path beside the answer, making every conclusion easier to revisit and reshape.
            </p>
          </div>
          <div className="four-thread__image">
            <Image
              alt="Mnemo displaying a connected map of notes on a laptop."
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-one.png"
            />
          </div>
        </section>

        <section className="four-source" id="source">
          <p className="four-source__lead">Sources become starting points.</p>
          <div>
            <h2>Search should begin in context.</h2>
            <p>
              Pull a reference into the work. Leave the quotation next to the question it changed.
            </p>
            <a className="text-link" href="#thread">
              Keep a source nearby
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer four-footer">
        <span>Mnemo is a workspace for connected inquiry.</span>
        <a href="#thread">Trace a connection</a>
      </footer>
    </div>
  );
}
