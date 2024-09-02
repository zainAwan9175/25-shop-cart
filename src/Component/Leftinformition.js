import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext } from 'react';
import { ShopContext } from './Shopcontex';



// import required modules
import { Pagination } from 'swiper/modules';
import Rating from './Rating/Rating'
import {Link} from "react-router-dom"


function Leftinformition({ product }) {

    const{addtocart}=useContext(ShopContext)
    const [code, setcode] = useState("")
    const [prequantity,setprequantity] = useState()
    const [size, setsize] = useState("")
    const [color, setcolor] = useState("")

    function handlecolor(event){
        setcolor(event.target.value)

    }
     function handlesize(event){
          setsize(event.target.value)
        
    }
     function handlequantity(event){
          setprequantity(event.target.value)
        
    }
     function handlecode(event){
          setcode(event.target.value)
        
    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    function data()
    {

       let obj={
            id:`${product.id} ${color} ${size}`,
            co:color,
            s:size,
            quantity:prequantity,
            cd:code,
            price:product.price,
            total:product.price*prequantity,
            name:product.name,
            img:product.img

            
        }
        addtocart(obj)
      
    }
    return (
        <div className='bg-white shadow-2xl rounded-md  w-[100vw] lg:w-[50vw] flex gap-3 flex-wrap p-4'>

            <div className='w-[270px]'>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={product.img} className='w-[270px] h-[270px]'></img></SwiperSlide>
                    <SwiperSlide> <img src={product.img} className='w-[270px] h-[270px]'></img></SwiperSlide>
                    <SwiperSlide> <img src={product.img} className='w-[270px] h-[270px]'></img></SwiperSlide>
                    <SwiperSlide> <img src={product.img} className='w-[270px] h-[270px]'></img></SwiperSlide>
                </Swiper>











            </div>


            <div className='bg-white shadow-2xl rounded-md w-full md:w-[300px] flex flex-col gap-3 p-4'>
            <h4>{product.name}</h4>
            <div className='flex gap-3'>
                <Rating color="text-yellow-300" />
                <p>(3 reviews)</p>
            </div>
            <p className='font-bold'>${product.price}</p>
            <p>Description: {product.description}</p>
            <div className='flex flex-col  gap-3'>
                <select className="form-select w-full md:w-[140px]" aria-label="Size" onChange={handlesize}>
                    <option value="">Size</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="2xl">Double Extra Large</option>
                </select>
                <select className="form-select w-full md:w-[140px]" aria-label="Color" onChange={handlecolor}>
                    <option value="">Color</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                </select>
                <input type='number' min={1} placeholder='Enter quantity' className='w-full md:w-[250px]' onChange={handlequantity} />
                <input type='text' placeholder='Enter discount code' className='w-full md:w-[250px]' onChange={handlecode} />
            </div>
            <div className='flex flex-col md:flex-row gap-3 items-center'>
                <button className='bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto' onClick={data}>Add to Cart</button>
                <Link to="/cart">
                    <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto'>Check Out</button>
                </Link>
            </div>
        </div>







        </div>
    )
}

export default Leftinformition
