import React from 'react'
import './Home.css'
import About from '../About/About'
import Services from '../../Component/Service/Service'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
  return (
    <>
      <div className="hero container">
      <div className="hero-text">
      <h1>Transforming Spaces with Seamless Technology Integration</h1>
      <p>
      Our mission is to reshape how people perceive and interact with their environment by creating a world where audio-visual solutions are seamlessly integrated into people’s lives to change how they live, learn and work.
      </p>
      <button className="btn">
        Explore more 
      </button>
    </div>
    </div>
    <About />
    <Services />
    <Portfolio />
    </>
    
  )
}

export default Home