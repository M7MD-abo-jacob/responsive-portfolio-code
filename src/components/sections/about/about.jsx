import React from "react";
import me2 from "../../../assets/img/me2.jpg";
import myResume from "../../../assets/utils/mohammad_kikhia.docx";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <section className="about" id="about">
      <AnimationOnScroll
        offset={100}
        duration={1}
        animateIn="animate__backInLeft"
      >
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>
      </AnimationOnScroll>
      <div className="row">
        <AnimationOnScroll
          offset={100}
          duration={1}
          animateIn="animate__bounceInLeft"
        >
          <div className="image">
            <img draggable="false" className="tilt" src={me2} alt="" />
          </div>
        </AnimationOnScroll>
        <div className="content">
          <AnimationOnScroll
            offset={100}
            duration={1}
            animateIn="animate__bounceInLeft"
          >
            <h3>I'm Mohammad</h3>
          </AnimationOnScroll>
          <span className="tag">React Frontend Developer</span>
          <AnimationOnScroll
            offset={100}
            duration={1}
            animateIn="animate__fadeInDown"
          >
            <p>
              Passionate fronted developer with 2 years of experience with
              personal projects, getting precious feedback from friends and
              followers, and using it to polish the looks and functionality of
              my projects. Constantly looking to improve and embrace modern
              technologies and design principles.
            </p>
          </AnimationOnScroll>

          <div className="box-container"></div>

          <AnimationOnScroll
            offset={100}
            duration={1}
            animateIn="animate__fadeInDown"
          >
            <div className="resumebtn">
              <a
                href={myResume}
                download={myResume}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
