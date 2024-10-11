import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky-header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Pluscoder Logo" />
        </div>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="key-features" smooth={true} duration={500}>Features</Link></li>
            <li><Link to="how-it-works" smooth={true} duration={500}>How It Works</Link></li>
            <li><Link to="use-cases" smooth={true} duration={500}>Use Cases</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;