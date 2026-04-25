type Variant = "one" | "two" | "three" | "four" | "five";

const notes = [
  "meeting thread",
  "book margin",
  "idea spark",
  "research trail",
  "decision log",
];

const memoryCards = [
  ["Capture", "Voice, clips, scans, stray lines."],
  ["Connect", "Backlinks form living context."],
  ["Recall", "Answers arrive with sources."],
];

const variantCopy: Record<Variant, { eyebrow: string; title: string; body: string }> = {
  one: {
    eyebrow: "quiet recall",
    title: "A second brain that keeps your thinking findable.",
    body: "Collect notes, conversations, files, and flashes of insight in one calm workspace that reconnects them when they matter.",
  },
  two: {
    eyebrow: "neural desk",
    title: "Turn every note into a navigable thought map.",
    body: "A visual memory layer links fragments into trails, clusters, and answers without making your workspace feel busy.",
  },
  three: {
    eyebrow: "field journal",
    title: "Capture life in the moment. Revisit it with context.",
    body: "Fast notes, warm organization, and resurfacing that feels personal, like opening the right notebook on the right day.",
  },
  four: {
    eyebrow: "knowledge terminal",
    title: "Your ideas, indexed like an operating system for memory.",
    body: "Dense, direct, and built for people who live in research, meetings, projects, and decisions all at once.",
  },
  five: {
    eyebrow: "private archive",
    title: "A refined home for the work your mind keeps returning to.",
    body: "A polished personal knowledge vault with elegant capture, deliberate review, and retrieval that respects your attention.",
  },
};

export function SecondBrainLanding({ variant }: { variant: Variant }) {
  const copy = variantCopy[variant];

  return (
    <main className={`landing landing-${variant}`}>
      <section className="hero-shell" aria-labelledby={`${variant}-title`}>
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id={`${variant}-title`}>{copy.title}</h1>
          <p className="lede">{copy.body}</p>
          <div className="actions">
            <a href="#preview" className="primary-action">
              Start capturing
            </a>
            <a href="#memory" className="secondary-action">
              See the system
            </a>
          </div>
        </div>

        <div className="brain-visual" id="preview" aria-label="Second brain preview">
          <div className="visual-topline">
            <span>Atlas Notes</span>
            <span>Synced now</span>
          </div>
          <div className="capture-line">Ask: What did I decide about the launch?</div>
          <div className="node-field">
            {notes.map((note, index) => (
              <span key={note} style={{ "--i": index } as React.CSSProperties}>
                {note}
              </span>
            ))}
          </div>
          <div className="answer-card">
            <strong>Launch decision</strong>
            <p>Ship the private beta after onboarding notes, pricing research, and support macros are linked.</p>
          </div>
        </div>
      </section>

      <section className="memory-band" id="memory" aria-label="Second brain workflow">
        {memoryCards.map(([title, text]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
