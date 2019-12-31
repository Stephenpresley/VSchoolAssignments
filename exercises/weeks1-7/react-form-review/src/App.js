import React, {Component} from 'react';
import './App.css';
import Options from "./Options"
import Greeting from "./Greeting"
import AddGreeting from "./AddGreeting"

class App extends Component {
  constructor() {
    super()

    this.state = {
        color: ''
    }
}

handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}
  render() {
    return (
      <div>
        <Options handleChange={this.handleChange}/>
        <Greeting color={this.state.color}/>
        <AddGreeting />
      </div>
    );
  }
  
}

export default App;
