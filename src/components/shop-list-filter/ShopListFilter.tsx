import React from 'react'
import './ShopListFilter.scss'

const ShopListFilter = () => {
  return (
    <div className='shop-list-filter'>
      <select className='shop-list-input' name='shop filter'>
        <option value=''>SORT BY</option>
        <option value='lowest'>Price Low - High</option>
        <option value='highest'>Price High - Low</option>
        <option value='newest'>Newest</option>
      </select>
    </div>
  )
}

export default ShopListFilter
