import React from 'react';
import '../styles/main.scss';
import GithubRepos from './GithubRepos';
import Realisation from './Realisation';

const Projects = () => {
  return (
    <section className="container" id="projects">

      <div className="profile">
        <h2>Mes Projets</h2>
      </div>

      <div className="projects-list">
        <GithubRepos />
      </div>
      <div className="profile">
          <Realisation />   
      </div>
    
    </section>
  );
};

export default Projects;
