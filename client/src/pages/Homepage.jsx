import React from 'react'
import Header from '../components/header'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import PropertyList from '../components/PropertyList'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Service/>
        <PropertyList/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Homepage