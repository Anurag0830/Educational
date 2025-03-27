import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <div className="container">
        <Title Subtitle='What we offer' title='OUR PROGRAMS' />
        <Program />
        <Title Subtitle='Gallery' title='CAMPUS PHOTOS' />
        <Gallery />
        <Title Subtitle='Testimonials' title='What students say' />
        <Testimonials />
        <Title Subtitle='Contact' title='Get in Touch' />
        <Contact />
      </div>
    </div>
  );
};

export default App;

