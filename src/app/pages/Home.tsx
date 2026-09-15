import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="container home-header-inner">
          <Link to="/" className="home-brand-link">HOKU</Link>
          <nav className="home-nav">
            <Link to="/fleet" className="home-nav-link">THE HULA</Link>
            <Link to="/voyage" className="home-nav-link">THE VOYAGE</Link>
            <Link to="/compass" className="home-nav-link">THE COMPASS</Link>
            <Link to="/talk-story" className="home-nav-link">TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main className="home-main">
        <section className="home-hero">
          <div className="container">
            <h2 className="home-hero-kicker">
              Full-Stack Engineer & Digital Story Dancer
            </h2>
            <h1 className="home-hero-title">
              Choreographing complex systems with technical precision and an Aloha-driven heart.
            </h1>
            <p className="home-hero-text">
              E komo mai. I'm Hoku, a builder of robust digital ecosystems. 
              Like hula practitioners preserving story through movement, I shape codebases with rhythm, reliability, and care for community.
            </p>
            <div className="home-hero-actions">
              <Link to="/fleet" className="home-btn home-btn-primary">
                EXPLORE THE HULA
              </Link>
              <Link to="/talk-story" className="home-btn home-btn-secondary">
                TALK STORY
              </Link>
            </div>
          </div>
        </section>

        <section id="north-star" className="home-north-star">
          <div className="container home-north-star-grid">
            <div>
              <h3 className="home-north-star-title">The North Star</h3>
              <p className="home-north-star-text">
                My mission is to build sustainable, high-impact software that serves people and communities. 
                Whether it's scaling backend systems at Nordstrom or building local platforms like Taste of Aloha, 
                my compass always points toward technical excellence and human connection.
              </p>
              <div className="home-north-star-values">
                <div>
                  <h4 className="home-value-title">RELIABILITY</h4>
                  <p className="home-value-text">Systems practiced to stay steady, graceful, and dependable.</p>
                </div>
                <div>
                  <h4 className="home-value-title">COMMUNITY</h4>
                  <p className="home-value-text">Code that empowers and brings people together.</p>
                </div>
              </div>
            </div>
            <div className="home-north-star-visual">
               <span className="home-north-star-icon">⭐</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="container">
          <p className="home-footer-copy">Mahalo for visiting my shoreline.</p>
          <p className="home-footer-copyright">© 2026 Hoku McAngus. Built with Aloha.</p>
        </div>
      </footer>
    </div>
  );
}