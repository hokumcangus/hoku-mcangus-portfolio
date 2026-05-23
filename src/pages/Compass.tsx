import { Link } from "react-router-dom"
import "./Compass.css"

export default function Compass() {
  return (
    <div className="compass-page">
      <header className="compass-header">
        <div className="container compass-header-inner">
          <Link to="/" className="compass-brand-link">HOKU</Link>
          <nav className="compass-nav">
            <Link to="/fleet" className="compass-nav-link">THE HULA</Link>
            <Link to="/voyage" className="compass-nav-link">THE VOYAGE</Link>
            <Link to="/compass" className="compass-nav-link is-active">THE COMPASS</Link>
            <Link to="/talk-story" className="compass-nav-link">TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main className="compass-main">
        <div className="container">
          <h1 className="compass-title">The Compass</h1>
          <p className="compass-intro">
            In Hawaiian culture, Ohana isn't just family—it's the community that keeps you grounded and the purpose that keeps you moving forward.
            My community is my compass.
          </p>

          <div className="compass-grid">
            <div className="compass-card">
              <h3 className="compass-card-title">Ohana</h3>
              <p className="compass-card-text">
                Behind every line of code I write is a commitment to my family and the values they've instilled in me:
                hard work, integrity, and Aloha.
              </p>
            </div>
            <div className="compass-card">
              <h3 className="compass-card-title">Community</h3>
              <p className="compass-card-text">
                Whether it's supporting local businesses through technology or mentoring the next generation of creators,
                I believe in the power of collective growth.
              </p>
            </div>
            <div className="compass-card">
              <h3 className="compass-card-title">Tulalip Roots</h3>
              <p className="compass-card-text">
                Living and working near the shoreline of Tulalip Bay reminds me daily of the balance between technical precision
                and the natural flow of life.
              </p>
            </div>
          </div>

          <div className="compass-quote-shell">
            <h2 className="compass-quote-text">"My Ohana is my compass. They remind me that behind every line of code is a person and a community worth serving."</h2>
          </div>
        </div>
      </main>

      <footer className="compass-footer">
        <div className="container">
          <p className="compass-footer-copy">Mahalo for exploring my community.</p>
        </div>
      </footer>
    </div>
  )
}
