import React from 'react';
import '../styles/main.scss';
import imgNature from '../assets/img.jpg'; 
import imgPhoto from '../assets/img.jpg'; 
import InformPerso from '../components/InformationPerso';

function Header() {
  return (
    <header className="container profile">
        <div className="profile-picture">
          <img src={imgNature} alt="Img nature" />
        </div>
      <div className="header-content">
        <div className="contact-info">
          <div className="photo-picture">
              <img className="photo-picture" src={imgPhoto} alt="Img photo" />
        
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#competence">Compétences</a></li>
              <li><a href="#experiences">Expériences</a></li>
              <li><a href="#contact">Contact</a></li>
   
            </ul>
          </nav>
        </div>
      </div>
           <div className='info'> <InformPerso /> </div>
    </header>
  );
}

export default Header;
