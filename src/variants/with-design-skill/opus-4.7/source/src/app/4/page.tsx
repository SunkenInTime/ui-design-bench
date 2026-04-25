import Link from "next/link";
import "@/generated/scoped-variant-css/with-design-skill/opus-4.7/source/src/app/4/index04.css";

export default function BrutalistPage() {
  return (
    <main className="b04">
      {/* Grid overlay */}
      <div className="b04-grid-overlay" aria-hidden />

      {/* Top strip — running ticker */}
      <div className="b04-ticker" aria-hidden>
        <div className="b04-ticker-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              INDEX/04 &nbsp;·&nbsp; A NOTE SYSTEM FOR PEOPLE WHO WORK WITH
              INFORMATION &nbsp;·&nbsp; BUILT IN BERLIN &nbsp;·&nbsp; NO TRACKING
              &nbsp;·&nbsp; NO BULLSHIT &nbsp;·&nbsp; SHIP/Q2/26 &nbsp;·&nbsp;
              INDEX/04 &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Top bar */}
      <header className="b04-topbar">
        <div className="b04-logo">
          <span className="b04-logo-slash">/</span>
          <span className="b04-logo-word">INDEX</span>
          <span className="b04-logo-slash">/</span>
          <span className="b04-logo-word b04-yellow">04</span>
        </div>
        <nav className="b04-nav">
          <a href="#system">01 SYSTEM</a>
          <a href="#specs">02 SPECS</a>
          <a href="#pricing">03 PRICING</a>
          <a href="#manual">04 MANUAL</a>
        </nav>
        <div className="b04-access">
          <span className="b04-dot" />
          <span>BETA · 2026.Q2</span>
        </div>
      </header>

      {/* Hero */}
      <section className="b04-hero">
        <div className="b04-hero-left">
          <div className="b04-hero-meta">
            <div><span>CAT.</span><span>A-04</span></div>
            <div><span>REV.</span><span>003</span></div>
            <div><span>PG.</span><span>01/12</span></div>
            <div><span>FILE.</span><span>index-04.pdf</span></div>
          </div>

          <h1 className="b04-headline">
            <span>A</span>
            <span>NOTE</span>
            <span className="b04-yellow-block">SYSTEM</span>
            <span>FOR</span>
            <span>YOUR</span>
            <span className="b04-outline">SECOND</span>
            <span>BRAIN.</span>
          </h1>

          <div className="b04-hero-body">
            <p>
              INDEX/04 IS A KEYBOARD-DRIVEN NOTE TOOL FOR RESEARCHERS, BUILDERS
              AND OBSESSIVES. WRITE PLAIN TEXT. LINK ANYTHING TO ANYTHING. QUERY
              LIKE A DATABASE. EXPORT LIKE A PRINTER.
            </p>
            <p>
              WE BELIEVE DATABASES SHOULD FEEL SHARP, DOCUMENTS SHOULD FEEL
              HEAVY, AND SOFTWARE SHOULD WORK <u>OFFLINE</u>.
            </p>
          </div>

          <div className="b04-hero-cta">
            <Link href="#pricing" className="b04-btn b04-btn-yellow">
              → GET ACCESS
              <span className="b04-btn-meta">39€/YR</span>
            </Link>
            <Link href="#specs" className="b04-btn b04-btn-outline">
              READ THE SPECS
            </Link>
          </div>
        </div>

        <div className="b04-hero-right">
          <div className="b04-stats">
            <div className="b04-stat">
              <div className="b04-stat-n">04</div>
              <div className="b04-stat-l">
                panes
                <br />
                splittable
              </div>
            </div>
            <div className="b04-stat b04-stat-invert">
              <div className="b04-stat-n">127</div>
              <div className="b04-stat-l">
                keybinds
                <br />
                rebindable
              </div>
            </div>
            <div className="b04-stat">
              <div className="b04-stat-n">∞</div>
              <div className="b04-stat-l">
                notes
                <br />
                per vault
              </div>
            </div>
            <div className="b04-stat b04-stat-yellow">
              <div className="b04-stat-n">0</div>
              <div className="b04-stat-l">
                trackers
                <br />
                servers
              </div>
            </div>
          </div>

          <div className="b04-callout">
            <div className="b04-callout-head">
              <span>TICKET</span>
              <span className="b04-mono">#001</span>
            </div>
            <p>
              "FINALLY. SOFTWARE THAT DOESN&apos;T ASK PERMISSION TO WORK."
            </p>
            <p className="b04-callout-src">— H.M., DESIGN RESEARCHER, BASEL</p>
          </div>
        </div>
      </section>

      {/* Diagram rule */}
      <div className="b04-rule">
        <span>FIG. 01 /</span>
        <span>THE SYSTEM</span>
        <span>/ DIAGRAM BELOW</span>
      </div>

      {/* System diagram grid */}
      <section id="system" className="b04-system">
        <div className="b04-system-grid">
          <div className="b04-cell b04-cell-big">
            <div className="b04-cell-num">01</div>
            <div className="b04-cell-body">
              <h2>CAPTURE</h2>
              <p>
                GLOBAL HOTKEY. 120ms FROM THOUGHT TO DISK. PLAIN MARKDOWN, ON
                YOUR DISK, FOREVER.
              </p>
              <div className="b04-kbd-row">
                <kbd>⌃</kbd>
                <kbd>⇧</kbd>
                <kbd>N</kbd>
              </div>
            </div>
          </div>

          <div className="b04-cell b04-cell-yellow">
            <div className="b04-cell-num">02</div>
            <div className="b04-cell-body">
              <h2>LINK</h2>
              <p>
                [[DOUBLE-BRACKETS]] OR DRAG. BACKLINKS AUTOMATIC. TYPED EDGES
                OPTIONAL.
              </p>
            </div>
          </div>

          <div className="b04-cell">
            <div className="b04-cell-num">03</div>
            <div className="b04-cell-body">
              <h2>QUERY</h2>
              <p>
                SQL-ISH DSL OVER MARKDOWN. FIND EVERY NOTE WITH TAG /books/
                CITED IN ANY 2024 ESSAY.
              </p>
            </div>
          </div>

          <div className="b04-cell b04-cell-invert">
            <div className="b04-cell-num">04</div>
            <div className="b04-cell-body">
              <h2>VIEW</h2>
              <p>
                LIST / TABLE / BOARD / GRAPH / CALENDAR. ONE VAULT, FIVE LENSES.
                SWITCH WITH ⌘1–5.
              </p>
            </div>
          </div>

          <div className="b04-cell">
            <div className="b04-cell-num">05</div>
            <div className="b04-cell-body">
              <h2>EXPORT</h2>
              <p>
                PDF / EPUB / HTML / STATIC SITE. A FOLDER OF .MD WILL ALWAYS BE
                YOUR ESCAPE HATCH.
              </p>
            </div>
          </div>

          <div className="b04-cell b04-cell-wide">
            <div className="b04-cell-num">06</div>
            <div className="b04-cell-body">
              <h2>SYNC &mdash; E2E ENCRYPTED</h2>
              <p>
                OPTIONAL PAID RELAY OR BRING YOUR OWN GIT, SSH OR ICLOUD DRIVE.
                WE DON&apos;T SEE YOUR NOTES. WE DON&apos;T WANT TO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spec sheet */}
      <section id="specs" className="b04-specs">
        <div className="b04-specs-head">
          <h2>
            TECHNICAL
            <br />
            <span className="b04-yellow">SPECIFICATIONS.</span>
          </h2>
          <p>INDEX/04 / DATA SHEET / ISSUE 003 / 2026-04-16</p>
        </div>

        <div className="b04-specs-table">
          {SPEC_ROWS.map((r, i) => (
            <div key={i} className="b04-specs-row">
              <span className="b04-specs-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="b04-specs-k">{r.k}</span>
              <span className="b04-specs-v">{r.v}</span>
              <span className="b04-specs-n">{r.n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="b04-pricing">
        <h2 className="b04-pricing-title">
          PRICING<span className="b04-yellow">.</span>
        </h2>
        <p className="b04-pricing-lede">THREE TIERS. NO TRIAL. NO TEASER PRICING.</p>

        <div className="b04-price-grid">
          <div className="b04-price">
            <div className="b04-price-tag">A</div>
            <h3>SOLO</h3>
            <div className="b04-price-num">0€</div>
            <div className="b04-price-unit">FOREVER</div>
            <ul>
              <li>LOCAL VAULT, UNLIMITED NOTES</li>
              <li>ALL 5 VIEWS</li>
              <li>PLAIN MARKDOWN STORAGE</li>
              <li>EXPORT TO PDF/HTML/EPUB</li>
              <li>NO CLOUD SYNC</li>
            </ul>
            <a href="#" className="b04-btn b04-btn-outline b04-btn-full">
              → DOWNLOAD
            </a>
          </div>

          <div className="b04-price b04-price-feat">
            <div className="b04-price-tag">B</div>
            <div className="b04-price-stamp">RECOMMENDED</div>
            <h3>PRO</h3>
            <div className="b04-price-num">39€</div>
            <div className="b04-price-unit">/YEAR</div>
            <ul>
              <li>EVERYTHING IN SOLO</li>
              <li>E2E ENCRYPTED SYNC</li>
              <li>QUERY ENGINE · TYPED EDGES</li>
              <li>WEB CLIPPER · PDF CLIPPER</li>
              <li>PUBLISH AS STATIC SITE</li>
            </ul>
            <a href="#" className="b04-btn b04-btn-yellow b04-btn-full">
              → GET PRO
            </a>
          </div>

          <div className="b04-price">
            <div className="b04-price-tag">C</div>
            <h3>STUDIO</h3>
            <div className="b04-price-num">
              12€<span>/SEAT</span>
            </div>
            <div className="b04-price-unit">/MONTH</div>
            <ul>
              <li>SHARED VAULTS, FINE-GRAINED ACL</li>
              <li>SSO (OKTA, GOOGLE, ENTRA)</li>
              <li>AUDIT LOG, RETENTION POLICY</li>
              <li>ON-PREM RELAY AVAILABLE</li>
              <li>PRIORITY SUPPORT · PHONE</li>
            </ul>
            <a href="#" className="b04-btn b04-btn-outline b04-btn-full">
              → CONTACT SALES
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manual" className="b04-manifesto">
        <div className="b04-manifesto-tag">/05 · THE MANUAL</div>
        <h2 className="b04-manifesto-text">
          <span className="b04-yellow">"</span>
          SOFTWARE SHOULD BEHAVE LIKE A WELL-BUILT TOOL <br />
          &mdash; SHARP, <span className="b04-strike">FASHIONABLE</span>&nbsp;DURABLE,
          HONEST ABOUT WHAT IT DOES. <br />
          INDEX/04 IS <span className="b04-yellow-block-inline">A HAMMER</span>,
          NOT A PLATFORM.
          <span className="b04-yellow">"</span>
        </h2>
        <p className="b04-manifesto-attr">
          — FOUNDING MEMO / 2024.11.03 / BY THE FIVE OF US
        </p>
      </section>

      {/* Footer */}
      <footer className="b04-footer">
        <div className="b04-foot-grid">
          <div>
            <h5>INDEX/04</h5>
            <p>
              A SOFTWARE ATELIER.<br />
              RUNGESTRASSE 19, 10179 BERLIN.
            </p>
          </div>
          <div>
            <h5>PRODUCT</h5>
            <p>DOWNLOAD</p>
            <p>CHANGELOG</p>
            <p>ROADMAP</p>
            <p>OPEN-SOURCE</p>
          </div>
          <div>
            <h5>WRITINGS</h5>
            <p>ON KEYBOARDS</p>
            <p>ON PLAIN TEXT</p>
            <p>AGAINST THE CLOUD</p>
            <p>COLOPHON</p>
          </div>
          <div>
            <h5>CONTACT</h5>
            <p>hi@index04.systems</p>
            <p>+49 30 00 04 04 04</p>
            <p>
              <span className="b04-yellow">PGP: 3F27 A4B1 …</span>
            </p>
          </div>
        </div>
        <div className="b04-foot-bar">
          <span>© MMXXVI INDEX/04</span>
          <span>VERSION 0.9.3-BETA / BUILD 4482</span>
          <span>TYPESET IN ARCHIVO BLACK &amp; JETBRAINS MONO</span>
        </div>
      </footer>
    </main>
  );
}

const SPEC_ROWS = [
  { k: "STORAGE", v: "PLAIN MARKDOWN + FRONT-MATTER YAML", n: "NO LOCK-IN" },
  { k: "SEARCH", v: "TANTIVY / BM25 + SEMANTIC (LOCAL)", n: "< 50 MS @ 10⁵ NOTES" },
  { k: "SYNC", v: "END-TO-END ENCRYPTED · AGE + SIGNIFY", n: "OPTIONAL" },
  { k: "OS", v: "MACOS 13+ · WINDOWS 10+ · LINUX · iOS 17", n: "NATIVE BINARIES" },
  { k: "RAM", v: "180 MB IDLE · 420 MB ACTIVE", n: "MEASURED 2026-04-14" },
  { k: "LICENSE", v: "SOURCE-AVAILABLE · PLV2", n: "READ IT YOURSELF" },
  { k: "TELEMETRY", v: "NONE", n: "WE MEAN IT" },
  { k: "EXPORT", v: "PDF · EPUB · HTML · RAW MD", n: "LOSSLESS" },
];
