import React from 'react'
import HomepagePreview from '../../components/homepage-preview/HomepagePreview'
import HeroImage from '../../components/menu-item/HeroImage'
import './Homepage.scss'

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroImage />
      <HomepagePreview />
    </div>
  )
}

export default Homepage
