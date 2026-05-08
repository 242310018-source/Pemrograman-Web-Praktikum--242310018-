function Project() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>accuracy</h3>
          <p>Provide dynamic visual instructions (such as “Move your
             face closer” or “Light less”) to ensure the AI ​​gets quality image input.</p>
        </div>

        <div className="project-card">
          <h3>challenge</h3>
          <p>Design an interface that can guide users to scan their
             faces in the correct position and minimize system errors.</p>
        </div>

        <div className="project-card">
          <h3>IT Style</h3>
          <p>Integrate loading indicators and fast system response
             during the process of synchronizing facial data to the server database.</p>
        </div>
      </div>
    </section>
  )
}

export default Project