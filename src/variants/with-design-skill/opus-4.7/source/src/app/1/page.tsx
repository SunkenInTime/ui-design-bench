"use client";

import Link from "next/link";
import "./codex.css";

export default function CodexPage() {
  return (
    <main className="codex">
      <div className="codex-grain" aria-hidden />

      {/* Masthead */}
      <header className="codex-masthead">
        <div className="codex-mast-row">
          <span className="codex-mast-left">Vol. I · No. 01</span>
          <span className="codex-mast-center">THE CODEX</span>
          <span className="codex-mast-right">Spring · MMXXVI</span>
        </div>
        <div className="codex-mast-rule" />
        <div className="codex-mast-sub">
          A quarterly of notes, marginalia &amp; the inward library · issn 0000–0001
        </div>
      </header>

      {/* Hero */}
      <section className="codex-hero">
        <div className="codex-eyebrow">
          <span className="codex-section-no">§ I</span>
          <span className="codex-eyebrow-text">On the keeping of a second mind</span>
        </div>
        <h1 className="codex-headline">
          A second&nbsp;brain,
          <br />
          set in&nbsp;print.
        </h1>
        <p className="codex-dek">
          <em>Marginalia</em> is a note-taking instrument modelled on the commonplace
          book &mdash; where a sentence overheard at breakfast, a citation from
          Montaigne, and a fragment of tomorrow&rsquo;s talk can sit on the same
          leaf, cross-referenced by hand, recalled by thought.
        </p>
        <div className="codex-hero-cta">
          <Link href="#apparatus" className="codex-btn codex-btn-primary">
            Begin Volume One
          </Link>
          <Link href="#plates" className="codex-btn codex-btn-ghost">
            View the plates &rarr;
          </Link>
        </div>
      </section>

      <div className="codex-divider">
        <span>❦</span>
      </div>

      {/* Essay */}
      <section className="codex-essay">
        <aside className="codex-marginalia codex-marg-a">
          <span className="codex-marg-label">marg. i</span>
          “The commonplace book is the mind&rsquo;s garden &mdash; weeded, watered,
          grafted.” &mdash; <em>E.&nbsp;Ruskin, 1871</em>
        </aside>

        <div className="codex-columns">
          <p className="codex-first">
            <span className="codex-dropcap">T</span>
            here is a small, stubborn pleasure in writing a thing down so that one
            may forget it honestly. The note is not a cage for the thought; it is
            the thought&rsquo;s companion &mdash; waiting patiently on the shelf,
            willing to be consulted again when the hour is right. For four hundred
            years this was done in ledgers, in the blank leaves at the back of
            Bibles, in the margins of books read twice.
          </p>
          <p>
            <span className="codex-sc">Marginalia</span> continues that long habit
            on a different kind of page. Each entry you write is linked by its own
            sentences, not by folders imposed from above. The system reads what
            you have already read; it notices when a phrase today echoes one from
            six months ago, and places them gently side by side.
          </p>
          <p>
            Nothing is lost, yet nothing is heavy. The index is quiet, the type is
            warm, and the search &mdash; should you need it &mdash; is fast enough
            to feel like remembering.
          </p>
        </div>

        <aside className="codex-marginalia codex-marg-b">
          <span className="codex-marg-label">marg. ii</span>
          Written in the hand of the reader, read back in the voice of the
          author.
        </aside>
      </section>

      {/* Pull quote */}
      <section className="codex-pullquote">
        <div className="codex-quote-mark" aria-hidden>
          &ldquo;
        </div>
        <blockquote>
          Not a product that remembers <em>for</em> you, but one that remembers
          <em> with</em> you.
        </blockquote>
        <div className="codex-quote-attr">— the colophon</div>
      </section>

      {/* Apparatus */}
      <section id="apparatus" className="codex-apparatus">
        <div className="codex-section-head">
          <span className="codex-section-no">§ II</span>
          <h2>Apparatus</h2>
          <span className="codex-section-rule" />
          <span className="codex-section-meta">six instruments</span>
        </div>

        <ol className="codex-app-list">
          <li>
            <span className="codex-num">i.</span>
            <h3>The Ledger</h3>
            <p>
              A single, endlessly scrolling daybook for thoughts as they arrive.
              Date-stamped in the hand of the house, versioned quietly in the
              background.
            </p>
          </li>
          <li>
            <span className="codex-num">ii.</span>
            <h3>Commonplaces</h3>
            <p>
              Fragments, citations and collected lines, indexed by theme.
              Surface an old epigraph while drafting a new letter; the system
              proposes, you decide.
            </p>
          </li>
          <li>
            <span className="codex-num">iii.</span>
            <h3>Marginalia</h3>
            <p>
              Annotate any page with a note that is itself a note. Threads are
              traced as gently as footnotes; links are typeset, not sewn.
            </p>
          </li>
          <li>
            <span className="codex-num">iv.</span>
            <h3>The Concordance</h3>
            <p>
              A silent reader that keeps track of every proper noun you invoke
              and every phrase you repeat, so you may find yourself again.
            </p>
          </li>
          <li>
            <span className="codex-num">v.</span>
            <h3>The Reading Room</h3>
            <p>
              Import essays, clippings and correspondence; the library
              remembers what you underlined and where you hesitated.
            </p>
          </li>
          <li>
            <span className="codex-num">vi.</span>
            <h3>The Private Press</h3>
            <p>
              Publish a curated leaf to a single friend, a small circle, or the
              whole open air &mdash; typeset automatically, in your own hand.
            </p>
          </li>
        </ol>
      </section>

      {/* Plates */}
      <section id="plates" className="codex-plates">
        <div className="codex-section-head">
          <span className="codex-section-no">§ III</span>
          <h2>Plates</h2>
          <span className="codex-section-rule" />
          <span className="codex-section-meta">figs. 1–3</span>
        </div>

        <figure className="codex-plate codex-plate-a">
          <div className="codex-plate-frame">
            <div className="codex-plate-browser">
              <div className="codex-plate-browser-bar">
                <span className="codex-plate-dot" />
                <span className="codex-plate-dot" />
                <span className="codex-plate-dot" />
                <span className="codex-plate-url">marginalia.press / ledger</span>
              </div>
              <div className="codex-plate-ledger">
                <div className="codex-plate-date">Tuesday, 14 April &nbsp;·&nbsp; 7:42</div>
                <div className="codex-plate-entry">
                  <div className="codex-plate-entry-head">
                    <span>Entry 238</span>
                    <span className="codex-plate-tags">· reading · ruskin ·</span>
                  </div>
                  <p>
                    <span className="codex-dropcap-sm">R</span>eading Ruskin on Venice,
                    and what strikes me is his insistence that ornament is
                    <em> labour made visible</em>. The gargoyle is not a joke &mdash;
                    it is the mason&rsquo;s signature. What is the software
                    equivalent? Where, in the slab of a modern interface, is the
                    mason&rsquo;s hand allowed to show?
                  </p>
                  <div className="codex-plate-cross">
                    &rarr; cross-ref. entry 041 (<em>craft</em>), 162 (<em>ornament</em>)
                  </div>
                </div>
                <div className="codex-plate-divider">· · ·</div>
                <div className="codex-plate-entry codex-plate-entry-faint">
                  <div className="codex-plate-entry-head">
                    <span>Entry 237</span>
                    <span className="codex-plate-tags">· overheard ·</span>
                  </div>
                  <p>
                    On the bus: <em>&ldquo;I keep a diary so I can lie to myself more
                    accurately later.&rdquo;</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <figcaption>
            <span className="codex-fig-no">Fig. 1</span>
            <span className="codex-fig-cap">
              the ledger, in its natural light — each entry cross-referenced by its
              own sentences.
            </span>
          </figcaption>
        </figure>
      </section>

      {/* Footnotes / Subscription */}
      <section className="codex-colophon">
        <div className="codex-colophon-rule" />
        <div className="codex-colophon-grid">
          <div>
            <h4>Subscribe</h4>
            <p>
              A quiet invitation &mdash; one leaf per week, on Sunday morning,
              folded by hand.
            </p>
            <form className="codex-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your.address@post"
                className="codex-input"
                aria-label="email"
              />
              <button type="submit" className="codex-btn codex-btn-primary codex-btn-sm">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4>Colophon</h4>
            <p>
              Set in <em>Fraunces</em> &amp; <em>EB Garamond</em>. Composed on a
              rainy Tuesday. Printed on the open web. Footnotes available on
              request.
            </p>
          </div>
        </div>

        <div className="codex-footnotes">
          <p>
            <sup>1</sup> The phrase &ldquo;second brain&rdquo; is, of course, a
            borrowing; see Forte, T., <em>Building a Second Brain</em>, 2022.
          </p>
          <p>
            <sup>2</sup> Earlier drafts of this page were written in the margins
            of a secondhand copy of Montaigne.
          </p>
        </div>

        <div className="codex-footer">
          <span>Marginalia Press</span>
          <span>·</span>
          <span>Edinburgh &amp; the web</span>
          <span>·</span>
          <span>© MMXXVI</span>
        </div>
      </section>
    </main>
  );
}
