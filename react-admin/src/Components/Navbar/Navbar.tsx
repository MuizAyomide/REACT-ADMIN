import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>muizadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" /><span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>Muiz</span>
        </div>

        <img src="settings.svg" alt="" className="icon" />

      </div>
    </div>
  )
}

export default Navbar
