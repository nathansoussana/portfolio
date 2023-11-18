import Button from '../components/Button'

export default function Hero() {
  return (
    <div className="navbar-hero">
      <section className="hero">
        
        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-content-title">
          Nice to meet you!<br/>My name is Nathan Soussana.
          </h1>
          <p className="hero-content-text">
            Based in Zürich, Switzlerand, I&apos;m a front-end developer passionate about building beautiful web apps that users love.
          </p>
          <Button 
            text="Contact me" 
            link="mailto:nathan.soussana@gmail.com"
          />
        </div>

        {/* Image */}
        <img src="src/assets/photo_2.jpeg" alt="Profile Picture" className="hero-image" />
      </section>
    </div>
  )
}