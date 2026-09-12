"use client";
import {
  useState,
  useRef,
  type CSSProperties,
  type ReactNode,
  type PointerEvent,
  type KeyboardEvent,
} from "react";
import {
  Header,
  Footer,
  FAQ,
  Icon,
  StartButton,
  DoodleFlower,
  FeatureLine,
  useNotebook,
} from "./shared";

function Landscape() {
  return (
    <svg
      viewBox="0 0 260 180"
      className="landscape-art"
      role="img"
      aria-label="An illustrated sun setting over blue mountains"
    >
      <defs>
        <linearGradient id="sky" x2="0" y2="1">
          <stop stopColor="#E7A6A0" />
          <stop offset="1" stopColor="#F6D8B5" />
        </linearGradient>
      </defs>
      <path fill="url(#sky)" d="M0 0h260v180H0z" />
      <circle cx="164" cy="57" r="24" fill="#F8E6BF" />
      <path
        d="m0 98 24-13 18 9 31-26 21 6 30-26 27 25 23-7 36 32 26-15 24 14v83H0Z"
        fill="#8893A9"
      />
      <path
        d="m0 128 49-29 21 15 32-20 29 22 34-30 29 26 25-11 41 23v56H0Z"
        fill="#52677E"
      />
      <path
        d="m0 156 31-13 32 7 58-25 47 13 37-13 55 31v24H0Z"
        fill="#2D4E64"
      />
      <path
        d="M82 180c23-19 86-23 96-32s-7-12-21-16"
        stroke="#C6D0D2"
        strokeWidth="5"
        fill="none"
      />
      <path d="M15 19h17M23 14l5 5-5 5" stroke="#F0C9C4" />
    </svg>
  );
}

function MovableNote({
  id,
  className,
  children,
  offsets,
  setOffset,
}: {
  id: string;
  className: string;
  children: ReactNode;
  offsets: Record<string, { x: number; y: number }>;
  setOffset: (id: string, x: number, y: number) => void;
}) {
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null,
  );
  const offset = offsets[id] || { x: 0, y: 0 };
  function down(e: PointerEvent<HTMLButtonElement>) {
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: PointerEvent<HTMLButtonElement>) {
    if (drag.current)
      setOffset(
        id,
        Math.max(
          -65,
          Math.min(65, drag.current.ox + e.clientX - drag.current.x),
        ),
        Math.max(
          -50,
          Math.min(50, drag.current.oy + e.clientY - drag.current.y),
        ),
      );
  }
  function key(e: KeyboardEvent<HTMLButtonElement>) {
    const deltas: Record<string, [number, number]> = {
      ArrowLeft: [-10, 0],
      ArrowRight: [10, 0],
      ArrowUp: [0, -10],
      ArrowDown: [0, 10],
    };
    if (deltas[e.key]) {
      e.preventDefault();
      setOffset(
        id,
        Math.max(-65, Math.min(65, offset.x + deltas[e.key][0])),
        Math.max(-50, Math.min(50, offset.y + deltas[e.key][1])),
      );
    }
  }
  return (
    <article
      className={`pin-note ${className}`}
      style={
        {
          "--offset-x": `${offset.x}px`,
          "--offset-y": `${offset.y}px`,
        } as CSSProperties
      }
    >
      <button
        className="pin-drag-handle"
        aria-label={`Move ${id} note. Drag or use arrow keys.`}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onKeyDown={key}
      >
        <span />
        <span />
        <span />
      </button>
      {children}
    </article>
  );
}

