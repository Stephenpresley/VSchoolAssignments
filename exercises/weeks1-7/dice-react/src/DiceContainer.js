import React from 'react';
import Die from './Die'

const DiceContainer = (props) => {
console.log(props)
    const diceMap = props.dice.map( die => <Die one={die.dice}
                                        two={die.dice}
                                        three={die.dice}
                                        four={die.dice}
                                        five={die.dice}
                                        six={die.dice}
                                        />)
                                        
    return (
        <div>
            {diceMap}
        </div>
    );
};

export default DiceContainer;
