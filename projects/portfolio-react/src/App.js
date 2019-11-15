import React from 'react';

//Components
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects'
import Footer from './Footer';

//Style
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
