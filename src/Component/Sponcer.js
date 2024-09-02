import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import img_1 from "../assets/images/sponsor/01.png"
import img_2 from "../assets/images/sponsor/02.png"
import img_3 from "../assets/images/sponsor/03.png"
import img_4 from "../assets/images/sponsor/04.png"
import img_5 from "../assets/images/sponsor/05.png"
import img_6 from "../assets/images/sponsor/06.png"

function Sponcer() {
  return (
<div className='flex justify-center p-10'>


<div className='w-[80%]'>


 
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img_1}></img></SwiperSlide>
        <SwiperSlide><img src={img_2}></img></SwiperSlide>
        <SwiperSlide><img src={img_3}></img></SwiperSlide>
        <SwiperSlide><img src={img_4}></img></SwiperSlide>
        <SwiperSlide><img src={img_5}></img></SwiperSlide>
        <SwiperSlide><img src={img_6}></img></SwiperSlide>
       
      </Swiper>
      
  </div>
  </div>
  )
}

export default Sponcer
