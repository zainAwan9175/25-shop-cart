import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-black  '>

            <div className=' flex flex-wrap gap-5 justify-around pt-5  '>
                <div className='w-[260px]  '>
                    <h5 className=' text-white'>About ShopCart  </h5>
                    <p className=' text-white'>Eduaid theme number one world class university in the world  There are student are stuying always in this university for all time</p>
                    <div>
                        <div className='text-white flex gap-2  items-center'>
                            <i class="fa-solid fa-location-dot "></i>
                            Lahore pakistan
                        </div>
                        <div className='text-white flex gap-2  items-center'>
                            <i class="fa-solid fa-phone"></i>
                            03110861625
                        </div>
                        <div className='text-white flex gap-2  items-center'>
                            <i class="fa-solid fa-envelope"></i>
                            zain9175zain@gmail.com
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <a href="#" className="text-red-500">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="text-blue-900">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className="text-blue-500">
                                <i className="fa-brands fa-square-twitter"></i>
                            </a>
                            <a href="#" className="text-red-500">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="#" className="text-blue-700">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col    w-[260px] ' >
                    <h5 className='ml-8 text-white '>Categorles</h5>
                    <ul className='flex flex-col'>
                        <a href='#'><li className='text-white'>All products</li></a>
                        <a href='#'><li className='text-white'>Shop</li></a>
                        <a href='#'><li className='text-white'>Blog</li></a>
                        <a href='#'><li className='text-white'>About</li></a>
                        <a href='#'><li className='text-white'>Policy</li></a>
                        <a href='#'><li className='text-white'>FaQs</li></a>
                    </ul>
                </div>
                <div className='flex flex-col    w-[260px]'>
                    <h5 className='ml-8 text-white '>Quick Links</h5>
                    <ul className='flex flex-col'>
                        <a href='#'><li className='text-white'>Summer Session</li></a>
                        <a href='#'><li className='text-white'>Events</li></a>
                        <a href='#'><li className='text-white'>Gallery</li></a>
                        <a href='#'><li className='text-white'>Forms</li></a>
                        <a href='#'><li className='text-white'>privacy Policy</li></a>
                        <a href='#'><li className='text-white'>Terms of use</li></a>
                    </ul>
                </div>
                <div className='w-[260px] '>
                    <h5 className='text-white  ml-5'>Recent Tweets</h5>
                    <div className=' text-white flex  gap-2'>
                        <i class="fa-brands fa-twitter text-white "></i>
                        <p className='text-white '>
                            "Discover unbeatable deals on our e-commerce site today! Shop now for exclusive discounts and fast shipping.</p>

                    </div>

                    <div className=' text-white flex  gap-2'>
                        <i class="fa-brands fa-twitter text-white "></i>
                        <p className='text-white '> Elevate your shopping game with our unbeatable deals and unparalleled convenience."</p>

                    </div>



                </div>

            </div>
            <div className='h-[10vh] bg-slate-950 w-[100vw] flex justify-center items-center mt-5 border-t-2 border-white'>
                <p className='text-white text-center'>  @ 2023  <span className='text-slate-400'> Shop Cart</span>  Design by zain ul abedin</p>
            </div>

        </div>
    )
}

export default Footer
