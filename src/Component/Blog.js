import React from 'react'
import Pageheader from './Header/Pageheader'
import { Link } from 'react-router-dom';

import p1 from "../assets/images/blog/01.jpg";
import p2 from "../assets/images/blog/02.jpg";
import p3 from "../assets/images/blog/03.jpg";
import p4 from "../assets/images/blog/04.jpg";
import p5 from "../assets/images/blog/05.jpg";
import p6 from "../assets/images/blog/06.jpg";
import p7 from "../assets/images/blog/07.jpg";
import p8 from "../assets/images/blog/08.jpg";
import p9 from "../assets/images/blog/09.jpg";




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
function Blog() {
  return (
    <div>
      <Pageheader title='Our Blog Page' current="Blog" />

      <div className=' p-8'>


        <div className='flex justify-center items-center flex-wrap  gap-10 '>
          {
            blog.map((element) => {
              return (
                <div className='w-[300px] bg-white shadow-2xl p-2'>
                  <Link to={`/blog/${element.id}`}><img src={element.imgUrl}></img></Link>
                  <h5>{element.title}</h5>

                  <div className='flex justify-between'>


                    <div className='flex gap-3 items-center '>
                      <i class="fa-solid fa-user text-orange-500 mb-3"></i>
                      <p>{element.name}</p>
                    </div>

                    <div className='flex gap-3 items-center '>
                      <i class="fa-solid fa-calendar-days text-orange-500 mb-3"></i>
                      <p>{element.date}</p>
                    </div>

                  </div>

                  <div>
                    <p>{element.desc}</p>
                  </div>

                  <div className='flex border-slate-300 border-t-2  justify-between'>
                    <div className=''>
                      <Link to={`/blog/${element.id}`} className='font-bold'><button>Read more</button></Link>
                      <i class="fa-solid fa-money-bill-trend-up text-orange-500"></i>

                    </div>

                    <div className='flex  items-center'>
                      <i class="fa-solid fa-comment text-red-500"></i>
                      <p className='text-[13px] text-red-500'>{element.commentCount}</p>
                    </div>
                  </div>





                </div>

              )

            })
          }


        </div>

      </div>

    </div>
  )
}

export default Blog
