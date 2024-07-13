import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './About.css'

function About() {
  return (
    <div className='about-container'>
        <Navbar />
        <h1 className='about-heading'>About</h1>
        <div className='about-body'>
            This is about page Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit in sit amet quos provident maiores commodi, vitae, sed magni beatae nisi nam necessitatibus veritatis at, iste consectetur fuga architecto pariatur accusamus doloribus ratione? Fugiat minus rerum cupiditate magni fugit?
        </div>
    </div>
  )
}

export default About