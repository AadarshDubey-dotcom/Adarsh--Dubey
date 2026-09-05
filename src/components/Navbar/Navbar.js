import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // नीचे scroll → navbar hide
        setShowNavbar(false);
      } else {
        // ऊपर scroll → navbar show
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <a className="navbar-brand" href="#home">
        <span className="brand">ADARSH™</span>
        <span className="location-time">Indore, India 01:49 AM</span>
      </a>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
