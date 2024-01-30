import React from 'react';
// import { doc, addDoc, collection } from "firebase/firestore"; 
// import { db } from '../firebase';
import '../styles/HeroSection.css';
import people from '../assets/people.png';
import {useNavigate} from 'react-router-dom';

const HeroSection = () => {

  const  navigate = useNavigate();

  return (
    <section className="hero-section" id='home'>
      <div className='hero-left'>
        <h1>Get quick cash as an EIT!</h1>
        <p>Click request loan below to fill the request form. Our team will verify your request and dispense immediately. No collateral, no hidden charges.</p>
        <button className="request-loan-button" onClick={()=> {navigate("/loan_request")}}>Request Loan</button>
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
