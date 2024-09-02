
import React, { useContext, useState  } from 'react';
import { ShopContext } from './Shopcontex';
import logo from "../assets/images/logo/logo.png"
import { Link } from 'react-router-dom';
function Navbar() {
    const { count } = useContext(ShopContext);

    const [manu, setmanu] = useState(false)
    const [info, setinfo] = useState(false)
    const [scr, setscr] = useState(false)
    function updatemanu() {

        console.log("hlo")
        setmanu(!manu)

    }
    function updatinfo() {
        console.log("hlo")
        setinfo(!info)

    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 200) {
            setscr(!scr);
        }

    })
    return (

        <div className={`w-[100vw]   flex md:justify-around items-center justify-between  pr-2 md:pl-0 md:pr-6  h-[15vh] `}>


            <Link to="/"><img src={logo} className='w-[150px]'></img></Link>
            <div className={`md:block z-20 ${manu ? "block  absolute top-[15vh]  w-[50vw] left-0 h-[85vh] bg-yellow-400  rounded-tr-[150px] " : "hidden  "} `}>

                <ul className=' font-[700] flex flex-col object-cover  md:flex-row items-center  w-[100px] md:w-[500px] md:justify-center lg:gap-7 md:gap-4 gap-6 mt-3 md:mb-3   cursor-pointer '>
                    <Link to="/"><li>Home</li></Link>
                    <div className='w-[30vw] h-1 bg-slate-400 md:hidden'></div>
                    <Link to="/shop"><li>Shop</li></Link>
                    <div className='w-[50vw] h-1 bg-slate-400 md:hidden'></div>
                    <Link to="/blog"><li>Blog</li></Link>
                    <div className='w-[50vw] h-1 bg-slate-400 md:hidden'></div>
                    <Link to="/about"><li>About</li></Link>
                    <div className='w-[50vw] h-1 bg-slate-400 md:hidden'></div>
                    <Link to="/contact"><li>Contact</li></Link>
                    <div className='w-[50vw] h-1 bg-slate-400 md:hidden'></div>
                </ul>

            </div>




            <div className={` lg:block z-20 ${info ? "rounded-bl-[150px] pt-4 block absolute top-[15vh] right-0  h-[40vh] w-[50vw]  bg-slate-300  " : " hidden"}`}>

                <div className={`flex items-center gap-4   lg:w-[230px]   ${info ? " flex-col gap-0   " : ""} `}>

                  <Link to="/creataccount"><button className='bg-yellow-400 font-bold w-[150px]'>Create Account</button></Link>  
                    <Link to="/signup"><p className='font-bold '>Login</p></Link>
                  <Link to="/cart"> <div className='flex'><i className="fa-solid fa-cart-shopping text-[30px] mt-3 text-yellow-500"></i>
                    <p className='bg-red-600 text-white  rounded-full w-[20px] h-[25px] items-center flex justify-center relative right-2 bottom-1'>{count}</p>
                    </div></Link> 

                </div>

            </div>


            <div className='flex gap-4 lg:hidden'>
                <i className="fa-solid fa-bars block text-black  md:hidden" onClick={() => { updatemanu() }}></i>
                <i className="fa-solid fa-circle-info block text-black  lg:hidden" onClick={() => { updatinfo() }}></i>

            </div>




        </div>


    )
}

export default Navbar
