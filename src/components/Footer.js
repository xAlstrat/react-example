import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Pluscoder</h3>
          <p>Empowering developers with AI-assisted coding.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="https://github.com/pluscoder/repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="social-links">
            <li><a href="https://twitter.com/pluscoder" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a></li>
            <li><a href="https://linkedin.com/company/pluscoder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a></li>
            <li><a href="https://github.com/pluscoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="visually-hidden">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Pluscoder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;