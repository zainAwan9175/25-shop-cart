import React, { useState, useEffect } from 'react';
import Pageheader from './Header/Pageheader';
import product from "./Product";
import Card from './Card/Card';
import Swiper from './Swiper/Slider';
import Sideinput from './Sideinput';
import SideCetagory from './SideCetagory';
import Poplerpost from './Poplerpost';

function Shop() {
  const [list, setList] = useState(false);
  const [grid, setGrid] = useState(true);
  const [currentpage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [active, setActive] = useState("All");

  const indexoflastproduct = currentpage * 12;
  const indexoffirstproduct = indexoflastproduct - 12;

  useEffect(() => {
    const newProducts = product.slice(indexoffirstproduct, indexoflastproduct);
    setCurrentProducts(newProducts);
  }, [currentpage]);

  function addCategory(x) {
    setActive(x);
    if (x === "All") {
      const newProducts = product.slice(indexoffirstproduct, indexoflastproduct);
      setCurrentProducts(newProducts);
    } else {
      const newCategory = product.filter((element) => element.category === x);
      setCurrentProducts(newCategory);
    }
  }

  function handleList() {
    setList(true);
    setGrid(false);
  }

  function handleGrid() {
    setGrid(true);
    setList(false);
  }

  function setSwiper(p) {
    setCurrentPage(p);
    setActive("All");
  }

  return (
    <div className=''>
      <Pageheader title='Our Shop Page' current="Shop" />
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-[75%] lg:w-[70%]'>
          <div className='flex justify-between bg-slate-300 items-center p-3'>
            <p className=''> Show 01 to 12 out of 139</p>
            <div className='flex gap-3 items-center'>
              <i className="fa-solid fa-list text-red-500 text-[25px] cursor-pointer" onClick={handleList}></i>
              <i className="fa-solid fa-border-none text-blue-500 text-[25px] cursor-pointer" onClick={handleGrid}></i>
            </div>
          </div>
          <div className='flex p-4 justify-center items-center flex-col gap-6'>
            <div className="lg:hidden block">
              <SideCetagory addCategory={addCategory} active={active} />
            </div>
            <Swiper setswiper={setSwiper} />
          </div>
          <div className={`flex gap-2 p-4 flex-wrap justify-center items-center ${grid ? "flex-row" : "flex-col"}`}>
            {currentProducts.map((element) => <Card element={element} key={element.id} />)}
          </div>
        </div>
        <div className='w-full md:w-[25%] lg:w-[30%] flex flex-col items-center'>
          <Sideinput />
          <div className="hidden lg:block">
            <SideCetagory addCategory={addCategory} active={active} />
          </div>
          <Poplerpost />
        </div>
      </div>
    </div>
  )
}

export default Shop;
