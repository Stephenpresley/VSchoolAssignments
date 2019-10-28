import React from 'react';

const Nav = () => {
    
    const header = {
        display: 'flex',
        justifyContent: 'spaceEvenly',
        position: 'fixed',
        height: '50px',
        top: '2px',
        backgroundColor: 'rgb(211, 234, 255)',
        border: 'rgb(211, 234, 255) solid 2px',
        borderRadius: '5px',
    }
    
    const ulStyles = {
        display: 'flex',
        justifyContent: 'spaceEvenly',
        spaceEvenly: 'fixed',
        listStyleType: 'none',
        top: '51px',
        backgroundColor: 'rgb(211, 234, 255)',
        border: 'rgb(211, 234, 255) solid 2px',
        borderRadius: '5px',
    }
    return (

        <div>
            <div className="header" style={header}>
                    <img className= 'emblem' src="https://seeklogo.com/images/W/weyland-corporation-logo-2D4D939B07-seeklogo.com.png" alt="assets/weyland-corporation-logo-2D4D939B07-seeklogo.com.png"/>
                <div>
                    <h1>Weyland Corp.</h1>
                    <h2>Building better worlds.</h2>
                </div>
            </div>
                <nav className='navBar'>
                    <ul style={ulStyles}>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Contact.js">Contact Us</a></li>
                        <li className="navbutton2">Please <a href="https://avp.fandom.com/wiki/Weyland_Corp">click/tap here</a> for more info </li>
                    </ul>
                </nav>
        </div>
    )
}

export default Nav;