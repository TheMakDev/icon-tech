import React from 'react'
import './about.css'
import about_img from '../../assets/about_img.jpg'
import { assets } from '../../assets/assets'
// import about_img3 from '../../assets/about_img3.png'
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="image_container">
        <img src={about_img} className='image_1' alt="" />
        <img src={assets.about_image2} className='image_2' alt="" />
        {/* <img src={about_img3} className='image_3' alt="" />; */}
        </div>
      </div>
      <div className="about-right">
        <h3>Trusted by Our Clients</h3>
        <span className='underlined-text'></span>
        <h1>Masters of digital audio-visual conferencing systems and home automation innovation for over 13 years.</h1>
        <p>Icontech was born out of a need to redefine how people and businesses 
          interact with technology. This led us to a path of creating worlds where technology works for you, how you want it.
          We create integrated audio-visual experiences that transform the way you live learn
          and work; to help you stay connected, be seen, be heard and remain in control of your digitally enabled environment.
          Icontech is connected to a network of partners and talents who prioritise this goal and place you, our end users at the forefront of every adventure we take to deliver fully integrated solutions that improve your experiences.
          Welcome to a world of endless possibilities, where we lead the charge in audio-visual excellence in Nigeria and 
          the African landscape. We’re not only about high-end gadgets, but all about crafting immersive experiences that seamlessly 
          blend technology into your life. </p>
      </div>
    </div>
  )
}

export default About