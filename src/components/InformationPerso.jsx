import React from 'react';
import '../styles/main.scss';  
import { useSelector } from 'react-redux';

function InformPerso() {
  const nom = useSelector((state) => state.sam.nom);
  const metier = useSelector((state) => state.sam.metier);
  const email = useSelector((state) => state.sam.email);
  const tel = useSelector((state) => state.sam.tel);
  const linkedin = useSelector((state) => state.sam.linkedin);
  const git = useSelector((state) => state.sam.git);

  return (
    <div>
       <h2 className='sam'>{nom || 'Nom inconnu'}</h2>
       <p className='metier'>{metier || 'Métier inconnu'}</p>
     
     
      <p>Email : {email || 'Email inconnu'} | Téléphone : {tel || 'Téléphone inconnu'}</p>
      <p>
        LinkedIn : 
        <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer">
          {linkedin || 'Lien LinkedIn indisponible'}
        </a>
      </p>
      <p>
        GitHub : 
        <a href={`https://${git}`} target="_blank" rel="noopener noreferrer">
          {git || 'Lien GitHub indisponible'}
        </a>
      </p>
    </div>
  );
}

export default InformPerso;
