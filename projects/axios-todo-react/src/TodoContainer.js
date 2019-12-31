import React, {Component} from 'react';
import Todo from './Todo';
import {withTodos} from './ContextProvider'

class TodoContainer extends Component {
    componentDidMount() {
        this.props.getAll()
    }
    render() {
        const todoMap = this.props.todos.map(todo => < Todo key = {todo._id}
                                                            info = {todo}
            />)
            return ( 
                <div className = 'container' > 
                    {todoMap} 
                </div>
            );
        }
    }


    export default withTodos(TodoContainer);
