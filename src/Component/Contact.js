import React from 'react'
import Pageheader from './Header/Pageheader'

import pic_1 from "../assets/images/icon/01.png"
import pic_2 from "../assets/images/icon/02.png"
import pic_3 from "../assets/images/icon/03.png"
import pic_4 from "../assets/images/icon/04.png"
import Googlemap from './Googlemap'

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: pic_1,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: pic_2,
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "03110861625",
  },
  {
    imgUrl: pic_3,
    imgAlt: "contact icon",
    title: "Send email",
    desc: "zain9175zain@gmail.com",
  },
  {
    imgUrl: pic_4,
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

function Contact() {
  return (
    <div>
      <Pageheader title='Our Cantact page' current="Contact" />
      <div className='flex flex-col gap-8'>
        <div className='flex justify-center items-center flex-col'>
          <p className='tracking-widest text-orange-400'>{subTitle}</p>
          <h3 className='text-center'>{title}</h3>
        </div>

        <div className='flex flex-col-reverse lg:flex-row justify-center items-center '>
          <div className='w-[100vw] lg-[50vw]  '>
            <Googlemap />
          </div>
          <div className='w-[100vw] lg:w-[60vw]  flex flex-col gap-3 shadow-lg items-center p-4 '>

            {
              contactList.map((e) => {
                return (
                  <div className='w-[310px] flex justify-center items-center bg-white shadow-2xl gap-4 p-1'>
                    <img src={e.imgUrl} className='w-[30px]'></img>
                    <div className='  w-[230px]'>
                      <h4>{e.title}</h4>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
