import ContactForm from '../components/EmailForm'
import { socialLinks } from '../../data/social'

const socials = socialLinks.map(social => (
  <li 
    className="social-icon-item"
    key={social.name}
  >
    <a 
      className="social-icon-item-link"
      href={social.link}
      target="_blank" 
    >
      <i className={social.icon}></i>
    </a>
  </li>
)
)

export default function Contact() {
  return (
    <footer>
      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="contact-content-title">
            Contact
          </h2>
          <p className="contact-content-text">
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role, preferrably in Zürich area. Feel free to check out my online profiles and send me an email using the form.
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