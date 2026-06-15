import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn } from './Icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Link to="/" className="brand" style={{ color: '#fff' }}>
              <img className="logo-real" src="/images/epic-logo-white.png" alt="Epic Agency" />
            </Link>
            <p>We increase your local presence on Google and your visibility across AI assistants — so you're the answer when customers search.</p>
            <div className="fsoc">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </div>
          <div className="f-col">
          <h5>SERVICES</h5>
         <a href="#services">Local SEO</a>
          <a href="#services">Google Ads Management</a>  {/* NEW */}
          <a href="#services">Website Design</a>
          <a href="#services">Reviews & Reputation</a>
          <a href="#services">Reporting</a>
            </div>
          
          <div className="f-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/results">Results</Link>
            {/* Insights link hidden */}
            <Link to="/contact">Contact</Link>
          </div>
          <div className="f-col">
            <h5>Contact</h5>
            <a href="tel:+447544058348">+44 75440 58348</a>
            <a href="mailto:support@epicagency.co.uk"> support@epicagency.co.uk</a>
          
            <Link to="/contact">Free Visibility Audit</Link>
          </div>
        </div>
        <div className="f-bot">
          <span>© 2026 Epic Agency. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Sitemap</a></span>
        </div>
      </div>
    </footer>
  )
}
