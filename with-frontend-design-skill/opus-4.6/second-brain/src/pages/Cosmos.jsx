import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import './Cosmos.css'

function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      twinkle: Math.random() * Math.PI * 2,
    }))

    const constellations = [
      { points: [[100, 150], [180, 100], [260, 130], [220, 210]] },
      { points: [[500, 80], [560, 140], [640, 100], [700, 160]] },
      { points: [[300, 300], [380, 260], [420, 340], [360, 380]] },
    ]

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      time += 0.005

      stars.forEach(s => {
        const twinkle = Math.sin(time * 2 + s.twinkle) * 0.4 + 0.6
        ctx.beginPath()
        ctx.fillStyle = `rgba(210, 200, 240, ${twinkle * 0.6})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })

      constellations.forEach(c => {
        ctx.strokeStyle = 'rgba(180, 160, 220, 0.06)'
        ctx.lineWidth = 0.5
        ctx.beginPath()
        c.points.forEach((p, i) => {
          const x = p[0] + Math.sin(time + i) * 2
          const y = p[1] + Math.cos(time + i) * 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        })
        ctx.stroke()

        c.points.forEach((p, i) => {
          ctx.beginPath()
          ctx.fillStyle = 'rgba(200, 180, 255, 0.3)'
          ctx.arc(p[0] + Math.sin(time + i) * 2, p[1] + Math.cos(time + i) * 2, 2.5, 0, Math.PI * 2)
          ctx.fill()
        })
      })

      frame = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="cosmos-canvas" />
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Cosmos() {
  return (
    <div className="cosmos">
      <Starfield />
      <div className="cosmos-radial" />

      <nav className="cosmos-nav">
        <div className="cosmos-logo">
          <div className="cosmos-logo-ring">
            <div className="cosmos-logo-dot" />
          </div>
          <span className="cosmos-logo-text">MNEMO</span>
        </div>
        <div className="cosmos-nav-links">
          <a href="#" className="cosmos-nav-link">Observatory</a>
          <a href="#" className="cosmos-nav-link">Atlas</a>
          <a href="#" className="cosmos-nav-link">Voyages</a>
          <a href="#" className="cosmos-nav-link cosmos-nav-cta">Launch</a>
        </div>
      </nav>

      <section className="cosmos-hero">
        <motion.div
          className="cosmos-hero-inner"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="cosmos-orbit-badge" variants={fadeIn}>
            <span className="cosmos-orbit-ring" />
            Charting 2M+ thought-constellations
          </motion.div>

          <motion.h1 className="cosmos-title" variants={fadeIn}>
            <span className="cosmos-title-thin">Map the</span>
            <span className="cosmos-title-bold">universe</span>
            <span className="cosmos-title-thin">of your mind</span>
          </motion.h1>

          <motion.p className="cosmos-subtitle" variants={fadeIn}>
            Every thought is a star. Every connection, a constellation.
            Mnemo transforms your notes into a navigable cosmos of knowledge — 
            infinite, interconnected, entirely yours.
          </motion.p>

          <motion.div className="cosmos-hero-ctas" variants={fadeIn}>
            <button className="cosmos-btn-primary">
              Begin your voyage
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cosmos-btn-glass">Explore the atlas</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="cosmos-hero-diagram"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <div className="cosmos-diagram">
            <div className="cosmos-diagram-ring cosmos-ring-1" />
            <div className="cosmos-diagram-ring cosmos-ring-2" />
            <div className="cosmos-diagram-ring cosmos-ring-3" />
            <div className="cosmos-diagram-center">
              <span>YOUR</span>
              <strong>MIND</strong>
            </div>
            {[
              { label: 'Ideas', angle: 30, dist: 120 },
              { label: 'Research', angle: 90, dist: 160 },
              { label: 'Notes', angle: 155, dist: 130 },
              { label: 'Tasks', angle: 210, dist: 155 },
              { label: 'Dreams', angle: 280, dist: 140 },
              { label: 'Books', angle: 340, dist: 170 },
            ].map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const x = Math.cos(rad) * node.dist
              const y = Math.sin(rad) * node.dist
              return (
                <motion.div
                  key={node.label}
                  className="cosmos-node"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                >
                  <div className="cosmos-node-dot" />
                  <span className="cosmos-node-label">{node.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <section className="cosmos-metrics">
        <div className="cosmos-metrics-inner">
          {[
            { value: '∞', label: 'Connections possible' },
            { value: '< 1s', label: 'To find any thought' },
            { value: '256-bit', label: 'Encryption standard' },
            { value: 'Zero', label: 'Knowledge lost' },
          ].map(m => (
            <motion.div
              key={m.label}
              className="cosmos-metric"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="cosmos-metric-value">{m.value}</div>
              <div className="cosmos-metric-label">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cosmos-features">
        <motion.div
          className="cosmos-features-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.span className="cosmos-section-kicker" variants={fadeIn}>Navigation Systems</motion.span>
          <motion.h2 className="cosmos-section-title" variants={fadeIn}>
            Tools for the<br />cosmic explorer
          </motion.h2>
        </motion.div>

        <motion.div
          className="cosmos-feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {[
            { icon: '◎', title: 'Star Chart', desc: 'Visual knowledge graph that maps every connection between your thoughts. Zoom, filter, explore.' },
            { icon: '◈', title: 'Warp Search', desc: 'Semantic search that understands meaning, not just keywords. Find the thought before you finish typing.' },
            { icon: '◇', title: 'Nebula Capture', desc: 'Frictionless input from anywhere. Browser extension, mobile, voice, API. Every thought finds its orbit.' },
            { icon: '⬡', title: 'Dark Matter Sync', desc: 'Offline-first architecture. Your cosmos exists on every device, merges conflicts automatically.' },
            { icon: '△', title: 'Temporal Lens', desc: 'Travel through time in your knowledge base. See evolution, branching points, convergent discoveries.' },
            { icon: '○', title: 'Shared Galaxies', desc: 'Collaborative spaces where multiple minds merge their constellations into shared understanding.' },
          ].map(f => (
            <motion.div key={f.title} className="cosmos-feature" variants={fadeIn}>
              <div className="cosmos-feature-icon">{f.icon}</div>
              <h3 className="cosmos-feature-title">{f.title}</h3>
              <p className="cosmos-feature-desc">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="cosmos-quote">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>"Using Mnemo feels like having a telescope for your own mind. You see patterns in your thinking you never knew existed."</p>
          <cite>— Dr. Amara Osei, Cognitive Scientist</cite>
        </motion.blockquote>
      </section>

      <section className="cosmos-cta">
        <motion.div
          className="cosmos-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="cosmos-cta-stars" variants={fadeIn}>✦ ✦ ✦</motion.div>
          <motion.h2 className="cosmos-cta-title" variants={fadeIn}>
            Your universe of thought<br />awaits discovery
          </motion.h2>
          <motion.div variants={fadeIn}>
            <button className="cosmos-btn-primary cosmos-btn-lg">
              Launch into Mnemo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
          <motion.p className="cosmos-cta-sub" variants={fadeIn}>
            Free for individual explorers. No credit card needed.
          </motion.p>
        </motion.div>
      </section>

      <footer className="cosmos-footer">
        <div className="cosmos-footer-inner">
          <span className="cosmos-footer-logo">MNEMO</span>
          <span className="cosmos-footer-sep">·</span>
          <span>Mapping minds since 2024</span>
          <span className="cosmos-footer-sep">·</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}
