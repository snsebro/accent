import React from 'react'
import HeroImage from '../../components/menu-item/HeroImage'
import PromoBanner from '../../components/promo-banner/PromoBanner'
import './Homepage.scss'

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <PromoBanner />
      <HeroImage />
    </div>
  )
}

export default Homepage
