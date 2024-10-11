import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Pluscoder</h1>
        <p>Revolutionize your coding experience with AI-powered assistance</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/hero-illustration.svg" alt="Pluscoder AI Illustration" />
      </div>
    </section>
  );
};

export default Hero;