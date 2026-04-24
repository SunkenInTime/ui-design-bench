import Link from "next/link";

export type VariantId = "one" | "two" | "three" | "four" | "five";

type Variant = {
  id: VariantId;
  path: string;
  label: string;
  theme: string;
  deck: string;
  headline: string;
  copy: string;
  cta: string;
  secondary: string;
  mode: string;
  signature: string;
  proof: string[];
  features: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
};

const variants: Record<VariantId, Variant> = {
  one: {
    id: "one",
    path: "/one",
    label: "One",
    theme: "cartography",
    deck: "Cortical cartography",
    headline: "Cortex Notes",
    copy:
      "A second brain that turns stray notes into a living map of projects, decisions, people, and ideas.",
    cta: "Start mapping",
    secondary: "Watch it connect",
    mode: "Atlas mode",
    signature: "A neural map that remembers why each thought mattered.",
    proof: ["44 linked insights today", "12 decisions resurfaced", "3 projects gaining signal"],
    features: [
      {
        eyebrow: "Capture",
        title: "Fast notes with context",
        body:
          "Clip, dictate, or type without filing first. Cortex adds time, source, and project gravity as you go.",
      },
      {
        eyebrow: "Connect",
        title: "Backlinks that explain themselves",
        body:
          "Every connection includes the reason, so your knowledge graph reads like memory instead of trivia.",
      },
      {
        eyebrow: "Return",
        title: "The right thought comes back",
        body:
          "Daily recall surfaces abandoned ideas, unresolved questions, and notes that suddenly became useful.",
      },
    ],
  },
  two: {
    id: "two",
    path: "/two",
    label: "Two",
    theme: "greenhouse",
    deck: "Organic memory garden",
    headline: "Cortex Notes",
    copy:
      "A calm note-taking system where ideas germinate, cross-pollinate, and become durable thinking paths.",
    cta: "Grow the archive",
    secondary: "See today",
    mode: "Garden mode",
    signature: "Notes that grow from seedlings into connected plans.",
    proof: ["8 ideas in bloom", "27 sources composted", "6 themes taking root"],
    features: [
      {
        eyebrow: "Seed",
        title: "Tiny thoughts are welcome",
        body:
          "A scratch line can become a meeting note, a reading trail, or the start of a research canopy.",
      },
      {
        eyebrow: "Tend",
        title: "Gentle prompts, not chores",
        body:
          "Cortex asks for just enough reflection to keep knowledge alive without turning capture into admin.",
      },
      {
        eyebrow: "Harvest",
        title: "Seasonal views of your mind",
        body:
          "Cluster notes by momentum, curiosity, deadlines, or recurring themes when it is time to produce.",
      },
    ],
  },
  three: {
    id: "three",
    path: "/three",
    label: "Three",
    theme: "console",
    deck: "Mission-control recall",
    headline: "Cortex Notes",
    copy:
      "A high-signal command surface for builders who need decisions, references, and next actions instantly.",
    cta: "Open command",
    secondary: "Scan signal",
    mode: "Console mode",
    signature: "A dense cockpit for turning knowledge into execution.",
    proof: ["96% recall confidence", "19 open loops tracked", "4 briefs ready"],
    features: [
      {
        eyebrow: "Index",
        title: "Everything has coordinates",
        body:
          "People, meetings, docs, and tasks resolve into a single command palette with sharp filters.",
      },
      {
        eyebrow: "Resolve",
        title: "Decisions stay attached",
        body:
          "Tradeoffs, owners, deadlines, and evidence travel with the final call instead of vanishing in chat.",
      },
      {
        eyebrow: "Execute",
        title: "Briefs assemble themselves",
        body:
          "Ask for a project brief and Cortex gathers the notes, source links, risks, and outstanding questions.",
      },
    ],
  },
  four: {
    id: "four",
    path: "/four",
    label: "Four",
    theme: "atelier",
    deck: "Editorial thought studio",
    headline: "Cortex Notes",
    copy:
      "A refined writing room for shaping raw research into essays, strategy memos, product ideas, and talks.",
    cta: "Compose with memory",
    secondary: "Browse stacks",
    mode: "Studio mode",
    signature: "An elegant surface where research becomes finished work.",
    proof: ["5 drafts in motion", "31 excerpts tagged", "2 outlines rebuilt"],
    features: [
      {
        eyebrow: "Collect",
        title: "Research with a spine",
        body:
          "Quotes, clips, and marginalia collect around the argument you are actually trying to make.",
      },
      {
        eyebrow: "Arrange",
        title: "Move ideas like objects",
        body:
          "Stack cards, compare claims, and pull supporting notes into an outline without losing provenance.",
      },
      {
        eyebrow: "Publish",
        title: "Export polished thinking",
        body:
          "Turn connected notes into a memo, brief, article, or script with citations and unresolved gaps intact.",
      },
    ],
  },
  five: {
    id: "five",
    path: "/five",
    label: "Five",
    theme: "signal",
    deck: "Ambient memory radar",
    headline: "Cortex Notes",
    copy:
      "A quiet second brain that listens for weak signals across your notes and shows what is becoming important.",
    cta: "Tune the signal",
    secondary: "Preview radar",
    mode: "Radar mode",
    signature: "A luminous radar for the thoughts trying to reach you.",
    proof: ["14 weak signals found", "7 themes converging", "2 questions heating up"],
    features: [
      {
        eyebrow: "Sense",
        title: "Patterns emerge early",
        body:
          "Cortex spots repeated language, stalled questions, and unlikely overlaps before they become obvious.",
      },
      {
        eyebrow: "Focus",
        title: "Attention gets tuned",
        body:
          "A daily radar view separates urgent noise from the ideas that keep quietly returning.",
      },
      {
        eyebrow: "Remember",
        title: "Memory becomes ambient",
        body:
          "You do not browse an archive. The archive leans forward when a note, person, or project becomes relevant.",
      },
    ],
  },
};

