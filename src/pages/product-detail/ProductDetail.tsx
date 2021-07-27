import React from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
    <div className='product-detail'>
      <div className='product-images'>
        <div className='product-detail-images'>
          <div className='detail-image'>SMALL IMAGE HERE</div>
          <div className='detail-image'>SMALL IMAGE HERE</div>
          <div className='detail-image'>SMALL IMAGE HERE</div>
        </div>
        <div className='product-image-large'>
          <div className='product-image-main'>LARGE IMAGE HERE</div>
        </div>
      </div>
      <div className='product-info'></div>
    </div>
  )
}

export default ProductDetail
