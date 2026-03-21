import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import './Neural.css'

function TerminalLine({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, 18)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])
  return <span>{displayed}<span className="neural-cursor">_</span></span>
}

function NeuralGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()

    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 136, ${(1 - dist / 150) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.offsetWidth) n.vx *= -1
        if (n.y < 0 || n.y > canvas.offsetHeight) n.vy *= -1

        ctx.beginPath()
        ctx.fillStyle = 'rgba(0, 255, 136, 0.6)'
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frame = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" />
}

export default function Neural() {
  return (
    <div className="neural">
      <NeuralGrid />

      <div className="neural-scanlines" />
      <div className="neural-noise" />

      <nav className="neural-nav">
        <div className="neural-logo">
          <span className="neural-logo-bracket">[</span>
          mnemo
          <span className="neural-logo-bracket">]</span>
        </div>
        <div className="neural-nav-links">
          <a href="#" className="neural-nav-link">sys.docs</a>
          <a href="#" className="neural-nav-link">changelog</a>
          <a href="#" className="neural-nav-link">pricing</a>
          <a href="#" className="neural-nav-link neural-nav-link--active">terminal</a>
        </div>
      </nav>

      <section className="neural-hero">
        <motion.div
          className="neural-hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="neural-pulse" />
          v3.2.0 — now with graph-based recall
        </motion.div>

        <motion.h1
          className="neural-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="neural-title-line">YOUR THOUGHTS</span>
          <span className="neural-title-line neural-title-accent">COMPILED.</span>
        </motion.h1>

        <motion.div
          className="neural-terminal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="neural-terminal-header">
            <span className="neural-terminal-dot neural-dot-r" />
            <span className="neural-terminal-dot neural-dot-y" />
            <span className="neural-terminal-dot neural-dot-g" />
            <span className="neural-terminal-path">~/second-brain</span>
          </div>
          <div className="neural-terminal-body">
            <div className="neural-terminal-line">
              <span className="neural-prompt">$</span>
              <TerminalLine text="mnemo init --mode=neural" delay={1200} />
            </div>
            <div className="neural-terminal-line neural-terminal-output">
              <TerminalLine text="✓ Indexing 2,847 thoughts..." delay={2400} />
            </div>
            <div className="neural-terminal-line neural-terminal-output">
              <TerminalLine text="✓ Building knowledge graph... 1,203 connections found" delay={3200} />
            </div>
            <div className="neural-terminal-line neural-terminal-output">
              <TerminalLine text="✓ Second brain is online. Ready to think." delay={4200} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="neural-cta-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button className="neural-btn-primary">
            <span className="neural-btn-arrow">→</span> Boot your brain
          </button>
          <button className="neural-btn-secondary">Read the docs</button>
        </motion.div>
      </section>

      <section className="neural-features">
        <motion.div
          className="neural-feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {[
            { cmd: 'recall', title: 'Instant Recall', desc: 'Full-text search across every thought you\'ve ever captured. Sub-50ms. Always.' },
            { cmd: 'link', title: 'Auto-Linking', desc: 'Your notes connect themselves. Graph-based intelligence surfaces hidden patterns.' },
            { cmd: 'sync', title: 'Zero-Latency Sync', desc: 'CRDTs ensure your brain works offline, merges seamlessly, never loses a thought.' },
            { cmd: 'encrypt', title: 'E2E Encrypted', desc: 'Your thoughts are yours alone. AES-256 encryption at rest and in transit.' },
            { cmd: 'query', title: 'Natural Query', desc: 'Ask questions in plain English. Get answers sourced from your own knowledge base.' },
            { cmd: 'export', title: 'Open Format', desc: 'Markdown-native. No lock-in. Your data is portable, forkable, yours forever.' },
          ].map(({ cmd, title, desc }) => (
            <motion.div
              key={cmd}
              className="neural-feature"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="neural-feature-cmd">mnemo.{cmd}()</div>
              <h3 className="neural-feature-title">{title}</h3>
              <p className="neural-feature-desc">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="neural-stats">
        {[
          { val: '50ms', label: 'avg query time' },
          { val: '2M+', label: 'thoughts indexed' },
          { val: '99.97%', label: 'uptime' },
          { val: '0', label: 'data breaches' },
        ].map(({ val, label }) => (
          <div key={label} className="neural-stat">
            <div className="neural-stat-val">{val}</div>
            <div className="neural-stat-label">{label}</div>
          </div>
        ))}
      </section>

      <footer className="neural-footer">
        <div className="neural-footer-line" />
        <p>© 2026 mnemo systems. all rights reserved.</p>
        <p className="neural-footer-sub">built for humans who think in hypertext.</p>
      </footer>
    </div>
  )
}

