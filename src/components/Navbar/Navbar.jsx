import React from 'react'
import "./Navbar.css"
import Menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import Search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import Notifiction_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"


const Navbarone = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setsidebar(prev=> prev===false?true:false)}  src={Menu_icon} alt="menu-icon" />
        <img className='logo' src={logo} alt="logo" />
      </div>

      <div className="nav-middle flex-div ">

        <div className='search-box flex-div'>
          <input type="text" placeholder='Search' />
          <img src={Search_icon} alt="search-icon" />
        </div>

      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={Notifiction_icon} alt="" />
        <img src={profile_icon} alt="" />
      </div>

    </nav>
  )
}

export default Navbarone
