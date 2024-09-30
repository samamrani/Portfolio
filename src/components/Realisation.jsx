import React from 'react';
import ProjetDetails from './ProjetDetails';
import projetData from '../data/projet.json';

function Realisation() {
  return (
    <div className="container" id='realisation'>  
        {projetData.map((projet) => (
          <div className="text-center col-10 col-sm-8 col-md-4" key={projet.id}>
            <div className="projet-details">
              <ProjetDetails 
                name={projet.name} 
                link={projet.link} 
                description={projet.description} 
              />
            </div>
          </div>
        ))}
  
   </div>
  );
}

export default Realisation;
