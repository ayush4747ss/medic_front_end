import React from 'react'
import Hero from './Hero';
import Features from './Features';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Layout;