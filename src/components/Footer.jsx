import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024. All Rights Reserved.</p>
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
