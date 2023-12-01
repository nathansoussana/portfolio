import SocialIcon from '../components/SocialIcon'
import ContactForm from '../components/EmailForm'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-content">

          <h2 className="contact-content-title">
            Contact
          </h2>
          <p className="contact-content-text">
            I’d love to hear what you’re working on and how I could help.
            Please take a look at my online profiles and feel free to send me an email using the form.
          </p>

          <ul className="navbar-links">
            <SocialIcon 
              name="GitHub" 
              icon="devicon-github-original" 
              link="https://github.com/nathansoussana" 
            />
            <SocialIcon 
              name="LinkedIn" 
              icon="devicon-linkedin-plain" 
              link="https://www.linkedin.com/in/nathansoussana/" 
            />
          </ul>

        </div>

        <ContactForm />

      </div>
    </section>
  )
}