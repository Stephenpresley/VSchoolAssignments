import React from 'react';

const Die = (props) => {
    let {one, two, three, four, five, six} = props

    return (
        <div>
            <div>{one}</div>
            <div>{two}</div>
            <div>{three}</div>
            <div>{four}</div>
            <div>{five}</div>
            <div>{six}</div>
        </div>
    );
};

export default Die;