import React from 'react';

const Contact = () => {
    return (
        <div>
            <form className='contactForm'>
                <label htmlFor="contactForm">For further information please fill out this form with your prefered contact method</label>
                <input type="text" class="name" placeholder='Full Name' required/>
                <input type="text" class= 'email' placeholder='Email'/>
                <input type="text" class='number' placeholder='Contact Number'/>
                <button>Request Contact</button>
            </form>
        </div>
    )
}

export default Contact;