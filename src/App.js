import React from 'react';
import Header from './component/header';
import Hero from './component/hero';
import Footer from './component/footer';
import Description from './component/desctiption';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Description />
      <Footer />
    </React.Fragment>
  );
}

export default App;
