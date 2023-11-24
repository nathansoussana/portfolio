import ContactForm from '../components/EmailForm'
import { socialLinks } from '../../data/social'

const socials = socialLinks.map(social => (
  <li 
    className="navbar-links-li"
    key={social.name}
  >
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

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-content-title">
            Contact
          </h2>
          <p className="footer-content-text">
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role, preferrably in a company in Zürich area. Please do feel free to check out my online profiles get in touch using the form.
          </p>
          <ul className="navbar-links">
            {socials}
          </ul>
        </div>
        <ContactForm />
      </div>
    </footer>
  )
}