import React from 'react';
import Rating from "../Rating/Rating";
import { Link } from 'react-router-dom';


function Card({ element }) {
  return (
    <div className='w-[250px]'>
      <div>
        <Link to={`/shop/${element.id}`}>
          <img src={element.img} className='w-[250px] h-[250px]' alt={element.name} />
        </Link>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-center'>{element.name}</p>
          <Rating />
          <p>${element.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
