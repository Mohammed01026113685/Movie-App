// src/components/Footer.js
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Movie App | All Rights Reserved</p>
      <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        {' | '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
    </footer>
  );
};

export default Footer;
