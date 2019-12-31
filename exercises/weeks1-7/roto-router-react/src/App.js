import React from 'react';

//Components
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Services from './Services'
import About from './About'

//RouterDOM
import {Switch, Route} from 'react-router-dom'

//StyleSheets
import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/services' component={Services}/>
                <Route path='/about' component={About}/>
            </Switch>
            <Footer />
        </div>
    );
};

export default App;