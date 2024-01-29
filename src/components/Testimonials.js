import React from 'react';
import '../styles/Testimonials.css';
import image from '../assets/quotes.svg';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial">
      <img src={image} alt='quotes'></img>
        <h3>
          "This application has helped me in so many ways, particularly with moments"
        </h3>
        <p>Bernard Sarkey, Host EIT 2024</p>
      </div>
      <div className="testimonial">
      <img src={image} alt='quotes'></img>
        <h3>
          "It's exactly what I've been lacking especially living with EITs."
        </h3>
        <p>Rawk Aikins, Host EIT 2024</p>
      </div>
      <div className="testimonial">
        <img src={image} alt='quotes'></img>
        <h3>
          "I am really satisfied with Nile cash, I'm good to go. It really saves us time."
        </h3>
        <p>Courtney Latchaw, Host EIT 2024</p>
      </div>
    </section>
  );
};

export default Testimonials;
