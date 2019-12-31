import React, {Component} from 'react'
import Square from './Square'

class Mixer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: ["white", "white", "white", "white", "white", "white", "white", "white"]
        }
    }

    handleBlackWhite = () => {
        this.setState(prev => {
            if(prev.colors[0] === 'white') {
                return {colors: ["black", 'black', 'black', 'black', "black", 'black', 'black', 'black']}
            }else {
                return {colors: ["white", "white", "white", "white", "white", "white", "white", "white"]}
            }
        })
    }

    handlePurple = () => {
        this.setState(prev => {
            if(prev.colors[0] === 'white'|| prev.colors[0] === 'black') {
                return {colors: ["purple", 'purple', 'purple', 'purple', prev.colors, prev.colors, prev.colors, prev.colors]}
            } else if(prev.colors[0] === 'purple') {
                return {colors: [prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors]}
            }
        })
    }

    handleBlueLeft = () => {
        this.setState(prev => {
            if(prev.colors[0] === 'white') {
                return {colors: [prev.colors, prev.colors, prev.colors, prev.colors, "blue", "blue", prev.colors, prev.colors]}
            }else if(prev.colors[0] === 'black') {
                return {colors: [prev.colors, prev.colors, prev.colors, prev.colors, "blue", "blue", prev.colors, prev.colors]}
            }else if(prev.colors[0] === 'purple') {
                return {colors: ['purple', 'purple', 'purple', 'purple', "blue", "blue", prev.colors, prev.colors]}
            }else if(prev.colors[4] === 'blue') {
                return {colors: [prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors, prev.colors]}
            }
        })   
    }   

    handleBlueRight = () => {
        this.setState(prev => {
            if(prev.colors[7] === 'white') {
                return {colors: ["white", "white", "white", "white", "white", "white", "blue", "blue"]}
            }else if(prev.colors[7] === 'black') {
                return {colors: ["black", "black", "black", "black", "black", "black", "blue", "blue"]}
            }else if(prev.colors[7] === 'blue' && prev.colors[4] === 'white') {
                return {colors: ["white", "white", "white", "white", "white", "white", "white", "white"]}
            }else if(prev.colors[7] === 'blue' && prev.colors[4] === 'black') {
                return {colors: ["black", "black", "black", "black", "black", "black", "black", "black"]}
            }else if(prev.colors[0] === 'purple' && prev.colors[7] === 'black') {
                return {colors: ["purple", "purple", "purple", "purple", "blue", "blue", "black", "black"]}
            }else if(prev.colors[0] === 'purple' && prev.colors[7] === 'white') {
                return {colors: ["purple", "purple", "purple", "purple", "blue", "blue", "white", "white"]}
            }else if(prev.colors[0] === 'purple' && prev.colors[7] === 'blue' && prev.colors[7] === 'white') {
                return {colors: ["purple", "purple", "purple", "purple", "white", "white", "white", "white"]}
            }else if(prev.colors[0] === 'purple' && prev.colors[7] === 'blue' && prev.colors[7] === 'black') {
                return {colors: ["purple", "purple", "purple", "purple", "black", "black", "black", "black"]}
            }
        })
    }

    render() {
        const colors = this.state.colors.map( color => <Square color={color} />)

        return(
            <div>
                <div className='squares'>
                    {colors}
                </div>
                <button onClick={this.handleBlackWhite}>Black & White</button>
                <button onClick={this.handlePurple}>Top Purple</button>
                <button onClick={this.handleBlueLeft}>Bottom-Left Blue</button>
                <button onClick={this.handleBlueRight}>Bottom-Right Blue</button>
            </div>
        )
    }
}

export default Mixer