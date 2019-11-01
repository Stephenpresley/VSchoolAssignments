import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            age: '',
            gender: '',
            location: '',
            diet: []
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        if(name === 'diet') {
            const dArr = [...this.state.diet]
            dArr.includes(value) ? dArr.splice(dArr.indexOf(value), 1) : dArr.push(value);
            this.setState({diet: dArr})
        }else {
            this.setState({[name]: value})
        }
    }

    handleSelect = e => {
        this.setState({location: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let {fName, lName, age, gender, location, diet} = this.state
        alert(
            `
            Name: ${fName} ${lName}
            Age: ${age}
            Gender: ${gender}
            Destination: ${location}
            Dietary Restriction(s): ${diet}
            `
        )
    }

    render() {
        const style = {
            backgroundColor: 'crimson',
            border: '5px solid #1a1a1a',
            textAlign: 'center',
            fontSize: '60px'
        }
        const styles = {
            backgroundColor: 'cyan',
            border: '1px solid #1a1a1a',
            textAlign: 'center',
            fontSize: '20px',

        }
        return (
            <div style={style}>
                Need to get away for a while?
                <form onSubmit={this.handleSubmit} style={styles}>
                    Lets get some info first.
                    <br/>
                    <input type="text" name='fName' placeholder='First Name' value={this.state.fName} onChange={this.handleChange}/>
                    <input type="text" name='lName' placeholder='Last Name' value={this.state.lName} onChange={this.handleChange}/>
                    <input type="number" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    Male<input type="radio" name='gender' value='Male' onChange={this.handleChange}/>
                    Female<input type="radio" name='gender' value='Female' onChange={this.handleChange}/>
                    Other<input type="radio" name='gender' value='Other' onChange={this.handleChange}/>
                    Prefer Not to Say<input type="radio" name='gender' value='Prefer Not to Say' onChange={this.handleChange}/>
                    <br/>
                    Choose Your Destination
                    <select name='location' value={this.state.value} onChange={this.handleSelect}>
                        <option></option>
                        <option value="Wakanda">Wakanda</option>
                        <option value="Hoth">Hoth</option>
                        <option value="Magrathea --- Extra fee for using Infinite Improbability Drive.">Magrathea --- Extra fee for using Infinite Improbability Drive.</option>
                        <option value="Westworld">Westworld</option>
                    </select>
                    <br/>
                    Vegetarian<input value="Vegetarian" name="diet" type="checkbox" onChange={this.handleChange}/>
                    Kosher<input value="Kosher" name="diet" type="checkbox" onChange={this.handleChange}/>
                    Gluten Free<input value="Gluten Free" name="diet" type="checkbox" onChange={this.handleChange}/>
                    Lactose Free<input value="Lactose Free" name="diet" type="checkbox" onChange={this.handleChange}/>
                    Carnivore<input value="Carnivore" name="diet" type="checkbox" onChange={this.handleChange}/>
                    None<input value="None" name="diet" type="checkbox" onChange={this.handleChange}/>
                    <br/>
                    <button>Take Me There!</button>
                </form>
            </div>
        );
    }
}

export default Form;