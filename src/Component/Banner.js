import React from 'react'
import Login from './Foorm/Login'

function Banner() {
  return (
    <div className=''>
        <div className='bg-gradient-to-b from-pink-950 w-[100vw] flex justify-around p-3 gap-4 lg:p-7 flex-wrap'>
       <div className='w-[100vw] lg:w-[50vw] flex flex-col gap-6'>
        <p className='tracking-wider text-yellow-500'>SAVE THE DAY</p>
        <h2 className='text-white text-center'> Join On Day Long Free Workshop For Advance <span className='text-yellow-500'>Martering </span>  On Sales</h2>
        <p className='text-white'>Limited Time Offre! Hurry Up</p>
       </div>


       <div className='bg-gradient-to-b from-white rounded-3xl w-[100vw] md:w-[350px] '>
      <Login/>
        
       </div>
        </div>
    
    </div>
  )
}

export default Banner
