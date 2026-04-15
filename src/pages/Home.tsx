import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--ocean-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--star-gold)' }}>HOKU</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/fleet" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE FLEET</Link>
            <Link to="/voyage" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE VOYAGE</Link>
            <Link to="/compass" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE COMPASS</Link>
            <Link to="/talk-story" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <section className="hero" style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: 'var(--ocean-blue)' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--sand-beige)', marginBottom: '1rem' }}>
              Full-Stack Engineer & Digital Wayfinder
            </h2>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Navigating complex systems with technical precision and an Aloha-driven heart.
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              E komo mai. I'm Hoku, a builder of robust digital ecosystems. 
              Like the ancient wayfinders, I navigate codebases by the stars of reliability, community, and performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/fleet" style={{ padding: '0.8rem 2rem', backgroundColor: 'var(--star-gold)', color: 'var(--ocean-deep)', fontWeight: 'bold', borderRadius: '4px' }}>
                EXPLORE THE FLEET
              </Link>
              <Link to="/talk-story" style={{ padding: '0.8rem 2rem', border: '1px solid var(--star-gold)', color: 'var(--star-gold)', fontWeight: 'bold', borderRadius: '4px' }}>
                CHART A COURSE
              </Link>
            </div>
          </div>
        </section>

        <section id="north-star" style={{ padding: '4rem 0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The North Star</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                My mission is to build sustainable, high-impact software that serves people and communities. 
                Whether it's scaling backend systems at Nordstrom or building local platforms like Taste of Aloha, 
                my compass always points toward technical excellence and human connection.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--star-gold)', margin: '0 0 0.5rem 0' }}>RELIABILITY</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Systems that stand the test of time and tide.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--star-gold)', margin: '0 0 0.5rem 0' }}>COMMUNITY</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Code that empowers and brings people together.</p>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--ocean-blue)', height: '300px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontSize: '4rem' }}>⭐</span>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Mahalo for visiting my shoreline.</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Hoku McAngus. Built with Aloha.</p>
        </div>
      </footer>
    </div>
  );
}