import { useState, useEffect } from 'react'
import Hamburger from '../components/Hamburger'
import NavLink from '../components/NavLink'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const navbarLinkList = document.querySelector('.navbar-link-list')
    navbarLinkList.style.display = openMenu ? 'flex' : 'none'
  }, 
    [openMenu]
  )

  function handleClick() {
    setOpenMenu(openMenu => !openMenu)
  }

  return (
    <nav>
      <div className="container nav-container">

        <a href="#" className="navbar-logo-link">
          <h3 className="navbar-logo">nathansoussana</h3>
        </a>

        <ul className="navbar-link-list">
          <NavLink title="Home" link="#" onClick={handleClick} />
          <NavLink title="Skills" link="#skills" onClick={handleClick} />
          <NavLink title="Work" link="#work" onClick={handleClick} />
          <NavLink title="Contact" link="#contact" onClick={handleClick} />
        </ul>

        <Hamburger onClick={handleClick} />
        
      </div>
    </nav>
  )
}