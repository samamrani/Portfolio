import React from 'react';
import Competence from "./Competence";
import Exeperience from './Exeperience';
import InformPerso from '../components/InformationPerso';
import Projet from '../components/Projet';
import ReposGit from '../components/ReposGit';

function Cv() {
  return (
    <><div className='container info'>
      <InformPerso />
      
</div>
      <Competence />
      <Exeperience />
      <Projet />
      <ReposGit />
    </>
  );
}

export default Cv;
