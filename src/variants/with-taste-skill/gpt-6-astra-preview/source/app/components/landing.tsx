import Image from "next/image";
import {
  ArrowDownRight, ArrowUpRight, Asterisk, BookOpen, Check,
  Compass, Flower, Leaf, Lightbulb, LinkSimple, LockKey, MagnifyingGlass,
  NotePencil, Plant, Play,
} from "@phosphor-icons/react/dist/ssr";
import type { Design } from "../lib/designs";
import { Experience, Navigation, StartButton, Brand } from "./experience";
import { InterestShelf } from "./interest-shelf";
import { NotebookDemo } from "./notebook-demo";
import { Reveal } from "./reveal";

const content = {
  one: { productTitle: "A little less scattered.", productAccent: "A lot more connected.", productBody: "Give your thoughts a home. Find the connections that turn a passing idea into something more." },
  two: { productTitle: "Everything clicks.", productAccent: "Including your ideas.", productBody: "Capture a thought, add a topic, and find the connections. Your next idea might already be here." },
  three: { productTitle: "Good things grow", productAccent: "when you give them space.", productBody: "A passing thought becomes a note. A note finds a connection. Over time, a world of your own takes shape." },
  four: { productTitle: "Messy thoughts welcome.", productAccent: "Interesting things happen here.", productBody: "The half-formed ideas. The sudden obsessions. The things you saved for someday. They all belong." },
  five: { productTitle: "Put it down.", productAccent: "Let your mind wander.", productBody: "Keep the things that matter somewhere you can find them. Leave a little more room for the present." },
};

