import React from 'react'
import './App.css'
import Navbar from './Navbar'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='contact' component={Contact}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/services' component={Services}></Route>
            </Switch>
        </div>
    );
};

export default App;