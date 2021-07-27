import React from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
    <div className='temp-container'>
      <div className='product-detail'>
        <div className='product-images'>
          <div className='product-detail-images'>
            <div className='detail-image'>SMALL IMAGE HERE</div>
            <div className='detail-image' id='middle-detail-image'>SMALL IMAGE HERE</div>
            <div className='detail-image'>SMALL IMAGE HERE</div>
          </div>
          <div className='product-spolight-images'>
            <div className='spotlight-image'>LARGE IMAGE HERE</div>
          </div>
        </div>
        <div className='product-info'></div>
      </div>
      <div className='product-description'>PRODUCT DESCRIPTION</div>
    </div>
  )
}

export default ProductDetail
