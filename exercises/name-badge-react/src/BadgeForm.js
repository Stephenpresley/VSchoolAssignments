import React, { Component } from 'react';
import BadgeContainer from './BadgeContainer'

class BadgeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            about: '',
            badgeArr: []
        }
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    
    handleSubmit = e => {
        e.preventDefault()
        let {fName, lName, email, birthPlace, phone, favFood, about} = this.state
        const newBadge = {
            fName,
            lName,
            email,
            birthPlace,
            phone,
            favFood,
            about
        }
        this.setState(prev => {
            return {
                badgeArr: [...prev.badgeArr, newBadge]
            }
        })
        console.log(newBadge)
    }
    render() {
        let {fName, lName, email, birthPlace, phone, favFood, about} = this.state
        const formStyle = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px',
            alignItems: 'center'
        }
        const style = {
            textAlign: 'center',
            margin: '20px'
        }
        const styles = {
            border: '5px solid #1a1a1a',
            borderRadius: '5px',
            width: '60%',
            margin: '0 20% 0 20%',
            padding: '30px'
        }
        
        return (
            <div>
                <form style={styles} onSubmit={this.handleSubmit}>  
                    <div style={formStyle}>
                        <input onChange={this.handleChange} type="text" name='fName' value={fName} placeholder='First Name' required/>
                        <input onChange={this.handleChange} type="text" name='lName' value={lName} placeholder='Last Name' required/>
                        <input onChange={this.handleChange} type="email" name='email' value={email} placeholder='Email' required/>
                        <input onChange={this.handleChange} type="text"  name='birthPlace' value={birthPlace} placeholder='Place of Birth' required/>
                        <input onChange={this.handleChange} type="tel" pattern='[0-9]{3}[0-9]{3}[0-9]{4}' name='phone' value={phone} placeholder='Phone Number - no dashes' required/>
                        <input onChange={this.handleChange} type="text" name='favFood' value={favFood} placeholder='Favorite Food' required/>
                    </div>
                    <div style={style}>
                        <textarea   onChange={this.handleChange} 
                                    style={{resize: 'none', marginBottom: '20px'}} 
                                    name="about" 
                                    cols="100" rows="8" 
                                    value={about} 
                                    placeholder='Tell us about yourself.' 
                                    required>
                        </textarea>
                        <br/>
                        <button>Gimme mah badge!</button>
                    </div>
                </form>
                <br/>
                <BadgeContainer badgeArr={this.state.badgeArr}/>
            </div>
        );
    }
}

export default BadgeForm;