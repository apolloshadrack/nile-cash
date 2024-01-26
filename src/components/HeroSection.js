import React from 'react';
import '../styles/HeroSection.css';
import people from '../assets/people.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
    <div className='hero-left'>
    <h1>Get quick cash as an EIT!</h1>
      <p>Click request loan below to fill the request form. Our team will verify your request and dispense immediately. No collateral, no hidden charges.</p>
      <button className="request-loan-button">Request Loan</button>
      <div className="active-users">
        <span>51+ Active users at Nile house Accra, Ogbojo</span>
      </div>

     </div>
        <div className="hero-right">
            <img src={people} alt='people'></img>
        </div>
      
    </section>
  );
};

export default HeroSection;
