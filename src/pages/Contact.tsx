import { Link } from "react-router-dom"
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="container contact-header-inner">
          <Link to="/" className="contact-brand-link">HOKU</Link>
          <nav className="contact-nav">
            <Link to="/fleet" className="contact-nav-link">THE HULA</Link>
            <Link to="/voyage" className="contact-nav-link">THE VOYAGE</Link>
            <Link to="/compass" className="contact-nav-link">THE COMPASS</Link>
            <Link to="/talk-story" className="contact-nav-link is-active">TALK STORY</Link>
          </nav>
        </div>
      </header>

      <main id="main" className="contact-main">
        <div className="container contact-container">
          <h1 className="contact-title">Talk Story</h1>
          <p className="contact-intro">
            In Hawaii, "talking story" is about connecting, sharing, and building relationships.
            I'd love to hear about your projects, your mission, or just share a virtual coffee.
          </p>

          <div className="contact-form-card">
            <div className="contact-field">
              <label className="contact-label">NAME</label>
              <input type="text" className="contact-input" />
            </div>
            <div className="contact-field">
              <label className="contact-label">EMAIL</label>
              <input type="email" className="contact-input" />
            </div>
            <div className="contact-field contact-field-message">
              <label className="contact-label">MESSAGE</label>
              <textarea rows={5} className="contact-textarea"></textarea>
            </div>
            <button className="contact-submit">
              TALK STORY
            </button>
          </div>

          <div className="contact-social">
            <p className="contact-social-label">You can also find me sharing my digital work here:</p>
            <div className="contact-social-links">
              <a href="#" className="contact-social-link">GitHub</a>
              <a href="#" className="contact-social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="contact-footer">
        <div className="container">
          <p className="contact-footer-copy">Mahalo for reaching out.</p>
        </div>
      </footer>
    </div>
  )
}
