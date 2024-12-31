import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react';


export const ShopCategories = (props) => {
  const {all_product} = useContext(ShopContext);
  return(
    <div className='shop-categories'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategories