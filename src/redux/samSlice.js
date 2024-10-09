import { createSlice } from '@reduxjs/toolkit';

const samSlice = createSlice({
    name: 'sam',
    initialState:{
        nom: "Samira ATMANI",
        metier: "Développeuse conceptrice logiciel",
        email: "erp.atmanis@gmail.com",
        tel: "+33 6 32 57 65 81",
        linkedin: "linkedin.com/in/samira-amrani",
        git: "samamrani.github.io/Portfolio",
        apropos: "Bienvenue sur mon portfolio ! Ce projet a été développé en utilisant React pour la partie frontend et SCSS pour le style.Mon objectif principal était de créer un site moderne et responsive qui présente mes compétences, mes projets, et mon parcours professionnel. J'ai intégré l'API GitHub pour afficher automatiquement mes derniers projets publics directement sur cette page, ce qui me permet de partager en temps réel les dépôts que j'ai créés ou sur lesquels je travaille. Les projets sont triés par date, du plus récent au plus ancien. Les technologies principales utilisées dans ce projet incluent : React pour la gestion des composants et des états. SCSS pour une mise en page flexible et des styles personnalisés. API GitHub pour récupérer et afficher mes projets. Je suis fière de pouvoir vous présenter ce portfolio qui est à la fois une vitrine de mes compétences techniques et un projet vivant, constamment mis à jour au fur et à mesure de ma progression dans le domaine du développement.",

    },
    reducers:{
        setNom:(state, action) => {
            state.nom =action.payload;
        },
        setMetier:(state, action) => {
            state.metier =action.payload;
        },
        setEmail:(state, action) => {
            state.email =action.payload;
        },
        setTel:(state, action) => {
            state.tel =action.payload;
        },
        setLinkedin:(state, action) => {
            state.linkedin =action.payload;
        },
        setGit:(state, action) => {
            state.git =action.payload;
        },
        setApropos:(state, action) => {
            state.apropos =action.payload;
        },
        setProjets:(state, action) => {
            state.projets =action.payload;
        },
        setCv:(state, action) => {
            state.cv =action.payload;
        },
        setContact:(state, action) => {
            state.contact =action.payload;
        },

}

})

export const { setNom, setMetier, setEmail, setTel, setLinkedin, setGit, setApropos, setProjets, setCv, setContact} = samSlice.actions;
export default samSlice.reducer;