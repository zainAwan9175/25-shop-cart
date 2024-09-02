import React from 'react'
import { Link } from 'react-router-dom'
import app_1 from "../assets/images/app/01.jpg"
import app_2 from "../assets/images/app/02.jpg"

function Appsection() {
  return (
    <div>
      
      <div className='flex flex-col justify-center items-center gap-6'>
       
        <Link to='/signup'><p className='border-2 border-yellow-300 p-3'> Sign Up For Free</p>
            </Link>
        <h3>Learn Anything , Anywhere</h3>
        <p className='text-center'>Take Shop On Your Any Device With Our App & Leatn All Time What You Want<br></br> Just Download & Install & Start To Learn</p>
        <div className="flex justify-center gap-4 ">
               <a href='#'><img src={app_1} className='w-[150px]'></img></a>
               <a href='#'><img src={app_2} className='w-[150px]'></img></a>
          
        </div>
      </div>
    </div>
  )
}

export default Appsection
