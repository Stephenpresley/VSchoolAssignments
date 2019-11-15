import React from 'react';

const About = () => {
    return (
        <div>
            <form id='inputs'>
                <label htmlFor="contact-form">For further information please fill out this form with your prefered contact method</label>
                <br/>
                <input type="text" className="name" placeholder='Full Name' required/>
                <input type="email" className= 'email' placeholder='Email'/>
                <input type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' className='number' placeholder='123-456-7890'/>
                <br/> 
                <button>Request Contact</button>
            </form>
        </div>
    )
}

export default About;