import React, { Component } from 'react';
import {withTodos} from './ContextProvider'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    componentDidMount() {
        if(this.props.type === 'update') {
            let {title, description, price, imgUrl} = this.props.todo
            this.setState({title, description, price, imgUrl})
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add') {
            this.props.addTodo(this.state)
        } else {
            this.props.editTodo(this.props.todo._id, this.state)
            this.props.toggle()
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} 
                        className={this.props.type === 'add' ? 'submit' : 'edit'}>
                    <input onChange={this.handleChange} 
                            type="text" value={this.state.title} 
                            name='title' placeholder='Title' required/>
                    <input onChange={this.handleChange} 
                            type="text" value={this.state.description} 
                            name='description' placeholder='Description'/>
                    <input onChange={this.handleChange} 
                            type="number" value={this.state.price} 
                            name='price' placeholder='Price'/>
                    <input onChange={this.handleChange} 
                            type="text" value={this.state.imgUrl} 
                            name='imgUrl' placeholder='imgUrl'/>
                    <button>{this.props.button}</button>
                </form>
            </div>
        );
    }
}

export default withTodos(Form);