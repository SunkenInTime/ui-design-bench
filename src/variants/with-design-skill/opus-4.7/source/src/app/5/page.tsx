"use client";

import Link from "next/link";
import "@/generated/scoped-variant-css/with-design-skill/opus-4.7/source/src/app/5/ma.css";

export default function MaPage() {
  return (
    <main className="ma">
      {/* vertical label, Japanese — lives along the edge */}
      <aside className="ma-vertical" aria-hidden>
        <span>第五稿</span>
        <span className="ma-vertical-sep">·</span>
        <span>第二の脳</span>
        <span className="ma-vertical-sep">·</span>
        <span>二〇二六</span>
      </aside>

      {/* seal */}
      <div className="ma-seal" aria-hidden>
        <svg viewBox="0 0 80 80">
          <rect x="4" y="4" width="72" height="72" rx="4" fill="#b3372b" />
          <rect x="6.5" y="6.5" width="67" height="67" rx="3" fill="none" stroke="#f7f4ee" strokeWidth="1.2" opacity="0.7" />
          <text
            x="40" y="32"
            textAnchor="middle"
            fill="#f7f4ee"
            fontFamily="var(--font-shippori)"
            fontSize="24"
            fontWeight="700"
          >間</text>
          <text
            x="40" y="60"
            textAnchor="middle"
            fill="#f7f4ee"
            fontFamily="var(--font-shippori)"
            fontSize="16"
            fontWeight="600"
          >無</text>
        </svg>
      </div>

      <header className="ma-header">
        <div className="ma-header-left">
          <span className="ma-kanji ma-brand">間</span>
          <span className="ma-brand-latin">Ma</span>
        </div>
        <nav className="ma-nav">
          <a href="#practice">一 practice</a>
          <a href="#objects">二 objects</a>
          <a href="#garden">三 garden</a>
          <a href="#invite">四 invitation</a>
        </nav>
      </header>

      <section className="ma-hero">
        <div className="ma-hero-inner">
          <p className="ma-pretitle">
            <span className="ma-kanji">序</span>
            <span>— a preface</span>
          </p>

          <h1 className="ma-title">
            <span className="ma-kanji-big">間</span>
            <span className="ma-title-en">A notebook</span>
            <span className="ma-title-en ma-title-italic">that waits.</span>
          </h1>

          <p className="ma-dek">
            <span className="ma-kanji-inline">間</span> (ma) is the Japanese word
            for the space between two things &mdash; the pause in a phrase, the
            gap between stones in a garden, the silence before a bell. It is
            where meaning lives.
          </p>

          <div className="ma-hero-rule" />

          <p className="ma-dek ma-dek-wide">
            <em>Ma</em> is a note-taking application built around that idea.
            A room for thought, swept clean every morning. A second brain that
            does not try to be a first brain.
          </p>

          <div className="ma-cta">
            <Link href="#invite" className="ma-btn ma-btn-primary">
              Begin
              <span className="ma-btn-arrow">→</span>
            </Link>
            <Link href="#practice" className="ma-btn ma-btn-ghost">
              The practice
            </Link>
          </div>
        </div>

        <div className="ma-hero-side">
          <div className="ma-side-block">
            <span className="ma-side-num">01</span>
            <span className="ma-side-text">
              one thought per page.
              <br />
              one page per thought.
            </span>
          </div>
          <div className="ma-side-block">
            <span className="ma-side-num">02</span>
            <span className="ma-side-text">
              plain text. local disk.
              <br />
              no kingdom in the cloud.
            </span>
          </div>
          <div className="ma-side-block">
            <span className="ma-side-num">03</span>
            <span className="ma-side-text">
              no streak. no notification.
              <br />
              no gamified remembering.
            </span>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section id="practice" className="ma-practice">
        <div className="ma-section-head">
          <span className="ma-kanji ma-section-kanji">一</span>
          <h2>practice</h2>
          <div className="ma-hairline" />
          <span className="ma-section-meta">the daily form</span>
        </div>

        <div className="ma-practice-grid">
          <div className="ma-practice-text">
            <p>
              Ma asks only one thing of you: that you open it. There is no
              sidebar, no onboarding, no colour. Only a page, its date, and the
              thin grey margin of the day.
            </p>
            <p>
              You write &mdash; a sentence, a name, a reminder, an overheard
              phrase &mdash; and close the window. Later, when a thought on
              Wednesday echoes a thought from February, Ma will set them on the
              same shelf, without announcement.
            </p>
            <p>
              The app is designed to be forgotten. What is remembered is what
              you wrote.
            </p>
          </div>

          <figure className="ma-practice-card">
            <div className="ma-page">
              <div className="ma-page-head">
                <span>水曜日</span>
                <span>Wed · 14.IV.26</span>
              </div>
              <div className="ma-page-body">
                <p>
                  the space between two things is a thing in itself. stones
                  in a garden &mdash; it is the distance between them that you
                  are meant to see.
                </p>
                <p className="ma-page-small">
                  &mdash; on ma, and why one should not fill the page.
                </p>
              </div>
              <div className="ma-page-foot">
                <span>·</span>
                <span className="ma-page-hash">#garden #form</span>
                <span>·</span>
              </div>
            </div>
            <figcaption>
              <span>一枚</span>
              <span>— a single page, at rest.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Objects */}
      <section id="objects" className="ma-objects">
        <div className="ma-section-head">
          <span className="ma-kanji ma-section-kanji">二</span>
          <h2>objects</h2>
          <div className="ma-hairline" />
          <span className="ma-section-meta">五つの道具 · five tools</span>
        </div>

        <ol className="ma-obj-list">
          {OBJECTS.map((o) => (
            <li key={o.kanji} className="ma-obj">
              <div className="ma-obj-head">
                <span className="ma-kanji ma-obj-kanji">{o.kanji}</span>
                <div className="ma-obj-names">
                  <span className="ma-obj-jp">{o.jp}</span>
                  <span className="ma-obj-en">{o.en}</span>
                </div>
              </div>
              <p className="ma-obj-body">{o.body}</p>
              <div className="ma-obj-rule" />
            </li>
          ))}
        </ol>
      </section>

      {/* Garden — pull quote */}
      <section id="garden" className="ma-garden">
        <div className="ma-garden-stones" aria-hidden>
          <span className="ma-stone ma-stone-a" />
          <span className="ma-stone ma-stone-b" />
          <span className="ma-stone ma-stone-c" />
          <span className="ma-stone ma-stone-d" />
        </div>

        <blockquote className="ma-quote">
          <span className="ma-quote-kanji">「</span>
          <p>
            The best rooms are the ones you can leave.
            <br />
            The best notebooks are the ones you can close.
          </p>
          <span className="ma-quote-kanji ma-quote-kanji-r">」</span>
        </blockquote>
        <p className="ma-quote-attr">— ma, a prospectus</p>
      </section>

      {/* Invitation */}
      <section id="invite" className="ma-invite">
        <div className="ma-section-head ma-section-centre">
          <span className="ma-kanji ma-section-kanji">四</span>
          <h2>invitation</h2>
          <div className="ma-hairline" />
        </div>

        <div className="ma-invite-inner">
          <p className="ma-invite-lede">
            Ma is available for macOS, Linux and Windows. It costs&nbsp;
            <em>what you feel it is worth</em>, from zero to the price of a
            good meal.
          </p>

          <form className="ma-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span className="ma-form-label">your.address</span>
              <input
                type="email"
                placeholder="reader@somewhere.jp"
                aria-label="email address"
              />
            </label>
            <button type="submit" className="ma-btn ma-btn-primary">
              Accept <span className="ma-btn-arrow">→</span>
            </button>
          </form>

          <p className="ma-invite-fine">
            We will send one letter. It will be quiet. You may stop it with
            one reply.
          </p>
        </div>
      </section>

      <footer className="ma-footer">
        <div className="ma-footer-row">
          <span className="ma-kanji">間</span>
          <span>ma.app</span>
          <span>·</span>
          <span>Kyoto &amp; Copenhagen</span>
          <span>·</span>
          <span>MMXXVI</span>
        </div>
        <div className="ma-footer-note">
          set in Shippori Mincho &amp; Cormorant Garamond.
          typeset with considerable quietness.
        </div>
      </footer>
    </main>
  );
}

const OBJECTS = [
  {
    kanji: "紙",
    jp: "kami",
    en: "the page",
    body:
      "A single blank, every morning. Write what is present. The app remembers the date, and the season, and the weather, so you don't have to.",
  },
  {
    kanji: "糸",
    jp: "ito",
    en: "the thread",
    body:
      "Notes that share a phrase draw gently toward one another. You may trace the thread back as far as you have written.",
  },
  {
    kanji: "鏡",
    jp: "kagami",
    en: "the mirror",
    body:
      "Once a month, ma offers you a small mirror: the five sentences you wrote that still seem to be asking something. Nothing more.",
  },
  {
    kanji: "箱",
    jp: "hako",
    en: "the box",
    body:
      "A plain folder on your own machine. Your notes are text. When you leave ma, they will still be text, and they will still be yours.",
  },
  {
    kanji: "鐘",
    jp: "kane",
    en: "the bell",
    body:
      "One quiet bell a day, at an hour you set. Not a reminder. An invitation to pause, to put down the phone, and to write one thing.",
  },
];
