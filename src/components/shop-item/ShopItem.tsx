import React from 'react'
import './ShopItem.scss'

const ShopItem = () => {
  return (
    <div className='shop-item'>
      <div className='shop-item-image'>PRODUCT IMAGE</div>
      <a href='shop/1' className='item-name'>PRODUCT NAME</a>
      <p className='item-price'>PRICE</p>
    </div>
  )
}
export default ShopItem
