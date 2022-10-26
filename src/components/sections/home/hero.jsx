import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import me1 from "../../../assets/img/me1.jpg";
import ShootingStars from "./stars/shootingStars";

function Hero() {
  return (
    <section className="home" id="home">
      <ShootingStars />

      <div className="content">
        <AnimationOnScroll
          offset={100}
          duration={1}
          animateIn="animate__zoomInLeft"
        >
          <h2>
            Hi There, I'm
            <br /> Mohammad <span>Kikhia</span>
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll offset={0} duration={1} animateIn="animate__flipInX">
          <p>
            i am into &nbsp;
            <TypeAnimation
              className="typing-text"
              sequence={[
                "Web Development",
                2000,
                "Web Design",
                1000,
                "Problem Solving",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </p>
          <Link
            className="btn"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
          >
            <span>About Me </span>
            <i className="fas fa-arrow-circle-down"></i>
          </Link>
        </AnimationOnScroll>
        <AnimationOnScroll
          offset={100}
          duration={1}
          animateIn="animate__flipInX"
        >
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/mohammad-kikhia-a950595a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/M7MD-abo-jacob/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  className="telegram"
                  aria-label="Telegram"
                  href="https://t.me/M7MD_kikhia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  aria-label="Instagram"
                  href="https://www.instagram.com/m7md.abo_jacob/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="image">
        <AnimationOnScroll
          offset={0}
          duration={1}
          animateIn="animate__zoomInRight"
        >
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="imageId"
                patternUnits="userSpaceOnUse"
                width="1000"
                height="1000"
              >
                <image href={me1} x="0" y="0" width="1000" height="1000" />
              </pattern>

              <clipPath id="shape">
                <path
                  fill="currentColor"
                  d="M825.5,709.5Q742,919,498.5,922Q255,925,171.5,712.5Q88,500,179,300.5Q270,101,508.5,86.5Q747,72,828,286Q909,500,825.5,709.5Z"
                >
                  <animate
                    fill="currentColor"
                    attributeName="d"
                    dur="4s"
                    repeatCount="indefinite"
                    values="
                    M886.5,679Q786,858,600,867Q414,876,232.5,796Q51,716,103.5,525Q156,334,283.5,221Q411,108,576,153Q741,198,864,349Q987,500,886.5,679Z;
                    M813.5,653Q744,806,577.5,849Q411,892,296.5,772.5Q182,653,144,481.5Q106,310,259,212Q412,114,605,120Q798,126,840.5,313Q883,500,813.5,653Z;
                    M849.5,644.5Q731,789,561.5,881Q392,973,278,817.5Q164,662,112.5,475.5Q61,289,231,178Q401,67,577,125Q753,183,860.5,341.5Q968,500,849.5,644.5Z;
                    M894,692Q806,884,606,897Q406,910,243,806Q80,702,119,518.5Q158,335,286.5,232Q415,129,577.5,164Q740,199,861,349.5Q982,500,894,692Z
                    "
                  ></animate>
                </path>
              </clipPath>
            </defs>

            <g clipPath="url(#shape)">
              <path
                fill="url(#imageId)"
                d="M906,695.5Q812,891,600.5,939Q389,987,219.5,852Q50,717,50,500Q50,283,219.5,148Q389,13,600.5,61Q812,109,906,304.5Q1000,500,906,695.5Z"
              />
            </g>
          </svg>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Hero;
