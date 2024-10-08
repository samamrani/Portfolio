import React from 'react';
import '../styles/main.scss';
import { Link } from 'react-router-dom'; 
import imgNature from '../assets/img.jpg'; 

function Header() { 
  return (
    <header className="container info">
      <div className="profile-picture">
        <img src={imgNature} alt="Nature" /> 
      </div>
      <div className="header-content">
        <div className="contact-info">
          <nav>
            <ul className="nav-list">  
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/apropos">À propos</Link></li>
              <li><Link to="/projets">Projets</Link></li>  
              <li><Link to="/cv">CV</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
