import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './layout/Header';
import Contact from './components/Contact';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Exeperience from './pages/Exeperience';
import ProjectsGit from './pages/ProjetGit';
import Competence from './pages/Competence';
import Apropos from './pages/Apropos';
import Cv from './pages/Cv';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projets" element={<ProjectsGit />} />
        <Route path="/experience" element={<Exeperience />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
