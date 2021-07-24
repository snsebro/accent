import React from 'react'
import HomepagePreviewItem from '../homepage-preview-item/HomepagePreviewItem'
import './Homepage.scss'

const HomepagePreview = () => {
  return (
    <div className="homepage-preview">
      <h3 className="homepage-preview-message"></h3>
      <div className="homepage-preview-list">
        <HomepagePreviewItem />
      </div>
    </div>
  )
}

export default HomepagePreview
