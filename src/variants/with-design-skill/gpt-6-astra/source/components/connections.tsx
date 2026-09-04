"use client";
import { useState, type CSSProperties } from "react";
import {
  Header,
  Footer,
  FAQ,
  Icon,
  StartButton,
  FeatureLine,
  useNotebook,
} from "./shared";

const graphNotes = [
  {
    id: "garden",
    title: "Creative practice",
    icon: "sparkle",
    x: 48,
    y: 44,
    type: "pink",
    text: "A garden is a practice, not a project. What if creative work could be the same?",
    tags: ["The art of noticing", "A little magazine", "Slow Sundays"],
  },
  {
    id: "book",
    title: "The art of noticing",
    icon: "book",
    x: 22,
    y: 17,
    type: "mint",
    text: "Pay attention. Be astonished. Tell about it. A line from Mary Oliver that keeps finding its way into my work.",
    tags: ["Creative practice", "Everyday rituals", "Slow Sundays"],
  },
  {
    id: "project",
    title: "A little magazine",
    icon: "note",
    x: 77,
    y: 23,
    type: "lilac",
    text: "Stories about people who make things, places we walk past, and small moments we want to remember.",
    tags: ["Creative practice", "The art of noticing", "Field notes"],
  },
  {
    id: "slow",
    title: "Slow Sundays",
    icon: "leaf",
    x: 25,
    y: 72,
    type: "mint",
    text: "Maybe making room is part of making something. The best ideas tend to find us when we take the long way home.",
    tags: ["Creative practice", "The art of noticing", "Everyday rituals"],
  },
  {
    id: "ritual",
    title: "Everyday rituals",
    icon: "headphones",
    x: 78,
    y: 66,
    type: "pink",
    text: "The walk before work. An album on repeat. Coffee by the window. Small rhythms that leave room to think.",
    tags: ["Slow Sundays", "Field notes", "The art of noticing"],
  },
  {
    id: "field",
    title: "Field notes",
    icon: "note",
    x: 54,
    y: 88,
    type: "lilac",
    text: "Observations from ordinary days. Collect a detail before it disappears. The world is a very good notebook.",
    tags: ["A little magazine", "Everyday rituals", "Creative practice"],
  },
];
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [1, 2],
];

