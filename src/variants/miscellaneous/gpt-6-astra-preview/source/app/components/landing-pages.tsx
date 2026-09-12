import Image from "next/image";
import { StartButton } from "./experience";
import { BrandMark, Icon } from "./icons";
import { CollectionPreview, DailyPreview, EditorPreview, GraphPreview, LibraryPreview } from "./previews";
import { FeatureColumns, FeatureStrip, PageFrame, Questions, StartSection } from "./shared";

export function LandingOne() {
  return <PageFrame variant="one">
    <section className="one-hero container"><div className="one-hero-copy"><h1>Your mind,<br />with a little<br /><span>more room.</span></h1><p>For the notes, ideas, and little discoveries<br className="desktop-break" /> you don’t want to lose. A second brain<br className="desktop-break" /> that feels like you.</p><div className="hero-actions"><StartButton>Start your second brain</StartButton><a className="text-button" href="#product">Take a look <Icon name="arrow-down" size={16} /></a></div><p className="hero-footnote">Free to start. Yours to keep.</p></div><div className="one-hero-preview"><LibraryPreview /><div className="preview-under-caption"><span><Icon name="link" size={14} /> Little thoughts. Unexpected connections.</span><BrandMark size={20} /></div></div></section>
    <FeatureStrip intro="A home for every kind of thought." items={[{ icon: "edit", text: "Quick notes" }, { icon: "bookmark", text: "Good finds" }, { icon: "sun", text: "Next big ideas" }, { icon: "network", text: "All the connections" }]} />
    <section className="one-features container" id="why-morrow"><div className="section-intro"><h2>Less keeping track.<br />More connecting dots.</h2><p>Your thoughts don’t arrive in neat little folders.<br />Morrow gives them a place to land, grow,<br />and become something you didn’t expect.</p></div><FeatureColumns items={[{ icon: "edit", title: "Catch it while it’s fresh.", body: "A passing thought, a sentence you love, a plan for someday. Get it out of your head and into a note." }, { icon: "folder", title: "Give your ideas a home.", body: "Keep the everyday alongside the extraordinary. A personal collection that makes sense to you." }, { icon: "network", title: "Follow the loose threads.", body: "Find the links between what you’re reading, thinking, and making. See an old thought in a new light." }]} /></section>
    <StartSection /><Questions />
  </PageFrame>;
}

export function LandingTwo() {
  return <PageFrame variant="two">
    <section className="two-hero container"><div className="two-hero-copy"><h1>Think freely.<br /><span>Keep the good parts.</span></h1><p>A quiet place for your notes. A clear path between your ideas.<br />Your second brain, without the noise.</p><div className="hero-actions"><StartButton>Open your thinking space</StartButton><a className="button button-secondary" href="#product">Explore the workspace <Icon name="arrow-down" size={16} /></a></div></div><EditorPreview /></section>
    <FeatureStrip items={[{ icon: "edit", text: "Made for writing" }, { icon: "network", text: "Connected by you" }, { icon: "lock", text: "A private space" }, { icon: "download", text: "Always yours to export" }]} />
    <section className="two-features container" id="why-morrow"><div><h2>Your train of thought.<br />Fewer interruptions.</h2><p>Open a note. Follow a link. Find the idea you<br className="desktop-break" /> didn’t know you were looking for.</p><a className="text-button" href="#product">Find your starting point <Icon name="arrow-up" size={17} /></a></div><div className="two-feature-rows"><article><Icon name="edit" size={20} /><div><h3>Words first.</h3><p>A considered writing space that leaves room for your thinking. Nothing between you and the page.</p></div></article><article><Icon name="link" size={20} /><div><h3>Thinking goes both ways.</h3><p>Move between connected notes. Follow the context, revisit a question, and pick up a loose thread.</p></div></article><article><Icon name="download" size={20} /><div><h3>Your words. Your files.</h3><p>Write here, take it anywhere. Export to plain Markdown whenever you want.</p></div></article></div></section>
    <StartSection /><Questions />
  </PageFrame>;
}

