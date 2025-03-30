import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact' 
import Footer from './Components/Footer/Footer'
import VideoPlayer from "./Components/Videoplayer/VideoPlayer";



const App = () => {
  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About setPlayState={setPlayState}/>
      <div className="container" >
        <Title Subtitle='What we offer' title = 'OUR PROGRAMS' />
      <Program/>
  
     
      <Title Subtitle='Gallery' title = 'CAMPUS PHOTOS'/>
     <Gallery/>
     <Title Subtitle='Testimonials' title='What student says'/>
     <Testimonials/>
     <Title Subtitle='Contact' title='Get in Touch'/>
     <Contact/>
     <Footer/>
     

    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
  
export default App
