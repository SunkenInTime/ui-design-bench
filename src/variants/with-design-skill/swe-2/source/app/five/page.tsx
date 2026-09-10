import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commonplace — 05 · Placard",
};

export default function Five() {
  return (
    <main className="d5">
      <header className="d5-head">
        <span className="d5-wordmark">
          Commonplace<span className="d5-dot">.</span>
        </span>
        <span className="d5-head-note">a second brain</span>
        <a className="d5-head-cta" href="#rates">
          Start remembering
        </a>
      </header>

      <section className="d5-hero">
        <h1>
          <span>Every</span>
          <span>thought</span>
          <span className="d5-blue">on record.</span>
        </h1>
        <div className="d5-hero-sub">
          <p>
            Commonplace keeps everything — every note linked, every idea
            findable, every stray thought dealt back to you when it matters.
          </p>
          <div className="d5-cta">
            <a className="d5-btn" href="#rates">
              Start remembering
            </a>
            <span className="d5-fine">free for a thousand notes</span>
          </div>
        </div>
      </section>

      <section className="d5-band">
        <div className="d5-band-row">
          <h2>Capture</h2>
          <p>Phone, browser, watch, voice. In before the thought evaporates.</p>
        </div>
        <div className="d5-band-row">
          <h2>Link</h2>
          <p>
            [[Double brackets]] while you write; backlinks build themselves.
          </p>
        </div>
        <div className="d5-band-row">
          <h2>Resurface</h2>
          <p>Old notes return while you&rsquo;re writing — not after.</p>
        </div>
      </section>

      <section className="d5-stat">
        <p>
          <span className="d5-blue">41,203</span> notes resurfaced to their
          owners this week.
        </p>
      </section>

      <section className="d5-quote">
        <blockquote>
          &ldquo;I stopped trying to remember. The box remembers for me.&rdquo;
        </blockquote>
        <cite>— M. Okafor, novelist, 14,000 notes</cite>
      </section>

      <section className="d5-rates" id="rates">
        <div className="d5-rate">
          <p className="d5-rate-name">Reader</p>
          <p className="d5-rate-price">Free</p>
          <p className="d5-rate-desc">
            A thousand notes, one device, the whole system.
          </p>
          <Link className="d5-rate-btn" href="/five">
            Choose Reader
          </Link>
        </div>
        <div className="d5-rate d5-rate--blue">
          <p className="d5-rate-name">Keeper</p>
          <p className="d5-rate-price">$8/mo</p>
          <p className="d5-rate-desc">
            Unlimited notes, encrypted sync, daily resurfacing.
          </p>
          <Link className="d5-rate-btn" href="/five">
            Choose Keeper
          </Link>
        </div>
      </section>

      <p className="d5-nolock">
        no lock-in<span className="d5-star">*</span>
        <span className="d5-nolock-note">
          *your notes are plain text. leave whenever you like.
        </span>
      </p>

      <footer className="d5-foot">
        <p className="d5-giant" aria-hidden="true">
          Commonplace
        </p>
      </footer>
    </main>
  );
}
