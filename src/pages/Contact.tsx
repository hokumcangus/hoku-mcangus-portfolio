import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <div className="talk-story-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--ocean-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--star-gold)' }}>HOKU</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/fleet" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE FLEET</Link>
            <Link to="/voyage" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE VOYAGE</Link>
            <Link to="/compass" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>THE COMPASS</Link>
            <Link to="/talk-story" style={{ color: 'var(--star-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontStyle: 'italic', textAlign: 'center' }}>Talk Story</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>
            In Hawaii, "talking story" is about connecting, sharing, and building relationships. 
            I'd love to hear about your projects, your mission, or just share a virtual coffee.
          </p>

          <div style={{ backgroundColor: 'var(--ocean-blue)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--sand-beige)' }}>NAME</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'white' }} />
             </div>
             <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--sand-beige)' }}>EMAIL</label>
                <input type="email" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'white' }} />
             </div>
             <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--sand-beige)' }}>MESSAGE</label>
                <textarea rows={5} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'white' }}></textarea>
             </div>
             <button style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--star-gold)', color: 'var(--ocean-deep)', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                CHART A COURSE
             </button>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
             <p style={{ color: 'var(--text-secondary)' }}>You can also find me navigating the digital seas here:</p>
             <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
                <a href="#" style={{ color: 'var(--star-gold)' }}>GitHub</a>
                <a href="#" style={{ color: 'var(--star-gold)' }}>LinkedIn</a>
             </div>
          </div>
        </div>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>Mahalo for reaching out.</p>
        </div>
      </footer>
    </div>
  )
}
