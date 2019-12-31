import React, { Component } from 'react';
import {axiosContext} from './AxoisContext'

class AddBounty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            type: '',
            living: '',
            bountyAmount: '',
        }
    }

    componentDidMount() {
        if(this.props.type === 'update') {
            let {firstName, lastName, type, living, bountyAmount} = this.props.bounty
            this.setState({firstName, lastName, type, living, bountyAmount})
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleToggle = () => {
        this.setState(prev => {
            return {
                living: !prev.living
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add') {
            this.props.addBounty(this.state)
        } else {
            this.props.editBounty(this.props.bounty._id, this.state)
            this.props.toggle()
        }   
    }

    render() {
        return (
            <form   onSubmit={this.handleSubmit}
                    className={this.props.type ===  'add' ? 'submit' : 'edit'}>
                <input  onChange={this.handleChange}  
                        type="text" value={this.state.firstName}
                        name='firstName' placeholder='First Name/Title' required/>
                <input  onChange={this.handleChange}  
                        type="text" value={this.state.lastName}
                        name='lastName' placeholder='Last Name' required/>
                <input  onChange={this.handleChange}  
                        type="text" value={this.state.type}
                        name='type' placeholder='Group Affiliation'/>
                <label htmlFor="checkbox">Alive?</label>
                <input  onChange={this.handleToggle} type="checkbox"
                        checked={this.state.living ? true : false}
                        id='checkbox'/>
                <input  onChange={this.handleChange}   
                        type="number" value={this.state.bountyAmount}
                        name='bountyAmount' placeholder='Bounty Amount' required/>
                <button>{this.props.button}</button>
            </form>
        );
    }
}

export default axiosContext(AddBounty);