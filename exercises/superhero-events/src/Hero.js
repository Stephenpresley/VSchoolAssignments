import React from 'react'

const Hero = (props) => {
    let {name, show, phrase, image} = props
    const handleClick = () => {
        alert(phrase)
    }

    return (
        <div className='hero' onClick={handleClick}>
            <h1>{name}</h1>
            <h2>{show}</h2>
            <img src={image} alt=""/>
        </div>
    )
}

export default Hero