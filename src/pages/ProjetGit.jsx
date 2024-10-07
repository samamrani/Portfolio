import React, { useState } from 'react';
import '../styles/main.scss';
import ReposGit from '../components/ReposGit';
import data from '../data/projet.json'; 

function ProjetGit() {
  const [visibleIndex, setVisibleIndex] = useState(null); 

  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index); 
  };

  return (
    <section className="container" id="projects">
      <div className="profile">
        <h2>Mes Projets</h2>
      </div>
      <div className="projects-list">
        <ReposGit />
      </div>
      <>
        {data.map((project, index) => (
          <div key={index}>
            <button className="text-white btn" onClick={() => toggleDetails(index)}>
              {project.name}
            </button>

            {visibleIndex === index && (
              <div className='visite'>
                <p className="fs-6">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visitez le site
                </a>
              </div>
            )}
          </div>
        ))}
      </>
    </section>
  );
}

export default ProjetGit;