export function PinboardPage() {
  const [offsets, setOffsets] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [checks, setChecks] = useState([true, false, false]);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const [pinned, setPinned] = useState("");
  const [arrangement, setArrangement] = useState(0);
  const { openNotebook } = useNotebook();
  const movable = {
    offsets,
    setOffset: (id: string, x: number, y: number) =>
      setOffsets((prev) => ({ ...prev, [id]: { x, y } })),
  };
  function shuffle() {
    const next = arrangement + 1;
    setArrangement(next);
    setOffsets(
      Object.fromEntries(
        ["idea", "quote", "weekend", "somewhere", "reminder", "yours"].map(
          (id, i) => [
            id,
            {
              x: Math.sin(next * 2 + i * 3) * 30,
              y: Math.cos(next + i * 2) * 25,
            },
          ],
        ),
      ),
    );
  }
  return (
    <div className="landing pinboard">
      <Header variant="pinboard" />
      <main>
        <section className="pinboard-hero">
          <div className="pinboard-title">
            <span className="pinboard-intro">
              <Icon name="sparkle" size={16} /> A happy place for a busy mind.
            </span>
            <h1>
              For everything
              <br /> on your mind.
            </h1>
            <p>
              The brilliant, the ordinary, the not-quite-anything-yet.
              <br /> Gather it all in Morrow. Make something of it later.
            </p>
            <StartButton>
              Come on in <Icon name="plus" size={19} />
            </StartButton>
            <span className="pinboard-footnote">
              Bring your thoughts. Leave the overthinking.
            </span>
          </div>
          <MovableNote id="idea" className="pin-idea" {...movable}>
            <span className="pin-small-label">
              <Icon name="sparkle" size={14} /> A tiny big idea
            </span>
            <button
              className="pin-content-button"
              onClick={() => openNotebook("project")}
            >
              <h3>
                What if we made
                <br /> a little magazine?
              </h3>
              <p>
                People, places & things
                <br /> we don’t want to forget.
              </p>
              <div className="pin-scribble" aria-hidden="true">
                ✳
              </div>
              <span className="pin-tag">Something to make</span>
            </button>
          </MovableNote>
          <MovableNote id="somewhere" className="pin-photo" {...movable}>
            <button
              className="pin-content-button"
              onClick={() => openNotebook("slow")}
            >
              <Landscape />
              <span>Somewhere with no signal.</span>
              <small>A little reminder to get outside.</small>
            </button>
          </MovableNote>
          <MovableNote id="quote" className="pin-quote" {...movable}>
            <button
              className="pin-content-button"
              onClick={() => openNotebook("book")}
            >
              <span className="pin-quote-mark">“</span>
              <h3>
                Pay attention.
                <br /> Be astonished.
                <br /> Tell about it.
              </h3>
              <p>Mary Oliver, always.</p>
              <span className="pin-tag">
                <Icon name="book" size={13} /> Words to keep
              </span>
            </button>
          </MovableNote>
          <MovableNote id="weekend" className="pin-weekend" {...movable}>
            <h3>
              A good sort
              <br /> of weekend.
            </h3>
            {[
              "Find a new coffee spot",
              "Read a real, paper book",
              "Absolutely nothing",
            ].map((label, i) => (
              <label key={label} className={checks[i] ? "pin-checked" : ""}>
                <input
                  type="checkbox"
                  checked={checks[i]}
                  onChange={() =>
                    setChecks((prev) => prev.map((c, j) => (j === i ? !c : c)))
                  }
                />
                <span>{label}</span>
              </label>
            ))}
            <span className="pin-weekend-star" aria-hidden="true">
              ☼
            </span>
          </MovableNote>
          <MovableNote id="reminder" className="pin-reminder" {...movable}>
            <button
              className="pin-content-button"
              onClick={() => openNotebook("garden")}
            >
              <span>Note to self:</span>
              <h3>
                You’re allowed
                <br /> to be a work
                <br /> in progress.
              </h3>
              <svg
                viewBox="0 0 160 17"
                width="160"
                height="17"
                aria-hidden="true"
              >
                <path
                  d="M4 8Q75 1 152 9M14 14Q79 7 144 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </MovableNote>
          {pinned && (
            <MovableNote id="yours" className="pin-yours" {...movable}>
              <span className="pin-small-label">Your fresh thought</span>
              <p>{pinned}</p>
              <button
                className="pin-remove"
                aria-label="Remove your pinned thought"
                onClick={() => setPinned("")}
              >
                <Icon name="close" size={15} />
              </button>
            </MovableNote>
          )}
          <div className="pinboard-tools">
            <span>
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M38 30C17 30 10 21 12 5m-7 8 8-9 7 9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              Move things around. This is your space.
            </span>
            <div>
              <button onClick={shuffle}>
                <Icon name="shuffle" size={16} /> Mix it up
              </button>
              <button onClick={() => setAdding(!adding)} aria-expanded={adding}>
                <Icon name="plus" size={17} /> Add a thought
              </button>
            </div>
            {adding && (
              <form
                className="pin-add-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (draft.trim()) {
                    setPinned(draft.trim());
                    setDraft("");
                    setAdding(false);
                  }
                }}
              >
                <label htmlFor="new-pin">What’s on your mind?</label>
                <input
                  id="new-pin"
                  autoFocus
                  maxLength={120}
                  placeholder="A thought worth keeping…"
                  required
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button type="submit">
                  Pin it <Icon name="plus" size={16} />
                </button>
              </form>
            )}
          </div>
        </section>
        <section className="pinboard-how" id="how-it-works">
          <div className="pinboard-how-heading">
            <DoodleFlower />
            <h2>
              Your mind is a whole world.
              <br /> Give it a little more room.
            </h2>
          </div>
          <div className="pinboard-features">
            <FeatureLine icon="plus" title="Drop it here">
              A good idea rarely arrives with a folder name. Save it first.
              Figure it out later.
            </FeatureLine>
            <FeatureLine icon="link" title="Put things together">
              That book, this project, yesterday’s thought. Sometimes the
              connection surprises you.
            </FeatureLine>
            <FeatureLine icon="search" title="Oh, there it is">
              When a thought comes back around, find the note you left for your
              future self.
            </FeatureLine>
          </div>
        </section>
        <section className="pinboard-invite" id="made-for-you">
          <div>
            <span className="pin-invite-handwriting">
              Yes, even that weird little idea.
            </span>
            <h2>
              Keep the things
              <br /> that make you, you.
            </h2>
            <p>
              A second brain shouldn’t feel like another job.
              <br /> It should feel like coming home.
            </p>
            <StartButton>
              Find your happy place <Icon name="plus" size={18} />
            </StartButton>
          </div>
          <div className="pin-invite-art" aria-hidden="true">
            <div className="pin-envelope">
              <div />
              <span>
                For my
                <br /> future self.
              </span>
              <DoodleFlower />
            </div>
            <span className="pin-postmark">
              Keep forever
              <br /> ♡
            </span>
          </div>
        </section>
        <FAQ variant="pinboard" />
      </main>
      <Footer line="A home for your beautifully busy mind." />
    </div>
  );
}
