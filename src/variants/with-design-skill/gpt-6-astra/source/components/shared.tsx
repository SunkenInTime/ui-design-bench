"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    note: <path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8M8 16h5" />,
    link: (
      <>
        <path
          d="m10 14 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0"
          transform="translate(1 0) scale(.9 1)"
        />
      </>
    ),
    book: (
      <path d="M12 5v16M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Z" />
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    sparkle: (
      <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
    ),
    leaf: <path d="M19 3S4 2 4 12c0 5 5 8 9 5 5-3 6-14 6-14ZM5 20 15 8" />,
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
        <rect x="3" y="12" width="4" height="8" rx="2" />
        <rect x="17" y="12" width="4" height="8" rx="2" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    shuffle: (
      <path d="M3 6h3c4 0 8 12 12 12h3M17 14l4 4-4 4M3 18h3c2 0 4-3 5-5M13 8c2-2 3-2 5-2h3M17 2l4 4-4 4" />
    ),
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.note}
    </svg>
  );
}

export function MorrowMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 20C1-4 1 21 20 20C-4 39 21 39 20 20C39 44 39 19 20 20C44 1 19 1 20 20Z"
        stroke="currentColor"
        strokeWidth="3.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/with-design-skill/gpt-6-astra/1" aria-label="Morrow home">
      <MorrowMark />
      <span>morrow</span>
    </Link>
  );
}

type Note = { id: string; title: string; text: string; collection: string };
export const sampleNotes: Note[] = [
  {
    id: "slow",
    title: "A slower kind of Sunday",
    text: "Leave the phone at home. Take the long way to the coffee shop.\n\nI've been thinking about how the best ideas arrive when I'm not looking for them. On walks. In the shower. Halfway through a conversation about something else.\n\nMaybe making room is part of making something.\n\nThings to come back to:\n• The art of noticing\n• A garden is never finished\n• More wandering, less scrolling",
    collection: "Everyday thoughts",
  },
  {
    id: "garden",
    title: "A garden is never finished",
    text: "A garden is a practice, not a project.\n\nYou put things in, see what takes root, and make space for something unexpected. There's no final version.\n\nWhat if I treated my creative work the same way?\n\nConnected to: A slower kind of Sunday, The art of noticing",
    collection: "Little discoveries",
  },
  {
    id: "book",
    title: "The art of noticing",
    text: "Pay attention. Be astonished. Tell about it.\n— Mary Oliver\n\nA reminder to collect the small things. The shape of a shadow. A sentence in a book. A conversation you keep thinking about.\n\nThings I noticed today:\n• The light in the kitchen at 7am\n• Someone reading on the train\n• The first leaves changing color",
    collection: "Reading notes",
  },
  {
    id: "project",
    title: "What if we made a little magazine?",
    text: "A small, slow magazine about the things we usually walk past.\n\nWorking title: Somewhere in Between\n\nAn idea for the first issue:\n• Conversations with people who make things\n• A photo essay about everyday rituals\n• Notes from a long walk\n\nNo rush. Just a beginning.",
    collection: "Works in progress",
  },
];

const ExperienceContext = createContext<{
  openNotebook: (id?: string) => void;
}>({ openNotebook: () => {} });
export function useNotebook() {
  return useContext(ExperienceContext);
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [notes, setNotes] = useState(sampleNotes);
  const [activeId, setActiveId] = useState("slow");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Saved in this browser");
  const active = notes.find((n) => n.id === activeId) || notes[0];
  function openNotebook(id = "slow") {
    let current = sampleNotes;
    try {
      const saved = localStorage.getItem("morrow-notes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length &&
          parsed.every(
            (n) =>
              typeof n.id === "string" &&
              typeof n.title === "string" &&
              typeof n.text === "string" &&
              typeof n.collection === "string",
          )
        )
          current = parsed;
      }
    } catch {
      setStatus("Notes are available for this session");
    }
    setNotes(current);
    setActiveId(current.some((n) => n.id === id) ? id : current[0].id);
    setSearch("");
    dialog.current?.showModal();
  }
  function save(next: Note[]) {
    setNotes(next);
    try {
      localStorage.setItem("morrow-notes", JSON.stringify(next));
      setStatus("Saved in this browser");
    } catch {
      setStatus(
        "Browser storage unavailable. Keep this page open to retain your notes.",
      );
    }
  }
  function update(field: "title" | "text", value: string) {
    save(notes.map((n) => (n.id === active.id ? { ...n, [field]: value } : n)));
  }
  function addNote() {
    const note = {
      id: crypto.randomUUID(),
      title: "Untitled thought",
      text: "",
      collection: "Your thoughts",
    };
    save([note, ...notes]);
    setActiveId(note.id);
    setSearch("");
  }
  return (
    <ExperienceContext.Provider value={{ openNotebook }}>
      {children}
      <dialog
        ref={dialog}
        className="notebook-dialog"
        aria-label="Your Morrow notebook"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="notebook-shell">
          <header className="notebook-header">
            <div className="brand">
              <MorrowMark />
              <span>your space</span>
            </div>
            <button
              className="icon-button"
              aria-label="Close notebook"
              onClick={() => dialog.current?.close()}
            >
              <Icon name="close" />
            </button>
          </header>
          <div className="notebook-body">
            <aside className="notebook-sidebar">
              <button className="notebook-new" onClick={addNote}>
                <Icon name="plus" size={18} /> New thought
              </button>
              <label className="notebook-search">
                <Icon name="search" size={16} />
                <input
                  aria-label="Search your notes"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Find a thought…"
                />
              </label>
              <div className="notebook-note-list">
                {notes
                  .filter((n) =>
                    `${n.title} ${n.text}`
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                  )
                  .map((n) => (
                    <button
                      key={n.id}
                      className={n.id === activeId ? "selected" : ""}
                      onClick={() => setActiveId(n.id)}
                    >
                      <Icon name="note" size={16} />
                      <span>{n.title || "Untitled thought"}</span>
                    </button>
                  ))}
                {notes.filter((n) =>
                  `${n.title} ${n.text}`
                    .toLowerCase()
                    .includes(search.toLowerCase()),
                ).length === 0 && (
                  <p className="empty-search">
                    No matching thoughts. Try another word.
                  </p>
                )}
              </div>
            </aside>
            <section className="notebook-editor" aria-label="Note editor">
              <span className="notebook-collection">
                <Icon name="book" size={15} />
                {active.collection}
              </span>
              <input
                className="note-title-input"
                aria-label="Note title"
                value={active.title}
                onChange={(e) => update("title", e.target.value)}
              />
              <textarea
                aria-label="Note content"
                placeholder="Every idea starts somewhere. Write yours here…"
                value={active.text}
                onChange={(e) => update("text", e.target.value)}
              />
              <div className="save-status" role="status">
                <Icon name="check" size={14} />
                {status}
              </div>
            </section>
          </div>
          <footer className="notebook-disclaimer">
            Make yourself at home. This working preview saves your notes on this
            device.
          </footer>
        </div>
      </dialog>
    </ExperienceContext.Provider>
  );
}

