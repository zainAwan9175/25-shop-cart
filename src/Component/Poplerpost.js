import React from 'react'
import img_1 from "../assets/images/blog/09.jpg"
import img_2 from "../assets/images/blog/10.jpg"
import img_3 from "../assets/images/blog/11.jpg"
import img_4 from "../assets/images/blog/12.jpg"
import { Link } from 'react-router-dom'


const postList = [
    {
    id:1,
    imgUrl: img_2,
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: img_3,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: img_4,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: img_1,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    ]

function Poplerpost() {
  return (
    <div className='w-[300px] flex flex-col gap-3 bg-white shadow-2xl p-3'>
        <div className='mt-4 border-2 p-3'>
        <h5>Most Popler Post</h5>

        </div>
 
     
        {
            postList.map((element)=>{
               return( <div className='flex gap-2 bg-slate-50'>
                    <Link to={`/poplerpost/${element.id}`}><img src={element.imgUrl} className='w-[120px] h-[100px]'></img></Link>
                    <div >
                    <p className='font-bold'>{element.title}</p>
                    <p>{element.date}</p>
                    </div>
               
                </div>)
            })
        }
        
      
    </div>
  )
}

export default Poplerpost
