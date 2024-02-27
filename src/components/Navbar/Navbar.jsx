import React from 'react'
import "./Navbar.css"
import Menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import Search_icon from "../../assets/search.png"
const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={Menu_icon} alt="menu-icon" />
        <img className='logo' src={logo} alt="logo" />
      </div>

      <div className="nav-middle flex-div ">
        <input type="text" placeholder='Search' />
        <img src={Search_icon} alt="search-icon" />
      </div>

    </nav>
  )
}

export default Navbar
