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
                        <li>Student of VSchool, Salt Lake City</li>
                        <li>Experienced U.S. Air Force Aircraft Mechanic</li>
                        <li>My specialties include: - HTML - Javascript - CSS - JSON</li>
                        <li>- Team Building - Leadership - Intellectual property management</li>
                        <li>- Organization - Strong problem solving abilities</li>
                    </ul> :
                    <div className='introP' style={toggle ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                        <p>I like to build things. My intellectual curiosity has led me to solve the most pressing questions throughout my career. From streamlining mechanical processes in the United States Air Force, to brainstorming routes for conduit on construction sites; I've been able to quickly identify gaps, and use abstract thinking to overcome them.</p>
                        <p>With my refined skillset, I bring about a fresh approach to full-stack web development that allows me to thrive in this ever-changing environment. My experience leading teams, meticulously tracking change, and solving problems through innovation have paved the road for me to bring original and inventive ideas to the table.</p>
                        <p>My intellectual curiosity propels me to continue learning and growing; most recently by joining V School to learn full-stack web development.</p>
                        <p>I enjoy discussing new technology, traveling, gaming, and SEC football. I am am looking to network and/or explore future opportunities at this time while I complete my studies. If you want to bounce ideas off each other, or network for future opportunities I can be reached at stephen.presley@live.com.</p>
                    </div>
                    }
                </section>
        );
    }
}

export default Intro;