import React from 'react';
import '../styles/main.scss';
import data from '../data/competences.json'

function Competences() {

  return (
    <section className="competences-grid">
      <div className="grid-container">
        {data.map((comp, index) => (
          <div className="competence" key={index}>
            <h3>{comp.titre}</h3>
            <p>{comp.contenu}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
