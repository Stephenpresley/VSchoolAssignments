import React, {Component} from 'react';
import { withTodos } from './ContextProvider';
import Form from './Form'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleEdit: true,
        }
    }

    checkBox = (e) => {
        this.props.editTodo({completed: e.target.checked}, this.props._id)
    }

    toggle = () => {
        this.setState(prev => {
            return {
                toggleEdit: !prev.toggleEdit
            }
        })
    }

    deleteTodo = () =>  {
        this.props.deleteTodo(this.props.info._id)
    }
    
    render() {
        const lineThrough = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
        let {title, description, price, imgUrl} = this.props.info
        return(
            <div className='todo'>
                {
                    this.state.toggleEdit ?
                    <div>
                        <h2>{title}</h2>
                        <div>{description}</div>
                        <div>{price}</div>
                        <img src={imgUrl} alt=""/>
                        <br/>
                        <label htmlFor="checkbox">Completed?</label>
                        <input  onChange={this.checkBox} 
                                checked={this.props.completed ? true : false} 
                                type="checkbox" id='checkbox' name='checkbox'/>
                                <button onClick={this.deleteTodo}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    :
                    <Form   button='Save Changes' type='update' 
                            todo={this.props.info} toggle={this.toggle}/>
                }
            </div>
        );
    }
};

export default withTodos(Todo);