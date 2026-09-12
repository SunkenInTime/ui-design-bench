import { Courier_Prime, Karla } from "next/font/google";

const typed = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--d1-typed",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--d1-body",
});

const FEATURES = [
  {
    call: "CTX 005.1",
    title: "Capture",
    copy: "One keystroke from anywhere — the page, the highlight, the voice memo. Filed before the thought evaporates.",
  },
  {
    call: "CTX 005.2",
    title: "Cross-reference",
    copy: "Links instead of folders. Every note lists what points to it, so ideas shelve themselves next to their relatives.",
  },
  {
    call: "CTX 005.3",
    title: "Recall",
    copy: "Notes resurface on a schedule. Cortex returns old cards to your desk just before they would fade.",
  },
  {
    call: "CTX 005.4",
    title: "Circulation",
    copy: "Local-first and encrypted. Your collection lives on your machine and exports as plain Markdown. No overdue fines.",
  },
];

const CHECKOUT_STAMPS = [
  { name: "A. LOVELACE", date: "03.14.2024" },
  { name: "M. CURIE", date: "07.02.2024" },
  { name: "K. JOHNSON", date: "11.19.2025" },
  { name: "YOU", date: "TODAY" },
];

export default function Archive() {
  return (
    <div className={`d1 ${typed.variable} ${body.variable}`}>
      <header className="d1-nav">
        <a className="d1-wordmark" href="#top">
          CORTEX<span className="d1-wordmark-caret" aria-hidden="true">_</span>
        </a>
        <nav className="d1-nav-links" aria-label="Primary">
          <a href="#catalog">The catalog</a>
          <a href="#marginalia">Field notes</a>
          <a href="#checkout" className="d1-nav-cta">
            Start free
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="d1-hero">
          <div className="d1-card-stack" aria-hidden="true">
            <div className="d1-card d1-card--back2" />
            <div className="d1-card d1-card--back1" />
          </div>
          <div className="d1-card d1-card--hero">
            <div className="d1-card-head">
              <span>QA76.9&nbsp;.C67</span>
              <span>ON PERMANENT LOAN FROM: YOUR BRAIN</span>
            </div>
            <h1 className="d1-headline">
              Your mind,
              <br />
              on file.
              <span className="d1-caret" aria-hidden="true" />
            </h1>
            <p className="d1-sub">
              Cortex keeps every note, quote, and half-formed idea catalogued
              and cross-referenced — so the thought you had in 2019 is still on
              the shelf the day you need it.
            </p>

            <dl className="d1-meta">
              <div className="d1-meta-row">
                <dt>Author</dt>
                <span className="d1-dots" aria-hidden="true" />
                <dd>You</dd>
              </div>
              <div className="d1-meta-row">
                <dt>Notes on file</dt>
                <span className="d1-dots" aria-hidden="true" />
                <dd>12,408</dd>
              </div>
              <div className="d1-meta-row">
                <dt>Cross-references</dt>
                <span className="d1-dots" aria-hidden="true" />
                <dd>61,332</dd>
              </div>
              <div className="d1-meta-row">
                <dt>Date due</dt>
                <span className="d1-dots" aria-hidden="true" />
                <dd>Never</dd>
              </div>
            </dl>

            <div className="d1-hero-actions">
              <a className="d1-button" href="#checkout">
                Start your catalog
              </a>
              <a className="d1-pencil-link" href="#catalog">
                Browse the stacks ↓
              </a>
            </div>

            <p className="d1-stamp">Remember everything</p>
          </div>
        </section>

        {/* ---------- FEATURES ---------- */}
        <section className="d1-section" id="catalog">
          <p className="d1-eyebrow">— The card catalog —</p>
          <h2 className="d1-section-title">
            Four drawers. Every thought you&apos;ve ever had.
          </h2>
          <div className="d1-grid">
            {FEATURES.map((feature, i) => (
              <article className="d1-card d1-feature" key={feature.call}>
                <p className="d1-feature-call">{feature.call}</p>
                <h3>{feature.title}</h3>
                <hr className="d1-feature-rule" />
                <p className="d1-feature-copy">{feature.copy}</p>
                <span className="d1-feature-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- MARGINALIA QUOTE ---------- */}
        <section className="d1-section d1-quote-section" id="marginalia">
          <figure className="d1-quote">
            <blockquote>
              “I stopped re-reading my notes.
              <br />
              They started <em>coming back to me</em>.
              <span className="d1-asterisk" aria-hidden="true">
                *
              </span>
            </blockquote>
            <figcaption>
              — field note, Cortex user since 2023
              <span className="d1-margin-note" aria-hidden="true">
                * verified, it works
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ---------- CHECKOUT / CTA ---------- */}
        <section className="d1-section" id="checkout">
          <div className="d1-card d1-checkout">
            <div className="d1-card-head">
              <span>DATE DUE SLIP</span>
              <span>FORM C-1138</span>
            </div>
            <ul className="d1-checkout-list">
              {CHECKOUT_STAMPS.map((stamp) => (
                <li key={stamp.name}>
                  <span className="d1-checkout-name">{stamp.name}</span>
                  <span className="d1-dots" aria-hidden="true" />
                  <span className="d1-checkout-date">{stamp.date}</span>
                </li>
              ))}
            </ul>
            <a className="d1-button d1-button--wide" href="#top">
              Check out your second brain
            </a>
            <p className="d1-fine-print">
              Free for your first 1,000 notes · No card required · Exports as
              Markdown
            </p>
          </div>
        </section>
      </main>

      <footer className="d1-footer">
        <p className="d1-footer-file">CORTEX — EST. 2026</p>
        <p>
          FILED UNDER: second brain · notes · memory · thinking
        </p>
      </footer>
    </div>
  );
}
