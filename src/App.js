import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Contact from './components/Contact';

import Home from './pages/Home';
import Exeperience from './pages/Exeperience';
import ProjectsGit from './pages/ProjetGit';
import Competence from './pages/Competence';
import Apropos from './pages/Apropos';
import Cv from './pages/Cv';
import MainLayout from './layout/MainLayout';


function App() {
  return (
    <Router>
      <MainLayout>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projets" element={<ProjectsGit />} />
        <Route path="/experience" element={<Exeperience />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
