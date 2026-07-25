import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Throttled scroll handler - fires at most once every 100ms
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) return;

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        scrollTimeoutRef.current = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Trap focus for mobile menu accessibility
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    // Focus first element on open
    firstElement.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-wrapper">
          <a href="/" className="logo" aria-label="NorthPeak Digital Home">
            NorthPeak.
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav 
          id="main-nav" 
          className={`main-nav ${isMenuOpen ? 'open' : ''}`}
          ref={menuRef}
          aria-hidden={window.innerWidth <= 768 && !isMenuOpen}
        >
          <ul className="nav-links">
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Start a Project
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
