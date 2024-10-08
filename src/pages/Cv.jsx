import React from 'react';
import Competence from "./Competence";
import Exeperience from './Exeperience';
import InformPerso from '../components/InformationPerso';

function Cv() {
  return (
    <>
      <InformPerso />
      <Competence />
      <Exeperience />
    </>
  );
}

export default Cv;
