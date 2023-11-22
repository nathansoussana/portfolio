import { socialLinks } from '../../data/social'

const socials = socialLinks.map(social => (
    <li className="navbar-links-li">
      <a 
        className="navbar-links-li-link"
        href={social.link}
        target="_blank" 
      >
        <i className={social.icon}></i>
      </a>
    </li>
  )
)

export default function Navbar() {
  return (
    <nav>
      
      {/* Logo */}
      <h3 className="navbar-logo">
        nathansoussana
      </h3>

      {/* Social Links */}
      <ul className="navbar-links">
        {socials}
      </ul>
    </nav>
  )
}