import React from 'react'
import './Home.css'
import About from '../About/About'
import Services from '../../Component/Service/Service'

const Home = () => {
  return (
    <>
      <div className="hero container">
      <div className="hero-text">
      <h1>Transforming Spaces with Seamless Technology Integration</h1>
      <p>
      Our mission is to reshape how people perceive and interact with their environment by creating a world where audio-visual solutions are seamlessly integrated into people’s lives to change how they live, learn and work.
      </p>
      <div className="video-container">
            <video width="100%" controls>
              <source src="/src/Video/Icontech.mp4" type="video/mp4" />
            </video>
          </div>
      <button className="btn">
        Explore more 
      </button>
    </div>
    </div>
    <About />
    <Services />
    </>
    
  )
}

export default Home