export function StartButton({
  children = "Start your space",
  className = "",
  noteId,
}: {
  children?: ReactNode;
  className?: string;
  noteId?: string;
}) {
  const { openNotebook } = useNotebook();
  return (
    <button
      className={`start-button ${className}`}
      onClick={() => openNotebook(noteId)}
    >
      {children}
    </button>
  );
}

export function Header({ variant }: { variant: string }) {
  const [menu, setMenu] = useState(false);
  return (
    <header className={`site-header header-${variant}`}>
      <Brand />
      <nav
        className={menu ? "header-nav is-open" : "header-nav"}
        aria-label="Main navigation"
      >
        <a href="#how-it-works" onClick={() => setMenu(false)}>
          How it works
        </a>
        <a href="#made-for-you" onClick={() => setMenu(false)}>
          Made for you
        </a>
        <a href="#a-few-answers" onClick={() => setMenu(false)}>
          A few answers
        </a>
      </nav>
      <div className="header-actions">
        <StartButton className="header-open">Open my space</StartButton>
        <button
          className="menu-button icon-button"
          aria-expanded={menu}
          aria-label="Toggle navigation"
          onClick={() => setMenu(!menu)}
        >
          <Icon name={menu ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

const directions = [
  { route: "one", name: "Thought garden", color: "#53734D" },
  { route: "two", name: "Electric workspace", color: "#3658ED" },
  { route: "three", name: "Quiet library", color: "#AE97BA" },
  { route: "four", name: "Connection map", color: "#5D416D" },
  { route: "five", name: "Open pinboard", color: "#E17B59" },
];
export function DesignSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="design-switcher" aria-label="Switch landing page design">
      <span className="switcher-label">
        <Icon name="grid" size={14} />
        Designs
      </span>
      <div>
        {directions.map((d, i) => (
          <Link
            key={d.route}
            href={`/${d.route}`}
            aria-label={`Design ${i + 1}: ${d.name}`}
            aria-current={pathname === `/${d.route}` ? "page" : undefined}
            title={d.name}
            style={{ "--swatch": d.color } as CSSProperties}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function FAQ({ variant }: { variant: string }) {
  return (
    <section className={`faq-section faq-${variant}`} id="a-few-answers">
      <div>
        <h2>A little clarity.</h2>
        <p>A few things you might be wondering.</p>
      </div>
      <div className="faq-list">
        {[
          [
            "What can I keep in Morrow?",
            "Start with anything on your mind: a passing thought, a reading note, a link to revisit, or the beginnings of a project. You don’t need a system before you start.",
          ],
          [
            "Can I try it without an account?",
            "Yes. Open your space and start writing. This preview saves notes in your browser on this device. You can search, edit, and add as many thoughts as you like.",
          ],
          [
            "Where are my notes saved?",
            "Your notes stay in this browser’s local storage. They aren’t sent to a server or synced to other devices. Clearing your browser data will remove them, so keep a copy of anything important.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <Icon name="plus" size={18} />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Footer({
  line = "A little room for your whole mind.",
}: {
  line?: string;
}) {
  return (
    <footer className="site-footer">
      <Brand />
      <p>{line}</p>
      <span>Made for a mind like yours.</span>
    </footer>
  );
}
export function DoodleFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M100 105C15 78 39 3 77 58C39-30 132-12 110 56C164-10 201 62 129 83C216 93 174 172 126 123C148 199 61 204 81 128C26 180-5 111 72 99Z"
        fill="currentColor"
      />
      <circle cx="100" cy="98" r="19" fill="var(--flower-center, #F3F7F0)" />
    </svg>
  );
}
export function FeatureLine({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="feature-line">
      <Icon name={icon} size={25} />
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
