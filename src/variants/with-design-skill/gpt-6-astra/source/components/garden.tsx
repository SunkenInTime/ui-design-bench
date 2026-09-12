"use client";
import { useState } from "react";
import {
  Header,
  Footer,
  FAQ,
  Icon,
  StartButton,
  DoodleFlower,
  FeatureLine,
  useNotebook,
  MorrowMark,
  sampleNotes,
} from "./shared";

export function BotanicalArt() {
  return (
    <svg
      className="botanical-art"
      viewBox="0 0 430 500"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M225 474C208 368 182 247 217 86"
        stroke="#31583E"
        strokeWidth="3"
      />
      <path
        d="M211 222C96 217 65 107 76 55c94 4 166 75 135 167Z"
        fill="#AEC58D"
      />
      <path
        d="M214 305c-105 29-151-33-164-108 97-26 165 23 164 108Z"
        fill="#789D65"
      />
      <path
        d="M228 394C117 412 72 354 73 284c92-8 158 31 155 110Z"
        fill="#AEC58D"
      />
      <path
        d="M207 208C300 201 342 114 324 51c-94 22-143 82-117 157Z"
        fill="#678956"
      />
      <path
        d="M214 308c123-12 167-112 138-173-93 5-159 78-138 173Z"
        fill="#B8CA9C"
      />
      <path
        d="M225 412c95-1 156-93 145-163-87 6-160 79-145 163Z"
        fill="#7E9E6A"
      />
      <g stroke="#31583E" strokeWidth="1.1" opacity=".5">
        <path d="m82 67 130 155M60 211l154 94M84 299l141 98M316 65 209 209M343 149 215 309M363 263 225 410" />
      </g>
    </svg>
  );
}

function GardenCollage() {
  const { openNotebook } = useNotebook();
  return (
    <div
      className="garden-collage"
      aria-label="A growing collection of connected notes"
    >
      <div className="garden-circle" />
      <BotanicalArt />
      <svg
        className="garden-thread"
        viewBox="0 0 620 610"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M165 195C82 225 153 406 250 408S483 544 524 379 458 164 361 175"
          stroke="#73896E"
          strokeWidth="1.3"
          strokeDasharray="5 6"
        />
        <circle cx="250" cy="408" r="5" fill="#F3F7F0" stroke="#73896E" />
      </svg>
      <button
        className="garden-note garden-note-white"
        onClick={() => openNotebook("slow")}
      >
        <span className="note-topline">
          <Icon name="note" size={15} /> A passing thought<span>↗</span>
        </span>
        <h3>
          A slower kind
          <br /> of Sunday
        </h3>
        <p>
          Maybe making room is part
          <br /> of making something.
        </p>
        <span className="note-tag">Everyday thoughts</span>
      </button>
      <button
        className="garden-note garden-note-purple"
        onClick={() => openNotebook("book")}
      >
        <span className="note-topline">
          <Icon name="book" size={15} /> From the bookshelf
        </span>
        <h3>
          “Pay attention.
          <br /> Be astonished.
          <br /> Tell about it.”
        </h3>
        <p>Mary Oliver</p>
        <span className="note-tag">
          <Icon name="link" size={12} /> 2 connections
        </span>
      </button>
      <button
        className="garden-note garden-note-green"
        onClick={() => openNotebook("garden")}
      >
        <Icon name="leaf" size={26} />
        <div>
          <h3>
            A garden is
            <br /> never finished.
          </h3>
          <p>Neither is a good idea.</p>
        </div>
        <span className="note-mini-link">
          <Icon name="link" size={13} /> Little discoveries
        </span>
      </button>
      <div className="garden-handwritten">
        A little space to grow.
        <svg
          width="91"
          height="47"
          viewBox="0 0 91 47"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 40C24 41 43 23 43 10s-17-7-8 4 28 19 49-2m-11 1 13-4-1 14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="garden-connected">
        <span /> One thought leads to another
      </div>
    </div>
  );
}

