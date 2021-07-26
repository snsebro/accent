import React from 'react'
import ShopHeader from '../../components/shop-header/ShopHeader'
import ShopList from '../../components/shop-list/ShopList'
import './Shop.scss'

const Shop = () => {
  return (
    <div className='shop'>
      <ShopHeader />
      <ShopList />
    </div>
  )
}

export default Shop
