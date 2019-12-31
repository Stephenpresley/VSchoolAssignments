import React from 'react';
import {themeChange} from './ThemeProvider'

const Main = (props) => {
    return (
        <div className={props.on ? 'mainLight' : 'mainDark'} >
            {
                props.on
                ? <h1>Click the Button to toggle the Dark Theme</h1>
                : <h1>Click the Button to toggle the Light Theme</h1>
            }
            <button onClick={props.toggle}>Toggle Theme</button>
        </div>
    );
};

export default themeChange(Main);