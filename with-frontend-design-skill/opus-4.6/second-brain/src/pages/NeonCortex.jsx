import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import './NeonCortex.css'

function GlitchText({ children, className = '' }) {
  return (
    <span className={`nc-glitch ${className}`} data-text={children}>
      {children}
    </span>
  )
}

function CyberGrid() {
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

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      time += 0.003

      const gridSize = 60
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.04)'
      ctx.lineWidth = 0.5

      for (let x = 0; x <= w; x += gridSize) {
        const offset = Math.sin(time + x * 0.01) * 3
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x + offset, h)
        ctx.stroke()
      }

      for (let y = 0; y <= h; y += gridSize) {
        const offset = Math.cos(time + y * 0.01) * 3
        ctx.beginPath()
        ctx.moveTo(0, y + offset)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      for (let i = 0; i < 5; i++) {
        const y = (time * 100 + i * 200) % h
        ctx.fillStyle = `rgba(255, 0, 128, ${0.03 + Math.random() * 0.02})`
        ctx.fillRect(0, y, w, 1 + Math.random() * 2)
      }

      frame = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="nc-canvas" />
}

export default function NeonCortex() {
  return (
    <div className="nc">
      <CyberGrid />
      <div className="nc-vignette" />

      <nav className="nc-nav">
        <div className="nc-logo">
          <span className="nc-logo-icon">◇</span>
          <span className="nc-logo-text">MNEMO</span>
          <span className="nc-logo-ver">SYS</span>
        </div>
        <div className="nc-nav-links">
          <a href="#" className="nc-nav-link">CORTEX</a>
          <a href="#" className="nc-nav-link">NEURAL.MAP</a>
          <a href="#" className="nc-nav-link">SYNC.IO</a>
          <a href="#" className="nc-nav-link nc-nav-link--hot">JACK IN</a>
        </div>
      </nav>

      <section className="nc-hero">
        <motion.div
          className="nc-hero-status"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="nc-status-dot" />
          NEURAL_LINK::ACTIVE
        </motion.div>

        <motion.h1
          className="nc-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="nc-title-row">
            <GlitchText>AUGMENT</GlitchText>
          </span>
          <span className="nc-title-row nc-title-outline">
            YOUR COGNITION
          </span>
        </motion.h1>

        <motion.p
          className="nc-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Neural-grade thought capture. Real-time knowledge synthesis.
          <br />Your mind, extended beyond biological limits.
        </motion.p>

        <motion.div
          className="nc-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="nc-btn-neon">
            <span className="nc-btn-glow" />
            INITIALIZE CORTEX
          </button>
          <button className="nc-btn-wire">VIEW DEMO FEED</button>
        </motion.div>

        <motion.div
          className="nc-hero-hud"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="nc-hud-item">
            <span className="nc-hud-label">THROUGHPUT</span>
            <span className="nc-hud-value">12.4K <small>nodes/s</small></span>
          </div>
          <div className="nc-hud-divider" />
          <div className="nc-hud-item">
            <span className="nc-hud-label">LATENCY</span>
            <span className="nc-hud-value">0.3<small>ms</small></span>
          </div>
          <div className="nc-hud-divider" />
          <div className="nc-hud-item">
            <span className="nc-hud-label">SYNC.STATUS</span>
            <span className="nc-hud-value nc-hud-online">NOMINAL</span>
          </div>
        </motion.div>
      </section>

      <section className="nc-modules">
        <div className="nc-modules-header">
          <span className="nc-module-line" />
          <h2 className="nc-modules-title">SYSTEM MODULES</h2>
          <span className="nc-module-line" />
        </div>

        <motion.div
          className="nc-module-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {[
            { id: 'CRX-01', name: 'THOUGHT CAPTURE', desc: 'Multi-modal input processing. Voice, text, neural-sketch. Zero-friction cognitive offloading.', accent: 'cyan' },
            { id: 'CRX-02', name: 'SYNAPSE ENGINE', desc: 'Auto-linking intelligence. Discovers hidden connections across your entire knowledge base.', accent: 'pink' },
            { id: 'CRX-03', name: 'RECALL MATRIX', desc: 'Instant retrieval from any point in your thought history. Temporal + semantic search fusion.', accent: 'cyan' },
            { id: 'CRX-04', name: 'CIPHER VAULT', desc: 'Military-grade encryption. Zero-knowledge architecture. Your thoughts are untouchable.', accent: 'pink' },
            { id: 'CRX-05', name: 'DREAM SYNC', desc: 'Offline-first mesh network. Your cortex works everywhere, syncs when it can.', accent: 'cyan' },
            { id: 'CRX-06', name: 'ECHO PROTOCOL', desc: 'AI-augmented reflection. Surface insights from your own data you never knew existed.', accent: 'pink' },
          ].map(m => (
            <motion.div
              key={m.id}
              className={`nc-module nc-module--${m.accent}`}
              variants={{
                hidden: { opacity: 0, y: 24, rotateX: 10 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="nc-module-id">{m.id}</div>
              <h3 className="nc-module-name">{m.name}</h3>
              <p className="nc-module-desc">{m.desc}</p>
              <div className={`nc-module-bar nc-module-bar--${m.accent}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="nc-bottom-cta">
        <div className="nc-bottom-cta-border" />
        <motion.h2
          className="nc-bottom-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          READY TO <GlitchText className="nc-bottom-accent">UPGRADE</GlitchText>?
        </motion.h2>
        <p className="nc-bottom-sub">The future of thought is here. Jack in.</p>
        <button className="nc-btn-neon nc-btn-lg">
          <span className="nc-btn-glow" />
          ENTER THE CORTEX
        </button>
      </section>

      <footer className="nc-footer">
        <span>© 2026 MNEMO SYSTEMS CORP.</span>
        <span className="nc-footer-sep">|</span>
        <span>ALL NEURAL RIGHTS RESERVED</span>
      </footer>
    </div>
  )
}
