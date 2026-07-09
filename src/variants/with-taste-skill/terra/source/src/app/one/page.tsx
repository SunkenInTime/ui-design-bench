import Image from "next/image";
import Link from "next/link";

export default function DirectionOne() {
  return (
    <div className="direction direction-one">
      <header className="site-header one-header">
        <Link className="wordmark" href="#top">
          mnemo
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#flow">The flow</a>
          <a href="#return">The return</a>
        </nav>
      </header>

      <main>
        <section className="one-hero">
          <div className="one-hero__copy enter enter--one">
            <p className="kicker">A home for every thought</p>
            <h1>Make room for your thinking.</h1>
            <p className="hero-copy">
              Capture the useful thing now. Let it become more useful later.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#flow">
                Begin your library
              </a>
              <a className="button button--quiet" href="#return">
                See the loop
              </a>
            </div>
          </div>

          <div className="one-hero__media enter enter--two">
            <Image
              alt="Mnemo shown on a laptop with ideas connected on a canvas."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-one.png"
            />
          </div>
        </section>

        <section className="one-flow" id="flow">
          <div className="one-flow__intro">
            <p className="section-label">A system that stays out of your way</p>
            <h2>Thoughts can arrive incomplete.</h2>
          </div>
          <ol className="one-flow__list">
            <li>
              <strong>Catch it</strong>
              <p>A sentence, a link, a half-formed question. Keep the original shape.</p>
            </li>
            <li>
              <strong>Let it meet something</strong>
              <p>Connections emerge when notes live close enough to find one another.</p>
            </li>
            <li>
              <strong>Come back differently</strong>
              <p>Every return has a little more context than the last one.</p>
            </li>
          </ol>
        </section>

        <section className="one-return" id="return">
          <div className="one-return__image">
            <Image
              alt="A calm second-brain workspace on a light desk."
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-five.png"
            />
          </div>
          <div className="one-return__copy">
            <h2>Memory is a place you can tend.</h2>
            <p>
              Mnemo keeps the useful pieces within reach, without turning your attention into another task.
            </p>
            <a className="text-link" href="#flow">
              Start with one note
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer one-footer">
        <span>Mnemo for unhurried minds</span>
        <a href="#flow">Explore the method</a>
      </footer>
    </div>
  );
}
