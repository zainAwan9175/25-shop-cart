import React from 'react'
// import Showcsedata from '../assets/images/categoryTab/Showcsedata'
import product from "./Product"
import { useState } from 'react'
import Rating from './Rating/Rating'
import { Link } from 'react-router-dom'
function Homeshowcase() {
  let newarr=product.slice(0,8)

const [slect,setslect]=useState(newarr)
const[active,setactive]=useState("all")


function corrent(x){
  setactive(x);


  if(x=="all")
  {
    let result=product.filter((e)=>{
      return(e.id<8)

    })
    setslect(result)

  }
  else{
    let updatedata=product.filter((element)=>{

      return (element.cate && element.cate.toLocaleUpperCase()===x.toLocaleUpperCase())
    })
  setslect(updatedata)
  

  }


}
  
  return (
    <div className='flex flex-col gap-6  '>
        
        <div className='flex justify-between md:gap-6 md:p-4 bg-slate-300 '>
          <div >
            <h4 className='pl-5 '>Our Products</h4></div>
          <div>
            <ul className='flex justify-center md:gap-6 pr-5 gap-2 font-bold cursor-pointer'>
              <li className={`p-1 cursor-pointer ${active === "all" ? "bg-yellow-300" : ""}`} onClick={()=>{corrent('all')}}>All</li>
              
              <li className={`p-1 cursor-pointer ${active === "beauty" ? "bg-yellow-300" : ""}`} onClick={()=>{corrent('beauty')}}>Beauty</li>
              
              <li className={`p-1 cursor-pointer ${active === "bags" ? "bg-yellow-300" : ""}`} onClick={()=>{corrent('bags')}}>Bags</li>
              
              <li className={`p-1 cursor-pointer ${active === "phones" ? "bg-yellow-300" : ""}`} onClick={()=>{corrent('phones')}}>Phones</li>

            </ul>
          </div>
        </div>


        <div className='flex gap-10 flex-wrap justify-center  p-10 h-full '>
    
           
           
        {
          slect.map((product)=>{


            return(
              <Link to={`/shop/${product.id}`}>

            <div className='w-[300px]  pt-3 pb-3 '>
                <div>
                  <img src={product.img} className='w-[300px] h-[270px]'></img>
                  <div className='flex justify-between pl-2 bg-yellow-100 pr-2 border-b-2'>
                    <p>{product.cate}</p>
                    <Rating color="text-black"/>
                  </div>
                  <div className=' bg-white shadow-2xl p-2 border-b-2'>
                    <p className='font-bold   '>{product.name}</p>
                  </div>
                  <div className='bg-white shadow-2xl flex justify-between p-2 border-b-2'>
                    <p>{product.brand}</p>
                     <p>{product.price}</p>  
                  </div>
                </div>

            </div>
            </Link>)

          })
        }




        </div>

           
        
      
    </div>
  )
}

export default Homeshowcase

