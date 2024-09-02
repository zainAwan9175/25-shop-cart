import React from 'react'
import { Link } from 'react-router-dom'

function Pageheader({title,current}) {
  return (
    <div className='bg-gradient-to-b from-yellow-200 w-[100vw] h-[50vh] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            
        <h3>{title}</h3>
        <p><Link to='/'> Home  </Link> / {current}</p>

        </div>


      
    </div>
  )
}

export default Pageheader
