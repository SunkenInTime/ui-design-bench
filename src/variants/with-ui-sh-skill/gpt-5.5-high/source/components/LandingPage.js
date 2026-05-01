export const iterations = [
  {
    slug: "one",
    number: "01",
    label: "Archive Garden",
    description: "Organic knowledge garden with living note clusters.",
  },
  {
    slug: "two",
    number: "02",
    label: "Neural Night",
    description: "Dark graph workspace for fast capture and recall.",
  },
  {
    slug: "three",
    number: "03",
    label: "Editorial Desk",
    description: "Magazine-like research desk for polished thinking.",
  },
  {
    slug: "four",
    number: "04",
    label: "Spatial Canvas",
    description: "Playful visual board for connected ideas.",
  },
  {
    slug: "five",
    number: "05",
    label: "Quiet Monastery",
    description: "Calm focus system for daily knowledge practice.",
  },
];

const features = [
  ["Capture without friction", "Drop thoughts, links, highlights, and voice notes before they fade."],
  ["Connect ideas automatically", "Bidirectional links and AI prompts reveal patterns across your archive."],
  ["Retrieve what matters", "Ask natural questions and get sourced answers from your own thinking."],
];

function BrandMark({ name = "Mnemo" }) {
  return (
    <a href="#demo" className="brand-mark" aria-label="Homepage">
      <span className="brand-glyph" aria-hidden="true">m</span>
      <span>{name}</span>
    </a>
  );
}

function PrimaryCta({ children = "Start building memory" }) {
  return (
    <a className="primary-cta" href="#demo">
      {children}
    </a>
  );
}

function SecondaryCta({ children = "Watch the tour" }) {
  return (
    <a className="secondary-cta" href="#features">
      {children}
    </a>
  );
}

function Header({ tone = "" }) {
  return (
    <header className={`site-header ${tone}`}>
      <BrandMark />
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#demo">Demo</a>
      </nav>
      <a className="header-action" href="#demo">Join waitlist</a>
    </header>
  );
}

function FeatureList({ className = "" }) {
  return (
    <dl className={`feature-list ${className}`}>
      {features.map(([title, body]) => (
        <div className="feature-item" key={title}>
          <dt>{title}</dt>
          <dd>{body}</dd>
        </div>
      ))}
    </dl>
  );
}

function KnowledgeGraph({ variant = "" }) {
  return (
    <div className={`knowledge-graph ${variant}`} aria-label="Connected notes preview">
      <div className="graph-node node-a">Atomic note</div>
      <div className="graph-node node-b">Project brief</div>
      <div className="graph-node node-c">Book quote</div>
      <div className="graph-node node-d">Research thread</div>
      <div className="graph-node node-e">Next action</div>
      <svg viewBox="0 0 640 420" role="img" aria-label="Lines connecting related notes">
        <path d="M140 105 C210 70 280 90 352 148" />
        <path d="M352 148 C425 128 510 142 555 205" />
        <path d="M352 148 C310 220 242 260 174 306" />
        <path d="M174 306 C282 334 400 320 494 288" />
        <path d="M494 288 C454 226 402 184 352 148" />
      </svg>
    </div>
  );
}

function ArchiveGarden() {
  return (
    <main className="page page-garden isolate">
      <Header />
      <section className="garden-hero">
        <div className="hero-copy">
          <p className="eyebrow">Second brain, first calm thought</p>
          <h1>Grow a living archive that remembers how your ideas relate.</h1>
          <p className="hero-lede">
            Mnemo turns scattered notes into a tended knowledge garden: capture fast,
            link naturally, and return to the exact idea when it becomes useful.
          </p>
          <div className="hero-actions">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
        <div className="garden-preview" id="demo">
          <div className="leaf-card card-one">
            <span>Seed</span>
            <strong>Why attention slips after meetings</strong>
          </div>
          <div className="leaf-card card-two">
            <span>Connection</span>
            <strong>Decision fatigue, open loops, weekly review</strong>
          </div>
          <div className="leaf-card card-three">
            <span>Bloom</span>
            <strong>Drafted: a calmer onboarding ritual</strong>
          </div>
          <KnowledgeGraph variant="garden-lines" />
        </div>
      </section>
      <section className="garden-section" id="features">
        <p className="section-kicker">How it compounds</p>
        <h2>Every note gets a place to grow.</h2>
        <FeatureList />
      </section>
      <section className="garden-workflow" id="workflow">
        <div>
          <p className="section-kicker">Daily loop</p>
          <h2>Plant, connect, harvest.</h2>
        </div>
        <div className="workflow-row">
          <span>01 Capture a fragment</span>
          <span>02 Let Mnemo suggest links</span>
          <span>03 Ask your archive what changed</span>
        </div>
      </section>
    </main>
  );
}

