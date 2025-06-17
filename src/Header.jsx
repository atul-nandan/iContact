import React from 'react'
import "./Header.css"

const Header = () => {
  return (

    <nav className="navbar">
      <ul className="nav-left">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="logo">
        iContact
      </div>

    </nav>
  )
}

export default Header
