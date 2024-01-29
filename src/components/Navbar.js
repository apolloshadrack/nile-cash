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
        <a href="#home">Home</a>
        <a href="#loans">Services</a>
        <a href="#process">Our Process</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <button className="sign-in-button">Request Loan</button>
    </nav>
  );
};

export default Navbar;
