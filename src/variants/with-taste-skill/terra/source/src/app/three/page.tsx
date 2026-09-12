import Image from "next/image";
import Link from "next/link";

export default function DirectionThree() {
  return (
    <div className="direction direction-three">
      <header className="site-header three-header">
        <Link className="wordmark" href="#top">
          mnemo
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#gather">Gather</a>
          <a href="#shape">Shape</a>
        </nav>
      </header>

      <main>
        <section className="three-hero">
          <div className="three-hero__copy enter enter--one">
            <p className="kicker">Notes with a pulse</p>
            <h1>Build a second brain that feels like yours.</h1>
            <p className="hero-copy">
              Put notes, links, and small sparks somewhere they can keep moving.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#gather">
                Make a space
              </a>
              <a className="button button--quiet" href="#shape">
                See what grows
              </a>
            </div>
          </div>
          <div className="three-hero__image enter enter--two">
            <Image
              alt="Mnemo on a coral desktop with notes and a writing space."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-three.png"
            />
          </div>
        </section>

        <section className="three-gather" id="gather">
          <div className="three-gather__heading">
            <p className="section-label">Loose ends welcome</p>
            <h2>Start wherever your curiosity is.</h2>
          </div>
          <div className="three-gather__ideas">
            <article>
              <strong>Things you heard</strong>
              <p>A phrase from a conversation, caught before it fades.</p>
            </article>
            <article>
              <strong>Things you noticed</strong>
              <p>A pattern that keeps surfacing in a different form.</p>
            </article>
            <article>
              <strong>Things to follow</strong>
              <p>A question worth keeping around a little longer.</p>
            </article>
          </div>
        </section>

        <section className="three-shape" id="shape">
          <div className="three-shape__copy">
            <h2>Link a note to the next useful thing.</h2>
            <p>
              Connections appear while you work, so the library gradually begins to answer back.
            </p>
            <a className="text-link" href="#gather">
              Gather your first thought
            </a>
          </div>
          <div className="three-shape__image">
            <Image
              alt="A spacious Mnemo workspace with a circular map of notes."
              fill
              sizes="(max-width: 767px) 100vw, 47vw"
              src="/variants/with-taste-skill/terra/iterations/mnemo-five.png"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer three-footer">
        <span>Mnemo keeps ideas in motion.</span>
        <a href="#gather">Make a little room</a>
      </footer>
    </div>
  );
}
