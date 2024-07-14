import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <a className='navbar-home-btn' href='/'>Home</a>
        <a className='navbar-about-btn'href='/about'>About</a>
    </div>
  )
}

export default Navbar