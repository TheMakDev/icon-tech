import React from 'react'
import Header from '../../Component/About/Header'
import Achievement from '../../Component/Achievement/Achievement'
import "./About.css"

const About = () => {
  return (
    <div className='about-us'>
        <Header />
        <div className='main-container'>
            <Achievement />
        </div>
        
    </div>

    
  )
}

export default About