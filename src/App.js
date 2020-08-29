import React from 'react';

import './App.css';

// Component imports
import MyNav from './components/nav-bar/nav-bar-component';
import HeroHeader from './components/hero-header/hero-header';
import ConrolledCarousel from './components/projects/projects-component';
import MyFooter from './components/footer/footer-component';

// Bootstrap Imports
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className='App'>
      <MyNav></MyNav>
      <h1>Taylor Council</h1>
      <Image
        className='about-img'
        src={require('./components/hero-header/assets/tclrg.jpg')}
        roundedCircle
      />

      <h4>Passionate Full Stack Developer</h4>
      <HeroHeader />
      <h1>Projects</h1>
      <ConrolledCarousel />
      <MyFooter />
    </div>
  );
}

export default App;
