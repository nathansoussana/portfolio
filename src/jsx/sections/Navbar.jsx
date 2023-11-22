export default function Navbar() {
  return (
    <nav>
      
      {/* Logo */}
      <h3 className="navbar-logo">
        nathansoussana
      </h3>

      {/* Social Links */}
      <ul className="navbar-links">

        {/* GitHub */}
        <li className="navbar-links-li">
          <a 
            className="navbar-links-li-link"
            href="https://github.com/nathansoussana" 
            target="_blank" 
            rel="noopener noreferrer">
            <i className="devicon-github-original"></i>
          </a>
        </li>

        {/* Linkedin */}
        <li className="navbar-links-li">
          <a 
            className="navbar-links-li-link"
            href="https://www.linkedin.com/in/nathansoussana/" 
            target="_blank" 
            rel="noopener noreferrer">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}