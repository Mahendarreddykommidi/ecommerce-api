import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Featuredproducts from '../components/Featuredproducts'
import Footer from '../components/Footer'
import NewsLetter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Navbar/>

    <Hero/>
    
    <Featuredproducts/>
    <NewsLetter/>
    <Footer/>




    </div>
  )
}

export default Home