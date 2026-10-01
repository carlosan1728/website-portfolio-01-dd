'use client'

import { useState } from 'react'
import portraitImage from './Assets/carlo.png'

const services = [
  { number: '01', title: 'AI & Automations', text: 'Remove the bottlenecks between your ambition and your output. Build systems that run while you sleep.' },
  { number: '02', title: 'Digital Marketing', text: 'Turn attention into compounding revenue with sharper positioning, measurable campaigns, and a better funnel.' },
  { number: '03', title: 'Bookkeeping', text: 'Know what is working, where cash is moving, and what your next smart decision should be.' },
]

const metrics = [
  { value: '+42%', label: 'average revenue lift' },
  { value: '3.4x', label: 'return on ad spend' },
  { value: '18 hrs', label: 'saved per week' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [auditOpen, setAuditOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Carlo Sanchez Jr. home">CS<span>+</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#proof" onClick={() => setMenuOpen(false)}>Proof</a>
        </div>
        <button className="nav-cta" onClick={() => setAuditOpen(true)}>Book a call <span>↗</span></button>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> Operations &amp; growth partner</p>
          <h1>Make the work<br /><em>work</em> for you.</h1>
          <p className="hero-intro">A strategic operating partner for founders who are ready to turn scattered effort into a simpler, smarter, more profitable business.</p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => setAuditOpen(true)}>Start with an audit <span>↗</span></button>
            <a className="text-link" href="#services">Explore services <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Portrait of Carlo Sanchez Jr." role="img">
          <div className="portrait-panel" />
          <div className="portrait-rule" />
          <img className="portrait-image" src={portraitImage.src} alt="Carlo Sanchez Jr." />
          <div className="portrait-caption"><span>Carlo Sanchez Jr.</span><small>OPERATIONS &amp; GROWTH</small></div>
        </div>
        <div className="hero-scroll">Scroll to explore <span>↓</span></div>
      </section>

      <section className="proof-strip" id="proof">
        <p className="section-kicker">The numbers behind the calm</p>
        <div className="metric-row">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><p className="section-kicker">What I do</p><h2>Less chaos.<br /><em>More momentum.</em></h2></div>
        <div className="services-list">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="approach-grid"><div><p className="section-kicker">A better way to grow</p><h2>You bring the<br /><em>vision.</em></h2></div><div className="approach-body"><p>I bring the operating system. No vague advice decks or vanity metrics — just thoughtful strategy, clean execution, and the infrastructure to help your best work compound.</p><a className="text-link" href="#contact">See how I work <span>↗</span></a></div></div>
        <div className="process-row"><div><span>01</span><p>Diagnose</p></div><div><span>02</span><p>Design</p></div><div><span>03</span><p>Deploy</p></div><div><span>04</span><p>Grow</p></div></div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-card"><p className="section-kicker">Ready when you are</p><h2>Let&apos;s make<br /><em>something work.</em></h2><button className="button button-dark" onClick={() => setAuditOpen(true)}>Book your discovery call <span>↗</span></button><p className="contact-note">No pressure. Just a clear look at what&apos;s possible.</p></div></section>

      <footer className="footer"><a className="wordmark" href="#top">CS<span>+</span></a><p>Digital marketing · AI &amp; automations · Bookkeeping</p><p>© 2026 Carlo Sanchez Jr.</p></footer>

      {auditOpen && <div className="modal-backdrop" role="presentation" onClick={() => setAuditOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="audit-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close dialog" onClick={() => setAuditOpen(false)}>×</button>{sent ? <div className="success-state"><span className="success-mark">✓</span><h2>You&apos;re on the list.</h2><p>Thanks for reaching out. I&apos;ll be in touch shortly to find a time that works.</p></div> : <><p className="section-kicker">Start a conversation</p><h2 id="audit-title">Tell me what&apos;s<br /><em>not working.</em></h2><form onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Biggest bottleneck<textarea required name="bottleneck" placeholder="What would you like to improve?" rows={3} /></label><button className="button button-dark" type="submit">Request a call <span>↗</span></button></form></>}</div></div>}
    </main>
  )
}
