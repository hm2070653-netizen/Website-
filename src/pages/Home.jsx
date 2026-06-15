import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecHead } from '../components/Shared.jsx'
import Faq from '../components/Faq.jsx'
import { Check, Shield, PhotoIcon } from '../components/Icons.jsx'

const tabs = [
  { n: '01', label: 'Local SEO & Google Profile' },
  { n: '02', label: 'Google Ads Management' },
  { n: '03', label: 'Website & Conversion' },
  { n: '04', label: 'Reviews & Reputation' },
  { n: '05', label: 'Reporting & Strategy' },
]

const panels = [
  {
    h: 'Own the Google map pack in your city',
    p: 'We optimize and actively manage your Google Business Profile so you show up in the top 3 for the searches that actually bring calls.',
    feats: ['Google Business Profile optimization & posting', 'Local keyword & service-area targeting', 'Citation building & NAP consistency', 'On-page & technical local SEO'],
    btn: 'Start Getting Leads',
    icon: <svg viewBox="0 0 24 24"><path d="M21 21l-5-5M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /><path d="M11 7v8M7 11h8" /></svg>,
    label: 'Image placeholder · map ranking dashboard', img: 'index-map-ranking.png', alt: 'Local map ranking dashboard',
  },
  {
    h: 'Be the first call when a tradesperson is needed',
    p: 'When a homeowner searches "emergency plumber near me" or "roofer in [city]", Google Ads puts you at the very top — before any competitor. We build, manage and optimise your campaigns so every pound spent turns into a real lead.',
    feats: ['Campaigns built specifically for UK tradespeople', 'Targeted by location, trade, and buyer intent', 'No wasted budget, only relevant, local clicks', 'Full tracking so you know exactly what each lead costs'],
    btn: 'Start Getting Leads',
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M8 9h8M8 13h5" /></svg>,
    label: 'Image placeholder · AI answer monitor', img: 'index-ai-recommendation.png', alt: 'AI recommendation monitor',
  },
  {
    h: 'A website built to convert the traffic',
    p: 'Visibility only pays when visitors call. We build fast, trust-building sites engineered to turn clicks into booked jobs.',
    feats: ['Conversion-focused, SEO-ready service pages', 'Mobile-first, sub-2-second load times', 'Click-to-call, forms & lead capture', 'Structured data AI engines can read'],
    btn: 'Start Getting Leads',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 9h20M8 21h8M12 17v4" /></svg>,
    label: 'Image placeholder · website mockup', img: 'index-website-mockup.png', alt: 'Responsive website mockup',
  },
  {
    h: 'Turn happy customers into a 5-star wall',
    p: 'Reviews drive both your map ranking and how favorably AI describes you. We make collecting them automatic.',
    feats: ['Automated review request sequences', 'Smart routing & reputation monitoring', 'Response management & sentiment tracking', 'Showcase widgets for your site'],
    btn: 'Start Getting Leads',
    icon: <svg viewBox="0 0 24 24"><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19.2l1-5.8L3.5 9.3l5.9-.9L12 3z" /></svg>,
    label: 'Image placeholder · reviews dashboard', img: 'index-reviews-dashboard.png', alt: 'Reviews and reputation dashboard',
  },
  {
    h: 'Know exactly what your marketing earns',
    p: 'No vanity metrics. You get a clear monthly view of rankings, AI mentions, calls and revenue — plus a strategist who acts on it.',
    feats: ['Live dashboard: rankings, leads & AI mentions', 'Call tracking & lead attribution', 'Monthly strategy calls with your team', 'Competitor & market benchmarking'],
    btn: 'Start Getting Leads',
    icon: <svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 2 5-6" /></svg>,
    label: 'Image placeholder · analytics report', img: 'index-analytics-report.png', alt: 'Marketing analytics report dashboard',
  },
]

