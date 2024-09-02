import React from 'react'
import Two from "../assets/images/Two.png"
import CountUp from 'react-countup';
import pic_1 from "../assets/images/about/icon/01.jpg"
import pic_2 from "../assets/images/about/icon/02.jpg"
import pic_3 from "../assets/images/about/icon/03.jpg"
import { Link } from 'react-router-dom';
import instructor from "../assets/images/instructor/01.png"

function About() {
  return (
    <div className='w-[100vw]  mt-10 flex lg:flex-row flex-col justify-around items-center p-5' style={{ backgroundImage:`url(${Two})`, backgroundSize :"cover" }}>
        <div className=' lg:w-[25%] w-[100vw] flex lg:flex-col gap-5 lg:gap-3 justify-center items-center p-[10px]'>

        <div className='flex justify-center gap-5  flex-col lg:flex-row  items-center'>
            <img src={pic_1} className='h-[60px] w-[60px]'></img>
            <div className='flex flex-col justify-center items-center '>
                <h2><CountUp end={1100} />+</h2>
                < p className='text-center'>Marchrnt Enroll</p>
            </div>
        </div>
     <div className='flex justify-center gap-5 md:gap-3 lg:gap-5 flex-col lg:flex-row items-center'>
           <img src={pic_2} className='h-[60px] w-[60px]'></img>
            <div className='flex flex-col justify-center items-center '>
                <h2><CountUp end={100} />+</h2>
                <p className='text-center'>Rewards & Gitcards</p>
            </div>
     </div>
        <div className='flex justify-center gap-5  flex-col lg:flex-row items-center'>
         <img src={pic_3} className='h-[60px] w-[60px]'></img>
         <div className='flex flex-col justify-center items-center '>
                <h2><CountUp end={30} />+</h2>
                <p className='text-center'>Certifird course</p>
            </div>
         </div>
          

        </div>

        <div>
            <img src={instructor}></img>
        </div>


        <div className='lg:w-[25%] p-3 text-white'>
            <p className='text-white'>Why chose us</p>
            <h3 className='text-white'>Become a Marchant</h3>
            <p className='text-white'> 
            The store specializes in offering a curated selection of products that reflect the beauty and charm of the coastal lifestyle. From handcrafted seashell ornaments to locally sourced driftwood furniture, each item at Coastal Treasures tells a story of the sea. Visitors can browse through a variety of merchandise including:
            </p>
            <Link to='/signup'>
            <p className='p-2 bg-white'>Apply now</p>
            </Link>
        </div>
     
    </div>
  )
}

export default About
