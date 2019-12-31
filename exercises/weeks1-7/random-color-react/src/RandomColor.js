import React from 'react';

const RandomColor = (props) => {
    return (
        <div className='colors'>
            <div className='color' style={{backgroundColor: '#' + props.color}}></div>
            <div className='color' style={{backgroundColor: '#' + props.color}}></div>
            <div className='color' style={{backgroundColor: '#' + props.color}}></div>
            <div className='color' style={{backgroundColor: '#' + props.color}}></div>
        </div>
    );
};

export default RandomColor;