import React from 'react'
import './about.css'
import {assets} from '../../assets/assets'


const Header = () => {
  return (
    <section class="workshop_section">
        <div class="workshop_image">
            <div class="image-1"><img src={assets.about_image2} alt="" /></div>
            <div class="image-2"><img src={assets.about_image} alt="" />
            </div>
            <div class="inner-content">
                <h5>CERTIFIED SERVICES</h5>
                <p><i class="fa fa-safari" aria-hidden="true"></i> Approved IT Company</p>
            </div>
        </div>
        <div class="workshop_section_right">
            <div id="custom_header"></div>
            <div class="workshop_header">
                <p>Masters of digital audio-visual conferencing systems</p>
                <p>and home automation innovation for over 13 years.</p>
            </div>
            <div class="workshop_content">
                <p class="first_text">Icontech was born out of a need to redefine how people and businesses 
          interact with technology. This led us to a path of creating worlds where technology works for you, how you want it.
          We create integrated audio-visual experiences that transform the way you live learn
          and work; to help you stay connected, be seen, be heard and remain in control of your digitally enabled environment.
          Icontech is connected to a network of partners and talents who prioritise this goal and place you, our end users at the forefront of every adventure we take to deliver fully integrated solutions that improve your experiences.</p>
                <p class="second_text">
                    </p>
            </div>
            <div id="workshop_list">
              <ul>
                <li>Innovation</li>
                <li>Innovation</li>
                <li>Innovation</li>
                <li>Innovation</li>
              </ul>
            </div>
            <div id="default-button" itemprop="Button">
            </div>
        </div>
    </section>
  )
}

export default Header