"use client";

import { useState } from "react";
import { cards } from "./cards";
import styles from "./direction.module.css";

export function CardDrawer() {
  const [active, setActive] = useState(0);

  const bring = (call: string) => {
    const next = cards.findIndex((c) => c.call === call);
    if (next !== -1) setActive(next);
  };

  return (
    <figure className={styles.drawer}>
      <figcaption className={styles.drawerHead}>
        <span className={styles.drawerLabel}>Drawer 4 · mem — cap</span>
        <span className={styles.drawerCount}>5 of 2,140 cards</span>
      </figcaption>

      <div className={styles.stack}>
        {cards.map((card, i) => {
          const depth = (i - active + cards.length) % cards.length;
          return (
            <article
              key={card.call}
              className={styles.card}
              aria-hidden={depth !== 0}
              style={{
                zIndex: cards.length - depth,
                transform: `translate3d(${depth * 11}px, ${depth * -10}px, 0) rotate(${depth * 1}deg)`,
                filter: `brightness(${1 - depth * 0.07})`,
              }}
            >
              <header className={styles.cardTop}>
                <span className={styles.cardFiled}>filed {card.filed}</span>
                <span className={styles.cardCall}>{card.call}</span>
              </header>

              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardBody}>{card.body}</p>

              <p className={styles.cardTracings}>
                {card.tracings.map((t, n) => (
                  <span key={t}>
                    {n + 1}. {t}.
                  </span>
                ))}
              </p>

              <footer className={styles.cardFoot}>
                <span className={styles.cardBacklinks}>
                  {card.backlinks} cards point here
                </span>
                <span className={styles.cardRefs}>
                  <span className={styles.cardRefsLabel}>see also</span>
                  {card.seeAlso.map((ref) => (
                    <button
                      key={ref}
                      type="button"
                      className={styles.cardRef}
                      onClick={() => bring(ref)}
                      tabIndex={depth === 0 ? 0 : -1}
                    >
                      {ref}
                    </button>
                  ))}
                </span>
              </footer>
            </article>
          );
        })}
      </div>

      <div className={styles.tabs} role="group" aria-label="Cards in this drawer">
        {cards.map((card, i) => (
          <button
            key={card.call}
            type="button"
            className={`${styles.tab} ${i === active ? styles.tabOn : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            {card.call}
          </button>
        ))}
      </div>
    </figure>
  );
}
