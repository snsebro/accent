import React from 'react'
import HomepagePreviewItem from '../homepage-preview-item/HomepagePreviewItem'
import './HomepagePreview.scss'

const HomepagePreview = () => {
  return (
    <div className="homepage-preview">
      <h3 className="homepage-preview-message">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      </h3>
      <div className="homepage-preview-list">
        <HomepagePreviewItem />
        <HomepagePreviewItem />
        <HomepagePreviewItem />
      </div>
      <div>
        <h3>Explore Accent</h3>
        <button>Women</button>
        <button>Men</button>
        <button>Edit</button>
        <p>VISIT US IN PERSON. <a href="/">STORE LOCATOR</a></p>
      </div>
    </div>
  )
}

export default HomepagePreview
