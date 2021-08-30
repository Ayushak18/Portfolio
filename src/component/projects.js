import '../styles/project.css';

function Projects() {
  return (
    <section className="projects">
      <h1 className="project-section-heading">Projects</h1>
      <div className="project">
        <div className="project-img">
          <img src="laptop.jpg" alt="Project" />
        </div>
        <div className="project-description">
          <h1>Blog Application</h1>
          <p>
            Created a client side blog application which fetches data from an
            api and displays content accordingly using ReactJS , API,
            JavaScript, HTML, CSS.
          </p>
          <a
            href="https://github.com/Ayushak18/Blog-Application "
            className="source-code"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
            Source Code
          </a>
          <a
            href="https://brave-panini-e9d918.netlify.app/"
            className="demo-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-play"></i>
            Demo Link
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img src="laptop.jpg" alt="Project" />
        </div>
        <div className="project-description">
          <h1>Github Battle Application </h1>
          <p>
            Created a github battle game application which sorts the most
            popular repos based on technology and displays content accordingly
            using ReactJS , API, JavaScript, HTML, CSS.
          </p>
          <a
            href="https://github.com/Ayushak18/Github-Battle"
            target="_blank"
            rel="noreferrer"
            className="source-code"
          >
            <i class="fab fa-github"></i>
            Source Code
          </a>
          <a
            href="https://trusting-visvesvaraya-6cc26d.netlify.app/"
            className="demo-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-play"></i>
            Demo Link
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img src="laptop.jpg" alt="Project" />
        </div>
        <div className="project-description">
          <h1>To Do Application</h1>
          <p>
            Created a To Do application in which we can add and delete to-do’s
            using HTML, CSS, JavaScript, also has local storage support
          </p>
          <a
            href="https://gitlab.com/aayushkamboj7/to-do-app"
            className="source-code"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
            Source Code
          </a>
          <a
            href="https://vigilant-dijkstra-c705e7.netlify.app/"
            className="demo-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-play"></i>
            Demo Link
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img src="laptop.jpg" alt="Project" />
        </div>
        <div className="project-description">
          <h1>Cleaning Company Clone</h1>
          <p>
            Created a static clone of a cleaning company which contains various
            pages using HTML, CSS.
          </p>
          <a
            href="https://github.com/Ayushak18/Buson-Coding_Challenge"
            className="source-code"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
            Source Code
          </a>
          <a
            href="https://ayushak18.github.io/Buson-Coding_Challenge/"
            className="demo-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-play"></i>
            Demo Link
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
