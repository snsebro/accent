import React, { useRef } from 'react'
import { NavLink }  from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-left'>
        <NavLink to ='/' id='logo' className='nav-item'>ACCENT</NavLink>
        <NavLink to ='/shop' className='nav-item'>New Arrivals</NavLink>
        <NavLink to ='/shop' className='nav-item'>Women</NavLink>
        <NavLink to ='/shop' className='nav-item'>Men</NavLink>
      </div>
      <div className='nav-bar-right'>
        <NavLink to ='/' className='nav-item'>EDIT</NavLink>
        <NavLink to ='/login' className='nav-item'>SIGN IN</NavLink>
        <NavLink to ='/' className='nav-item'>HELP</NavLink>
        <NavLink to ='/' className='nav-item'>CART</NavLink>
      </div>
    </div>
  )
}

export default NavBar
