import React from 'react'
import "./Service.css"
import { services } from "../../data"
import ServiceCard from './ServiceCard/ServiceCard'


const Services = () => {
  return (
    <section className='services'>
      <div className="container">
        <div className="service_top">
          <h1 className="sub_title">Our focusable services</h1>
          <h3 className="title">Embracing change is at the core of our approach</h3>
        </div>
        <div className="services_container">
          {
            services.map((service, index) => (
              <ServiceCard 
              key={index} 
              icon={service.icon} 
              name={service.name}
              description={service.description}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
