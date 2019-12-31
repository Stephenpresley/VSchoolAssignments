import React from 'react';

//My Components
import Nav from './Nav';
import Home from './Home';
import About from './About';
import ProductList from './ProductList'
import Product from './Product'
import Footer from './Footer';

//Third Party
import {Route} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'

//Stylesheet
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <AnimatedSwitch 
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
      >
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/products' component={ProductList}/>
        <Route path='/products/:_id' component={Product}/>
      </AnimatedSwitch>
      <Footer />
    </div>
  );
}

export default App;
