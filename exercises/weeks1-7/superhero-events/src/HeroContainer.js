import React from 'react'
import Hero from './Hero'
import heros from './heros.json'
import './App.css'

const HeroContainer = () => {
    const heroMap = heros.map((hero, i) => <Hero key={i + hero.name}
                                                name={hero.name}
                                                show={hero.show}
                                                phrase={hero.catchPhrase}
                                                image={hero.imageName}
                                                />)
    return (
        <div className='heros'>
            {heroMap}
        </div>
    )
}

export default HeroContainer