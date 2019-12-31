import React from 'react'

//Components
import Header from './Header'
import Bloglist from './Bloglist'
import Footer from './Footer'

//Stylesheet
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <Bloglist />
            <Footer />
        </div>
    )
}

export default App