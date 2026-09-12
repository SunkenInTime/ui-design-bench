"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Variant = 1 | 2 | 3 | 4 | 5;
type IconName =
  | "arrow"
  | "diagonal"
  | "plus"
  | "search"
  | "grid"
  | "spark"
  | "link"
  | "note"
  | "star"
  | "book"
  | "close"
  | "check"
  | "play"
  | "lock"
  | "menu"
  | "leaf"
  | "sun";
type Note = {
  id: string;
  title: string;
  body: string;
  category: string;
  color: string;
  image?: string;
  favorite?: boolean;
};
const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Make room for the good stuff.",
    body: "A slower morning. A really good book. An idea that won't leave you alone.\n\nA reminder to collect moments, not just milestones.",
    category: "Ideas",
    color: "lilac",
    favorite: true,
  },
  {
    id: "2",
    title: "Somewhere I'd like to be",
    body: "A little cabin, a still lake, and absolutely no plans.\n\nSave this for our next adventure. Maybe the best ideas happen when we make a little space for them.",
    category: "Inspiration",
    color: "photo",
    image: "/variants/without-design-skill/gpt-6-astra/images/alpine-lake.jpg",
    favorite: true,
  },
  {
    id: "3",
    title: "The art of noticing",
    body: "Pay attention. Be astonished. Tell about it.\n\n— Mary Oliver\n\nCreativity starts with being a little more curious about the everyday.",
    category: "Reading list",
    color: "peach",
  },
  {
    id: "4",
    title: "A few small, big ideas",
    body: "↗ Start a Sunday newsletter\n↗ Learn something just for fun\n↗ Build a thing that makes someone smile\n↗ Take the scenic route",
    category: "Ideas",
    color: "yellow",
  },
  {
    id: "5",
    title: "Thinking in connections",
    body: "The best ideas don't happen in isolation. They're a conversation between things you already know.\n\nConnect this with: The art of noticing.",
    category: "Ideas",
    color: "green",
    favorite: true,
  },
  {
    id: "6",
    title: "Little things, lately",
    body: "The light through the kitchen window at 4pm.\nA song from a friend.\nThe first page of a new notebook.\n\nIt's all worth keeping.",
    category: "Journal",
    color: "white",
  },
];

