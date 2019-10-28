import React from 'react'

const ColorBoxes = (props) => {
    return (
        <div style={{backgroundColor: props.backgroundColor}}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default ColorBoxes