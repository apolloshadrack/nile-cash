import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Nile cash</div>
      <div className="menu">
        <a href="#why-us">Why Us</a>
        <a href="#services">Services</a>
        <a href="#process">Our Process</a>
        <a href="#loans">Loans</a>
      </div>
      <button className="sign-in-button">Sign in</button>
    </nav>
  );
};

export default Navbar;
