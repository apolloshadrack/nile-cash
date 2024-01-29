import React from 'react';
import '../styles/OfferSection.css';
import graph from '../assets/graph.svg';
import security from '../assets/security.svg';
import cash from '../assets/cash.svg';
import wavyman from '../assets/wavyman.png';

const OfferSection = () => {
  return (
    <section className="offer-section" id="loans">
      <div>
      <h2>What we offer</h2>
      <div className="offers">
        
        <div className="offer">
          <div className='icon'>
            <img src={graph} alt='graphicon'></img>
          </div>
          <h3>Instant Cash</h3>
          <p>Your immediate buddy to save you from being broke.</p>
        </div>
        <div className="offer">
          <div className='icon'>
            <img src={security} alt='securityicon'></img>
          </div>
          <h3>Anonimity</h3>
          <p>Your data and information will be securely protected.</p>
        </div>
        <div className="offer">
          <div className='icon'>
            <img src={cash} alt='cashicon'></img>
          </div>
          <h3>Loans</h3>
          <p>Your one stop platform for short term loans.</p>
        </div>
      </div>
      </div>
    <div className='more'>
      <div className='left'> 
          <h2>Designed to fit your lifestyle as an Entrepreneur</h2>
          <p>You have the freedom to request for short term loans, ensuring a truly unique experience that makes you feel extraordinary</p>
          <div>
          <button className="request-loan-button">Request Loan</button>
          </div>
         
      </div>

      <div className='right'>
        <img src={wavyman} alt='wacy'></img>
        </div>
     
    </div>
    </section>

    

  
  );
};

export default OfferSection;
