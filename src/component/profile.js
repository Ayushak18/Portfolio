import React from 'react';
import '../styles/profile.css';

function Profile() {
  return (
    <section className="profile-section">
      <h1>Ayush Kamboj</h1>
      <p className="eduction">
        <i className="fas fa-university"></i>
        Learning Web Developement @{' '}
        <a target="_blank" rel="noreferrer" href="https://altcampus.school/">
          AltCampus
        </a>
      </p>

      <p>
        <i className="fas fa-map-marked-alt"></i>Saharanpur, India
      </p>
      <div className="buttons">
        <button>React</button>
        <button>Redux</button>
        <button>MongoDB</button>
        <button>NodeJS</button>
        <button>JavaScript</button>
        <button>Full Stack</button>
      </div>
      <div className="social-media">
        <a href="https://github.com/Ayushak18" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/dev_Ayush18"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://ayushak18.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-blog"></i>
        </a>
      </div>
    </section>
  );
}

export default Profile;
