"use client";

import { useState } from "react";
import styles from "./palace.module.css";

const rooms = [
  {
    id: "library",
    name: "West Library",
    area: "The long room",
    excerpt:
      "Attention has a grain to it. Some hours are oak; some are dust. I keep both on the same shelf so I can feel the difference.",
    links: ["Kitchen", "Atrium"],
    dim: "22 × 14",
  },
  {
    id: "orangery",
    name: "Orangery",
    area: "Where questions winter",
    excerpt:
      "A few questions stay alive through the dark months. They need light, not answers. I walk them in the morning.",
    links: ["Atrium", "Archive"],
    dim: "18 × 10",
  },
  {
    id: "archive",
    name: "Archive",
    area: "Cool, dry, indexed",
    excerpt:
      "The argument I lost in 2019 lives here, labeled, not buried. It still has a corridor to the kitchen.",
    links: ["Orangery", "Observatory"],
    dim: "16 × 16",
  },
  {
    id: "atrium",
    name: "Atrium",
    area: "All corridors meet",
    excerpt:
      "Nothing is stored here. This is the weather of the house: whichever rooms you visited last still echo.",
    links: ["West Library", "Orangery", "Vestibule"],
    dim: "20 × 16",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    area: "Half-thoughts, kettle on",
    excerpt:
      "Most notes begin while the water heats. I used to lose them. Now the steam has a doorway.",
    links: ["West Library", "Vestibule"],
    dim: "14 × 10",
  },
  {
    id: "vestibule",
    name: "Vestibule",
    area: "The daily threshold",
    excerpt:
      "You do not enter the palace with a folder. You enter with whatever you were just carrying. One room is enough to start.",
    links: ["Atrium", "Kitchen", "Observatory"],
    dim: "12 × 8",
  },
  {
    id: "observatory",
    name: "Observatory",
    area: "Night notes",
    excerpt:
      "Ideas that arrive after the lamps are out. They are dim on purpose. Morning will decide if they keep a room.",
    links: ["Archive", "Vestibule"],
    dim: "16 × 11",
  },
] as const;

type RoomId = (typeof rooms)[number]["id"];

export function PalaceView() {
  const [active, setActive] = useState<RoomId>("vestibule");
  const room = rooms.find((item) => item.id === active) ?? rooms[5];

  return (
    <div className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />
      <header className={styles.top}>
        <p className={styles.mark}>Locus</p>
        <button
          className={styles.cta}
          type="button"
          onClick={() => setActive("vestibule")}
        >
          Lay the first stone
        </button>
      </header>

      <main id="content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Ground floor · the mind</p>
            <h1 className={styles.title}>
              A palace for
              <br />
              what you keep
            </h1>
            <p className={styles.lede}>
              You do not need more folders. You need rooms that remember each
              other — a place to house a thought, and a corridor to the next
              one.
            </p>
          </div>

          <div className={styles.sheet}>
            <div className={styles.planWrap}>
              <p className={styles.north} aria-hidden="true">
                N
              </p>
              <div
                className={styles.plan}
                role="group"
                aria-label="Rooms in the palace"
              >
                {rooms.map((item) => (
                  <button
                    key={item.id}
                    id={item.id}
                    type="button"
                    aria-pressed={active === item.id}
                    className={`${styles.room} ${styles[item.id]}`}
                    onClick={() => setActive(item.id)}
                  >
                    <span className={styles.roomName}>{item.name}</span>
                    <span className={styles.roomDim}>{item.dim}</span>
                  </button>
                ))}
              </div>
              <p className={styles.scale} aria-hidden="true">
                Scale 1 : 1 thought
              </p>
            </div>

            <aside className={styles.block} aria-live="polite">
              <p className={styles.blockLabel}>Title block</p>
              <dl className={styles.meta}>
                <div>
                  <dt>Project</dt>
                  <dd>Locus</dd>
                </div>
                <div>
                  <dt>Sheet</dt>
                  <dd>Mind, ground floor</dd>
                </div>
                <div>
                  <dt>Room</dt>
                  <dd>{room.name}</dd>
                </div>
                <div>
                  <dt>Use</dt>
                  <dd>{room.area}</dd>
                </div>
              </dl>
              <p className={styles.excerpt}>{room.excerpt}</p>
              <p className={styles.see}>
                Corridors to {room.links.join(", ")}
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.specs} aria-label="How the palace holds">
          <article>
            <h2>Bearing walls</h2>
            <p>
              A link is load-bearing or it is decoration. Locus only draws a
              corridor when two notes actually share weight.
            </p>
          </article>
          <article>
            <h2>The threshold</h2>
            <p>
              Each day has a vestibule. Drop what you are carrying. The house
              will walk it to the right room, or leave it by the door until
              morning.
            </p>
          </article>
          <article>
            <h2>Survey</h2>
            <p>
              Search is not a dumpster. It is a walk: you name a room, and the
              palace shows you every door that still opens onto it.
            </p>
          </article>
        </section>
      </main>

      <footer className={styles.foot}>
        <p>Locus · a second brain with a floor plan</p>
        <p>No folders. Rooms, corridors, weather.</p>
      </footer>
    </div>
  );
}
