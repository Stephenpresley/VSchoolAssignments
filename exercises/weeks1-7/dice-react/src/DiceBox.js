import React, { Component } from 'react';
import DiceContainer from './DiceContainer';

class DiceBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dice: []
        }
    }

    handleClick = e => {
        // e.preventDefault()
        const dice = Math.floor(Math.random()*6)
        this.setState(prev => {
            return {
                dice: [...prev.dice, dice]
            }
        })
    }

    render() {
        return (
            <div className='diceBox'>
                <DiceContainer dice={this.state.dice}/>
                <button onClick={this.handleClick}>dice</button>
            </div>
        );
    }
}

export default DiceBox;