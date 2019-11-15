import React, {Component} from 'react';

//Components
import TodoContainer from './TodoContainer'
import Form from './Form'
import {withTodos} from './ContextProvider'

//Style
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAll()
  }

  render() {
    return (
      <div className="App">
        <Form button='submit' type='add'/>
        <TodoContainer />
      </div>
    );
  }
}

export default withTodos(App);
