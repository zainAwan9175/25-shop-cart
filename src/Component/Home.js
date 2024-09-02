import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import HomeChatagory from './HomeChatagory'
import Homeshowcase from './Homeshowcase'
import Banner from './Banner'
import About from './About'
import Appsection from './Appsection'
import Sponcer from './Sponcer'

function Home() {
  return (
    <div className='flex flex-col gap-[30px] '>
  
      <Hero />
      <HomeChatagory />
      <Homeshowcase />
      <Banner />
      <About />
      <Appsection />
      <Sponcer />
    </div>
  )
}

export default Home
