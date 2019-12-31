import React from 'react';

import {Link} from 'react-router-dom'

const Nav = () => {
    
    return (
        <div className='header'>
            <div className="sub-header">
                    <img    className='emblem' 
                            src="https://seeklogo.com/images/W/weyland-corporation-logo-2D4D939B07-seeklogo.com.png" 
                            alt="assets/weyland-corporation-logo-2D4D939B07-seeklogo.com.png"/>
                    <div style={{fontSize: '35px', margin: '5px'}}>Weyland Corp.</div>
                    <div style={{fontSize: '30px', margin: '5px'}}>Building better worlds.</div>
            </div>
            <div className='nav'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/products'>Products</Link>
                <Link className='link' to='/about'>About</Link>
                <a className='link' href='https://avp.fandom.com/wiki/Weyland_Corp'>Click/Tap here for more info</a>
            </div>
        </div>
    )
}

export default Nav;