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
            {/* <img 
              className="navbar-links-li-icon" 
              src="src/assets/github.png"
            /> */}
            <i class="devicon-github-original"></i>
          </a>
        </li>

        {/* Linkedin */}
        <li className="navbar-links-li">
          <a 
            className="navbar-links-li-link"
            href="https://www.linkedin.com/in/nathansoussana/" 
            target="_blank" 
            rel="noopener noreferrer">
            {/* <img 
              className="navbar-links-li-icon" 
              src="src/assets/linkedin.png"
            /> */}
            <i class="devicon-linkedin-plain"></i>
          </a>
        </li>

        {/* Email
        <li className="navbar-links-li">
          <a 
            className="navbar-links-li-link"
            href="mailto:nathan.soussana@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer">
            <img 
              className="navbar-links-li-icon" 
              src="src/assets/email.png"
            />
          </a>
        </li> */}

      </ul>
    </nav>
  )
}