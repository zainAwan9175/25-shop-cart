import React, { useState } from 'react'
import Pageheader from './Header/Pageheader'
import { useParams } from 'react-router-dom'
import Poplerpost from './Poplerpost';

import p1 from "../assets/images/blog/01.jpg";
import p2 from "../assets/images/blog/02.jpg";
import p3 from "../assets/images/blog/03.jpg";
import p4 from "../assets/images/blog/04.jpg";
import p5 from "../assets/images/blog/05.jpg";
import p6 from "../assets/images/blog/06.jpg";
import p7 from "../assets/images/blog/07.jpg";
import p8 from "../assets/images/blog/08.jpg";
import p9 from "../assets/images/blog/09.jpg";
import simgleblog_1 from "../assets/images/blog/single/01.jpg"
import simgleblog_2 from "../assets/images/blog/single/02.jpg"





const blog = [
  {
    id: 1,
    imgUrl: p1,
    imgAlt: 'Blog Thumb',
    title: 'Business Reporting Council: Theme, Could Plan.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '3',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 2,
    imgUrl: p2,
    imgAlt: 'Blog Thumb',
    title: 'Financial Reporting Council: What Could More.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '3',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 3,
    imgUrl: p3,
    imgAlt: 'Blog Thumb',
    title: 'Consulting Reporting Council: Could More.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '42',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 4,
    imgUrl: p4,
    imgAlt: 'Blog Thumb',
    title: 'Strategic Social Media and of visual design.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '13',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 5,
    imgUrl: p5,
    imgAlt: 'Blog Thumb',
    title: 'Find the Right Path for your Group Course online.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '23',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 6,
    imgUrl: p6,
    imgAlt: 'Blog Thumb',
    title: 'Learn by doing with Real World Projects other countries.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '34',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 7,
    imgUrl: p7,
    imgAlt: 'Blog Thumb',
    title: 'The Importance Of Intrinsic for Students.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '36',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 8,
    imgUrl: p8,
    imgAlt: 'Blog Thumb',
    title: 'A Better Alternative To Grading Student Writing.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '3',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
  {
    id: 9,
    imgUrl: p9,
    imgAlt: 'Blog Thumb',
    title: 'The Challenge Global Learning In Public Education.',
    desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
    commentCount: '5',
    btnText: 'Read More',
    name: 'Rajib Raj',
    date: 'Jun 05,2022',
  },
];


function Singleblog() {

  const { id } = useParams()


  let result = blog.filter((e) => {
    return e.id === Number(id);
  });

  return (
    <div className=''>
      <Pageheader title='Single Blog Page' current="Blog Deatails" />

      <div className='flex flex-wrap gap-4 '>

        <div className='w-[100vw] lg:w-[55vw] shadow-2xl flex justify-center items-center'>
          <div className='w-[95%] bg-white shadow-2xl p-2'>
            <img className='w-[100%] ' src={result[0].imgUrl} ></img>
            <div>
              <h3>{result[0].title}</h3>


              <div className='flex gap-3 items-center '>
                <i class="fa-solid fa-calendar-days text-orange-500 mb-3"></i>
                <p>{result[0].date}</p>
              </div>

              <div className='flex flex-col gap-4'>
                <p>In the fast-paced world of today, technology has become an indispensable part of every aspect of our lives, including education. With the advent of digital tools and online platforms, the landscape of education has undergone a remarkable transformation. Gone are the days when learning was confined to the walls of a classroom; now, students have access to a vast array of resources right at their fingertips</p>
                <div className='bg-orange-600 p-6 flex justify-center items-center flex-col '>

                  <h4 className='text-center text-white'>  <i class="fa-solid fa-quote-left text-red-900 relative bottom-3"></i> One of the most significant benefits of technology in education is its ability to make learning more accessible and flexible.</h4>
                  <div className='  w-[100%] flex justify-end italic font-bold'>....{result[0].name}</div>
                </div>

                <p>students can now access educational content anytime, anywhere, allowing them to learn at their own pace and convenience. This flexibility is particularly beneficial for individuals with busy schedules or those who are unable to attend traditional classes due to various constraints.</p>

                <div>
                  <img src={simgleblog_1}></img>
                </div>
                <p>Furthermore, technology has opened up new avenues for collaboration and communication among students and educators. Through online forums, video conferencing, and collaborative tools, students can engage in discussions, share ideas, and work on projects together, regardless of geographical boundaries</p>

                <div>

                  <a href='https://youtu.be/tAuhOGGl9Uw?si=er-24mhcJf9AbBRu' target="_blank" className='relative top-36 md:top-46 left-[42%]'><i className="fa-solid fa-play text-orange-500 text-[35px] bg-orange-100 p-4 rounded-full"></i></a>
                  <img src={simgleblog_2} alt="Background Image"></img>
                </div>

                <div className='border-slate-300 border-t-2 flex justify-between flex-wrap  '>

                  <div className='p-3'>
                    <a href='#' className='border-2 border-slate-300  pt-1 pb-1 pl-3 pr-3'>Agency</a>
                    <a href='#' className='border-2 border-slate-300  pt-1 pb-1 pl-3 pr-3'>Business</a>
                    <a href='#' className='border-2 border-slate-300  pt-1 pb-1 pl-3 pr-3'>Personal</a>
                  </div>

                  <div className='flex gap-2  p-3'>
                    <a href="#" className="text-red-500">
                      <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-900">
                      <i className="fa-brands fa-facebook text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-500">
                      <i className="fa-brands fa-square-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-red-500">
                      <i className="fa-brands fa-youtube text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-700">
                      <i className="fa-brands fa-linkedin text-2xl"></i>
                    </a>
                  </div>


                </div>


              </div>



            </div>

          </div>


        </div>

     
        <div   className='w-[100%] lg:w-[40%] h-[700px]  flex justify-center'>  
        <Poplerpost />
        </div>



       


      </div>




    </div>
  )
}

export default Singleblog
