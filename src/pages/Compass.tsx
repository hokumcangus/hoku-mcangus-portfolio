import { Link } from "react-router-dom"

export default function Compass() {
  return (
    <div className="compass-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--ocean-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--star-gold)' }}>HOKU</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/fleet" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE FLEET</Link>
            <Link to="/voyage" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE VOYAGE</Link>
            <Link to="/compass" style={{ color: 'var(--star-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>THE COMPASS</Link>
            <Link to="/talk-story" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontStyle: 'italic' }}>The Compass</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px' }}>
            In Hawaiian culture, Ohana isn't just family—it's the community that keeps you grounded and the purpose that keeps you moving forward. 
            My community is my compass.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             <div style={{ backgroundColor: 'var(--ocean-blue)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--star-gold)', marginBottom: '1rem' }}>Ohana</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Behind every line of code I write is a commitment to my family and the values they've instilled in me: 
                  hard work, integrity, and Aloha.
                </p>
             </div>
             <div style={{ backgroundColor: 'var(--ocean-blue)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--star-gold)', marginBottom: '1rem' }}>Community</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Whether it's supporting local businesses through technology or mentoring the next generation of voyagers, 
                  I believe in the power of collective growth.
                </p>
             </div>
             <div style={{ backgroundColor: 'var(--ocean-blue)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--star-gold)', marginBottom: '1rem' }}>Tulalip Roots</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Living and working near the shoreline of Tulalip Bay reminds me daily of the balance between technical precision 
                  and the natural flow of life.
                </p>
             </div>
          </div>

          <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'rgba(255, 215, 0, 0.05)', borderRadius: '12px', textAlign: 'center' }}>
             <h2 style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"My Ohana is my compass. They remind me that behind every line of code is a person and a community worth serving."</h2>
          </div>
        </div>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>Mahalo for exploring my community.</p>
        </div>
      </footer>
    </div>
  )
}
