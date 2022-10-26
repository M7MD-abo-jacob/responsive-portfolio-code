import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Mohammad's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. 🚀
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <Link to="home" spy={true} smooth={true} offset={-60} duration={400}>
            <i className="fas fa-chevron-circle-right"></i> Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-60} duration={400}>
            <i className="fas fa-chevron-circle-right"></i> About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
          >
            <i className="fas fa-chevron-circle-right"></i> Skills
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-60} duration={400}>
            <i className="fas fa-chevron-circle-right"></i> Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
          >
            <i className="fas fa-chevron-circle-right"></i> Contact
          </Link>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p>
            <i className="fas fa-phone"></i>+963938912156
          </p>
          <p>
            <i className="fas fa-envelope"></i>m7md.master1@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i>Latakia, Syria
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/mohammad-kikhia-a950595a/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/M7MD-abo-jacob/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:m7md.master1@gmail.com"
              aria-label="Mail"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://t.me/M7MD_kikhia"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://www.instagram.com/m7md.abo_jacob/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Made with <i className="fa fa-heart pulse"></i> by&nbsp;
        <a href="https://www.github.com/M7MD-abo-jacob/">Mohammad Kikhia</a>
      </h1>
    </section>
  );
};

export default Footer;
