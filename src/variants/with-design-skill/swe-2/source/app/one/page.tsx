import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commonplace — 01 · Archive",
};

export default function One() {
  return (
    <main className="d1">
      <div className="plate" aria-hidden="true" />

      <header className="d1-head">
        <nav className="d1-nav" aria-label="Page">
          <a href="#method">The method</a>
          <a href="#index">The index</a>
          <a href="#begin">Begin</a>
        </nav>
        <p className="d1-wordmark">Commonplace</p>
        <hr className="d1-rule" />
        <p className="d1-subtitle">a commonplace book for the present tense</p>
      </header>

      <section className="d1-intro">
        <p className="d1-lede">
          For four hundred years, readers kept commonplace books — one notebook
          where everything worth keeping was copied out, indexed, and
          cross-referenced by hand. Commonplace is that book, rebuilt.
          Everything you write indexes itself: linked, filed, and dealt back to
          you when it matters.
        </p>
        <div className="d1-cta">
          <a className="d1-btn" href="#begin">
            Begin your book
          </a>
          <a className="d1-quiet" href="#method">
            or read the method first
          </a>
        </div>
      </section>

      <section className="d1-specimen" aria-label="A specimen entry">
        <p className="d1-spec-label">Specimen — entry no. 412</p>
        <article className="d1-entry">
          <h2>On attention</h2>
          <p>
            The quality of a day&rsquo;s thinking is set before the first
            notification arrives. Attention is not spent once; it is spent
            twice — on the thing itself, then on the
            <span className="d1-margin-note">
              this entry now links itself to seven earlier entries, without
              being asked
            </span>{" "}
            residue it leaves behind. The entries below agree with this more
            often than they used to.
            <span className="d1-margin-note">
              resurfaces the next time you write about deep work
            </span>
          </p>
          <p>
            What the phone takes in minutes, the morning pays back in hours.
            Write it down once and the thought stops auditioning.
          </p>
          <footer className="d1-filed">
            Filed under <a href="#index">deep work</a>,{" "}
            <a href="#index">mornings</a>,{" "}
            <a href="#index">the phone problem</a>
          </footer>
        </article>
      </section>

      <section className="d1-method" id="method">
        <h2 className="d1-section-title">The method</h2>
        <dl className="d1-ledger">
          <div className="d1-ledger-row">
            <dt>Capture</dt>
            <dd>
              Whatever arrives — a line, a link, a voice memo — lands in
              today&rsquo;s entry. No filing decisions on the way in.
            </dd>
          </div>
          <div className="d1-ledger-row">
            <dt>Cross-reference</dt>
            <dd>
              Every entry indexes itself. Write [[tea ceremony]] once and it is
              filed under tea, under ceremony, and under every entry that has
              ever mentioned either.
            </dd>
          </div>
          <div className="d1-ledger-row">
            <dt>Resurface</dt>
            <dd>
              Old entries return when they are relevant — while you write, not
              when you remember to search.
            </dd>
          </div>
        </dl>
      </section>

      <section className="d1-locke" id="index">
        <p>
          In 1706, John Locke published seventy pages on a single problem: how
          to index a notebook so it never fills up. <em>A New Method of Making
          Common-Place-Books</em> gave every reader an index that grew with the
          book. Commonplace is that index, automated — three hundred years on,
          the filing does itself.
        </p>
      </section>

      <section className="d1-backlinks">
        <article className="d1-entry d1-entry--small">
          <h3>attention residue</h3>
          <p className="d1-mentioned">
            Mentioned in <a href="#index">deep work</a> — three times,{" "}
            <a href="#index">meetings, annotated</a> — twice,{" "}
            <a href="#index">journal, october</a> — nine times
          </p>
        </article>
      </section>

      <section className="d1-begin" id="begin">
        <h2>Begin your commonplace book.</h2>
        <p>
          Free for the first thousand entries. Plain text underneath, always
          exportable.
        </p>
        <Link className="d1-btn" href="/one">
          Open the first page
        </Link>
      </section>

      <footer className="d1-colophon">
        <p>Commonplace</p>
        <p>A second brain, set in Spectral</p>
        <p>MMXXVI</p>
      </footer>
    </main>
  );
}
