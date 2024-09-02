import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


function Slider({ setswiper }) {
  function set(x) {

    console.log("helo")
    setswiper(x)
  }


  return (

    <div className='w-[340px]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(1) }}>1</div></SwiperSlide>
        <SwiperSlide ><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(2) }}>2</div></SwiperSlide>


        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(3) }}>3</div></SwiperSlide>


        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(4) }}>4</div></SwiperSlide>


        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(5) }}>5</div></SwiperSlide>


        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(6) }}>6</div></SwiperSlide>


        <SwiperSlide><div className='cursor-pointer w-[30px] h-[30px] bg-yellow-300 flex justify-center items-center' onClick={() => { set(7) }}>7</div></SwiperSlide>







      </Swiper>
    </div>
  )
}

export default Slider
