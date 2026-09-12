"use client";

import { useState } from "react";

type Card = {
  id: string;
  title: string;
  body: string;
  hand: string;
  stamp: string;
  seeIdx: number;
};

const CARDS: Card[] = [
  {
    id: "A",
    title: "What a note is for",
    body: "Not storage. A note exists to be met again — years later, mid-thought, by someone who forgot writing it.",
    hand: "this is the whole product ↑",
    stamp: "FILED 2019",
    seeIdx: 2,
  },
  {
    id: "B",
    title: "Atomic thoughts",
    body: "One idea per card. Small enough to combine, precise enough to find again.",
    hand: "big ideas are compounds",
    stamp: "FILED 2021",
    seeIdx: 3,
  },
  {
    id: "C",
    title: "Why links beat folders",
    body: "A folder asks \u201cwhere does this go?\u201d A link asks \u201cwhat is this like?\u201d Only one of those questions makes you smarter.",
    hand: "no folders. ever.",
    stamp: "FILED 2020",
    seeIdx: 0,
  },
  {
    id: "D",
    title: "The serendipity engine",
    body: "Open any card and Substrate quietly deals three related ones from your past self onto the table.",
    hand: "it feels like cheating",
    stamp: "FILED 2023",
    seeIdx: 1,
  },
  {
    id: "E",
    title: "The daily log",
    body: "Today\u2019s card is always on top. Yesterday\u2019s is already linking itself to things you won\u2019t write until next year.",
    hand: "write today, thank yourself later",
    stamp: "FILED TODAY",
    seeIdx: 2,
  },
];

export default function CardDeck() {
  const [active, setActive] = useState(0);

  return (
    <div className="deck-wrap">
      <div className="deck">
        {CARDS.map((card, i) => {
          const rel = (i - active + CARDS.length) % CARDS.length;
          const front = rel === 0;
          return (
            <article
              key={card.id}
              className={"card" + (front ? " front" : "")}
              style={{
                zIndex: CARDS.length - rel,
                transform:
                  rel === 0
                    ? "rotate(0deg) translateY(0)"
                    : `rotate(${(i % 2 === 0 ? 1 : -1) * (3 + rel * 1.5)}deg) translateY(${rel * 12}px) scale(${1 - rel * 0.03})`,
              }}
              onClick={() => !front && setActive(i)}
            >
              <header className="card-head">
                <span>SUBSTRATE</span>
                <span>CARD Nº 00{i + 1}</span>
              </header>
              <h3>{card.title}</h3>
              <p className="card-body">{card.body}</p>
              <p className="hand" aria-hidden="true">
                {card.hand}
              </p>
              <footer className="card-foot">
                {front ? (
                  <button
                    type="button"
                    className="seealso"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(card.seeIdx);
                    }}
                  >
                    SEE ALSO → {CARDS[card.seeIdx].title}
                  </button>
                ) : (
                  <span className="seealso ghost">SEE ALSO → …</span>
                )}
                <span className="stamp" aria-hidden="true">
                  {card.stamp}
                </span>
              </footer>
            </article>
          );
        })}
      </div>
      <div className="tabs" role="group" aria-label="Card index tabs">
        {CARDS.map((card, i) => (
          <button
            key={card.id}
            type="button"
            aria-pressed={i === active}
            className={"tab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            {card.id}
          </button>
        ))}
      </div>
      <p className="deck-hint">click a tab, or a card’s red cross-reference</p>
    </div>
  );
}
