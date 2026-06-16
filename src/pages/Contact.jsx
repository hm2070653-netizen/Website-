import { useState } from 'react'
import { Link } from 'react-router-dom'
import Faq from '../components/Faq.jsx'
import { PhoneLine, Shield } from '../components/Icons.jsx'

const industryOptions = [
  'Home Services', 'HVAC & Plumbing', 'Roofing & Exterior', 'Medical & Dental',
  'Legal & Professional', 'Real Estate', 'Restaurants & Retail', 'Auto & Specialty', 'Other',
]

const faqItems = [
  { q: 'Is the audit really free?', a: "Yes. The visibility audit and strategy call are free with no obligation. You'll get real insight into where you stand on Google and across AI assistants either way." },
  { q: 'How fast will I hear back?', a: "Within one business day. If it's urgent, call us directly at +44 75440 58348." },
  { q: 'Do I have to sign a long contract?', a: 'No. We work month to month and back every program with the 90-day visibility guarantee.' },
]

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '',
  business: '', website: '', industry: '', goal: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'audit', ...form }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('ok')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      

      <section className="section"><div className="wrap contact-grid">
        <div className="cinfo reveal">
          <h2>Let's get you found</h2>
          <p>No obligation, no hard sell. Just a clear picture of your current visibility and where the biggest wins are.</p>
          <div className="cline"><span className="ic"><PhoneLine /></span><div><div className="k">Call us</div><div className="v"><a href="tel:+447544058348">+44 75440 58348</a></div></div></div>
          <div className="cline"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span><div><div className="k">Email</div><div className="v"><a href="mailto:support@epicagency.co.uk">support@epicagency.co.uk</a></div></div></div>
          
          
          <div className="trust-mini">
            <Shield />
            <p><b>The Epic 90-Day Guarantee.</b> If we don't increase your combined Google &amp; AI visibility by 50% in 90 days, your next month is free.</p>
          </div>
        </div>

        <div className="form-card reveal">
          {status === 'ok' ? (
            <div className="form-ok" style={{ display: 'block' }}>
              <div className="ok-ic"><svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7" /></svg></div>
              <h3>Request received</h3>
              <p>Thanks — we'll review your visibility and reach out within one business day with your free audit.</p>
            </div>
          ) : (
            <>
              <h3>Ready to Get More Leads?</h3>
              <p className="sub">We'll get back to you within one business day.</p>
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field"><label>First name <span className="req">*</span></label><input type="text" name="firstName" required placeholder="Jane" value={form.firstName} onChange={update} /></div>
                  <div className="field"><label>Last name <span className="req">*</span></label><input type="text" name="lastName" required placeholder="Doe" value={form.lastName} onChange={update} /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>Email <span className="req">*</span></label><input type="email" name="email" required placeholder="jane@business.com" value={form.email} onChange={update} /></div>
                  <div className="field"><label>Phone</label><input type="tel" name="phone" placeholder="Your phone number" value={form.phone} onChange={update} /></div>
                </div>
                <div className="field"><label>Business name <span className="req">*</span></label><input type="text" name="business" required placeholder="Your Business LLC" value={form.business} onChange={update} /></div>
                <div className="field"><label>Website</label><input type="url" name="website" placeholder="https://yourbusiness.com" value={form.website} onChange={update} /></div>
                <div className="field"><label>Industry</label>
                  <select name="industry" value={form.industry} onChange={update}>
                    <option value="">Select one…</option>
                    {industryOptions.map((o) => (<option key={o}>{o}</option>))}
                  </select>
                </div>
                <div className="field"><label>What's your biggest goal right now?</label><textarea name="goal" placeholder="e.g. more calls from local search, getting recommended by AI, a new website…" value={form.goal} onChange={update}></textarea></div>
                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send Message <span className="arr">↗</span></>}
                </button>
                {status === 'error' && <p className="form-note" style={{ color: '#c0392b' }}>Something went wrong sending your request. Please try again or call us directly.</p>}
                {status !== 'error' && <p className="form-note">Need help getting started? Book a time with an expert!</p>}
              </form>
            </>
          )}
        </div>
      </div></section>

      
    </>
  )
} 