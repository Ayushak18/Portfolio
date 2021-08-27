import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <React.Fragment>
      <section className="header">
        <h1 className="portfolio-heading">AYUSH KAMBOJ</h1>
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>BLOGS</li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}

export default Header;
