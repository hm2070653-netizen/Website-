import { Link } from 'react-router-dom'

// The dual CTA button pair used in page heroes and CTA bands.
export function CtaButtons() {
  return (
    <div className="ph-cta">
      <Link to="/contact" className="btn btn-primary">Book My Free Audit <span className="arr">↗</span></Link>
      <a href="tel:+447544058348" className="btn btn-ghost">Call +44 75440 58348</a>
    </div>
  )
}

// Centered eyebrow + heading (+ optional sub-paragraph) block.
export function SecHead({ eyebrow, title, children }) {
  return (
    <div className="sec-head center reveal">
      <span className="eyebrow center">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

// The orange (or custom) call-to-action band near the bottom of inner pages.
export function CtaBand({ children }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band reveal">
          <div className="wrapper">
            {children}
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
