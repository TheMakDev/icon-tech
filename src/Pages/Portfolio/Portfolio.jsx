import React from 'react'
import './Portfolio.css'
import { assets } from '../../assets/assets'

const Portfolio = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          CAPTURE YOUR MEMORIES <br /> <span>PROFESSIONALLY</span>
        </h1>
        <p>
        Our mission is to reshape how people perceive and interact with their environment by creating a world where audio-visual solutions are seamlessly integrated into people’s lives to change how they live, learn and work.  
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Let’s work</button>
          <button className="btn secondary">Learn more</button>
        </div>
      </div>
      <div className="hero-images">
        <img src={assets.image1} alt="Wedding" className="image tilt-left" />
        <img src={assets.image2} alt="Birthday" className="image tilt-right" />
        <img src={assets.image3} alt="Graduation" className="image tilt-left" />
        <img src={assets.image4} alt="Venue" className="image tilt-right" />
      </div>
      <div className="hero-background"></div>
    </section>
  )
}

export default Portfolio