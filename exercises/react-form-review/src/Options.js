import React, {Component} from 'react'

class Options extends Component  {
    constructor() {
        super()

        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState(prev => {
            return {toggle: !prev.toggle}
        })
    }

    render() {
        const style = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }

        // let visibility;

        // if(this.state.toggle) {
        //     visibility = 'visible'
        // } else {
        //     visibility = 'hidden'
        // }

        // const toggleStyles = { visibility }

        return (
                <div style={style}>
                    <select name="greeting drop down" id="greeting-options">
                        <option value="">hello</option>
                        <option value="">hi</option>
                        <option value="">Good day, all you fine people</option>
                    </select>
                    show color input?<label></label><input onChange={this.handleToggle} type="checkbox"/>
                    {this.state.toggle &&
                    <label for="color">what color? 
                        <input onChange={this.handleChange} id="color" name='color' value={this.state.color} placeholder='#bada55'/>
                    </label>
                    }
                </div>
            )        
    }
}


export default Options
