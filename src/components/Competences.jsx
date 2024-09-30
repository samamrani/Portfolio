import React from 'react';
import '../styles/main.scss'; // Assurez-vous d'avoir un fichier de style

const Competences = () => {
  return (
    <section className="container competences" id="competence">
      <h1>Compétences</h1>

      <div className="competences-grid">
        <div>
          <h3>Langages de programmation</h3>
          <p>
            JavaScript <br />
            PHP <br />
            SQL <br />
            React
          </p>
        </div>

        <div>
          <h3>Technologies web</h3>
          <p>
            HTML <br />
            CSS <br />
            Bootstrap
          </p>
        </div>

        <div>
          <h3>Outils de développement</h3>
          <p>
            Visual Studio Code<br />
            Figma<br />
            Adobe XD<br />
            Photoshop<br />
            Illustrator
          </p>
        </div>

        <div>
          <h3>Autres compétences</h3>
          <p>
            Autonomie<br />
            Prise de décision<br />
            Adaptation rapide<br />
            Gestion du stress
          </p>
        </div>
        
        <div>
          <h3>Autres outils</h3>
          <p>
            Git<br />
            GitHub
          </p>
        </div>

        <div>
          <h3>Gestion de projet</h3>
          <p>
            Agile
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default Competences;
