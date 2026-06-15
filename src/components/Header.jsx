import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header id="hdr" className={open ? 'open' : ''}>
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close}>
          <img className="logo-real" src="/images/epic-logo.png" alt="Epic Agency" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          <NavLink to="/industries" onClick={close}>Industries</NavLink>
          <NavLink to="/results" onClick={close}>Results</NavLink>
          {/* Insights link hidden: <NavLink to="/insights">Insights</NavLink> */}
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
        <div className="nav-cta">
        {/* button  */}
         
        <a href="tel:+447544058348" className="nav-phone btn-blue-border">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="var(--orange)">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
         </svg>
          +44 75440 58348
                 </a>
          <Link to="/contact" className="btn btn-dark" onClick={close}>Start Getting Leads</Link>
        </div>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
