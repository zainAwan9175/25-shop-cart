

import React from 'react';
import camera from "../assets/images/homechatagory/01.jpg";
import homelist from '../assets/images/homechatagory/Homelist';
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";



function HomeChatagory() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center items-center flex-col'>
        <p className='mt-4 text-yellow-300 tracking-wider font-bold'>{subTitle}</p>
        <h2 className='tracking-wider'>{title}</h2>
      </div>

      <div className='flex justify-center items-center gap-12 flex-wrap'>
        {
          homelist.map((product, index) => (
            <Link to="shop">
              <div className='w-[300px] h-[230px] ' key={index}>
                <div className='z-0 relative'>
                  <img src={product.imgUrl} alt={product.imgAlt} />
                </div>

                <div className='flex gap-3 items-end z-10 relative bottom-[60%] bg-gradient-to-t from-slate-800  h-[60%]'>
                  <i className="mb-2 ml-1 fa-brands fa-windows text-[35px] text-yellow-600 "></i>
                  <p className='mt-3 font-400 text-white'>{product.title}</p>
                </div >
              </div>
            </Link>



          ))
        }


      </div>

      <div className='flex justify-center'>
        <Link to="/shop">
          <p className='border-2 border-yellow-400   p-2 rounded-2xl  font-bold'>Get Started Now</p>
        </Link>
      </div>
    </div>
  );
}

export default HomeChatagory;
