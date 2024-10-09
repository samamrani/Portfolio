import React from 'react';
import '../styles/main.scss';
function Exeperiences() {
  return (
    <section className="job" aria-label="Expériences professionnelles">
      <article>
        <h3>Développeuse Web et Web Mobile – Stage</h3>
        <p>Développement d'un site vitrine  - Pneus Express, Stiring-Wendel | 2023</p>
      </article>
      
      <article>
        <h3>Assistante administrative – Stage</h3>
        <p>Conservatoire de musique et de danse, Forbach | 2018-2019</p>
        <p>Gestion des dossiers étudiants et organisation d’événements.</p>
      </article>
      
      <article>
        <h3>Assistante administrative – Stage</h3>
        <p>Chic Unisante, Forbach | 2017-2018</p>
        <p>Traitement des dossiers administratifs</p>
        <p>Gestion des plannings</p>
        <p>Gestion des contrats</p>
      </article>
    </section>
  );
}

Exeperiences.propTypes = {};

export default Exeperiences;