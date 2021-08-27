import React from 'react';
import Profile from './profile';
import '../styles/hero.css';

function Hero() {
  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="hero-img">
          <img src="sampleImg.jpg" alt="Profile Picture" />
        </div>
        <Profile />
      </section>
    </React.Fragment>
  );
}

export default Hero;