const variantOrder: VariantId[] = ["one", "two", "three", "four", "five"];

export function SecondBrainLanding({ variantId }: { variantId: VariantId }) {
  const variant = variants[variantId];

  return (
    <main className={`brain-page brain-${variant.theme}`}>
      <section className="brain-hero" aria-labelledby={`${variant.id}-title`}>
        <div className="brain-copy">
          <p className="brain-deck">{variant.deck}</p>
          <h1 id={`${variant.id}-title`}>{variant.headline}</h1>
          <p className="brain-lede">{variant.copy}</p>

          <div className="brain-actions" aria-label="Primary actions">
            <Link className="brain-button brain-button-primary" href={variant.path}>
              <span aria-hidden="true">+</span>
              {variant.cta}
            </Link>
            <Link className="brain-button brain-button-ghost" href={nextPath(variant.id)}>
              <span aria-hidden="true">&gt;</span>
              {variant.secondary}
            </Link>
          </div>

          <div className="brain-proof" aria-label="Product signals">
            {variant.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <ProductVisual variant={variant} />
      </section>

      <section className="brain-feature-band" aria-label="Second brain capabilities">
        <p className="brain-section-kicker">{variant.mode}</p>
        <h2>{variant.signature}</h2>
        <div className="brain-feature-grid">
          {variant.features.map((feature) => (
            <article className="brain-feature-card" key={feature.title}>
              <p>{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <span>{feature.body}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProductVisual({ variant }: { variant: Variant }) {
  return (
    <div className="brain-visual" aria-label={`${variant.mode} product preview`}>
      <div className="visual-shell">
        <div className="visual-topbar">
          <span />
          <span />
          <span />
          <p>{variant.mode}</p>
        </div>

        <div className="visual-stage">
          <div className="visual-note visual-note-a">
            <small>Thought</small>
            <strong>Second brain architecture</strong>
            <p>Capture now. Organize when the pattern appears.</p>
          </div>
          <div className="visual-note visual-note-b">
            <small>Recall</small>
            <strong>Meeting thread</strong>
            <p>3 related decisions and 2 unresolved questions.</p>
          </div>
          <div className="visual-note visual-note-c">
            <small>Signal</small>
            <strong>Research cluster</strong>
            <p>Knowledge graph, memory cue, project brief.</p>
          </div>

          <div className="visual-network" aria-hidden="true">
            <span className="node node-a" />
            <span className="node node-b" />
            <span className="node node-c" />
            <span className="node node-d" />
            <span className="node node-e" />
            <i className="line line-a" />
            <i className="line line-b" />
            <i className="line line-c" />
            <i className="line line-d" />
          </div>

          <div className="visual-sidebar">
            <p>Today</p>
            <span>Idea resurfaced</span>
            <span>Draft ready</span>
            <span>Source linked</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function nextPath(current: VariantId) {
  const index = variantOrder.indexOf(current);
  const next = variantOrder[(index + 1) % variantOrder.length];

  return variants[next].path;
}
