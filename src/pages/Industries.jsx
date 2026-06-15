import { Link } from 'react-router-dom'
import { CtaButtons, SecHead } from '../components/Shared.jsx'
import { Check } from '../components/Icons.jsx'

const industries = [
  { title: 'Home Services', desc: 'Handyman, cleaning, landscaping and more — we make you the first call in your service area.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M13 9h.01M13 13h.01" /></svg> },
  { title: 'HVAC & Plumbing', desc: 'Capture high-intent emergency searches and seasonal demand before competitors do.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> },
  { title: 'Roofing & Exterior', desc: 'Storm-season ready: rank in the map pack and get cited by AI when homeowners ask for help.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg> },
  { title: 'Medical & Dental', desc: 'Build the reviews and authority that win new-patient searches and AI recommendations.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M19 14a7 7 0 1 0-14 0" /><circle cx="12" cy="14" r="3" /><path d="M12 2v3" /></svg> },
  { title: 'Legal & Professional', desc: 'Earn trust signals that rank you locally and make AI confident enough to name you.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 7h18v13H3zM8 7V4h8v3" /></svg> },
  { title: 'Real Estate', desc: 'Be the agent or brokerage that shows up across Google, maps and AI search.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M4 11l8-7 8 7M6 10v9h12v-9" /></svg> },
  { title: 'Restaurants & Retail', desc: 'Win the “near me” moment and the “best in town” AI question alike.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M5 22V9l7-5 7 5v13M9 22v-6h6v6" /></svg> },
  { title: 'Auto & Specialty', desc: 'From repair shops to specialty services, become the obvious local choice.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 2a5 5 0 0 0-5 5c0 5-2 6-2 9h14c0-3-2-4-2-9a5 5 0 0 0-5-5zM9 21h6" /></svg> },
  { title: 'Multi-Location Brands', desc: 'Scale consistent visibility across every location, in both search and AI answers.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 21h18M6 21V8h5v13M14 21V3h4v18" /></svg> },
]

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / <span>Industries</span></div>
          <h1>Local visibility for <span className="hl">service businesses</span>.</h1>
          <p>If your customers search before they buy, we can put you in front of them — on Google and in AI answers. Here's where we go deep.</p>
          <div className="ph-cta"><a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a><Link to="/services" className="btn btn-ghost">See How We Work</Link></div>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <SecHead eyebrow="Who we serve" title="Marketing experts for local & service businesses">We specialize so we can out-execute generalist agencies in your specific market.</SecHead>
        <div className="ind-detail">
          {industries.map((ind) => (
            <div className="ind-card reveal" key={ind.title}>
              <div className="ic">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <Link to="/contact" className="mini">See our approach <span className="arr">↗</span></Link>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 34, color: 'var(--muted)', fontSize: 15 }}>Don't see your industry? If customers search for you, we can help. <Link to="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>Let's talk ↗</Link></p>
      </div></section>

      <section className="section dark"><div className="wrap split">
        <div className="reveal">
          <span className="eyebrow">Why specialization wins</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.3vw,38px)', margin: '14px 0 14px' }}>We learn your market once — then compound it</h2>
          <p style={{ color: '#bdcce4', fontSize: 17 }}>Because we focus on a handful of industries, we already know the searches that convert, the questions buyers ask AI, and the trust signals that move rankings. You skip the expensive learning curve.</p>
          <div className="shift-list" style={{ marginTop: 20 }}>
            <div className="shift-item"><span className="ic"><Check /></span><div><h4>Faster wins</h4><p>Proven playbooks per industry, not guesswork.</p></div></div>
            <div className="shift-item"><span className="ic"><Check /></span><div><h4>Content that ranks &amp; gets cited</h4><p>We know the questions your buyers and the AI engines ask.</p></div></div>
          </div>
        </div>
        <div className="split-media reveal" style={{ background: 'linear-gradient(150deg,var(--g1),var(--g3))', borderColor: 'var(--line-dark)' }}>
          <span className="ph-tag" style={{ color: 'var(--muted-light)' }}><svg viewBox="0 0 24 24" stroke="#A8BBD6"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 2 5-6" /></svg>Image placeholder<br />industry results chart</span>
          <img className="media-img" src="/images/industries-results-chart.png" alt="Industry results growth chart" />
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Ready to own your <span className="hl">local market?</span></h2>
          <p>Book a free audit and we'll show you where you stand against competitors on Google and in AI answers.</p>
          <div className="ph-cta"><a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a><Link to="/services" className="btn btn-ghost">See How We Work</Link></div>
        </div></div>
      </div></section>
    </>
  )
}