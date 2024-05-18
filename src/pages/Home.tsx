import React from 'react'
import Home_banner from '../components/Home/banner/Home_banner';
import About from '../components/Home/About';
import Funfact from '../components/Home/Funfact';
import Services from '../components/Home/Services';
import Projects from '../components/Home/Projects';
import Blogs from '../components/Home/Blogs';
import ContactForm from '../components/Home/ContactForm';
import WhyChooses from '../components/Home/WhyChooses';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
  return (
    <>

      <Home_banner />
      <About />
      <Funfact />
      <Services />
      <Projects />
      <WhyChooses />
      <ContactForm />
      <Testimonial />
      <Blogs />
    </>
  );
}

export default Home