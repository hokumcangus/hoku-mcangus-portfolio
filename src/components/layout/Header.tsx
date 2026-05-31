import { useState } from "react"
import { NavLink } from "react-router-dom"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <NavLink className="brand" to="/" onClick={() => setIsMenuOpen(false)}>
          Hoku McAngus
        </NavLink>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(previous => !previous)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`site-nav ${isMenuOpen ? "open" : ""}`}
          id="primary-navigation"
        >
          {navItems.map(item => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