export function ConnectionsPage() {
  const [selected, setSelected] = useState("garden");
  const [filter, setFilter] = useState("All thoughts");
  const note = graphNotes.find((n) => n.id === selected)!;
  const { openNotebook } = useNotebook();
  return (
    <div className="landing connections">
      <Header variant="connections" />
      <main>
        <section className="connections-hero">
          <div className="connections-copy">
            <div className="connections-label">
              <span />
              <span /> A second brain that joins the dots.
            </div>
            <h1>
              Your next idea
              <br /> is already
              <br /> in here.
            </h1>
            <p>
              A passing thought. Something you read.
              <br /> A question you can’t quite shake.
              <br /> Morrow brings them into the same orbit.
            </p>
            <div className="hero-actions">
              <StartButton>
                Connect your thinking <Icon name="plus" size={18} />
              </StartButton>
            </div>
            <a className="connections-explore-link" href="#how-it-works">
              See how things connect <Icon name="diagonal" size={15} />
            </a>
          </div>
          <div className="graph-stage">
            <div className="graph-topbar">
              <span>
                <Icon name="grid" size={14} /> A corner of your mind
              </span>
              <div aria-label="Filter the idea map">
                {["All thoughts", "Ideas", "Reading"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="thought-graph">
              <svg
                className="graph-edges"
                viewBox="0 0 700 540"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                {edges.map(([a, b]) => (
                  <path
                    key={`${a}-${b}`}
                    d={`M${graphNotes[a].x * 7} ${graphNotes[a].y * 5.4} Q${(graphNotes[a].x + graphNotes[b].x) * 3.5 + 40} ${(graphNotes[a].y + graphNotes[b].y) * 2.7 - 25} ${graphNotes[b].x * 7} ${graphNotes[b].y * 5.4}`}
                    className={
                      graphNotes[a].id === selected ||
                      graphNotes[b].id === selected
                        ? "edge-active"
                        : ""
                    }
                  />
                ))}
                <g fill="#A58BB8">
                  <circle cx="71" cy="231" r="3" />
                  <circle cx="562" cy="77" r="3" />
                  <circle cx="442" cy="458" r="3" />
                  <circle cx="651" cy="254" r="3" />
                  <circle cx="160" cy="491" r="3" />
                  <circle cx="324" cy="43" r="3" />
                </g>
                <g stroke="#6D567E" strokeDasharray="3 5">
                  <path d="M71 231 154 92M562 77 539 124M442 458 378 475M651 254 546 356M160 491 175 389M324 43 154 92" />
                </g>
              </svg>
              {graphNotes.map((n) => (
                <button
                  key={n.id}
                  className={`graph-node node-${n.type} ${selected === n.id ? "node-selected" : ""} ${(filter === "Reading" && n.id !== "book") || (filter === "Ideas" && !["garden", "project"].includes(n.id)) ? "node-muted" : ""}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` } as CSSProperties}
                  aria-pressed={n.id === selected}
                  onClick={() => setSelected(n.id)}
                >
                  <span className="graph-node-icon">
                    <Icon name={n.icon} size={n.id === "garden" ? 31 : 22} />
                  </span>
                  <span>{n.title}</span>
                  {n.id === "garden" && (
                    <small>It started with a thought.</small>
                  )}
                </button>
              ))}
            </div>
            <div className="graph-bottom">
              <span className="graph-legend">
                <i /> Your thoughts, connected
              </span>
              <span>
                Choose a thought to follow its thread{" "}
                <Icon name="diagonal" size={13} />
              </span>
            </div>
          </div>
        </section>
        <section
          className="connection-inspector"
          id="how-it-works"
          aria-live="polite"
        >
          <div className="inspector-note">
            <span className="inspector-icon">
              <Icon name={note.icon} size={26} />
            </span>
            <div>
              <span className="inspector-label">A thought in focus</span>
              <h2>{note.title}</h2>
            </div>
          </div>
          <p>{note.text}</p>
          <div className="inspector-related">
            <span>Connected to</span>
            <div>
              {note.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    const next = graphNotes.find((n) => n.title === tag);
                    if (next) setSelected(next.id);
                  }}
                >
                  <Icon name="link" size={12} />
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <button
            className="inspector-open"
            aria-label={`Open ${note.title} in notebook`}
            onClick={() =>
              openNotebook(
                ["ritual", "field"].includes(note.id) ? "slow" : note.id,
              )
            }
          >
            <Icon name="diagonal" size={22} />
          </button>
        </section>
        <section className="connections-story" id="made-for-you">
          <div>
            <h2>
              You don’t think
              <br /> in straight lines.
            </h2>
            <p>Why should your notes?</p>
          </div>
          <div className="connections-story-features">
            <FeatureLine icon="note" title="Start anywhere">
              A spark of an idea is enough. You don’t need to know where it
              belongs yet.
            </FeatureLine>
            <FeatureLine icon="link" title="Follow a familiar thread">
              Keep related thoughts close. The interesting part is often the
              space between them.
            </FeatureLine>
            <FeatureLine icon="sparkle" title="See the bigger picture">
              Step back from a single note. Find new meaning in what you already
              know.
            </FeatureLine>
          </div>
        </section>
        <section className="connections-cta">
          <div className="orbit-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <h2>
            Make space for
            <br /> your next connection.
          </h2>
          <StartButton>
            Start with one thought <Icon name="plus" size={18} />
          </StartButton>
        </section>
        <FAQ variant="connections" />
      </main>
      <Footer line="A place for things to come together." />
    </div>
  );
}
