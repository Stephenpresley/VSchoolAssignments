import React, { Component } from 'react';
import Die from './Die'

class DiceBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roll: [1, 2, 3, 4, 5, 6]
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState(prev => {
            prev.roll =  Math.floor(Math.random()*6)
        })
    }

    render() {
        let {roll} = this.state
        console.log(roll)
        const diceMap = roll.map( die => <Die one={die[0]}
                                            two={die[1]}
                                            three={die[2]}
                                            four={die[3]}
                                            five={die[4]}
                                            six={die[5]}/>)
        return (
            <div onSubmit={this.handleSubmit} className='diceBox'>
                {diceMap}
                <button>Roll</button>
            </div>
        );
    }
}

export default DiceBox;