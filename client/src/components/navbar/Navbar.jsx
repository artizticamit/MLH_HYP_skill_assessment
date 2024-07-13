import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-home-btn'>
            <Link to={'/'}>Home</Link>
        </div>
        <div className='navbar-about-btn'>
            <Link to={'/about'}>About</Link>
        </div>
    </div>
  )
}

export default Navbar