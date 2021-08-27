import React from 'react';
import '../styles/profile.css';

function Profile() {
  return (
    <section className="profile-section">
      <h1>Ayush Kamboj</h1>
      <p>
        <i class="fas fa-university"></i>
        Learning Web Developement @{' '}
        <a target="_blank" href="https://altcampus.school/">
          AltCampus
        </a>
      </p>

      <p>
        <i class="fas fa-map-marked-alt"></i>Saharanpur, India
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
        <a href="https://github.com/Ayushak18" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Profile;
