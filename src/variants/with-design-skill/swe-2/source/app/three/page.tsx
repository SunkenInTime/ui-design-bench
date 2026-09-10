import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commonplace — 03 · Slip-box",
};

export default function Three() {
  return (
    <main className="d3">
      <header className="d3-head">
        <div className="d3-label">
          <span className="d3-label-name">Commonplace</span>
          <span className="d3-label-sub">card catalog</span>
        </div>
        <nav className="d3-nav" aria-label="Page">
          <a href="#method">The method</a>
          <a href="#anatomy">Anatomy of a slip</a>
          <a href="#rates">Rates</a>
        </nav>
        <a className="d3-signin" href="#rates">
          Sign in
        </a>
      </header>

      <section className="d3-hero">
        <div className="d3-hero-copy">
          <h1>A slip-box that does the filing.</h1>
          <p>
            Niklas Luhmann wrote seventy books out of a wooden box of index
            cards. Commonplace is that box: capture slips from anywhere, and it
            files them, links them, and deals them back to you — no librarian
            required.
          </p>
          <div className="d3-cta">
            <a className="d3-btn" href="#rates">
              Open the box
            </a>
            <a className="d3-quiet" href="#anatomy">
              See a slip up close
            </a>
          </div>
        </div>

        <div className="d3-stack" aria-hidden="true">
          <div className="d3-card d3-card--ghost1" />
          <div className="d3-card d3-card--ghost2" />
          <div className="d3-card d3-card--top">
            <span className="d3-tab d3-tab--ochre" />
            <div className="d3-card-head">
              <h3>attention residue</h3>
              <span className="d3-id">1a</span>
            </div>
            <p className="d3-card-body">
              What lingers after the meeting ends. Name it and it shrinks;
              leave it and it books the afternoon.
            </p>
            <p className="d3-card-cf">cf. mornings 1, phone problem 4c</p>
          </div>
        </div>
      </section>

      <section className="d3-section" id="method">
        <h2 className="d3-h2">
          <span className="d3-slip">1</span> The method
        </h2>
        <div className="d3-cards">
          <div className="d3-card">
            <span className="d3-tab d3-tab--clay" />
            <div className="d3-card-head">
              <h3>Capture</h3>
              <span className="d3-id">1.1</span>
            </div>
            <p className="d3-card-body">
              Every thought lands in the inbox tray — phone, browser, watch.
              No folders on the way in; each slip is date-stamped and filed
              later.
            </p>
            <p className="d3-card-cf">cf. 2 — anatomy of a slip</p>
          </div>
          <div className="d3-card">
            <span className="d3-tab d3-tab--pine" />
            <div className="d3-card-head">
              <h3>Branch</h3>
              <span className="d3-id">1.1a</span>
            </div>
            <p className="d3-card-body">
              Link a slip to any other and it takes a branch address — 1a,
              1a1, 1a2 — a thought growing under its parent, exactly where it
              belongs.
            </p>
            <p className="d3-card-cf">cf. 1.1 — capture</p>
          </div>
          <div className="d3-card">
            <span className="d3-tab d3-tab--sage" />
            <div className="d3-card-head">
              <h3>Resurface</h3>
              <span className="d3-id">1.2</span>
            </div>
            <p className="d3-card-body">
              Each morning the box deals you a few old slips next to
              today&rsquo;s writing. Serendipity, on a schedule.
            </p>
            <p className="d3-card-cf">cf. 1.1a — branching</p>
          </div>
        </div>
      </section>

      <section className="d3-section" id="anatomy">
        <h2 className="d3-h2">
          <span className="d3-slip">2</span> Anatomy of a slip
        </h2>
        <div className="d3-anatomy">
          <div className="d3-card d3-card--big">
            <span className="d3-tab d3-tab--ochre" />
            <div className="d3-card-head">
              <h3>the phone problem</h3>
              <span className="d3-id">4c</span>
            </div>
            <p className="d3-card-body">
              The phone is not the distraction; the negotiation is. Every
              unlock is a small referendum on what the next hour is for. Write
              the referendum down once — [[attention residue]] — and the vote
              gets quieter.
            </p>
            <p className="d3-card-links">
              <span>attention residue</span>
              <span>mornings</span>
              <span>deep work</span>
            </p>
            <p className="d3-card-cf">
              filed under attention — cf. 1a, 2b, journal 9
            </p>
          </div>
          <ul className="d3-spec">
            <li>
              <span className="d3-spec-k">address</span>
              <span>
                4c sits under 4, beside 4a and 4b — position is meaning.
              </span>
            </li>
            <li>
              <span className="d3-spec-k">links</span>
              <span>
                typed as [[double brackets]] in the body; the box does the
                rest.
              </span>
            </li>
            <li>
              <span className="d3-spec-k">filed under</span>
              <span>
                automatic — every slip that mentions you shows up here.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="d3-section" id="rates">
        <h2 className="d3-h2">
          <span className="d3-slip">3</span> Rates
        </h2>
        <div className="d3-drawer">
          <div className="d3-card d3-card--rate">
            <span className="d3-tab d3-tab--sage" />
            <div className="d3-card-head">
              <h3>Reader</h3>
              <span className="d3-id">free</span>
            </div>
            <p className="d3-card-body">
              A thousand slips, one device, the whole filing system.
            </p>
            <Link className="d3-rate-link" href="/three">
              Choose Reader
            </Link>
          </div>
          <div className="d3-card d3-card--rate">
            <span className="d3-tab d3-tab--clay" />
            <div className="d3-card-head">
              <h3>Keeper</h3>
              <span className="d3-id">$8/mo</span>
            </div>
            <p className="d3-card-body">
              Unlimited slips, encrypted sync, daily resurfacing.
            </p>
            <Link className="d3-rate-link" href="/three">
              Choose Keeper
            </Link>
          </div>
          <div className="d3-card d3-card--rate">
            <span className="d3-tab d3-tab--pine" />
            <div className="d3-card-head">
              <h3>Archive</h3>
              <span className="d3-id">$16/mo</span>
            </div>
            <p className="d3-card-body">
              Family vaults, shared drawers, and a printed annual index.
            </p>
            <Link className="d3-rate-link" href="/three">
              Choose Archive
            </Link>
          </div>
        </div>
      </section>

      <footer className="d3-foot">
        <p className="d3-foot-name">Commonplace</p>
        <p>filed under software, notebooks, second brains</p>
      </footer>
    </main>
  );
}
