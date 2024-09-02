import React from 'react';

function SideCetagory({ addCategory, active }) {
  console.log(active)
  return (
    <div className='flex justify-center flex-wrap gap-3 w-[300px]'>
      <div className={`p-1 cursor-pointer ${active === "All" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("All") }}>All</div>
      <div className={`p-1 cursor-pointer ${active === "Men's Sneaker" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Men's Sneaker") }}>Men's Sneaker</div>
      <div className={`p-1 cursor-pointer ${active === "Bag" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Bag") }}>Bag</div>
      <div className={`p-1 cursor-pointer ${active === "Cap" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Cap") }}>Cap</div>
      <div className={`p-1 cursor-pointer ${active === "Earphones" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Earphones") }}>Earphones</div>
      <div className={`p-1 cursor-pointer ${active === "Bottle" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Bottle") }}>Bottle</div>
      <div className={`p-1 cursor-pointer ${active === "Men's Boot" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Men's Boot") }}>Men's Boot</div>
      <div className={`p-1 cursor-pointer ${active === "Men's Pants" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Men's Pants") }}>Men's Pants</div>
      <div className={`p-1 cursor-pointer ${active === "Men's Tee" ? "bg-yellow-300" : ""}`} onClick={() => { addCategory("Men's Tee") }}>Men's Tee</div>
    </div>
  );
}

export default SideCetagory;
