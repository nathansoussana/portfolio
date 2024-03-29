import ButtonPrimary from '../components/ButtonPrimary'

export default function Hero() {
  return (
      <section className="hero-section" id="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-content-title">
              Hi! I&apos;m Nathan, a Front-End Developer.
            </h1>
            <p className="hero-content-text">
              Based in Zürich, Switzerland, I&apos;m passionate about building 
              beautiful web experiences with React and JavaScript.
            </p>
            <ButtonPrimary text="View Work" link="#work" />
          </div>
          <img 
            src="assets/profile_picture.webp" alt="Profile Picture" 
            className="hero-image" width="100%" height="auto"
          />
        </div>
      </section>
  )
}