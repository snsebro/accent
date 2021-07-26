import React from 'react'
import ShopItem from '../shop-item/ShopItem'
import './ShopList.scss'

const ShopList = () => {

  const items = new Array(16)
  const shopItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    < div className='shop-list'>
      {shopItems.map(item => <ShopItem key={item}/>)}
    </div>
  )
}

export default ShopList
