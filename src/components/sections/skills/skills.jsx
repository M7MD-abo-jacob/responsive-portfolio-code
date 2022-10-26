import React, { useEffect, useState } from "react";
import skilljson from "../../../assets/utils/skills.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Skills() {
  let [skills, setSkills] = useState([]);

  const showSkills = () => {
    let x = [];
    skilljson.forEach((skill) => {
      x.push(
        <div className="bar" key={skill.name}>
          <div className="info">
            <img src={skill.icon} alt="skill" />
            <span>{skill.name}</span>
          </div>
        </div>
      );
    });
    setSkills(x);
  };
  useEffect(() => {
    showSkills(skilljson);
  }, []);

  return (
    <section className="skills" id="skills">
      <AnimationOnScroll
        offset={100}
        duration={1}
        animateIn="animate__backInLeft"
      >
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>
      </AnimationOnScroll>
      <div className="container">
        <AnimationOnScroll
          offset={100}
          duration={1}
          animateIn="animate__fadeInDown"
        >
          <div className="row" id="skillsContainer">
            {skills && skills}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Skills;
