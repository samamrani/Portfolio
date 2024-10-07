import React from 'react';
import '../styles/main.scss';
import { Link } from 'react-router-dom'; 
import imgNature from '../assets/img.jpg'; 

import Spinner from '../components/Spinner'; 


function Header({ loading }) { 
  return (
    <header className="container profile">
      <div className="profile-picture">
        <img src={imgNature} alt="Nature" /> 
      </div>
      <div className="header-content">
        <div className="contact-info">
          {/* <div className="photo-picture">
            <img src={imgNature} alt="Nature" /> 
          </div> */}
          <nav>
            <ul className="nav-list">
              {loading ? <Spinner /> : (
                <>
                  <li><Link to="/home">Accueil</Link></li>
                  <li><Link to="/apropos">À propos</Link></li>
                  <li><Link to="/projets">Projets</Link></li>
                  
                  <li><Link to="/cv">CV</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className='info'> <InformPerso /> </div> */}
   
      {loading && (
        <div className="overlay">
          <Spinner />
        </div>
      )}
   
    </header>
  );
}

export default Header;
