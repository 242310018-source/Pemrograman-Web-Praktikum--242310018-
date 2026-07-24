import { useEffect, useState } from "react";
import axios from "axios";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <br />

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;