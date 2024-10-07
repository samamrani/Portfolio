import React from 'react';
import '../styles/main.scss'; 
import samPhoto from '../assets/Sam.png'; 

function Spinner() {
    return (
        <div className="spinner"> 
            <img src={samPhoto} alt="Portrait de Sam" /> 
        </div>
    );
}

export default Spinner;
