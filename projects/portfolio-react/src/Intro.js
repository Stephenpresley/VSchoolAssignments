import React, { Component } from 'react';

class Intro extends Component {
    constructor() {
        super()

        this.state = {
            toggle: true
        }
    }

    handleToggle = () => {
        this.setState(prev => {
            return {
                toggle: !prev.toggle
            }
        })
    }

    render() {
        let {toggle} = this.state
        return (
                <section className="intro-text">
                    <div className="intro-header">
                        <h3>Profile</h3>
                        <div className="toggle">
                            <span className="toggle-label" id="concise" style={toggle ? {color: '#fd4e4e'} : {color: 'rgb(136, 136, 136)'}}>Concise</span>
                            <input id="intro-toggle" type="checkbox" onChange={this.handleToggle}/>
                            <label htmlFor="intro-toggle"></label>
                            <span className="toggle-label" id="interesting" style={toggle ? {color: 'rgb(136, 136, 136)'} : {color: '#fd4e4e'}}>Interesting</span>
                        </div>
                    </div>
                    { toggle ?
                    <ul style={toggle ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul> :
                    <div style={toggle ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                    </div>
                    }
                </section>
        );
    }
}

export default Intro;