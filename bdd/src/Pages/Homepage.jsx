import React from 'react'
import Navbar from '../Components/Navbar'
import TextBanner from '../Components/TextBanner'
import AboutUsBanner from '../Components/AboutUsBanner'
import NumberBanner from '../Components/NumberBanner'
import MVBanner from '../Components/MVBanner'
import DirectorsMessage from '../Components/DirectorsMessage'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
  
    <TextBanner/>
    <AboutUsBanner/>
    <NumberBanner/>
    <MVBanner/>
    <DirectorsMessage/>
    
    </>
  )
}

export default Homepage