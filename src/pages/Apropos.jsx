function Apropos(){
    return (
        <section className="container apropos" id='apropos'>  
          <h1>À propos de ce Portfolio</h1>
            <p>Bienvenue sur mon portfolio ! Ce projet a été développé en utilisant React pour 
            la partie frontend et SCSS pour le style.
            <br /> Mon objectif principal était de créer un site moderne et responsive qui 
            présente mes compétences, mes projets, et mon parcours professionnel.
            <br />J'ai intégré l'API GitHub pour afficher automatiquement mes derniers projets
            publics directement sur cette page, ce qui me permet de partager en temps réel les
            dépôts que j'ai créés ou sur lesquels je travaille. Les projets sont triés par date,
            du plus récent au plus ancien.
            Les technologies principales utilisées dans ce projet incluent :
            React pour la gestion des composants et des états.
            SCSS pour une mise en page flexible et des styles personnalisés.
            API GitHub pour récupérer et afficher mes projets.
            Je suis fière de pouvoir vous présenter ce portfolio qui est à la fois une vitrine de
            mes compétences techniques et un projet vivant, constamment mis à jour au fur et à mesure
            de ma progression dans le domaine du développement.</p>   
        </section>
    );
};

export default Apropos;