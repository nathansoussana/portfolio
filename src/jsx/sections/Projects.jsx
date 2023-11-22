import { projectData } from '../../data/projects'
import ButtonSecondary from '../components/ButtonSecondary'

function contentDirection(index) {
  return (index % 2 === 0) ? "ltr" : "rtl"
}

const projects = projectData.map((project, index) => {
  return (
    <div 
      className="project" 
      key={project.title} 
      dir={((contentDirection(index)))}
    > 
    
      {/* Project Image */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="project-image" 
      />

      {/* Project Content */}
      <div 
        className="project-content" 
        dir='ltr'
      >
        <h3 className="project-content-title">
          {project.title}
        </h3>
        <p className="project-content-text">
          {project.description}
        </p>
        <p className="project-content-skills">
          {project.skills}
        </p>
        <div className="project-content-btn-container">
          <ButtonSecondary 
            text={project.websiteBtn} 
            link={project.websiteURL} 
          />
          <ButtonSecondary 
            text={project.githubBtn} 
            link={project.githubURL} 
          />
        </div>
      </div>
    </div>
  )
})

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-section-title">
        Projects
      </h2>
      <div className="projects-container">
        {projects}
      </div>
    </section>
  )
}