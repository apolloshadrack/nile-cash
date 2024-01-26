import React from 'react';
import '../styles/DownloadSection.css';
import human from '../assets/humans.png';

const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className='right'>
          <h2>Easy Way to manage your finances with the instant loan</h2>
          <p>Access quick loans from your phone whenever you need it and pay it back when stipend is here.</p>
          
        </div>

      <div className='left'>
        <img src={human} alt='wave'></img>
      </div>
     
      
    </section>
  );
};

export default DownloadSection;
