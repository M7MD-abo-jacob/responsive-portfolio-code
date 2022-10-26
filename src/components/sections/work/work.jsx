import React, { useEffect, useState } from "react";
import projectsjson from "../../../assets/utils/projects.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Work = () => {
  let [projects, setProjects] = useState([]);

  const showProjects = () => {
    let x = [];
    projectsjson.forEach((project) => {
      x.push(
        <div className="box tilt" key={project.image}>
          <img
            draggable="false"
            src={require("../../../assets/img/" + project.image + ".jpg")}
            alt="project"
          />
          <div className="content">
            <div className="tag">
              <h3>{project.name}</h3>
            </div>
            <div className="desc">
              <p>{project.desc}</p>
              <div className="btns">
                <a
                  href={project.links.view}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-eye"></i> View
                </a>
                <a
                  href={project.links.code}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    setProjects(x);
  };
  useEffect(() => {
    showProjects(projectsjson);
  }, []);

  return (
    <section className="work" id="work">
      <AnimationOnScroll
        offset={100}
        duration={1}
        animateIn="animate__backInLeft"
      >
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        duration={1}
        animateIn="animate__backInLeft"
      >
        <div className="box-container">{projects && projects}</div>
      </AnimationOnScroll>
    </section>
  );
};

export default Work;