export function Landing({ variant }: { variant: Design }) {
  return (
    <Experience variant={variant}>
      {variant === "five" && <div className="horizon-backdrop" aria-hidden="true"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/horizon.webp" alt="" fill sizes="100vw" preload /><div className="horizon-scrim" /></div>}
      <Navigation />
      <main id="main">
        {variant === "one" && <PaperHero />}
        {variant === "two" && <ConnectedHero />}
        {variant === "three" && <GardenHero />}
        {variant === "four" && <CuriousHero />}
        {variant === "five" && <HorizonHero />}
        {(variant === "one" || variant === "four") && <InterestShelf />}
        <ProductSection variant={variant} />
        <WhySection variant={variant} />
        <PricingSection />
      </main>
      <Footer />
    </Experience>
  );
}

function HeroActions({ secondary = "Take a look" }: { secondary?: string }) {
  return <div className="hero-actions"><StartButton /><a className="button button-secondary" href="#product"><Play size={15} weight="fill" aria-hidden="true" />{secondary}</a></div>;
}

function PaperHero() {
  return <section className="hero hero-one page-container" aria-labelledby="hero-title">
    <Reveal className="hero-copy" onLoad>
      <p className="eyebrow"><Asterisk size={15} weight="bold" aria-hidden="true" />A second brain, uniquely yours</p>
      <h1 id="hero-title">A little space.<span>For a big mind.</span></h1>
      <p className="hero-description">Keep your notes, ideas, and little discoveries together. Make room for what comes next.</p>
      <HeroActions />
    </Reveal>
    <Reveal className="hero-visual paper-visual" onLoad delay={0.12}>
      <Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/paper-collage.webp" alt="A collection of handwritten thoughts, a mountain photograph, and botanical discoveries" fill sizes="(max-width: 767px) 100vw, 56vw" preload />
    </Reveal>
  </section>;
}

function ConnectedHero() {
  return <section className="hero hero-two page-container" aria-labelledby="hero-title">
    <Reveal className="hero-copy" onLoad>
      <p className="eyebrow"><LinkSimple size={15} aria-hidden="true" />A home for connected thinking</p>
      <h1 id="hero-title">Think outside<span>the folder.</span></h1>
      <p className="hero-description">Your notes are more than files. Connect what you know, and discover what comes next.</p>
      <HeroActions secondary="Explore Aster" />
    </Reveal>
    <Reveal className="connected-workspace" onLoad delay={0.12}><NotebookDemo /></Reveal>
  </section>;
}

function GardenHero() {
  return <section className="hero hero-three page-container" aria-labelledby="hero-title">
    <Reveal className="hero-copy" onLoad>
      <p className="eyebrow"><Leaf size={15} aria-hidden="true" />A garden for your mind</p>
      <h1 id="hero-title">Let your<span>thinking grow.</span></h1>
      <p className="hero-description">A thoughtful home for notes and ideas. Plant a thought, find a connection, and see where it takes you.</p>
      <HeroActions />
    </Reveal>
    <Reveal className="hero-visual garden-visual" onLoad delay={0.12}>
      <Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/garden.webp" alt="A ginkgo tree taking root in a moss-covered stone beside a botanical drawing" fill sizes="(max-width: 767px) 100vw, 45vw" preload />
    </Reveal>
  </section>;
}

function CuriousHero() {
  return <section className="hero hero-four" aria-labelledby="hero-title">
    <Reveal className="hero-copy page-container" onLoad>
      <h1 id="hero-title">For your<span>many minds.</span></h1>
      <p className="hero-description">Big ideas, tiny observations, rabbit holes. Keep everything that makes your mind yours.</p>
      <HeroActions />
    </Reveal>
    <Reveal className="curious-visual" onLoad delay={0.15}><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/scrapbook.webp" alt="A playful collection of what-if notes, an orange paper star, and photos of everyday discoveries" fill sizes="(max-width: 767px) 100vw, 1240px" preload /></Reveal>
  </section>;
}

function HorizonHero() {
  return <section className="hero hero-five page-container" aria-labelledby="hero-title">
    <Reveal className="hero-copy" onLoad>
      <p className="eyebrow">A little more headspace</p>
      <h1 id="hero-title">More space<span>to be yourself.</span></h1>
      <p className="hero-description">A second brain for what you want to remember. More room for everything you want to do.</p>
      <HeroActions />
    </Reveal>
  </section>;
}

function ProductSection({ variant }: { variant: Design }) {
  const copy = content[variant];
  if (variant === "two") return <section className="section connected-product page-container" id="product" aria-labelledby="product-title">
    <Reveal className="connected-product-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/blue-knot.webp" alt="Folded paper passing through a sculptural blue knot, a study in connection" fill sizes="(max-width: 767px) 100vw, 50vw" /></Reveal>
    <Reveal className="connected-product-copy">
      <h2 id="product-title">{copy.productTitle}<span>{copy.productAccent}</span></h2><p>{copy.productBody}</p>
      <FeatureList />
    </Reveal>
  </section>;

  return <section className={`section product-section product-${variant} page-container`} id="product" aria-labelledby="product-title">
    <Reveal className="section-intro">
      <h2 id="product-title">{copy.productTitle}<span>{copy.productAccent}</span></h2>
      <p>{copy.productBody}</p>
      {(variant === "three" || variant === "five") && <FeatureList />}
    </Reveal>
    <Reveal className="product-workspace"><NotebookDemo /></Reveal>
    {(variant === "one" || variant === "four") && <div className="workspace-caption"><NotePencil size={16} /><span>This is your space to try. Add a note, follow a connection, make it yours.</span></div>}
  </section>;
}

function FeatureList() {
  return <ul className="feature-list">
    <li><NotePencil size={22} weight="light" /><div><h3>Catch a thought</h3><p>Write it down while it is still fresh.</p></div></li>
    <li><LinkSimple size={22} weight="light" /><div><h3>Connect the dots</h3><p>Shared topics bring related notes together.</p></div></li>
    <li><MagnifyingGlass size={22} weight="light" /><div><h3>Find your way back</h3><p>Search a word. Pick up where you left off.</p></div></li>
  </ul>;
}

function WhySection({ variant }: { variant: Design }) {
  if (variant === "three") return <section className="section garden-why page-container" id="why-aster" aria-labelledby="why-title">
    <Reveal className="garden-statement"><Flower size={40} weight="light" /><h2 id="why-title">A thought does not need<br />a deadline to deserve a place.</h2><p>Keep what matters to you. Let the connections grow at their own pace.</p></Reveal>
    <div className="garden-pair">
      <Reveal><div className="garden-pair-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/paper-collage.webp" alt="Handwritten observations gathered with photographs and leaves" fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className="image-story"><BookOpen size={20} /><div><h3>Collect what catches your attention.</h3><p>A sentence, a sketch, a question. Small things make a rich inner world.</p></div></div></Reveal>
      <Reveal delay={0.08}><div className="garden-pair-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/horizon.webp" alt="Mountains reflected in a still alpine lake" fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className="image-story"><Compass size={20} /><div><h3>Leave room for a different direction.</h3><p>Your notebook can change as you do. There is no right way to think.</p></div></div></Reveal>
    </div>
  </section>;

  if (variant === "four") return <section className="section curious-why page-container" id="why-aster" aria-labelledby="why-title">
    <Reveal className="curious-why-heading"><Asterisk size={46} weight="bold" /><h2 id="why-title">You contain<br />a lot of interesting things.</h2><p>Give them somewhere to meet.</p></Reveal>
    <div className="curious-tiles">
      <Reveal className="curious-tile curious-tile-photo"><div className="curious-tile-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/garden.webp" alt="A ginkgo tree growing in an unexpected place" fill sizes="(max-width: 767px) 100vw, 35vw" /></div><h3>Room for your latest obsession.</h3><p>Yes, even that one.</p></Reveal>
      <Reveal className="curious-tile curious-tile-type" delay={0.08}><Lightbulb size={46} weight="light" /><h3>It started<br />with a<br /><span>“what if?”</span></h3><p>Keep the small thought that could become a big thing.</p><StartButton /></Reveal>
      <Reveal className="curious-tile curious-tile-wide" delay={0.12}><div><Plant size={25} weight="light" /><h3>There is no perfect way to begin.</h3><p>A few words are all it takes.</p></div><div className="curious-wide-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/paper-collage.webp" alt="A collection of small discoveries and handwritten notes" fill sizes="(max-width: 767px) 100vw, 55vw" /></div></Reveal>
    </div>
  </section>;

  return <section className={`section why-section why-${variant} page-container`} id="why-aster" aria-labelledby="why-title">
    <Reveal className="section-intro"><h2 id="why-title">{variant === "five" ? "Life is bigger than your notes." : variant === "two" ? "A place for the bigger picture." : "For everything on your mind."}</h2><p>{variant === "five" ? "Keep a little of it here. Take the rest with you." : "The work in progress. The book you loved. The idea you cannot quite explain yet. It all belongs."}</p></Reveal>
    <div className="story-grid">
      <Reveal className="story story-large"><div className="story-image"><Image src="/variants/with-taste-skill/gpt-6-astra-preview/images/garden.webp" alt="A small ginkgo tree growing from a moss-covered rock" fill sizes="(max-width: 767px) 100vw, 58vw" /></div><div className="story-copy"><Leaf size={23} weight="light" /><div><h3>Good ideas need room to grow.</h3><p>Collect a little every day. Let your thinking take its own shape.</p></div></div></Reveal>
      <Reveal className="story story-small" delay={0.08}><div className="story-image"><Image src={variant === "five" ? "/variants/with-taste-skill/gpt-6-astra-preview/images/paper-collage.webp" : "/variants/with-taste-skill/gpt-6-astra-preview/images/horizon.webp"} alt={variant === "five" ? "Notes and little discoveries gathered together" : "Still water reflecting a mountain landscape"} fill sizes="(max-width: 767px) 100vw, 38vw" /></div><div className="story-copy"><Compass size={23} weight="light" /><div><h3>Less to hold. More to discover.</h3><p>A place to return to, wherever your curiosity takes you.</p></div></div></Reveal>
    </div>
  </section>;
}

function PricingSection() {
  return <section className="section pricing-section page-container" id="pricing" aria-labelledby="pricing-title">
    <Reveal className="pricing-copy"><Asterisk size={36} weight="bold" aria-hidden="true" /><h2 id="pricing-title">A clearer mind<br />starts with a little space.</h2><p>Your next good idea deserves a home.<br />Make yourself a little room.</p><ArrowDownRight size={40} weight="light" className="pricing-arrow" aria-hidden="true" /></Reveal>
    <Reveal className="personal-plan" delay={0.08}>
      <div className="plan-top"><span>Personal notebook</span><LockKey size={19} /></div>
      <div className="plan-price">Free<span>to make it your own</span></div>
      <p>A small, thoughtful place to begin. No account needed.</p>
      <ul><li><Check size={17} />Notes saved in this browser</li><li><Check size={17} />Connections through shared topics</li><li><Check size={17} />Your notebook, ready to export</li></ul>
      <StartButton />
    </Reveal>
    <div className="pricing-questions">
      <details><summary>Where do my notes live?<PlusGlyph /></summary><p>Your notes are saved locally in this browser. They stay here when you return. Export your notebook to keep a separate copy.</p></details>
      <details><summary>Can I take my notes with me?<PlusGlyph /></summary><p>Yes. Use the export button in your notebook to download your notes as a Markdown file that you can read anywhere.</p></details>
    </div>
  </section>;
}

function PlusGlyph() { return <ArrowUpRight size={16} aria-hidden="true" />; }

function Footer() {
  return <footer className="site-footer page-container"><div><Brand /><p>A home for your whole mind.</p></div><nav aria-label="Footer navigation"><a href="#product">Product<ArrowUpRight size={13} /></a><a href="#why-aster">Why Aster<ArrowUpRight size={13} /></a><a href="#pricing">Pricing<ArrowUpRight size={13} /></a></nav><span className="copyright">© 2026 Aster</span></footer>;
}
