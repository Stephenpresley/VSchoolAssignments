import React from 'react';
import {themeChange} from './ThemeProvider'

const Nav = (props) => {
    const navLight = {
        backgroundColor: 'cyan',
        color: 'black'
    }
    
    const navDark = {
        backgroundColor: 'black',
        color:  'cyan'
    }

    return (
        <div style={props.on ? navDark :  navLight} className='nav'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    );
};

export default themeChange(Nav);