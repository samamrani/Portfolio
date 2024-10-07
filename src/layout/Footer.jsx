import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/main.scss';

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-content">
        <ul className="social-list">
          <li>&copy; 2024 Mon Portfolio. Tous droits réservés.</li>
          <li>
            <a href="https://linkedin.com/in/samira-amrani" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://Github.com/samamrani" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
