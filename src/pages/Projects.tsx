import { useAppSelector } from "../app/hooks"
import { Link } from "react-router-dom"

const Projects = () => {
  const allProjects = useAppSelector(state => state.projects)
  
  return (
    <div className="fleet-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--ocean-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--star-gold)' }}>HOKU</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/fleet" style={{ color: 'var(--star-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>THE FLEET</Link>
            <Link to="/voyage" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE VOYAGE</Link>
            <Link to="/compass" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE COMPASS</Link>
            <Link to="/talk-story" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontStyle: 'italic' }}>The Fleet</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px' }}>
            A collection of digital vessels I've built, maintained, and navigated. 
            From customer-facing interfaces to robust backend infrastructures.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {allProjects.map((p) => (
              <div key={p.id} style={{ 
                backgroundColor: 'var(--ocean-blue)', 
                padding: '2rem', 
                borderRadius: '8px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--star-gold)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{p.description}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--sand-beige)', border: '1px solid var(--sand-beige)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    Wayfinder Approved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>Mahalo for exploring the fleet.</p>
        </div>
      </footer>
    </div>
  )
}

export default Projects
