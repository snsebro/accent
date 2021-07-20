import React from 'react'
import HeroCta from '../hero-cta/HeroCta'
import './HeroImage.scss'

const HeroImage: React.FC = () => {
  return (
    <div className="hero-container">
      <HeroCta />
      <div className="hero-image-1"/>
      <div className="hero-image-2"/>
    </div>
  )
}
export default HeroImage
