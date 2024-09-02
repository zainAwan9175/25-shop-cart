import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './Shopcontex';
import "./Carttotal.css"
function Caertotal() {
  const { calculatetotal } = useContext(ShopContext);
  return (

    <div className='cartotal bg-white shadow-2xl  p-4'>
      <h3>CART TOTAL</h3>
      <div className='sub'>
        <p>Sub Total</p>
        <p>${calculatetotal()}</p>

      </div>
      <div className='sub'>
        <p>Shiping Free</p>
        <p>Free</p>

      </div>
      <div className='sub'>
        <h4>Total</h4>
        <h4>${calculatetotal()}</h4>

      </div>
      <button className='order'>ORDER NOW</button>


    </div>
  )
}

export default Caertotal
