import React from 'react';
import './Footer.css';

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="NorthPeak Digital Home">
              NorthPeak.
            </a>
            <p className="footer-statement">
              An independent digital agency focused on clarity, performance, and measurable growth.
            </p>
          </div>

          <div className="footer-nav-container">
            <div className="footer-nav-group">
              <p className="footer-nav-title">Navigation</p>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-nav-group">
              <p className="footer-nav-title">Social</p>
              <ul className="footer-links">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow NorthPeak on Twitter (opens in new window)">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow NorthPeak on LinkedIn (opens in new window)">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow NorthPeak on Instagram (opens in new window)">Instagram</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} NorthPeak Digital. All rights reserved. (Fictional Demo)
          </div>
          
          <div className="footer-credits">
            <a 
              href="https://digitalheroesco.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="credit-link"
            >
              Built for Digital Heroes Training Task
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
