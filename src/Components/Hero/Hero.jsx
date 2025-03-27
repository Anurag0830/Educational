import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.jpeg'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>We Ensure Better education for a better world</h1>
      <p>Our cutting edge Curriculum is designed to empower student with the knowledge , skills,
         and experiences needed to excel in the dynamic field of education </p>
      <button className='btn'>Explore More<img src={dark_arrow} alt=" "/> </button>
      </div>
    </div>
  )
}

export default Hero