import React from 'react';
import Header from './layout/Header'; 
import Contact from './components/Contact';  
import Footer from './layout/Footer';  
import Exeperiences from './components/Exeperiences';
import ProjectsGit from './components/ProjectsGit';
import Competences from './components/Competences';
import Apropos from './components/Apropos';

function App() {
  return (
    <>
      <Header />
      <Apropos /> 
      <ProjectsGit />
      <Exeperiences />
      <Competences />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
