import React, { useState } from 'react';
import '../styles/main.scss';

function ProjetDetails({ name, description, link }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className='container'>
        <button className="text-white btn" onClick={toggleDetails}>
          {name}
        </button>

        {isVisible && (
          <div>
            <p className="fs-6">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visitez le site
            </a>
          </div>
        )}
      
</section>
  );
}

export default ProjetDetails;
