import Hamburger from '../components/Hamburger'
import NavLink from '../components/NavLink'

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-container">

        <a href="#" className="navbar-logo-link">
          <h3 className="navbar-logo">nathansoussana</h3>
        </a>

        <ul className="navbar-link-list">
          <NavLink title="Home" link="#" />
          <NavLink title="Skills" link="#skills" />
          <NavLink title="Work" link="#work" />
          <NavLink title="Contact" link="#contact" />
        </ul>

        <Hamburger />
        
      </div>
    </nav>
  )
}