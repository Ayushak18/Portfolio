import React from 'react';
import Profile from './profile';
import '../styles/hero.css';

function Hero() {
  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="hero-img">
          <img
            src="https://avatars.githubusercontent.com/u/38782643?v=4"
            alt="Profile"
          />
        </div>
        <Profile />
      </section>
    </React.Fragment>
  );
}

export default Hero;
