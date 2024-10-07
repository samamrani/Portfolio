import React from 'react';
import '../styles/main.scss';
import imgNature from '../assets/img.jpg'; 

import InformPerso from '../components/InformationPerso';
import Spinner from '../components/Spinner'; 

function Header({ loading }) { 
  return (
    <header className="container profile">
      <div className="profile-picture">
        <img src={imgNature} alt="Nature" /> 
      </div>
      <div className="header-content">
        <div className="contact-info">
          <div className="photo-picture">
            <img src={imgNature} alt="Nature" /> 
          </div>
          <nav>
            <ul className="nav-list">
              {loading ? <Spinner /> : (
                <>
                  <li><a href="#apropos">À propos</a></li>
                  <li><a href="#projects">Projets</a></li>
                  <li><a href="#competence">Compétences</a></li>
                  <li><a href="#experiences">Expériences</a></li>
                  <li><a href="#contact">Contact</a></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className='info'> <InformPerso /> </div>
   
      {loading && (
        <div className="overlay">
          <Spinner />
        </div>
      )}
   
    </header>
  );
}

export default Header;
