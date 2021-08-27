import React from 'react';
import Header from './component/header';
import Hero from './component/hero';
import Footer from './component/footer';
import Description from './component/desctiption';
import { Route } from 'react-router';
import Projects from './component/projects';
import Blogs from './component/blogs';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/" exact>
        <Hero />
        <Description />
        <Footer />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/blogs">
        <Blogs />
      </Route>
    </React.Fragment>
  );
}

export default App;
