import { useState } from 'react'
import { CtaButtons } from '../components/Shared.jsx'
import { PhotoIcon } from '../components/Icons.jsx'

const posts = [
  { cat: 'Local SEO', title: 'The Google Business Profile settings that actually move rankings', excerpt: 'Nine high-impact settings most local businesses leave on the table.', date: '2026', read: '6 min read' },
  { cat: 'AI Search', title: "GEO vs SEO: what's the same, what's new", excerpt: 'Where traditional SEO still wins, and where AI visibility needs a different play.', date: '2026', read: '7 min read' },
  { cat: 'Reviews', title: 'A simple review system that actually works', excerpt: 'Turn happy customers into a steady stream of 5-star reviews on autopilot.', date: '2026', read: '5 min read' },
  { cat: 'Local SEO', title: 'How to win the map pack in a competitive city', excerpt: 'The ranking factors that decide who lands in the top 3 — and how to influence them.', date: '2026', read: '8 min read' },
  { cat: 'Strategy', title: '6 marketing KPIs every local owner should track monthly', excerpt: 'Skip vanity metrics. These are the numbers that predict revenue.', date: '2026', read: '6 min read' },
  { cat: 'AI Search', title: 'Why AI assistants ignore most small business websites', excerpt: 'The technical gaps that keep you invisible to LLMs — and how to fix them.', date: '2026', read: '7 min read' },
  { cat: 'Web', title: 'Landing pages that turn local clicks into calls', excerpt: 'Conversion essentials for service-business websites.', date: '2026', read: '5 min read' },
  { cat: 'Reviews', title: 'Responding to reviews in a way AI rewards', excerpt: 'How your review responses shape both rankings and AI sentiment.', date: '2026', read: '4 min read' },
]

function PostImg({ label }) {
  return (
    <div className="img-ph"><span className="ph-tag"><PhotoIcon />Image placeholder<br />{label}</span></div>
  )
}

export default function Blog() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  async function subscribe(e) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><a href="/">Home</a> / <span>Insights</span></div>
          <h1>Insights on <span className="hl">Google &amp; AI</span> search.</h1>
          <p>Plain-English strategy on local rankings, AI visibility and turning searches into booked jobs.</p>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <div className="blog-grid">
          <article className="post feature reveal">
            <PostImg label="16:9 article hero" />
            <div className="post-body">
              <span className="cat">AI Search</span>
              <h3>How to get your business recommended by ChatGPT, Claude &amp; Gemini</h3>
              <p>A practical 2026 playbook for Generative Engine Optimization: the structured data, content and trust signals that make AI assistants name you instead of a competitor.</p>
              <div className="meta"><span>Jun 2026</span><span>·</span><span>9 min read</span><span className="rd">Read ↗</span></div>
            </div>
          </article>
          {posts.map((p) => (
            <article className="post reveal" key={p.title}>
              <PostImg label="16:9 thumbnail" />
              <div className="post-body">
                <span className="cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="meta"><span>{p.date}</span><span>·</span><span>{p.read}</span><span className="rd">Read ↗</span></div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}><a href="#" className="btn btn-line">Load More Articles</a></div>
      </div></section>

      <section className="section tint"><div className="wrap">
        <div className="cta-band reveal" style={{ background: '#fff', color: 'var(--ink)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-soft)' }}>
          <div className="wrapper" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 30, alignItems: 'center', textAlign: 'left' }}>
            <div>
              <span className="eyebrow">Newsletter</span>
              <h2 style={{ color: 'var(--navy-deep)', margin: '12px 0 8px' }}>Get the local + AI playbook, monthly</h2>
              <p style={{ color: 'var(--muted)', margin: 0 }}>One practical email a month on getting found and recommended. No fluff, unsubscribe anytime.</p>
            </div>
            {status === 'ok' ? (
              <p style={{ color: 'var(--navy-deep)', fontWeight: 600, margin: 0 }}>Thanks — you're subscribed! 🎉</p>
            ) : (
              <form onSubmit={subscribe} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email"
                  style={{ flex: 1, minWidth: 180, fontFamily: 'var(--body)', fontSize: 15, padding: '14px 16px', border: '1.5px solid var(--line)', borderRadius: 11, background: 'var(--tint-2)' }}
                />
                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
                </button>
                {status === 'error' && <p style={{ flexBasis: '100%', color: '#c0392b', margin: 0, fontSize: 13 }}>Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Prefer we just <span className="hl">do it for you?</span></h2>
          <p>Book a free visibility audit and we'll turn these strategies into results for your business.</p>
          <CtaButtons />
        </div></div>
      </div></section>
    </>
  )
}
