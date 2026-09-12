"use client";

import { ArrowUpRight, BookOpen, Compass, Lightbulb, PencilSimple } from "@phosphor-icons/react";
import { useExperience } from "./experience";

const prompts = [
  { title: "Books & big ideas", icon: BookOpen, note: "A sentence worth keeping", body: "A passage, a new perspective, a question to come back to.\n\n", tags: ["reading"] },
  { title: "Everyday discoveries", icon: Lightbulb, note: "Something I noticed", body: "Today, something caught my attention.\n\n", tags: ["everyday"] },
  { title: "The next adventure", icon: Compass, note: "Somewhere I want to go", body: "A place, a plan, a little possibility.\n\n", tags: ["travel"] },
  { title: "Your unfinished ideas", icon: PencilSimple, note: "What if...", body: "It does not have to be a complete idea yet.\n\n", tags: ["creativity"] },
];

export function InterestShelf() {
  const { openNotebook } = useExperience();
  return <section className="interest-shelf" aria-label="Start with something on your mind">
    <div className="page-container"><p>A place for every part of you.</p><div className="interest-options">{prompts.map((prompt) => <button key={prompt.title} onClick={() => openNotebook({ title: prompt.note, body: prompt.body, tags: prompt.tags })}>
      <prompt.icon size={22} weight="light" aria-hidden="true" /><span>{prompt.title}</span><ArrowUpRight size={14} aria-hidden="true" />
    </button>)}</div></div>
  </section>;
}
