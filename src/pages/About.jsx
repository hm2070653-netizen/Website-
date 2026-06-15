import { Link } from 'react-router-dom'
import { CtaButtons, SecHead } from '../components/Shared.jsx'
import { PhotoIcon } from '../components/Icons.jsx'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / <span>About</span></div>
          <h1>We make local businesses the <span className="hl">obvious answer</span> — on Google and in AI.</h1>
          <p>Epic Agency is a specialist team built for the new shape of search. We get you ranked where customers look and recommended where they ask.</p>
          <CtaButtons />
        </div>
      </section>

      <section className="section"><div className="wrap split">
        <div className="reveal">
          <span className="eyebrow">Our story</span>
          <h2>Built for how people actually search now</h2>
          <div className="lead-copy">
            <p className="big">Search stopped being a single box years ago. Today a customer might Google you, scroll a map, or simply ask an AI assistant who to call — and decide before they ever visit a website.</p>
            <p>Most agencies still optimize for only half of that. We started Epic Agency to close the gap: one team that wins the Google map pack and earns citations inside ChatGPT, Claude, Gemini and Perplexity, measured against a baseline and a clear 90-day target.</p>
            <p>We work with a focused set of local and service businesses so we can go deep on what moves the needle in each market — not spread thin across everything.</p>
          </div>
          <Link to="/services" className="btn btn-line" style={{ marginTop: 8 }}>See How We Work <span className="arr">↗</span></Link>
        </div>
        <div className="split-media reveal">
          <span className="ph-tag"><PhotoIcon />Image placeholder<br />team / office photo · 1:1</span>
          <img className="media-img" src="/images/about-team.png" alt="Epic Agency team at work" />
        </div>
      </div></section>

      <section className="section dark"><div className="wrap">
        <div className="sec-head center reveal"><span className="eyebrow center">By the numbers</span><h2>A track record you can measure</h2></div>
        <div className="stats">
          <div className="stat reveal"><div className="num" data-count="50" data-suffix="%"><span className="s">+0%</span></div><div className="lab">Avg. visibility lift / 90 days</div></div>
          <div className="stat reveal"><div className="num" data-count="320" data-suffix="+">0</div><div className="lab">Local businesses grown</div></div>
          <div className="stat reveal"><div className="num" data-count="98" data-suffix="%">0</div><div className="lab">Client retention</div></div>
          <div className="stat reveal"><div className="num" data-count="4" data-suffix="x"><span className="s">0</span></div><div className="lab">Avg. return on spend</div></div>
        </div>
      </div></section>

      <section className="section tint"><div className="wrap">
        <SecHead eyebrow="What we stand for" title="Principles that shape every account">The shortcuts that hurt clients are the ones we refuse to take.</SecHead>
        <div className="cards-4">
          <div className="icard reveal"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg></div><h3>Specialists, not generalists</h3><p>We focus on local visibility for service businesses, so our playbook is sharp, not generic.</p></div>
          <div className="icard reveal"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 2 5-6" /></svg></div><h3>Measurable or it doesn't count</h3><p>Baselines, targets and monthly reporting. No vanity metrics, no smoke.</p></div>
          <div className="icard reveal"><div className="ic"><svg viewBox="0 0 24 24"><path d="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" /><path d="M12 3a9 9 0 0 0-9 9" /></svg></div><h3>Both kinds of search</h3><p>Google rankings and AI recommendations, run as one system — not bolt-ons.</p></div>
          <div className="icard reveal"><div className="ic"><svg viewBox="0 0 24 24"><path d="M8 10h8M8 14h5M21 12a9 9 0 1 1-3.5-7.1L21 3v6h-6" /></svg></div><h3>Plain-English partners</h3><p>We explain the AI side without jargon, and you always know what you're paying for.</p></div>
        </div>
      </div></section>

      {/* TEAM SECTION HIDDEN (temporarily) — matches original commented-out block */}

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Want this team in <span className="hl">your corner?</span></h2>
          <p>Book a free visibility audit and see exactly where you stand on Google and across AI assistants.</p>
          <CtaButtons />
        </div></div>
      </div></section>
    </>
  )
}
