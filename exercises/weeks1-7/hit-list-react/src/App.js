import React from 'react';
import TodoContainer from './TodoContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='header'>
      <img className='don' src="https://images.saatchiart.com/saatchi/984876/art/6364397/5434159-XEVLMLFT-7.jpg" alt=""/>
      <h1>Don Corleone's Hit List</h1>
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;
