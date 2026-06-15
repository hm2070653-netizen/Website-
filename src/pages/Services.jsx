import { Link } from 'react-router-dom'
import { CtaButtons, SecHead } from '../components/Shared.jsx'
import { Check } from '../components/Icons.jsx'

const services = [
  {
    n: '01',
    title: 'Local SEO & Google Business Profile',
    desc: 'We optimize and actively manage your Google Business Profile so you appear in the top 3 for the searches that bring real calls.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M21 21l-5-5M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /><path d="M11 7v8M7 11h8" /></svg>),
    feats: ['Profile optimization & weekly posting', 'Local keyword & service-area targeting', 'Citation building & NAP consistency', 'On-page & technical local SEO'],
  },
  {
    n: '02',
    title: 'AI / LLM Visibility (GEO)',
    desc: 'Generative Engine Optimization structures your content, data and reputation so large language models cite you when buyers ask for a recommendation.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M8 9h8M8 13h5" /></svg>),
    feats: ['Entity & schema markup AI engines trust', 'Answer-ready content for ChatGPT, Claude, Gemini, Perplexity', 'Authority signals & trusted citations', 'AI-visibility tracking & prompt monitoring'],
  },
  {
    n: '03',
    title: 'Website & Conversion',
    desc: 'Visibility only pays when visitors call. We build fast, trust-building sites engineered to turn clicks into booked jobs.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 9h20M8 21h8M12 17v4" /></svg>),
    feats: ['Conversion-focused, SEO-ready service pages', 'Mobile-first, sub-2-second load times', 'Click-to-call, forms & lead capture', 'Structured data AI engines can read'],
  },
  {
    n: '04',
    title: 'Reviews & Reputation',
    desc: 'Reviews drive both your map ranking and how favorably AI describes you. We make collecting them automatic.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19.2l1-5.8L3.5 9.3l5.9-.9L12 3z" /></svg>),
    feats: ['Automated review request sequences', 'Smart routing & reputation monitoring', 'Response management & sentiment tracking', 'Showcase widgets for your site'],
  },
  {
    n: '05',
    title: 'Reporting & Strategy',
    desc: 'No vanity metrics. You get a clear monthly view of rankings, AI mentions, calls and revenue — plus a strategist who acts on it.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 2 5-6" /></svg>),
    feats: ['Live dashboard: rankings, leads & AI mentions', 'Call tracking & lead attribution', 'Monthly strategy calls with your team', 'Competitor & market benchmarking'],
  },
  {
    n: '06',
    title: 'Paid Ads (Google & Meta)',
    desc: 'When you want leads faster, we layer in tightly managed Google and Meta campaigns that feed the same tracked pipeline.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>),
    feats: ['Local Service Ads & Google Ads management', 'Meta retargeting that nurtures leads', 'Landing pages built to convert', 'Transparent spend & ROI reporting'],
  },
]

const steps = [
  { days: 'Days 1–14', title: 'Audit & Baseline', desc: 'We measure exactly where you stand on Google and across AI assistants, then map the fastest wins.', items: ['Full Google & AI-visibility audit', 'Competitor & keyword gap analysis', 'Baseline scorecard & roadmap'] },
  { days: 'Days 15–60', title: 'Optimize & Publish', desc: 'We execute across every channel at once — profile, site, content and AI-ready structured data.', items: ['Profile, schema & on-page optimization', 'Answer-ready content & citations', 'Review engine switched on'] },
  { days: 'Days 61–90', title: 'Scale & Dominate', desc: "Momentum compounds. We double down on what converts and track your climb in search and AI answers.", items: ['Rank & AI-mention tracking', 'Conversion optimization', 'Monthly strategy & reporting'] },
]

const plans = [
  { name: 'Launch', desc: 'For local businesses ready to get found and start generating calls.', price: <><span className="from">Starting at</span>$<span>—</span><small>/mo</small></>, feats: ['Google Business Profile optimization', 'Local SEO & citations', 'Baseline AI-visibility setup', 'Review engine & monthly report'], cta: <Link to="/contact" className="btn btn-line">Get Started</Link> },
  { name: 'Growth', feat: true, desc: 'Our most popular program — full Google + AI visibility, done for you.', price: <><span className="from">Starting at</span>$<span>—</span><small>/mo</small></>, feats: ['Everything in Launch', 'Full GEO / AI-visibility program', 'Answer-ready content & schema', 'Conversion website pages', 'Call tracking & strategy calls'], cta: <a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book a Demo</a> },
  { name: 'Dominate', desc: 'For market leaders who want total visibility across every channel.', price: <><span className="from">Custom</span>Let's talk</>, feats: ['Everything in Growth', 'Multi-location & service-area scale', 'Paid ads (Google & Meta)', 'Dedicated strategist & priority support'], cta: <Link to="/contact" className="btn btn-line">Contact Sales</Link> },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / <span>Services</span></div>
          <h1>One team for <span className="hl">both kinds</span> of search.</h1>
          <p>Traditional SEO gets you ranked. Generative engine optimization gets you recommended. We run both as a single, measurable growth system.</p>
          <CtaButtons />
        </div>
      </section>

      <section className="section"><div className="wrap">
        <SecHead eyebrow="What we do" title="Everything to get found — and recommended">Pick one service or run the whole system. Every engagement comes with the 90-day visibility guarantee.</SecHead>
        <div className="cards-3">
          {services.map((s) => (
            <div className="icard reveal" key={s.n} style={{ padding: '32px 30px' }}>
              <div className="ic">{s.icon}</div>
              <span className="tagn">{s.n}</span>
              <h3 style={{ fontSize: 22, margin: '6px 0 6px' }}>{s.title}</h3>
              <p style={{ marginBottom: 16 }}>{s.desc}</p>
              <ul className="feat" style={{ marginBottom: 0 }}>
                {s.feats.map((f, i) => (<li key={i}><Check /> {f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section dark"><div className="wrap">
        <SecHead eyebrow="The 90-day plan" title="A clear path from invisible to in-demand">No 12-month lock-in before you see movement.</SecHead>
        <div className="steps">
          {steps.map((st, i) => (
            <div className="step reveal" key={i} style={{ background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.12)' }}>
              <span className="sn"></span>
              <span className="days" style={{ background: 'rgba(255,255,255,.08)', color: '#bdcce4' }}>{st.days}</span>
              <h3 style={{ color: '#fff' }}>{st.title}</h3>
              <p style={{ color: '#b9c8e1' }}>{st.desc}</p>
              <ul>
                {st.items.map((it, j) => (<li key={j}><Check /> <span style={{ color: '#dfe9f7' }}>{it}</span></li>))}
              </ul>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section tint" id="pricing"><div className="wrap">
        <SecHead eyebrow="Programs" title="Pick the program that fits your growth">Every program includes the 90-day visibility guarantee. No long lock-ins.</SecHead>
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
        
      </div></section>

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Not sure which service you need? <span className="hl">Start with the audit.</span></h2>
          <p>We'll show you the gaps on Google and in AI answers, and exactly which fixes move the needle fastest.</p>
          <CtaButtons />
        </div></div>
      </div></section>
    </>
  )
}