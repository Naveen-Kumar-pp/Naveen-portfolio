import "./Projects.css";

const projects = [
  {
    title: "Weather App",
    image: "/weather.webp",
    alt: "Weather App project",
    description:
      "Real-time weather dashboard using OpenWeatherMap API.",
    tags: ["React", "API"],
    live: "#",
    github: "#",
  },

  {
    title: "TODO App",
    image: "/todo.png",
    alt: "TODO App project",
    description:
      "A simple task management application built with React.",
    tags: ["React", "JavaScript"],
    live: "#",
    github: "#",
  },

  {
    title: "Habit Hero App",
    image: "/habit hero logo 1.jpeg",
    alt: "Habit Hero project",
    description:
      "A gamified habit and goal tracking application.",
    tags: ["React", "JavaScript"],
    live: "#",
    github: "#",
  },

  {
    title: "Video Editor App",
    image: "/hero assignmen.jpeg",
    alt: "Video Editor App project",
    description:
      "A web-based video editing application.",
    tags: ["React", "JavaScript"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <h2>My Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >
            <img
              src={project.image}
              alt={project.alt}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">

                {project.tags.map((tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  className="btn btn-primary"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="btn btn-secondary"
                >
                  GitHub
                </a>

              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}

export default Projects;