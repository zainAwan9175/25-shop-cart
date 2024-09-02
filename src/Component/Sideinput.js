import React, { useState } from 'react'
import product from "./Product"
import { Link } from 'react-router-dom';

function Sideinput() {
    const [currentinput, setcurrentinput] = useState("")
    const [products, setproducts] = useState([])
    const [heigt, setheigt] = useState(false)
    function setinput(event) {
        let inp = "";
        inp = event.target.value
        console.log(inp)
        setcurrentinput(inp)
        const newproduct = product.filter((element) => {
            return element.name && element.name.toUpperCase().includes(inp.toUpperCase());


        })
        setheigt(true)
        setproducts(newproduct)
        if (inp.length === 0) {
            setproducts([])
            setheigt(false)
        }
    }

    return (
        <div className='   w-[300px]   '>
            <div className='flex'>

                <input className='p-2 rounded-tl-3xl rounded-bl-3xl' onChange={setinput} placeholder='search...'></input>
                <button className='bg-yellow-300 rounded-tr-3xl rounded-br-3xl'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className={`flex items-center gap-1 flex-col mt-3  ${heigt ? "h-[100vh] overflow-y-auto overflow-x-hidden " : "null"}`}>
                {
                    products.map((element) => {
                        return (<div className='flex justify-between bg-slate-100'>
                               <Link to={`/shop/${element.id}`}><img src={element.img} className='w-[100px] '></img></Link>


                            <p className=' w-[200px] text-center'>{element.name}</p>
                        </div>)
                    })
                }


            </div>




        </div>
    )
}

export default Sideinput
