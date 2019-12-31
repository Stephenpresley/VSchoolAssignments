import React, { Component } from 'react';
import Todo from './Todo'
import axios from 'axios'

class TodoContainer extends Component {
    constructor() {
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(res => {
            return this.setState({todos: res.data})
        })
    }

    render() {
        const todoMap = this.state.todos.map((todo, i) => <Todo key={i + todo.name}
                                                                name={todo.name}
                                                                image={todo.image}
                                                                />)
        return (
            <div className='container'>
                {todoMap}
            </div>
        );
    }
}

export default TodoContainer;