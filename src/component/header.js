import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <section className="header">
        <h1 className="portfolio-heading">AYUSH KAMBOJ</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="selected">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="selected">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="selected">
                BLOGS
              </NavLink>
            </li>
            <li>
              <a href="ResumeBuild.pdf" target="_blank" rel="noreferrer">
                RESUME
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}

export default Header;
