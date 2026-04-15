import { Link } from "react-router-dom"

function About() {
  return (
    <div className="voyage-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--ocean-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--star-gold)' }}>HOKU</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/fleet" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE FLEET</Link>
            <Link to="/voyage" style={{ color: 'var(--star-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>THE VOYAGE</Link>
            <Link to="/compass" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE COMPASS</Link>
            <Link to="/talk-story" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontStyle: 'italic' }}>The Voyage</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
            <div>
              <div style={{ backgroundColor: 'var(--ocean-blue)', height: '400px', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ fontSize: '5rem' }}>⛵</span>
              </div>
              <h3 style={{ color: 'var(--star-gold)', marginBottom: '0.5rem' }}>Hoku McAngus</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Full-Stack Engineer</p>
            </div>

            <div style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                My journey into technology wasn't a straight line—it was a voyage of discovery, grit, and growth. 
                Before I was navigating complex codebases, I was navigating the fast-paced environments of professional kitchens 
                and the essential services of maintenance work.
              </p>
              
              <h3 style={{ color: 'var(--star-gold)', marginTop: '2.5rem', marginBottom: '1rem' }}>Milestones</h3>
              
              <div style={{ borderLeft: '2px solid var(--star-gold)', paddingLeft: '2rem', marginLeft: '0.5rem' }}>
                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--star-gold)', borderRadius: '50%', position: 'absolute', left: '-27px', top: '8px' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Nordstrom</h4>
                  <p style={{ margin: '0.2rem 0', fontStyle: 'italic' }}>Software Engineer Intern | SET Star Award Winner</p>
                  <p style={{ fontSize: '0.9rem' }}>Scaling backend systems and refining the technical hull of a major retail ecosystem.</p>
                </div>

                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--star-gold)', borderRadius: '50%', position: 'absolute', left: '-27px', top: '8px' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Ada Developers Academy</h4>
                  <p style={{ margin: '0.2rem 0', fontStyle: 'italic' }}>Technical Foundation</p>
                  <p style={{ fontSize: '0.9rem' }}>Rigorous training in full-stack development, logic, and community-driven engineering.</p>
                </div>

                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--star-gold)', borderRadius: '50%', position: 'absolute', left: '-27px', top: '8px' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Taste of Aloha</h4>
                  <p style={{ margin: '0.2rem 0', fontStyle: 'italic' }}>Community Impact</p>
                  <p style={{ fontSize: '0.9rem' }}>Bridging my roots in the restaurant industry with my passion for technology.</p>
                </div>
              </div>

              <p style={{ marginTop: '2rem' }}>
                Every role I've held has taught me the value of reliability and the importance of leaving things better than I found them. 
                Today, I use those lessons to build software that is as sturdy as a voyaging canoe and as welcoming as an island shoreline.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>Mahalo for following my voyage.</p>
        </div>
      </footer>
    </div>
  )
}

export default About