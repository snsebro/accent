import React from 'react'
import ShopHeader from '../../components/shop-header/ShopHeader'
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
    <>
      <ShopHeader />
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
        <div className='product-description-container'>
          <div className='product-description-elements'>
            <h3>PRODUCT NAME</h3>
            <p>PRICE</p>
            <label
              htmlFor='material-select' className='material-select-label'>
              Material
            </label>
            <select name='material-select' className='material-select'>
              <option value='silver'>Silver</option>
              <option value='gold'>Gold</option>
            </select>
            <button className='add-to-bag'>ADD TO BAG</button>
            <p className='product-description-text'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
              <br></br>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
