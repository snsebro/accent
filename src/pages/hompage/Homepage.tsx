import React from 'react'
import HomepagePreview from '../../components/homepage-preview/HomepagePreview'
import HeroImage from '../../components/menu-item/HeroImage'
import NavBar from '../../components/nav-bar/NavBar'
import PromoBanner from '../../components/promo-banner/PromoBanner'
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
