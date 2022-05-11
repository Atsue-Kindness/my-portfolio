import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="projects__texts">
          <h3 id="projects">Latest Projects</h3>
          <p>Click each project to view</p>
        </div>

        <div className="projects__boxes">
          <a
            href="https://magenta-crisp-7e8c04.netlify.app/#"
            target={"_blank"}
          >
            <div className="projects__boxes__1 projects__boxes__one"></div>
          </a>

          <a href="https://fervent-yalow-a98e75.netlify.app/" target={"_blank"}>
            <div className="projects__boxes__1 projects__boxes__two"></div>
          </a>

          <a href="https://tradexpress.vercel.app/" target={"_blank"}>
            <div className="projects__boxes__1 projects__boxes__three"></div>
          </a>
        </div>

        <div className="u__margin__top">
          <div className="projects__boxes">
            <a
              href="https://celadon-melba-c1bbac.netlify.app/"
              target={"_blank"}
            >
              <div className="projects__boxes__1 projects__boxes__four"></div>
            </a>
            <a
              href="https://elated-hoover-21b002.netlify.app/index.html"
              target={"_blank"}
            >
              <div className="projects__boxes__1 projects__boxes__five"></div>
            </a>
            <a
              href="https://calm-youtiao-b357d9.netlify.app/"
              target={"_blank"}
            >
              <div className="projects__boxes__1 projects__boxes__six"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
