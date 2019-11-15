import React, { Component } from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }
    
    getAll = () => {
        axios.get('https://api.vschool.io/Stephen/todo/').then(res => {
            this.setState({todos: res.data.reverse()})
        })
    }

    addTodo = newTodo => {
        axios.post('https://api.vschool.io/Stephen/todo/', newTodo).then(res => {
            this.setState(prev => {
                return {
                    todos: [res.data, ...prev.todos]
                }
            })
        })
    }

    deleteTodo = id => {
        axios.delete('https://api.vschool.io/Stephen/todo/' + id).then(res => {
            this.setState(prev => {
                return{
                    todos: prev.todos.filter(todo => todo._id !== id)
                }
            })
        })
    }

    editTodo = (id, update) => {
        axios.put('https://api.vschool.io/Stephen/todo/' + id, update).then(res => {
            this.setState(prev => {
                return {
                    todos: prev.todos.map(todo => todo._id === id ? res.data : todo)
                }
            })
        })
    }

    render() {
        return (
            <Provider value={{...this.state,  
                                getAll: this.getAll,
                                addTodo:  this.addTodo,
                                deleteTodo: this.deleteTodo,
                                editTodo: this.editTodo}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ContextProvider;

export function withTodos (Comp) {
    return props => <Consumer>
                        {value => <Comp {...value} {...props} />}
                    </Consumer>
}