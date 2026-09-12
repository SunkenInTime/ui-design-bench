"use client";
import { useState } from "react";
import {
  Header,
  Footer,
  FAQ,
  Icon,
  StartButton,
  FeatureLine,
  useNotebook,
  sampleNotes,
} from "./shared";

function LibraryPages() {
  const { openNotebook } = useNotebook();
  return (
    <div className="library-pages">
      <button
        className="library-sheet sheet-left"
        onClick={() => openNotebook("book")}
      >
        <span className="sheet-category">
          <Icon name="book" size={15} /> Passages to keep
        </span>
        <h3>
          The art
          <br /> of noticing.
        </h3>
        <div className="sheet-book-art" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>
          “Pay attention.
          <br /> Be astonished.
          <br /> Tell about it.”
        </p>
        <span className="sheet-attribution">Mary Oliver</span>
      </button>
      <button
        className="library-sheet sheet-middle"
        onClick={() => openNotebook("slow")}
      >
        <span className="sheet-category">
          <Icon name="note" size={15} /> A note to myself
        </span>
        <span className="sheet-date">Sunday, September 6</span>
        <h3>
          Some things come
          <br /> to you slowly.
        </h3>
        <p>
          A morning with no particular plan.
          <br /> Coffee cooling by the window.
          <br /> The book I’ve been meaning to finish.
        </p>
        <p>
          I used to think an empty afternoon
          <br /> was a thing to fill. Now I’m learning
          <br /> to leave a little space.
        </p>
        <div className="sheet-highlight">
          Maybe making room is part
          <br /> of making something.
        </div>
        <div className="sheet-footer">
          <span>
            <Icon name="link" size={13} /> The art of noticing
          </span>
          <Icon name="diagonal" size={16} />
        </div>
      </button>
      <button
        className="library-sheet sheet-right"
        onClick={() => openNotebook("garden")}
      >
        <span className="sheet-category">
          <Icon name="leaf" size={15} /> An idea taking root
        </span>
        <h3>
          A garden
          <br /> is never
          <br /> finished.
        </h3>
        <svg
          className="library-plant"
          viewBox="0 0 150 170"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M70 164C83 115 66 63 89 5M76 111C26 115 26 63 30 46c33 4 60 40 46 65ZM78 93c42-3 57-33 59-53-40-2-65 17-59 53ZM73 146c-37 4-53-20-54-39 33 1 52 15 54 39"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
        <span className="sheet-attribution">A thought worth tending.</span>
      </button>
    </div>
  );
}

export function LibraryPage() {
  const [filter, setFilter] = useState("Everything");
  const { openNotebook } = useNotebook();
  const filtered =
    filter === "Everything"
      ? sampleNotes
      : sampleNotes.filter((n) =>
          filter === "Reading"
            ? n.id === "book"
            : filter === "Ideas"
              ? ["garden", "project"].includes(n.id)
              : n.id === "slow",
        );
  return (
    <div className="landing library">
      <Header variant="library" />
      <main>
        <section className="library-hero">
          <div className="library-hero-ornament">
            <span />
            <Icon name="book" size={24} />
            <span />
          </div>
          <h1>
            A good thought deserves
            <br /> a place to stay.
          </h1>
          <p>
            A quiet home for your notes, discoveries, and unfinished ideas.
            <br /> Keep what moves you. Come back when you’re ready.
          </p>
          <StartButton>
            Begin your collection <Icon name="plus" size={17} />
          </StartButton>
          <span className="library-small-note">
            A second brain, with a little more soul.
          </span>
          <LibraryPages />
        </section>
        <div className="library-whisper">
          <Icon name="book" size={19} />
          <p>
            Not everything you save has to be useful. Some things are simply
            worth keeping.
          </p>
        </div>
        <section className="library-reading-room" id="how-it-works">
          <div className="library-reading-intro">
            <h2>
              Build a library
              <br /> of your own mind.
            </h2>
            <p>
              The quote that stayed with you. A half-formed idea. The ordinary
              day you want to remember.
            </p>
            <p>Collect them in one place. See what they become.</p>
            <div className="library-filter" aria-label="Filter the collection">
              {["Everything", "Reading", "Ideas", "Everyday"].map((f) => (
                <button
                  key={f}
                  aria-pressed={f === filter}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="library-catalog">
            <div className="library-catalog-heading">
              <span>Your collection</span>
              <span>
                {filtered.length}{" "}
                {filtered.length === 1 ? "thought" : "thoughts"}
              </span>
            </div>
            {filtered.map((note, i) => (
              <button
                key={note.id}
                className="library-catalog-note"
                onClick={() => openNotebook(note.id)}
              >
                <span className={`catalog-note-cover cover-${i}`}>
                  <Icon
                    name={
                      note.id === "book"
                        ? "book"
                        : note.id === "garden"
                          ? "leaf"
                          : "note"
                    }
                    size={23}
                  />
                </span>
                <span>
                  <small>{note.collection}</small>
                  <h3>{note.title}</h3>
                  <p>{note.text.split("\n")[0]}</p>
                </span>
                <Icon name="diagonal" size={17} />
              </button>
            ))}
          </div>
        </section>
        <section className="library-philosophy" id="made-for-you">
          <div className="library-quote-mark">“</div>
          <h2>
            Not a more productive mind.
            <br /> A more present one.
          </h2>
          <p>
            There is a particular kind of relief in writing something down.
            <br /> You can stop holding on to it. It will be here when you need
            it.
          </p>
          <div className="library-principles">
            <FeatureLine icon="note" title="Write without a plan">
              A blank page with no expectations.
            </FeatureLine>
            <FeatureLine icon="link" title="Keep the thread">
              Let one thought lead you to another.
            </FeatureLine>
            <FeatureLine icon="book" title="Return, whenever">
              Your collection grows at your pace.
            </FeatureLine>
          </div>
          <StartButton>Make a little space</StartButton>
        </section>
        <FAQ variant="library" />
      </main>
      <Footer line="For the things you want to remember." />
    </div>
  );
}
