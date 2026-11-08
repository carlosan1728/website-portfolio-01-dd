'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calculator,
  ChartColumnIncreasing,
  Check,
  Clock,
  Compass,
  House,
  Layers,
  Megaphone,
  Menu,
  MessageSquare,
  Rocket,
  Search,
  Target,
  TrendingUp,
  UserRound,
  Workflow,
  X,
} from 'lucide-react'
import portraitImage from './Assets/carlo.png'

const LOGO_LIGHT = '/brand/cs-mark-light.png'

const services = [
  { number: '01', icon: Bot, title: 'AI & Automations', text: 'Remove the bottlenecks between your ambition and your output. Build systems that run while you sleep.' },
  { number: '02', icon: Megaphone, title: 'Digital Marketing', text: 'Turn attention into compounding revenue with sharper positioning, measurable campaigns, and a better funnel.' },
  { number: '03', icon: Calculator, title: 'Bookkeeping', text: 'Know what is working, where cash is moving, and what your next smart decision should be.' },
]

const metrics = [
  { icon: TrendingUp, prefix: '+', value: '42', suffix: '%', label: 'Average revenue lift' },
  { icon: Target, prefix: '', value: '3.4', suffix: 'x', label: 'Return on ad spend' },
  { icon: Clock, prefix: '', value: '18', suffix: ' hrs', label: 'Saved per week' },
]

const steps = [
  { number: '01', icon: Search, title: 'Diagnose', text: 'Find where time, money and leads are slipping through the cracks.' },
  { number: '02', icon: Compass, title: 'Design', text: 'Map a simpler operating system around your goals.' },
  { number: '03', icon: Rocket, title: 'Deploy', text: 'Build it, test it and hand it over ready to run.' },
  { number: '04', icon: TrendingUp, title: 'Grow', text: 'Measure, refine and let the results compound.' },
]

const navItems = [
  { id: 'top', label: 'Home', icon: House },
  { id: 'services', label: 'Services', icon: Layers },
  { id: 'proof', label: 'Results', icon: ChartColumnIncreasing },
  { id: 'approach', label: 'Approach', icon: Workflow },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
]

