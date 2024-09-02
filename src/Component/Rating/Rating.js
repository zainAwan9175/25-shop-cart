import React from 'react'

function Rating({color}) {
  return (
    <div >
      <i  className={`fa-solid fa-star ${color}`}></i>
      <i  className={`fa-solid fa-star ${color}`}></i>
      <i  className={`fa-solid fa-star ${color}`}></i>
      <i  className={`fa-solid fa-star ${color}`}></i>
      <i  className={`fa-solid fa-star ${color}`}></i>
    
    </div>
  )
}

export default Rating
