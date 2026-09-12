import Image from "next/image";
import Link from "next/link";
import type { IterationKey } from "./iteration-switcher";

type LinkItem = {
  label: string;
  href: string;
};

const routeLinks: LinkItem[] = [
  { label: "Why it works", href: "#why" },
  { label: "The method", href: "#method" },
];

function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <Link className={`wordmark ${dark ? "wordmark-dark" : ""}`} href="#top" aria-label="Noted home">
      <span className="wordmark-mark" aria-hidden="true">
        n
      </span>
      <span>noted</span>
    </Link>
  );
}

function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className="site-header">
      <Wordmark dark={dark} />
      <nav className="site-nav-links" aria-label="Primary navigation">
        {routeLinks.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function PrimaryLink({ href = "#method", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a className="button button-primary" href={href}>
      {children}
    </a>
  );
}

function SecondaryLink({ href = "#why", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a className="button button-secondary" href={href}>
      {children}
    </a>
  );
}

function AppPreview({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <div
      className={`app-preview ${compact ? "app-preview-compact" : ""} ${dark ? "app-preview-dark" : ""}`}
      aria-label="A preview of the Noted workspace"
    >
      <div className="preview-topbar">
        <span className="preview-brand">noted</span>
        <span className="preview-command">search / K</span>
      </div>
      <div className="preview-layout">
        <aside className="preview-sidebar">
          <span className="preview-label">Workspace</span>
          <span className="preview-link preview-link-active">All notes</span>
          <span className="preview-link">Unsorted</span>
          <span className="preview-link">Reading list</span>
          <span className="preview-label preview-label-spaced">Collections</span>
          <span className="preview-link">Ideas in motion</span>
          <span className="preview-link">Things to make</span>
        </aside>
        <div className="preview-content">
          <div className="preview-content-head">
            <span>Ideas in motion</span>
            <span>12 notes</span>
          </div>
          <div className="preview-note-main">
            <span className="preview-note-type">NOTE</span>
            <h3>Keep the thread, not the tab.</h3>
            <p>
              A useful idea should become easier to find each time you return to it.
            </p>
            <div className="preview-note-rule" />
            <span className="preview-note-meta">linked to 4 other notes</span>
          </div>
          <div className="preview-note-list" aria-hidden="true">
            <div><span>01</span><strong>Make a place for half-formed ideas</strong></div>
            <div><span>02</span><strong>What keeps a project alive?</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StillLifeImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src:
    | "/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
    | "/variants/with-taste-skill/luna/assets/field-notes.webp";
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 720px"
      className={`still-life-image ${className}`}
    />
  );
}

function Footer({ current }: { current: IterationKey }) {
  return (
    <footer className="site-footer">
      <Wordmark />
      <span>Keep a place for the thoughts that keep you moving.</span>
      <Link href="#top">
        {current === "five" ? "Return to quiet index" : "Try another direction"}
      </Link>
    </footer>
  );
}

function IterationOne() {
  return (
    <div className="landing landing-one">
      <SiteHeader />
      <main>
        <section className="hero hero-one" id="top">
          <div className="hero-copy reveal reveal-one">
            <p className="eyebrow">THE SECOND BRAIN FOR EVERYDAY LIFE</p>
            <h1>
              Think in public.
              <br />
              Keep the good parts.
            </h1>
            <p className="hero-description">
              Noted turns loose thoughts into a place you can return to.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="#method">Try Noted</PrimaryLink>
              <SecondaryLink href="#why">See how it works</SecondaryLink>
            </div>
          </div>
          <div className="hero-image hero-image-one reveal reveal-two">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
              alt="Open notebook and layered paper cards on a deep blue desk"
              priority
            />
          </div>
        </section>

        <section className="quiet-line" aria-label="Noted audience">
          <span>For writers, builders, and curious people.</span>
          <span>Save the thread. Return to it.</span>
        </section>

        <section className="section section-one-principles" id="why">
          <div className="section-intro section-intro-narrow">
            <h2>A thought is more useful once it has somewhere to go.</h2>
            <p>
              Noted keeps the capture quick and the return effortless. That is the whole idea.
            </p>
          </div>
          <div className="principle-rail">
            <article className="principle-row">
              <span className="principle-number">01</span>
              <h3>Capture without ceremony</h3>
              <p>Write the rough version first. Shape it later.</p>
            </article>
            <article className="principle-row">
              <span className="principle-number">02</span>
              <h3>Connect the useful pieces</h3>
              <p>Small notes become a body of work when they can find each other.</p>
            </article>
            <article className="principle-row">
              <span className="principle-number">03</span>
              <h3>Return with context</h3>
              <p>Come back to the why, not just the words you saved.</p>
            </article>
          </div>
        </section>

        <section className="image-story image-story-one">
          <div className="story-image story-image-one">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/field-notes.webp"
              alt="Stack of index cards and an open notebook in soft morning light"
            />
          </div>
          <div className="story-copy">
            <h2>Make room for the unfinished.</h2>
            <p>
              The notes worth keeping rarely arrive polished. Noted gives them a calm place to gather until the next connection appears.
            </p>
            <a className="text-link" href="#method">See the method <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="section preview-section preview-section-one" id="method">
          <div className="section-intro">
            <h2>A workspace that gets quieter as it gets fuller.</h2>
            <p>One place for the fragments, the references, and the next good question.</p>
          </div>
          <AppPreview />
        </section>

        <section className="quote-section quote-section-one">
          <blockquote>
            “The best note is the one that gives you your own thinking back.”
          </blockquote>
          <span>Noted is built for that moment.</span>
        </section>
      </main>
      <Footer current="one" />
    </div>
  );
}

function IterationTwo() {
  return (
    <div className="landing landing-two">
      <SiteHeader />
      <main>
        <section className="hero hero-two" id="top">
          <div className="hero-two-copy reveal reveal-one">
            <p className="eyebrow">NOTE TAKING FOR THE LONG GAME</p>
            <h1>Your mind is not a filing cabinet.</h1>
            <p className="hero-description">
              Keep the fragments that make a project, a practice, or a life feel like yours.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="#method">Try Noted</PrimaryLink>
            </div>
          </div>
          <div className="hero-two-image reveal reveal-two">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/field-notes.webp"
              alt="Open notebook and index cards arranged on a linen surface"
              priority
            />
          </div>
        </section>

        <section className="statement-two" id="why">
          <h2>Keep the fragment. Build the thread.</h2>
          <div className="statement-two-grid">
            <p>Noted is a home for the ideas that do not fit in a task list.</p>
            <p>It helps you notice what your notes are already trying to say.</p>
          </div>
        </section>

        <section className="paper-wall-two">
          <article className="paper-note paper-note-large">
            <span>01 / loose thought</span>
            <h3>What if the archive is part of the creative act?</h3>
            <p>Keep the question close enough that it can change shape.</p>
          </article>
          <article className="paper-note paper-note-blue">
            <span>02 / reference</span>
            <h3>Books are not a backlog.</h3>
            <p>Save the line that will still matter later.</p>
          </article>
          <article className="paper-note paper-note-small">
            <span>03 / next move</span>
            <h3>Make the smallest version.</h3>
          </article>
          <article className="paper-note paper-note-outline">
            <span>04 / return point</span>
            <h3>Start with the part you can see.</h3>
          </article>
        </section>

        <section className="texture-band-two">
          <div className="texture-band-two-image">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
              alt="Notebook pages and clipped cards arranged on an ink-blue surface"
            />
          </div>
          <div className="texture-band-two-copy">
            <h2>A little texture helps an idea stay close.</h2>
            <p>Noted gives the archive enough warmth to feel lived in, without adding noise.</p>
          </div>
        </section>

        <section className="section method-two" id="method">
          <div className="method-two-copy">
            <h2>Your archive should feel like a table, not a warehouse.</h2>
            <p>
              Noted keeps the surface simple so the relationships between your ideas can do the interesting work.
            </p>
            <SecondaryLink href="#return">Read the rhythm</SecondaryLink>
          </div>
          <div className="method-two-preview" id="return">
            <AppPreview compact />
          </div>
        </section>

        <section className="pull-quote-two">
          <span className="pull-quote-rule" aria-hidden="true" />
          <blockquote>“I stopped losing the thoughts I was not ready to use yet.”</blockquote>
          <cite>June Park, independent researcher</cite>
        </section>
      </main>
      <Footer current="two" />
    </div>
  );
}

function IterationThree() {
  return (
    <div className="landing landing-three">
      <SiteHeader dark />
      <main>
        <section className="hero hero-three" id="top">
          <div className="hero-three-copy reveal reveal-one">
            <p className="eyebrow">A QUIETER PLACE FOR THE SIGNAL</p>
            <h1>Keep the signal. Lose the noise.</h1>
            <p className="hero-description">
              A second brain for the ideas that deserve more than a browser tab.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="#method">Try Noted</PrimaryLink>
              <SecondaryLink href="#why">See the system</SecondaryLink>
            </div>
          </div>
          <div className="hero-three-preview reveal reveal-two">
            <AppPreview dark />
          </div>
        </section>

        <section className="signal-band" id="why">
          <div className="signal-band-lead">
            <span>Good systems reduce the distance between noticing and doing.</span>
          </div>
          <div className="signal-step"><span>01</span><strong>Collect</strong><small>Catch the first version.</small></div>
          <div className="signal-step"><span>02</span><strong>Connect</strong><small>Find the nearby thought.</small></div>
          <div className="signal-step"><span>03</span><strong>Clarify</strong><small>Give it a sharper edge.</small></div>
          <div className="signal-step"><span>04</span><strong>Create</strong><small>Let the notes leave the page.</small></div>
        </section>

        <section className="section focus-three" id="method">
          <div className="focus-three-copy">
            <h2>Build a trail your future self can follow.</h2>
            <p>
              Noted turns your notes into a living index. Each return adds a little more shape to what you already know.
            </p>
          </div>
          <div className="signal-map" aria-label="How an idea becomes useful">
            <div className="signal-map-line" aria-hidden="true" />
            <article><span>01</span><h3>Notice</h3><p>Save the spark before it disappears.</p></article>
            <article><span>02</span><h3>Place</h3><p>Give it a home beside related work.</p></article>
            <article><span>03</span><h3>Return</h3><p>Use the context to move forward.</p></article>
          </div>
        </section>

        <section className="signal-image-section">
          <div className="signal-image-copy">
            <span className="signal-count">A workspace with memory.</span>
            <h2>The surface stays calm. The thinking gets deeper.</h2>
          </div>
          <div className="signal-image-stack">
            <div className="signal-image">
              <StillLifeImage
                src="/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
                alt="Layered notebook pages and paper fragments in an ink-blue setting"
              />
            </div>
            <div className="signal-image-secondary">
              <StillLifeImage
                src="/variants/with-taste-skill/luna/assets/field-notes.webp"
                alt="Stack of field notes and index cards in soft morning light"
              />
            </div>
          </div>
        </section>

        <section className="dark-quote-three">
          <blockquote>“Noted gives my ideas somewhere to wait for me.”</blockquote>
          <cite>Ravi Mehta, product builder</cite>
        </section>
      </main>
      <Footer current="three" />
    </div>
  );
}

function IterationFour() {
  return (
    <div className="landing landing-four">
      <SiteHeader />
      <main>
        <section className="hero hero-four" id="top">
          <div className="hero-four-copy reveal reveal-one">
            <p className="eyebrow">THE ARCHIVE THAT IS YOURS</p>
            <h1>Put the good stuff somewhere.</h1>
            <p className="hero-description">
              Noted is the direct, durable place for the ideas you are not ready to lose.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="#method">Try Noted</PrimaryLink>
            </div>
          </div>
          <div className="hero-four-image reveal reveal-two">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
              alt="Open notebook and clipped paper fragments against a dark blue surface"
              priority
            />
          </div>
        </section>

        <section className="brutal-intro" id="why">
          <h2>Your notes are not content. They are material.</h2>
          <p>Keep the fragments close enough to turn into something.</p>
        </section>

        <section className="brutal-grid-four">
          <article className="brutal-tile brutal-tile-red">
            <span>Collect</span>
            <h3>Make the note before you make it good.</h3>
          </article>
          <article className="brutal-tile brutal-tile-black">
            <span>Connect</span>
            <h3>Put adjacent ideas in the same room.</h3>
          </article>
          <article className="brutal-tile brutal-tile-image">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/field-notes.webp"
              alt="Index cards stacked next to an open notebook"
            />
          </article>
          <article className="brutal-tile brutal-tile-paper">
            <span>Return</span>
            <h3>Future you deserves the context.</h3>
          </article>
          <article className="brutal-tile brutal-tile-outline">
            <span>Make</span>
            <h3>Let the archive become the next thing.</h3>
          </article>
        </section>

        <section className="ledger-four" id="method">
          <div className="ledger-four-heading">
            <h2>Less filing. More finding.</h2>
            <p>The product stays out of the way until you need the thread.</p>
          </div>
          <div className="ledger-list">
            <div><span>Capture</span><strong>One quick place for the first draft.</strong></div>
            <div><span>Context</span><strong>Links that show why a note matters.</strong></div>
            <div><span>Search</span><strong>A clear route back to the useful thing.</strong></div>
            <div><span>Focus</span><strong>A surface with less to compete with.</strong></div>
          </div>
        </section>

        <section className="brutal-close-four">
          <h2>Give your ideas a better address.</h2>
          <PrimaryLink href="#top">Try Noted</PrimaryLink>
        </section>
      </main>
      <Footer current="four" />
    </div>
  );
}

function IterationFive() {
  return (
    <div className="landing landing-five">
      <SiteHeader />
      <main>
        <section className="hero hero-five" id="top">
          <div className="hero-five-image reveal reveal-one">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/field-notes.webp"
              alt="A calm stack of notebook pages and index cards in soft light"
              priority
            />
          </div>
          <div className="hero-five-copy reveal reveal-two">
            <p className="eyebrow">A PLACE TO COME BACK TO</p>
            <h1>Make room for what matters.</h1>
            <p className="hero-description">
              Noted helps you keep the ideas, questions, and references that make your work feel like yours.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="#method">Try Noted</PrimaryLink>
              <SecondaryLink href="#why">Why Noted</SecondaryLink>
            </div>
          </div>
        </section>

        <section className="welcome-five" id="why">
          <div className="welcome-five-mark" aria-hidden="true">n</div>
          <div>
            <h2>Some thoughts need a home before they need a plan.</h2>
            <p>Noted makes that home easy to open, easy to trust, and easy to keep.</p>
          </div>
        </section>

        <section className="method-five" id="method">
          <div className="method-five-copy">
            <h2>From note to next move.</h2>
            <p>Keep the space between the first thought and the finished thing useful.</p>
          </div>
          <div className="method-five-steps">
            <article><span>01</span><h3>Write it down</h3><p>Start with the words you have.</p></article>
            <article><span>02</span><h3>Leave a trail</h3><p>Add the link that makes it yours.</p></article>
            <article><span>03</span><h3>Come back ready</h3><p>Find the thought with its context intact.</p></article>
          </div>
        </section>

        <section className="material-five">
          <div className="material-five-copy">
            <h2>The archive should carry some evidence of you.</h2>
            <p>Keep the sketches, the half-sentences, and the odd reference that makes the thread yours.</p>
          </div>
          <div className="material-five-image">
            <StillLifeImage
              src="/variants/with-taste-skill/luna/assets/notebook-still-life.webp"
              alt="Open notebook with paper fragments and a graphite pencil"
            />
          </div>
        </section>

        <section className="human-five">
          <div className="human-five-preview">
            <AppPreview compact />
          </div>
          <div className="human-five-copy">
            <h2>Personal, without being precious.</h2>
            <p>
              A good second brain should feel less like a system to maintain and more like a room where your thinking can breathe.
            </p>
            <blockquote>“I can finally find the thought behind the task.”</blockquote>
            <cite>Mara Chen, product designer</cite>
          </div>
        </section>

        <section className="soft-close-five">
          <div>
            <h2>Keep a place for the next good idea.</h2>
            <p>Try Noted and make your archive feel a little more like you.</p>
          </div>
          <PrimaryLink href="#top">Try Noted</PrimaryLink>
        </section>
      </main>
      <Footer current="five" />
    </div>
  );
}

export function LandingPage({ iteration }: { iteration: IterationKey }) {
  switch (iteration) {
    case "two":
      return <IterationTwo />;
    case "three":
      return <IterationThree />;
    case "four":
      return <IterationFour />;
    case "five":
      return <IterationFive />;
    case "one":
    default:
      return <IterationOne />;
  }
}
