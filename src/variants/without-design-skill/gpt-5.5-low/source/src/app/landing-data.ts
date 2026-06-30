export type LandingVariant = {
  slug: string;
  label: string;
  name: string;
  theme: string;
  accent: string;
  headline: string;
  subhead: string;
  cta: string;
  secondary: string;
  metric: string;
  metricLabel: string;
  notes: string[];
  features: string[];
  insight: string;
};

export const variants: LandingVariant[] = [
  {
    slug: "one",
    label: "01",
    name: "Cortex",
    theme: "bg-[#f7f3ea] text-[#171512]",
    accent: "bg-[#0f5e5a] text-white",
    headline: "A living notebook for everything your mind keeps open.",
    subhead:
      "Cortex captures rough thoughts, links them to projects, and resurfaces the exact note when your work is ready for it.",
    cta: "Start remembering",
    secondary: "See the graph",
    metric: "18k",
    metricLabel: "linked thoughts organized without folders",
    notes: ["Meeting about launch", "Book quote on attention", "Idea: ambient inbox"],
    features: ["Daily capture", "Backlinks", "Recall prompts"],
    insight: "Your second brain should feel less like storage and more like momentum.",
  },
  {
    slug: "two",
    label: "02",
    name: "Mnemonic",
    theme: "bg-[#101313] text-[#f4fbf8]",
    accent: "bg-[#f1c45b] text-[#14110a]",
    headline: "Turn scattered notes into a map that answers back.",
    subhead:
      "Mnemonic builds relationships between notes as you write, giving every idea a path back to the people, sources, and decisions around it.",
    cta: "Build your map",
    secondary: "Browse memory lanes",
    metric: "4.8x",
    metricLabel: "faster return to buried context",
    notes: ["Decision trail", "Research shard", "Follow-up thread"],
    features: ["Semantic trails", "Source memory", "Decision logs"],
    insight: "A note is useful on day one. A connected note gets more useful every week.",
  },
  {
    slug: "three",
    label: "03",
    name: "Atlas Notes",
    theme: "bg-[#eef4f8] text-[#10202d]",
    accent: "bg-[#2d6cdf] text-white",
    headline: "Command your knowledge from one calm workspace.",
    subhead:
      "Atlas Notes keeps capture, retrieval, tasks, and synthesis in the same focused surface, so your thinking never gets stranded between tools.",
    cta: "Open workspace",
    secondary: "View workflows",
    metric: "7",
    metricLabel: "ways to retrieve a thought instantly",
    notes: ["Inbox", "Synthesis", "Next actions"],
    features: ["Universal search", "Project hubs", "Auto summaries"],
    insight: "The best archive is the one that keeps showing up while you work.",
  },
  {
    slug: "four",
    label: "04",
    name: "Kin",
    theme: "bg-[#fff8f0] text-[#251915]",
    accent: "bg-[#c0452d] text-white",
    headline: "A personal knowledge base with a memory for relationships.",
    subhead:
      "Kin remembers how ideas, people, projects, and moments connect, then turns your notes into a warm, navigable record of your life and work.",
    cta: "Start a constellation",
    secondary: "Explore connections",
    metric: "312",
    metricLabel: "contextual links created this month",
    notes: ["Ava feedback", "Q2 narrative", "Pattern: calmer planning"],
    features: ["People pages", "Timeline recall", "Context cards"],
    insight: "Knowledge is rarely isolated. Kin treats every note as part of a relationship.",
  },
  {
    slug: "five",
    label: "05",
    name: "Archive OS",
    theme: "bg-[#f5f7f2] text-[#151a12]",
    accent: "bg-[#315d35] text-white",
    headline: "Your notes, tasks, sources, and decisions in one thinking system.",
    subhead:
      "Archive OS gives serious note-takers a structured second brain with fast capture, durable organization, and reliable weekly review.",
    cta: "Design my system",
    secondary: "Review template",
    metric: "42%",
    metricLabel: "less time spent rebuilding context",
    notes: ["Capture queue", "Review ritual", "Knowledge debt"],
    features: ["PARA spaces", "Review cycles", "Task extraction"],
    insight: "A second brain works when the system is clear enough to trust on a busy day.",
  },
];

export function getVariant(slug: string) {
  const variant = variants.find((item) => item.slug === slug);

  if (!variant) {
    throw new Error(`Unknown landing variant: ${slug}`);
  }

  return variant;
}
