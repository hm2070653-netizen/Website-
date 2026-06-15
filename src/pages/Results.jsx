import { Link } from 'react-router-dom'
import { CtaButtons, SecHead } from '../components/Shared.jsx'
import { PhotoIcon } from '../components/Icons.jsx'

const cases = [
  { img: 'client-heating.png', alt: 'Heating engineer on a service call', tag: 'HVAC', title: 'From page 3 to the map pack in 11 weeks', metrics: [{ plus: true, v: '62%', k: 'Visibility' }, { v: '3.1x', k: 'Inbound calls' }, { v: '#1', k: 'Map rank' }] },
  { img: 'client-dental.png', alt: 'Dental practice front desk', tag: 'Dental', title: 'Now recommended by ChatGPT & Gemini', metrics: [{ plus: true, v: '55%', k: 'AI mentions' }, { v: '198', k: 'New reviews' }, { v: '90d', k: 'Timeline' }] },
  { img: 'client-roofing.png', alt: 'Roofing contractor on site', tag: 'Roofing', title: '$240k in tracked jobs from local search', metrics: [{ plus: true, v: '71%', k: 'Visibility' }, { v: '5.4x', k: 'ROI' }, { v: '$240k', k: 'Tracked' }] },
  { img: 'client-legal.png', alt: 'Attorney at a law firm office', tag: 'Legal', title: 'Top-3 for every target practice area', metrics: [{ plus: true, v: '48%', k: 'Visibility' }, { v: '2.7x', k: 'Consults' }, { v: '#2', k: 'Avg. rank' }] },
  { img: 'client-realestate.png', alt: 'Real estate agent showing a property', tag: 'Real Estate', title: 'Cited across AI search in three metros', metrics: [{ plus: true, v: '58%', k: 'AI mentions' }, { v: '3.4x', k: 'Leads' }, { v: '90d', k: 'Timeline' }] },
  { img: 'client-auto.png', alt: 'Auto service technician with a vehicle', tag: 'Auto', title: 'Booked solid from “near me” searches', metrics: [{ plus: true, v: '66%', k: 'Visibility' }, { v: '4.2x', k: 'Bookings' }, { v: '#1', k: 'Map rank' }] },
]

const reviews = [
  { img: 'review-hvac.png', name: 'Daniel Reyes', role: 'Owner, Reyes Comfort HVAC', quote: '"Within the first month we jumped into the top 3 on Maps and the phone hasn\'t stopped. Now ChatGPT recommends us by name."' },
  { img: 'review-dental.png', name: 'Sarah Patel', role: 'Practice Manager, Bright Smile Dental', quote: '"Epic gave us a baseline, a 90-day plan, and hit every number. The monthly report shows exactly what we\'re getting."' },
  { img: 'review-roofing.png', name: 'Mike Thompson', role: 'Founder, Thompson Roofing Co.', quote: '"Being recommended by AI assistants sounded like a gimmick until I watched it bring in real leads. Best decision in ten years."' },
]

export default function Results() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / <span>Results</span></div>
          <h1>Proof, <span className="hl">not promises</span>.</h1>
          <p>Real businesses that became the obvious choice in their market — in search and in AI answers. Replace with your own client stories and photos.</p>
          <div className="ph-cta"><a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a><Link to="/services" className="btn btn-ghost">See How We Work</Link></div>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <SecHead eyebrow="Featured work" title="Client results across industries">Every number here is illustrative — swap in your real case studies as you build them.</SecHead>
        <div className="cases">
          {cases.map((c) => (
            <div className="case reveal" key={c.tag + c.title}>
              <div className="img-ph">
                <span className="ph-tag"><PhotoIcon />Image placeholder<br />16:10 client photo</span>
                <img className="media-img" src={`/images/${c.img}`} alt={c.alt} />
              </div>
              <div className="case-body">
                <span className="ind-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="case-metrics">
                  {c.metrics.map((m, i) => (
                    <div className="m" key={i}>
                      <div className="v">{m.plus && <span className="s">+</span>}{m.v}</div>
                      <div className="k">{m.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section dark"><div className="wrap">
        <div className="sec-head center reveal"><span className="eyebrow center">In aggregate</span><h2>What the average Epic client sees</h2></div>
        <div className="stats">
          <div className="stat reveal"><div className="num" data-count="50" data-suffix="%"><span className="s">+0%</span></div><div className="lab">Avg. visibility lift / 90 days</div></div>
          <div className="stat reveal"><div className="num" data-count="3" data-suffix="x"><span className="s">0</span></div><div className="lab">Avg. lead growth</div></div>
          <div className="stat reveal"><div className="num" data-count="320" data-suffix="+">0</div><div className="lab">Businesses grown</div></div>
          <div className="stat reveal"><div className="num" data-count="98" data-suffix="%">0</div><div className="lab">Client retention</div></div>
        </div>
      </div></section>

      <section className="section tint"><div className="wrap">
        <div className="sec-head center reveal"><span className="eyebrow center">What clients say</span><h2>Owners who became the answer</h2></div>
        <div className="tgrid">
          {reviews.map((r) => (
            <div className="tcard reveal" key={r.name}>
              <div className="qs">★★★★★</div>
              <p>{r.quote}</p>
              <div className="who">
                <span className="av"><img src={`/images/${r.img}`} alt={r.name} /></span>
                <div>
                  <div className="nm">{r.name}</div>
                  <div className="rl">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Your story could be <span className="hl">next.</span></h2>
          <p>Book a free visibility audit and we'll map the fastest path to results for your business.</p>
          <div className="ph-cta"><a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a><Link to="/services" className="btn btn-ghost">See How We Work</Link></div>
        </div></div>
      </div></section>
    </>
  )
}