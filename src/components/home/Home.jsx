import React from 'react'
import Hero from './hero/Hero'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Testimonal from './testimonal/Testimonal'
import Hprice from './Hprice'
import AboutsCard from '../about/AboutsCard'

const Home = () => {
  return (
    
    <>
      <Hero />
      <AboutsCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home