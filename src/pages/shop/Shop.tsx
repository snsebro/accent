import React from 'react'
import ShopHeader from '../../components/shop-header/ShopHeader'
import ShopListFilter from '../../components/shop-list-filter/ShopListFilter'
import ShopList from '../../components/shop-list/ShopList'
import './Shop.scss'

const Shop = () => {
  return (
    <div className='shop'>
      <ShopHeader />
      <ShopListFilter />
      <ShopList />
    </div>
  )
}

export default Shop
