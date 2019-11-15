import React from 'react';
import {themeChange} from './ThemeProvider'

const Footer = (props) => {
    const footLight = {
        backgroundColor: 'lightgray',
        color: 'darkgray'
    }
    
    const footDark = {
        backgroundColor: 'darkgray',
        color:  'lightgray'
    }
    return (
        <div style={props.on ? footDark :  footLight} className='footer'>
            The Amazing Footer
        </div>
    );
};

export default themeChange(Footer);