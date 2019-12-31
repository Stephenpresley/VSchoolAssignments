import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    const style = {
        backgroundImg: 'url("src/home-bg.jpg")'
    }
    return (
        <div>
        <header class="masthead" style={style}>
        <Navbar />
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Clean Blog</h1>
                <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
        </header>
        </div>
    )
}

export default Header