import React from 'react';
//Components
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import {themeChange} from './ThemeProvider';
//Style
import './App.css';


function App() {
  return (
    <div className="">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default themeChange(App);