const values = ['Ideas', 'Skills', 'Projects', 'A better tomorrow']

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker"><span className="kicker-dot" aria-hidden="true" />{children}</p>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [auditOpen, setAuditOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState('top')

  function openAudit() {
    setMenuOpen(false)
    setAuditOpen(true)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  // Highlight the sidebar link for the last section whose top has passed the middle of the screen.
  useEffect(() => {
    const onScroll = () => {
      const mark = window.innerHeight * 0.45
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= mark) current = id
      }
      setActive(atBottom ? navItems[navItems.length - 1].id : current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Escape closes the dialog / drawer; lock page scroll while either is open.
  useEffect(() => {
    const locked = auditOpen || menuOpen
    document.body.style.overflow = locked ? 'hidden' : ''
    if (!locked) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAuditOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [auditOpen, menuOpen])

  return (
    <div className="shell">
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop-dots" />
        <svg viewBox="0 0 900 600" fill="none" preserveAspectRatio="xMaxYMin slice">
          <defs>
            <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#00E0FF" stopOpacity="0" />
              <stop offset=".65" stopColor="#00E0FF" stopOpacity=".85" />
              <stop offset="1" stopColor="#00E0FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M120 -20 C 320 260, 620 380, 940 420" stroke="url(#streak)" strokeWidth="1.5" />
          <path d="M230 -20 C 430 220, 670 320, 940 340" stroke="url(#streak)" strokeWidth="1" opacity=".5" />
          <path d="M30 -20 C 250 300, 600 470, 940 530" stroke="url(#streak)" strokeWidth="1" opacity=".3" />
        </svg>
      </div>

      <header className="topbar">
        <a className="topbar-brand" href="#top" aria-label="Carlo Sanchez Jr. home">
          <img src={LOGO_LIGHT} alt="" width={681} height={353} />
          <span>Carlo Sanchez Jr.</span>
        </a>
        <button className="menu-btn" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="sidebar" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`drawer-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`} id="sidebar" aria-label="Profile and navigation">
        <a className="side-logo" href="#top" aria-label="Carlo Sanchez Jr. home" onClick={() => setMenuOpen(false)}>
          <img src={LOGO_LIGHT} alt="" width={681} height={353} />
        </a>
        <div className="profile">
          <div className="avatar"><img src={portraitImage.src} alt="Carlo Sanchez Jr." /></div>
          <p className="profile-name">Carlo Sanchez Jr.</p>
          <p className="profile-role">Operations &amp; Growth Partner</p>
          <span className="status"><span className="status-dot" aria-hidden="true" />Booking discovery calls</span>
        </div>
        <nav className="side-nav" aria-label="Sections">
          {navItems.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setMenuOpen(false)}>
              <Icon aria-hidden="true" />{label}
            </a>
          ))}
        </nav>
        <button className="btn btn-primary btn-block" onClick={openAudit}>Book a call <ArrowRight aria-hidden="true" /></button>
        <div className="side-foot">
          <p className="side-motto">Create / Build / Grow</p>
          <p>© 2026 Carlo Sanchez Jr.</p>
        </div>
      </aside>

      <main className="main">
        <section className="hero" id="top">
          <div className="reveal"><Kicker>Operations &amp; growth partner</Kicker></div>
          <h1 className="reveal" style={{ animationDelay: '.06s' }}>Make the work <span className="grad">work</span> for you.</h1>
          <div className="hero-row reveal" style={{ animationDelay: '.12s' }}>
            <p className="hero-intro">A strategic operating partner for founders who are ready to turn scattered effort into a simpler, smarter, more profitable business.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={openAudit}>Start with an audit <ArrowRight aria-hidden="true" /></button>
              <a className="btn btn-secondary" href="#services">Explore services <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
          <div className="focus-strip reveal" style={{ animationDelay: '.18s' }}>
            <p className="focus-label">What I<strong>help with</strong></p>
            <ul className="focus-list">
              {services.map(({ title, icon: Icon }) => <li key={title}><Icon aria-hidden="true" />{title}</li>)}
            </ul>
            <a className="focus-link" href="#services">All services <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="bento reveal" style={{ animationDelay: '.24s' }} aria-labelledby="overview-title">
          <h2 className="sr-only" id="overview-title">Overview</h2>

          <article className="card span-2">
            <div className="card-head">
              <span className="icon-tile"><Layers aria-hidden="true" /></span>
              <h3>Services</h3>
              <a className="card-link" href="#services" aria-label="See all services"><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <p className="card-text">Three ways I help founders build a business that runs smoother.</p>
            <ul className="mini-list">
              {services.map(({ title, icon: Icon }) => <li key={title}><Icon aria-hidden="true" />{title}<ArrowRight className="mini-arrow" aria-hidden="true" /></li>)}
            </ul>
          </article>

          <article className="card span-2">
            <div className="card-head">
              <span className="icon-tile"><ChartColumnIncreasing aria-hidden="true" /></span>
              <h3>Results</h3>
              <a className="card-link" href="#proof" aria-label="See results"><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <p className="card-text">The numbers behind the calm.</p>
            <div className="mini-metrics">
              {metrics.map((m) => (
                <div key={m.label}>
                  <strong><span className="accent">{m.prefix}</span>{m.value}<span className="accent">{m.suffix}</span></strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-head">
              <span className="icon-tile"><UserRound aria-hidden="true" /></span>
              <h3>About</h3>
              <a className="card-link" href="#about" aria-label="About Carlo"><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="about-thumb"><img src={portraitImage.src} alt="" /></div>
          </article>

          <article className="card">
            <div className="card-head">
              <span className="icon-tile"><Workflow aria-hidden="true" /></span>
              <h3>Approach</h3>
              <a className="card-link" href="#approach" aria-label="See the approach"><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <ol className="step-list">
              {steps.map((s) => <li key={s.number}><span>{s.number}</span>{s.title}</li>)}
            </ol>
          </article>

          <article className="card card-brand">
            <img src={LOGO_LIGHT} alt="CS logo" width={681} height={353} />
            <p className="brand-motto">Create <i>/</i> Build <i>/</i> Grow</p>
          </article>

          <article className="card card-cta">
            <p className="card-kicker">Ready when you are</p>
            <h3>Tell me what&apos;s not working.</h3>
            <button className="btn btn-primary btn-sm" onClick={openAudit}>Book a call <ArrowRight aria-hidden="true" /></button>
          </article>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div><Kicker>What I do</Kicker><h2>Less chaos. <span className="grad">More momentum.</span></h2></div>
            <p className="section-sub">Three focused services with one goal: a business that runs smoother and grows on purpose.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text }) => (
              <article className="card service-card" key={number}>
                <div className="service-top">
                  <span className="icon-tile icon-tile-lg"><Icon aria-hidden="true" /></span>
                  <span className="service-num">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className="link-btn" onClick={openAudit}>Start a conversation <ArrowUpRight aria-hidden="true" /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="proof">
          <div className="section-head">
            <div><Kicker>By the numbers</Kicker><h2>The numbers behind <span className="grad">the calm.</span></h2></div>
            <p className="section-sub">Clear systems create measurable results — more revenue, better returns, and time back in your week.</p>
          </div>
          <div className="stat-grid">
            {metrics.map(({ icon: Icon, prefix, value, suffix, label }) => (
              <article className="card stat-card" key={label}>
                <span className="icon-tile"><Icon aria-hidden="true" /></span>
                <strong className="stat-value"><span className="accent">{prefix}</span>{value}<span className="accent">{suffix}</span></strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="approach">
          <div className="section-head">
            <div><Kicker>A better way to grow</Kicker><h2>You bring the <span className="grad">vision.</span></h2></div>
            <p className="section-sub">I bring the operating system. No vague advice decks or vanity metrics — just thoughtful strategy, clean execution, and the infrastructure to help your best work compound.</p>
          </div>
          <ol className="step-grid">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <li className="card step-card" key={number}>
                <div className="step-top"><span className="step-num">{number}</span><span className="icon-tile"><Icon aria-hidden="true" /></span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section about" id="about">
          <div className="about-visual">
            <img className="about-logo" src={LOGO_LIGHT} alt="" width={681} height={353} />
            <img className="about-portrait" src={portraitImage.src} alt="Carlo Sanchez Jr." />
            <div className="about-tag"><span>Carlo Sanchez Jr.</span><small>Operations &amp; Growth</small></div>
          </div>
          <div className="about-copy">
            <Kicker>About</Kicker>
            <h2>Hi, I&apos;m <span className="grad">Carlo.</span></h2>
            <p>I&apos;m an operations and growth partner working across digital marketing, AI &amp; automations, and bookkeeping.</p>
            <p>I connect the three so your marketing brings in the right customers, your systems handle the busywork, and your numbers tell you what to do next.</p>
            <ul className="value-chips" aria-label="What I stand for">
              {values.map((v) => <li key={v}>{v}</li>)}
            </ul>
            <p className="motto-quote">Discipline builds freedom.</p>
          </div>
        </section>

        <section className="cta" id="contact">
          <img className="cta-mark" src={LOGO_LIGHT} alt="" width={681} height={353} aria-hidden="true" />
          <div className="cta-copy">
            <Kicker>Ready when you are</Kicker>
            <h2>Let&apos;s make <span className="grad">something work.</span></h2>
            <p>No pressure. Just a clear look at what&apos;s possible.</p>
          </div>
          <button className="btn btn-primary" onClick={openAudit}>Book your discovery call <ArrowRight aria-hidden="true" /></button>
        </section>

        <footer className="footer">
          <a className="footer-brand" href="#top" aria-label="Back to top">
            <img src={LOGO_LIGHT} alt="" width={681} height={353} />
            <span>Carlo Sanchez Jr.</span>
          </a>
          <p>Digital marketing · AI &amp; automations · Bookkeeping</p>
          <p className="footer-motto">Discipline builds freedom</p>
          <p>© 2026 Carlo Sanchez Jr.</p>
        </footer>
      </main>

      {auditOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setAuditOpen(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="audit-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close dialog" onClick={() => setAuditOpen(false)}><X aria-hidden="true" /></button>
            {sent ? (
              <div className="success-state">
                <span className="success-mark"><Check aria-hidden="true" /></span>
                <h2 id="audit-title">You&apos;re on the list.</h2>
                <p>Thanks for reaching out. I&apos;ll be in touch shortly to find a time that works.</p>
              </div>
            ) : (
              <>
                <Kicker>Start a conversation</Kicker>
                <h2 id="audit-title">Tell me what&apos;s <span className="grad">not working.</span></h2>
                <form onSubmit={handleSubmit}>
                  <label>Name<input required name="name" placeholder="Your name" autoComplete="name" autoFocus /></label>
                  <label>Email<input required type="email" name="email" placeholder="you@company.com" autoComplete="email" /></label>
                  <label>Biggest bottleneck<textarea required name="bottleneck" placeholder="What would you like to improve?" rows={3} /></label>
                  <button className="btn btn-primary btn-block" type="submit">Request a call <ArrowRight aria-hidden="true" /></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