function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 5l7 7-7 7" />
      </>
    ),
    diagonal: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
        <path d="m20 2 1 3 3 1" />
      </>
    ),
    link: (
      <>
        <path d="m9 15 6-6M7.5 10.5l-2 2a4.25 4.25 0 0 0 6 6l2-2M10.5 7.5l2-2a4.25 4.25 0 0 1 6 6l-2 2" />
      </>
    ),
    note: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3L12 17.4l-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z" />
    ),
    book: (
      <>
        <path d="M12 5v16M12 5C9 3 5 3 2 4v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-3-1-7-1-10 1Z" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    leaf: (
      <>
        <path d="M20 3C5 1 0 13 7 18c7 6 16-1 13-15Z" />
        <path d="M4 22 16 8M9 16v-5M13 12h5" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
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
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mori-mark ${className}`}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 24C2 27 3 2 18 8c5 3 6 10 6 16Zm0 0C21 2 46 3 40 18c-3 5-10 6-16 6Zm0 0c22-3 21 22 6 16-5-3-6-10-6-16Zm0 0c3 22-22 21-16 6 3-5 10-6 16-6Z" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="mori home">
      <Mark />
      <span>
        mori<span className="brand-period">.</span>
      </span>
    </a>
  );
}

function Header({
  variant,
  onOpen,
  onPricing,
}: {
  variant: Variant;
  onOpen: () => void;
  onPricing: () => void;
}) {
  const [menu, setMenu] = useState(false);
  return (
    <header className={`site-header ${menu ? "menu-open" : ""}`}>
      <Brand />
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#features" onClick={() => setMenu(false)}>
          {variant === 5 ? "The experience" : "Why mori"}
        </a>
        <a href="#philosophy" onClick={() => setMenu(false)}>
          {variant === 2 ? "Our manifesto" : "Our philosophy"}
        </a>
        <button
          onClick={() => {
            onPricing();
            setMenu(false);
          }}
        >
          Pricing
        </button>
      </nav>
      <div className="nav-actions">
        <button className="login-button" onClick={onOpen}>
          Open my space <Icon name="diagonal" size={14} />
        </button>
        <button className="button nav-cta" onClick={onOpen}>
          {variant === 5 ? "Find your space" : "Get started free"}
          <Icon name="arrow" size={15} />
        </button>
        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          <Icon name={menu ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

function NoteCard({
  note,
  onClick,
  extraClass = "",
}: {
  note: Note;
  onClick: () => void;
  extraClass?: string;
}) {
  return (
    <button
      className={`note-card card-${note.color} ${extraClass}`}
      onClick={onClick}
    >
      {note.image && (
        <div className="note-image">
          <Image
            src={note.image}
            alt="A peaceful alpine lake reflecting the mountains"
            fill
            sizes="(max-width: 700px) 80vw, 350px"
          />
        </div>
      )}
      <div className="note-card-content">
        <span className="note-category">
          <Icon name={note.image ? "link" : "note"} size={12} />
          {note.category}
        </span>
        <h3>{note.title}</h3>
        {!note.image && <p>{note.body.split("\n\n")[0]}</p>}
        <div className="note-meta">
          <span>
            {note.id === "1" ? "Just now" : "A thought worth keeping"}
          </span>
          <Icon name={note.favorite ? "star" : "diagonal"} size={12} />
        </div>
      </div>
    </button>
  );
}

function AppPreview({
  onNote,
  onNew,
}: {
  onNote: (note: Note) => void;
  onNew: () => void;
}) {
  const [category, setCategory] = useState("All notes");
  const [query, setQuery] = useState("");
  const notes = sampleNotes.filter(
    (n) =>
      (category === "All notes" ||
        (category === "Favorites" ? n.favorite : n.category === category)) &&
      `${n.title} ${n.body}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="app-window" id="preview">
      <div className="window-chrome">
        <div className="traffic-lights">
          <i />
          <i />
          <i />
        </div>
        <span>
          <Icon name="lock" size={10} /> Your mind. A little more organized.
        </span>
        <Icon name="grid" size={12} />
      </div>
      <div className="app-inner">
        <aside className="app-sidebar">
          <div className="app-brand">
            <Mark />
            mori<span>⌄</span>
          </div>
          <div className="app-user">
            <span>J</span>Jamie&apos;s space <span>⌄</span>
          </div>
          <div className="sidebar-nav">
            {(
              [
                ["All notes", "grid"],
                ["Favorites", "star"],
                ["Ideas", "spark"],
                ["Reading list", "book"],
              ] as [string, IconName][]
            ).map(([label, icon]) => (
              <button
                key={label}
                onClick={() => setCategory(label)}
                className={category === label ? "selected" : ""}
              >
                <Icon name={icon} size={14} />
                {label}
                <span>
                  {label === "All notes"
                    ? "6"
                    : label === "Reading list"
                      ? "1"
                      : "3"}
                </span>
              </button>
            ))}
          </div>
          <div className="sidebar-bottom">
            <span className="tiny-dot" /> All thoughts, safely saved.
          </div>
        </aside>
        <div className="app-content">
          <div className="app-topbar">
            <div>
              <span className="app-eyebrow">A LITTLE SPACE, JUST FOR YOU</span>
              <h2>
                {category === "All notes"
                  ? "Your everyday, collected."
                  : category}
              </h2>
            </div>
            <button className="new-note" onClick={onNew}>
              <Icon name="plus" size={14} />
              <span>New note</span>
            </button>
          </div>
          <div className="app-filter-row">
            <span>{notes.length} little pieces of your mind</span>
            <label className="preview-search">
              <Icon name="search" size={13} />
              <input
                aria-label="Search preview notes"
                placeholder="Find a thought..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <kbd>⌘ K</kbd>
            </label>
          </div>
          <div className="note-grid">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onClick={() => onNote(note)}
              />
            ))}
            {notes.length === 0 && (
              <p className="empty-preview">
                No thoughts found. Try another word.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function One({
  onOpen,
  onNote,
}: {
  onOpen: () => void;
  onNote: (note: Note) => void;
}) {
  return (
    <>
      <section className="hero hero-one">
        <div className="eyebrow pill-eyebrow">
          <span className="tiny-dot" />A second brain. A lighter mind.
          <Icon name="arrow" size={13} />
        </div>
        <h1>
          Less scattered.
          <br />
          More <em>connected.</em>
          <svg className="hero-spark" viewBox="0 0 70 80" aria-hidden="true">
            <path d="m34 2 4 28L59 8M42 37l25-8M6 55l22-9M35 48l5 26" />
          </svg>
        </h1>
        <p>
          For the thoughts, links, and little sparks you don&apos;t want to
          lose.
          <br className="desktop-break" /> Give everything on your mind a place
          to come together.
        </p>
        <div className="hero-actions">
          <button className="button primary" onClick={onOpen}>
            Make room for your mind
            <Icon name="arrow" size={16} />
          </button>
          <button
            className="text-button"
            onClick={() =>
              document
                .getElementById("preview")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <span className="play-circle">
              <Icon name="play" size={11} />
            </span>
            Take a little look
          </button>
        </div>
        <span className="free-caption">
          Free to start. Yours to make your own.
        </span>
      </section>
      <section className="preview-stage">
        <div className="stage-doodle left-doodle">
          <span>
            all your little things,
            <br />
            in one lovely place.
          </span>
          <svg viewBox="0 0 70 55" aria-hidden="true">
            <path d="M5 3q-8 42 55 34m-15-12 17 13-15 9" />
          </svg>
        </div>
        <div className="floating-label">
          <Icon name="spark" size={15} /> Oh, that&apos;s where that idea went.
        </div>
        <AppPreview onNote={onNote} onNew={onOpen} />
        <div className="stage-flower">
          <Mark />
        </div>
      </section>
      <div className="one-under-preview">
        <span>
          <Icon name="lock" size={13} />A private home for your mind
        </span>
        <span>
          <Icon name="link" size={13} />
          Made for beautiful connections
        </span>
        <span>
          <Icon name="leaf" size={13} />
          Room to grow at your own pace
        </span>
      </div>
    </>
  );
}

function OrbitStamp() {
  return (
    <svg className="orbit-stamp" viewBox="0 0 130 130" aria-hidden="true">
      <defs>
        <path
          id="stamp-circle"
          d="M65,65m-49,0a49,49 0 1,1 98,0a49,49 0 1,1 -98,0"
        />
      </defs>
      <text>
        <textPath href="#stamp-circle" textLength="303">
          A LITTLE SPACE FOR YOUR WHOLE MIND ·{" "}
        </textPath>
      </text>
      <path d="M65 32v66M32 65h66M42 42l46 46M42 88l46-46" />
    </svg>
  );
}

function Two({
  onOpen,
  onNote,
}: {
  onOpen: () => void;
  onNote: (note: Note) => void;
}) {
  return (
    <>
      <section className="hero hero-two">
        <div className="two-copy">
          <div className="eyebrow">
            <span className="square-dot" /> YOUR BRAIN CALLED. IT NEEDS MORE
            ROOM.
          </div>
          <h1>
            BIG IDEAS.
            <br />
            SMALL NOTES.
            <br />
            <span className="all-you">ALL YOU.</span>
            <span className="orange-asterisk">✳</span>
          </h1>
          <p>
            A place for your rabbit holes, lightbulb moments,
            <br className="desktop-break" /> and “I should write that down”s.
            Meet your second brain.
          </p>
          <button className="button primary" onClick={onOpen}>
            Get it out of your head
            <Icon name="diagonal" />
          </button>
          <span className="free-caption">
            ZERO PRESSURE. INFINITE POSSIBILITIES.
          </span>
        </div>
        <div className="two-collage">
          <OrbitStamp />
          <div className="collage-heading">
            GOOD THINGS HAPPEN WHEN IDEAS COLLIDE.
          </div>
          <button
            className="studio-card studio-back"
            onClick={() => onNote(sampleNotes[4])}
          >
            <Icon name="link" size={25} />
            <span>
              Everything is
              <br />
              connected.
            </span>
            <div className="studio-network" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>FOLLOW THE THREAD ↗</small>
          </button>
          <button
            className="studio-card studio-photo"
            onClick={() => onNote(sampleNotes[1])}
          >
            <div>
              <Image
                src="/variants/without-design-skill/gpt-6-astra/images/alpine-lake.jpg"
                alt="Mountains reflected in a lake, saved as visual inspiration"
                fill
                sizes="360px"
              />
            </div>
            <span>More of this, please.</span>
            <small>INSPIRATION / THE GREAT OUTDOORS</small>
          </button>
          <button
            className="studio-card studio-front"
            onClick={() => onNote(sampleNotes[3])}
          >
            <span className="studio-label">
              <Icon name="note" size={14} /> THE NEXT BIG THING
            </span>
            <h3>
              What if
              <br />
              we just
              <br />
              <em>made it?</em>
            </h3>
            <span className="studio-card-footer">
              IDEA NO. 028 <Icon name="diagonal" size={22} />
            </span>
          </button>
          <span className="studio-scribble">a mess with potential ↗</span>
          <button
            className="collage-plus"
            onClick={onOpen}
            aria-label="Capture a new idea"
          >
            <Icon name="plus" size={30} />
          </button>
        </div>
      </section>
      <div className="ticker">
        <div>
          COLLECT THE UNEXPECTED <span>✳</span> CONNECT THE UNCONNECTED{" "}
          <span>✳</span> MAKE SOMETHING GREAT <span>✳</span> KEEP YOUR CURIOSITY{" "}
          <span>✳</span>
        </div>
      </div>
      <div className="two-intro">
        <span>01 / MORE THAN A NOTES APP</span>
        <p>
          Your mind doesn&apos;t think in folders.
          <br />
          Neither should your notes.
        </p>
        <Icon name="diagonal" size={46} />
      </div>
    </>
  );
}

const graphPositions = [
  {
    left: "40%",
    top: "40%",
    title: "The next big idea",
    icon: "spark",
    type: "main",
    note: 3,
  },
  {
    left: "13%",
    top: "16%",
    title: "A passing thought",
    icon: "note",
    type: "purple",
    note: 0,
  },
  {
    left: "70%",
    top: "8%",
    title: "Creative practice",
    icon: "book",
    type: "",
    note: 2,
  },
  {
    left: "78%",
    top: "50%",
    title: "New perspectives",
    icon: "sun",
    type: "purple",
    note: 1,
  },
  {
    left: "10%",
    top: "66%",
    title: "Things I'm learning",
    icon: "book",
    type: "",
    note: 4,
  },
  {
    left: "52%",
    top: "83%",
    title: "Something worth keeping",
    icon: "link",
    type: "",
    note: 5,
  },
];
function Three({
  onOpen,
  onNote,
}: {
  onOpen: () => void;
  onNote: (note: Note) => void;
}) {
  return (
    <>
      <section className="hero hero-three">
        <div className="three-copy">
          <div className="eyebrow">
            <span className="status-dot" /> YOUR PERSONAL KNOWLEDGE UNIVERSE
          </div>
          <h1>
            Your mind.
            <br />
            Without
            <br />
            <span>limits.</span>
            <Icon name="spark" className="three-star" size={70} />
          </h1>
          <p>
            Capture what sparks something. Connect what matters.
            <br className="desktop-break" /> A second brain that turns scattered
            information
            <br className="desktop-break" /> into your next great idea.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={onOpen}>
              Start connecting
              <Icon name="arrow" size={17} />
            </button>
            <a className="text-button" href="#features">
              Explore the possibilities <Icon name="diagonal" size={15} />
            </a>
          </div>
          <div className="three-assurance">
            <span>
              <Icon name="check" size={13} />
              Free to get started
            </span>
            <span>
              <Icon name="lock" size={12} />
              Private by design
            </span>
          </div>
        </div>
        <div className="graph-wrap">
          <div className="graph-top">
            <span>
              <i /> LIVE VIEW
            </span>
            <span>YOUR MIND, MAPPED.</span>
            <Icon name="grid" size={15} />
          </div>
          <div className="knowledge-graph">
            <div className="graph-orbit orbit-a" />
            <div className="graph-orbit orbit-b" />
            <svg
              className="graph-connections"
              viewBox="0 0 600 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M240 200 78 80M240 200 420 40M240 200 468 250M240 200 60 330M240 200 312 415M78 80 420 40M60 330 312 415M468 250 312 415M240 200 110 230M420 40 530 130" />
              <circle cx="110" cy="230" r="3" />
              <circle cx="530" cy="130" r="3" />
            </svg>
            {graphPositions.map((node, index) => (
              <button
                key={node.title}
                style={
                  {
                    left: node.left,
                    top: node.top,
                    "--delay": `${index * 0.15}s`,
                  } as CSSProperties
                }
                className={`graph-node ${node.type}`}
                onClick={() =>
                  onNote({
                    ...sampleNotes[node.note],
                    id: `graph-${node.note}`,
                    title: node.title,
                  })
                }
              >
                <Icon
                  name={node.icon as IconName}
                  size={node.type === "main" ? 21 : 15}
                />
                <span>{node.title}</span>
                {node.type === "main" && <small>6 CONNECTED THOUGHTS</small>}
              </button>
            ))}
            <span className="graph-coordinate coordinate-one">40.7128° N</span>
            <span className="graph-coordinate coordinate-two">
              IDEAS HAVE NO EDGES
            </span>
          </div>
          <div className="graph-bottom">
            <span>
              <i className="tiny-dot" /> Every connection is a new possibility.
            </span>
            <button onClick={onOpen} aria-label="Add a connected thought">
              <Icon name="plus" size={20} />
            </button>
          </div>
        </div>
      </section>
      <section className="three-bottom">
        <div className="mind-search">
          <Icon name="search" size={19} />
          <button onClick={onOpen}>
            Find that thing you were thinking about...
          </button>
          <span>⌘ K</span>
        </div>
        <div className="three-bottom-caption">
          LESS SEARCHING. MORE DISCOVERING.
        </div>
        <div className="dark-capabilities">
          <span>
            <Icon name="note" />
            Frictionless capture
          </span>
          <span>
            <Icon name="link" />
            Unexpected connections
          </span>
          <span>
            <Icon name="spark" />
            Limitless possibilities
          </span>
        </div>
      </section>
    </>
  );
}

function FlowerDoodle() {
  return (
    <svg viewBox="0 0 150 170" className="flower-doodle" aria-hidden="true">
      <path
        d="M75 97q-18 45 5 65m-6-28q-43 0-33-29 33-2 35 30m3 11q9-38 35-29 1 25-35 29"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M75 43c-29-56-55-9-29 10-60-5-47 44-11 37-41 34 10 64 28 27 8 55 54 34 38 0 49 29 63-24 27-39 58-18 16-63-12-37 16-53-38-58-41 2Z"
        fill="#f9c54b"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="79"
        cy="79"
        r="25"
        fill="#fff8df"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M69 74v5m17-5v5m-19 9q13 15 24-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
function Four({
  onOpen,
  onNote,
}: {
  onOpen: () => void;
  onNote: (note: Note) => void;
}) {
  return (
    <>
      <section className="hero hero-four">
        <div className="four-kicker">
          <Icon name="spark" size={21} />
          For your beautifully busy brain.
        </div>
        <h1>
          Good things start with
          <br />a{" "}
          <em>
            little thought.
            <svg
              viewBox="0 0 460 30"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M6 16Q180-3 450 11M22 25Q241 8 427 20" />
            </svg>
          </em>
        </h1>
        <p>
          Big dreams. Half-baked ideas. That one really good quote.
          <br className="desktop-break" /> Gather it all in a happy little home
          for your mind.
        </p>
        <button className="button primary" onClick={onOpen}>
          Let&apos;s make some headspace
          <Icon name="arrow" size={17} />
        </button>
        <span className="free-caption">
          A fresh page is waiting. Start for free.
        </span>
        <FlowerDoodle />
        <span className="four-side-note">
          No thought
          <br />
          too small!
          <svg viewBox="0 0 100 80" aria-hidden="true">
            <path d="M8 5q80-9 46 53m-8-16 6 21 20-8" />
          </svg>
        </span>
        <div className="doodle-stars">
          <Icon name="spark" size={46} />
          <Icon name="spark" size={24} />
        </div>
      </section>
      <section className="paper-desk">
        <div className="desk-caption">
          A FEW THINGS FLOATING AROUND IN HERE...
        </div>
        <button
          className="paper-note paper-one"
          onClick={() =>
            onNote({
              ...sampleNotes[3],
              id: "paper-thought",
              title: "What if the next chapter is the best one?",
              body: "A lightbulb moment.\n\nThere is room for a new beginning, a different direction, or an idea you haven’t tried yet. What would you like to start?",
            })
          }
        >
          <div className="tape" />
          <span className="paper-type">a lightbulb moment</span>
          <h3>
            What if the
            <br />
            next chapter
            <br />
            is the best one?
          </h3>
          <span className="hand-drawn-bulb">☼</span>
          <span className="paper-tag">#justathought</span>
        </button>
        <button
          className="paper-note paper-two"
          onClick={() => onNote(sampleNotes[1])}
        >
          <div className="paper-photo">
            <Image
              src="/variants/without-design-skill/gpt-6-astra/images/alpine-lake.jpg"
              alt="An alpine lake, a little reminder to get outside"
              fill
              sizes="300px"
            />
          </div>
          <span>Places to get a little lost.</span>
          <span className="polaroid-star">✳</span>
        </button>
        <button
          className="paper-note paper-three"
          onClick={() =>
            onNote({
              ...sampleNotes[5],
              id: "paper-reminder",
              title: "You don’t have to keep it all in your head.",
              body: "A friendly reminder: your mind is for having ideas. Give those ideas a little place to live, and give yourself a little room to breathe.",
            })
          }
        >
          <span className="paper-type">a note to self</span>
          <h3>
            You don&apos;t have to
            <br />
            keep it all
            <br />
            in your head.
          </h3>
          <svg viewBox="0 0 80 40" className="paper-smile" aria-hidden="true">
            <path d="M18 5v7M55 3v8M12 23q26 22 53-4" />
          </svg>
          <span className="paper-tag">a friendly reminder ♡</span>
        </button>
        <button
          className="paper-note paper-four"
          onClick={() => onNote(sampleNotes[2])}
        >
          <span className="paper-type">
            <Icon name="book" size={14} /> words to live by
          </span>
          <h3>
            “Pay attention.
            <br />
            Be astonished.
            <br />
            Tell about it.”
          </h3>
          <span>— Mary Oliver</span>
          <span className="paper-tag">#theartofnoticing</span>
        </button>
      </section>
      <div className="four-proof">
        <span>A little less “where did I put that?”</span>
        <Mark />
        <span>A little more “oh, that&apos;s a good idea.”</span>
      </div>
    </>
  );
}

function Five({
  onOpen,
  onNote,
}: {
  onOpen: () => void;
  onNote: (note: Note) => void;
}) {
  return (
    <>
      <section className="hero hero-five">
        <div className="five-copy">
          <div className="eyebrow">
            <span className="tiny-dot" /> A MORE MINDFUL SECOND BRAIN
          </div>
          <h1>
            A quieter place
            <br />
            for a louder
            <br />
            <em>imagination.</em>
          </h1>
          <p>
            Let your thoughts take root.
            <br />A considered space for your notes, discoveries,
            <br className="desktop-break" /> and everything you&apos;re
            becoming.
          </p>
          <button className="button primary" onClick={onOpen}>
            Find your headspace
            <Icon name="arrow" size={17} />
          </button>
          <span className="free-caption">
            Begin for free. Grow at your own pace.
          </span>
          <div className="five-caption">
            <span>01 —</span> A LITTLE LESS NOISE. A LITTLE MORE YOU.
          </div>
        </div>
        <div className="five-visual">
          <Image
            className="forest-image"
            src="/variants/without-design-skill/gpt-6-astra/images/forest.jpg"
            alt="Sunlight filtering through a peaceful green forest"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          <div className="forest-shade" />
          <span className="forest-top-label">
            <Icon name="leaf" size={15} /> GOOD IDEAS GROW HERE.
          </span>
          <button
            className="forest-note"
            onClick={() =>
              onNote({
                ...sampleNotes[5],
                id: "forest-note",
                title: "Make a little room.",
                body: "For the things you notice.\nFor the ideas you haven’t met yet.\nFor a mind that can wander.",
              })
            }
          >
            <span className="forest-note-top">
              <Icon name="note" size={14} /> NOTES TO SELF <span>•••</span>
            </span>
            <h3>Make a little room.</h3>
            <p>
              For the things you notice.
              <br />
              For the ideas you haven&apos;t met yet.
              <br />
              For a mind that can wander.
            </p>
            <span className="forest-note-bottom">
              <span className="tiny-dot" /> Personal growth{" "}
              <Icon name="diagonal" size={14} />
            </span>
          </button>
          <span className="forest-bottom-label">
            A SPACE TO THINK. A PLACE TO RETURN.
          </span>
          <div className="forest-wordmark">Let it grow.</div>
        </div>
      </section>
      <section className="five-bottom">
        <span>
          THOUGHTFULLY SIMPLE.
          <br />
          QUIETLY POWERFUL.
        </span>
        <p>
          You have enough on your mind.
          <br />
          <em>Give it somewhere to rest.</em>
        </p>
        <Icon name="leaf" size={45} />
      </section>
    </>
  );
}

const featureSets: Record<
  Variant,
  {
    kicker: string;
    title: string;
    description: string;
    items: { icon: IconName; title: string; description: string }[];
  }
> = {
  1: {
    kicker: "A LITTLE LESS MENTAL CLUTTER",
    title: "Your mind has a lot going on.\nGive it a little room.",
    description:
      "Not another system to keep up with. Just a softer place for everything you want to keep.",
    items: [
      {
        icon: "note",
        title: "Catch the little sparks.",
        description:
          "A passing thought, a favorite quote, a link for later. Save it before the moment moves on.",
      },
      {
        icon: "link",
        title: "Let the dots connect.",
        description:
          "Bring related thoughts together. Old ideas have a lovely way of becoming something new.",
      },
      {
        icon: "leaf",
        title: "Find your own rhythm.",
        description:
          "No perfect system required. Make a space that grows naturally with the way you think.",
      },
    ],
  },
  2: {
    kicker: "BUILT FOR THE WAY YOUR BRAIN ACTUALLY WORKS",
    title: "LESS ORGANIZING.\nMORE ORIGINAL THINKING.",
    description:
      "Your next great idea is probably hiding between a few things you already know.",
    items: [
      {
        icon: "plus",
        title: "DUMP IT ALL IN.",
        description:
          "Notes, links, images, shower thoughts. If it catches your attention, it belongs here.",
      },
      {
        icon: "link",
        title: "MIX THINGS UP.",
        description:
          "Put unexpected ideas next to each other. See what happens when your rabbit holes meet.",
      },
      {
        icon: "diagonal",
        title: "MAKE YOUR NEXT MOVE.",
        description:
          "Turn your growing collection into the starting point for something only you could make.",
      },
    ],
  },
  3: {
    kicker: "THINK BEYOND THE PAGE",
    title: "Information is everywhere.\nInsight is yours to create.",
    description:
      "Build a personal constellation of everything you know, and everything you might discover.",
    items: [
      {
        icon: "note",
        title: "Capture at the speed of thought",
        description:
          "Keep your flow. Give every fleeting thought a permanent place in your knowledge universe.",
      },
      {
        icon: "link",
        title: "Make meaningful connections",
        description:
          "Ideas become more powerful together. Link your notes and explore a bigger picture.",
      },
      {
        icon: "search",
        title: "Rediscover what you know",
        description:
          "Get back to the right idea at the right moment. Your past thinking, ready for your next question.",
      },
    ],
  },
  4: {
    kicker: "LESS FUSS. MORE LIGHTBULB MOMENTS.",
    title: "A home for all the things\nthat make you, you.",
    description:
      "You don't need to have it all figured out. That's what the blank page is for.",
    items: [
      {
        icon: "sun",
        title: "Catch a good thought.",
        description:
          "Write it, save it, tuck it away. Your smallest ideas deserve a little home, too.",
      },
      {
        icon: "spark",
        title: "Find a happy accident.",
        description:
          "A saved quote meets a half-baked idea. Sometimes that's all it takes to start something lovely.",
      },
      {
        icon: "book",
        title: "Make it your own.",
        description:
          "A reading list, a dream journal, a very ambitious plan. There's room for every version of you.",
      },
    ],
  },
  5: {
    kicker: "LESS TO MANAGE. MORE TO DISCOVER.",
    title: "Good ideas need\nroom to grow.",
    description:
      "A gentle place to gather what matters, see things differently, and come back to yourself.",
    items: [
      {
        icon: "leaf",
        title: "Plant a thought.",
        description:
          "Capture something while it's still a seed. A word, an image, the beginning of an idea.",
      },
      {
        icon: "link",
        title: "Follow the roots.",
        description:
          "Discover the quiet connections between things you've learned, loved, and wondered about.",
      },
      {
        icon: "sun",
        title: "Let it become.",
        description:
          "Return when you're ready. Your notes will be here, making a little more sense with time.",
      },
    ],
  },
};

function Features({
  variant,
  onOpen,
}: {
  variant: Variant;
  onOpen: () => void;
}) {
  const data = featureSets[variant];
  return (
    <>
      <section className="features-section" id="features">
        <div className="features-heading">
          <div className="eyebrow">{data.kicker}</div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="feature-grid">
          {data.items.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <div className={`feature-art feature-art-${index}`}>
                <div className="feature-art-icon">
                  <Icon name={item.icon} size={34} />
                </div>
                {index === 0 ? (
                  <>
                    <div className="mini-page back-page" />
                    <div className="mini-page front-page">
                      <span />
                      <span />
                      <span />
                    </div>
                  </>
                ) : index === 1 ? (
                  <div className="mini-connections">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                ) : (
                  <div className="mini-plant">
                    <Mark />
                  </div>
                )}
                <span className="feature-number">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="philosophy-section" id="philosophy">
        <div className="philosophy-symbol">
          <Mark />
        </div>
        <div>
          <div className="eyebrow">MADE FOR A MIND LIKE YOURS</div>
          <h2>
            {variant === 2
              ? "YOU'RE A PERSON.\nNOT A PRODUCTIVITY MACHINE."
              : "You’re a person.\nNot a productivity project."}
          </h2>
          <p>
            We believe your best ideas come when your mind has room to wander.
            Mori is a little space to collect what moves you, follow your
            curiosity, and let something new take shape.
          </p>
          <span className="signature">With a little thought, mori.</span>
        </div>
      </section>
      <section className="closing-section">
        <span className="eyebrow">
          YOUR NEXT CHAPTER STARTS WITH A THOUGHT.
        </span>
        <h2>
          {variant === 2
            ? "GOT SOMETHING\nON YOUR MIND?"
            : variant === 5
              ? "Make a little space.\nSee what grows."
              : "A little space.\nA world of possibilities."}
        </h2>
        <button className="button primary" onClick={onOpen}>
          Make yourself at home
          <Icon name="arrow" size={17} />
        </button>
        <span className="free-caption">
          Your first thought is on us. And the ones after that.
        </span>
      </section>
    </>
  );
}

function Modal({
  mode,
  note,
  onClose,
  onOpenWorkspace,
}: {
  mode: "workspace" | "pricing";
  note: Note | null;
  onClose: () => void;
  onOpenWorkspace: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [notes, setNotes] = useState<Note[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("mori-notes");
      const parsed: unknown = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed))
        return parsed.filter(
          (item): item is Note =>
            item &&
            typeof item.id === "string" &&
            typeof item.title === "string" &&
            typeof item.body === "string" &&
            typeof item.category === "string" &&
            typeof item.color === "string",
        );
    } catch {
      /* The notebook also works without browser storage. */
    }
    return [];
  });
  const [selectedId, setSelectedId] = useState(note?.id ?? "");
  const [title, setTitle] = useState(note?.title ?? "");
  const [body, setBody] = useState(note?.body ?? "");
  const [category, setCategory] = useState(note?.category ?? "Ideas");
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");
  const [annual, setAnnual] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  function saveNote(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setStatus("Give your thought a title before saving.");
      return;
    }
    const nextNote = {
      id: selectedId || crypto.randomUUID(),
      title: title.trim(),
      body,
      category,
      color: "lilac",
    };
    const updated = [nextNote, ...notes.filter((n) => n.id !== nextNote.id)];
    setNotes(updated);
    setSelectedId(nextNote.id);
    try {
      localStorage.setItem("mori-notes", JSON.stringify(updated));
      setStatus("A little thought, safely saved on this device.");
    } catch {
      setStatus("Saved for this session. Browser storage is unavailable.");
    }
  }
  function selectNote(n: Note) {
    setSelectedId(n.id);
    setTitle(n.title);
    setBody(n.body);
    setCategory(n.category);
    setStatus("");
  }
  function newNote() {
    setSelectedId("");
    setTitle("");
    setBody("");
    setCategory("Ideas");
    setStatus("");
  }
  function deleteNote() {
    const updated = notes.filter((n) => n.id !== selectedId);
    setNotes(updated);
    newNote();
    try {
      localStorage.setItem("mori-notes", JSON.stringify(updated));
      setStatus("Note deleted from this device.");
    } catch {
      setStatus("Removed for this session. Browser storage is unavailable.");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`mori-dialog ${mode === "pricing" ? "pricing-dialog" : "workspace-dialog"}`}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          )
            onClose();
        }
      }}
      aria-labelledby="dialog-title"
    >
      <button
        className="dialog-close"
        onClick={onClose}
        aria-label="Close dialog"
      >
        <Icon name="close" size={21} />
      </button>
      {mode === "pricing" ? (
        <div className="pricing-content">
          <Mark />
          <span className="eyebrow">A LITTLE SPACE, AT YOUR OWN PACE.</span>
          <h2 id="dialog-title">
            Good thoughts.
            <br />
            <em>Simple plans.</em>
          </h2>
          <div className="billing-toggle">
            <button
              className={annual ? "active" : ""}
              onClick={() => setAnnual(true)}
            >
              Yearly <span>Save 25%</span>
            </button>
            <button
              className={!annual ? "active" : ""}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
          <div className="plans">
            <article>
              <span>THE LITTLE SPACE</span>
              <h3>Free</h3>
              <p>A fresh start for a curious mind.</p>
              <ul>
                <li>
                  <Icon name="check" size={15} />
                  Unlimited local notes
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Your own collections
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Quick search
                </li>
              </ul>
              <button className="button" onClick={onOpenWorkspace}>
                Start your free space
                <Icon name="arrow" size={15} />
              </button>
            </article>
            <article className="paid-plan">
              <span>
                ROOM TO GROW <small>COMING SOON</small>
              </span>
              <h3>
                ${annual ? "6" : "8"}
                <small> / month</small>
              </h3>
              <p>
                {annual ? "$72 billed yearly." : "$8 billed monthly."} A little
                more possibility.
              </p>
              <ul>
                <li>
                  <Icon name="check" size={15} />
                  Everything in your little space
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Sync across your devices
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Connected knowledge graph
                </li>
              </ul>
              <button className="button" onClick={onOpenWorkspace}>
                Explore the free preview
                <Icon name="arrow" size={15} />
              </button>
            </article>
          </div>
          <p className="pricing-fineprint">
            Mori is a concept preview. The free notebook works in this browser;
            paid plans aren&apos;t available yet.
          </p>
        </div>
      ) : (
        <div className="workspace-content">
          <aside className="workspace-sidebar">
            <div className="app-brand">
              <Mark />
              mori
            </div>
            <button className="button new-workspace-note" onClick={newNote}>
              <Icon name="plus" size={16} />A new thought
            </button>
            <label className="workspace-search">
              <Icon name="search" size={15} />
              <input
                aria-label="Search saved notes"
                placeholder="Find a thought"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <span className="eyebrow">YOUR LITTLE COLLECTION</span>
            <div className="saved-notes">
              {notes
                .filter((n) =>
                  `${n.title} ${n.body}`
                    .toLowerCase()
                    .includes(query.toLowerCase()),
                )
                .map((n) => (
                  <button
                    className={selectedId === n.id ? "active" : ""}
                    key={n.id}
                    onClick={() => selectNote(n)}
                  >
                    <Icon name="note" size={15} />
                    <span>{n.title}</span>
                  </button>
                ))}
              {notes.length === 0 && (
                <p>
                  Your ideas will find
                  <br />a home here.
                </p>
              )}
              {notes.length > 0 &&
                !notes.some((n) =>
                  `${n.title} ${n.body}`
                    .toLowerCase()
                    .includes(query.toLowerCase()),
                ) && <p>No matching thoughts.</p>}
            </div>
            <span className="workspace-storage">
              <Icon name="lock" size={12} />
              Saved on this device
            </span>
          </aside>
          <div className="workspace-editor">
            <span className="eyebrow">A LITTLE SPACE, JUST FOR YOU.</span>
            <h2 id="dialog-title">What&apos;s on your mind?</h2>
            <p className="editor-intro">
              No perfect words needed. Just start somewhere.
            </p>
            <form onSubmit={saveNote}>
              <label className="sr-only" htmlFor="note-title">
                Note title
              </label>
              <input
                autoFocus
                id="note-title"
                className="editor-title"
                placeholder="Give your thought a title..."
                required
                maxLength={140}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setStatus("");
                }}
              />
              <label className="sr-only" htmlFor="note-body">
                Note content
              </label>
              <textarea
                id="note-body"
                placeholder="An idea, a little reminder, the start of something..."
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  setStatus("");
                }}
              />
              <div className="editor-bottom">
                <label>
                  Collection{" "}
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setStatus("");
                    }}
                  >
                    {["Ideas", "Inspiration", "Reading list", "Journal"].map(
                      (c) => (
                        <option key={c}>{c}</option>
                      ),
                    )}
                  </select>
                </label>
                <button type="submit" className="button primary">
                  Save this thought
                  <Icon name="check" size={15} />
                </button>
              </div>
            </form>
            <div className="editor-status">
              <span role="status">{status}</span>
              {selectedId && notes.some((n) => n.id === selectedId) && (
                <button onClick={deleteNote}>Delete note</button>
              )}
            </div>
            <p className="editor-fineprint">
              Your working notebook preview. Notes stay in this browser, with no
              account needed.
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Landing({ variant }: { variant: Variant }) {
  const [modal, setModal] = useState<"workspace" | "pricing" | null>(null);
  const [note, setNote] = useState<Note | null>(null);
  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setNote(null);
        setModal("workspace");
      }
    };
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, []);
  const openWorkspace = () => {
    setNote(null);
    setModal("workspace");
  };
  const openNote = (n: Note) => {
    setNote(n);
    setModal("workspace");
  };
  const Hero = { 1: One, 2: Two, 3: Three, 4: Four, 5: Five }[variant];
  return (
    <div className={`landing theme-${variant}`} id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        variant={variant}
        onOpen={openWorkspace}
        onPricing={() => setModal("pricing")}
      />
      <main id="main">
        <Hero onOpen={openWorkspace} onNote={openNote} />
        <Features variant={variant} onOpen={openWorkspace} />
      </main>
      <footer className="site-footer">
        <Brand />
        <span>A little space for your whole mind.</span>
        <div>
          <button onClick={() => setModal("pricing")}>Simple pricing</button>
          <a href="#philosophy">
            Made with a little thought <span>↗</span>
          </a>
        </div>
        <small>© {new Date().getFullYear()} mori</small>
      </footer>
      {modal && (
        <Modal
          key={`${modal}-${note?.id ?? "new"}`}
          mode={modal}
          note={note}
          onClose={() => setModal(null)}
          onOpenWorkspace={openWorkspace}
        />
      )}
    </div>
  );
}