function NeuralNight() {
  return (
    <main className="page page-neural isolate">
      <Header tone="dark" />
      <section className="neural-hero">
        <div className="neural-grid-bg" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Memory engine online</p>
          <h1>Your private neural net for decisions, research, and recall.</h1>
          <p className="hero-lede">
            Capture the signal, map the hidden relationships, and query your own
            history with answers that cite the notes they came from.
          </p>
          <div className="hero-actions">
            <PrimaryCta>Run a memory scan</PrimaryCta>
            <SecondaryCta>Inspect the graph</SecondaryCta>
          </div>
        </div>
        <div className="terminal-preview" id="demo">
          <div className="terminal-top">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-body">
            <p><b>mnemo.query</b> &quot;What did I learn about sleep and focus?&quot;</p>
            <div className="answer-card">
              <span>Answer synthesized from 19 notes</span>
              <strong>Deep work improved when meetings moved after 1pm and recovery notes mentioned morning light.</strong>
            </div>
            <KnowledgeGraph variant="neural-lines" />
          </div>
        </div>
      </section>
      <section className="neural-band" id="features">
        <div>
          <p className="section-kicker">Systems for recall</p>
          <h2>Structured like software, flexible like thought.</h2>
        </div>
        <FeatureList />
      </section>
      <section className="neural-metrics" id="workflow">
        <div><strong>1.8M</strong><span>relations indexed</span></div>
        <div><strong>42ms</strong><span>semantic lookup</span></div>
        <div><strong>100%</strong><span>local-first vault</span></div>
      </section>
    </main>
  );
}

function EditorialDesk() {
  return (
    <main className="page page-editorial isolate">
      <Header />
      <section className="editorial-hero">
        <aside className="issue-label" aria-label="Edition information">
          <span>Issue 01</span>
          <span>Personal Knowledge</span>
          <span>Spring archive</span>
        </aside>
        <div className="hero-copy">
          <p className="eyebrow">For people who think in drafts</p>
          <h1>A second brain that reads like a desk covered in breakthroughs.</h1>
          <p className="hero-lede">
            Mnemo gives your notes the ritual of an editorial room: sources in
            the margins, claims in the center, and every hunch ready to become a page.
          </p>
          <div className="hero-actions">
            <PrimaryCta>Open the desk</PrimaryCta>
            <SecondaryCta>Read sample notes</SecondaryCta>
          </div>
        </div>
        <div className="paper-stack" id="demo">
          <article>
            <span>Margin note</span>
            <h2>The idea was hiding in three unrelated meetings.</h2>
            <p>Mnemo surfaced the same phrase across a customer call, a book highlight, and a product memo.</p>
          </article>
          <div className="clipping">linked source / 14</div>
          <div className="quote-card">&quot;The archive becomes useful when it starts arguing back.&quot;</div>
        </div>
      </section>
      <section className="editorial-columns" id="features">
        <div>
          <p className="section-kicker">Desk tools</p>
          <h2>Designed for the messy middle between reading and writing.</h2>
        </div>
        <FeatureList />
      </section>
      <section className="editorial-footer-cta" id="workflow">
        <p>Capture the source. Develop the claim. Publish the thought.</p>
      </section>
    </main>
  );
}

function SpatialCanvas() {
  return (
    <main className="page page-canvas isolate">
      <Header />
      <section className="canvas-hero">
        <div className="hero-copy">
          <p className="eyebrow">Think with your hands again</p>
          <h1>Throw every note onto the canvas, then let patterns snap into place.</h1>
          <p className="hero-lede">
            A playful second brain for visual thinkers: clusters, trails, sticky
            insights, and an assistant that notices the board taking shape.
          </p>
          <div className="hero-actions">
            <PrimaryCta>Make a board</PrimaryCta>
            <SecondaryCta>Browse templates</SecondaryCta>
          </div>
        </div>
        <div className="canvas-board" id="demo">
          <div className="sticky yellow">Focus sprint notes</div>
          <div className="sticky pink">Podcast idea: memory as terrain</div>
          <div className="sticky blue">Customer theme: &quot;I forgot where I wrote it&quot;</div>
          <div className="sticky green">Ship: weekly synthesis ritual</div>
          <div className="canvas-thread" aria-hidden="true" />
        </div>
      </section>
      <section className="canvas-features" id="features">
        <div>
          <p className="section-kicker">Visual memory</p>
          <h2>Messy inputs, meaningful constellations.</h2>
        </div>
        <FeatureList />
      </section>
      <section className="canvas-steps" id="workflow">
        <span>Drop</span>
        <span>Cluster</span>
        <span>Remember</span>
      </section>
    </main>
  );
}

function QuietMonastery() {
  return (
    <main className="page page-monastery isolate">
      <Header />
      <section className="monastery-hero">
        <div className="hero-copy">
          <p className="eyebrow">A quieter way to keep knowledge</p>
          <h1>One calm place for the thoughts you want to meet again.</h1>
          <p className="hero-lede">
            Mnemo removes the noise from personal knowledge management with a
            daily practice for capture, reflection, and dependable retrieval.
          </p>
          <div className="hero-actions">
            <PrimaryCta>Begin the practice</PrimaryCta>
            <SecondaryCta>See the ritual</SecondaryCta>
          </div>
        </div>
        <div className="monastery-card" id="demo">
          <span>Today&apos;s reflection</span>
          <p>
            The important ideas are usually quiet at first. Return to them after
            sleep, connect them to the project, then decide what they ask of you.
          </p>
          <div className="ritual-line">
            <span>Capture</span>
            <span>Clarify</span>
            <span>Return</span>
          </div>
        </div>
      </section>
      <section className="monastery-features" id="features">
        <div>
          <p className="section-kicker">Low-noise knowledge</p>
          <h2>Everything important, nothing frantic.</h2>
        </div>
        <FeatureList />
      </section>
      <section className="monastery-quote" id="workflow">
        <p>Build a memory palace one deliberate note at a time.</p>
      </section>
    </main>
  );
}

const pageMap = {
  one: ArchiveGarden,
  two: NeuralNight,
  three: EditorialDesk,
  four: SpatialCanvas,
  five: QuietMonastery,
};

export default function LandingPage({ iteration }) {
  const Page = pageMap[iteration] || ArchiveGarden;

  return <Page />;
}
