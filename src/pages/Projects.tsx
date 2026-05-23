import { useAppSelector } from "../app/hooks"
import { Link } from "react-router-dom"
import "./Projects.css"

const Projects = () => {
  const allProjects = useAppSelector(state => state.projects)
  
  return (
    <div className="projects-page">
      <header className="projects-header">
        <div className="container projects-header-inner">
          <Link to="/" className="projects-brand-link">HOKU</Link>
          <nav className="projects-nav">
            <Link to="/fleet" className="projects-nav-link is-active">THE HULA</Link>
            <Link to="/voyage" className="projects-nav-link">THE VOYAGE</Link>
            <Link to="/compass" className="projects-nav-link">THE COMPASS</Link>
            <Link to="/talk-story" className="projects-nav-link">TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main className="projects-main">
        <div className="container">
          <h1 className="projects-title">The Hula</h1>
          <p className="projects-intro">
            A collection of digital routines I have choreographed, practiced, and refined.
            From customer-facing interfaces to resilient backend rhythms.
          </p>

          <div className="projects-grid">
            {allProjects.map((p) => (
              <div key={p.id} className="projects-card">
                <div>
                  <h3 className="projects-card-title">{p.title}</h3>
                  <p className="projects-card-description">{p.description}</p>
                </div>
                <div className="projects-card-meta">
                  <span className="projects-card-badge">
                    Stage Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="projects-footer">
        <div className="container">
          <p className="projects-footer-copy">Mahalo for exploring the hula.</p>
        </div>
      </footer>
    </div>
  )
}

export default Projects
