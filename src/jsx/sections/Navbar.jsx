import Hamburger from '../components/Hamburger'

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="#" className="navbar-logo-link">
          <h3 className="navbar-logo">nathansoussana</h3>
        </a>
        <ul className="navbar-link-list">
          <a href="#" className="navbar-item-link">
            <li className="navbar-list-item">Home</li>
          </a>
          <a href="#skills" className="navbar-item-link">
            <li className="navbar-list-item">Skills</li>
          </a>
          <a href="#work" className="navbar-item-link">
            <li className="navbar-list-item">Work</li>
          </a>
          <a href="#contact" className="navbar-item-link">
            <li className="navbar-list-item">Contact</li>
          </a>
        </ul>
        <Hamburger />
      </div>
    </nav>
  )
}