const industries = [
  { t: 'Home Services', i: <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M13 9h.01M13 13h.01" /></svg> },
  { t: 'HVAC & Plumbing', i: <svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> },
  { t: 'Roofing & Exterior', i: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg> },
  { t: 'Med & Dental', i: <svg viewBox="0 0 24 24"><path d="M19 14a7 7 0 1 0-14 0M12 2v3M3 12H0M24 12h-3" /><circle cx="12" cy="14" r="3" /></svg> },
  { t: 'Legal & Pro Services', i: <svg viewBox="0 0 24 24"><path d="M3 7h18v13H3zM8 7V4h8v3" /></svg> },
  { t: 'Real Estate', i: <svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7M6 10v9h12v-9" /></svg> },
  { t: 'Restaurants & Retail', i: <svg viewBox="0 0 24 24"><path d="M5 22V9l7-5 7 5v13M9 22v-6h6v6" /></svg> },
  { t: 'Auto & Specialty', i: <svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 0-5 5c0 5-2 6-2 9h14c0-3-2-4-2-9a5 5 0 0 0-5-5zM9 21h6" /></svg> },
]

const steps = [
  { days: 'Days 1–14', h: 'Audit & Baseline', p: 'We measure where you actually stand on Google and across AI assistants today, then map the fastest wins.', items: ['Full Google & AI-visibility audit', 'Competitor & keyword gap analysis', 'Baseline scorecard & 90-day roadmap'] },
  { days: 'Days 15–60', h: 'Optimize & Publish', p: 'We execute across every channel at once — profile, site, content and the structured data AI engines rely on.', items: ['Profile, schema & on-page optimization', 'Answer-ready content & citations', 'Review engine switched on'] },
  { days: 'Days 61–90', h: 'Scale & Dominate', p: "Momentum compounds. We double down on what's converting and track your climb in both search and AI answers.", items: ['Rank & AI-mention tracking', 'Conversion optimization', 'Monthly strategy & reporting'] },
]

const cases = [
  { img: 'client-hvac.png', alt: 'HVAC technician on a service call', tag: 'HVAC', title: 'From page 3 to the map pack in 11 weeks', metrics: [{ plus: true, v: '62%', k: 'Visibility' }, { v: '3.1x', k: 'Inbound calls' }, { v: '#1', k: 'Map rank' }] },
  { img: 'client-dental.png', alt: 'Dental practice front desk', tag: 'Dental', title: 'Now recommended by ChatGPT & Gemini', metrics: [{ plus: true, v: '55%', k: 'AI mentions' }, { v: '198', k: 'New reviews' }, { v: '90d', k: 'Timeline' }] },
  { img: 'client-roofing.png', alt: 'Roofing contractor on site', tag: 'Roofing', title: '$240k in tracked jobs from local search', metrics: [{ plus: true, v: '71%', k: 'Visibility' }, { v: '5.4x', k: 'ROI' }, { v: '$240k', k: 'Tracked' }] },
]

const reviews = [
  { img: 'review-hvac.png', name: 'Daniel Reyes', role: 'Owner, Reyes Comfort HVAC', quote: '"Within the first month we jumped into the top 3 on Maps and the phone hasn\'t stopped. They actually explained the AI side in plain English — and now ChatGPT recommends us by name."' },
  { img: 'review-dental.png', name: 'Sarah Patel', role: 'Practice Manager, Bright Smile Dental', quote: '"We\'d been burned by agencies before. Epic gave us a baseline, a 90-day plan, and hit every number. The monthly report shows exactly what we\'re getting for our money."' },
  { img: 'review-roofing.png', name: 'Mike Thompson', role: 'Founder, Thompson Roofing Co.', quote: '"Being recommended by AI assistants sounded like a gimmick until I watched it bring in real leads. Best marketing decision we\'ve made in ten years of business."' },
]

const plans = [
  { name: 'Launch', desc: 'For local businesses ready to get found and start generating calls.', price: <><span className="from">Starting at</span>$<span>—</span><small>/mo</small></>, feats: ['Google Business Profile optimization', 'Local SEO & citations', 'Baseline AI-visibility setup', 'Review engine & monthly report'], cta: <a href="#contact" className="btn btn-line">Get Started</a> },
  { name: 'Growth', feat: true, desc: 'Our most popular program — full Google + AI visibility, done for you.', price: <><span className="from">Starting at</span>$<span>—</span><small>/mo</small></>, feats: ['Everything in Launch', 'Full GEO / AI-visibility program', 'Answer-ready content & schema', 'Conversion website pages', 'Call tracking & monthly strategy calls'], cta: <a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book a Demo</a> },
  { name: 'Dominate', desc: 'For market leaders who want total visibility across every channel.', price: <><span className="from">Custom</span>Let's talk</>, feats: ['Everything in Growth', 'Multi-location & service-area scale', 'Paid ads (Google & Meta)', 'Dedicated strategist & priority support'], cta: <a href="#contact" className="btn btn-line">Contact Sales</a> },
]

const faqItems = [
  { q: 'What does "AI visibility on LLMs" actually mean?', a: 'When someone asks ChatGPT, Claude, Gemini or Perplexity for a recommendation — "who\'s the best plumber near me?" — those assistants pull from sources they trust. We structure your data, content and reputation so the AI names your business in its answer, not a competitor\'s.' },
  { q: 'How fast will I see results?', a: 'Most clients see local ranking movement within the first few weeks. Our commitment is a 50% increase in combined Google and AI visibility within 90 days — measured against the baseline we set in week one.' },
  { q: 'How is this different from regular SEO?', a: "Traditional SEO gets you ranked on Google's links. We do that and Generative Engine Optimization — getting you recommended inside AI assistants and AI Overviews, where a growing share of buyers now start. Most agencies only do the first half." },
  { q: 'Do I need to sign a long contract?', a: "No. We earn the relationship month to month and back it with our 90-day guarantee. If we don't hit the visibility target, your next month is on us." },
  { q: 'What kinds of businesses do you work with?', a: 'Local and service-based businesses where customers search before they buy — home services, healthcare, legal, real estate, restaurants, retail and specialty trades. If buyers compare options online, we can help.' },
  { q: 'How do you report on results?', a: 'You get a live dashboard plus a monthly report covering rankings, AI mentions, calls and tracked revenue — and a strategy call to review what\'s working and what\'s next. No vanity metrics.' },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const panel = panels[active]

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            
            <h1>Helping <span className="u">Tradespeople</span> <span className="hl">Win More Leads</span> &amp; Jobs</h1>
            <p className="lede"><b style={{ color: '#fff' }}>Start Getting More Calls. Start Ranking Higher on Google. Start Winning Jobs Over Your Competition.</b></p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Start Getting Leads <span className="arr">↗</span></a>
              <a href="https://calendly.com/maaz-epicagencyllc/15min" className="btn btn-ghost">Book a Demo</a>
            </div>
            
          </div>

          {/* SIGNATURE: dual-visibility panel */}
          <div className="viz reveal">
            <div className="viz-badge"><b>+50%</b><span>VISIBILITY / 90 DAYS</span></div>

            <div className="viz-card">
              <div className="viz-head"><span className="dot g"></span> Google · Local Map Pack <span className="tag">live rank</span></div>
              <div className="gsearch">
                <div className="gbar"><svg viewBox="0 0 24 24"><path d="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" fill="none" stroke="#5B6B82" strokeWidth="2" /></svg> best [your service] near me</div>
                <div className="gresult"><span className="rank">3</span>
                  <div><div className="gname">Competitor Co.</div><div className="grow">4.4 ★ · 88 reviews</div></div>
                </div>
                <div className="gresult you"><span className="rank">1</span>
                  <div><div className="gname">Your Business</div><div className="gstars">★★★★★ <span style={{ color: 'var(--muted)' }}>· 214 reviews</span></div></div>
                  <span className="gpin">📍 Top 3</span>
                </div>
                <div className="gresult"><span className="rank">2</span>
                  <div><div className="gname">Another Local Co.</div><div className="grow">4.2 ★ · 51 reviews</div></div>
                </div>
              </div>
            </div>

            <div className="viz-card viz-ai">
              <div className="viz-head"><span className="dot ai"></span> AI Assistant <span className="tag">cited answer</span></div>
              <div className="chat">
                <div className="q">Who's the best [your service] provider in my area?</div>
                <div className="a">Based on reviews and local reputation, I'd recommend <span className="hlname">Your Business</span> — they're highly rated and known for fast, reliable service.
                  <div className="cited" style={{ marginTop: 9 }}>
                    <span className="lbl">Recommended across</span>
                    <span className="chip">ChatGPT</span><span className="chip alt">Claude</span><span className="chip">Perplexity</span><span className="chip alt">Gemini</span>
                  </div>
                </div>
                <div className="typing"><i></i><i></i><i></i></div>
              </div>
            </div>
          </div>
        </div>

        <div className="trust">
          <div className="wrap">
            <span className="tl">Trusted by local businesses</span>
            <span className="logo-ph2">LOGO</span><span className="logo-ph2">LOGO</span><span className="logo-ph2">LOGO</span><span className="logo-ph2">LOGO</span><span className="logo-ph2">LOGO</span>
          </div>
        </div>
      </section>

      {/* ===== THE SHIFT ===== */}
      <section className="section dark" id="shift">
        <div className="wrap shift-grid">
          <div className="reveal">
            <span className="eyebrow">THE LEAD PROBLEM</span>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#fff', margin: '16px 0 14px' }}>Your Trade Business Deserves More Leads</h2>
            <p style={{ color: '#bdcce4', fontSize: 17 }}>Your work is good. You show up on time. You do the job right. But your phone still isn't ringing enough.</p>
            
          </div>
          <div className="shift-list reveal">
            <div className="shift-item"><span className="ic"><svg viewBox="0 0 24 24"><path d="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" /></svg></span>
              <div><h4>No Leads from Google</h4><p>You've got skills but no online presence. New customers can't find you, so they call your competitor instead.</p></div>
            </div>
            <div className="shift-item"><span className="ic"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 4 3 7 7 8l2 1 2-1c4-1 7-4 7-8a9 9 0 0 0-9-9z" /><path d="M9 12h6M12 9v6" /></svg></span>
              <div><h4>No Time for Marketing</h4><p>You're on the tools all day. You don't have time to chase leads, run ads, or figure out SEO. That's our job.</p></div>
            </div>
            <div className="shift-item"><span className="ic"><svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg></span>
              <div><h4>No Visibility on Google</h4><p>Your ideal customers are searching for your trade right now. But you're not showing up. Every day costs you jobs.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (TABS) ===== */}
      <section className="section" id="services">
        <div className="wrap">
          <SecHead eyebrow="What we do" title="How we get you more leads with Google">Traditional SEO gets you ranked. Generative engine optimization gets you recommended. We run both as a single, measurable growth system.</SecHead>

          <div className="tabs reveal">
            {tabs.map((t, i) => (
              <button key={t.n} className={'tab' + (active === i ? ' active' : '')} onClick={() => setActive(i)}>
                <span className="n">{t.n}</span>{t.label}
              </button>
            ))}
          </div>

          <div className="panels">
            <div className="panel active">
              <div>
                <h3>{panel.h}</h3>
                <p>{panel.p}</p>
                <ul className="feat">{panel.feats.map((f, i) => (<li key={i}><Check /> {f}</li>))}</ul>
                <a href="#contact" className="btn btn-line">{panel.btn} <span className="arr">↗</span></a>
              </div>
              <div className="panel-visual">
                <div className="pv-ic">{panel.icon}</div>
                <span className="ph-label">{panel.label}</span>
                <img className="media-img" src={`/images/${panel.img}`} alt={panel.alt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section dark" id="stats">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow center">By the numbers</span>
            <h2>Built to move the metrics that matter</h2>
          </div>
          <div className="stats">
            <div className="stat reveal"><div className="num" data-count="50" data-suffix="%"><span className="s">+0%</span></div><div className="lab">Avg. visibility lift / 90 days</div></div>
            <div className="stat reveal"><div className="num" data-count="90" data-suffix="">0</div><div className="lab">Days to measurable results</div></div>
            <div className="stat reveal"><div className="num" data-count="320" data-suffix="+">0</div><div className="lab">Local businesses grown</div></div>
            <div className="stat reveal"><div className="num" data-count="4" data-suffix="x"><span className="s">0</span></div><div className="lab">Avg. return on spend</div></div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS / 90 DAY ===== */}
      <section className="section tint" id="process">
        <div className="wrap">
          <SecHead eyebrow="The 90-day plan" title="A clear path from invisible to in-demand">No 12-month contracts before you see movement. Here's exactly how we hit +50% visibility in three months.</SecHead>
          <div className="steps">
            {steps.map((st, i) => (
              <div className="step reveal" key={i}>
                <span className="sn"></span><span className="days">{st.days}</span>
                <h3>{st.h}</h3>
                <p>{st.p}</p>
                <ul>{st.items.map((it, j) => (<li key={j}><Check stroke="#0A4488" /> {it}</li>))}</ul>
              </div>
            ))}
          </div>

          <div className="guarantee-band reveal">
            <span className="gico"><Shield stroke="#fff" /></span>
            <div>
              <h3>The Epic 90-Day Guarantee</h3>
              <p>If we don't increase your combined Google &amp; AI visibility by 50% in 90 days, your next month is free.</p>
            </div>
            <a href="#contact" className="btn" style={{ background: '#fff', color: 'var(--orange)' }}>Start Risk-Free <span className="arr">↗</span></a>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section" id="industries">
        <div className="wrap">
          <SecHead eyebrow="Who we serve" title="Local visibility for service businesses">If your customers search before they buy, we can put you in front of them — on Google and in AI answers.</SecHead>
          <div className="ind-grid">
            {industries.map((ind) => (
              <div className="ind reveal" key={ind.t}><span className="ic">{ind.i}</span> {ind.t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS / CASES ===== */}
      <section className="section tint" id="results">
        <div className="wrap">
          <SecHead eyebrow="Proof, not promises" title="Featured client results">Real businesses that became the obvious choice in their market — in search and in AI answers.</SecHead>
          <div className="cases">
            {cases.map((c) => (
              <div className="case reveal" key={c.tag}>
                <div className="img-ph">
                  <span className="ph-tag"><PhotoIcon />Image placeholder<br />16:10 client photo</span>
                  <img className="media-img" src={`/images/${c.img}`} alt={c.alt} />
                </div>
                <div className="case-body">
                  <span className="ind-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <div className="case-metrics">
                    {c.metrics.map((m, i) => (
                      <div className="m" key={i}><div className="v">{m.plus && <span className="s">+</span>}{m.v}</div><div className="k">{m.k}</div></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="reviews">
        <div className="wrap">
          <div className="sec-head center reveal"><span className="eyebrow center">What clients say</span><h2>Owners who became the answer</h2></div>
          <div className="tgrid">
            {reviews.map((r) => (
              <div className="tcard reveal" key={r.name}>
                <div className="qs">★★★★★</div>
                <p>{r.quote}</p>
                <div className="who"><span className="av"><img src={`/images/${r.img}`} alt={r.name} /></span>
                  <div><div className="nm">{r.name}</div><div className="rl">{r.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section tint" id="pricing">
        <div className="wrap">
          <SecHead eyebrow="Programs" title="Pick the program that fits your growth">Every program includes the 90-day visibility guarantee. No long lock-ins, no surprises.</SecHead>
          <div className="plans">
            {plans.map((p) => (
              <div className={'plan reveal' + (p.feat ? ' feat-plan' : '')} key={p.name}>
                <div className="pn">{p.name}</div>
                <div className="pd">{p.desc}</div>
                <div className="price">{p.price}</div>
                <ul>{p.feats.map((f, i) => (<li key={i}><Check /> {f}</li>))}</ul>
                {p.cta}
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="sec-head center reveal"><span className="eyebrow center">Questions</span><h2>Everything you're wondering</h2></div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final" id="contact">
        <div className="wrap">
          <span className="eyebrow center" style={{ marginBottom: 18 }}>Ready when you are</span>
          <h2>Become the business everyone, and every AI, <span className="hl">recommends.</span></h2>
          <p>Book a free visibility audit. We'll show you exactly where you stand on Google and across AI assistants, and the fastest path to +50% in 90 days.</p>
          <div className="final-cta">
            <a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a>
            <a href="tel:+447544058348" className="btn btn-ghost btn-blue-border">Call +44 75440 58348</a>
          </div>
          <p className="micro">No obligation · 90-day visibility guarantee · </p>
        </div>
      </section>
    </>
  )
}