export function ThoughtPreview({
  mode = "capture",
  electric = false,
}: {
  mode?: string;
  electric?: boolean;
}) {
  const [selected, setSelected] = useState("slow");
  const [query, setQuery] = useState("");
  const { openNotebook } = useNotebook();
  const note = sampleNotes.find((n) => n.id === selected)!;
  return (
    <div className={`thought-preview ${electric ? "preview-electric" : ""}`}>
      <div className="preview-window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>
          <MorrowMark /> My little universe
        </span>
        <Icon name="grid" size={13} />
      </div>
      <div className="preview-inner">
        <aside className="preview-sidebar">
          <div className="preview-person">
            <span>J</span> Jamie’s space
          </div>
          <label className="preview-search">
            <Icon name="search" size={13} />
            <input
              aria-label="Search preview notes"
              value={query}
              placeholder="Find anything"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="preview-nav-label">
            <Icon name="grid" size={14} /> All thoughts
          </div>
          {sampleNotes
            .filter((n) =>
              `${n.title} ${n.text}`
                .toLowerCase()
                .includes(query.toLowerCase()),
            )
            .map((n) => (
              <button
                key={n.id}
                onClick={() => setSelected(n.id)}
                className={n.id === selected ? "active" : ""}
              >
                <Icon name="note" size={13} />
                <span>{n.title}</span>
              </button>
            ))}
          {!sampleNotes.some((n) =>
            `${n.title} ${n.text}`.toLowerCase().includes(query.toLowerCase()),
          ) && <p className="preview-empty">No matching notes</p>}
          <button className="preview-new" onClick={() => openNotebook()}>
            <Icon name="plus" size={13} /> New thought
          </button>
          <div className="preview-sidebar-bottom">
            <Icon name="lock" size={13} /> Just for you
          </div>
        </aside>
        <article className="preview-document">
          <div className="preview-breadcrumb">
            {mode === "connect"
              ? "Connected thoughts"
              : mode === "return"
                ? "Something worth revisiting"
                : note.collection}
            <Icon name="diagonal" size={14} />
          </div>
          <span className="preview-emoji">
            {selected === "garden"
              ? "❋"
              : selected === "book"
                ? "☼"
                : selected === "project"
                  ? "✳"
                  : "☕"}
          </span>
          <h3>{note.title}</h3>
          <p>{note.text.split("\n\n")[0]}</p>
          <p>{note.text.split("\n\n")[1]}</p>
          <blockquote>
            {selected === "slow"
              ? "Maybe making room is part of making something."
              : "Leave a little room for the unexpected."}
          </blockquote>
          <div className="preview-related">
            <span>
              <Icon name="link" size={13} /> A familiar thread
            </span>
            <button
              onClick={() =>
                setSelected(selected === "garden" ? "book" : "garden")
              }
            >
              <Icon name="leaf" size={15} />
              {selected === "garden"
                ? "The art of noticing"
                : "A garden is never finished"}
              <Icon name="chevron" size={13} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export function GardenPage() {
  const [mode, setMode] = useState("capture");
  return (
    <div className="landing garden">
      <Header variant="garden" />
      <main>
        <section className="garden-hero">
          <div className="garden-intro">
            <div className="garden-intro-label">
              <span className="tiny-flower">✳</span> Meet your second nature.
            </div>
            <h1>
              A little room
              <br /> for your
              <br /> whole mind.
            </h1>
            <p>
              Passing thoughts. Deep dives. Wild little ideas.
              <br className="desktop-break" /> A home for everything you don’t
              want to forget.
            </p>
            <div className="hero-actions">
              <StartButton>
                Start your space <Icon name="plus" size={18} />
              </StartButton>
              <a className="quiet-link" href="#how-it-works">
                Take a little look <Icon name="diagonal" size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <Icon name="check" size={14} /> Yours to try. No account needed.
            </div>
          </div>
          <GardenCollage />
        </section>
        <div className="garden-belonging">
          <span>For the beautifully busy mind.</span>
          <div>
            <Icon name="book" size={19} /> The readers
          </div>
          <div>
            <Icon name="sparkle" size={19} /> The daydreamers
          </div>
          <div>
            <Icon name="leaf" size={19} /> The lifelong learners
          </div>
          <div>
            <Icon name="note" size={19} /> The “let me write that down” people
          </div>
        </div>
        <section className="garden-workflow" id="how-it-works">
          <div className="garden-section-intro">
            <h2>
              Less holding on.
              <br /> More connecting dots.
            </h2>
            <p>
              Your mind is for having ideas.
              <br /> Give them somewhere to go.
            </p>
          </div>
          <div className="garden-workflow-content">
            <div
              className="garden-tabs"
              role="tablist"
              aria-label="Explore Morrow features"
            >
              {[
                [
                  "capture",
                  "note",
                  "Catch the little things.",
                  "A line from a book. A shower thought. That thing you’ll definitely remember. Get it down before it’s gone.",
                ],
                [
                  "connect",
                  "link",
                  "Let your ideas meet.",
                  "A note from last month might be the missing piece in today’s project. Follow a thread and see where it goes.",
                ],
                [
                  "return",
                  "sparkle",
                  "Find your way back.",
                  "Your good ideas are still here. Search a word, revisit an old note, and pick up where your mind left off.",
                ],
              ].map(([id, icon, title, text]) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={mode === id}
                  aria-controls="garden-feature-preview"
                  onClick={() => setMode(id)}
                  className={mode === id ? "active" : ""}
                >
                  <Icon name={icon} size={23} />
                  <div>
                    <h3>{title}</h3>
                    {mode === id && <p>{text}</p>}
                  </div>
                </button>
              ))}
            </div>
            <div id="garden-feature-preview" role="tabpanel">
              <ThoughtPreview mode={mode} />
            </div>
          </div>
        </section>
        <section className="garden-promise" id="made-for-you">
          <DoodleFlower />
          <div>
            <h2>
              You don’t need to
              <br /> have it all figured out.
            </h2>
            <p>
              No perfect folders. No elaborate system. Just a place to begin,
              and the freedom to let your thinking grow.
            </p>
            <StartButton>
              Make yourself at home <Icon name="plus" size={18} />
            </StartButton>
          </div>
          <div className="garden-promise-features">
            <FeatureLine icon="leaf" title="Start small">
              One thought is more than enough.
            </FeatureLine>
            <FeatureLine icon="link" title="Follow your curiosity">
              Make room for unexpected connections.
            </FeatureLine>
            <FeatureLine icon="lock" title="Keep it personal">
              A space that belongs to you.
            </FeatureLine>
          </div>
        </section>
        <FAQ variant="garden" />
      </main>
      <Footer />
    </div>
  );
}
