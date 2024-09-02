import React, { useState } from 'react';
import heroimg from "../assets/images/hero/hero.png";
import productdata from "./Product";
import { Link } from "react-router-dom";
import Slectchatagory from './Slectchatagory';

function Hero() {
  const [inputdata, setInputData] = useState("");
  const [filtered, setFiltered] = useState([]);

  function handleInput(e) {
    const search = e.target.value || ""; // If e.target.value is undefined, use an empty string
    setInputData(search);

    const newData = productdata.filter((product) => {
      // Add a guard clause to ensure product.name is not undefined before calling toLowerCase()
      return product.name && product.name.toLowerCase().includes(search.toLowerCase());
    });

    setFiltered(newData);
    
    if(search === "") {
      setFiltered([]);
    }
  }

  return (
    <div className='w-[100vw]  h-[85vh] overflow-x-hidden'>
      <img src={heroimg} className=' w-[100vw]  h-[85vh] z-0 absolute top-[15vh]' alt="hero image" />
      <div className=' gap-5 z-10 absolute top-[15vh] w-[100vw] h-[85vh] flex justify-center items-center flex-col'>
        <p className='text-center font-[300] text-[35px] leading-[45px]'>Search Your Product from <span className='text-yellow-500'>Thousand</span> Of Products</p>
        <div className='w-[100vw] flex flex-row justify-center'>
          <Slectchatagory />
          <input className='w-[80%] md:w-[50%]  shadow-2xl bg-white' placeholder='Search Your product' onChange={handleInput}></input>
          <button className='bg-yellow-300 rounded-tr-3xl rounded-br-3xl'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className=' h-[20vh] overflow-y-auto w-[80vw] z-20 relative flex flex-wrap gap-4 justify-center'>
          {filtered.map((product) => {
            return <div className='bg-white-100 p-2 rounded-2xl shadow-2xl' key={product.id}>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
