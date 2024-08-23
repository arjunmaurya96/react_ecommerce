import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
import Hero2 from './Hero2'

const Shop = () => {
  return (
  <>
  <div>
    <Hero/>
    {/* <Hero2/> */}
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    
  </div>
  
  </>
  )
}

export default Shop