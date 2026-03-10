import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import Logotype from '../assets/logotype.png'


function Navbar() {
  return (
    <div className="navbar">
        <header className="leftSide">
          <Link to="/" className="logo">
            <img src={Logotype}/>
          </Link>
        </header>


        <nav className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            {/* <button>
              <ReorderIcon/>
            </button> */}
        </nav>
    </div>
  )
}


export default Navbar;