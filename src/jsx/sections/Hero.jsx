import ButtonPrimary from '../components/ButtonPrimary'

export default function Hero() {
  return (
      <section className="hero">
        <div className="container hero-container">

          {/* Content */}
          <div className="hero-content">
            <h1 className="hero-content-title">Nice to meet you!</h1>
            <p className="hero-content-text">
              My name is Nathan Soussana. I&apos;m a front-end developer based in Zürich, Switzlerand, passionate about building clean and beautiful web apps that users love. I focus mostly on React and JavaScript.
            </p>
            <ButtonPrimary 
              text="View Work" 
              link="#" 
            />
          </div>
          
          {/* Image */}
          <img 
            src="assets/profile_picture.jpeg" 
            alt="Profile Picture" 
            className="hero-image" 
          />
        </div>
      </section>
  )
}