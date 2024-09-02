import React from 'react'

import Pageheader from './Header/Pageheader'

import img_1 from "../assets/images/about/icon/01.jpg"
import img_2 from "../assets/images/about/icon/02.jpg"
import img_3 from "../assets/images/about/icon/03.jpg"
import pic_1 from "../assets/images/about/01.jpg"
import pic_2 from "../assets/images/about/02.jpg"
import About from './About'






const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: img_1,
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: img_2,
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: img_3,
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
]
function Navabout() {
  return (
    <div className=' flex flex-col  '>
      <Pageheader title='Our About page' current="About" />
      <div className=' flex justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center  w-[100vw] lg:w-[50vw] '>
          <div>
            <div className='border-8 border-slate-200 w-[110px] h-[110px] bg-orange-600 flex justify-center items-center flex-col  text-white z-20 relative  top-[120px] left-[65px] md:top-[140px] lg:top-[250px] ' >
              <h4 className='text-white '>30+</h4>
              <p className='text-white  text-center'>year of <br></br> expareance</p>
            </div>
            <img src={pic_1} className='z-0 border-8 border-slate-200 relative bottom-[130px] left-16  w-[240px] md:w-[260px] lg:w-[360px]'></img>

          </div>

          <img src={pic_2} className='z-10 border-8 border-slate-200 relative top-12 right-5 w-[140px] md:=[160px] lg:w-[200px]'></img>

        </div>

        <div className='w-[95vw] lg:w-[40vw]  p-3   bg-white shadow-2xl'>
          <div>
            <p className='text-orange-500 tracking-widest  font-bold '>About Our Brand</p>
            <h3>Good Qualification Services And Better Expriences</h3>
            <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>

          </div>

          <div className='flex flex-col gap-6 mt-4'>
            {
              aboutList.map((e) => {
                return (<div className='flex gap-3 '>
                  <img src={e.imgUrl}></img>
                  <div>
                    <h5>{e.title}</h5>
                    <p>{e.desc}</p>
                  </div>
                </div>)
              })
            }
          </div>

        </div>



      </div>

      <About />


    </div>
  )
}

export default Navabout
