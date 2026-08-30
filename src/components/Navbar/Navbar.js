import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { Menu, X, Sparkles } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const clock = window.setInterval(() => setTime(new Date()), 60000);
    return () => window.clearInterval(clock);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="navbar-brand" href="#home" onClick={closeMenu}>
        <span className="brand">ADARSH<span aria-hidden="true">™</span></span>
        <span className="location-time">
          Indore, India <time dateTime={time.toISOString()}>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
        </span>
      </a>

      <button
        className="navbar-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`navbar-menu${isMenuOpen ? " is-open" : ""}`}>
        <ul className="navbar-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <span className="navbar-icon" aria-hidden="true"><Sparkles size={18} /></span>
      </div>
    </nav>
  )
}

export default Navbar