import ButtonPrimary from '../components/ButtonPrimary'
import { skillsData } from '../../data/skills'

const skills = skillsData.map(skill => {
  return <li className="hero-content-skills-skill">{skill.name}</li>
})

export default function Hero() {
  return (
      <section className="hero">
        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-content-title">
            Nice to meet you!<br/>My name is Nathan Soussana.
          </h1>
          <p className="hero-content-text">
            Based in Zürich, Switzlerand, I&apos;m a front-end developer passionate about building beautiful web apps that users love.
          </p>
          <ul className="hero-content-skills">{skills}</ul>
          <ButtonPrimary text="Contact me" link="mailto:nathan.soussana@gmail.com" />
        </div>
        {/* Image */}
        <img src="src/assets/photo_2.jpeg" alt="Profile Picture" className="hero-image" />
      </section>
  )
}