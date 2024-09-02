import React, { useContext } from 'react';
import { ShopContext } from './Shopcontex';
import Pageheader from './Header/Pageheader';
import Caertotal from './Carttotal';

function Cart() {
    const { removetocart, cart, updateQuantity, total, calculatetotal } = useContext(ShopContext);

    return (


        <div className='flex flex-col gap-6 md:p-20 p-4' >
             <Pageheader title='Your Cart page' current="Cart pag" />
           
            <div className='hidden md:block '>

                <div className=' flex justify-center gap-2 flex-wrap border-b-4 border-black bg-slate-200 '>

                    <div className='w-[150px] flex justify-center items-center '>
                        <h5>product</h5>
                    </div>
                    <div className='flex gap-4 justify-between items-center p-4 w-[100vw] md:w-[60%] '>
                        <p className='font-bold'>Size</p>
                        <p className='font-bold'>Color</p>
                        <p className='font-bold'>Price</p>
                        <p className='font-bold'>Total</p>
                        <p className='font-bold'>Quantity</p>
                        <p className='font-bold'>Remove</p>
                    </div>
                </div>

            </div>

            {

                cart.map((item) => (
                    <div key={item.id} className='  flex justify-center gap-2 flex-wrap border-b-2 border-slate-500 bg-white shadow-2xl'>

                        <div className='w-[150px] '>
                            <img src={item.img} alt={item.name} className="w-[150px] h-[150px]" />
                            <p className='text-center font-bold'> {item.name}</p>
                        </div>
                        <div className='flex flex-wrap gap-4 justify-between items-center p-4 w-[100vw] md:w-[60%] '>
                            <div className='flex flex-col'>
                                <p className='font-bold'>Size</p>
                                <p >{item.s}</p>
                            </div>

                            <div className='flex flex-col'>


                                <p className='font-bold'>Color</p>
                                <p >{item.co}</p>
                            </div>

                            {/* <p className='font-bold'>{item.quantity}</p> */}
                            <div className='flex flex-col'>
                                <p className='font-bold'>Price</p>
                                <p >${item.price}</p>

                            </div>

                            <div className='flex flex-col'>
                                <p className='font-bold'>Total</p>
                                <p >${item.total}</p>
                            </div>

                            <div className='flex flex-col'>
                                <p className='font-bold'>Quantity</p>
                                <input value={item.quantity} type='number' min={1} placeholder={`${item.quantity}`} className='w-[50px]' onChange={(e) => updateQuantity(item.id, e.target.value)}></input>

                            </div>

                            <div className='flex flex-col'>
                                <p className='font-bold'>Remove</p>
                                <button onClick={() => removetocart(item.id)} className=' text-center text-[25px]'><i className="fa-solid fa-x  "></i></button>

                            </div>

                        </div>
                    </div>
                ))}

            <div >
                <Caertotal />
            </div>
        </div>
    );
}

export default Cart;
