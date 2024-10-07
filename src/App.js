import React, { useEffect, useState } from 'react';
import Header from './layout/Header'; 
import Contact from './components/Contact';  
import Footer from './layout/Footer';  
import Exeperiences from './components/Exeperiences';
import ProjectsGit from './components/ProjectsGit';
import Competences from './components/Competences';
import Apropos from './components/Apropos';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <Header />
      {loading ? <Spinner /> : (
        <>
          <Apropos /> 
          <ProjectsGit />
          <Exeperiences />
          <Competences />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
