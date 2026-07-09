import Image from "next/image";
import Link from "next/link";

export default function DirectionFive() {
  return (
    <div className="direction direction-five">
      <header className="site-header five-header">
        <Link className="wordmark" href="#top">
          mnemo
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#library">The library</a>
          <a href="#practice">The practice</a>
        </nav>
      </header>

      <main>
        <section className="five-hero">
          <div className="five-hero__copy enter enter--one">
            <p className="kicker">A personal library, still growing</p>
            <h1>Give your mind somewhere to stretch out.</h1>
            <p className="hero-copy">
              An open, living library for everything you are gradually becoming interested in.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#library">
                Open a library
              </a>
              <a className="button button--quiet" href="#practice">
                See the practice
              </a>
            </div>
          </div>
          <div className="five-hero__image enter enter--two">
            <Image
              alt="Mnemo on a sunlit desk with a circular note constellation."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 57vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-five.png"
            />
          </div>
        </section>

        <section className="five-library" id="library">
          <p className="section-label">The library is a landscape</p>
          <h2>People, projects, questions, and a few beautiful detours.</h2>
          <div className="five-library__terms">
            <span>People</span>
            <span>Projects</span>
            <span>Questions</span>
            <span>References</span>
          </div>
        </section>

        <section className="five-practice" id="practice">
          <div className="five-practice__image">
            <Image
              alt="A tablet showing a reflective long-form note in Mnemo."
              fill
              sizes="(max-width: 767px) 100vw, 44vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-two.png"
            />
          </div>
          <div className="five-practice__copy">
            <h2>A second brain should make more room for your first one.</h2>
            <p>
              Save the pieces. Leave breathing room. Come back when the question is clearer.
            </p>
            <a className="text-link" href="#library">
              Make room for a note
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer five-footer">
        <span>Mnemo makes room for what matters.</span>
        <a href="#library">Open the landscape</a>
      </footer>
    </div>
  );
}
