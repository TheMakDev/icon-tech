import React from 'react'
import './About.css'
import about_img from '../assets/about_img.jpg'
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" />
        </div>
      <div className="about-right">
        <h1>Masters of digital audio-visual conferencing systems and home automation innovation for over 13 years.</h1>
        <p>Icontech was born out of a need to redefine how people and businesses 
          interact with technology. This led us to a path of creating worlds where technology works for you, how you want it.
          We create integrated audio-visual experiences that transform the way you live learn
          and work; to help you stay connected, be seen, be heard and remain in control of your digitally enabled environment.
          Icontech is connected to a network of partners and talents who prioritise this goal and place you, our end users at the forefront of every adventure we take to deliver fully integrated solutions that improve your experiences.
          Welcome to a world of endless possibilities, where we lead the charge in audio-visual excellence in Nigeria and 
          the African landscape. We’re not only about high-end gadgets, but all about crafting immersive experiences that seamlessly 
          blend technology into your life. </p>
          {/* <div className="achievements">
            <div className="achievement">
              <FaAward claassName="icon" />
              <p>Over 50 Award</p>
            </div>
            <div className="achievement">
              <FaUsers claassName="icon" />
              <p>1000+ Happy Clients </p>
            </div>
            <div className="achievement">
              <FaProjectDigram claassName="icon" />
              <p>200+ Projects Completed</p>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default About