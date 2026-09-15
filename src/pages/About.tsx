import { Link } from "react-router-dom"
import "./About.css"

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="container about-header-inner">
          <Link to="/" className="about-brand-link">HOKU</Link>
          <nav className="about-nav">
            <Link to="/fleet" className="about-nav-link">THE HULA</Link>
            <Link to="/voyage" className="about-nav-link is-active">THE VOYAGE</Link>
            <Link to="/compass" className="about-nav-link">THE COMPASS</Link>
            <Link to="/talk-story" className="about-nav-link">TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main className="about-main">
        <div className="container">
          <h1 className="about-title">The Voyage</h1>
          
          <div className="about-grid">
            <div>
              <div className="about-avatar-shell">
                 <span className="about-avatar-icon">⛵</span>
              </div>
              <h3 className="about-name">Hoku McAngus</h3>
              <p className="about-role">Full-Stack Engineer</p>
            </div>

            <div className="about-content">
              <p className="about-lead-paragraph">
                My journey into technology wasn't a straight line—it was a voyage of discovery, grit, and growth. 
                Before I was choreographing complex codebases, I was moving through the fast-paced environments of professional kitchens 
                and the essential services of maintenance work.
              </p>
              
              <h3 className="about-milestones-title">Milestones</h3>
              
              <div className="about-timeline">
                <div className="about-timeline-item">
                  <div className="about-timeline-dot"></div>
                  <h4 className="about-timeline-heading">Nordstrom</h4>
                  <p className="about-timeline-subtitle">Software Engineer Intern | SET Star Award Winner</p>
                  <p className="about-timeline-text">Scaling backend systems and refining the technical choreography of a major retail ecosystem.</p>
                </div>

                <div className="about-timeline-item">
                  <div className="about-timeline-dot"></div>
                  <h4 className="about-timeline-heading">Ada Developers Academy</h4>
                  <p className="about-timeline-subtitle">Technical Foundation</p>
                  <p className="about-timeline-text">Rigorous training in full-stack development, logic, and community-driven engineering.</p>
                </div>

                <div className="about-timeline-item">
                  <div className="about-timeline-dot"></div>
                  <h4 className="about-timeline-heading">Taste of Aloha</h4>
                  <p className="about-timeline-subtitle">Community Impact</p>
                  <p className="about-timeline-text">Bridging my roots in the restaurant industry with my passion for technology.</p>
                </div>
              </div>

              <p className="about-closing-paragraph">
                Every role I've held has taught me the value of reliability and the importance of leaving things better than I found them. 
                Today, I use those lessons to build software that is as disciplined as hula practice and as welcoming as an island shoreline.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="about-footer">
        <div className="container">
          <p className="about-footer-copy">Mahalo for dancing through my journey.</p>
        </div>
      </footer>
    </div>
  )
}

export default About