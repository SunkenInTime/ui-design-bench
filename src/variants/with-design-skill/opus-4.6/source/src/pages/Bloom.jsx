import { motion } from 'motion/react'
import './Bloom.css'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function FloatingLeaf({ style, delay = 0 }) {
  return (
    <motion.div
      className="bloom-leaf"
      style={style}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -3, 0],
      }}
      transition={{
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 40 60" fill="none" width="40">
        <path
          d="M20 0C20 0 0 20 0 40C0 51 9 60 20 60C31 60 40 51 40 40C40 20 20 0 20 0Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path d="M20 8V52" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </motion.div>
  )
}

export default function Bloom() {
  return (
    <div className="bloom">
      <div className="bloom-bg-gradient" />

      <FloatingLeaf style={{ top: '10%', left: '8%', color: '#7cb87c' }} delay={0} />
      <FloatingLeaf style={{ top: '25%', right: '12%', color: '#a8c090', transform: 'scale(0.7)' }} delay={1.5} />
      <FloatingLeaf style={{ top: '60%', left: '5%', color: '#d4a574', transform: 'scale(0.5) rotate(45deg)' }} delay={3} />
      <FloatingLeaf style={{ top: '45%', right: '6%', color: '#8fbc8f', transform: 'scale(0.8) rotate(-20deg)' }} delay={2} />
      <FloatingLeaf style={{ top: '75%', left: '15%', color: '#b8c99d', transform: 'scale(0.6)' }} delay={4} />

      <nav className="bloom-nav">
        <div className="bloom-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#5a7c4f" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="5" fill="#7cb87c" opacity="0.5" />
            <circle cx="14" cy="8" r="2" fill="#7cb87c" opacity="0.3" />
            <circle cx="19" cy="16" r="2" fill="#7cb87c" opacity="0.3" />
            <circle cx="9" cy="16" r="2" fill="#7cb87c" opacity="0.3" />
          </svg>
          <span className="bloom-logo-text">mnemo</span>
        </div>
        <div className="bloom-nav-links">
          <a href="#" className="bloom-nav-link">Garden</a>
          <a href="#" className="bloom-nav-link">Seeds</a>
          <a href="#" className="bloom-nav-link">Greenhouse</a>
          <a href="#" className="bloom-nav-link bloom-nav-cta">Plant a seed</a>
        </div>
      </nav>

      <section className="bloom-hero">
        <motion.div
          className="bloom-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="bloom-badge" variants={rise}>
            <span className="bloom-badge-dot" />
            Tended by 12,000+ gardeners
          </motion.div>

          <motion.h1 className="bloom-title" variants={rise}>
            Let your thoughts
            <span className="bloom-title-highlight"> grow </span>
            into something
            <span className="bloom-title-script"> beautiful</span>
          </motion.h1>

          <motion.p className="bloom-subtitle" variants={rise}>
            Mnemo is a digital garden where fleeting ideas take root, 
            form connections, and bloom into deep understanding. Plant 
            the seed — watch your knowledge flourish.
          </motion.p>

          <motion.div className="bloom-hero-actions" variants={rise}>
            <button className="bloom-btn-primary">
              <span className="bloom-btn-icon">🌱</span>
              Start your garden
            </button>
            <button className="bloom-btn-outline">See how it grows</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="bloom-hero-garden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bloom-garden-container">
            <div className="bloom-garden-soil" />
            {[
              { height: '120px', left: '15%', delay: 0.8, color: '#7cb87c' },
              { height: '160px', left: '35%', delay: 1.0, color: '#5a9c5a' },
              { height: '90px', left: '55%', delay: 1.2, color: '#a8c090' },
              { height: '140px', left: '72%', delay: 1.4, color: '#6aaa6a' },
            ].map((plant, i) => (
              <motion.div
                key={i}
                className="bloom-plant"
                style={{ left: plant.left }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: plant.height, opacity: 1 }}
                transition={{ duration: 1.2, delay: plant.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bloom-stem" style={{ background: plant.color }} />
                <motion.div
                  className="bloom-flower"
                  style={{ background: plant.color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: plant.delay + 0.8 }}
                />
                <motion.div
                  className="bloom-flower-inner"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: plant.delay + 1 }}
                />
              </motion.div>
            ))}
            <div className="bloom-garden-label">Your Knowledge Garden</div>
          </div>
        </motion.div>
      </section>

      <section className="bloom-journey">
        <motion.div
          className="bloom-journey-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 className="bloom-section-title" variants={rise}>
            From seed to forest
          </motion.h2>
          <motion.p className="bloom-section-sub" variants={rise}>
            Every great body of knowledge started as a single thought.
          </motion.p>
        </motion.div>

        <motion.div
          className="bloom-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {[
            { emoji: '🌰', stage: 'Seed', title: 'Capture', desc: 'Quick-capture any thought, link, image, or voice note. Raw, unprocessed, full of potential.' },
            { emoji: '🌿', stage: 'Sprout', title: 'Connect', desc: 'Watch as your notes naturally link together. Mnemo finds the roots between your ideas.' },
            { emoji: '🌳', stage: 'Tree', title: 'Grow', desc: 'Nurture your notes over time. Add, refine, prune. Watch saplings become mighty oaks of knowledge.' },
            { emoji: '🌲', stage: 'Forest', title: 'Harvest', desc: 'Draw from your personal forest of wisdom. Generate insights, essays, and ideas from rich soil.' },
          ].map(s => (
            <motion.div key={s.stage} className="bloom-step" variants={rise}>
              <div className="bloom-step-emoji">{s.emoji}</div>
              <div className="bloom-step-stage">{s.stage}</div>
              <h3 className="bloom-step-title">{s.title}</h3>
              <p className="bloom-step-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bloom-testimonial">
        <motion.div
          className="bloom-testimonial-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bloom-testimonial-leaf">🍃</div>
          <blockquote>
            <p>"Mnemo changed how I relate to my own ideas. It's not just note-taking — it's tending a living, breathing ecosystem of thought."</p>
            <cite>
              <strong>Jun Tanaka</strong>
              <span>Researcher & Writer</span>
            </cite>
          </blockquote>
        </motion.div>
      </section>

      <section className="bloom-features">
        <motion.div
          className="bloom-feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {[
            { title: 'Organic Linking', desc: 'Notes connect themselves like mycelium beneath the forest floor.' },
            { title: 'Seasonal Review', desc: 'Periodic prompts to revisit, prune, and nurture your growing ideas.' },
            { title: 'Gentle Reminders', desc: 'Forgotten seeds resurface when the time is right for them to grow.' },
            { title: 'Peaceful Writing', desc: 'A distraction-free canvas that feels like morning light through leaves.' },
            { title: 'Growth Tracking', desc: 'Watch your garden expand. See how far your thinking has come.' },
            { title: 'Shared Plots', desc: 'Invite others to cultivate alongside you. Collaborative gardens.' },
          ].map(f => (
            <motion.div key={f.title} className="bloom-feature-card" variants={rise}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bloom-cta">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="bloom-cta-inner"
        >
          <motion.h2 className="bloom-cta-title" variants={rise}>
            Ready to plant<br />your first seed?
          </motion.h2>
          <motion.div variants={rise}>
            <button className="bloom-btn-primary bloom-btn-lg">
              <span className="bloom-btn-icon">🌱</span>
              Begin your garden — it's free
            </button>
          </motion.div>
        </motion.div>
      </section>

      <footer className="bloom-footer">
        <div className="bloom-footer-top">
          <div className="bloom-logo">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="12" stroke="#5a7c4f" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="5" fill="#7cb87c" opacity="0.5" />
            </svg>
            <span className="bloom-logo-text">mnemo</span>
          </div>
          <p className="bloom-footer-tagline">Nurture your knowledge.</p>
        </div>
        <div className="bloom-footer-bottom">
          <span>© 2026 Mnemo</span>
          <div className="bloom-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Garden Tips</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

