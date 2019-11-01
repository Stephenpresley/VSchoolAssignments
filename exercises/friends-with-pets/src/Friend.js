import React from 'react'

const Friend = (props) => {
    let {name, age, pets} = props

    return (
        <div className='friend'>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{pets}</h3>
        </div>
    )
}

export default Friend