export function LandingThree() {
  return <PageFrame variant="three">
    <section className="three-hero container"><div className="three-hero-intro"><h1>A place for your<br /><span>curious mind.</span></h1><div><p>The article. The passing thought.<br />The place you’ll go someday.<br />Keep what catches your attention.</p><StartButton>Make yourself at home</StartButton><span className="three-free-note">Your second brain starts with a note.</span></div></div><CollectionPreview /></section>
    <FeatureStrip intro="A collection, not a checklist." items={[{ icon: "note", text: "Write it down" }, { icon: "bookmark", text: "Keep it close" }, { icon: "network", text: "See what connects" }]} />
    <section className="three-features container" id="why-morrow"><figure className="three-photo-note"><Image src="/variants/miscellaneous/gpt-6-astra-preview/images/mountains.jpg" alt="A dramatic mountain peak beneath a soft, open sky" width={900} height={620} sizes="(max-width: 700px) 90vw, 550px" /><figcaption><div><Icon name="globe" size={18} /><span>Somewhere to clear my head.</span></div><span>Places to go</span></figcaption></figure><div className="three-feature-copy"><h2>All these little things.<br />All a little bit you.</h2><p>Your interests don’t need to fit a template. Morrow is a home for the things you’re learning, the places you’re dreaming of, and the ideas still taking shape.</p><ul><li><Icon name="check" size={17} />Start anywhere. A word is enough.</li><li><Icon name="check" size={17} />Return when inspiration finds you.</li><li><Icon name="check" size={17} />Let your collection grow with you.</li></ul><StartButton className="text-button">Find a home for your thoughts</StartButton></div></section>
    <StartSection /><Questions />
  </PageFrame>;
}

export function LandingFour() {
  return <PageFrame variant="four">
    <section className="four-hero container"><div className="four-hero-copy"><h1>A lighter mind<br />starts with<br /><span>a little note.</span></h1><p>A thought you almost forgot.<br />A day you want to remember.<br />A little space to put it all.</p><div className="hero-actions"><StartButton>Open a fresh page</StartButton><a className="text-button" href="#why-morrow">Meet Morrow <Icon name="arrow-down" size={16} /></a></div><div className="four-hero-assurance"><Icon name="lock" size={15} /><span>Private by nature. Free to make your own.</span></div></div><div className="four-notebook-wrap"><DailyPreview /></div></section>
    <div className="four-statement"><div className="container"><p>You don’t have to hold it all in your head.</p><span>That’s what a notebook is for.</span><BrandMark size={28} /></div></div>
    <section className="four-features container" id="why-morrow"><div className="section-intro"><h2>A small habit.<br />A little more headspace.</h2><p>No perfect system to learn.<br />No blank page to get right.<br />Just a place to start, and come back to.</p></div><FeatureColumns items={[{ icon: "sun", title: "Start with today.", body: "A few lines about what’s on your mind. A list of things to try. Give the everyday somewhere to live." }, { icon: "book", title: "Keep the whole story.", body: "The exciting ideas and the ordinary moments. The things you’re still figuring out. There’s room for all of it." }, { icon: "clock", title: "Come back to yourself.", body: "Look at what you were thinking. Pick up an old idea. Find a small reminder of what matters to you." }]} /></section>
    <StartSection /><Questions />
  </PageFrame>;
}

export function LandingFive() {
  return <PageFrame variant="five">
    <section className="five-hero container"><div className="five-hero-copy"><h1>One thought<br />leads to<br /><span>another.</span></h1><p>A note is a beginning. Connect it to what you know,<br className="desktop-break" /> what you’ve found, and what comes next.<br className="desktop-break" /> Meet your second brain.</p><div className="hero-actions"><StartButton>Follow your first thought</StartButton></div><a className="text-button five-preview-link" href="#product">See how it all connects <Icon name="arrow-up" size={15} /></a></div><GraphPreview /></section>
    <FeatureStrip intro="Good ideas don’t live in isolation." items={[{ icon: "note", text: "Capture a thought" }, { icon: "link", text: "Make a connection" }, { icon: "spark", text: "Find a new direction" }]} />
    <section className="five-features container" id="why-morrow"><div className="section-intro"><h2>Make something<br />of what’s on your mind.</h2><p>The interesting part isn’t how much you save.<br />It’s what happens when two ideas find each other.</p></div><div className="five-process"><article><div className="process-number">01<Icon name="note" size={22} /></div><h3>Put it into words.</h3><p>Start with whatever’s in your head. A question, a quote, a very rough idea.</p></article><article><div className="process-number">02<Icon name="network" size={22} /></div><h3>See what’s connected.</h3><p>Explore the paths between your notes. The obvious ones, and the surprising ones.</p></article><article><div className="process-number">03<Icon name="sun" size={22} /></div><h3>Think something new.</h3><p>Follow an old thought somewhere unexpected. That’s where the good stuff begins.</p></article></div></section>
    <StartSection /><Questions />
  </PageFrame>;
}
