import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Exclude.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span className="logo-text">Nile Cash</span>
      </div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Our Process</a>
        <a href="/">Testimonials</a>
      </div>
       
      <button className="sign-in-button" ><a href="/loan-request">Request Loan</a></button>
    </nav>
  );
};

export default Navbar;
