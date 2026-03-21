import { motion } from 'motion/react'
import './Velvet.css'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Velvet() {
  return (
    <div className="velvet">
      <div className="velvet-grain" />

      <nav className="velvet-nav">
        <div className="velvet-nav-left">
          <span className="velvet-wordmark">Mnemo</span>
        </div>
        <div className="velvet-nav-center">
          <a href="#" className="velvet-nav-link">About</a>
          <span className="velvet-nav-sep">·</span>
          <a href="#" className="velvet-nav-link">Features</a>
          <span className="velvet-nav-sep">·</span>
          <a href="#" className="velvet-nav-link">Journal</a>
          <span className="velvet-nav-sep">·</span>
          <a href="#" className="velvet-nav-link">Pricing</a>
        </div>
        <div className="velvet-nav-right">
          <a href="#" className="velvet-nav-cta">Begin</a>
        </div>
      </nav>

      <section className="velvet-hero">
        <motion.div
          className="velvet-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="velvet-kicker" variants={fadeUp}>
            A sanctuary for thought
          </motion.p>

          <motion.h1 className="velvet-headline" variants={fadeUp}>
            The quiet place<br />
            where ideas<br />
            <em>remember</em> themselves
          </motion.h1>

          <motion.p className="velvet-subline" variants={fadeUp}>
            Mnemo is a second brain built on the principle that great thinking
            deserves beautiful architecture. Capture, connect, and cultivate
            your ideas in an environment designed for depth.
          </motion.p>

          <motion.div className="velvet-hero-actions" variants={fadeUp}>
            <button className="velvet-btn-primary">Start Writing</button>
            <button className="velvet-btn-ghost">Watch the Film →</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="velvet-hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="velvet-card-stack">
            <div className="velvet-card velvet-card-1">
              <div className="velvet-card-date">March 14, 2026</div>
              <p className="velvet-card-text">
                "The best ideas arrive unannounced — the mind must always be prepared 
                to receive them."
              </p>
              <div className="velvet-card-tag">Philosophy</div>
            </div>
            <div className="velvet-card velvet-card-2">
              <div className="velvet-card-date">March 12, 2026</div>
              <p className="velvet-card-text">
                Connection between neural plasticity and creative output. 
                See: Kahneman, Ch. 4.
              </p>
              <div className="velvet-card-tag">Research</div>
            </div>
            <div className="velvet-card velvet-card-3">
              <div className="velvet-card-date">March 9, 2026</div>
              <p className="velvet-card-text">
                Three-part structure for the essay on digital memory.
                Outline attached.
              </p>
              <div className="velvet-card-tag">Writing</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="velvet-divider">
        <div className="velvet-divider-line" />
        <span className="velvet-divider-ornament">✦</span>
        <div className="velvet-divider-line" />
      </section>

      <section className="velvet-features">
        <motion.div
          className="velvet-features-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 className="velvet-section-title" variants={fadeUp}>
            Crafted for the<br />contemplative mind
          </motion.h2>
          <motion.p className="velvet-section-sub" variants={fadeUp}>
            Every detail considered. Every interaction intentional.
          </motion.p>
        </motion.div>

        <motion.div
          className="velvet-feature-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {[
            { num: '01', title: 'Fluid Capture', desc: 'Thought moves faster than typing. Mnemo\'s capture system adapts — voice, text, sketch, or photograph — preserving the raw shape of your thinking.' },
            { num: '02', title: 'Living Connections', desc: 'Notes are not isolated. Mnemo weaves a web of meaning between your entries, surfacing relationships you hadn\'t yet perceived.' },
            { num: '03', title: 'Deep Focus Mode', desc: 'A writing environment stripped of distraction. Just you, your thoughts, and a canvas that responds to your rhythm.' },
            { num: '04', title: 'Temporal Navigation', desc: 'Browse your mind through time. See how ideas evolved, branched, and converged across weeks, months, years.' },
          ].map(f => (
            <motion.div key={f.num} className="velvet-feature-item" variants={fadeUp}>
              <span className="velvet-feature-num">{f.num}</span>
              <div>
                <h3 className="velvet-feature-title">{f.title}</h3>
                <p className="velvet-feature-desc">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="velvet-quote">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>"I stopped losing ideas the day I started using Mnemo. It's not a tool — it's an extension of how I think."</p>
          <cite>— Elena Vasquez, essayist & researcher</cite>
        </motion.blockquote>
      </section>

      <section className="velvet-cta-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="velvet-cta-title" variants={fadeUp}>
            Your thoughts deserve<br />a beautiful home.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <button className="velvet-btn-primary velvet-btn-lg">Begin your practice</button>
          </motion.div>
          <motion.p className="velvet-cta-note" variants={fadeUp}>
            Free for personal use. No credit card required.
          </motion.p>
        </motion.div>
      </section>

      <footer className="velvet-footer">
        <div className="velvet-footer-top">
          <span className="velvet-wordmark">Mnemo</span>
          <p className="velvet-footer-tagline">The architecture of memory.</p>
        </div>
        <div className="velvet-footer-bottom">
          <p>© 2026 Mnemo, Inc.</p>
          <div className="velvet-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

