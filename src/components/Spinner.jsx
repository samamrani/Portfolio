import React from 'react';
import '../styles/main.scss'; 
import imgNature from '../assets/img.jpg'; 

function Spinner() {
    return (
        <div className="spinner"> 
            <img src={imgNature} alt="Nature" /> 
        </div>
    );
}

export default Spinner;
