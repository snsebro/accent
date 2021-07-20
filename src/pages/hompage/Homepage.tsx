import React from 'react'
import HeroImage from '../../components/menu-item/HeroImage'
import NavBar from '../../components/nav-bar/NavBar'
import PromoBanner from '../../components/promo-banner/PromoBanner'
import './Homepage.scss'

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <PromoBanner />
      <NavBar />
      <HeroImage />
    </div>
  )
}

export default Homepage
