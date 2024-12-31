import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className=''>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="items-prices">
            <div className="item-prices-new">
                ${props.new_price}
            </div>
            <div className="item-prices-old">
            ${props.old_price} 
            </div>
        </div>
    </div>
  )
}
