import React from 'react';
import '../styles/main.scss';

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-content">
   
        <ul className="social-list">
          <li>&copy; 2024 Mon Portfolio. Tous droits réservés.</li>
          <li><a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
