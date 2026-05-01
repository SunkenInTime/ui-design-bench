const variants = {
  one: {
    label: "One",
    className: "",
    eyebrow: "Second brain for builders",
    title: "Your thoughts, with recall.",
    description:
      "Capture notes, decisions, highlights, and half-formed ideas into a connected workspace that resurfaces what matters when the moment needs it.",
    primary: "Start remembering",
    secondary: "Watch the map form",
    metric: "12k",
    metricLabel: "ideas linked this week",
    cards: [
      ["Inbox", "Quick capture from meetings, articles, and stray midnight ideas."],
      ["Knowledge graph", "Connections appear automatically as your archive grows."],
      ["Recall", "Ask a question and get the note, source, and context back."],
    ],
  },
  two: {
    label: "Two",
    className: "landing-two",
    eyebrow: "No more lost context",
    title: "Notes that hit back.",
    description:
      "A sharper, high-contrast command center for people who move fast and need their research, tasks, and references to keep up.",
    primary: "Open command center",
    secondary: "See workflows",
    metric: "3.8x",
    metricLabel: "faster project recall",
    cards: [
      ["Capture", "Drop fragments before they disappear."],
      ["Connect", "Backlinks, tags, and entities snap into place."],
      ["Deploy", "Turn research clusters into action-ready briefs."],
    ],
  },
  three: {
    label: "Three",
    className: "landing-three",
    eyebrow: "A calmer memory garden",
    title: "Grow a mind outside your mind.",
    description:
      "A reflective note space where daily logs, reading notes, and project knowledge compound gently into an always-available memory.",
    primary: "Plant your first note",
    secondary: "Tour the garden",
    metric: "84%",
    metricLabel: "of ideas rediscovered",
    cards: [
      ["Seed notes", "Capture loose thoughts without forcing structure too early."],
      ["Paths", "Follow trails between people, projects, books, and goals."],
      ["Harvest", "Collect summaries when a topic is ready to become work."],
    ],
  },
  four: {
    label: "Four",
    className: "landing-four",
    eyebrow: "Cognitive operating system",
    title: "Query your memory layer.",
    description:
      "A neon, technical landing page for a second brain that behaves like infrastructure: indexed, encrypted, and always ready for retrieval.",
    primary: "Run memory sync",
    secondary: "Read protocol",
    metric: "0.4s",
    metricLabel: "semantic recall latency",
    cards: [
      ["Index", "Every paragraph becomes searchable context."],
      ["Link", "Entities, sources, and timelines stay connected."],
      ["Answer", "Responses include provenance, confidence, and next steps."],
    ],
  },
  five: {
    label: "Five",
    className: "landing-five",
    eyebrow: "A private archive for deep work",
    title: "The library that writes back.",
    description:
      "A more literary, archival direction for founders, researchers, and writers who want durable knowledge instead of disposable documents.",
    primary: "Begin the archive",
    secondary: "Browse sample vault",
    metric: "9 yrs",
    metricLabel: "of searchable memory",
    cards: [
      ["Commonplace", "Save quotes, marginalia, and observations in one ritual."],
      ["Dossiers", "Build living files around people, markets, and themes."],
      ["Drafts", "Move from accumulated knowledge to clear written output."],
    ],
  },
} as const;

type VariantKey = keyof typeof variants;

export function SecondBrainLanding({ variantKey }: { variantKey: VariantKey }) {
  const variant = variants[variantKey];

  return (
    <main className={`landing ${variant.className}`}>
      <section className="hero-shell" id="capture">
        <div className="hero-copy">
          <p className="eyebrow">{variant.eyebrow}</p>
          <h1>{variant.title}</h1>
          <p className="hero-description">{variant.description}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#capture">
              {variant.primary}
            </a>
            <a className="secondary-action" href="#features">
              {variant.secondary}
            </a>
          </div>
        </div>

        <div className="brain-artifact" aria-label="Connected notes visualization">
          <div className="artifact-glow" />
          <div className="artifact-panel">
            <div className="panel-topline">
              <span>Memory graph</span>
              <span>Live recall</span>
            </div>
            <div className="orbital-map">
              <span className="connection connection-a" />
              <span className="connection connection-b" />
              <span className="connection connection-c" />
              <span className="node node-a" />
              <span className="node node-b" />
              <span className="node node-c" />
              <span className="node node-d" />
            </div>
            <div className="memory-stack">
              {variant.cards.map(([title, body], index) => (
                <article
                  className={`memory-card ${index === 1 ? "accent" : ""}`}
                  key={title}
                >
                  <h2>{title}</h2>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <dl className="feature-strip" id="features">
        <div>
          <dt>
            <span className="tabular-nums">{variant.metric}</span>
          </dt>
          <dd>{variant.metricLabel}</dd>
        </div>
        <div>
          <dt>
            <span>Auto</span>
          </dt>
          <dd>Backlinks, entities, and summaries keep your graph tidy.</dd>
        </div>
        <div>
          <dt>
            <span>Private</span>
          </dt>
          <dd>Your notes stay encrypted, portable, and under your control.</dd>
        </div>
      </dl>
    </main>
  );
}
