// import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

const NavbarIcon = () => {
    // const [open, setOpen] = React.useState(false)
  return (
      <div className='header'>
          <nav className='nav'>
                    <h1 className='portfolioHead'>My Portfolio</h1>
                        <ul className='nav-links'>
                            <li><Link to={"/"}>About</Link></li>
                            <li><Link to={"/skills"}>Skills</Link></li>
                            <li><Link to={"/projects"}>Projects</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                      <a href="./../../public/RAMRESUME.pdf" download="Balaram_Resume.pdf" className='download-btn'>Download Resume</a>
          </nav>
        </div>
    )
}

export default NavbarIcon
