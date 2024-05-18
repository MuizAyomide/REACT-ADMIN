import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to='/' className='listItem'>
        <img src="home.svg" alt="" />
        <span className='listitemTitle'>Home</span>
        </Link>
        <Link to='/' className='listItem'>
        <img src="profile.svg" alt="" />
        <span className='listitemTitle'>Profile</span>
        </Link>
      </div>
      <div className="item">
      <span className="title">MAIN</span>
        <Link to='/' className='listItem'>
        <img src="home.svg" alt="" />
        <span className='listitemTitle'>Home</span>
        </Link>
        <Link to='/' className='listItem'>
        <img src="profile.svg" alt="" />
        <span className='listitemTitle'>Home</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Menu
