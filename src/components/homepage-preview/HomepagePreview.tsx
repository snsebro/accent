import React from 'react'
import { Link } from 'react-router-dom'
import HomepagePreviewItem from '../homepage-preview-item/HomepagePreviewItem'
import './HomepagePreview.scss'

const HomepagePreview = () => {
  return (
    <div className='homepage-preview'>
      <h3 className='homepage-preview-message'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      </h3>
      <div className='homepage-preview-list'>
        <HomepagePreviewItem />
        <HomepagePreviewItem />
        <HomepagePreviewItem />
      </div>
      <div className='explore-section'>
        <h3>Explore Accent</h3>
        <div className='preview-links'>
          <Link to='/shop' className='preview-button'>Women</Link>
          <Link to='/shop' className='preview-button' id='middle-preview-button'>Men</Link>
          <Link to='/shop' className='preview-button'>Edit</Link>
        </div>
        <p>VISIT US IN PERSON. <a href='/'>STORE LOCATOR</a></p>
      </div>
    </div>
  )
}

export default HomepagePreview
