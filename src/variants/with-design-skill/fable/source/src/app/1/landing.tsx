"use client";

import { useState } from "react";
import "@/generated/scoped-variant-css/with-design-skill/fable/source/src/app/1/landing.css";

type Card = {
  id: string;
  title: string;
  body: React.ReactNode;
};

function Ref({
  to,
  onPull,
}: {
  to: string;
  onPull: (id: string) => void;
}) {
  return (
    <button
      type="button"
      className="ci-ref"
      onClick={(e) => {
        e.stopPropagation();
        onPull(to);
      }}
    >
      {to}
    </button>
  );
}

export function Landing() {
  const [order, setOrder] = useState<string[]>(["21/3a", "21/3b", "8/4"]);

  const pull = (id: string) => {
    setOrder((prev) => [id, ...prev.filter((c) => c !== id)]);
  };

  const cards: Card[] = [
    {
      id: "21/3a",
      title: "Ideas don’t arrive in order.",
      body: (
        <>
          They arrive while you’re doing something else. File them anyway — the
          address, not the timing, is what makes a thought findable later. On
          addresses, see <Ref to="21/3b" onPull={pull} />.
        </>
      ),
    },
    {
      id: "21/3b",
      title: "An address beats a folder.",
      body: (
        <>
          A folder asks where a thought belongs, and the thought rarely knows. An
          address only asks where it sits — its neighbours do the rest.
          Disagreement filed at <Ref to="8/4" onPull={pull} />.
        </>
      ),
    },
    {
      id: "8/4",
      title: "Notes argue when they touch.",
      body: (
        <>
          Put a claim beside its counter-claim and the box starts thinking with
          you. This is the entire trick. Return to{" "}
          <Ref to="21/3a" onPull={pull} />.
        </>
      ),
    },
  ];

  return (
    <div className="ci-page">
      <header className="ci-topbar">
        <div className="ci-wordmark">
          TANGENT<span className="ci-wordmark-sub">card index for the mind</span>
        </div>
        <div className="ci-topbar-right">
          <span className="ci-regno">REG. NO. 0001 — FILED UNDER: YOU</span>
          <a href="#start" className="ci-btn ci-btn-solid">
            Open the box
          </a>
        </div>
      </header>

      <main>
        <section className="ci-hero">
          <div className="ci-hero-copy">
            <p className="ci-eyebrow">ACC. NO. 0001 · PERMANENT COLLECTION</p>
            <h1 className="ci-headline">
              A filing system for thoughts you intend to keep.
            </h1>
            <p className="ci-sub">
              Tangent is a note-taking app built like a card index: every
              thought gets a card, every card gets an address, and any address
              can point to another. Niklas Luhmann kept ninety thousand of
              these and called the box his second memory. Yours types faster.
            </p>
            <div className="ci-cta-row">
              <a href="#start" className="ci-btn ci-btn-solid">
                Start your file
              </a>
              <a href="#rules" className="ci-btn ci-btn-stamp">
                Read the filing rules
              </a>
            </div>
          </div>

          <div className="ci-hero-stack">
            <div className="ci-stack" aria-label="Linked index cards. Click an address to pull its card.">
              {cards.map((card) => {
                const pos = order.indexOf(card.id);
                return (
                  <article
                    key={card.id}
                    className={`ci-card ci-card-pos-${pos}`}
                    style={{ zIndex: 10 - pos }}
                    onClick={() => pull(card.id)}
                    aria-hidden={pos !== 0}
                  >
                    <div className="ci-card-head">
                      <span className="ci-card-id">{card.id}</span>
                      <span className="ci-card-tag">TANGENT</span>
                    </div>
                    <h3 className="ci-card-title">{card.title}</h3>
                    <p className="ci-card-body">{card.body}</p>
                  </article>
                );
              })}
            </div>
            <p className="ci-stack-hint">
              ↑ a working sample — click an{" "}
              <span className="ci-hint-ref">address</span> to pull its card
            </p>
          </div>
        </section>

        <section className="ci-rules" id="rules">
          <h2 className="ci-section-label">The filing rules</h2>
          <div className="ci-rules-grid">
            <article className="ci-rule">
              <span className="ci-rule-tab">RULE I — CAPTURE</span>
              <h3>One thought per card.</h3>
              <p>
                A global hotkey, a blank card, two seconds. No titles required,
                no folder to choose, nothing to decide while the thought is
                still warm.
              </p>
            </article>
            <article className="ci-rule">
              <span className="ci-rule-tab">RULE II — CONNECT</span>
              <h3>Link by address, not by mood.</h3>
              <p>
                Type <code>[[</code> and point a card at any other. Links run
                both ways, so every card quietly lists everyone who has ever
                cited it.
              </p>
            </article>
            <article className="ci-rule">
              <span className="ci-rule-tab">RULE III — RETURN</span>
              <h3>The box deals you old cards.</h3>
              <p>
                Each morning Tangent resurfaces a few cards beside whatever
                you’re writing. Most you’ll dismiss. The third one is why you
                keep a box.
              </p>
            </article>
          </div>
        </section>

        <section className="ci-letter-wrap">
          <article className="ci-letter">
            <p className="ci-letter-head">FROM THE ARCHIVE</p>
            <p>
              The sociologist Niklas Luhmann published seventy books and some
              four hundred articles. Asked how, he answered — politely, and more
              than once — that he didn’t do it alone: the card index did most of
              the work. He wrote his slips, filed them by address, and let the
              box surprise him.
            </p>
            <p>
              He called it his <em>Zweitgedächtnis</em> — second memory. He also
              admitted it was a better conversation partner than most
              colleagues.
            </p>
            <p className="ci-letter-sign">
              — filed 1981, retrieved whenever needed
            </p>
            <span className="ci-stamp-mark" aria-hidden="true">
              VERIFIED
            </span>
          </article>
        </section>

        <section className="ci-due" id="start">
          <article className="ci-due-card">
            <header className="ci-due-head">DATE DUE</header>
            <ul className="ci-due-rows" aria-hidden="true">
              <li>
                <s>NOV 12 1981</s>
                <span>returned, annotated</span>
              </li>
              <li>
                <s>JUN 03 2014</s>
                <span>returned, linked twice</span>
              </li>
              <li>
                <s>FEB 27 2023</s>
                <span>returned, became a chapter</span>
              </li>
              <li className="ci-due-you">
                <strong>TODAY</strong>
                <span>your card. unfiled.</span>
              </li>
            </ul>
            <p className="ci-due-line">
              Thoughts not filed are due to disappear.
            </p>
            <a href="#" className="ci-btn ci-btn-solid ci-btn-wide">
              Start your file — free
            </a>
            <p className="ci-due-fine">
              Local-first. Plain text. The box lives on your machine.
            </p>
          </article>
        </section>
      </main>

      <footer className="ci-drawer">
        <div className="ci-drawer-label">
          <span>TANGENT · A–Z</span>
        </div>
        <div className="ci-drawer-handle" aria-hidden="true" />
        <p className="ci-drawer-fine">© 2026 Tangent Filing Co. — no card ever lost</p>
      </footer>
    </div>
  );
}
